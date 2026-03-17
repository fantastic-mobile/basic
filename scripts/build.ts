#!/usr/bin/env node

import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import * as p from '@clack/prompts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

let childProcess: ReturnType<typeof spawn> | null = null

process.on('SIGINT', () => {
  if (childProcess) {
    childProcess.kill('SIGINT')
  }
})

interface AppInfo {
  name: string
  packageName: string
  description: string
}

function getApps(): AppInfo[] {
  const apps: AppInfo[] = []

  // Scan apps directory (subdirectories)
  const appsDir = path.resolve(rootDir, 'apps')
  if (fs.existsSync(appsDir)) {
    const entries = fs.readdirSync(appsDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const packageJsonPath = path.join(appsDir, entry.name, 'package.json')
        if (fs.existsSync(packageJsonPath)) {
          const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
          if (pkg.scripts?.build) {
            apps.push({
              name: entry.name,
              packageName: pkg.name,
              description: pkg.description || '',
            })
          }
        }
      }
    }
  }

  return apps
}

async function runBuild(packageName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    childProcess = spawn('pnpm', ['--filter', packageName, 'run', 'build'], {
      stdio: 'inherit',
      cwd: rootDir,
    })

    childProcess.on('close', (code) => {
      childProcess = null
      if (code === 0 || code === null) {
        resolve()
      }
      else {
        reject(new Error(`Process exited with code ${code}`))
      }
    })

    childProcess.on('error', (err) => {
      childProcess = null
      reject(err)
    })
  })
}

async function main() {
  p.intro('Select apps to build')

  const apps = getApps()

  if (apps.length === 0) {
    p.log.error('No apps found with build script')
    process.exit(1)
  }

  if (apps.length === 1) {
    p.log.info(`Only one app found: ${apps[0].name}`)
    await runBuild(apps[0].packageName)
    p.outro('Build complete!')
    return
  }

  const choices = apps.map(app => ({
    value: app.packageName,
    label: app.name,
    hint: app.description,
  }))

  const selected = await p.multiselect({
    message: 'Which apps do you want to build?',
    options: choices,
    required: true,
  })

  if (p.isCancel(selected)) {
    p.cancel('Operation cancelled')
    process.exit(0)
  }

  const selectedApps = selected as string[]

  p.log.info(`Building ${selectedApps.length} app(s)...`)

  for (const app of selectedApps) {
    p.log.info(`Building ${app}...`)
    await runBuild(app)
  }

  p.outro('Build complete!')
}

main().catch((err) => {
  p.log.error(err.message)
  process.exit(1)
})
