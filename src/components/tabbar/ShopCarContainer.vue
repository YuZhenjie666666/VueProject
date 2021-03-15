<template>
    <div>
        <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>

        <h3>shop</h3>


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

</script>
<style lang="scss" scoped>
.mint-header-title {
  font-size: 22px;
}
</style>