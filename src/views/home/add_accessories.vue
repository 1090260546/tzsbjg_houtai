<template>
  <div class="add_accessories">
    <ul class="top_nav_list flex flex_just_left">
      <li>主页</li>
      <div class="fenge_line">/</div>
      <li>设备管理</li>
      <div class="fenge_line">/</div>
      <li class="active">新增配件</li>
    </ul>
    <div class="page_content">
      <div class="from_list">
        <ul class="input_list flex flex_space_between">
          <li>
            <p>配件名称:</p>
            <input type="text" placeholder="请输入配件名称" />
          </li>
          <li>
            <p>规格型号:</p>
            <input type="text" placeholder="请输入" />
          </li>
          <li>
            <p>所属设备:</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
          <li>
            <p>设备类型:</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
          <li>
            <p>设备型号:</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
          <li>
            <p>配件数量:</p>
            <input type="text" placeholder="请输入配件数量" />
          </li>
        </ul>
        <div class="text_box">
          <p>备注:</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="请输入"
          ></textarea>
        </div>
        <div class="from_btn">
          <button>取消</button>
          <button class="active">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: "",
      value2: ""
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.add_accessories {
  width: 100%;
  height: 100%;
}
</style>