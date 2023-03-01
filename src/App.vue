<template>
  <n-config-provider :date-locale="getNaiveDateLocale" :locale="getNaiveLocale">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useLocale } from '@/locales/useLocale'
import { NConfigProvider } from 'naive-ui'

const { getNaiveLocale, getNaiveDateLocale } = useLocale()
</script>
