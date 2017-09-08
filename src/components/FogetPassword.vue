<template>
  <v-dialog   v-if="isShow">
    <v-card-row>
      <v-card-title>找回密码</v-card-title>
    </v-card-row>
    <v-card-row>
      <v-card-text>
        <v-text-field label="用户名" placeholder="请输入您的用户名" v-model="username" required>
        </v-text-field>
      </v-card-text>
    </v-card-row>
    <v-card-row actions>
      <v-btn class="blue--text darken-1" flat @click.native="isShowDialog = false">取消</v-btn>
      <v-btn class="blue--text darken-1" flat @click.native="isShowDialog = false || resetPassword()">确认</v-btn>
    </v-card-row>
    </v-card>
  </v-dialog>
</template>


<script>
export default{
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'findPassword'
    ]),
    resetPassword () {
      this.findPassword(this.username)
    }
  }
}

</script>

<style >


</style>