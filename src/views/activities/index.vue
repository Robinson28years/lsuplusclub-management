<template>
    <el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top: 5%">
            <el-table-column
                    fixed
                    prop="created_at"
                    label="日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="summary"
                    label="摘要"
            >
            </el-table-column>
            <el-table-column
                    prop="sign_deadline"
                    label="报名截止日期"
                    width="150">
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="address"-->
            <!--label="地址"-->
            <!--width="300">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--prop="zip"-->
            <!--label="邮编"-->
            <!--width="120">-->
            <!--</el-table-column>-->
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                style="margin-top: 2%;"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="page_size"
                layout="prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </el-row>
</template>

<script>
  export default {
    created() {
      axios.get('api/activities')
        .then(res => {
          console.log(res.data);
          this.tableData = res.data.data;
          this.total = res.data.total;
          this.page_size = res.data.per_page;
        })
    },
    methods: {
      handleClick() {
        console.log(1);
      },
      handleCurrentChange(val) {
        axios.get('api/activities?page=' + val)
          .then(response => {
//            this.activities = null;
            this.tableData = [];
            let k = response.data.data;
            let i = 0;
            while (k[i] != null) {
              this.tableData.push(k[i]);
              i++;
            }
          })
      }
    },

    data() {
      return {
        tableData: [],
        currentPage3: 1,
        total: 200,
        page_size: 10,
      }
    }
  }
</script>