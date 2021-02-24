<template>
    <div class="main-part">
        
        <div class="doc">
            <Cover :isEditMeta="isEditMeta" style="margin-bottom:4em;" ref="coverPage"/>
            <QuestionBlock
                v-for="(question,index) in questions"
                :key="index"
                :question="question"
                :ind="index+1"

                @modify="modify"
                @del="del"
             />

             <el-divider></el-divider>
             <p style="text-align:center;font-family:Times New Roman">END OF PAPER</p>
        </div>
        <InitMeta :initMeta="initMeta" @finishInitMeta="finishInit"/>
    </div>    
</template>

<script>


import QuestionBlock from './components/questionBlock'
import Cover from './components/coverPage'
import InitMeta from './components/initMeta'

import {modifyPaperMeta} from '@/request/paperApi'


export default {
    props:{
        questions:[],
        isEditMeta:false,
    },
    data(){
        return{
            initMeta:false,
            paperid:'',
        }
    },
    methods:{
        del(qid){
            this.$emit("del",qid)
        },
        modify(data,qid){
            this.$emit("modify",data,qid)
        },
        saveMeta(){

            var obj = {
                courseNO:this.$refs.coverPage.courseNO,
                courseName:this.$refs.coverPage.courseName,
                courseDate:this.$refs.coverPage.courseDate,
                examiners:this.$refs.coverPage.examiners,
                fileName:this.$refs.coverPage.fileName
            }
            modifyPaperMeta(this.paperid, obj).then(()=>{
                this.$notify({
                        title: 'Success',
                        message: 'Save Meta Information Successfully!',
                        type: 'success',
                        duration:3000,
                    });
            })
        },
        cancelMeta(){
            this.$refs.coverPage.getPaperMetaInfo();
        },
        finishInit(paperid){
            this.initMeta=false;
            this.paperid = paperid;
            this.$refs.coverPage.getPaperMetaInfo(paperid);
        }
    },
    mounted(){
        this.initMeta = true;
    },
    components:{
        QuestionBlock,
        Cover,
        InitMeta
    }
}
</script>

<style scoped>
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