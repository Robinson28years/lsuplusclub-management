<template>
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
</template>

<script>
  export default {
    created() {
      axios.get('api/activities')
        .then(res => {
          console.log(res.data);
          this.tableData = res.data;
        })
    },
    methods: {
      handleClick() {
        console.log(1);
      }
    },

    data() {
      return {
        tableData: [],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>