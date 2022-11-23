<template>
    <div>
        <div id="contents" aria-live="polite">


            <div>
                <main class="works active">
                    <Banner title="Contact" text="联系我们"></Banner>
                    <section class="section-content js-scroll isView">
                        <div id="divOutput"></div>
                        <div class="code_box">
                            <img src="https://shenniudata-serverdata.oss-cn-beijing.aliyuncs.com/sn-door/images/zsd.jpg"
                                style="width:250px;height:250px;">
                            <div>上海市松江区伴亭东路288号2号楼609</div>
                            <div>
                                邮箱：zhusd@shenniudata.com</div>

                        </div>
                        <div class="section-inner">
                            <div class="fangkuai"></div>
                            <div class="bg"></div>
                        </div>
                    </section>

                </main>
            </div>
        </div>

    </div>
</template>

<script>


import Banner from '@/components/Banner.vue'
export default {
    name: 'Contact',
    components: {
        Banner
    },
    methods: {
        outPuting: function () {
            console.log(11111);
            var str = "神牛数据，期待您的联系！"
            var i = 0;
            var divOutput = document.getElementById('divOutput')
            if (i <= str.length) {
                divOutput.innerHTML = str.slice(0, i++) + "";
                // setTimeout(this.outPuting(), 200)
                console.log('small')
            } else {
                divOutput.innerHTML = str;
                console.log('sss');
            }
        }
    },
    mounted() {
        this.outPuting();
        window.addEventListener('scroll', function () {
            console.log(window.scrollY);
            var fangkuai = document.querySelector('.fangkuai')
            if (this.window.scrollY >= 500) {
                console.log(window.scrollY);
                fangkuai.style.cssText = 'animation: seesmall 1s;'
            }
        })



        // 停止计时器
        // function stopSetTimeout() {
        //     var highestTimeoutId = setTimeout(';');
        //     for (var i = 0; i < highestTimeoutId; i++) {
        //         clearTimeout(i);
        //     }
        // }
    }
}
</script>

<style scoped>
section .section-inner {
    position: relative;
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


a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}

.works .section-content {
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    /* margin-top: 178px; */
    padding-top: 40px;
    margin-bottom: 120px;
    background: url('../assets/img/contact/bg.png') no-repeat;
    background-size: cover;
    height: 1000px;
    background-position: center;
    animation: appear 2s;
    text-align: center;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
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


@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

#divOutput {
    font-size: 50px;
    color: #f0d25a;
    font-weight: 600;
    margin-top: 100px;
}

.code_box {
    color: #fff;
    background-color: transparent;
    width: 350px;
    height: 400px;
    border: 5px solid #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    opacity: 0;
    -webkit-filter: drop-shadow(0 0 15px #EEBF23);
    filter: drop-shadow(0 0 15px #EEBF23);
    animation: appear 2s forwards;
    animation-delay: 2s;
}

.code_box img {
    margin: 30px 0;
}

/* @keyframes animated-border {
	0% {
		box-shadow: 0 0 0 0 rgba(255, 255, 255, .5);
	}
	100% {
		box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        opacity: 1;
	}
} */
</style>