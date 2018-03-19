<template>
  <v-card class="login">
    <v-card-row class="blue darken-1 title">
      <v-card-title>
        <span class="white--text">登录</span>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card-row>
    <v-card-text class="input">
      <v-row>
          <v-col xs12>
            <v-text-field
            v-model="form.username"
            name="username"
            type="text"
            label="用户名/手机号/邮箱"
            placeholder="请输入用户名"
            prepend-icon="account_box"
          ></v-text-field>  
          <span class="red--text">{{userErrors.errorText}}</span>  
          </v-col>
          <v-col xs12>
            <v-text-field
            v-model="form.password"
            name="password"
            type="text"
       0     label="密码"
            placeholder="请输入密码"
            prepend-icon="lock_open"
          ></v-text-field>
          <span class="red--text" >{{passwordErrors.errorText}}</span>
          </v-col>
      </v-row>
      <v-row>
        <v-col xs8>
          <v-text-field
            v-model="form.checkCode"
            name="checkCode"
            type="text"
            label="验证码"
            placeholder="请输入验证码"
            prepend-icon="check_circle"
          ></v-text-field>
          <span class="red--text" >{{checkCodeErrors.errorText}}</span> 
        </v-col>
        <v-col xs4>
          <!-- <img id="checkcodeCreate" src= "/auth/getCheckCode.do"  alt="验证码"> -->
          <img :src="codeImg" id="checkcodeCreate" v-on:click="change()" > 
        </v-col>
      </v-row>
      <v-row>
        <v-col xs3 offset-xs8>
          <v-dialog v-model="isShowDialog">
            <a herf="javascript:void(0);" style="cursor: pointer;" slot="activator">忘记密码</a>
            <!-- <v-btn primary light slot="activator">Open Dialog</v-btn> -->
            <v-card>
              <v-card-row>
                <v-card-title>找回密码</v-card-title>
              </v-card-row>
              <v-card-row>
                <v-card-text>
                  <v-text-field label="用户名/输入您的用户名" placeholder="请输入您的用户名" v-model="username" required>
                  </v-text-field>
                </v-card-text>
              </v-card-row>
              <v-card-row actions>
                <v-btn class="blue--text darken-1" flat @click.native="isShowDialog = false">取消</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="isShowDialog = false || resetPassword()">确认</v-btn>
              </v-card-row>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>
    </v-card-text>
    <v-card-text>
      <v-btn primary dark @click.native="submit"
                          @keyup.enter.native="submit">
                          登录</v-btn>
    </v-card-text>
    <my-dialog :is-show="isShowAlertDialog" @on-close="closeDialog('isShowAlertDialog')">
    </my-dialog>
    <div class="motify" :style="{display: showMessage?'block':'none'}">
        <div class="motify-inner">已成功登陆</div>
  </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import Dialog from './alert/dialog.vue'
import Router from 'vue-router'
const router = new Router()
export default {
  components: {
    MyDialog: Dialog
  },
  name: 'login',
  data () {
    return {
      codeImg: '',
      errorText: '',
      alert: false,
      formItems: [
        {
          name: 'username',
          type: 'text',
          label: '用户名',
          placeholder: '请输入您的用户名'
        },
        {
          name: 'password',
          type: 'password',
          label: '密码',
          placeholder: '请输入您的密码'
        }
      ],
      form: {
        username: '',
        password: '',
        checkCode: ''
      },
      username: '',
      isShowDialog: false,
      isShowAlertDialog: false,
      showcheckcode: null,
      showMessage: false
    }
  },
  mounted(){
    this.init();
    this.$nextTick();
  },
  methods: {
    ...mapActions([
      'findPassword'
    ]),
    init() {
     this.codeImg = 'http://localhost:8080/auth/getCheckCode.do'
     const router = new Router()
    },
    change(){
        var _this = this;
        axios.get('/auth/getCheckCode.do').then(function(res) {
          
         _this.codeImg = 'http://localhost:8080'+res.config.url+'?='+Math.random()
        })
      },
    open() {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      },
    submit () {
      var username = this.form.username
      var pass = this.form.password
      var checkcode = this.form.checkCode
      var _this = this;
      if (!this.check({
        username: username,
        pass: pass,
        checkcode: checkcode
      })) return
      // this.$store.dispatch('userLogin', this.form).then(function(res) {
      //   console.log(res)
         
      //   var _this = this
      //   if (res.data.status === 200) {
      //      _this.open();
          
      //      console.log(11111)
      //   }
      // })
      //TODO 权限不同 跳转不同
      axios.post('auth/login.do',_this.form).then(function(res){
        console.log(res)
         if (res.data.status === 200) {
           router.push('/')
           _this.open();
           $('ul li:nth-child(2) body-2').html('欢迎'+''+res.data.data.username)
           console.log(res.data.data.username)
           $('ul li:nth-child(3)').hide();
         }
      })
  
    },
    check (obj) {
      if (this.isEmpty(obj.username)) {
        this.isShowAlertDialog = true
        this.alerttest.content = '用户名不能为空'
        return false
      }
      if (this.isEmpty(obj.pass)) {
        alert('密码不能为空')
        return false
      }
      if (this.isEmpty(obj.checkcode)) {
        alert('验证码不能为')
        return false
      }
      return true
    },
    isEmpty (val) {
      return val === ''
    },
    resetPassword () {
      this.findPassword(this.username)
    },
    closeDialog (attr) {
      this[attr] = false
    }
  },
  computed: {
    userErrors () {
      let errorText
      if (this.form.username === '') {
        errorText = ''
      } else if (typeof (this.form.username) === 'number') {
        if (!/^1[0-9]{10}/.test(this.form.username)) {
          errorText = '请输入正确的手机号'
        }
      } else if (typeof (this.form.username) === 'string') {
        if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.form.username)) {
          errorText = '请输入正确的邮箱或手机号'
        }
      }
      return {
        errorText
      }
    },
    checkCodeErrors () {
      let errorText
      if (this.form.checkCode === '') {
        errorText = ''
      } else {
        errorText = '请输入验证码'
      }
      return {
        errorText
      }
    },
    passwordErrors () {
      let errorText
      if (this.form.password === '') {
        errorText = ''
      } else if (!/^\w{1,6}$/g.test(this.form.password)) {
        errorText = '，不能使用空格！'
      }
      return {
        errorText
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--用户登录： 数字/字母/下划线 
    密码：    请输入6-16位密码，区分大小写，不能使用空格！ -->
<style scoped>
.login {
  width: 500px;
  margin: auto;
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
}

.title {
  margin-bottom: 30px;
}

.input {
  width: 400px;
  margin: auto;
}
.motify {
    display: none
  }
.motify .motify-inner {
    padding: 10px;
    text-align: center;
    word-wrap: break-word
}
</style>
