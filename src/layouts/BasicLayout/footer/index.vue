<template>
  <n-layout-footer :class="getFooterCls">
    <router-view />
  </n-layout-footer>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks/useDesign'
import { NLayoutFooter } from 'naive-ui'
import { computed } from 'vue'

defineOptions({ name: 'LayoutFooter' })

const { prefixCls } = useDesign('layout-footer')
const getFooterCls = computed(() => {
  return [prefixCls]
})
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-layout-footer';

.#{$prefix-cls} {
  @apply wh-full;
}
</style>
