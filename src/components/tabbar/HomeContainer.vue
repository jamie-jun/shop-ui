<template>
    <div>
        <!--mint Swipe 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.img">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--mui grid 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <!--字体图标替换为img-->
                    <!--<span class="mui-icon mui-icon-home"></span>-->
                    <img src="../../images/img1.png">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                <!--<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>-->
                    <img src="../../images/img2.png">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!--<span class="mui-icon mui-icon-chatbubble"></span>-->
                <img src="../../images/img3.png">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!--<span class="mui-icon mui-icon-location"></span>-->
                <img src="../../images/img4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!--<span class="mui-icon mui-icon-search"></span>-->
                <img src="../../images/img5.png">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!--<span class="mui-icon mui-icon-phone"></span>-->
                <img src="../../images/img6.png">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: "HomeContainer",
        data() {
            return {
                swipeList: []
            };
        },
        created() {
            this.getSwipeDate();
        },
        methods: {
            getSwipeDate(){
                this.$http.get('http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg').then(result =>{
                    // console.log("调用成功返回的数据");
                    //模拟后台数据
                    // console.log(result)
                    result.data = [{img:'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',url:''},
                        {img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1942507828,2198180087&fm=26&gp=0.jpg',url:''},
                        {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864327368,2065650394&fm=26&gp=0.jpg',url:''}]
                    if(result.status === 200){
                        this.swipeList = result.data;
                    }else{
                        Toast('获取轮播图失败！')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: #8a6de9;
            }
            &:nth-child(2){
                background-color: #6641e2;
            }
            &:nth-child(3){
                background-color: #0062cc;
            }
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>
