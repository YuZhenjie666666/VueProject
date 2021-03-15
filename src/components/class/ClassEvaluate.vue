<template>
  <div>
    <mt-header fixed title="教师评价系统" class="mint-header-title"></mt-header>
    <h3>课堂点评详情页面</h3>

    <!-- Single button -->
    <div class="mainbox">
      <p>系部名称</p>
      <select name="" id="">
          <option value="">请选择</option>
        <option value="">软件学院</option>
        <option value="">电子信息学院</option>
        <option value="">计算机学院</option>
      </select>

      <p>课程名称</p>
      <div class="mui-input-row">
        <input
          type="text"
          class="mui-input-clear"
          placeholder="请输入课程名称"
        />
      </div>

      <p>教师名称</p>
      <div class="mui-input-row">
        <input
          type="text"
          class="mui-input-clear"
          placeholder="请输入教师名称"
        />
      </div>

      <p>上课周次</p>
      <div class="mui-input-row">
        <input
          type="text"
          class="mui-input-clear"
          placeholder="请输入上课周次"
        />
      </div>

      <p>课堂教学反馈</p>
      <div class="mui-input-row" style="margin: 10px 5px">
        <textarea id="textarea" rows="5" placeholder="请输入反馈信息"></textarea>
      </div>

      <div class="mui-button-row">
        <button
          type="button"
          class="mui-btn mui-btn-primary"
          @click="show"
        >
          确认</button
        >&nbsp;&nbsp;
        <button
          type="button"
          class="mui-btn mui-btn-danger"
          @click="Noshow"
        >
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods:{
       show() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      this.toastInstanse = Toast({
        message: "已经正确提交信息", //弹窗内容
        position: "middle", //弹窗位置
        // duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-ok", //设置 图标类
        className: "mytoast", //自定义Toast 样式，需要自己提供一个类名
        duration: 2000
      })
      this.$router.push('/home/')
    //   this.$router.push('/home')
    },
    Noshow() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      this.toastInstanse = Toast({
        message: "取消操作", //弹窗内容
        position: "middle", //弹窗位置
        // duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-remove", //设置 图标类
        className: "mytoast", //自定义Toast 样式，需要自己提供一个类名
        duration: 2000
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.mainbox {
  height: 650px;
  //   width: 100%;
//   border: 1px solid red;
  margin-left: 15px;
  margin-right: 15px;
}
.mainbox select {
  width: 100%;
  border: 1px solid gold;
  background: rgb(231, 223, 223);
}
h3 {
  font-size: 15px;
  font-weight: bold;
  color: chocolate;
  padding-left: 10px;
  padding-top: 3px;
}
p {
  font-size: 15px;
  padding-top: 8px;
  font-weight: bold;
  color: black;
}
textarea,input{
     background: rgb(231, 223, 223);
}
button{
    width: 40%;
    height: 40px;
    // padding-top: 10px;
    margin-top: -15px;
    font-size: 18px;
}
</style>