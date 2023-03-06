<template>
  <n-layout-content :class="getContentCls">
    <router-view />
  </n-layout-content>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks/useDesign'
import { NLayoutContent } from 'naive-ui'
import { computed } from 'vue'

defineOptions({ name: 'LayoutContent' })

const { prefixCls } = useDesign('layout-content')
const getContentCls = computed(() => {
  return [prefixCls]
})
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-layout-content';

.#{$prefix-cls} {
  @apply relative flex-1 min-h-0;
}
</style>
