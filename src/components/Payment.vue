<template>
  <v-container class="payment">
    <h4>支付订单</h4>
    <v-divider/>
    <div class="order-item" v-for="order in orderList">
      <v-card>
        <v-card-row>
          <v-card-title>
            <v-col xs4 style="width: 33.3%">
              卖家名：{{order.sellerName}}
            </v-col>
            <v-col xs8 style="width: 66.7%">
              订单号：<span style="font-size: 10px">{{order.id}}</span>
            </v-col>
          </v-card-title>
        </v-card-row>
        <v-divider/>
        <v-card-text>
          <v-card-row>
            <v-col xs2 class="text-center cell">
              商品
            </v-col>
            <v-col xs2 class="text-center cell">
              数量
            </v-col>
            <v-col xs2 class="text-center cell">
              价格
            </v-col>
            <v-col xs2 class="text-center cell">
              总价
            </v-col>
            <v-col xs2 class="text-center cell">
              状态
            </v-col>
          </v-card-row>
        </v-card-text>
        <v-divider/>
        <v-card-text v-for="(orderItem, index) in order.orderItems">
          <v-card-row>
            <v-col xs2 class="text-center cell">
              <img :src="orderItem.goods.imgUrl" :alt="orderItem.goods.name" class="cover">
              <p class="text-center">{{orderItem.goods.name}}</p>
            </v-col>
            <v-col xs2 class="text-center cell">
              {{orderItem.goodsCount}}
            </v-col>
            <v-col xs2 class="text-center cell">
              {{orderItem.goods.price}}
            </v-col>
            <v-col xs2 class="text-center cell">
              {{(orderItem.goods.price * orderItem.goodsCount).toFixed(2)}}
            </v-col>
            <v-col xs2 class="text-center cell">
              {{orderStatusCodeToText[orderItem.status]}}
            </v-col>
          </v-card-row>
          <v-divider v-if="order.orderItems.length - index > 1" />
        </v-card-text>
        <v-divider/>
        <v-card-row>
          <v-col xs3 offset-xs1 style="width: 20%; margin-left: 10%;">
            总计：{{order.totalPrice}}元
          </v-col>
          <v-col xs8 style="width: 70%;">
            购买时间：{{(new Date(order.createTime)).toLocaleDateString()}}
          </v-col>
        </v-card-row>
        <v-divider/>
        <v-card-row>
          <v-col xs11 offset-xs1 style="width: 90%; margin-left: 10%;">
            收货地址：{{order.address}}
          </v-col>
        </v-card-row>
        <v-layout row justify-right>
          <v-dialog  persistent>
            <v-card  style="height: 370px;">
              <v-card-title class="headline" style="padding-left:380px">请完成扫码支付</v-card-title>
              <v-card-text  style="padding-left:360px">
                请扫描下方二维码完成支付(并附上您的用户名，谢谢！)
                
              </v-card-text>
              <div style="width:300px; height:150px; text-align:center; padding-top:15px;">
                   <img style="padding-left:400px" src="../assets/test.png"  />
              </div>
              <v-card-actions>
                 <v-spacer></v-spacer>
              <v-btn class="blue--text darken-1" flat @click.native="dialog = false" style="padding-left: 639.722px">关闭</v-btn>
              <v-btn class="blue--text darken-1" flat @click.native="submit()">完成支付</v-btn>
             </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Router from 'vue-router'
import orderStatusCodeToText from '../utils/orderStatusCodeToText'

const router = new Router()

export default {
  name: 'payment',
  mounted () {
    this.orderList = JSON.parse(this.$route.query.orderList)
  },
  data () {
    return {
      orderStatusCodeToText,
      orderList: [],
      dialog: false
    }
  },
  methods: {
    ...mapActions([
      'confirmReceipt',
      'payAll'
    ]),
    submit () {
      let orders = this.orderList.reduce((preOrder, order) => {
        return preOrder.concat(order.orderItems.map((orderItem) => orderItem.id))
      }, [])

      this.payAll(orders).then(data => {
        router.push('/my-order')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.payment {
  margin-bottom: 100px;
}

.order-item {
  margin-top: 20px;
}

.cover {
  width: 100px;
  height: 100%;
}

.cell {
  width: 20%
}
</style>
