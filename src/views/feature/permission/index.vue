<script setup lang="ts">
import { showNotify } from 'vant'
import useUserStore from '@/store/modules/user'

definePage({
  meta: {
    title: '权限验证',
    auth: true,
  },
})

const router = useRouter()

const userStore = useUserStore()

const { auth, authAll } = useAuth()

// 模拟账号切换
async function accountChange(val: any) {
  await userStore.login({
    account: val,
    password: '',
  })
  await userStore.getPermissions()
  router.push('/reload')
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
  <PageLayout navbar>
    <PageMain>
      <h3>切换帐号</h3>
      <HTabList
        v-model="userStore.account" :options="[
          { label: 'admin', value: 'admin' },
          { label: 'test', value: 'test' },
          { label: 'hooray(无权限)', value: 'hooray' },
        ]" @change="accountChange"
      />
      <h3>帐号权限</h3>
      <div>{{ userStore.permissions }}</div>
      <h3>访问鉴权页面</h3>
      <div>
        <VanButton @click="goTest">
          点击访问
        </VanButton>
      </div>
      <h3>鉴权组件（请对照代码查看）</h3>
      <div>
        <Auth value="permission.browse" style="margin-bottom: 10px;">
          <VanTag type="primary">
            你有 permission.browse 权限
          </VanTag>
          <template #no-auth>
            <VanTag type="danger">
              你没有 permission.browse 权限
            </VanTag>
          </template>
        </Auth>
        <Auth value="permission.create" style="margin-bottom: 10px;">
          <VanTag type="primary">
            你有 permission.create 权限
          </VanTag>
          <template #no-auth>
            <VanTag type="danger">
              你没有 permission.create 权限
            </VanTag>
          </template>
        </Auth>
        <Auth :value="['permission.browse', 'permission.create']" style="margin-bottom: 10px;">
          <VanTag type="primary">
            你有 permission.browse 或 permission.create 权限
          </VanTag>
          <template #no-auth>
            <VanTag type="danger">
              你没有 permission.browse 或 permission.create 权限
            </VanTag>
          </template>
        </Auth>
        <AuthAll :value="['permission.browse', 'permission.create']">
          <VanTag type="primary">
            你有 permission.browse 和 permission.create 权限
          </VanTag>
          <template #no-auth>
            <VanTag type="danger">
              你没有 permission.browse 和 permission.create 权限
            </VanTag>
          </template>
        </AuthAll>
      </div>
      <h3>鉴权指令（请对照代码查看）</h3>
      <div class="flex flex-col gap-2">
        <div v-auth="'permission.browse'">
          如果你有 permission.browse 权限则能看到这句话
        </div>
        <div v-auth="'permission.create'">
          如果你有 permission.create 权限则能看到这句话
        </div>
        <div v-auth="['permission.browse', 'permission.create']">
          如果你有 permission.browse 或 permission.create 权限则能看到这句话
        </div>
        <div v-auth-all="['permission.browse', 'permission.create']">
          如果你有 permission.browse 和 permission.create 权限则能看到这句话
        </div>
      </div>
      <h3>鉴权函数（请对照代码查看）</h3>
      <div>
        <div class="flex flex-col gap-2">
          <div>
            <VanButton size="small" @click="permissionCheck('permission.browse')">
              校验 permission.browse 权限
            </VanButton>
          </div>
          <div>
            <VanButton size="small" @click="permissionCheck('permission.create')">
              校验 permission.create 权限
            </VanButton>
          </div>
          <div>
            <VanButton size="small" @click="permissionCheck(['permission.browse', 'permission.create'])">
              校验 permission.browse 或 permission.create 权限
            </VanButton>
          </div>
          <div>
            <VanButton size="small" @click="permissionCheck2(['permission.browse', 'permission.create'])">
              校验 permission.browse 和 permission.create 权限
            </VanButton>
          </div>
        </div>
      </div>
    </PageMain>
  </PageLayout>
</template>
