<template>
  <n-layout-sider :class="getSiderCls"></n-layout-sider>
</template>

<script lang="ts" setup>
import { useDesign } from '@/hooks/useDesign'
import { NLayoutSider } from 'naive-ui'
import { computed } from 'vue'

defineOptions({ name: 'LayoutSider' })

const { prefixCls } = useDesign('layout-sider')
const getSiderCls = computed(() => {
  return [prefixCls]
})
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-layout-sider';

.#{$prefix-cls} {
  @apply z-510;
}
</style>
