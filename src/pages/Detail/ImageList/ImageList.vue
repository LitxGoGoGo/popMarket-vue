<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(image,index) in skuImageList" :key="image.id">
        <img :src="image.imgUrl" :class="{active:currentIndex==index}" @click="changeCurrentIndex(index)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

import Swiper from 'swiper'  //$nextTick
export default {
  name: "ImageList",
  props: ['skuImageList'],
  data() {
    return {
      currentIndex:0
    }
  },
  watch: {
    skuImageList(val, oldVal) {
      this.$nextTick(() => {
        new Swiper(this.$refs.cur, {
          // 如果需要前进后退按钮
          slidesPerView : 4,
          slidesPerGroup : 1,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })
    }
  },
  computed: {
  },
  methods:{
    changeCurrentIndex(index){
      this.currentIndex = index
      //用全局事件总线通知自己的兄弟组件索引值为多少
      this.$bus.$emit('getIndex',index)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>