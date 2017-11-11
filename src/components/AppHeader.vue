<template>
  <v-toolbar-items style="width: 100%;">
    <v-toolbar-item style="margin-right: 70%;">
      <router-link to="/" class="link" @mouseover.native="show" @mouseout.native="unshow">二手交易平台
       <v-icon >home</v-icon>
      </router-link>
       
    </v-toolbar-item>
    <v-toolbar-item>
      <router-link to="/login" class="link" @mouseover.native="turnlogred" @mouseout.native='turnlogwhite'>
       <div v-bind:style='styleObject.log'>
        <body-2>登陆</body-2>
        <img src="../assets/ic_group_work_white_18dp_2x.png" height="32" width="32">
       </div>
      </router-link>
    </v-toolbar-item>
    <v-toolbar-item>
      <router-link to="/sign-up" class="link" @mouseover.native="turnregred" @mouseout.native='turnregwhite'>
        <div v-bind:style='styleObject.reg'>
         <body-2>注册</body-2>
         <img src="../assets/ic_touch_app_white_18dp_2x.png" height="32" width="32">
        </div>
      </router-link>
    </v-toolbar-item>
    <v-toolbar-item>
      <router-link to="/my-order" class="link" @mouseover.native="turnpercenterred" @mouseout.native='turnpercenterwhite'>
        <div v-bind:style='styleObject.percenter'>
         <body-2>个人中心</body-2>
         <img src="../assets/ic_person_pin_white_18dp_2x.png" height="32" width="32">
        </div>
      </router-link>
    </v-toolbar-item>
    <v-toolbar-item>
      <router-link to="/cart" class="link" @mouseover.native="turncartred" @mouseout.native='turncartwhite'>
        <div v-bind:style='styleObject.cart'>
         <body-2>购物车</body-2>
         <img src="../assets/ic_shopping_cart_white_18dp_2x.png">
       </div>
      </router-link>
    </v-toolbar-item>
    </v-toolbar-items>
</template>

<script>
import Login from './Login.vue'
import axios from 'axios'
export default {
  name: 'app-header',
  components: {
    LoginUser: Login
  },
  data () {
    return {
      header: 'header',
      isShow: false,
      styleObject: {
        log: {color: ''},
        reg: {color: ''},
        percenter: {color: ''},
        cart: {color: ''}
      },
      usertag: false,
      username: ''
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    unshow () {
      this.isShow = false
    },
    // TODO:代码优化 --数组绑定
    turnlogred () {
      this.styleObject.log.color = 'red'
    },
    turnlogwhite () {
      this.styleObject.log.color = 'white'
    },
    turnregred () {
      this.styleObject.reg.color = 'red'
    },
    turnregwhite () {
      this.styleObject.reg.color = 'white'
    },
    turnpercenterred () {
      this.styleObject.percenter.color = 'red'
    },
    turnpercenterwhite () {
      this.styleObject.percenter.color = 'white'
    },
    turncartwhite () {
      this.styleObject.cart.color = 'white'
    },
    turncartred () {
      this.styleObject.cart.color = 'red'
    },
    showname () {
      axios.get('auth/logout.do')
      .then(function (res) {
        this.username = res.data.msg
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  color: #fff;
  text-decoration: none;
}

</style>
