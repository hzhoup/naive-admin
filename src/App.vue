<template>
  <n-config-provider :date-locale="getNaiveDateLocale" :locale="getNaiveLocale" class="h-full">
    <NaiveProvider>
      <router-view />
    </NaiveProvider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import NaiveProvider from '@/components/common/NaiveProvider.vue'
import { useLocale } from '@/locales/useLocale'
import { NConfigProvider } from 'naive-ui'

const { getNaiveLocale, getNaiveDateLocale } = useLocale()
</script>
