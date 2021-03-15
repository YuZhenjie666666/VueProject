<template>
  <div class="newsinfo-container">
       <mt-header fixed title="学校新闻详情" class="mint-header-title"></mt-header>
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfos[0].title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfos[0].add_time | dateFormat }}</span>
      <span>点击：{{ newsinfos[0].click }}次{{newsinfos.content}}</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content">{{newsinfos[0].content}}</div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
// 导入子组件
import comment from '../subcomponent/comment.vue'



export default {
    created(){
        this.newsinfos = [{title:'孟晚舟申请变更保释条件被拒',add_time:new Date(),click:20,content:'当地时间周五，加拿大不列颠哥伦比亚省最高法庭法官拒绝了孟晚舟变更保释条件的申请。孟晚舟律师团此前要求法院允许孟在宵禁时间外离开家时，无需私人安保人员的陪同。律师团认为，安保人员使她更容易感染新冠病毒。负责监管孟晚舟的狮门风险管理集团首席执行官在听证会上承认，放宽保释条件会使公司收入下降，不支持改变她的保释条件；法官也认为尽管孟晚舟一直遵守保释条件，但她仍然面临安全隐患和离境的可能性。（记者 李娜）'}],
        console.log(this.newsinfos)
    },
  data() {
    return {
      id: this.$route.params.id,
      newsinfos:null
    };
  },
  components:{
    //   注册子组件
     'comment-box': comment 
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: skyblue;
        display: flex;
        justify-content: space-between;
    }
    .content{

    }
}




</style>