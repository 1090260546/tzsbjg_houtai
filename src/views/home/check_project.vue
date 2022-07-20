<template>
  <!-- 检点项目 -->
  <div class="check_project">
    <ul class="top_nav_list flex flex_just_left">
      <li>主页</li>
      <div class="fenge_line">/</div>
      <li>保养管理</li>
      <div class="fenge_line">/</div>
      <li class="active">点检项目</li>
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
        <el-table-column prop="list_1" label="点检部位"></el-table-column>
        <el-table-column prop="list_2" label="检查内容"></el-table-column>
        <el-table-column prop="list_3" label="判定标准"></el-table-column>
        <el-table-column prop="list_4" label="点检方法"></el-table-column>
        <el-table-column prop="list_5" label="备注"></el-table-column>
        <el-table-column prop="list_6" label="操作人"></el-table-column>
        <el-table-column label="完成时间">
          <template slot-scope="scope">{{ scope.row.list_time }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template>
            <el-button type="text" size="small">编辑</el-button>
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
    };
  },

  methods: {
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
      list_1: "BY-20210319004",
      list_2: "机电管路",
      list_3: "检查管理有无泄漏",
      list_4: "试/看",
      list_5: "请输入",
      list_6r: "吴恒",
      list_7: "",
      list_8: "",
      list_9: "",
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
.check_project {
  width: 100%;
  height: 100%;
  .el-pagination {
    display: flex;
    justify-content: right;
    margin-top: 14px;
  }
}
</style>