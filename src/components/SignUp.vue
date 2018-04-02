<template>
  <!-- <v-card class="sign-up">
    <v-card-row class="blue darken-1 title">
      <v-card-title>
        <span class="white--text">注册</span>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card-row>
    <v-card-text class="input" v-for='(input, index) in formItems'>
      <v-text-field
        v-model="form[input.name]"
        :id="input.index"
        :name="input.name"
        :type="input.type"
        :label="input.label"
        :placeholder="input.placeholder" 
        :prepend-icon="input.prepend"
      ></v-text-field>
    </v-card-text>
    </v-card-text>
    <v-card-text>
      <v-btn primary dark @click.native="submit">注册</v-btn>
    </v-card-text>
  </v-card> -->
  <el-card class="box-card my-box-card">
    <div slot="header" class="clearfix e-header">
    <span class="title">注册</span>
    </div>
    <div class="text item">
      <el-form     :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" size="mediums" class="demo-ruleForm sign-up">
        <el-form-item label="用户名" prop="username" >
        <el-input v-model.number="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail" >
          <el-input v-model="ruleForm2.mail"></el-input>
        </el-form-item>
        <el-form-item class="sign_button">
          <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'sign-up',
  data () {
    var checkMail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入邮箱'));
        }
        setTimeout(() => {
          if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
            console.log(value)
            callback(new Error('邮箱格式不正确'));
          } else {
              callback();
            
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
        username: '',
        password: '',
        mail: '',
      },
        ruleForm2: {
          username: '',
          pass: '',
          checkPass: '',
          mail: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          mail: [
            { validator: checkMail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.form.username = this.ruleForm2.username;
            this.form.password = this.ruleForm2.pass;
            this.form.mail     = this.ruleForm2.mail;
            delete this.form.repeatPassword
            this.$store.dispatch('userSignUp', this.form)
            this.success();
          } else {
           this.error();
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      error() {
        this.$message({
          message: '注册信息填写有误',
          type: 'error'
        });
    },
    success () {
       this.$message({
          message: '注册成功',
          type: 'success'
        });
    },
    init() {
      $('.sign_button .el-form-item__content').attr("margin-left",'0px');
    }
    },
    mounted(){
    this.init();
    
  }
    // return {
    //   formItems: [
    //     {
    //       name: 'username',
    //       type: 'text',
    //       label: '用户名',
    //       placeholder: '请输入您的用户名',
    //       prepend: 'account_box'
    //     },
    //     {
    //       name: 'password',
    //       type: 'password',
    //       label: '密码',
    //       placeholder: '请输入您的密码',
    //       prepend: 'lock_open'
    //     },
    //     {
    //       name: 'repeatPassword',
    //       type: 'password',
    //       label: '重复密码',
    //       placeholder: '请再次输入您的密码',
    //       prepend: 'lock_open'
    //     },
    //     {
    //       name: 'mail',
    //       type: 'email',
    //       label: '电子邮箱',
    //       placeholder: '请输入您的电子邮箱',
    //       prepend: 'mail_box'
    //     }
    //   ],
    //   form: {
    //     username: '',
    //     password: '',
    //     mail: '',
    //   },
    //   error : {
    //         "empty" : "未输入",
    //         "type"  : "输入的格式不正确",
    //         "name"  : "用户名已经被注册了",
    //         "phone" : "手机号码已经被注册过了",
    //         "email" : "邮箱已经被注册了",
    //         "same"  : "两次输入的密码不一致",
    //         "sex"   : "还没有选择性别",
    //         "agree" : "未同意我们的用户的协议",
    //         "what"  : "未知的错误,请联系管理员",
    //         "less"  : "密码至少6位",
    //         "code"  : "验证码错误",
    //         "more"  : "用户名最少3位，最多15位"
    //   }
    // }
  // },
  // methods: {
    // submit () {
    //   var username = this.form.username
    //   var password = this.form.password
    //   var repeatPassword = this.form.repeatPassword
    //   if(!this.checkSignUp({
    //     username: username,
    //     password: password,
    //     repeatPassword: repeatPassword})) 
    //   {
    //     return false
    //     }else{
    //        delete this.form.repeatPassword
    //   this.$store.dispatch('userSignUp', this.form)
    //   this.open();
    //     }
    // },
    // checkSignUp (obj) {
    //   if (this.isEmpty(obj.username)) {
       
    //     window.alert('用户名不能为空') 
    //     return false
    //   }
    //   if (this.isEmpty(obj.password)) {
    //     window.alert('密码不能为空')
    //     return false
    //   }
    //   if (this.isEmpty(obj.repeatPassword)) {
    //     window.alert('密码不能为空')
    //     return false
    //   }
    //   return true
    // },
    // open() {
    //     this.$message({
    //       message: '注册成功',
    //       type: 'success'
    //     });
    // },
    // isEmpty (val) {
    //   return val === ''
    // }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-box-card {
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


.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.e-header{
  text-align: center;
  background-color:#1e88e5;
}
.sign_button{
  margin-left:0px !important;
}
</style>
