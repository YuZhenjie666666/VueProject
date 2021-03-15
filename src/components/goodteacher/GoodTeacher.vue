<template>
  <div class="main">
    <mt-header fixed title="教师风采" class="mint-header-title"></mt-header>
    <!-- 教师风采展示页面 -->
    <div class="title">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3393172609,2460910110&fm=26&gp=0.jpg"
      />
      <div class="teacher">
        <h3>杨洋</h3>
        <p>
          杨洋，1991年9月9日出生于上海，籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系，中国内地影视男演员。2015年，因主演青春电影《左耳》和冒险剧《盗墓笔记》而获得更多关注；同年，其主演的青春励志剧《旋风少女》取得全国同时段电
          ...
        </p>
      </div>
    </div>

    <!-- <div class="title">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3393172609,2460910110&fm=26&gp=0.jpg"
      />
      <div class="teacher">
        <h3>杨洋</h3>
        <p>
          杨洋，1991年9月9日出生于上海，籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系，中国内地影视男演员。2015年，因主演青春电影《左耳》和冒险剧《盗墓笔记》而获得更多关注；同年，其主演的青春励志剧《旋风少女》取得全国同时段电
          ...
        </p>
      </div>
    </div> -->

    <div class="title1">
      <div class="teacher1">
        <h3>杨洋</h3>
        <p>
          杨洋，1991年9月9日出生于上海，籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系，中国内地影视男演员。2015年，因主演青春电影《左耳》和冒险剧《盗墓笔记》而获得更多关注；同年，其主演的青春励志剧《旋风少女》取得全国同时段电
          ...
        </p>
      </div>
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3393172609,2460910110&fm=26&gp=0.jpg"
      />
    </div>

    <div class="title">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3393172609,2460910110&fm=26&gp=0.jpg"
      />
      <div class="teacher">
        <h3>杨洋</h3>
        <p>
          杨洋，1991年9月9日出生于上海，籍贯安徽合肥，毕业于中国人民解放军艺术学院2003级舞蹈系，中国内地影视男演员。2015年，因主演青春电影《左耳》和冒险剧《盗墓笔记》而获得更多关注；同年，其主演的青春励志剧《旋风少女》取得全国同时段电
          ...
        </p>
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
    return {};
  },
};
</script>
<style lang='scss' scoped>
.title {
  // border: 1px solid red;
  background: rgb(250, 250, 250);
  height: 230px;
  width: 100%;
  margin-top: 0px;
  padding-left: 5px;
  position: relative;
  // padding-right: 5px;
}
img {
  width: 158px;
  height: 180px;
  border-radius: 10px;
  display: inline;
  margin-top: 30px;
}
h3 {
  color: cadetblue;
  font-weight: bold;
}
p {
  font-size: 13px;
}
.teacher {
  // display: inline;
  width: 195px;
  height: 230px;
  // border: 2px solid green;
  float: right;
  margin-right: 5px;
}
.title1 {
  // border: 1px solid red;
  background: rgb(240, 235, 235);
  height: 230px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 5px;
  position: relative;
    margin-top: 25px;
}
.teacher1 {
  width: 195px;
  height: 230px;
  // border: 2px solid green;
  float: left;
  margin-right: 5px;

}
</style>