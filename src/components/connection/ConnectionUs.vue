<template>
  <div>
    <mt-header fixed title="请联系我们" class="mint-header-title"></mt-header>
    <p class="topmain">&nbsp;&nbsp;&nbsp;&nbsp;请输入必要的信息</p>
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>教工号/学号</label>
        <input type="text" placeholder="账 号" />
      </div>
      <div class="mui-input-row">
        <label>邮箱</label>
        <input type="text" class="mui-input-clear" placeholder="邮 箱" />
      </div>
    </form>
    <div class="mui-input-row" style="margin: 10px 5px">
      <textarea id="textarea" rows="5" placeholder="请输入内容"></textarea>
    </div>
    <div class="mui-button-row">
      <button type="button" class="mui-btn mui-btn-primary" @click="show">
        确 &nbsp;&nbsp;认</button
      >&nbsp;&nbsp;
      <button type="button" class="mui-btn mui-btn-danger" @click="Noshow">
        取 &nbsp;&nbsp; 消
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      this.toastInstanse = Toast({
        message: "操作成功", //弹窗内容
        position: "middle", //弹窗位置
        // duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-ok", //设置 图标类
        className: "mytoast", //自定义Toast 样式，需要自己提供一个类名
        duration: 2000
      });
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
}
</script>
<style lang='scss' scoped>
.topmain {
  padding-top: 10px;
}
button {
  width: 150px;
}
label {
  font-size: 15px;
  font-weight: bold;
}
</style>