<template>
  <div id="app">

    <div class="nav">
      <div class="nav_left">
        <img class="logo" src="./assets/img/logo.png" alt="">
        <div class="logo_text">神牛数据</div>
      </div>

      <div class="nav_bar">
        <div>关于我们</div>
        <div>联系我们</div>
        <div>业务能力</div>
        <div>中文 / EN </div>
        <div class="menu_circle">MENU</div>

      </div>

      <div class="information">
        <div class="big_text">God OX</div>

        <div class="small_text">
          <div> custom & development</div>
          <div>金融行业、数字营销、工业互联网</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  background: url(./assets/img/bg.png) no-repeat;
  background-size: cover;
  padding: 40px;
  color: #fff;
}


.logo {
  width: 50px;
  height: 50px;
  margin: 0 40px;

}

.logo_text {
  color: #fff;
  font-size: 50px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}

.nav_bar {
  display: flex;
  color: #fff;
  align-items: center;
}

.nav_bar div {
  margin: 0 40px;
}

.nav_bar img {
  margin: 0 40px;
}

.nav_left {
  display: flex;
  align-items: center;
}

.hangbao {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.big_text {
  font-size: 180px;
  margin-right: 50px;
}

.small_text {
  font-size: 20px;
  color: #fff;
}

.information {
  position: fixed;
  bottom: 80px;
  left: 150px;
  display: flex;
  align-items: center;
}
.menu_circle{
  border: 1px solid #fff;
  padding: 30px;
  border-radius: 50%;
}
</style>
