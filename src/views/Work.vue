<template>
  <div>
    <div id="contents" aria-live="polite">


      <div>
        <main class="works active">
          <!-- <div class="page_title section-inner  ">
                      <h1>WEB制作実績｜東京のWEB制作会社・ホームページ制作会社｜株式会社GIG</h1>
                  </div> -->
          <Banner title="Works" text="案例展示"></Banner>

          <section class="section-content js-scroll isView">

            <div class="section-inner">
              <div class="fangkuai" :class="{ 'seesmall': workShow }"></div>
              <ul class="list-works">
                <li>
                  <a href="../works/taptap/taptap.html">
                    <p class="thumb">
                      <img src="../assets/img/taptap/1.png" alt="">
                    </p>
                    <div class="detail-box">
                      <p class="client">
                        taptap
                      </p>
                      <p class="title">
                        taptap游戏活动h5
                      </p>
                      <p class="category">
                        包含了扫码签到功能、地图导览等各种功能,为用户在活动参与时提供场地导览图，会议流程，问卷调研，现场问答等功能，提示用户前往指定区域解决问题。
                      </p>
                    </div>
                  </a>
                </li>
               
                <li v-for="item in workList" :key="item.articleId">
                  <!-- <router-link :to="'/example'+'/'+item.articleId"> -->
                    <router-link :to="{path:'/example',query:{id:item.articleId,keywords:item.keywords,title:item.articleTitle}}">
                    <p class="thumb">
                      <img :src="item.articleImg" alt="">
                    </p>
                    <div class="detail-box">
                      <p class="client">
                        {{item.keywords}}
                      </p>
                      <p class="title">
                        {{item.articleTitle}}
                      </p>
                      <p class="category">
                       {{item.description}}
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>


              
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import { getImageList } from "@/api/image.js";

export default {
  name: 'Work',
  components: {
    Banner
  },
  data() {
    return {
      workShow: false,
      workList:[]
    }
  },
  created() {
    this.getImageList()
  },
  methods: {
    async getImageList() {
      try {
        this.workList = (await getImageList()).rows
        console.log(this.workList);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 683) {
        this.workShow = true
      }

    })


  }
}
</script>

<style scoped>
.seesmall {
  animation: seesmall 1s;
}

section .section-inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 120px;
  z-index: 10;
  padding-top: 50px;
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

.works .section-content {
  position: relative;
  overflow: hidden;
  margin-top: 178px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.works .section-content .section-inner:before {
  content: "";
  background-color: #f4f4f4;
  width: 326px;
  height: 200%;
  position: absolute;
  left: 0;
  top: -170px;
  transform: rotate(15deg);
  z-index: -1;
  clip-path: inset(0 0 100% 0);
  -webkit-transition: -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s, -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  top: -400px;
  left: -500px;
}

.works .section-content .list-works {
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 1s ease 0.4s;
}

/* .works .section-content .list-works li {
    width: 560px;
    height: 510px;
    margin-bottom: 80px;
    background-color: #fff;
    box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
} */

.works .section-content .list-works li a {
  position: relative;
  text-decoration: none;
  color: #111;
  width: 100%;
  height: 100%;
  display: block;
}

.section-content .list-works li:hover img {
  transform: scale(1.2)
}

.section-content .list-works li:hover a::before {
  transform: translateX(10px)
}

.works .section-content .list-works li a:before {
  content: "";
  background: url('../assets/img/icon-arrow-black.png') no-repeat;
  width: 32px;
  height: 11px;
  background-size: 100%;
  position: absolute;
  z-index: 50;
  left: 32px;
  bottom: 32px;
  -webkit-transition: -webkit-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  left: initial;
  right: 30px;
  bottom: 32px;
}

.works .section-content .list-works li .thumb {
  overflow: hidden;
}

.works .section-content .list-works li img {
  width: 560px;
  height: 350px;
  flex-shrink: 0;
  object-fit: contain;
  transition: all .6s;
  /* transition: -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1); */
}

.works .section-content .list-works li .detail-box {
  position: relative;
  margin: 0 80px;
}

.works .section-content .list-works li .detail-box:before {
  content: "";
  background-color: yellow;
  width: 30px;
  height: 88px;
  background-size: 100%;
  position: absolute;
  left: -50px;
  top: -70px;
}

.works .section-content .list-works li .client {
  font-size: 12px;
  font-weight: bold;
  margin-top: 21px;
}

.works .section-content .list-works li .title {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  margin: 10px 0;
  letter-spacing: 0.6px;
}

.works .section-content .list-works li .category {
  color: #888888;
  font-size: 12px;
  font-family: "akrobat";
  line-height: 1.5;
}

.works .section-content .list-works li a {
  position: relative;
  text-decoration: none;
  color: #111;
  width: 100%;
  height: 100%;
  display: block;
}

.works .section-content .list-works li:nth-child(even) {
  margin-top: 80px;
}

.works .section-content .list-works li {
  width: 560px;
  height: 600px;
  margin-bottom: 80px;
  background-color: #fff;
  -webkit-box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
  box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
}

.works .section-content .list-works li a {
  position: relative;
  text-decoration: none;
  color: #111;
  width: 100%;
  height: 100%;
  display: block;
}

.works .section-content .section-inner:after {
  content: "";
  background-color: #f4f4f4;
  width: 326px;
  height: 200%;
  position: absolute;
  left: 0;
  top: -170px;
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  z-index: -1;
  -webkit-clip-path: inset(0 0 100% 0);
  clip-path: inset(0 0 100% 0);
  -webkit-transition: -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s, -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  top: initial;
  left: initial;
  right: -400px;
  bottom: -400px;
}


.works .section-content .section-inner:after {
  content: "";
  background-color: #f4f4f4;
  width: 326px;
  height: 200%;
  position: absolute;
  left: 0;
  top: -170px;
  transform: rotate(15deg);
  z-index: -1;
  -webkit-clip-path: inset(0 0 100% 0);
  clip-path: inset(0 0 100% 0);
  transition: -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  transition: clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s, -webkit-clip-path 1.5s cubic-bezier(0.475, 0.425, 0, 0.995) 0.2s;
  top: initial;
  left: initial;
  right: -400px;
  bottom: -400px;
}

main {
  display: block;
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
</style>