<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <app-tabs/>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';
export default {
  components: {
    [Tabs.name]: Tabs
  },
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>