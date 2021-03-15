<template>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">教师评价系统</h2>
          <!-- <div class="login_header_title">
            <a href="javascript:;" class="on">短信登录</a>
            <a href="javascript:;">密码登录</a>
          </div> -->
        </div>
        <div class="login_content">
          <form>
            <div class="on">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="帐  号">
              </section>    
              <section class="login_verification">
                <input type="password" maxlength="8" placeholder="密  码">
              </section>
              <section class="login_hint">
                温馨提示：账号一般是自己的工号或者学号，忘记账号请联系管理员
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <P><button class="login_submit" @click="toMsite">登录</button></P>
            
          </form>
        </div>
       
      </div>
    </section>
</template>
<script>
  export default{
      methods:{
          toMsite(){
               this.$router.push('/a')
          }
      }
  }
</script>

<style lang="scss" scoped>
.login_logo{
    font-size: 35px;
    text-align: center;
    color: aqua;
}
.login_message {
    padding-top: 15px;
    padding-left: 35px;
    padding-right: 35px;
}
.login_verification{
     padding-top: 5px;
    padding-left: 35px;
    padding-right: 35px;
}
.login_hint{
    padding:6px 35px;
    font-size: 10px;
    color: #999;
    line-height: 20px;
}
.login_submit{
    display: block;
    width: 82%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0;
    text-align: center;
}
button{
    margin: 8px 17px 0 31px;
}
</style>