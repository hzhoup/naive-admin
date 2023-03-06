<template>
  <n-tooltip>
    <template #trigger>
      <n-icon class="h-50 px-8 flex-center hover:cursor-pointer" size="18" @click="toggle">
        <IconParkOutlineOffScreen v-if="isFullscreen" />
        <IconParkOutlineFullScreen v-else />
      </n-icon>
    </template>
    {{ isFullscreen ? '还原' : '全屏' }}
  </n-tooltip>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
