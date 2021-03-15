<template>
  <div class="main">
    <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>
    <!-- 上边头像区域 -->
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395433795,1942123590&fm=26&gp=0.jpg"
          />
        </div>
        <div class="user-info">
          <p class="user-info-top">个人中心</p>
          <p>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
      </a>
    </section>

    <div class="userDetail">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right">
            <a id="icon-personadd"><span class="mui-icon mui-icon-personadd"></span></a>
            <div class="mui-media-body"  @click="topingjia">
              &nbsp;&nbsp;&nbsp;查看评价
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right" href="javascript:;">
             <a id="icon-personadd"><span class="mui-icon mui-icon-personadd"></span></a>
            <div class="mui-media-body" @click="toinfodetail">
              &nbsp;&nbsp;&nbsp;信息维护
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right">
             <a id="icon-personadd"><span class="mui-icon mui-icon-personadd"></span></a>
            <div class="mui-media-body" @click="toseeinfodetail">
                 &nbsp;&nbsp;&nbsp;基本资料
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 退出按钮 -->
    <div class="Buttonexit">
      <mt-button type="danger" class="button" plain>退出登录</mt-button>
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
  methods: {
    topingjia(){
      this.$router.push('/member/evaluate')
    },
    toinfodetail(){
      this.$router.push('/member/infodetail')
    },
    toseeinfodetail(){
      this.$router.push('/member/basicinfo')
    }
  }
  
}

</script>
<style lang="scss" scoped>
.main{
background: rgba(0,0,0,.009);
}
.mint-header-title {
  font-size: 22px;
}
// #icon-personadd{
//   display: inline;
// }
#icon-personadd{
  height: 15px;
}
 .mui-media-body{
  display: inline;
}
.profile-number {
  border: 1px solid white;
  background-color: #26a2ff;
  height: 120px;
}
.profile-number .profile_image {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 25px;
  // float: left;
}
.profile-number .profile_image img {
  width: 100%;
  height: 100%;
}
.profile-number .user-info {
  margin-left: 110px;
  margin-top: -55px;
}
.profile-number .user-info .user-info-top {
  font-size: 18px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  color: aliceblue;
  font-weight: bold;
}
.userDetail {
  height: 150px;
  width: 100%;
  // border: 1px solid red;
  margin-top: 10px;
}
.Buttonexit .button{
  text-align: center;
  margin-top: 150px;
  // height: 15px;
  width: 90%;
  margin-left: 18px;
}
mint-button::after{
  padding-top: 120px;
  margin-top: 30px;
}
</style>