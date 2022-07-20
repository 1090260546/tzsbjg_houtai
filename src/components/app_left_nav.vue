<template>
  <div class="app_left_nav">
    <ul class="nav_list flex flex_just_center">
      <li class="flex_left flex_center">
        <img src="images/icon_05.png" alt="" />
      </li>
      <li class="flex_left flex_center">
        <img src="images/icon_06.png" alt="" />
      </li>
      <li class="flex_left flex_center">
        <img src="images/icon_07.png" alt="" />
      </li>
      <li class="flex_left flex_center">
        <img src="images/icon_10.png" alt="" />
      </li>
      <li class="flex_left flex_center">
        <img src="images/icon_08.png" alt="" />
      </li>
    </ul>
    <div class="bottom_nav_icon post_left_center">
      <img src="images/icon_09.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app_left_nav {
  width: 63px;
  background: #fff;
  position: absolute;
  top: 82px;
  left: 0;
  bottom: 0;
  z-index: 10;
  .nav_list {
    width: 100%;
    padding-top: 4px;
    li {
      width: 42px;
      height: 43px;
      margin-bottom: 4px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .bottom_nav_icon {
    width: 28px;
    height: 28px;
    bottom: 14px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>