<template>
    <div class="container col-md-8 col-md-offset-2" style="margin-top: 5%">
        <!-- Form -->
        <!--<el-button v-if="userLogin" style="margin-bottom: 2%" type="info" @click="dialogFormVisible = true">-->
        <!--贡献图书 ^_^-->
        <!--</el-button>-->

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="姓名">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="学号">
                            <span>{{ props.row.studenid }}</span>
                        </el-form-item>
                        <el-form-item label="班级">
                            <span>{{ props.row.grades }}</span>
                        </el-form-item>
                        <el-form-item label="注册时间">
                            <span>{{ props.row.created_at }}</span>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="权限">
                            <span>{{ props.row.role }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="学号"
                    prop="studenid">
            </el-table-column>
            <el-table-column
                    label="班级"
                    prop="grades">
            </el-table-column>
            <el-table-column
                    label="注册时间"
                    prop="created_at">
            </el-table-column>
            <!--<el-table-column label="操作">-->
            <!--<template scope="scope">-->
            <!--<el-button-->
            <!--:disabled="scope.row.state == '已经借出'"-->
            <!--size="small"-->
            <!--type="success"-->
            <!--@click="borrow(scope.$index, scope.row)">借阅-->
            <!--</el-button>-->
            <!--</template>-->
            <!--</el-table-column>-->
        </el-table>
        <div class="block" style="margin-bottom: 10%; margin-top: 5%">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="page_size"
                    layout="prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<style>
    body {
        overflow-y: scroll;
    }

    body.stop-scrolling {
        overflow-y: scroll;
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
  export default {
    created() {
      axios.get('api/users/all')
        .then(response => {
          // console.log(response.data);
          let k = response.data.result.data;
          let i = 0;
          while (k[i] != null) {
            this.tableData.push(k[i]);
//            console.log(k[i]);
            i++;
          }
          this.total = response.data.result.total;
          this.page_size = response.data.result.per_page;
        })
      if (localStorage.getItem('user') != null) {
        this.userLogin = true;
      }
    },
    methods: {
      handleCurrentChange(val) {
//        this.loading2 = true;
        axios.get('api/users/all?page=' + val)
          .then(response => {
            this.tableData = null;
            this.tableData = [];
            let k = response.data.result.data;
            let i = 0;
            while (k[i] != null) {
              this.tableData.push(k[i]);
              i++;
            }
          })
//        console.log(`当前页: ${val}`);
      },
    },
    data() {
      return {
        userLogin: false,
        tableData: [],
        currentPage3: 1,
        total: 200,
        page_size: 10,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    }
  }
</script>
