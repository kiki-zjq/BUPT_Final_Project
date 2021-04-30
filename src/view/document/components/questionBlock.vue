<template>
    <div class="question-block">
        <div class="question-title">{{ind}}.{{question.title}}</div>
        <div class="question-grade">[{{question.total}} marks]</div>
        
        <div 
            class="question-sub" 
            v-for="(sub,i) in question.subquestion"
            :key="i">
            <p>({{i+1}}) {{sub.question}}</p>
            <p class="question-grade">({{sub.grade}} marks)</p>
            
            <div v-if="sub.criteria.length!=0" class="criteria-block">
                <span style="font-weight:bold;margin-left:-2em;">Criteria:</span>
                <ul>
                <li v-for="(cri,index) in sub.criteria" :key="index">
                    <span>{{sub.criteria[index].point}}</span>
                    <span style="font-weight:bold">... ...</span>
                    <span>{{sub.criteria[index].mark}} marks</span>

                </li>
                </ul>
            </div>       
        
        </div>

        <div class="tool-box">
            <el-button type="primary" size="small" icon="el-icon-edit" @click="edit()" circle></el-button>
            <el-button type="warning" size="small" icon="el-icon-chat-square" @click="drawer = true;" circle></el-button>
            <el-button type="danger" size="small" icon="el-icon-delete" @click="del()" circle></el-button>
        </div>





        <el-drawer :visible.sync="drawer" direction="rtl" :before-close="handleClose" @open="handleOpen">


            
            <el-card 
 
            v-for="(comment, index) in question.comment"
            :key="index"
            style="margin:1em;"
            :class="comment.type"
            >
              
              <div class="has-check" v-if="comment.check">Has Been Checked</div>

              <p>{{comment.date}} {{comment.commentor}}</p>
              <p>{{comment.content}}</p>


              <el-button type="danger" size="small" icon="el-icon-delete" style="float:right;margin:5px;" @click="deleteComment(index)" circle></el-button>
              <el-button type="success" size="small" icon="el-icon-check" v-if="!comment.check" 
                        style="float:right;margin:5px;" circle @click="comment.check=!comment.check;"></el-button>
              <el-button type="warning" size="small" icon="el-icon-close" v-if="comment.check" 
                        style="float:right;margin:5px;" circle @click="comment.check=!comment.check;"></el-button>
                
            </el-card>

            <el-divider></el-divider>
            
            <el-card v-if="commentBlock" style="margin:1em;min-height:60px;">
                <el-form label-width="70px">
                    <el-form-item label="Comment" >
                        <el-input type="textarea" placeholder="Input your comment here" :autosize="{ minRows: 2, maxRows: 6}" v-model="editComment" resize="none" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="Type">
                        <el-select required v-model="editType" style="font-family:Times New Roman">
                            <el-option key="Suggest" label="Suggest" value="Suggest"></el-option>
                            <el-option key="Accept" label="Accept" value="Accept"></el-option>
                            <el-option key="Warning" label="Warning" value="Warning"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

                <el-button type="danger" style="float:right;margin:5px" @click="commentBlock = false">Cancel</el-button>
                <el-button type="primary" style="float:right;margin:5px" @click="saveComment()">Save</el-button>
            </el-card>
            
            <div style="text-align:center;margin-top:5px">
                <el-button type="primary" size="large" icon="el-icon-edit" style="padding:8px 24px;font-size:24px;margin-bottom:10em" @click="commentBlock = true;"></el-button>
            </div>
        </el-drawer>









        <!-- <EditBlock :dialogFormVisible="dialogFormVisible" :title="this.title" :total="this.total" :subquestion="this.subquestion"/> -->
        <el-dialog title="Edit Question" :visible.sync="dialogFormVisible" :before-close="cancelEdit">
            <el-form label-width="100px">
                <el-form-item label="Question" >
                    <el-input type="textarea" :placeholder=editTitle :autosize="{ minRows: 2, maxRows: 6}" v-model="editTitle" resize="none" clearable></el-input>
                </el-form-item>
                <el-form-item label="Total Marks" >
                    <el-col :span="2">
                     <el-input :placeholder=editTotal v-model="editTotal" 
                                onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                onafterpaste="this.value=this.value.replace(/[^\d]/g,'') ">
                    </el-input>
                    </el-col>
                    
                    <el-col :span="5">
                        <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                    </el-col>
                </el-form-item>
                <el-divider></el-divider>
                <div v-for="(sub,i) in editSub" :key="i">
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
                        <el-col :span="2" :offset="12"><el-button type="success" size="small" icon="el-icon-plus" @click="addCriteria(i)" circle></el-button></el-col>
                        
                        <el-col :span="2" ><el-button type="danger" size="small" icon="el-icon-delete" @click="delSub(i)" circle></el-button></el-col>
                    </el-form-item>


                    <el-form-item label="Criteria" v-if="sub.criteria.length!=0">
                        <el-row v-for="(cri,index) in sub.criteria" :key="index" style="margin-bottom:1em">
                            <el-col :span="12">
                                <el-input v-model="cri.point"></el-input>
                            </el-col>
                            <el-col :span="2" :offset="2">
                                <el-input  v-model="cri.mark"
                                    onkeyup="this.value=this.value.replace(/[^\d]/g,'') " 
                                    onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
                                ></el-input>
                            </el-col>
                
                            <el-col :span="3">
                                <span style="font-weight:bold;margin-left:1.5em;"> Marks </span>
                            </el-col>

                            <el-col :span="2" :offset="2">
                                <i style="font-weight:bold; color:red; cursor:pointer" class="el-icon-close" @click="delCri(i,index)"></i>
                            </el-col>

                        </el-row>
                    </el-form-item>


                    <el-divider></el-divider>
                </div>
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="addSub()">Add Subquestion</el-button>
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="modify()">Save</el-button>
            </div>

        </el-dialog>
    </div>
</template>

<script>
import EditBlock from './addQuestionBlock'
import {modifyComment} from '@/request/questionApi'

export default {
    props:{
        question:{},

        ind:0,
    },
    data(){
        return{
            editTitle:'',
            editTotal:'',
            editSub:'',
            dialogFormVisible:false,

            origComment:JSON.parse(JSON.stringify(this.question.comment)),// 保存原始的comment，以免每次开关comment都要发送请求

            editComment:'',
            editType:'Suggest',
            drawer:false,
            commentBlock:false,
        }
    },
    methods:{
        edit(){
            this.dialogFormVisible = true;
            this.editTitle = this.question.title;
            this.editTotal = this.question.total;
            // this.editSub = this.subquestion;
            this.editSub = JSON.parse(JSON.stringify(this.question.subquestion))

        },
        del(){

            this.$confirm('Are you sure you want to delete this question?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type:'warning'
            }).then(()=>{
                this.$message({
                type: 'success',
                message: `Delete Successfully`
                });
                this.$emit('del',this.question.qid)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            }) 

            
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
                this.editSub.splice(i,1)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            })            
        },
        delCri(i,index){
            this.$confirm('Are you sure you want to delete this criteria?', '', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type:'warning'
            }).then(()=>{
                this.$message({
                type: 'success',
                message: `Delete Successfully`
                });
                this.editSub[i].criteria.splice(index,1)
            }).catch(()=>{
                this.$message({
                type: 'info',
                message: `Cancel Delete Action`
                });
            })            
        },
        addSub(){
            var Obj = {
                question:'',
                grade:0,
                criteria:[],
            }
            this.editSub.push(Obj)
        },
        addCriteria(i){
            var Obj = {
                point:'',
                mark:0,
            }
            this.editSub[i].criteria.push(Obj);
        },
        modify(){

            if(this.check()){
                this.dialogFormVisible = false;
                var data={
                    "title":this.editTitle,
                    "total":this.editTotal,
                    "subquestion":this.editSub,
                    "qid":this.question.qid
                }
                this.$emit('modify',data,this.question.qid)
            }else{
                this.$notify({
                    title: 'Warning',
                    message: 'Make sure that the sum of subquestion score is equal to the total score!',
                    type: 'warning',
                    duration:5000,
                });
            }
            
            
        },
        check(){
            var sum = 0;
            if(!this.editSub.length)return true;

            this.editSub.forEach((sub)=>{
                sum += Number(sub.grade)
            })
            if(this.editTotal == sum)return true;
            else return false;
        },

        handleClose(){
                if(JSON.stringify(this.origComment) != JSON.stringify(this.question.comment)){
                    modifyComment(this.question.comment,this.question.qid)
                    this.origComment = JSON.parse(JSON.stringify(this.question.comment))
                }
                this.drawer=false;
        },
        cancelEdit(){
            this.$confirm('We will not save your input if you leave!', 'Prompt',{
                confirmButtonText: 'Leave',
                cancelButtonText: 'Stay Here',
                type: 'warning'
            }).then(()=>{
                this.dialogFormVisible = false;
            })
        },
        saveComment(){

            var obj = new Object();
            obj={
                "type":this.editType,
                "content":this.editComment,
                "commentor":this.$store.state.name,
                "date":Date().slice(4,24),
                "check":false,
            }
            this.question.comment.unshift(obj);
            this.commentBlock = false;
            this.editType="Suggest";
            this.editComment="";
        },
        deleteComment(index){
            this.question.comment.splice(index,1)
        }

    },
    components:{
        EditBlock
    }
    
}

$(document).ready(function(){
    $(".question-block").mouseover(function(){
        
    })
})
</script>


<style>

.question-block{
    font-family: 'Times New Roman', Times, serif;
    line-height:20px;
    margin:1.5em;
    padding:1.5em;
    border:2px white solid;
    box-shadow: black 0px 0px 10px;
}

.question-block .question-title{
    font-size:16px;
    font-weight:bold;
}

.question-block .question-sub{
    font-size:14px;
    text-indent: 2em;
}
.question-block .question-grade{
    text-align:right;
    font-weight:bold;
}
.tool-box{
    margin-top:2em;
    text-align:right;
    /* visibility:hidden */
}


.Warning:hover{
    box-shadow:0px 0px  8px 0px #F56C6C
}

.Accept:hover{
    box-shadow:0px 0px  8px 0px #67C23A
}

.Suggest:hover{
    box-shadow:0px 0px  8px 0px #409EFF;
}

.has-check{
    text-align:right;
    float:right;
    position: relative;
    right:-2em;
    top:-1.5em;
    color:white;
    font-family: 'Times New Roman', Times, serif;
    background-color: #67C23A;
    padding: 10px 2em 0 10px;
}

.criteria-block{
    border-radius: 5px;
    padding:10px;
    margin:5px auto;
    width:90%;
    background-color:rgba(251, 140, 99, 0.68);
    font-size:14px;
    font-weight:bold;
}
.criteria-block li{
    text-indent: 0;
}


.el-drawer__body {
    /* overflow: auto; */
    overflow: auto!important;
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}
</style>