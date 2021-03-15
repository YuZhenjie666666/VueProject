<template>
  <div class="all">
      <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>

    <!--上课班级信息详情  -->
    <div class="AllClassInfo">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">课程名称: <p>java</p></li>
        <li class="mui-table-view-cell">上课班级: <p>RB软工金174</p></li>
        <li class="mui-table-view-cell">授课时间: <p>2021-02-02</p></li>
        <li class="mui-table-view-cell">主讲教师: <p>于振杰</p></li>
      </ul>
    </div>
    <!--上课班级信息详情  -->
    <div class="AllClassInfo">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">课程名称: <p>java</p></li>
        <li class="mui-table-view-cell">上课班级: <p>RB软工金174</p></li>
        <li class="mui-table-view-cell">授课时间: <p>2021-02-02</p></li>
        <li class="mui-table-view-cell">主讲教师: <p>于振杰</p></li>
      </ul>
    </div>
    <!--上课班级信息详情  -->
    <div class="AllClassInfo">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">课程名称: <p>java</p></li>
        <li class="mui-table-view-cell">上课班级: <p>RB软工金174</p></li>
        <li class="mui-table-view-cell">授课时间: <p>2021-02-02</p></li>
        <li class="mui-table-view-cell">主讲教师: <p>于振杰</p></li>
      </ul>
    </div>
    <!--上课班级信息详情  -->
    <div class="AllClassInfo">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">课程名称: <p>java</p></li>
        <li class="mui-table-view-cell">上课班级: <p>RB软工金174</p></li>
        <li class="mui-table-view-cell">授课时间: <p>2021-02-02</p></li>
        <li class="mui-table-view-cell">主讲教师: <p>于振杰</p></li>
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
.all{
    background-color: rgba(0,0,0,.1);
}
.AllClassInfo{
    // border: solid 1px red;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 15px;
    ;
}
.AllClassInfo p{
    display: inline;
    font-size: 15px;
    text-align: center;
    padding-left: 80px;
}
</style>