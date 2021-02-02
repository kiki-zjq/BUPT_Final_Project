<template>
    <div class='blank'>
        <HeaderPart class="header-part"/>
        <el-row>

            <el-col :span="4">
                <ToolBox class="tool-box"/>

            </el-col>

            <el-col :span="16">
                
                <MainPart ref="mainPart" :questions="questions" @del="del" @modify="modify"/>
                
            </el-col>
            
            
            <el-col :span="4">
                <div class="edit-box">
                    <el-button type="primary" class="btn" @click="edit()">EDIT</el-button><br/>
                    <el-button type="success" class="btn" @click="addQuestion=true">PREVIEW</el-button><br/>
                    <el-button type="warning" class="btn" @click="addQuestion=true">DOWNLOAD</el-button><br/>
                </div>
            </el-col>
                    

        </el-row>




        <el-dialog title="Add Question" :visible.sync="dialogFormVisible">
            <el-form label-width="100px">
                <el-form-item label="Question" >
                    <el-input type="textarea"  :autosize="{ minRows: 2, maxRows: 6}" v-model="title" resize="none" clearable></el-input>
                </el-form-item>
                <el-form-item label="Total Marks" >
                    <el-col :span="2">
                     <el-input v-model="total" 
                                onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                    ></el-input>
                    </el-col>
                    <el-col :span="5">
                        <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                    </el-col>
                </el-form-item>
                <el-divider></el-divider>
                <div v-for="(sub,i) in subquestion" :key="i">
                    <el-form-item label="Subquestion" >
                        <el-input type="textarea" :placeholder=sub.question v-model="sub.question" :autosize="{ minRows: 2, maxRows: 6}"  resize="none" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="Marks" >
                        <el-col :span="2">
                        <el-input :placeholder=sub.grade v-model="sub.grade"
                                    onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                    onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                        ></el-input>
                        </el-col>
                        <el-col :span="5">
                            <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                        </el-col>
                        <el-col :span="2" :offset="14"><el-button type="danger" size="small" icon="el-icon-delete" @click="delSub(i)" circle></el-button></el-col>
                    </el-form-item>
                    <el-divider></el-divider>
                </div>
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="addSub()">Add Subquestion</el-button>
                <el-button @click="cancel()">Cancel</el-button>
                <el-button type="primary" @click="save()">Save</el-button>
            </div>

        </el-dialog>




    </div>    
</template>


<script>
import HeaderPart from './components/head'
import ToolBox from './components/toolbox'
import MainPart from './components/mainPart'

import {addQuestion,fetchQuestion,deleteQuestion,modifyQuestion} from '@/request/api'
export default {
    data(){
        return{
            questions:[],
            addQuestion:false,
            dialogFormVisible:false,
            title:'',
            total:'',   
            subquestion:[],
        };
    },
    methods:{
        edit(){
            this.dialogFormVisible = true;
        },
        delSub(i){
            this.$confirm('Are you sure you want to delete this subquestion?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type:'warning'
            }).then(()=>{
                this.$message({
                type: 'success',
                message: `Delete Successfully`
                });
                this.subquestion.splice(i,1)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            })            
        },
        del(qid){
            deleteQuestion(qid)
            this.getData()
        },
        addSub(){
            var Obj = {
                question:'',
                grade:0,
            }
            this.subquestion.push(Obj)
        },
        cancel(){
            this.dialogFormVisible = false;
            this.title='';
            this.total='';
            this.subquestion=[];
        },
        save(){
            if(this.check()){
                this.dialogFormVisible = false;
                var n = this.questions.length;
                var qid = this.questions[n-1].qid+1;

                var data={
                    "title":this.title,
                    "total":this.total,
                    "subquestion":this.subquestion,
                    "qid":qid
                }
                addQuestion(data).then(()=>{
                    this.getData();
                    this.title='';
                    this.total='';
                    this.subquestion=[];
                })
            }else{
                this.$notify({
                    title: 'Warning',
                    message: 'Make sure that the sum of subquestion score is equal to the total score!',
                    type: 'warning',
                    duration:5000,
                });
            }
            


        },
        modify(data,qid){
            modifyQuestion(data,qid).then(()=>{
                this.getData();
            });
            
        },
        getData(){
            fetchQuestion().then((res)=>{
                this.questions = res.data
            })
        },
        check(){
            var sum = 0;
            if(!this.subquestion.length)return true;
            
            this.subquestion.forEach((sub)=>{
                sum += Number(sub.grade)
            })
            if(this.total == sum)return true;
            else return false;
        }
    },
    mounted(){
        this.getData();
    },
    components:{
        HeaderPart,
        ToolBox,
        MainPart,
    }
}
</script>

<style scoped>
.header-part{
    z-index:999;
    position: sticky;
    top:0;
}
.tool-box{
    position: sticky;
    top:100px;
}
.blank{
    background-color: #dadce0;
}
.btn{
    margin-top:20px;
    width:120px;
    height:60px;
}
.edit-box{
    position: fixed;
    bottom: 40px;
    right:60px;
}
</style>