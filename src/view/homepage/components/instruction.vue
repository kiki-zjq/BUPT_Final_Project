<template>
    <div class="inst-block">
        <div style="width:90%;margin:auto;height:100%;line-height:24px;">
            <!-- <img src="../img/logo.png" class="logo"/> -->
            <h1 class="title">Instruction</h1>
            <!-- <img src="../img/sample.png" class="sample"/>
            <img src="../img/sample.png" class="sample"/> -->
            <el-row>
                    <el-col :span="12">
                        <div style="box-sizing:border-box;min-height:500px;border-right:2px white solid">
                        <p class="content">This is a introduction page. Move your mouse to the feature you are interested in.</p>
                        <br/>
                        <p class="content" style="font-size:18px"><b><i>Feature List:</i></b></p>
                        <ul style="line-height:24px">
                            <li @mouseenter='handleHover(0)'>You can edit the meta information for each paper</li>
                            <li @mouseenter='handleHover(1)'>Add Question and Marking Criteria</li>
                            <li @mouseenter='handleHover(2)'>Leave Comment For Each Question</li>
                            <li @mouseenter='handleHover(3)'>Invite Partner</li>
                            <li @mouseenter='handleHover(4)'>Download Function </li>
                            <li @mouseenter='handleHover(5)'>Question Bank</li>
                        </ul>

                        </div>
                    </el-col>
                    
                    <el-col :span="11" :offset="1" style="text-align:left">
                            
                            <el-collapse-transition>
                            <div v-show="showInstruction==0">
                                <img width="100%" src='../img/meta.png'/>
                                <p>Every time you create a new file, we will ask you to enter the Meta information of the test paper. 
                                    Including Course NO, Course Name, File Name and so on. This information is necessary. After you enter 
                                    this information, your test paper has been successfully created.</p>
                                <p>Of course, you can also modify the Meta Information of these test papers again during subsequent editing.</p>
                                
                            </div>
                            </el-collapse-transition>


                            <el-collapse-transition>
                            <div v-show="showInstruction==1">
                                <img width="100%" src='../img/add_question.png'/>
                                <p>You can click the <b><u><i>Add</i></u></b> button on the right side of the screen to add new questions to the test paper.</p>
                                <p>Each topic has many subquestions. You need to ensure that the total score of the question is 
                                    equal to the sum of the scores of all subquestions. Of course, when you save, if this condition 
                                    is not met, we will also give a reminder.</p>
                                <p>You can add some scoring criteria to each question. These scoring criteria will also be displayed
                                     on the page after you save them.</p>
                                <p>You can click <span style="cursor:pointer;color:red" @click="handleHover(7)"><u><i>here</i></u></span>
                                 to see what happened after we adding a question.</p>
                            </div>
                            </el-collapse-transition>


                            <el-collapse-transition>
                            <div v-show="showInstruction==7">
                                        <img width="100%" src='../img/question.png'/>
                                        <p><span style="cursor:pointer;color:red" @click="handleHover(1)"><u><i>Go Back</i></u></span></p>
                            </div>
                            </el-collapse-transition>



                            <el-collapse-transition>
                            <div v-show="showInstruction==2">
                                <img width="100%" src='../img/comment.png'/>
                                <p>When you have an opinion on a question on the test paper, 
                                    you can let your partner see your idea by leaving a comment on the question.</p>
                                <p>In order to indicate the urgency of this comment, there are three different types of comment: Suggestion, Accept and Warning.</p>
                                <p>And you can mark a piece of comment 'has been checked' by clicking <i class="el-icon-check"></i>.</p>
                                <p>When you want to leave a comment, you can click <b><i class="el-icon-chat-square"></i></b> 
                                in the lower right corner of the question block.</p>
                            </div>
                            </el-collapse-transition>


                            <el-collapse-transition>
                            <div v-show="showInstruction==3">
                                <img width="100%" src='../img/invite.png'/>
                                <p>You can invite your partner to edit the test paper with you.</p>
                                <p>You just need to click the <b><u><i>Add Team</i></u></b> button in the right toolbar. 
                                    Then enter your partner's account correctly, and your partner will have the right to edit this test paper.</p>
                                <p>What's more, you can edit the same test paper at the same time! This will not cause any conflicts.</p>
                            </div>
                            </el-collapse-transition>

                            <el-collapse-transition>
                            <div v-show="showInstruction==4">
                                <img width="100%" src='../img/download.png'/>
                                <p>You can download the test paper directly from our website.</p>
                                <p>According to your needs, you can choose the file format you want to download (LaTeX, PDF, or both). 
                                    At the same time, you can also choose whether the downloaded test paper contains marking criteria.</p>
                            </div>
                            </el-collapse-transition>



                            <el-collapse-transition>
                            <div v-show="showInstruction==5">
                                <img width="100%" src='../img/question_bank.png'/>
                                <p>In our website, we provide a fantastic Question Bank function.</p>
                                <p>Each question of each of your test papers will be stored in your own question bank.</p>
                                <p>When you are editing a test paper, you can click the <b><u><i>Question Bank</i></u></b> 
                                button on the right side of the screen to open your bank. Then you can directly select the 
                                question you want from your bank and add it to the current test paper.</p>
                            </div>
                            </el-collapse-transition>
                    </el-col>
            </el-row>


            <!-- <img src="../img/sample.png" class="sample2"/>
            <img src="../img/sample.png" class="sample2"/> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showInstruction:0,
            changeTimeout:0,
        }
    },
    methods:{
        handleHover(val){
            this.showInstruction = -1;
            clearTimeout(this.changeTimeout);
            switch(val){
                case 0:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 0;
                    },500);
                    break;
                case 1:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 1;
                    },500);
                    break;
                case 2:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 2;
                    },500);
                    break;
                case 3:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 3;
                    },500);
                    break;
                case 4:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 4;
                    },500);
                    break;
                case 5:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 5;
                    },500);
                    break;
                case 7:
                    this.changeTimeout = setTimeout(()=>{
                        this.showInstruction = 7;
                    },500);
                    break;
            }
        }
    }
}
</script>


<style scoped>
.inst-block{
    background-image:linear-gradient(to top right,#2C5364,#203A43,#0F2027);
    width:100%;
    min-width: 1400px;
    height:90vh;
    height:100%;
    box-sizing: border-box;
    padding:40px;
    text-align: left;
    color:white;
}
.title{
    font-size:48px;
    color:white;
    margin:0;
    text-align: left;
}
.content{
    text-align: left;
    color:white;
}
.sample{
    float:right;
    width:30%;
    margin:-2em 1em 3em 1em;
    clear:right;
}
.sample2{
    float:left;
    width:30%;
    margin:-2em 1em 3em 1em;
}
.logo{
    float:left;
}

ul li{
    transition: all .2s;
}
ul li:hover{
    cursor: pointer;
    line-height:64px;
}
</style>
