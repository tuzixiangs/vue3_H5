<template>
  <div class="home">
    <div>首页</div>
    <p>{{ count }}</p>
    <Button plain type="primary" @click="addCount">加加加</Button>
    <Button @click="subCount">-----</Button>
  </div>
</template>
<script setup>
  import { Button } from 'vant'
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'

  const num = ref(0)
  const store = useStore()
  const count = computed(() => store.state.count)
  const addCount = () => store.commit('addCount')
  const subCount = () => store.commit('subCount')
</script>
<style lang="scss" scoped>
  .home {
    color: $color-01;
  }
  .button {
    width: 200px;
    height: 80px;
  }
</style>
