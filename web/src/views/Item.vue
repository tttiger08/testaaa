<template>
    <div class="contain">
      <div class="hd">
        <i class="iconfont icon-qiehuanlie" @click="showPopup"></i>
        <van-popup v-model="show" round position="bottom" :overlay="true" >
        <van-picker
          show-toolbar
          title="园区切换"
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
          @change="onChange"
        />
    </van-popup>
        <span>{{message}}</span>
      </div>
      <div class="my-items">
        <span>我的事项</span>
        
        <div class="link">
          <router-link tag="div" to="/newitem">
            <div>
              <span>10</span>
              <span>新事项</span>
            </div>
          </router-link>
          <router-link tag="div" to="/ingitem">
            <div>
              <span>10</span>
              <span>待完成</span>
            </div>
          </router-link>
          <router-link tag="div" to="/enditem">
            <div>
              <span>10</span>
              <span>已完成</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="new-item">
        <div class="item-nav">新事项</div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="new-item">
        <div class="item-nav">新事项</div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="new-item">
        <div class="item-nav">新事项</div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
        <div class="item">
          <div class="item-hd">
            <img src="../assets/images/new-icon.png" alt="">
            <span>2020-5-18</span>
          </div>
          <div class="item-bd">
            <span>艾乐教育集团艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部艾乐教育集团总部</span>
          </div>
          <div class="item-ft">
            <router-link tag="div" to="/ingitem">
              <span class="more">查看详情</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>
<script>
export default {
    data() {
        return {
          message:"请选择代理区域",
          columns: ["广州艾乐教育品牌管理有限公司", "广州", "温州", "嘉兴", "湖州"],
          show: false
        }
    },
    methods: {

      onChange(value) {
        this.message = value
      },
      onConfirm(value) {
        this.message = value
        this.show = false
      },

      onCancel() {
        this.show = false
      },
      showPopup() {
        this.show = true;
      }
    }    
};
</script>

<style scoped src="../assets/css/item.css"></style>
