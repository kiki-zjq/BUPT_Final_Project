<template>
    <div class='blank'>
        <HeaderPart class="header-part"/>
        <el-row>

            

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
                        
                        <el-divider></el-divider>
                        <p style="text-align:center;font-family:Times New Roman">END OF PAPER</p>
                    </div>
                </div>
            </el-col>
            
            
            <el-col :span="4">
                <div class="edit-box">
                    
                    <ToolBox @addNewQuestion="addBlock=true" @editMeta="isEditMeta=true"/>
                </div>
            </el-col>
                    

        </el-row>



        <AddQuestionBlock :addBlock="addBlock" @cancel="addBlock=false" @save="save" />
        



    </div>    
</template>


<script>
import HeaderPart from './components/head'
import ToolBox from './components/toolbox'
import MainPart from './mainPart'
import InitMeta from './components/initMeta'
import AddQuestionBlock from './components/addQuestionBlock'
import Cover from './components/coverPage'
import QuestionBlock from './components/questionBlock'



import {addQuestion,fetchQuestion,deleteQuestion,modifyQuestion} from '@/request/questionApi'
import {dateMixin} from '@/mixins/DateMixin.js';

export default {
    mixins:[dateMixin],
    components:{
        HeaderPart,
        ToolBox,
        MainPart,
        InitMeta,
        AddQuestionBlock,
        Cover,
        QuestionBlock
    },
    data(){
        return{
            questions:[],

            addBlock:false,

            isEditMeta:false,
            

            paperid:'',
        };
    },
    methods:{
        
        
        del(qid){
            deleteQuestion(qid)
            this.getData()
        },
        
        
        save(data){
                
                this.addBlock = false;
                var n = this.questions.length;
                var qid = n==0?1:this.questions[n-1].qid+1;

                data.qid = qid;
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




        getData(){
            fetchQuestion(this.paperid).then((res)=>{
                this.questions = res.data
            })
        },

        saveMeta(){
            this.$confirm('Are you sure you want to save your changes?', 'Prompt', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning'
            }).then(() => {
        
                this.$refs.mainPart.saveMeta();
                this.isEditMeta = false;
                
            });
            
        },
        cancelMeta(){
            
            
        },

    },
    mounted(){
        var account = this.$store.state.account

        this.paperid = this.formatPaperIDDate()+account;
        this.getData();
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