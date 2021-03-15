<template>
  <div>
    <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>

    <form class="search_form" action="#">
      <input
        type="search"
        name="search"
        placeholder="请输入查询的课程或者教师"
        class="search_input"
      />
      <input type="submit" name="submit" class="search_submit" @click="toClassInfo"/>
    </form>

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
    toClassInfo(){
      this.$router.push('/search/classinfo')
    }
  },
}
</script>
<style lang="scss" scoped>
.mint-header-title {
  font-size: 22px;
}
.search_form{
  margin-top: 15px;
  padding-left: 10px;
}
.search_form .search_input{
  width: 82%;
  padding-top: 15px;
  padding-left: 15px;
  height: 39px;
}
.search_submit{
  height: 39px;
}
</style>