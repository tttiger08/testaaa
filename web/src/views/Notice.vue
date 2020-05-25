<template>
    <div class="notice">
        <div class="box">
            <div class="hd">
                <!-- <img src="../assets/images/dog.jpg" class="message">     -->
                <div class="message"></div>
                <span class="title"><strong>新版【通知】上线!</strong></span>
                <span class="date">2020-05-20</span>
                
            </div>
            <div class="bd">
                <p>通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏</p>
            </div>
            <router-link tag="div" to="/home/notice/details" >
                <div class="ft">
                    <span>查看详情</span>
                    <span></span>
                </div>
            </router-link>
    
        </div>
        <div class="box">
            <div class="hd">
                <!-- <img src="../assets/images/dog.jpg" class="message">     -->
                <div class="message"></div>
                <span class="title"><strong>新版【通知】上线!</strong></span>
                <span class="date">2020-05-20</span>
                
            </div>
            <div class="bd">
                <p>通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏</p>
            </div>
            <router-link tag="div" to="/home" >
                <div class="ft">
                    <span>查看详情</span>
                    <span></span>
                </div>
            </router-link>   
        </div>
        <div class="box">
            <div class="hd">
                <!-- <img src="../assets/images/dog.jpg" class="message">     -->
                <div class="message"></div>
                <span class="title"><strong>新版【通知】上线!</strong></span>
                <span class="date">2020-05-20</span>
                
            </div>
            <div class="bd">
                <p>通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏</p>
            </div>
            <router-link tag="div" to="/home" >
                <div class="ft">
                    <span>查看详情</span>
                    <span></span>
                </div>
            </router-link>   
        </div>
        <div class="box">
            <div class="hd">
                <!-- <img src="../assets/images/dog.jpg" class="message">     -->
                <div class="message"></div>
                <span class="title"><strong>新版【通知】上线!</strong></span>
                <span class="date">2020-05-20</span>
                
            </div>
            <div class="bd">
                <p>通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏通知效率急速提升，园所信息不再遗漏</p>
            </div>
            <router-link tag="div" to="/home" >
                <div class="ft">
                    <span>查看详情</span>
                    <span></span>
                </div>
            </router-link>   
        </div>
    </div>
</template>

<style scoped>
    .notice {
        background-color: #FAFAFA;
        padding: 0 .4rem;
        height:100vh; 
        overflow: hidden;
    }
    .box {
        background-color: #ffffff;
        height: 3.666667rem;
        margin-top: .333333rem;
        border-radius: .2rem;
        box-shadow: .026667rem .026667rem .133333rem #fafafa;
        padding: 0 .4rem;
    }
    .hd {
        padding-top: .333333rem;
        display: flex;       
    }
    .hd span {
        line-height: .666667rem;
        font-size: .373333rem;
    }
    .title {
        margin-left: .266667rem;
        flex: 1;
    }
    .message {
        background: url(../assets/images/dog.jpg) no-repeat;
        background-size:  .666667rem  .666667rem;
        vertical-align: bottom;
        width: .666667rem;
        height: .666667rem;
        border-radius: 50%;
        position:relative;
    }
    .message::after {
        content:'';
        width: .133333rem;
        height:.133333rem;
        background-color:#FF6666;
        border-radius: 50%;
        position:absolute;
        top: 0;
        right:.066667rem;
        /* display:block; */
    }
    .date {
        width: 2.866667rem;
        color:#999999;
    }
    .bd {
        height: 1.333333rem;
        border-bottom: 1px solid #eeeeee;;
    }
    .bd p{
        font-size: .32rem;
        line-height: .48rem;
        color:#999999;
    }
    .ft {
        display: flex;
        justify-content: space-between;
        line-height:1.066667rem;
        color: #999999;
    }
    .ft span {
        font-size: .32rem;
    }
    .ft span:last-child {
        position:relative;
    }
    .ft span:last-child::after {
        content: '';
        width: .133333rem;
        height: .133333rem;
        border-top:.026667rem solid #999999;
        border-right:.026667rem  solid #999999;
        position: absolute;
        top:50%;
        right: 0;
        transform: translateY(-50%) rotate(45deg);       
    }
</style>
<script>
export default {
    data() {
        return {
            model:{}
        }
    },
}
</script>