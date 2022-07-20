<template>
  <!-- 保养规则 -->
  <div class="maintenance_rulues">
    <ul class="top_nav_list flex flex_just_left">
      <li>主页</li>
      <div class="fenge_line">/</div>
      <li>保养管理</li>
      <div class="fenge_line">/</div>
      <li class="active">保养规则</li>
    </ul>
    <div class="page_content">
      <div class="seach_box">
        <div
          class="
            seach_left_item
            post_top_center
            flex flex_just_left flex_align_center
          "
        >
          <button class="export_btn">新增</button>
          <button class="export_btn bg_DB4E2A">批量删除</button>
          <p>已选择0项</p>
        </div>
        <div
          class="
            seach_right_item
            post_top_center
            flex flex_just_left flex_align_center
          "
        >
          <input type="text" placeholder="请输入" />
          <button class="seach_btn acitve">查询</button>
          <button class="seach_btn">导出</button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="list_1" label="规则名称"></el-table-column>
        <el-table-column prop="list_2" label="设备名称"></el-table-column>
        <el-table-column prop="list_3" label="设备编号"></el-table-column>
        <el-table-column prop="list_4" label="设备类型"></el-table-column>
        <el-table-column prop="list_5" label="保养项目数量"></el-table-column>
        <el-table-column prop="list_6" label="保养周期"></el-table-column>
        <el-table-column prop="list_7" label="执行人"></el-table-column>
        <el-table-column prop="list_8" label="操作人"></el-table-column>
        <el-table-column label="启用状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.list_9"
              active-color="#13ce66"
              inactive-color="#E5E5E5"
              @change="swithc_btn(scope.$index)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="list_time" label="操作时间"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <!-- <el-button
              @click="handleClick(scope.$index, scope.row)"
              type="text"
              size="small"
              >查看</el-button
            > -->
            <el-button type="text" size="small" @click="handleClick(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage1: 5,
      value: false,
    };
  },

  methods: {
    swithc_btn(val) {
        this.tableData[val].list_9 != this.tableData[val].list_9;
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  created() {
    let obj_list = {
      list_1: "名称1",
      list_2: "设备1",
      list_3: "004",
      list_4: "类型1",
      list_5: "周",
      list_6r: "5",
      list_7: "吴恒",
      list_8: "已执行",
      list_9: false,
      list_10: "",
      list_time: "2022-05-23 12:12:54",
    };
    for (let i = 0; i < 10; i++) {
      this.tableData.push(obj_list);
    }
  },
};
</script>

<style lang="scss" scoped>
.maintenance_rulues {
  width: 100%;
  height: 100%;
  .el-pagination {
    display: flex;
    justify-content: right;
    margin-top: 14px;
  }
}
</style>