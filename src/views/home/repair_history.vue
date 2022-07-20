<template>
  <!-- 维修记录 -->
  <div class="weixiu_history">
    <ul class="top_nav_list flex flex_just_left">
      <li>主页</li>
      <div class="fenge_line">/</div>
      <li>保养管理</li>
      <div class="fenge_line">/</div>
      <li class="active">维修记录</li>
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
          <button class="export_btn">导出</button>
          <p>已选择{{multipleSelection.length}}项</p>
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
        <el-table-column prop="list_id" label="点检单号"></el-table-column>
        <el-table-column prop="list_name" label="设备名称"></el-table-column>
        <el-table-column prop="list_num" label="设备编号"></el-table-column>
        <el-table-column prop="list_type" label="设备类型"></el-table-column>
        <el-table-column prop="list_bz" label="维修备注"></el-table-column>
        <el-table-column prop="list_user" label="维修人"></el-table-column>
        <el-table-column label="完成时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
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
      tableData: [
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        },
        {
          date: "2022-05-23 12:12:54",
          list_id: "A2021204",
          list_name: "设备1",
          list_num: 'SD34332',
          list_type: '类型1',
          list_bz: '高压微雾加湿',
          list_user: '李卓豫',
        }
      ],
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
      console.log(val);
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.weixiu_history {
  width: 100%;
  height: 100%;
  
}
</style>