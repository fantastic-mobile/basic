<script setup lang="ts">
import { toast } from 'vue-sonner'

definePage({
  meta: {
    title: '轻提示',
  },
})

function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      toast.promise(() => new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }), {
        loading: '加载中',
        success: () => '加载成功',
        error: () => '加载失败',
        position: 'top-right',
        duration: 3000,
      })
    }
    else if (type === 'loading2') {
      const loading = toast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        toast.dismiss(loading)
        toast('Fantastic-mobile 自成一派的 H5 框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else {
      toast[type]('Fantastic-mobile 自成一派的 H5 框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    toast('Fantastic-mobile 自成一派的 H5 框架', {
      description: '开箱即用，提供舒适开发体验',
      position: 'top-right',
      duration: 3000,
    })
  }
}
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex flex-col gap-2">
        <FmButton @click="showToast()">
          默认
        </FmButton>
        <FmButton @click="showToast('success')">
          成功
        </FmButton>
        <FmButton @click="showToast('error')">
          错误
        </FmButton>
        <FmButton @click="showToast('info')">
          信息
        </FmButton>
        <FmButton @click="showToast('warning')">
          警告
        </FmButton>
        <FmButton @click="showToast('loading1')">
          加载中 1
        </FmButton>
        <FmButton @click="showToast('loading2')">
          加载中 2
        </FmButton>
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
