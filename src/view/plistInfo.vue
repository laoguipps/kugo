<template>
    <div class="plistinfo-top">
       <div class="plist-info-title">
         <img src="../assets/images/goback_icon.png" alt="">
         <span>如果重回1998，你会想起谁</span>
       </div>
      <div class="plist-info-intro">
        <p :class="{'plist-info-intro-hide':hideDesp}">
          给你一张1998年的CD，我们一起来听听这些流失的时光和故事。

          家里的彩色电视机不见了踪影
          天真的孩童也已长大成人
          但当那个年代的记忆再次被唤起时
          还是忍不住感慨
          1998年，很庆幸，我曾拥有它！

          1998年，一个充满希望的年代
          20年过去了，纵使我们失去了青春
          失去了激情，曾经美好的记忆将永存心底
          但愿我们依旧能怀着希望，继续前行！

          文|李羽航
          封|王菲
          2018.10.02
        </p>
        <img src="../assets/images/close_icon.png" @click="desp()" v-if="hideDesp">
        <img src="../assets/images/open_icon.png" @click="desp()" v-else>
      </div>
      <div class="plist-info-transform"></div>
    </div>
</template>

<script>
export default {
  name: 'plist-info',
  data () {
    return {
      id: this.$route.params.id,
      hideDesp: true
    }
  },
  methods: {
    desp () {
      this.hideDesp = !this.hideDesp
    }
  }
}
</script>

<style scoped>
.plist-info-title{
  width: 100%;
  height: 148px;
  background-image: url("../assets/images/banner1.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
  .plist-info-title img{
    float: left;
    margin: 10px;
    width: 15px;
  }
  .plist-info-title span{
    color: white;
    font-size: 18px;
    float: left;
    line-height: 45px;
  }
  .plist-info-intro{
    width: 100%;
    padding: 12px;
    font-size: 16px;
    position: relative;
  }
  .plist-info-intro p{
    margin-right: 40px;
    text-align: left;
  }
  .plist-info-intro-hide{
    height: 20px;
    overflow: hidden;
  }
  .plist-info-intro img{
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
  }
  .plist-info-transform{
    height: 5px;
    width: 100%;
    background-color: #e1e1e1;
  }
</style>
