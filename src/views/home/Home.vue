<template>
  <div id='home'>
    <nav-bar class='home-nav'>
      <div slot='center'>购物街</div>
    </nav-bar>
    <home-swiper :banners='banners'/>
    <home-recommend-view :recommends='recommends'/>
    <feature-view/>
    <!-- 使用组件自带的点击事件 -->
    <tab-controller
                  :titles="['流行','新款','精选']"
                  @tabClick='tabClick'/>
    <!-- 商品列表，向组件传入商品数据 -->
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabController from '@/components/content/tabController/TabController'
import GoodsList from '@/components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from '@/network/home'
export default {
  name:'Home',
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    NavBar,
    TabController,
    GoodsList

  },
  computed:{
    // 传入子组件-商品的列表数据
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  data(){
    return {
      // 轮播图
      banners:[],
      // 推荐信息
      recommends:[],
      // 商品信息
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      // 当前选中的类型
      currentType:'pop'
    }
  },
  // created，组件一旦创建好就调用函数
  created(){
    // 调用方法，直接渲染页面
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
// 点击事件
  tabClick(index){
    switch(index){
      case 0:
        this.currentType = 'pop'
        break
      case 1:
        this.currentType = 'new'
        break
      case 2:
        this.currentType = 'sell'
        break
    }
  },


// 请求数据方法

    // 调用api接口方法请求多个数据
    getHomeMultidata(){
      getHomeMultidata().then(
        res =>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }
      )
    },
    // getHomeGoods方法
    // 参数type,传入哪种类型，得到哪种数据
    async getHomeGoods(type){
      // 调用该方法时候，自动page+1，请求下一页的数据
      let page = this.goods[type].page +=1
     // 调用封装好的数据请求方法getHomeGoods获取商品数据
      const {data:res}= await getHomeGoods(type,page)
      // 将请求的商品存放在到good

      // this.goods[type].list = res.list
      //list是数组，直接赋值会将之前的数组数组覆盖,应该将请求后的数组数据追加到goods的list中
      this.goods[type].list.push(...res.list) 
      // 将当前页面号重新赋值
      this.goods[type].page = page
      // console.log(this.goods[this.currentType].list)
    }
  },
}

</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color:var(--color-tint);
  color: #fff;
}
  .content {
    /*高度决定 上44，下49*/
    
    /* 滚动区域设置 */

    /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>