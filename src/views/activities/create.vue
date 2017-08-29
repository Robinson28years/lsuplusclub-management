<template>
    <el-row style="margin: 5%">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="活动摘要">
                <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="活动摘要"
                        v-model="form.summary">
                </el-input>
            </el-form-item>
            <el-form-item label="报名截止时间">
                <!--<el-col :span="11">-->
                    <!--<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
                <!--</el-col>-->
                <!--<el-col class="line" :span="2">-</el-col>-->
                <el-col :span="11">
                    <el-date-picker
                            v-model="form.sign_deadline"
                            type="datetime"
                            placeholder="选择日期时间">
                    </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动大图链接">
                <el-input v-model="form.img"></el-input>
            </el-form-item>
            <el-form-item label="活动内容">
                <el-row type=""  justify="center">
                    <mavon-editor style="height: 100%" v-model="form.body"></mavon-editor>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
  export default {
    components: {
      ElFormItem,
      mavonEditor
      // or 'mavon-editor': mavonEditor
    },
    methods: {

      onSubmit() {
        console.log(this.value);
        this.form.sign_deadline = (new Date(this.form.sign_deadline)).Format("yyyy-MM-dd hh:mm:ss");
        console.log(this.form.sign_deadline)
        axios.post('api/activities', this.form)
          .then(response => {
//          console.log(response.data);
          if(response.status == 200) {
            this.$router.push('/activities/index');
          }
        })
      },

    },
    data() {
      return {
        form: {
          title: '',
          summary: '',
          sign_deadline: '',
          img: '',
          body: '',
        },
      }
    }
  }
  Date.prototype.Format = function (fmt) {
    var o = {
      "y+": this.getFullYear(),
      "M+": this.getMonth() + 1,                 //月份
      "d+": this.getDate(),                    //日
      "h+": this.getHours(),                   //小时
      "m+": this.getMinutes(),                 //分
      "s+": this.getSeconds(),                 //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S+": this.getMilliseconds()             //毫秒
    };
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)){
        if(k == "y+"){
          fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
        }
        else if(k=="S+"){
          var lens = RegExp.$1.length;
          lens = lens==1?3:lens;
          fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1,lens));
        }
        else{
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
    }
    return fmt;
  }
</script>

<style>
    #editor {
        margin-top: 10%;
        width: 80%;
        height: 580px;
    }
</style>
