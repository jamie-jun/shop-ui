<template>
<div class="newsinfo-container">
    <h3 class="title">{{ newsInfo.title }}</h3>
    <p class="subtitle">
        <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
        <span>点击：{{newsInfo.click}}次</span>
    </p>
    <hr/>
    <div class="content" v-html="newsInfo.content"></div>
    <!-- 评论子组件-->
    <!-- :id ="this.id" 像子组件传递参数 -->
    <comment-box :id ="this.id"></comment-box>
</div>
</template>

<script>
    //导入评论子组件
    import  comment from  '../subcomponents/comment'

    export default {
        name: "NewsInfo",
        data() {
            return {
               id: this.$route.params.id, //将 url 地址中传递的 id值,挂载到data上，方便调用
               newsInfo:{}
             }
        },
        created(){
          this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getnew/'+this.id).then(result =>{
                    if(result.body.status === 0){
                        this.newsInfo = result.body.message[0]
                    }else{
                        // Toast("获取新闻失败！")
                    }
                })
            }
        },
        components:{ //用来组册子组件的节点
            'comment-box': comment
        }
    }
</script>

<style lang="scss">
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
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
