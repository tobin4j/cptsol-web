<template>
  <div class="footer ">

    <div class="footer-second">
      <div class="footer-third flex-col">
        <div style="height: 110px" class="flex-row">

          <img alt="logo" src="../../assets/logo_text.png" style="height:51px;width:337px;margin-top: 30px;margin-left: 70px "  />

<!--          <div class="footer-copyright-text">-->
<!--              <p >版权所有：中国文化信息协会汉语推广工作委员会</p>-->
<!--              <p >网站运维：蒙盈行达（北京）网络科技有限公司</p>-->
<!--          </div>-->

          <div class="footer-wxcode">
            <img src="../../assets/WxCode.png" style="width: 200px;height: 200px">
            <p>欢迎关注公众号</p>
          </div>

        </div>
        <div class="footer-split"></div>
        <div style="height: 70px" class="footer-msg">
          京ICP备2022004998号  Copyright © 2021 - 2022 国际中文教师发展研究网.All rights reserved.
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      
    }
  },
  methods: {
    // 方法
  },
  created () {
    // 生命钩子
  },
  computed: {
    // 计算属性
  }
}
</script>

<style scoped>
  .footer{
    background: #FFFFFF;
    height: 180px;
    z-index: 1;
    /*position: absolute;*/
  }
  .footer-second{
    background: rgba(199, 207, 215, 1);
    /*width: 97%;*/
    margin-left: 35px;
    height: 130px;
    position: relative;
    right: 0;
    bottom: 0;
    top: 50px;
    /*margin-left: auto;*/
    z-index: 2;
    border-radius: 10px 0px 0px 0px;
  }
  .footer-third{
    background: #2F318B;
    /*width: 95%;*/
    height: 180px;
    margin-left: 35px;
    bottom: 50px;
    position: relative;
    z-index: 3;
    border-radius: 10px 0px 0px 0px;
  }
  .footer-msg{
    /*width: 527px;*/
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 144, 1);
    line-height: 68px;
    /*margin-top: 23px;*/
    margin-left: 70px;
  }
  .footer-split{
    width: calc(100% - 140px);

    opacity: 0.13;
    border: 1px solid #FFFFFF;
    margin: 0 auto auto 70px;
  }
  .footer-logo{
    margin-top: 63px;
    margin-left: 42px;
  }
  .footer-logo-text{
    margin-top: 59px;
    margin-left: 4px;
  }
  .footer-logo-text-1{
    height: 25px;
    font-size: 18px;
    font-family: STXingkaiSC-Bold, STXingkaiSC;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 25px;
  }
  .footer-logo-text-2{
    height: 17px;
    font-size: 12px;
    font-family: STXingkaiSC-Light, STXingkaiSC;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 17px;
  }
  .footer-copyright-text{
    margin-top: 36px;
    margin-left: 45px;
    height: 24px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    /*line-height: 24px;*/
  }
  .footer-wxcode{
    margin-left: auto;
    margin-right: 70px;
    margin-top: -145px;

    text-align: center;
  }
  .footer-wxcode p{
    margin-top: 15px;
    margin-bottom: 15px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 17px;
  }


</style>