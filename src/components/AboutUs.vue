<template>
  <v-card>
    <search></search>
    <v-container class="alert">
      <v-alert error value="true" 
        style="height:100px" v-model="showAlert">
        错误请求.
      </v-alert>
    </v-container>
    <v-container class="cart">
	  <div class="text-xs-center">
	    <v-icon large v-badge="{ value: 1, left: true}" class="grey--text text--lighten-1">shopping_cart</v-icon>

	    <v-icon large v-badge="{ value: '!' }" class="grey--text red--after">mail</v-icon>
	  </div>
	</v-container>
  </div>
  <v-btn @click.native="get()"></v-btn>
  <div> 
  {{myMessage}}
  </div>
  </v-card>
</template>

<script>
import Search from './Search'
import axios from 'axios'
export default {
  name: 'aboutus',
  components: { Search },
  data () {
    return {
      showAlert: false,
      myMessage: '没有数据传输'

    }
  },
  methods: {
    get () {         // 报415错误
      axios.get('goods/type/selectAll.do ')
      .then(function (res) {
        this.myMessage = res.data.msg
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
	width: 300px;
	margin-right: 10px;
}
.cart{
	margin-bottom: 15px
}
</style>
