<template>
    <div class='blank'>
        <el-row>
            
            <el-col :span="4">
                <div class="back-arrow" @click="goBack()">
                    <i class="el-icon-back"></i>
                </div>
            </el-col>
            

            <el-col :span="16" :offset="4">
                
                <!-- <MainPart ref="mainPart" :questions="questions"  :isEditMeta="isEditMeta" @del="del" @modify="modify"/> -->
                <div class="main-part">
                    <div class="doc">
                        <Cover :isEditMeta="isEditMeta" :paperid="paperid" style="margin-bottom:4em;" ref="coverPage"/>
                        <QuestionBlock
                            v-for="(question,index) in questions"
                            :key="index"
                            :question="question"
                            :ind="index+1"

                            @modify="modify"
                            @del="del"
                        />
                        <!-- del和modify搞定 可以删除和修改问题 -->
                        
                        <el-divider></el-divider>
                        <p style="text-align:center;font-family:Times New Roman">END OF PAPER</p>
                    </div>
                </div>
            </el-col>
            
            
            <el-col :span="4">
                <div class="edit-box">
                    
                    <ToolBox @addNewQuestion="addBlock=true" 
                             @editMeta="isEditMeta=true" 
                             @saveMeta="saveMeta" 
                             @cancelMeta="cancelMeta"
                             @addTeam="teamBlock=true"
                             @download="downloadBlock=true"
                             @openBank="bankBlock=true"
                             :isEditMeta="isEditMeta"/>
                </div>
            </el-col>
                    

        </el-row>

        <DownloadBlock :downloadBlock="downloadBlock" @cancel="downloadBlock=false" @download="download"/>
        <TeamBlock :teamBlock="teamBlock" @cancel="teamBlock=false"/>
        <AddQuestionBlock :addBlock="addBlock" @cancel="addBlock=false" @save="save" />
        

        <InitMeta :initMeta="openInitMeta" :paperid="paperid" @finishInitMeta="finishInit"/>

        <el-drawer
            title="Question Bank"
            @open="openQuestionBank"
            :visible.sync="bankBlock"
            direction="ltr"
            size="50%">
            <BankBlock @addFromBank='addFromBank' ref="questionBank"/>
        </el-drawer> 

    </div>    
</template>


<script>
import InitMeta from './components/initMeta'

import HeaderPart from '../document/components/head'
import ToolBox from '../document/components/toolbox'


import TeamBlock from '../document/components/teamBlock'
import AddQuestionBlock from '../document/components/addQuestionBlock'
import Cover from '../document/components/coverPage'
import QuestionBlock from '../document/components/questionBlock'

import DownloadBlock from '../document/components/downloadBlock'
import BankBlock from '../document/components/bankBlock'


import {addQuestion,fetchQuestion,deleteQuestion,modifyQuestion} from '@/request/questionApi'
import {modifyPaperMeta} from '@/request/paperApi'
import {downloadPaper} from '@/request/downloadApi'
import {dateMixin} from '@/mixins/DateMixin.js';

export default {
    mixins:[dateMixin],
    components:{
        HeaderPart,
        ToolBox,
        InitMeta,

        TeamBlock,
        AddQuestionBlock,
        Cover,
        QuestionBlock,
        DownloadBlock,
        BankBlock,
    },
    data(){
        return{
            questions:[],

            addBlock:false,
            teamBlock:false,
            downloadBlock:false,
            bankBlock:false,

            isEditMeta:false,
            
            initMeta:1,
            paperid:'',
        };
    },
    methods:{
        getData(){
            fetchQuestion(this.paperid).then((res)=>{
                this.questions = res.data
            })
        },

        
        del(qid){
            deleteQuestion(qid)
            this.getData()
        },
        
        modify(data,qid){
            modifyQuestion(data,qid).then(()=>{
                this.getData();
                this.$notify({
                        title: 'Success',
                        message: 'Save your modify successfully!',
                        type: 'success',
                        duration:5000,
                    });

            });
            
        },


        
        save(data){
                
                this.addBlock = false;
                // var n = this.questions.length;
                // var qid = n==0?1:this.questions[n-1].qid+1;

                // data.qid = qid;
                data.qid = Date.parse( new Date());
                data.paperid = this.paperid;
                
                this.$notify({
                        title: 'Success',
                        message: 'Add a new question successfully!',
                        type: 'success',
                        duration:5000,
                    });

                addQuestion(data).then(()=>{
                    this.getData();
                })

        },

        openQuestionBank(){
            this.$refs.questionBank.getBank();
        },

        addFromBank(data){
            let obj = JSON.parse(JSON.stringify(data))
            obj.qid = Date.parse( new Date());
            obj.paperid = this.paperid;
            obj.comment = [];
            delete obj._id;

            this.$notify({
                        title: 'Success',
                        message: 'Add a new question successfully!',
                        type: 'success',
                        duration:5000,
            });
            addQuestion(obj).then(()=>{
                    this.getData();
                })
        },


        
        saveMeta(){
            this.$confirm('Are you sure you want to save your changes?', 'Prompt', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning'
            }).then(() => {
                
                var obj = {
                    courseNO:this.$refs.coverPage.courseNO,
                    courseName:this.$refs.coverPage.courseName,
                    courseDate:this.$refs.coverPage.courseDate,
                    examiners:this.$refs.coverPage.examiners,
                    fileName:this.$refs.coverPage.fileName,
                    modifyDate:this.formatDate()
                }
                modifyPaperMeta(this.paperid, obj).then(()=>{
                    this.$notify({
                            title: 'Success',
                            message: 'Save Meta Information Successfully!',
                            type: 'success',
                            duration:3000,
                        });
                })
                this.isEditMeta = false;
                
            });
            
        },
        cancelMeta(){
            this.$refs.coverPage.getPaperMetaInfo(this.paperid);
            this.isEditMeta = false;
        },

        finishInit(val){
            this.initMeta+=1;
            if(val==1){
                this.$refs.coverPage.getPaperMetaInfo(this.paperid);
            }
        },
        goBack(){
            this.$router.go(-1)
        },

        download(format, type){

            let obj={
                courseNo:this.$refs.coverPage.courseNO,
                courseName:this.$refs.coverPage.courseName,
                courseDate:this.$refs.coverPage.courseDate,
                examiners:this.$refs.coverPage.examiners,
                fileName:this.$refs.coverPage.fileName,
                questions:this.questions
            }
            // console.log(obj);

            downloadPaper(obj, format, type).then(()=>{
                var a = document.createElement("a")
                document.body.appendChild(a);

                if(format == '1' || format == '3'){
                    a.setAttribute('href','./static/'+obj.fileName+'.pdf');
                    a.setAttribute('download',obj.fileName+'.pdf');
                    a.click();
                }
                
                if(format == '2' || format == '3'){
                    a.setAttribute('href','./static/'+obj.fileName+'.tex');
                    a.setAttribute('download',obj.fileName+'.tex');
                    a.click();
                }

                // 这里未来加一个动画或者提示，让用户知道我们正在download

                
                document.body.removeChild(a);
  
                this.downloadBlock = false;
            })
            
        }

    },
    mounted(){
        var account = this.$store.state.account

        this.paperid = this.formatPaperIDDate()+account;
        this.getData();
    },
    computed:{
        openInitMeta:function(){
            return this.initMeta==1;   
        }
    },

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

.edit-box{
    position: fixed;
    bottom: 40px;
    right:60px;
}

.main-part{
    position: relative;
    background-color: #dadce0;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
}

.doc{
    box-shadow: black 0px 0px 10px;
    background-color:white;
    margin:0 auto;
    box-sizing: border-box;
    padding:30px;
    width:90%;
    min-height:800px;
}

</style>

<style>
.el-drawer__body {
    /* overflow: auto; */
    overflow: auto!important;
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}

.back-arrow{
    color:white;
    font-weight:bold;
    /* border:2px white solid; */
    font-size:36px;

    position: fixed;
    margin-left:100px;
    margin-top:80px;
    width:100px;
    height:50px;
    border-radius:10px;
    background: black;
    /* box-shadow:10px 5px 5px black; */
    box-shadow: 0 10px 20px rgba(0,0,0,0.7);
    cursor: pointer;
}
.el-icon-back{
    
    line-height: 50px;
}
</style>