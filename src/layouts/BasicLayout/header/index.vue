<template>
  <n-layout-header :class="getHeaderCls" bordered>
    <div :class="`${prefixCls}-left`">
      <AppLogo :class="`${prefixCls}-left__logo`" />
    </div>
    <div :class="`${prefixCls}-action`">
      <FullScreen />

      <ThemeMode />

      <LocaleDropdown />

      <UserDropdown />
    </div>
  </n-layout-header>
</template>

<script lang="ts" setup>
import AppLogo from '@/components/common/AppLogo.vue'
import { useDesign } from '@/hooks/useDesign'
import FullScreen from '@/layouts/BasicLayout/header/components/FullScreen.vue'
import LocaleDropdown from '@/layouts/BasicLayout/header/components/LocaleDropdown.vue'
import ThemeMode from '@/layouts/BasicLayout/header/components/ThemeMode.vue'
import UserDropdown from '@/layouts/BasicLayout/header/components/UserDropdown.vue'
import { NLayoutHeader } from 'naive-ui'
import { computed } from 'vue'

defineOptions({ name: 'LayoutHeader' })
const props = defineProps({
  fixed: { type: Boolean }
})

const { prefixCls } = useDesign('layout-header')
const getHeaderCls = computed(() => {
  return [prefixCls, { [`${prefixCls}--fixed`]: props.fixed }]
})
</script>

<style lang="scss">
$prefix-cls: '#{$namespace}-layout-header';

.#{$prefix-cls} {
  @apply flex-y-center justify-between h-50 p-0 -ml-px leading-50px;

  &--fixed {
    @apply fixed-lt z-500 w-full;
  }

  &-left {
    @apply flex-y-center h-full;

    &__logo {
      @apply h-50 px-12 min-w-180;

      svg {
        @apply text-32 mr-2;
      }
    }
  }

  &-action {
    @apply flex-y-center min-w-180;
  }
}
</style>
