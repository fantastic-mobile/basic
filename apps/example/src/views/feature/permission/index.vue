<script setup lang="ts">
import { showNotify } from 'vant'

definePage({
  meta: {
    title: '权限验证',
    auth: true,
  },
})

const router = useRouter()

const appSettingsStore = useAppSettingsStore()
const appAuthStore = useAppAuthStore()

const { auth, authAll } = useAppAuth()

// 模拟账号切换
async function accountChange(val: any) {
  await appAuthStore.login({
    account: val,
    password: '',
  })
  await appAuthStore.getPermissions()
}
function goTest() {
  router.push({
    path: '/feature/permission/test',
  })
}
function permissionCheck(permissions: string | string[]) {
  if (auth(permissions)) {
    showNotify({ type: 'success', message: '校验通过' })
  }
  else {
    showNotify({ type: 'danger', message: '校验不通过' })
  }
}
function permissionCheck2(permissions: string[]) {
  if (authAll(permissions)) {
    showNotify({ type: 'success', message: '校验通过' })
  }
  else {
    showNotify({ type: 'danger', message: '校验不通过' })
  }
}
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div class="p-4 flex flex-col gap-4">
      <FmPageMain v-if="!appSettingsStore.settings.app.auth" class="m-0">
        请到 settings.ts 里设置并开启权限功能，再进入该页面查看演示
      </FmPageMain>
      <FmPageMain v-else title="切换账号" class="m-0">
        <div class="space-y-2">
          <div class="space-x-2">
            <FmButton
              v-for="(item, index) in [
                { label: 'admin', value: 'admin' },
                { label: 'test', value: 'test' },
                { label: 'hooray(无权限)', value: 'hooray' },
              ]" :key="index" :variant="appAuthStore.account === item.value ? 'default' : 'outline'" @click="accountChange(item.value)"
            >
              {{ item.label }}
            </FmButton>
          </div>
          <div>当前账号权限：{{ appAuthStore.permissions }}</div>
        </div>
      </FmPageMain>
      <FmPageMain v-if="appSettingsStore.settings.app.auth" title="路由鉴权" class="m-0">
        <FmButton @click="goTest">
          跳转页面
        </FmButton>
      </FmPageMain>
      <FmPageMain v-if="appSettingsStore.settings.app.auth" title="鉴权指令" class="m-0">
        <div class="flex-col-start space-y-2">
          <div v-auth="'permission.browse'">
            如果你有 permission.browse 权限则能看到这句话
          </div>
          <div v-auth="'permission.create'">
            如果你有 permission.create 权限则能看到这句话
          </div>
          <div v-auth="['permission.browse', 'permission.create']">
            如果你有 permission.browse 或 permission.create 权限则能看到这句话
          </div>
          <div v-auth.all="['permission.browse', 'permission.create']">
            如果你有 permission.browse 和 permission.create 权限则能看到这句话
          </div>
        </div>
      </FmPageMain>
      <FmPageMain v-if="appSettingsStore.settings.app.auth" title="鉴权组件" class="m-0">
        <div class="text-sm space-y-2">
          <div>
            你
            <AppAuth value="permission.browse">
              <b>有</b>
              <template #no-auth>
                <b>没有</b>
              </template>
            </AppAuth>
            permission.browse 权限
          </div>
          <div>
            你
            <AppAuth value="permission.create">
              <b>有</b>
              <template #no-auth>
                <b>没有</b>
              </template>
            </AppAuth>
            permission.create 权限
          </div>
          <div>
            你
            <AppAuth :value="['permission.browse', 'permission.create']">
              <b>有</b>
              <template #no-auth>
                <b>没有</b>
              </template>
            </AppAuth>
            permission.browse 或 permission.create 权限
          </div>
          <div>
            你
            <AppAuth :value="['permission.browse', 'permission.create']" all>
              <b>有</b>
              <template #no-auth>
                <b>没有</b>
              </template>
            </AppAuth>
            permission.browse 和 permission.create 权限
          </div>
        </div>
      </FmPageMain>
      <FmPageMain v-if="appSettingsStore.settings.app.auth" title="鉴权函数" class="m-0" main-class="flex flex-col gap-2">
        <FmButton variant="outline" @click="permissionCheck('permission.browse')">
          校验 browse 权限
        </FmButton>
        <FmButton variant="outline" @click="permissionCheck('permission.create')">
          校验 create 权限
        </FmButton>
        <FmButton variant="outline" @click="permissionCheck(['permission.browse', 'permission.create'])">
          校验 browse 或 create 权限
        </FmButton>
        <FmButton variant="outline" @click="permissionCheck2(['permission.browse', 'permission.create'])">
          校验 browse 和 create 权限
        </FmButton>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
