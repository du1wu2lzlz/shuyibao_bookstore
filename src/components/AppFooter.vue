<template>
  <div class="footer">
    &copy 2017 书易宝团队
    <router-link to="/about-us"  >
      <v-btn style="margin-left:80%" class="blue white--text">
        数据库提高班
      <v-icon right>email</v-icon>
      </v-btn>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      footer: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
