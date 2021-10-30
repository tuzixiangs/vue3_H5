<template>
  <div class="index">
    <div class="test">我的</div>
    <p>{{ count }}</p>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { BASE_URL } from '@/utils/config'
const num = ref(0)
const store = useStore()
const count = computed(() => store.state.count)
console.log(`BASE_URL`, BASE_URL)
</script>
<style lang="scss" scoped>
.test {
  width: 200px;
  height: 200px;
}
</style>