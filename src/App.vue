<template>
  <div id="app">
    <app_header></app_header>
    <app_left_navVue></app_left_navVue>
    <div class="app_content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import app_header from "./components/header.vue";
import app_left_navVue from "./components/app_left_nav.vue";
export default {
  components: {
    app_header,
    app_left_navVue,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: #f3f5f9;
  position: relative;

  .app_content {
    width: 1811px;
    position: absolute;
    top: 69px;
    left: 86px;
    .top_nav_list {
      width: 100%;
      height: 64px;
      li {
        height: 64px;
        line-height: 64px;
        font-size: 16px;
        color: #616264;
        padding: 0 8px;
      }
      .fenge_line {
        height: 64px;
        line-height: 64px;
        font-size: 16px;
        color: #aaacae;
      }
      li:nth-of-type(1) {
        padding-left: 0;
      }
      .active {
        color: #407aff;
      }
    }
    .seach_box {
      width: 100%;
      height: 65px;
      position: relative;
      .seach_left_item {
        left: 0;
        .export_btn {
          width: 106px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          background: #3476f5;
          font-size: 18px;
          color: #fff;
          border-radius: 10px 10px 10px 10px;
          margin-right: 20px;
          color: #fff;
        }
        .bg_DB4E2A {
          background: #db4e2a;
        }

        p {
          font-size: 14px;
          color: #b3b3b3;
          height: 65px;
          line-height: 65px;
        }
      }
      .seach_right_item {
        right: 56px;
        input {
          width: 500px;
          height: 48px;
          line-height: 48px;
          font-size: 18px;
          color: #000;
          border-radius: 8px 8px 8px 8px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding-left: 23px;
          box-sizing: border-box;
        }
        .seach_btn {
          width: 106px;
          height: 38px;
          text-align: center;
          line-height: 38px;
          font-size: 18px;
          color: #3476f5;
          border-radius: 10px 10px 10px 10px;
          margin-left: 34px;
          border: 1px solid #3476f5;
          box-sizing: border-box;
        }
        .acitve {
          color: #fff;
          background: #3476f5;
        }
      }
    }
    .page_content {
      width: 100%;
      height: 901px;
      border-radius: 7px;
      background: #fff;
      padding: 22px;
      box-sizing: border-box;
    }
  }

  .post_relative {
    position: relative;
  }

  .post_center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .post_left_center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .post_top_center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .flex_left {
    justify-content: left;
  }

  .flex_center {
    justify-content: center;
    align-items: center;
  }

  .flex_just_center {
    justify-content: center;
  }

  .flex_align_center {
    align-items: center;
  }

  .flex_space_around {
    justify-content: space-around;
  }

  .flex_space_between {
    justify-content: space-between;
  }
}
</style>