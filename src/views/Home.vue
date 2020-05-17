<template>
  <div>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header.vue')
  }
}
</script>

<style lang="less" scoped>
 
</style>