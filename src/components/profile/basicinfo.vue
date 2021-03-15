<template>
  <div>
    <mt-header fixed title="个人信息展示" class="mint-header-title"></mt-header>
    <!-- 详细信息展示 -->
    <div class="infomation">
      <mt-cell title="教师工号">000000</mt-cell>
      <mt-cell title="教师姓名" value="王利"></mt-cell>
      <mt-cell title="教师性别" value="男"></mt-cell>
      <mt-cell title="所属部门" value="软件学院"></mt-cell>
      <mt-cell title="最高学历" value="小学"></mt-cell>
      <mt-cell title="教师职称" value="副教授"></mt-cell>
      <mt-cell title="所学专业" value="电子信息"></mt-cell>
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
.infomation{
    height: 500px;
    border: 1px solid red;
    background-color: rgba(252, 245, 245, 0.897);
    border-radius: 5px;
    padding: 10px 5px;
}
</style>