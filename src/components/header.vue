<template>
    <div class="app_header post_relative">
        <div class="logo_box post_top_center flex flex_left flex_align_center">
            <img class="logo_icon" src="images/index_logo.png" alt="">
            <p>南山区市场监督管理局特种设备智慧监管平台</p>
        </div>
        <ul class="icon_right_box post_top_center flex flex_left flex_align_center">
            <li>
                <img src="images/icon_01.png" alt="">
            </li>
            <li>
                <img src="images/icon_02.png" alt="">
            </li>
            <li>
                <img src="images/icon_03.png" alt="">
            </li>
            <li>
                <img src="images/icon_04.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        tab_page(path) {
            this.$router.push(path);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.app_header {
    width: 100%;
    height: 69px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .logo_box {
        left: 17px;
        .logo_icon {
            width: 48px;
            height: 48px;
        }
        p {
            height: 32px;
            line-height: 32px;
            font-size: 18px;
            color: #407AFF;
            margin-left: 10px;
        }

    }
    .icon_right_box {
        right: 0;
        li {
            width: 37px;
            height: 37px;
            margin-right: 22px;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>