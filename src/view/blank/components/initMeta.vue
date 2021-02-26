<template>
    <el-dialog title="Edit Test Meta Information" :visible.sync="initMeta" >
        <el-form class="init-form" label-width="100px">
            <el-form-item label="Course NO" >
                    <el-input v-model="courseNO" resize="none" clearable style="width:50%" placeholder="EBU6304"></el-input>
            </el-form-item>
            <el-form-item label="Course Name" >
                    <el-input v-model="courseName" resize="none" clearable style="width:50%" placeholder="Software Engineering"></el-input>
            </el-form-item>
            <el-form-item label="Course Date" >
                    <el-input v-model="courseDate" resize="none" clearable style="width:50%" placeholder="2019/20"></el-input>
            </el-form-item>
            <el-form-item label="Examiners" >
                    <el-input v-model="examiners" resize="none" clearable style="width:50%" placeholder="Dr. Jiangqi"></el-input>
            </el-form-item>
            <el-form-item label="File Name" >
                    <el-input v-model="filename" resize="none" clearable style="width:50%" placeholder="1920_EBU6304_ALT2020_A"></el-input>
            </el-form-item>
        </el-form>        

        <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="save()">Save</el-button>
        </div>
    </el-dialog>

</template>
<script>
import {dateMixin} from '@/mixins/DateMixin.js';
import {initPaperMeta} from '@/request/paperApi'

export default {
    mixins:[dateMixin],
    props:{
        initMeta:false,
        paperid:'',
    },
    data(){
        return{
            courseNO:'',
            courseName:'',
            courseDate:'',
            examiners:'',
            filename:'',
        }
    },
    methods:{
        save(){
            var account = this.$store.state.account;
            var createDate = '';
            var modifyDate = '';
            var obj = {
                paperid :this.paperid,
                courseNO:this.courseNO,
                courseName:this.courseName,
                courseDate:this.courseDate,
                examiners:this.examiners,
                fileName:this.filename,
                createDate:this.formatDate(),
                modifyDate:this.formatDate(),
            }
            initPaperMeta(account,obj);
            this.$emit("finishInitMeta");
        },
    }
}
</script>

<style scoped>
.init-form{
    text-align: left;
}
</style>