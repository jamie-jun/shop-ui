<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to = "'/home/newsinfo/'+item.id" class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                        <p class="mui-depict">
                            <span>发表时间：{{item.create_time | dateFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"

    export default {
        name: "NewsList",
        data(){
            return {
                newsList:[] //新闻列表显示数据
            }
        },
        created(){
            this.getNewsData();
        },
        methods:{
            getNewsData(){
                this.$http.get('api/getnewslist').then(result => {
                    if(result.body.status === 0){
                        this.newsList=result.body.message;
                    }else {
                        Toast('获取数据失败！')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
       li{
           a{
               display:flex;
               align-items:center;
           }
           /*h1{*/
               /*font-size: 14px;*/
           /*}*/
           .mui-ellipsis{
               font-size: 12px;
           }
           .mui-depict{
               font-size: 12px;
               color: #226aff;
               display: flex;
               justify-content: space-between;
           }
       }
    }
</style>
