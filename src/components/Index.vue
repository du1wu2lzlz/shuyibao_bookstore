<template>
<v-container class="index">
  

  <div class="layer_logo">
    <a href="#/about-us" title="出路数据，无需基础，三个月学习，给你一生的工作！"><img style="width:180px;height:180px;" alt=""></a>
  </div>
  <div class="layer_logo1">
    <a href="#/about-us" title="出路数据，无需基础，三个月学习，给你一生的工作！"><img style="width:180px;height:180px;" alt=""></a>
  </div>
  <search></search>
  <v-row class="menu-container">
    <v-col xs2>
      <h5 class="text-center">图书分类</h5>
      <div v-for="menu in menus">
        <v-menu transition="v-slide-x-transition" bottom right class="index-block">
          <v-btn block primary dark slot="activator" class="deep-orange">
            {{ menu.name }}
          </v-btn>
          <v-list style="position: relation; left: 190px">
            <v-list-item v-for="menuItem in menu.subTypes" @click="search">
              <v-list-tile>
                <v-list-tile-title :id="menuItem.id">{{ menuItem.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
    <v-col xs10>
      <v-carousel>
        <v-carousel-item v-for="item in indexData.carouselObj" :src="item.url" />
      </v-carousel>
    </v-col>
  </v-row>
  <div class="recommend-book">
    <h4>推荐书籍</h4>
    <v-divider/>
    <v-row style="margin-top:50px;">
      <v-col xs3 v-for="book in indexData.recommand">
        <v-card   horizontal>
          <v-card-row :img="book.imgUrl" @click.native="redirectToGoodsDetail(book.id)" height="200px" class="row pointer"></v-card-row>
          <v-card-column width="100px">
            <v-card-row class="grey--text">
              <v-card-text>
                <h6>{{book.name}}</h6>
                <strong class="red--text">￥{{book.price}}</strong>
                <div>销量：{{book.via}}</div>
                <div>还有{{book.count}}本</div>
              </v-card-text>
            </v-card-row>
          </v-card-column>
        </v-card>
      </v-col>
    </v-row>
  </div>
</v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Search from './Search'

export default {
  name: 'index',
  components: { Search },
  mounted () {
    this.$store.dispatch('getAllBookTypes')
    this.getIndex().then(indexData => {
      this.indexData = indexData
    })
  },
  data () {
    return {
      index: 'index',
      indexData: {}
    }
  },
  computed: mapState({
    menus (state) {
      return state.book.bookTypes
    }
  }),
  methods: {
    ...mapActions([
      'getIndex'
    ]),
    search (e) {
      this.$store.dispatch('goodsSearch', {types: [{id: e.target.id}]})
    },
    redirectToGoodsDetail (indexData) {
      this.$store.dispatch('redirectToGoodsDetail',  indexData)
    }
    //原理是取中间的毫秒数，再转换成js的Date类型
   ChangeDateFormat(val) {
    if (val != null) {
        var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
        //月份为0-11，所以+1，月份小于10时补个0
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return date.getFullYear() + "-" + month + "-" + currentDate;
    }
    return "";
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.menu-container {
  display: block;
}

.menu-container .menu__content {
  left: 300px!important;
}

.menu-container .menu__activator {
    margin-bottom: -11px;
}

.index-block {
  width: 100%;
}

.text-center {
  text-align: center;
}
.layer_logo {
    display: block;
    width: 50%;
    height: 180px;
    width: 180px;
    background: url(../assets/school.png) center center no-repeat;
    background-size: left;
    position: fixed;
    top: 22%;
    left: 5%;
    background-size: cover;
    -webkit-background-size: cover;
   
}
.layer_logo1{
    display: block;
    width: 50%;
    height: 180px;
    width: 180px;
    background: url(../assets/school.png) center center no-repeat;
    background-size: left;
    position: fixed;
    top: 22%;
    left: 85%;
    background-size: cover;
    -webkit-background-size: cover;
   
}
a:hover{
 color: red;
}

</style>
