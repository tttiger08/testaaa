<template>
    <div class="home">
        <router-link tag="div" to="/home/information" class="f-link">
                <img src="../assets/images/dog.jpg" alt="">
                <div class="data">
                    <span>这是一个很长的呢陈</span>
                    <span>12345678901</span>
                </div>
        </router-link>

        <router-link tag="div" to="/home/service" class="link">
                <i class="iconfont icon-kefu"></i>
                <span> 联系督导</span>
        </router-link>

        <router-link tag="div" to="/home/deadline" class="link"> 
                <i class="iconfont icon-shijian"></i>
                <span>园所期限</span>
        </router-link>

        <router-link tag="div" to="/home/manage" class="link">
                <i class="iconfont icon-zizhanghaoguanli"></i>
                <span>子账号管理</span>
        </router-link>

        <router-link tag="div" to="/home/dowload" class="link">
                <i class="iconfont icon-xiazai1"></i>
                <span>我的下载</span>
        </router-link>

        <router-link tag="div" to="/home/notice" class="link">
                <i class="iconfont icon-xiaoxi"></i>
                <span>消息公告</span>
        </router-link>
    </div>
</template>

<style scoped>

    .home {
        height: 100vh;
        background-color: #fff;
        padding: .4rem .4rem 0;
    }
    .f-link {
        position: relative;
        overflow: hidden;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
    }
    .f-link img{
        float: left;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        vertical-align: middle;
    }
    .data {
        position: absolute;
        top: 50%;
        left: 1.733333rem;
        transform: translateY(-50%);   
        width: 100%;
    }
    .data span{
        display: block;
    }
    .data span:nth-child(1) {
        font-size: .426667rem;
    }
    .data span:nth-child(2) {
        font-size: .373333rem;
        color: #999999;
    }
    .data::after {
        content: '';
        width: .2rem;
        height: .2rem;
        border-top: 3px solid #999999;
        border-right: 3px solid #999999;
        transform: rotate(45deg);
        
        position: absolute;
        top: .453333rem;
        right: 1.8rem; 
    }
    .link {
        width: 100%;
        margin: 0.76rem 0;
        position: relative;
    }
    .link::after {
        content: '';
        width: .16rem;
        height: .16rem;
        border-top: .026667rem solid #999999;
        border-right: .026667rem solid #999999;
        transform: rotate(45deg);
        position: absolute;
        right: .04rem;
        top: .293333rem;
    }
    .link i {
        font-size: .533333rem;
        vertical-align: -8%;
        
    }
    .link span{
        font-size: .373333rem;
        padding-left: .2rem;
        
    }


</style>

<script>
export default {
    data() {
        return {
        }
    },
    
};
</script>
