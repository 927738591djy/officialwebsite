<template>
  <div>
    <div class="section-top">


      <div class="img-area">
        <div class="part01 part luxy-el" data-horizontal="1" data-speed-x="-5">
          <img class="part1" data-rellax-speed="3" src="../assets/img/index/S.png" alt="">
        </div>
        <div class="part02 part">
          <img class="part2" data-rellax-speed="-2" src="../assets/img/index/N.png" alt=""
            style="transform: translate3d(0px, 0px, 0px);">
        </div>
        <div class="part03 part">
          <img class="part3" data-rellax-speed="4" src="../assets/img/index/D.png" alt="">
        </div>
        <div class="part04 part">
          <img class="part4" data-rellax-speed="2" src="../assets/img/index/T.png" alt="">
        </div>
        <!-- <div class="part05 part">
        <img class="rellax" data-rellax-speed="-4" src="/assets/img/index/part05.png" alt="" style="transform: translate3d(0px, 0px, 0px);">
      </div> -->
      </div>


      <div class="top_text_area">
        <div class="top_intro">
          <div class="dingzhihua">定制化</div>
          <div class="zhuangye">专业</div>
          <div>用心</div>
        </div>
        <div class="top_detail">
          &nbsp;&nbsp;秉承“奋斗为本，成就客户，创造分享，共同成长”的核心价值观，成为客户长期、稳定、可信赖的合作伙伴，为成为软件开发领域标杆高新企业而奋斗，致力于每位客户的满意和成功。成就客户，共创共赢。</div>
      </div>


    </div>





    <!-- 业务能力 -->
    <div class="ability">
      <div class="ability_inner">
        <div ref="abii" class="ability_fangkuai fangkuai" :class="{ 'seesmall': abilityShow }"></div>
        <h2>
          <span>业务能力</span>
        </h2>
        <p class="friend_text">
          每一项业务能力，都展示了我们的走过的道路
        </p>
        <ul class="list_abillity">
          <li class="recruit">
            <a href="./ability/ability.html">
              <div class="white-box">
                <p class="text-mini">专业</p>
                <p class="title-about">定制化开发</p>
              </div>
            </a>
          </li>
          <li class="company">
            <a href="./ability/ability.html">
              <div class="white-box">
                <p class="text-mini">移动端</p>
                <p class="title-about">小程序、app开发</p>
              </div>
            </a>
          </li>
          <li class="office">
            <a href="./ability/ability.html">
              <div class="white-box">
                <p class="text-mini">信息</p>
                <p class="title-about">物联网开发</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>




    <div class="example">
      <div class="example_inner">
        <div class="example_fangkuai fangkuai" :class="{ 'seesmall': exampleShow }"></div>
        <h2>
          <span>项目案例</span>
        </h2>
        <div class="example_intro">每一款产品，都汇聚了公司成员的辛勤与汗水，每一成功案例，都凝聚了开发者的智慧与努力。
        </div>



        <div class="content-area">
          <ul class="list-service">
            <li>
              <a href="">
                <div class="pc_mask">
                  <div>捷豹、路虎wms管理系统</div>
                </div>
                <img src="../assets/img/index-work/5.png" alt="">
                <div class="index_work_text">仓库货物管理，物流配送，品牌端收货，换货
                </div>
              </a>

            </li>
            <li>
              <a href="">
                <div class="pc_mask">
                  <div>轩尼诗线下互动平台</div>
                </div>
                <img src="../assets/img/index-work/4.png" alt="">
                <div class="index_work_text">用户可现场扫码打卡，通过线下游戏互动，进行点酒服务</div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="pc_mask">
                  <div>智慧教室系统</div>
                </div>
                <img src="../assets/img/index-work/8.png" alt="">
                <div class="index_work_text">包含学生/教师管理、班级管理、课程管理、课次管理和控屏分享功能
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="pc_mask">
                  <div>智慧城市-智慧灯杆</div>
                </div>
                <img src="../assets/img/index-work/9.png" alt="">
                <div class="index_work_text">远程管理城市街道灯杆，自动化控制灯光，监测环境质量。
                </div>
              </a>
            </li>


            <li v-for="item in list" :key="item.id">
              <a href="">
                <div class="pc_mask">
                  <div>{{ item.articleTitle }}</div>
                </div>
                <img src="../assets/img/index-work/9.png" alt="">
                <div class="index_work_text">
                  {{ item.articleContent }}
                </div>
              </a>
            </li>


          </ul>

          <div class="yidongduan">移动端</div>


          <div class="list-service_two">
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>智慧售楼处</div>
                </div>
                <img src="../assets/img/index-work/3.png" alt="">
              </a>
            </div>
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>国延堂商城</div>
                </div>
                <img src="../assets/img/index-work/7.png" alt="">
              </a>
            </div>
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>taptap现场活动平台</div>
                </div>
                <img src="../assets/img/index-work/11.png" alt="">
              </a>
            </div>
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>惊弘空间数藏app</div>
                </div>
                <img src="../assets/img/index-work/12.png" alt="">
              </a>
            </div>
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>华云荟商城app</div>
                </div>
                <img src="../assets/img/index-work/13.png" alt="">
              </a>
            </div>
            <div class="two_box">
              <a href="">
                <div class="yidong_mask">
                  <div>中海地产-互动游戏</div>
                </div>
                <img src="../assets/img/index-work/14.png" alt="">
              </a>
            </div>
          </div>
          <a :class="{ 'appear': viewMoreShow }" class="example_viewmore" href="./work/work.html">
            view more
          </a>

        </div>



      </div>
    </div>



    <div class="about">
      <img class="img01 imgsee" src="../assets/img/index/about1.png" alt="">
      <img class="img02 imgsee" src="../assets/img/index/about2.png" alt="">
      <div class="fangkuai about_fangkuai" :class="{ 'seesmall': aboutShow }"></div>
      <div class="about_inner">
      </div>
      <div class="about_text">
        <h2 class="about_h2">关于我们</h2>
        <p class="about_p">在大数据时代浪潮中，神牛数据以未来社区建设作为发展起点，立志成为一家全世界一流智慧终端、融合网、云大脑、N平台的高科技公司！</p>
        <a class="about_viewmore" href="">view more</a>
      </div>

    </div>


    <div class="friend">
      <div class="friend_fangkuai fangkuai" :class="{ 'seesmall': friendShow }"></div>
      <div class="friend_inner">

        <h2>
          <span>合作伙伴</span>
        </h2>
        <p class="friend_text">
          感知责任、优质回报、合作共赢,
          <br>
          饮水思源，您的支持和信任是我们最大的动力。
        </p>

        <ul class="list-logo">
          <li>
            <img src="../assets/img/friend/1.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/2.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/3.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/4.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/5.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/6.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/7.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/8.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/9.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/10.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/11.png" alt="">
          </li>
          <li>
            <img src="../assets/img/friend/12.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>

import { getImageList } from "@/api/image.js";


export default {
  name: 'Home',
  data() {
    return {
      abilityShow: false,
      isAppear: false,
      exampleShow: false,
      aboutShow: false,
      friendShow: false,
      viewMoreShow: false,
      list: [],
    }
  },
  created() {
    this.getImageList()
  },
  computed: {
    phoneList: function () {
      return this.list.filter((item) => {
        return item.articleType == 2
      })
    }
  },
  methods: {
    async getImageList() {
      try {
        this.list = (await getImageList()).rows
        console.log(this.list);
        console.log(this.phoneList);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    var part1 = document.querySelector('.part1');
    var part2 = document.querySelector('.part2');
    var part3 = document.querySelector('.part3');
    var part4 = document.querySelector('.part4');
    window.addEventListener('scroll', () => {
      part1.style.cssText = `transform: translate3d(0px, ${window.scrollY}px, 0px)`
      part2.style.cssText = `transform: translate3d(0px, ${-window.scrollY / 10}px, 0px)`
      part3.style.cssText = `transform: translate3d(0px, ${window.scrollY}px, 0px)`
      part4.style.cssText = `transform: translate3d(0px, ${-window.scrollY / 10}px, 0px)`
      if (window.scrollY >= 483) {
        this.abilityShow = true
      }
      if (window.scrollY >= 1294) {
        this.exampleShow = true
      }
      if (window.scrollY >= 3491) {
        this.aboutShow = true;
        this.viewMoreShow = true
      }
      if (window.scrollY >= 4225) {
        this.friendShow = true
      }
    })


  }
}
</script>
  
<style scoped>
.seesmall {
  animation: seesmall 1s;
}

.imageSee {
  animation: imageSee 1s forwards;
}

.appear {
  animation: appear 2s forwards;
}



body {
  margin: 0;
  background-color: #fff;
  overflow: auto;
}

.section-top {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 120px;
}

.section-top::before {
  content: "";
  background-color: #000;
  width: 105%;
  height: 200%;
  position: absolute;
  right: -54.5%;
  top: -47%;
  z-index: 5;
  animation: see 1s forwards;
  /* transform: rotate(-15deg); */
}


.section-top::after {
  z-index: 6;
  content: "";
  background-color: #f6de79;
  width: 1px;
  height: 300%;
  transform: rotate(-15deg);
  position: absolute;
  right: 10px;
  top: 0;
  -webkit-transform: rotate(-15deg) translateY(-120vh);
  transform: rotate(-18deg) translateY(-120vh);
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.3s;
  transition: -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.3s;
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.3s;
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.3s, -webkit-transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.3s;
}

.img-area {
  position: absolute;
  left: 50%;
  margin-left: -500px;
  width: 1500px;
  display: flex;
  top: 100px;
  /* opacity: 0; */

}

.img-area .part.part01 {
  opacity: 0;
  animation: appear 1s 1s forwards;
}

.img-area .part.part02 {
  opacity: 0;
  /* transition-delay: 1.6s; */
  animation: appear 1s 1.2s forwards;
}

.img-area .part.part03 {
  opacity: 0;
  /* transition-delay: 1.7s; */
  animation: appear 1s 1.3s forwards;
}

.img-area .part.part04 {
  opacity: 0;
  /* transition-delay: 1.8s; */
  animation: appear 1s 1.4s forwards;

}

.part {
  margin-right: 50px;
  width: 165px;
  height: 400px;
  z-index: 5;
}

.img-area .part img {
  width: 100%;
  height: 100%;
}

.top_detail {
  display: flex;
  width: 400px;
}

.top_text_area {
  background-color: #fff;
  z-index: 4;
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0px;
  margin-left: -500px;
  padding: 40px 30px;
}

.top_intro {
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top_detail::before {
  content: '';
  background-color: #000;
  width: 15px;
  height: 100%;
  transform: rotate(18deg);
  z-index: -1;
  margin-right: 40px;
}

.dingzhihua {
  margin-left: 10px;
}

.zhuangye {
  margin-left: 6px;
}

.love {
  justify-content: center;
  display: flex;
  text-align: center;
  margin-top: 100px;
}

#pinkboard {
  z-index: 200;
}

.love .love_text {
  font-weight: 600;
  font-size: 80px;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -400px;
  z-index: 300;
}

.love .love_text2 {
  top: 40%;
}

.example {
  position: relative;
  overflow: hidden;
  margin-bottom: 120px;
}

/* .example::before {
    content: "";
    background-color: #f4f4f4;
    width: 326px;
    height: 200%;
    position: absolute;
    left: 0%;
    top: -400px;
    transform: rotate(15deg);
    z-index: -1;
} */

.example_fangkuai {
  left: 0px;
  z-index: -1;
}

.example h2 {
  position: relative;
  font-size: 60px;
  letter-spacing: 8px;
  margin-bottom: 35px;
  font-family: "akrobat";
}

.example h2::before {
  content: "";
  position: absolute;
  left: -56px;
  top: -39px;
  background-color: yellow;
  width: 10px;
  height: 110px;
  transform: rotate(15deg);
}

.example_inner {
  width: 1200px;
  margin: 0 auto;
}

.content-area {
  position: relative;
  margin-top: 100px;
}

.example .content-area .example_viewmore {
  margin-top: 100px;
  float: right;
  position: relative;
  display: block;
  width: 330px;
  background-color: #111;
  color: #fff;
  font-family: "akrobat";
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  letter-spacing: 3.5px;
  height: 80px;
  line-height: 80px;
  box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
  overflow: hidden;
  opacity: 0;
}

.list-service {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

ul {
  list-style: none;
}

/* .list-service li {
    position: relative;
    width: 560px;
    height: 500px;
    overflow: hidden;
    margin-bottom: 82px;
    box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
} */
/* 
.list-service li a {
    color: #111;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
} */

/* .list-service li a:before {
    content: "";
    background: url('./assets/img/icon-arrow-black.png') no-repeat;
    width: 32px;
    height: 11px;
    background-size: 100%;
    position: absolute;
    z-index: 50;
    left: 32px;
    bottom: 32px;
    left: initial;
    right: 32px;
    transition: all 0.6s;
} */

.list-service li a:hover::before {
  transform: translateX(10px);
}


.list-service .white-box {
  position: relative;
  height: 100%;
  padding-left: 280px;
  z-index: 50;
  overflow: hidden;
}

.list-service .text-mini {
  font-size: 12px;
  font-weight: bold;
  padding: 38px 0 30px 32px;
}

.list-service li.workship .title-service {
  width: 197px;
}

.list-service li.workship .title-service img {
  width: 100%;
  height: 100%;
}

.list-service .text-detail {
  position: absolute;
  width: 240px;
  font-size: 14px;
  padding-top: 28px;
  line-height: 28px;
  z-index: 100;
}

/* .list-service li a:after {
    content: "";
    background-color: #fff;
    width: 330px;
    height: 200%;
    z-index: 1;
    position: absolute;
    right: -240px;
    top: -20px;
    transform: rotate(10deg);
} */

/* .list-service li:nth-child(even) {
    margin-top: -250px;
} */


/* 业务能力样式 */
.ability {
  position: relative;
  height: 800px;
  /* background-color: pink; */
  overflow: hidden;
  margin-bottom: 120px;
}

/* .ability::before {
    content: "";
    background-color: #f4f4f4;
    width: 326px;
    height: 200%;
    position: absolute;
    left: 10%;
    top: -400px;
    z-index: -1;
} */

.fangkuai {
  background-color: #f4f4f4;
  width: 326px;
  height: 200%;
  position: absolute;
  top: -400px;
  transform: rotate(10deg);
  z-index: 0;
}

.ability_fangkuai {
  left: 100px;
}

.ability::after {
  content: "";
  background: url('../assets/img/index/about2.png');
  height: 75%;
  width: 1300px;
  position: absolute;
  left: 15%;
  top: 0px;
  margin: 100px 0;
  z-index: -2;
}

.ability h2 {
  position: relative;
  font-size: 60px;
  letter-spacing: 8px;
  margin-bottom: 35px;
  font-family: "akrobat";
}

.ability h2::before {
  content: "";
  position: absolute;
  left: -45px;
  top: -39px;
  background-color: yellow;
  width: 10px;
  height: 110px;
  transform: rotate(-15deg);
}

.ability_inner {
  width: 1200px;
  margin: 0 auto;
}

.ability_text {
  width: 500px;
}

.list_abillity {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 300px;
}

.list_abillity li {
  position: relative;
  width: 360px;
  height: 240px;
  overflow: hidden;
  box-shadow: 16px 16px 40px 0px rgb(0 0 0 / 12%);
}

.list_abillity .recruit::before {
  background: url('../assets/img/index/dinzhi.png') no-repeat;
  background-size: cover;
  background-position: right;
  transition: all 0.6s;
}

.list_abillity li:hover::before {
  transform: translateX(10px);
}

.list_abillity li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100%;
  width: 360px;
  height: 100%;
}

.list_abillity li a:before {
  content: "";
  background: url('../assets/img/icon-arrow-black.png') no-repeat;
  width: 32px;
  height: 11px;
  background-size: 100%;
  position: absolute;
  z-index: 800;
  left: 32px;
  bottom: 32px;
  transition: all 0.6s;
}

.list_abillity li a:hover::before {
  transform: translateX(10px);
}


.list_abillity li .white-box {
  position: relative;
  height: 100%;
  padding-left: 32px;
  z-index: 50;
}

.list_abillity li a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: #111;
  text-decoration: none;
  overflow: hidden;
}

.list_abillity li .text-mini {
  font-size: 18px;
  margin-bottom: 32px;
  padding-top: 48px;
  font-weight: bold;
  color: #f0d25a;
}

.list_abillity li .title-about {
  font-size: 32px;
  font-weight: bold;
  font-family: "akrobat";
  letter-spacing: 4px;
}

.list_abillity li::after {
  content: "";
  background-color: #fff;
  width: 235px;
  height: 130%;
  z-index: 10;
  position: absolute;
  left: -30px;
  top: -37px;
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
}

.list_abillity li.company::before {
  background: url('../assets/img/index/app.png') no-repeat;
  background-size: cover;
  background-position: right;
  transition: all 0.6s;
}

.list_abillity li.office::before {
  background: url('../assets/img/index/wulian.png') no-repeat;
  background-size: contain;
  background-position: right;
  transition: all 0.6s;
}

.about_big_font {
  /* margin: 30px 0; */
  font-size: 20px;
  margin-top: 50px;
  margin-left: -35px;
  font-weight: 600;
}



/* 关于我们样式 */
.about {
  margin-bottom: 120px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.about_fangkuai {
  z-index: 300;
  left: 50%;
  margin-left: -163px;
}

.about img {
  width: 50%;
  height: 560px;
}


.about_text {
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 500;
  transform: translate(-50%, -50%);
  text-align: center;
}

.about_p {
  width: 300px;
}

.about_h2 {
  position: relative;
  font-size: 60px;
  letter-spacing: 8px;
  margin-bottom: 35px;
  font-family: "akrobat";
}

.about h2::before {
  content: "";
  position: absolute;
  left: -40px;
  top: -25px;
  background-color: yellow;
  width: 10px;
  height: 110px;
  transform: rotate(15deg);
}

.about_viewmore {
  margin-top: 100px;
  position: relative;
  display: block;
  width: 330px;
  background-color: #111;
  color: #fff;
  font-family: "akrobat";
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  letter-spacing: 3.5px;
  height: 80px;
  line-height: 80px;
  box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 8%);
  overflow: hidden;
  transition: color 0.2s ease-out;
}


/* 合作伙伴样式 */
.friend {
  position: relative;
  min-height: 600px;
  /* background-color: pink; */
  overflow: hidden;
  margin-bottom: 120px;
}

.friend_fangkuai {
  left: 100px;
}

/* 
.friend::before {
    content: "";
    background-color: #f4f4f4;
    width: 326px;
    height: 200%;
    position: absolute;
    left: 10%;
    top: -400px;
    transform: rotate(15deg);
    z-index: -1;
} */

.friend h2 {
  position: relative;
  font-size: 60px;
  letter-spacing: 8px;
  margin-bottom: 35px;
  font-family: "akrobat";
}

.friend h2::before {
  content: "";
  position: absolute;
  left: -56px;
  top: -39px;
  background-color: yellow;
  width: 10px;
  height: 110px;
  transform: rotate(-15deg);
}

.friend_inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

.friend_text {
  position: absolute;
  width: 400px;
  margin-left: -20px;
  margin-top: 100px
}

.friend .list-logo {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  width: 700px;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
}

.friend .list-logo li {
  width: 216px;
  height: 120px;
  margin-bottom: 16px;
  margin-right: 16px;
  box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 3%);
}

.friend .list-logo li img {
  width: 100%;
  height: 100%;
}

.card2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: all 0.2s;
  transform-style: preserve-3d;
  overflow: hidden;
}

/* .list-service li .card2:before {
    content: "";
    background: url('./assets/img/index/taptap.png') no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    background-size: 100%;
    width: 310px;
    height: 100%;
    transition: all 0.6s;
} */
.list-service li .card2 img {
  width: 100%;
  height: 100%;

}


.list-service li .card2:hover::before {
  transform: scale(1.2)
}

.example_text {
  position: absolute;
  top: 30%;
  right: 30px;
  width: 240px;
  z-index: 222;
}

.example_intro {
  width: 500px;
  position: absolute;
}

@keyframes see {
  0% {
    transform: translatey(-50%);

  }

  100% {
    transform: translatey(0) rotate(-15deg);

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


@keyframes appear {
  0% {
    opacity: 0;

  }

  100% {
    opacity: 1;
  }
}

@keyframes imageSee {
  0% {
    transform: translateY(-50%);

  }

  100% {
    transform: translateY(0)
  }
}

.list-service li {
  margin: 40px 0;
  width: 500px;
  height: 385px;
  /* box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 6%); */
}

.list-service li a {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 6%);
}

.list-service li a:hover .pc_mask {
  animation: appear 1s;
}

.index_work_text {
  background-color: #fff;
  color: #000;
  text-decoration: none;
  height: 15%;
  line-height: 50px;
  text-align: center;
  font-weight: 600;
}

.list-service li a img {
  width: 100%;
  height: 85%;
}

.list-service li a h2 {
  text-decoration: none;
  font-weight: 600;
}

.list-service_two {
  height: 620px;
  padding: 20px 0;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: auto;
}

.list-service_two .two_box {
  margin: 0 40px;
  width: 300px;
  height: 600px;
  display: inline-block;
  animation: scroll 10s infinite linear;
}

.list-service_two .two_box a {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}

.list-service_two .two_box a:hover .yidong_mask {
  animation: appear 1s;
}

.list-service_two div a img {
  width: 100%;
  height: 100%;
  border: 5px solid #000;
  border-radius: 30px;
}

@keyframes scroll {
  0% {
    transform: translateX(300px);
  }

  100% {
    transform: translateX(-1100px);
  }
}

.yidongduan {
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 35px;
  font-weight: 600;
}

.pc_mask {
  position: absolute;
  width: 100%;
  height: 85%;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.pc_mask div {
  border: 2px solid #f0d25a;
  color: #f0d25a;
  padding: 20px;
  border-radius: 15px;
}

.yidong_mask {
  position: absolute;
  width: 100%;
  height: 101%;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  opacity: 0;
}

.yidong_mask div {
  border: 2px solid #f0d25a;
  color: #f0d25a;
  padding: 20px;
  border-radius: 15px;
}

.list-service_two::-webkit-scrollbar {
  display: none
}
</style>
  