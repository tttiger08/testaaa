<template>
    <div>
        <swiper :options="swiperOptions" class="swiper">
            <swiper-slide>
                <img src="../assets/images/dog.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img  src="../assets/images/dog.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img  src="../assets/images/dog.jpg" alt />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
        <div class="time">
            <span class="start">园所开始时间</span>
            <span class="data">2020-05-01</span>
        </div>
        <div class="time">
            <span class="end">园所结束时间</span>
            <span class="data">2020-05-02</span>
        </div>
    </div>

</template>

<style lang='stylus'>
    .swiper img{
        width: 10rem;
        height: 7.466667rem;
        position: relative;
    }
    .swiper-pagination-bullet {
        background-color:#ffffff;
        opacity:1;
    }
    .swiper-pagination-bullet-active {
        background-color: #4CC172;
    }
    span {
        font-size:.373333rem;
    }

    .time {
        padding: 0 .4rem 0 1.066667rem;
        display: flex;
        height: 1.333333rem;
        line-height: 1.333333rem;
    }
    .start,.end {
        flex: 1;
        position: relative;
    }
    .data {
        color:#999999;
        width: 2rem;  
    }
    .start::before {
        content: '';
        width: .133333rem;
        height: .133333rem;
        background-color: #4CC172;
        border-radius: .066667rem;
        position: absolute;
        left: -0.6rem;
        top: .573333rem;
    }
    .end::before {
        content: '';
        width: .133333rem;
        height: .133333rem;
        background-color: #FF6666;
        border-radius: .066667rem;
        position: absolute;
        left: -0.6rem;
        top: .573333rem;
    }
</style>

<script>
export default {
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }                   
        }
    }
};
</script>