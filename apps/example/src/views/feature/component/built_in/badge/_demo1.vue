<template>
  <div class="flex gap-8">
    <FmBadge :value="true">
      <FmIcon name="i-ri:notification-3-line" />
    </FmBadge>
    <FmBadge :value="99">
      <FmIcon name="i-ri:notification-3-line" />
    </FmBadge>
    <FmBadge value="噢">
      <FmIcon name="i-ri:notification-3-line" />
    </FmBadge>
    <FmBadge value="9" variant="secondary">
      <FmIcon name="i-ri:notification-3-line" />
    </FmBadge>
    <FmBadge value="9" variant="destructive">
      <FmIcon name="i-ri:notification-3-line" />
    </FmBadge>
  </div>
</template>
