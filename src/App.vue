<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    //请求只发一次,派发action,获取商品分类的三级列表
    this.$store.dispatch("getCategoryList");
  },
}
</script>

<style>

</style>
