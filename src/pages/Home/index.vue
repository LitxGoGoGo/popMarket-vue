<template>
  <div>
    <!-- 三级联动已经时全局组件不要重复引用 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- 父亲向自组件传递数据用props时先在子组件的自定义标签上写:传过去要用到的名字="数据字段名" -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>  
    <Brand/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name:'',
   mounted() {
    this.$store.dispatch("getGetFloorList")
  },
  computed:{
    ...mapState({
      floorList:(state) => state.home.floorList
    })
  },
  //注册组件
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>