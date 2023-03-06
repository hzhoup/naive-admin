<template>
  <n-dropdown :options="options">
    <div class="px-8 flex-y-center gap-4 hover:cursor-pointer">
      <n-avatar :size="18" round>N</n-avatar>
      <n-text>NPro Admin</n-text>
    </div>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { Component } from 'vue'
import key from '~icons/icon-park-outline/key'
import lock from '~icons/icon-park-outline/lock'
import power from '~icons/icon-park-outline/power'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  { label: '锁定屏幕', key: 'lock', icon: renderIcon(lock) },
  { label: '重置密码', key: 'key', icon: renderIcon(key) },
  { label: '退出系统', key: 'power', icon: renderIcon(power) }
]
</script>
