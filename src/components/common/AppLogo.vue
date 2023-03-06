<template>
  <div :class="getAppLogoCls" @click="goHome">
    <IconCustomLogo />
    <div v-show="showTitle" :class="getTitleClass" class="md:opacity-100 opacity-0">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks/useDesign'
import { usePage } from '@/hooks/usePage'
import { useThemeStore } from '@/store/modules/theme'
import { computed } from 'vue'

defineProps({
  showTitle: { type: Boolean, default: true }
})

const theme = useThemeStore()
const { prefixCls } = useDesign('logo')
const getAppLogoCls = computed(() => [prefixCls, theme.darkMode ? 'dark' : 'light'])
const getTitleClass = computed(() => [`${prefixCls}__title`])

const title = import.meta.env.APP_NAME

const { goHome } = usePage()
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-logo';

.#{$prefix-cls} {
  @apply flex-center pl-7 cursor-pointer transition-all duration-200 ease;

  &__title {
    @apply text-16 font-bold leading-normal ml-8 truncate transition-all duration-500 md:opacity-100 xs:opacity-0;
  }
}
</style>
