<template>
    <div>

        <div class="wrapper">
            
            <div id="contents" aria-live="polite">


                <div>
                    <main class="works active">
                        <Banner title="About" text="关于我们"></Banner>
                        <section class="section-content js-scroll isView">

                            <div class="section-inner">
                                <div class="about_white">
                                    <h2>ShenNiuData</h2>
                                    <span>专业定制化服务，立足上海，辐射全国
                                    </span>
                                    <div class="about_connect_box">
                                        <p>
                                            上海神牛数据综合服务平台主要从事于大数据开发、前端开发、OA&CRM系统开发、物联网产品开发等。大数据平台于2018年1月发布，是基于DAMA国际数据管理协会标准，以及OMG国际组织的CWM元数据标准，为顾客提供系统平台研发、大数据管理、数据集成处理、数据报表和BI管理等服务。
                                            前端开发包括APP、小程序、公众号、定制化开发。
                                        </p>
                                        <router-link to="/contact" class="connect">
                                            <div class="connect_arrow">
                                                <img class="connect_arrow_img" src="../assets/img/about/arrow.png" alt=""/>
                                            </div>
                                            <div>联系我们</div>
                                        </router-link>
                                    </div>
                                    <img src="../assets/img/about/qiye.png" alt="">
                                </div>

                                <div class="about_more">
                                    <div>更多的我们</div>

                                </div>
                            </div>
                        </section>




                    </main>

                    <div class="tuwen">
                        <div class="wen">
                            <h2>团队成员</h2>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;公司拥有强大管理和研发团队，招揽了互联网、数据研究、技术研发、深资设计等方面的高端人才。公司核心技术团队包括清华等国内知名高校的博士和硕士，具有深厚的技术支持。
                            </p>
                        </div>
                        <img :class="{ 'appear': firstShow }" class="tuwen_img" src="../assets/img/about/chengyuan.png" alt="777">
                    </div>

                    <div class="tuwen">
                        <img class="tuwen_img" :class="{ 'appear': secondShow }" src="../assets/img/about/mubiao.png" alt="">
                        <div class="wenfan">
                            <h2>企业目标</h2>
                            <div>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;在大数据时代浪潮中，神牛数据以未来社区建设作为发展起点，立志成为一家全世界一流智慧终端、融合网、云大脑、N平台的高科技公司！
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tuwen">
                        <div class="wen">
                            <h2>服务理念</h2>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;秉承“奋斗为本，成就客户，创造分享，共同成长”的核心价值观，成为客户长期、稳定、可信赖的合作伙伴，为成为软件开发领域标杆高新企业而奋斗，致力于每位客户的满意和成功。成就客户，共创共赢。
                            </p>
                        </div>
                        <img :class="{'appear': thirdShow }" class="tuwen_img" src="../assets/img/about/fuwu.png" alt="777">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
    name: 'About',
    components:{
        Banner
    },
    data(){
        return{
            firstShow:false,
            secondShow:false,
            thirdShow:false
        }
    },
    mounted(){
        window.addEventListener('scroll',  () => {
        var aboutMore = document.querySelector('.about_more')
        if (window.scrollY >= 1106) {
            aboutMore.style.cssText = `width:${window.scrollY}px;height:1000px;border-radius:0; transition: all 0.7s;`
        }
        if (window.scrollY <= 1494) {
            aboutMore.style.cssText = `height:400px;border-radius:50px; transition: all 0.4s;`
        }
        if (window.scrollY >= 2600) {
                console.log(window.scrollY);
                this.firstShow = true
        }
        if (window.scrollY >= 3000) {
            this.secondShow = true
        }
        if (window.scrollY >= 3600) {
            console.log(window.scrollY);
            this.thirdShow = true
        }

    })

    }
}
</script>

<style scoped>
.appear{
    animation: appear 1s forwards;
}
section .section-inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 120px;
}

.fangkuai {
    background-color: #f4f4f4;
    width: 326px;
    height: 200%;
    position: absolute;
    top: -400px;
    left: 10%;
    transform: rotate(10deg);
    z-index: -1;
}

h1 {
    position: absolute;
    right: 0;
    top: 40px;
    font-size: 11px;
    color: #888888;
    letter-spacing: 1.83px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
    font-weight: normal;
}

.breadcrumbs {
    display: none;
}

a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}



.section-content .section-inner {
    width: 100%;
    margin: 120px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}



main {
    display: block;
}

li {
    list-style: none;
}

body {
    margin: 0;
}

@keyframes see {
    0% {
        transform: translatex(-100%);

    }

    100% {
        transform: translatex(0);

    }
}

@keyframes seetwo {
    0% {
        transform: translatex(200%);

    }

    100% {
        transform: translatex(0);

    }
}

@keyframes seesmall {
    0% {
        transform: translateY(-50%);

    }

    100% {
        transform: translateY(0) rotate(10deg);

    }
}


.about_us {
    margin: 200px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.about_img {
    display: flex;
    flex-direction: column;
    width: 48%;
    height: 400px;
    margin: 30px 0;
    /* margin: 10px; */
}





li {
    list-style: none;
}

body {
    margin: 0;
}

.about_white {
    width: 60%;
}

.about_connect_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-end;
}

.about_connect_box p {
    width: 50%;
    margin: 50px 0;
    font-size: 18px;
    letter-spacing: 3px;
}

.about_white img {
    width: 100%;
    height: 560px;
    border-radius: 10px;
}

.about_white h2 {
    font-size: 50px;
    color: #f0d25a;
    margin: 0;
}

.about_white span {
    font-size: 40px;
    color: #000;
    margin: 30px 0 0 0;
    display: block;
}

.connect {
    display: block;
    color: #000;
    margin-bottom: 50px;
    color: #1d1d1d;
    border: 1px solid #d8d8d8;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    justify-content: space-between;
    border-radius: 50px;
}

.connect_arrow {
    /* position: relative; */
    background-color: #f0d25a;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 60px;
    display: flex;
}

.connect_arrow .connect_arrow_img {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    z-index: 30;

}

.about_more {
    position: relative;
    font-size: 70px;
    color: #fff;
    width: 735px;
    height: 400px;
    background-color: #f0d25a;
    margin: 80px auto;
    border-radius: 30px;
    text-align: center;
    line-height: 400px;
    z-index: 0;
}

@keyframes appear {
    0% {
        opacity: 0;
        transform: translateX(-100%);

    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.tuwen {
    display: flex;
    justify-content: space-between;
    margin: 150px 20px;
    align-items: center;

}

.tuwen img {
    border-radius: 15px;
    width: 600px;
    height: 400px;
    /* animation: appear 3s forwards infinite; */
    transition: all 0.6s;
    float: right;
    opacity: 0;
}

.tuwen span {
    display: inline-block;
    font-size: 30px;
    border-bottom: 10px solid #ccc;
    line-height: 20px;
    margin: 15px 0;
}

.tuwen h2 {
    font-size: 35px;
    margin: 20px 0;
    text-align: center;
    font-size: 50px;
    color: #f0d25a;
    /* margin: 0; */
}

.tuwen p {
    font-size: 18px;
    margin: 30px 0;
    width: 50%;
    text-align: center;
    margin: 0 auto;
}

.tuwen .wen {
    margin-right: 30px;
}

.tuwen .wenfan {
    margin-right: 0;
    margin-left: 30px;
}

a {
    text-decoration: none;
}
</style>