<template>
    <div>
        <header>
            <div class="section-inner">
                <div class="header-area">
                    <div class="logo-main">
                        <router-link to="/">
                            <img src="../img/logo.png" alt="GIG INC.">
                            <div>神牛数据</div>
                        </router-link>
                    </div>
                    <nav>
                        <ul class="navi-global">
                            <li><router-link class="main-navi" to="/work"><span>项目案例</span></router-link></li>
                            <li class="menu" data-layer="service"><router-link class="main-navi"
                                    to="/ability"><span>业务能力</span></router-link>
                            </li>
                            <li><router-link class="main-navi" to="/about"><span>关于我们</span></router-link></li>
                            <li><router-link class="main-navi" to="/contact"><span>联系我们</span></router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>

    </div>
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 500;
}

header .section-inner {
    z-index: 10;
    margin: 0 auto;
    position: relative;
    width: 1200px;
    overflow: hidden;
}

.text-area {
    margin-left: 300px;
}

header .header-area {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    transition: padding-top 0.5s linear;
}

header .header-area .logo-main img {
    width: 50px;
    height: 50px;
    margin-right: 30px;
}

header .header-area .logo-main a {
    display: flex;
    text-decoration: none;
    color: #000;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
}
header nav .navi-global {
    display: flex;
    justify-content: center;
}

header nav .navi-global li {
    margin-right: 28px;
}

header nav .navi-global li a {
    position: relative;
    display: block;
    text-decoration: none;
    color: #111;
    font-size: 14px;
    font-family: "akrobat";
    letter-spacing: 3.5px;
}

header nav .navi-global li span {
    position: relative;
    font-family: "akrobat";
}

header nav .navi-global li span:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    border-bottom: solid 2px #111;
    transition: width 0.2s cubic-bezier(0.79, 0.17, 0.15, 0.96) 0.05s;
}

header nav .navi-global li.menu a {
    padding-right: 15px;
}

header nav .navi-global li a {
    position: relative;
    display: block;
    text-decoration: none;
    color: #111;
    font-size: 14px;
    font-family: "akrobat";
    letter-spacing: 3.5px;
}
</style>