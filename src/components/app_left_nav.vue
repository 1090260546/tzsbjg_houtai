<template>
    <div class="app_left_nav">
        <ul class="nav_list flex flex_just_center">
            <li class="flex_left flex_center">
                <img src="" alt="">
            </li>
            <li class="flex_left flex_center">
                <img src="" alt="">
            </li>
            <li class="flex_left flex_center">
                <img src="" alt="">
            </li>
            <li class="flex_left flex_center">
                <img src="" alt="">
            </li>
            <li class="flex_left flex_center">
                <img src="" alt="">
            </li>
        </ul>
        <div class="bottom_nav_icon post_left_center">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.app_left_nav {
    width: 63px;
    height: 920px;
    background: #fff;
    position: absolute;
    top: 82px;
    left: 0;
    .nav_list {
        width: 100%;
        padding-top: 5px;
        li {
            width: 45px;
            height: 46px;
            margin-bottom: 5px;
            img {
                width: 15px;
                height: 13px;
            }
        }
    }

    .bottom_nav_icon {
        width: 28px;
        height: 28px;
        bottom: 14px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>