<template>
  <swiper>
    <swiper-item v-for='(item,index) in banners' :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import{Swiper,SwiperItem}from '@/components/common/swiper/index'
export default {
  name:'HomeSwiper',
  props:{
    // 传入的滚播图数据
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
}

</script>
<style scoped>
</style>