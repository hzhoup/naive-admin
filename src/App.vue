<template>
  <n-config-provider
    :date-locale="getNaiveDateLocale"
    :locale="getNaiveLocale"
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    class="h-full"
  >
    <NaiveProvider>
      <router-view />
    </NaiveProvider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import NaiveProvider from '@/components/common/NaiveProvider.vue'
import { useLocale } from '@/locales/useLocale'
import { useThemeStore } from '@/store/modules/theme'
import { NConfigProvider } from 'naive-ui'

const { getNaiveLocale, getNaiveDateLocale } = useLocale()
const theme = useThemeStore()
</script>
