<template>
  <div class="flex flex-col gap-4 items-start">
    <FmButtonGroup separator>
      <FmButton>
        <FmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FmButton>
      <FmButton>
        <FmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FmButton>
      <FmButton>
        <FmIcon name="i-mdi:delete" class="size-4" />
        删除
      </FmButton>
    </FmButtonGroup>
    <FmButtonGroup orientation="vertical" separator>
      <FmButton>
        <FmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FmButton>
      <FmButton>
        <FmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FmButton>
      <FmButton>
        <FmIcon name="i-mdi:delete" class="size-4" />
        删除
      </FmButton>
    </FmButtonGroup>
    <p>按钮如果为 outline 则无需设置分割线</p>
    <FmButtonGroup>
      <FmButton variant="outline">
        <FmIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FmButton>
      <FmButton variant="outline">
        <FmIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FmButton>
      <FmButton variant="outline">
        <FmIcon name="i-mdi:delete" class="size-4" />
        删除
      </FmButton>
    </FmButtonGroup>
  </div>
</template>
