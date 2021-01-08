<template>
    <div class="question-block">
        <div class="question-title">{{ind}}.{{title}}</div>
        <div class="question-grade">[{{total}} marks]</div>
        
        <div 
            class="question-sub" 
            v-for="(sub,i) in subquestion"
            :key="i">
            <p>({{i+1}}) {{sub.question}}</p>
            <p class="question-grade">({{sub.grade}} marks)</p>            
        </div>

        <div class="tool-box">
            <el-button type="primary" size="small" icon="el-icon-edit" @click="edit()" circle></el-button>
            <el-button type="warning" size="small" icon="el-icon-chat-square" circle></el-button>
            <el-button type="danger" size="small" icon="el-icon-delete" circle></el-button>
        </div>


        <!-- <EditBlock :dialogFormVisible="dialogFormVisible" :title="this.title" :total="this.total" :subquestion="this.subquestion"/> -->
        <el-dialog title="Edit Question" :visible.sync="dialogFormVisible">
            <el-form label-width="100px">
                <el-form-item label="Question" >
                    <el-input type="textarea" :placeholder=title :autosize="{ minRows: 2, maxRows: 6}" v-model="editTitle" resize="none" clearable></el-input>
                </el-form-item>
                <el-form-item label="Total Marks" >
                    <el-col :span="2">
                     <el-input :placeholder=total v-model="editTotal" ></el-input>
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
                        <el-input :placeholder=sub.grade v-model="sub.grade" ></el-input>
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
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">Save</el-button>
            </div>

        </el-dialog>
    </div>
</template>

<script>
import EditBlock from './editBlock'

export default {
    props:{
        title:'',
        total:'',
        subquestion:[],
        ind:0,
    },
    data(){
        return{
            editTitle:'',
            editTotal:'',
            editSub:'',
            dialogFormVisible:false,
        }
    },
    methods:{
        edit(){
            this.dialogFormVisible = true;
            this.editTitle = this.title;
            this.editTotal = this.total;
            // this.editSub = this.subquestion;
            this.editSub = JSON.parse(JSON.stringify(this.subquestion))

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
        addSub(){
            var Obj = {
                question:'',
                grade:0,
            }
            this.editSub.push(Obj)
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

<style scoped>

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
</style>