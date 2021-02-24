<template> 
    <div style="padding-left:2em;padding-right:2em;font-family:Times New Roman">
        
        <el-input v-model="courseNO" :placeholder="courseNO" 
                style='display:inline-block;margin:4em 4px 2em 0;font-weight:bold;font-size:36px;width:40%;' v-if="isEditMeta">
        </el-input>
        
        <span style='display:inline-block;margin:4em 4px 2em 0;font-weight:bold;font-size:36px;' v-if="!isEditMeta">{{courseNO}}</span>
        <span style="color:rgb(128,128,128);font-weight:bold">COVID-19 Alternative Assessment (Even Sem - Paper A)</span>
        <br/>
        
        <p style="font-weight:bold">Joint Programme Assessments
            <span v-if="!isEditMeta"> {{courseDate}}</span>
            <el-input v-model="courseDate" :placeholder="courseDate" 
                style='display:inline-block;width:20%;margin-left:2em' v-if="isEditMeta">
            </el-input>
        </p>
        <br/>
        
        <p style="font-weight:bold">{{courseNO}} 
            <span v-if="!isEditMeta"> {{courseName}}</span>
            <el-input v-model="courseName" :placeholder="courseName" 
                style='display:inline-block;width:40%;margin-left:2em' v-if="isEditMeta">
            </el-input>
        
        </p>
        
        
        <br/>
        <p><u>Answering this paper requires <b>2 hours</b></u>; Answers to be submitted within the allocated <b>6 hours window</b>.</p>
        <br/>
        <p style="font-weight:bold">Answer ALL questions</p>
        
        <div style="border:black 1px solid;padding:1em;">
            <p><b><u>INSTRUCTIONS</u></b></p>
            <ol>
                <li style="padding-left:1em;line-height:24px;margin-buttom:1em"><b>You must NOT share any content from this document during the assessment period.</b></li><br/>
                <li style="padding-left:1em;line-height:24px;margin-buttom:1em">Your answers must be <u>typed</u>, and diagrams or equations must be written clearly and legibly with black or blue colour <b>and in English.</b></li><br/>
                <li style="padding-left:1em;line-height:24px;margin-buttom:1em">You need to submit your answers BEFORE the allocated deadline</li><br/>
                <li style="padding-left:1em;line-height:24px;margin-buttom:1em"><b>Read the instructions on the inside cover of the questions sheet.</b></li>
            </ol>
        </div>

        <p style="font-size:14px;margin-top:4em;"><b>Examiners</b></p>
        <p style="font-size:14px;margin-left:2em" v-if="!isEditMeta">{{examiners}}</p>
        
        <el-input v-model="examiners" :placeholder="examiners" 
                style='width:70%;font-size:14px;margin:-1em 0 1em 2em;' v-if="isEditMeta">
        </el-input><br/>


        <b style="font-size:12px;">Copyright © Beijing University of Posts and Telecommunications & © Queen Mary University of London 2020</b>
        <p style="font-size:12px;">Filename: 
            <span  v-if="!isEditMeta">{{fileName}}</span>
            <el-input v-model="fileName" :placeholder="fileName" 
                style='width:70%;font-size:12px;margin-left:1em' v-if="isEditMeta">
            </el-input>
        </p>


        <br/><br/>
        <el-divider></el-divider>
        
        
        <p style="font-weight:bold">Instructions</p>
        <p>This is an open-book assessment, which should be completed <b>within 2 hours</b>. You MUST submit your answers within 6 hours from the assessment being released.</p>
        <p>You MUST complete the assessment on your own, without consulting any other person. You MAY NOT check your answers with any other person.</p>
        <p>You can refer to textbooks, notes and online materials to facilitate your working, if you provide a direct quote, or copy a diagram or chart, you must cite the source</p>
        
        <br/>
        
        <p><b><u>Before you start the assessment</u></b></p>
        <p>1) Read the questions thoroughly and understand them.</p>
        <p>2) Ensure you have all the resources you require to complete and upload the final assessment.</p>
        <p>3) If you require any assistance, raise the issue via the messaging section of this assessment on QMPlus, immediately.</p>
        
        <br/>

        <p><b><u>During the assessment session</u></b></p>
        <p>1) Use the supplied answer sheet document to enter your answers. Start on a new page for each question. Make sure it is clear which question number you are answering.</p>
        <p>2) Type your answers in the supplied answer sheet; hand-written equations or sketches can be incorporated into the answer sheet. Please save your work at least every 15 minutes so that you do not risk losing it.</p>
        <p>3) When completed answering all questions, perform a word count and list the number of words on the answer sheet, then save the file as pdf before uploading, only pdf will be accepted, any other file format will not be accepted.</p>
        <p>4) Your submission must be your own work, and you must ensure that you do not break any of the rules in the Academic Misconduct Policy.</p>

        <br/>

        <p><b><u>Submitting the Assessment</u></b></p>
        <p>1) You will have 6 hours from the start of the scheduled assessment time – do not leave submissions too close to the deadline. NO late submission will be accepted, no exceptions. </p>
        <p>2) Make sure you upload and submit the final version before the deadline. </p>
        <p>3) Please be aware that submissions will be subject to review, including but not limited to plagiarism detection software.</p>
        
        <br/>

        <p>If you have any problems relating to access or submitting during the assessment period, please contact 
the email (it-issues@qmbupt.org), state the module code in the subject, and clearly state your name 
and student ID and any issues you are experiencing. You must use either @qmul.ac.uk or 
@bupt.edu.cn email address. Requests from external email addresses will not be processed.</p>
        
        
        
        <el-divider></el-divider>
    </div>
</template>



<script>

import {getPaperMeta} from '@/request/paperApi'


export default {
    props:{
        isEditMeta:false,
    },
    data(){
        return{
            courseNO:"",
            courseName:"",
            courseDate:"",
            examiners:"",
            fileName:"",
        }
    },
    mounted(){
        // this.getPaperMetaInfo()
    },
    methods:{
        getPaperMetaInfo(paperid){
            getPaperMeta(paperid).then((res)=>{
                var data = res.data[0];
                this.courseNO = data.courseNO;
                this.courseName = data.courseName;
                this.courseDate = data.courseDate;
                this.examiners = data.examiners;
                this.fileName = data.fileName;
            })
        }
    }
}
</script>



<style scoped>

</style>