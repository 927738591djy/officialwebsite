<template>
    
        <section class="section-head">
            <div class="black-area">
                <div class="text-area">
                    <h2>{{ title }}</h2>
                    <p class="text-mini">{{ text }}</p>
                </div>
            </div>
            <img src="../assets/img/ability/ability.png" alt="">

        </section>
    
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.section-head {
    padding-top: 140px;
    position: relative;
}
.text-area{
    margin-left: -100px;
}

.section-head .black-area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 325px;
    width: 80%;
    background-color: #000;
    animation: see 1s;
}

.section-head .section-inner {
    position: relative;
    height: 100%;
    padding: 91px 0 36px 0;
    box-sizing: border-box;
    width: 100%;

}

.section-head h2 {
    color: #fff;
    font-size: 50px;
    font-family: "Akrobat";
    letter-spacing: 6.25px;
}

.section-head .text-mini {
    color: #fff;
    font-size: 16px;
    margin-top: 26px;
}

.section-head img {
    position: absolute;
    right: 0;
    bottom: -100px;
    animation: seetwo 1s;
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
</style>