<template>
  <div class='recommends'>
    <div v-for='(item,index) in recommends' :key='index'
    class='recommends-item'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      defaultL(){
        return []
      }
    }
  }
}

</script>
<style scoped>
  .recommends {
    display: flex;
     width: 100%;
     text-align: center;
     font-size: 12px;
      padding: 10px 0px 20px;
     /* 分割线 */
     border-bottom: 5px solid #eee;
  }
  .recommends-item {
    flex: 1;
  }
  .recommends-item img {
    width: 75px;
    height: 75px;
    margin-bottom: 5px;
    
  }
</style>