<script setup lang="ts">
defineOptions({
  name: 'AppNotAllowed',
})

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="bg-background flex flex-col h-vh">
    <div class="flex h-[5%]">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-1" />
      <div class="w-[10%]" />
    </div>
    <div class="border-block border-dashed flex flex-1">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-center flex-1">
        <div class="p-4 flex-col-center gap-4 lg:p-12">
          <h1 class="text-6xl font-bold m-0">
            403
          </h1>
          <div class="text-xl text-secondary-foreground/50 mx-0 text-center">
            抱歉，你无权访问该页面
          </div>
          <FmButton variant="link" class="text-unset" @click="goBack">
            返回主页
          </FmButton>
        </div>
      </div>
      <div class="w-[10%]" />
    </div>
    <div class="flex h-[5%]">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-1" />
      <div class="w-[10%]" />
    </div>
  </div>
</template>
