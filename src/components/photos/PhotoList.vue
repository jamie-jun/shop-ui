<template>
    <div>
        <!-- 顶部滑动条 Mui tab-top-webview-main.html-->
       <!-- 默认是class="mui-slider mui-fullscreen"  要去掉不然会全屏显示slider-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                    <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'' ]" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--图片列表区域-->
        <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    //导入 mui js文件
    import mui from  '../../lib/mui/js/mui.min'
    export default {
        name: "photoList",
        data(){
            return {
                cates: [], //所有分类列表
                list:[]  //图片列表的数组
            };
        },
        created(){
            this.getAllCatgory();
            //默认进去页面 请求所有图片
            this.getPhotoListByCateId(0);
        },
        mounted() {//一面渲染完成放在页面中执行的钩子函数
            //初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllCatgory(){
                //获取所有图片分类
                this.$http.get('api/getimgcategory').then(result =>{
                    if(result.body.status === 0 ){
                        result.body.message.unshift({title: '全部',id: 0});
                        this.cates =result.body.message;
                    }
                })
            },
            getPhotoListByCateId(cateId){
                //根据分类Id获取图片列表
                this.$http.get("api/getimages/"+cateId).then(result =>{
                    if(result.body.status === 0){
                        this.list = result.body.message;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list{
        list-style: none;
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li{
            background-color: #cccccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999999;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            ima[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }
</style>
