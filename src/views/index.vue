<template>
  <div class="index">
    <div class="test">我的</div>
    <p>{{ count }}</p>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { BASE_URL } from '@/common/config'
  const store = useStore()
  const count = computed(() => store.state.count)
</script>
<style lang="scss" scoped>
  .test {
    width: 200px;
    height: 200px;
  }
</style>
