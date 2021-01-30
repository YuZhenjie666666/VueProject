<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbolist" :key="item.url"
        ><img :src="item.url" alt=""
      /></mt-swipe-item>
      <!-- <mt-swipe-item><img src="" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="" alt=""></mt-swipe-item> -->
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">商品购买</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">图片分享</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></a
        >
      </li> 
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbolist: null,
    };
  },
  created() {
    this.lunbolist = [
      {
        url:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2010521944,3720703556&fm=26&gp=0.jpg",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3770189814,3239591270&fm=26&gp=0.jpg",
      },
      {
        url:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-12-21%2F5c1c963e12175.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614501470&t=f648188db174049323c8f08b73738ae2",
      },
    ];
    // console.log(this.lunbolist[0].url)
  },
  methods: {
    showlunbo() {
      //   在这里面填写自己的数据
      this.$http
        .get(
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2010521944,3720703556&fm=26&gp=0.jpg"
        )
        .then((result) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: aqua;
    }
    &:nth-child(2) {
      background-color: burlywood;
    }
    &:nth-child(3) {
      background-color: chartreuse;
    }
  }
  .img {
    width: 100%;
    height: 100%;
  }

}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        height: 60px;
        widows: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>