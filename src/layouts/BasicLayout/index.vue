<template>
  <n-layout :class="prefixCls">
    <LayoutHeader fixed />
  </n-layout>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks/useDesign'
import { NLayout } from 'naive-ui'
import LayoutHeader from './header/index.vue'

defineOptions({ name: 'BasicLayout' })

const { prefixCls } = useDesign('layout')
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-layout';

.#{$prefix-cls} {
  @apply flex-col w-full min-h-full;

  &-main {
    @apply w-full ml-px;
  }
}
</style>
