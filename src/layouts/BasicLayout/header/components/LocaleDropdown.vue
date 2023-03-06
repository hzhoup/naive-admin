<template>
  <n-dropdown :options="localeList" @select="handleSelect">
    <n-icon class="h-50 px-8 flex-center hover:cursor-pointer" size="18">
      <IconParkOutlineTranslate />
    </n-icon>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { useLocale } from '@/locales/useLocale'
import { localeList, LocaleType } from '@/setting/locale'

const { changeLocale } = useLocale()

async function handleSelect(key: LocaleType) {
  await changeLocale(key)
}
</script>
