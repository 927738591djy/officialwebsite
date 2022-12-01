<template>
    <div class="wrapper">
        <div id="contents" aria-live="polite">
            <div data-namespace="single" style="visibility: visible;">

                <main class="works active">
                    <!-- <div class="page_title section-inner  ">
                        <h1>WEB制作実績｜東京のWEB制作会社・ホームページ制作会社｜株式会社GIG</h1>
                    </div> -->

                    <section class="section-head">
                        <div class="black-area">
                            <div class="section-inner">
                                <div class="name">{{keywords}}</div>
                                <div class="name_mini">{{title}}</div>
                            </div>
                        </div>
                    </section>

                    <!-- <div class="example_img"> -->
                        <!-- <div>
                            <img src="../assets/img/taptap/1.png" alt="">
                            <h2>扫码签到功能</h2>
                            <p>用户可通过扫描邀请函二维码进行注册，扫码现场签到，</p>
                        </div> -->
                        <div v-html="richText"></div> 
                    <!-- </div> -->
                </main>
            </div>
        </div>

    </div>

</template>

<script>
import { getImageDetail } from "@/api/image.js";
export default {
    name: 'Example',
    data(){
        return{
            id:'',
            keywords:'',
            title:'',
            richText:''
        }
    },
    created() {
        this.id = this.$route.query.id
        this.keywords = this.$route.query.keywords
        this.title = this.$route.query.title
        this.getImageDetail(this.id)
    },
    methods: {
        async getImageDetail(id) {
            try {
                this.richText = (await getImageDetail(id)).data.articleContent
                console.log(this.richText);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.section-inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
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

a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}

.section-head {
    padding-top: 140px;
    position: relative;
}

/* .works .section-head:before {
    content: "";
    width: 681px;
    height: 261px;
    background: url('../assets/img/index/foot.jpg') no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0;
    bottom: -100px;
    z-index: 2;
} */

.section-head .black-area {
    position: relative;
    height: 325px;
    width: 100%;
    background-color: #000;
}

/* .text-area{
line-height: 325px;
text-align: center;
color: #fff;
height: 325px;
} */
.section-head .black-area .section-inner {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.section-head h2 {
    color: #fff;
    font-size: 50px;
    font-family: "Akrobat";
    letter-spacing: 6.25px;
}

li {
    list-style: none;
}

body {
    margin: 0;
}

/* 底部样式 */
footer .top_area {
    width: 100%;
    height: 200px;
    background: url('../assets/img/index/foot.jpg') no-repeat;
    background-size: cover;
}

footer .bottom_area {
    background-color: #000;
    padding: 68px 0 53px 0;
}

footer .footer_inner {
    width: 1200px;
    margin: 0 auto;
}

.navi-box {
    display: flex;
}

.navi-name {
    position: relative;
    width: 220px;
    margin-right: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    font-family: "akrobat";
    letter-spacing: 1.75px;
}

.navi-box .list-navi_global {
    display: flex;
}

.navi-box .list-navi_global a {
    display: inline-block;
    position: relative;
    color: #fff;
    font-size: 13px;
    font-family: "akrobat";
    letter-spacing: 1.62px;
    text-decoration: none;
    padding-right: 10px;
    margin-right: 5px;
}

.navi-box .list-navi_global a:before {
    content: "|";
    font-size: 13px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

footer .number {
    color: #fff;
    text-align: center;
}

.example_img {
    width: 1200px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    opacity: 0;
    animation: appear 3s forwards;
}

.example_img img {
    width: 400px;
    height: 600px;
    margin: 0 30px;
    box-shadow: 11px 13px 27px 6px rgb(0 0 0 / 6%);
}

.example_img h2,
p {
    width: 300px;
    margin-left: 100px;
    margin-top: 30px;
}

h2 {
    font-size: 25px;
}

.example_img div:nth-child(even) {
    margin-top: 250px;
}

.name {
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
}

.name_mini {
    color: #fff;
    font-size: 25px;
}

@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
.rich_text{
  font-size: 30px;
}
</style>