<template>
  <div>
    <mt-header fixed title="个人信息修改" class="mint-header-title"></mt-header>
    <!-- 编辑个人信息 -->
    <div class="main">
      <mt-field
        label="教师姓名"
        placeholder="Input username"
      ></mt-field>
      <mt-field
        label="教师性别"
        placeholder="Input sex"
        
      ></mt-field>
      <mt-field
        label="所属部门"
        placeholder="Input department"
        
      ></mt-field>
      <mt-field
        label="最高学历"
        placeholder="Input graduation"
        
      ></mt-field>
      <mt-field
        label="所学专业"
        placeholder="Input major"
        
      ></mt-field>
      <mt-field
        label="电子邮箱"
        placeholder="Input email"
        type="email"
       
      ></mt-field>
      <mt-field
        label="电话号码"
        placeholder="Input tel"
        type="tel"
       
      ></mt-field>
      
      <mt-field
        label="出生日期"
        placeholder="Input birthday"
        type="date"
       
      ></mt-field>
      <mt-field
        label="自我评价"
        placeholder="introduction"
        type="textarea"
        rows="4"
        
      ></mt-field>
      <mt-button size="large" type="primary">提交修改</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='scss'>

.main{
  margin-top: 0px;
}
.mint-field .mint-cell-value {
      -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 20px;
}
</style>