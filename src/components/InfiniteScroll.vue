<template>
  <!-- 父级调用 -->
  <!-- <infinite-scroll ref="infiniteScroll" @refresh="父级刷新数据事件" @loadmore="父级上拉加载更多事件"> -->
  <!-- this.$refs.infiniteScroll.endRefresh() 父刷新成功后用此事件可以关闭下拉刷新-->
  <!-- this.$refs.infiniteScroll.endLoadMore() 父级上来加载更多数据成功后用此事件可以关闭加载更多动画-->
  <!-- this.$refs.infiniteScroll.dataload() 需要显示数据加载中时-->
  <!-- this.$refs.infiniteScroll.destroy() 销毁上下拉-->
  <!-- this.$refs.infiniteScroll.watchdata(布尔值true表示显示) 隐藏上拉加载更多-->
  <div id="infiniteSc" class="scroll-wrap infinite-scroll" ref="scroll">
    <div class="scroll">
      <!-- 下拉刷新 -->
      <div id="Refreshbox" class="refresh" v-if="needRefresh">
        <span class="text">{{refreshText}}</span>
      </div>
      <!-- 滚动的内容 -->
      <slot />
      <!-- 上拉加载更多 -->
      <div v-if="needLoadMore2">
        <div class="loadmore" v-if="needLoadMore">
          <span class="text">{{loadMoreText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infinite-scroll",
  props: {
    // 开启下拉刷新
    needRefresh: {
      type: Boolean,
      default: true
    },
    // 开启上拉加载更多
    needLoadMore: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      canRefresh: false,
      refreshText: "下拉可以刷新...",
      canLoadMore: false,
      loadMoreText: "上拉可以加载更多...",
      needLoadMore2: true,
    };
  },
  watch: {
    needLoadMore(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.scroll.destroy();
        this.createScroll();
      } else if (oldVal === false && newVal === true) {
        //打开加载更多
        this.needLoadMore && this.runLoadMore();
      }
    }
  },
  methods: {
    //隐藏上拉加载更多
    watchdata(booleantitle){
      this.needLoadMore2 = booleantitle;
    },
    //数据加载中
    dataload(){
      this.loadMoreText = '正在加载中...'
    },
    //销毁上下拉
    destroy() {
        this.loadMoreText = '已经没有更多数据了'
        this.scroll.destroy(); //销毁上下拉
    },
    createScroll() {
      //构建滚动视图
      let scroll = (this.scroll = new IScroll(this.$refs.scroll, {
        startY: this.needRefresh ? -40 : 0,
        probeType: 3,
        click: true,
        tap: true
      }));
      // 刷新滚动视图
      scroll.on("beforeScrollStart", () => {
        scroll.refresh();
      });
      // 调用下拉刷新
      this.needRefresh && this.runRefresh();
      // 调用上拉加载更多
      this.needLoadMore && this.runLoadMore();
    },
    // 关闭下拉刷新的事件
    endRefresh() {
      if (this.scroll && this.scroll.maxScrollY < -40) {
        this.scroll.scrollTo(0, -40, 300);
      }
      this.refreshText = "下拉可以刷新...";
    },
    //执行下拉刷新
    runRefresh() {
      // 实现下拉刷新的代码
      this.scroll.on("scroll", () => {
        let y = this.scroll.y;
        if (y >= 0) {
          this.canRefresh = true;
          this.refreshText = "释放立即刷新...";
        } else {
          this.canRefresh = false;
          this.refreshText = "下拉可以刷新...";
        }
      });
      this.scroll.on("scrollEnd", () => {
        let y = this.scroll.y;
        if (y > -40 && y < 0) {
          //不满足下拉刷新的条件,收回下拉刷新提示框
          this.scroll.scrollTo(0, -40, 300);
        } else if (y >= 0) {
          //满足刷新条件
          this.refreshText = "正在刷新...";
          // 执行下拉刷新的请求
          this.$emit("refresh");
        }
      });
    },
    // 执行上拉加载更多的代码
    runLoadMore() {
      this.scroll.on("scroll", () => {
        let y = this.scroll.y;
        let maxY = this.scroll.maxScrollY;
        if (y > maxY && y < maxY + 40) {
          this.loadMoreText = "上拉可以加载更多...";
          this.canLoadMore = false;
        } else if (y <= maxY) {
          this.loadMoreText = "释放立即加载更多...";
          this.canLoadMore = true;
        }
      });
      this.scroll.on("scrollEnd", () => {
        let y = this.scroll.y;
        let maxY = this.scroll.maxScrollY;
        if (y > maxY && y < maxY + 40) {
          // 没有达到加载更多的条件，收回加载更多的提示框
          this.scroll.scrollTo(0, maxY + 40, 300);
        } else if (y <= maxY) {
          // 达到了加载更多的条件
          this.loadMoreText = "正在加载中...";
          // 触发加载更多
          this.$emit("loadmore");
        }
      });
    },
    // 关闭加载更多动画的事件
    endLoadMore() {
      this.loadMoreText = "上拉可以加载更多...";
      this.scroll.scrollTo(0, this.scroll.maxScrollY + 40, 300);
    }
  },
  mounted() {
    this.createScroll();
  }
};
</script>

<style lang="scss" >
.infinite-scroll {
  overflow: hidden;
  width: 100%;
  height: 100%;
  span {
    color: #fff;
  }
  .refresh,
  .loadmore {
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.32rem;
  }
}
</style>

