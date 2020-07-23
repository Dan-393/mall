<template>
  <div class='goods-list-item'>
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class='price'>{{goodsItem.price}}</span>
      <span class='collect'>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    // 接受父组件传入的goodsItem
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created(){
    console.log(this.goodsItem)
  }

}

</script>
<style lang='less' scoped>
  .goods-list-item {
    width: 48%;
    background-color: #fff;
    padding-bottom: 50px;
    font-size: 14px;
    text-align: center;
    
  }
  .goods-list-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;

  }
  .goods-list-item p {
   
    /* 隐藏 */
    overflow: hidden;
    /* 省略显示... */
    text-overflow: ellipsis;
    /* 显示在一行 */
    white-space: nowrap;
  }
  .goods-info .price {
    color: #ff699c;
  }
   .goods-info .collect {
        position: relative;
    }
   .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
  
  
</style>