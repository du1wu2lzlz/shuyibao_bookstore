<template>
 <div id="welcome">
   <div class="weather">
     <div class="today">
      <p>地点: {{city.name}}</p>
      <p>今日天气:{{city.today}}</p>
      <img :src="codeImg"  v-on:click="change()"> 

     </div>
     <p>最高气温:{{city.high}}</p>
     <p>最低气温:{{city.low}}</p>
     <p>最后更新于:{{city.update}}</p>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'welcome',
  data() {
      return {
        city: {
          name   : '',
          update : '',
          today  : ''
        },
        codeImg  : ''
      }
    },
  mounted () {
    this.init()
    this.getWeather()
    this.open()
  },
   destroyed: function () {
    this.recover() 
            
  },
  methods: {
    init() {
      $('header').hide();
      $('.footer').hide();
     
    },
    open() {
        this.$notify({
          title: '',
          message: '已为您更新最新天气',
          type: 'success',
          duration: 2000
        });
      },
      getWeather() {
        var _this = this;
        axios.get('http://weixin.jirengu.com/weather').then(function(res){
           console.log(res)
            var weather = res.data.weather[0]; 
            _this.city.name = weather.city_name;
            _this.city.update =weather.last_update;
            _this.city.today = weather.future[0].text;
            _this.city.high = weather.future[0].high +'℃';
            _this.city.low = weather.future[0].low+'℃';
            _this.codeImg = `//weixin.jirengu.com/images/weather/code/${weather.now.code}.png`
        })
      },
      change(){
         var random = parseInt(10*Math.random())
         this.codeImg = `//weixin.jirengu.com/images/weather/code/${random}.png`
      },
     recover() {
         $('header').show();
         $('.footer').show();    
      }
}}
</script>
<style  scoped>
.weather{
  display: inline-block;
  border: 1px red solid;
  width: 648px;;
  height: 2379px;
}
.today{
  height: 175px;
  width: 568px;
  position: relative;
  display: block;
}
</style>

