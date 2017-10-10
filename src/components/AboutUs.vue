<template>
  <div class="content">
    <div class="w3ls_banner_section">
      <div class="container">
        <h2>出路数据 职业培训学校 </h2>
        <p> 做您最专业的培训老师</p>
      <div class="agileits_more">
        <ul>
          <li><a  v-on:click="showVideo()" class="w3ls_banner_more hvr-icon-hang scroll ">点击观看视频</a></li>
          <li><a  v-show="show"v-on:click="closeVideo()" class="w3ls_banner_more hvr-icon-hang scroll ">x</a></li>
           <embed v-show="show" src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" mce_src="http://player.youku.com/player.php/sid/XMzA0OTY1OTY1Mg=/v.swf" quality="high" width="650" height="520"  align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash"
            allowFullScreen='true'></embed>
          <li><a  href="http://www.chuludata.com/" class="hvr-icon-hang" >了解更多</a></li>
        </ul>
      </div>

    </div>
     
    </div>
  </div>
</template>
<script>

export default {
  name: 'aboutus',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showVideo () {
      this.show = true
    },
    closeVideo () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w3ls_banner_section{
    background: url(../assets/g1.jpg) no-repeat 0px 0px;
    background-size: cover;
    -webkit-background-size: cover;
    
    min-height: 850px;
    position: relative;
    text-align: center;
    padding: 7em 0 0;
}
.wthree-counter-agile {
    width: 73%;
     
    margin: 25% auto 25%;
}
.w3ls_banner_section p {
    letter-spacing: 9px;
    font-size: 2.2em;
    margin-top: 15px;
    margin: 2% auto;
    width: 78%;
  }

.agileits_more ul li a.hvr-icon-hang {
    padding: 0.7em 1.5em 0.7em 1.5em;
    letter-spacing: 2px;
  }
a:hover{
  color: red;
}
</style>
