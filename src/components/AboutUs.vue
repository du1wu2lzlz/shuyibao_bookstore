<template>
      <div class="Ad_banner_section">
      <div class="container">
        <h2>出路数据 职业培训学校 </h2>
        <p> 做您最专业的培训老师</p>
      <div class="show_more">
        <ul>
          <li ><a  v-on:click="showVideo()" class="w3ls_banner_more hvr-icon-hang scroll ">出路数据就业市场介绍</a></li>
          <li ><a  v-show="show"v-on:click="closeVideo()" class="w3ls_banner_more hvr-icon-hang scroll ">x</a></li>
           <embed v-show="show" src="http://player.youku.com/player.php/sid/XMzA0OTY1NDcxMg=/v.swf" mce_src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" quality="high" width="650" height="520"  align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash"
            allowFullScreen='true'></embed>
          <li><a  v-on:click="show1()" class="w3ls_banner_more hvr-icon-hang scroll ">出路数据教学录像摘选</a></li>
          <li ><a  v-show="showAd"v-on:click="close1()" class="w3ls_banner_more hvr-icon-hang scroll ">x</a></li>
            <embed v-show="showAd" src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" mce_src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" quality="high" width="650" height="520"  align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash"
            allowFullScreen='true'></embed>
          <li><a  v-on:click="show2()" class="w3ls_banner_more hvr-icon-hang scroll ">出路数据面试真题摘选</a></li>
          <li ><a  v-show="showAd1"v-on:click="close2()" class="w3ls_banner_more hvr-icon-hang scroll ">x</a></li>
           <embed v-show="showAd1" src="http://player.youku.com/player.php/sid/XMzA0OTY1ODQyNA=/v.swf" mce_src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" quality="high" width="650" height="520"  align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash"
            allowFullScreen='true'></embed>
          <li><a class="w3ls_banner_more  " href="http://www.chuludata.com/"  >了解更多</a></li>
        </ul>
      </div>

    </div>
     
    </div>

</template>
<script>

export default {
  name: 'aboutus',
  data () {
    return {
      show: false,
      showAd: false,
      showAd1: false
    }
  },
  methods: {
    showVideo () {
      this.show = true
    },
    closeVideo () {
      this.show = false
    },
    show1 () {
      this.showAd = true
    },
    close1 () {
      this.showAd = false
    },
    show2 () {
      this.showAd1 = true
    },
    close2 () {
      this.showAd1 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Ad_banner_section{
    background: url(../assets/bg5511.jpg) no-repeat ;
    background-size: cover;
    -webkit-background-size: cover;
    
    min-height: 850px;
    position: relative;
    text-align: center;
    padding: 13em 0 0;
}
.wthree-counter-agile {
    width: 73%;
     
    margin: 25% auto 25%;
}
.Ad_banner_section p {
    letter-spacing: 9px;
    font-size: 2.2em;
    margin-top: 15px;
    margin: 2% auto;
    width: 78%;
  }

.show_more ul li a.hvr-icon-hang {
    padding: 0.7em 1.5em 0.7em 1.5em;
    letter-spacing: 2px;
  }

.container h2 {
  font-style: 
}
a.w3ls_banner_more:hover{
  border:1px solid #fff !important;
  color:red !important;
  background:none !important;
}
</style>
