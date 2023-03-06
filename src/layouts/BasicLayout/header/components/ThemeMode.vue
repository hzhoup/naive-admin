<template>
  <n-tooltip>
    <template #trigger>
      <n-icon class="h-50 px-8 flex-center hover:cursor-pointer" size="18" @click="toggleDark()">
        <IconParkOutlineMoon v-if="isDark" />
        <IconParkOutlineSunOne v-else />
      </n-icon>
    </template>
    {{ isDark ? '暗黑' : '明亮' }}
  </n-tooltip>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store/modules/theme'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({ selector: 'html', attribute: 'class', valueDark: 'dark', valueLight: 'light' })
const toggleDark = useToggle(isDark)

const themeStore = useThemeStore()
watchEffect(() => {
  themeStore.darkMode = unref(isDark)
})
</script>
