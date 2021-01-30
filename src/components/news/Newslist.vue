<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.url">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.time | dateFormat}} </span>
                                <span>评论次数 {{item.click}}次</span>
                                </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return({
            news:null
        }) 
    },
    created(){
       this.getNewsListInfo()
    },
    methods:{
        getNewsListInfo(){
            // 本来应该是从数据库获取，现在写个静态的
            this.news = [{id:1,img_url:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=74701897,2680827107&fm=26&gp=0.jpg',title:'哪吒之魔童降世',time:new Date(),click:6},
                        {id:2,img_url:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1672646401,3394370968&fm=26&gp=0.jpg',title:'小米就被美方拉黑一事起诉美政府',time:new Date(),click:6}
            ]

        }
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>