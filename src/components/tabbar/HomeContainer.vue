<template>
  <div class="bodya">
    <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbolist" :key="item.url"
        ><img :src="item.url" alt=""
      /></mt-swipe-item>
  
    </mt-swipe>

    <!-- 六宫格 -->
    <div class="centerPart">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">教学资讯</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/classevalute">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">课堂点评</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/managerliuyan">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">督导留言</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/classfankui">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">课堂反馈</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodteacher">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">教师风采</div></router-link
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/connectionus">
         <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></router-link
        >
      </li> 
    </ul>
    </div>

    <div class="schoolnews">
      <p>学校新闻</p>
      <div class="schoolnews-title">
        <h5 @click="totitle">中原工学院师生对全国两会召开反响热烈</h5>
        <img src="https://www.zut.edu.cn/_mediafile/index/2017/10/12/_thumb/3u5ed2vljk.jpg" alt="">
        <p class="schoolnews-time">时间：2021.3.8 </p>
      </div>

      <p>学校新闻</p>
      <div class="schoolnews-title">
        <h5>中原工学院师生对全国两会召开反响热烈</h5>
        <img src="https://www.zut.edu.cn/_mediafile/index/2017/10/12/_thumb/3u5ed2vljk.jpg" alt="">
        <p class="schoolnews-time">时间：2021.3.8 </p>
      </div>

      <p>学校新闻</p>
      <div class="schoolnews-title">
        <h5>中原工学院师生对全国两会召开反响热烈</h5>
        <img src="https://www.zut.edu.cn/_mediafile/index/2017/10/12/_thumb/3u5ed2vljk.jpg" alt="">
        <p class="schoolnews-time">时间：2021.3.8 </p>
      </div>
    </div>

    <!-- 这是底部消息 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
     
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
       <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"> </span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
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
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4086604299,2328254395&fm=15&gp=0.jpg",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=107914805,383231045&fm=26&gp=0.jpg",
      },
      {
        url:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3240306490,1017843449&fm=26&gp=0.jpg",
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
    totitle(){
      this.$router.push("/home/schoolnews/detail");
    }
  },
};
</script>
<style lang="scss" scoped>
.bodya{
  overflow-x: hidden;
  overflow-y: hidden;
}
.mint-header-title {
  font-size: 22px;
}
.schoolnews{
  height: 150px;
  width: 100%;
  // border: solid red;
  padding: 5px;
}
.schoolnews .schoolnews-title h5{
  // border: solid red;
  position: relative;
  float: left;
  font-size: 15px;
}
.schoolnews .schoolnews-title img{
  // border: solid red;
  widows: 50px;
  height: 50px;
  float: right;
  padding-top: 10px;
}
.schoolnews .schoolnews-title .schoolnews-time{
  padding-top: 25px;
  font-size: 5px;
}




.mint-swipe {
  height: 180px;
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
  img {
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
.centerPart{
  margin-top: 5px;
  // border: solid red;
  background-color: rgb(235, 12, 12);
  background: #efeff4;
  color: #efeff4;
  height: 278px;
}
.schoolinfo{
  height: 200px;
  width: 100%;
  border: solid red;
}
</style>