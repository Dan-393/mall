<template>
  <div class='tab-controller'>
    <div class="tab-controller-item"
        v-for="(item,index) in titles" :key="index"
        @click="itemClick(index)"
        :class='{active:index==currentIndex}'>
      <span>{{item}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name:'TabController',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    // 监听点击事件
    itemClick(index){
      this.currentIndex = index 
      // 将点击事件发送到父组件中，第二值为参数
      this.$emit('tabClick',index)
    }
  }
}

</script>
<style  scoped>
  .tab-controller {
    display: flex;
    text-align: center;
    background-color: #fff;
    font-size: 17px;
    position: sticky;
    padding: 10px 0;
    top: 44px;
  }
  .tab-controller-item {
    flex: 1;
  }
  .active {
    color: #ff699c;
  }
  .active span {
      border-bottom: 2px solid #ff699c;
      padding: 2px;
  }

</style>