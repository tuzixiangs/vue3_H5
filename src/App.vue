<template>
  <!-- 路由出口 -->
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component
        :is="Component"
        :key="route.meta.title"
        v-if="route.meta.keepAlive"
      />
    </keep-alive>
    <component
      :is="Component"
      :key="route.meta.title"
      v-if="!route.meta.keepAlive"
    />
  </router-view>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<style lang="scss">
  @import url('./assets/css/global.scss');
</style>
