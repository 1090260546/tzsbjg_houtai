<template>
    <nav class="tabs">
        <li class=tab>
            <router-link to="/home">首页</router-link>
        </li>
        <li class=tab>
            <router-link to="/mine">我的</router-link>
        </li>
    </nav>
</template>

<script>
export default {
    name: 'app-tabs',
    created() {
        console.log('Tabs')
    }
}
</script>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    height: 1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    .tab {
        flex: 1;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        font-size: 0.34rem;
        color: #000;
        border: 1px solid #000;
        box-sizing: border-box;
        a {
            width: 100%;
            height: 100%;
        }
        .router-link-exact-active {
            background: yellow;
        }
    }
}
</style>



