<template>
  <div>
    <mt-header
      fixed
      title="学生评价得分展示"
      class="mint-header-title"
    ></mt-header>
    <div class="mui-card" style="margin-bottom: 35px">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
           
          <p>   周评得分      &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  10</p>
        </li>
        <li class="mui-table-view-cell">
          <p>   月评得分     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      10</p>
        </li>
        <li class="mui-table-view-cell">
          <p>  期末总分     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      10</p>
        </li>
      </ul>
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
  }
}
</script>
<style lang='scss' scoped>
// .mui-navigate-right {
  
// }
.mui-card .mui-table-view .mui-table-view-cell p {
  display: inline;
  padding-right: 15px;
  font-size: 15px;
  font-weight: bold;
}
.mui-card .mui-table-view .mui-table-view-cell a {
  display: inline;
}
</style>