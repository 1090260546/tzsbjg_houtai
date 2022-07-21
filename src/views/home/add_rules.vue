<template>
  <!-- 新增规则 -->
  <div class="add_accessories">
    <ul class="top_nav_list flex flex_just_left">
      <li>主页</li>
      <div class="fenge_line">/</div>
      <li>保养管理</li>
      <div class="fenge_line">/</div>
      <li class="active">新增规则</li>
    </ul>
    <div class="page_content">
      <div class="from_list">
        <ul class="input_list flex flex_space_between">
          <div class="title_div">
            <div class="shu_xian"></div>
            <p>保养信息</p>
          </div>
          <li>
            <p>规则名称:</p>
            <input class="flew_1" type="text" placeholder="请输入" />
          </li>
          <li>
            <p>执行人:</p>
            <input
              class="flew_1"
              disabled="disabled"
              type="text"
              placeholder="请选择"
            />
          </li>
          <li>
            <p>设备名称:</p>
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
            <p>设备编号:</p>
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
            <p>保养周期:</p>
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
            <p>循环方式:</p>
            <el-radio-group v-model="radio">
              <el-radio :label="3">单次</el-radio>
              <el-radio :label="6">多次</el-radio>
            </el-radio-group>
          </li>
          <li>
            <p>循环周期:</p>
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
            <p>保养日期:</p>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
          </li>
          <li>
            <p>提醒时间:</p>
            <el-date-picker v-model="value2" type="date" placeholder="选择日期">
            </el-date-picker>
          </li>
        </ul>
        <div class="title_div">
          <div class="shu_xian"></div>
          <p>保养项目</p>
        </div>

        <div class="from_btn_left">
          <button class="active">添加</button>
          <button class="bg_f59a23">移除</button>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="list_1" label="保养项目"></el-table-column>
          <el-table-column prop="list_2" label="检查内容"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >移除</el-button
              >
              <!-- <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
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
      value2: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      tableData: [],
      multipleSelection: [],
      currentPage1: 5,
      radio: 3
    };
  },
  methods: {
    handleClick(data) {},
    handleChange(value) {
      console.log(value);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
  created() {
    let obj_list = {
      list_1: "机电管路",
      list_2: "检查机电管路相关问题",
      list_3: "",
      list_4: "",
      list_5: "",
    };
    for (let i = 0; i < 5; i++) {
      this.tableData.push(obj_list);
    }
  },
};
</script>

<style lang="scss" scoped>
.add_accessories {
  width: 100%;
  height: 100%;
}
</style>