<template>
  <div class='goods-list'>
    <!-- 向组件goodsItem传入数据item -->
      <goods-list-item  v-for="(item,index) in goods" 
      :key="index" :goodsItem='item'/>  
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem'
export default { 
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
}

</script>
<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
</style>