<template>
<!-- 将better-scroll进行封装 -->
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'scroll',
  data(){
    return {
      // 存放better-scroll的对象
      scroll:null
    }
  },
  props:{
    probeTypeNum:{
      type:Number,
      default(){
        return 0
      }
    },
    isPullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  mounted(){
    let wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper,{
      // 包括惯性的实时监控位置
      probeType:this.probeTypeNum,
      // false，按钮可以被点击，但div不可以发送点击事件
      click:true,
      // 下拉加载更多
      pullUpLoad:this.isPullUpLoad
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('getScrollPosition',position)
    }),
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
    })
  },
  methods:{
    // 滚动到指定位置
    // 参数 x,y 为高度，time：默认为300
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  }
}

</script>
<style scoped>
</style>