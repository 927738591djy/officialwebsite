<template>
  <div id="contents" aria-live="polite">


    <div>
      <main class="works active">
        <Banner title="ability" text="业务能力"></Banner>
        <section class="section-content js-scroll isView">

          <div class="section-inner">
            <div class="fangkuai"></div>



            <div class="list">
              <ul>
                <li>
                  <div class="black_box">定制化开发</div>
                  <input type="radio" name="swith" />
                  <div class="bj"></div>
                </li>
                <li>
                  <div class="black_box">小程序开发</div>
                  <input type="radio" name="swith" checked />
                  <div class="bj">
                    <div></div>
                  </div>
                </li>
                <li>
                  <div class="black_box">app开发</div>
                  <input type="radio" name="swith" />
                  <div class="bj">
                    <div></div>
                  </div>
                </li>
                <li>
                  <div class="black_box">物联网</div>
                  <input type="radio" name="swith" />
                  <div class="bj">
                    <div></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>


        </section>

        <div class="tuwen">
          <div class="wen">
            <h2>专业定制化开发</h2>
            <span>极致开发+快捷交付+优质服务</span>
            <div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;从零开始，完全个性化网页设计及网页程式设计。 把企业文化、企业的想法融入到企业的网页当中去，为企业建设及设计一个极具趣味性、个性化网页。
                从零开始的设计，高质数的网站服务，为企业量体裁衣，定制化式策划、设计、制作、及网站功能开发。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;一直将追求极致作为软件开发的宗旨，快捷、专注、优质、高性价比。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;我们能在更短的时间内交付客户所要的产品，为客户抢占市场先机。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;定位于纯技术、纯研发公司，绝大多数员工都是研发人员，我们的研发能力更强。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;通过流程优化、优选技术、强化管理，对于同样的项目，我们的报价比同行更低。
                用技术驱动未来，契约精神引领优质服务。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;网站策划，网站开发，各行各业，电商、在线办公，响应式，覆盖各类平台。开源技术，节省部署运营成本。</p>
            </div>
          </div>
          <img class="tuwen_img" :class="{'appear': firstShow }" src="../assets/img/ability/dinzhi1.png" alt="">
        </div>

        <div class="tuwen">
          <img class="tuwen_img" :class="{'appear': secondShow }" src="../assets/img/ability/app1.png" alt="">
          <div class="wenfan">
            <h2>专业APP软件开发</h2>
            <span>精湛设计+图标规范+一站式</span>
            <div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;资深网络公司，公司深度整合，全面捍卫品牌品质、程序、技术、服务,产品原型沟通设计-UI沟通设计-软件开发-项目测试-项目验收-项目交付
                全方位服务支持，售前、售中、售后跟踪服务。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;严谨的团队风格，完善的服务系统保障在最短的时间内开发出稳定可靠的手机应用软件产品，客户实时掌握开发团队的进程与状态</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;设计师跟客户亲自沟通，更加了解客户需求，做出更符合客户理想的设计图。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;严格遵循设计标准规范，使开发过程成为一种享受！</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;从业务评估到需求上线，迅速且精准的把握住软件的生命周期</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;请准定位出开发过程中的各种问题，绕开各种障碍，追寻品质道路</p>
            </div>
          </div>
        </div>

        <div class="tuwen">
          <div class="wen">
            <h2>专业小程序开发</h2>
            <span>高效定制+流程完善+良好体验</span>
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;小程序不需要登录，直接采用微信账号体系，极大降低用户首次使用门槛，同时方便用户信息收集，可实现定位、语音、视频、IM聊天、重力感应、导航等与原生APP一样的功能，小程序不需要下载安装，用户扫一扫或者搜索一下即可打开，用户不用担心是否安装太多应用的问题，小程序随时可用又无需安装卸载
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;丰富开发经验和专业的技术团队，确保小程序定制开发如期完成</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;可实现多种公域引流和私域引流</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;针对性的业务场景，让您的定制化体验达到最佳!</p>
            </div>
          </div>
          <img class="tuwen_img" :class="{'appear': thirdShow }" src="../assets/img/ability/chengxu1.png" alt="">
        </div>

        <div class="tuwen">
          <img class="tuwen_img" :class="{'appear': fourShow }" src="../assets/img/ability/wulian1.png" alt="">
          <div class="wenfan">
            <h2>物联网</h2>
            <span>跨平台+模块化和插件化+一站式</span>
            <div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;通过 各种信息传感器、射频识别技术、全球定位系统、红外感应器、激光扫描器等各种装置与技术，实时采集任何需要监控、
                连接、互动的物体或过程，采集其声、光、热、电、力学、化 学、生物、位置等各种需要的信息，通过各类可能的网络接入，实现物与物、物与人的泛在连接，实现对物品和过程的智能化感知、识别和管理</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;高效构建物联行业应用，同时提供软硬一体的智能建筑和城市安全等垂直领域产品</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;面向物联网领域中的终端设备商、系统集成商、应用服务商、能力提供商等，提供高效便捷的设备集成、数据分析和应用开发能力，从而使客户在万物互联的大趋势中牢牢占据领先位置
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;专为适配边缘侧资源受限设备打造的一款轻量级物联网操作系统，具备工业协议解析、数据过滤和分发等核心功能，具有跨平台、易使用和二次开发等优点。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;深度解析物联网行业，真正把云计算、大数据、物联网等近几年蓬勃发展的先进技术和传统行业有机融合</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;方便功能二次开发和与第三方平台对接，兼容常见工业协议及扩展，适用于工业、智能建筑等各行业</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'Ability',
  components: {
    Banner
  },
  data() {
    return {
      firstShow: false,
      secondShow: false,
      thirdShow: false,
      fourShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY >= 1323) {
        this.firstShow = true
      }
      if (window.scrollY >= 1700) {
        console.log(window.scrollY);
        this.secondShow = true
      }
      if (window.scrollY >= 2300) {
        this.thirdShow = true
      }
      if (window.scrollY >= 2700) {
        this.fourShow = true
      }
    })
  }
}
</script>

<style scoped>
.appear{
  animation: appear 1s forwards
}
body {
  margin: 0;
  background-color: #fff;
  overflow: auto;
}

section .section-inner {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 120px;
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


.list {
  /* width: 100%; */
  /* height:1000px; */
  display: flex;
  justify-content: center;
  margin: 0 0;
  background: url('../assets/img/ability/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 0;
}

.list li {
  /* float:left; 可以使块级元素宽度可以被内容撑开*/
  float: left;
  /* 不给宽高是因为内容会被撑开 */
  max-width: 800px;
  height: 500px;
  box-shadow: 0 0 10px #ccc;
  padding: 30px 0;
  text-align: center;
  animation: appear 3s forwards;
  opacity: 0;
}

/* 未选中时可以点击范围 */

input {
  /* poacity:0；点击框透明度为0 */
  opacity: 0;
  /* cursor:pointer鼠标变为小手标记 */
  cursor: pointer;
  width: 100px;
  height: 500px;
  /* 点击时过渡效果 */
  transition: 0.2s;
}

/* 选中是宽700px */

input:hover {
  width: 700px;
}

/* 背景图no-repeat不要平铺不要重复  center/cover居中/覆盖整个li */

.list li:nth-child(1),
.list ul :nth-child(1) .bj {
  background: url('../assets/img/ability/dinzhi.png')no-repeat center/cover !important;
}

.list li:nth-child(2),
.list ul :nth-child(2) .bj {
  background: url('../assets/img/ability/chengxu.png') no-repeat center/cover !important;
}

/* 
.list li:nth-child(1)和.list ul :nth-child(1)都是选择同一个元素，啥原理不清楚
*/

.list ul :nth-child(3),
.list ul :nth-child(3) .bj {
  background: url('../assets/img/ability/app.png') no-repeat center/cover;
}

.list ul :nth-child(4),
.list ul :nth-child(4) .bj {
  background: url('../assets/img/ability/wulian.png') no-repeat center/cover;
}

.list li .bj {
  /* 让全部.bj的背景变透明不显示于页面之上 */
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  /* 100vw=100%视口高度
     100vh=100%视口宽度
  */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* 此时背景层级太高盖住.list了，用z-index让层级变成负数 */
  z-index: -1;
  /* css3滤镜效果 */
  /* filter: blur(2.3px); */
  background-color: pink;
}

/* 当点击input的时候inpu的兄弟.bj的背景就不透明了，显示于页面之上 */

input[name="swith"]:hover .bj {
  opacity: 1;
}

.text {
  position: fixed;
  left: 50%;
  top: 0;
}

body {
  background-color: #f4f4f4;
}

.black_box {
  /* background: #000; */
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  font-weight: 600;
}

.tuwen {
  display: flex;
  justify-content: space-between;
  margin: 50px 20px;
  align-items: center;
}

.tuwen_img {
  border-radius: 15px;
  width: 600px;
  height: 400px;
  opacity: 0;
  /* animation: appear 3s forwards infinite; */
  transition: all 0.6s;
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
}

.tuwen p {
  font-size: 18px;
  margin: 10px 0;
}

.tuwen .wen {
  margin-right: 30px;
}

.tuwen .wenfan {
  margin-right: 0;
  margin-left: 30px;
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
</style>