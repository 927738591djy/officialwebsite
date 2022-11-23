<template>
  <div>
    <Top></Top>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import '@/assets/style/reset.css'
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
</style>