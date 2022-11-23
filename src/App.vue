<template>
  <div>
    <Top></Top>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components:{
    Top,Footer
  }
}
</script>

<style>
body{
  overflow: auto;
  background-color: #fff;
}
</style>