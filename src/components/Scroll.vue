<template>
  <div class="scroll-wrap" ref="scroll">
    <!-- 滚动视图的三个条件：
        1.需要一个滚动容器，容器的大小固定，并且overflow：hidden
        2.容器内部的第一个子元素将所有需要滚动的内容包裹起来。
            x轴需要滚动，需要设置样式将宽度撑开。
            y轴需要滚动，不设置样式，让内容撑开高度
        3.创建滚动视图，滚动视图的参数需要是外部的滚动容器
    -->
    <div class="scroll">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "app-scroll",
  data: function() {
    return {
      scroll: null
    };
  },
  methods: {
    gobottomT() {
      var len = $(".center.cent>.scroll-wrap .scroll .redListBox li").length;
      this.scroll.refresh();
      this.scroll.scrollToElement("li:nth-child(" + len + ")", 1, 0, 0);
    },
    goTopT() {
      this.scroll.refresh();
      this.scroll.scrollToElement("li:first-child", 1, 0, 0);
    },
    gobottomTM() {
      var len = $(".center.cent>.scroll-wrap .scroll .redListBox li").length;
      this.scroll.refresh();
      this.scroll.scrollToElement("li:nth-child(" + len + ")", 1000, 0, 0);
    },
    goTopTM() {
      this.scroll.refresh();
      this.scroll.scrollToElement("li:first-child", 1000, 0, 0);
    }
  },
  mounted() {
    this.scroll = new IScroll(this.$refs.scroll, {
      click: true,
      tap: true
    });
    // 刷新滚动视图
    this.scroll.on("scrollStart", () => {
      this.scroll.refresh();
    });
    this.scroll.on("scrollEnd", () => {
      this.$emit("endFc");
    });
  }
};
</script>

<style>
.scroll-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
