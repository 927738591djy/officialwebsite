<template>
    <div>
        <footer>
            <div class="top_area"></div>
            <div class="bottom_area">
                <div class="footer_inner">
                    <div class="navi-box">
                        <p class="navi-name grey"> CORPORATE</p>
                        <ul class="list-navi_global">
                            <li><a href="/concept"> <span>项目案例</span></a></li>
                            <li><a href="/works"><span>业务能力</span></a></li>
                            <li><a href="/about"> <span>关于我们</span></a></li>
                            <li><a href="/blog"> <span>联系我们</span></a></li>
                        </ul>
                    </div>
                    <div class="number">COPYRIGHT © 2018 POWERED BY SHENNIUDATA 备案号：沪ICP备18027450号-1</div>

                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
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
    justify-content: center;
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

.navi-name::before {
    content: "";
    border-top: 1px solid #fff;
    width: 120px;
    height: 1px;
    position: absolute;
    top: 10px;
    right: -30px;
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

</style>