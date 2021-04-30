<template>
    <div class="intro-block">
        <div style="width:90%;margin:auto;height:100%">
            <!-- <img src="../img/logo.png" class="logo"/> -->
            <h1 class="title">Introduction</h1>
            <!-- <img src="../img/sample.png" class="sample"/>
            <img src="../img/sample.png" class="sample"/> -->
            <el-row>
                    <el-col :span="12">
                        <p class="content">This is a fantastic website where you can create your own test paper</p>
                        <br/>
                        <p class="content" style="font-size:18px"><b><i>What can I do in this website?</i></b></p>
                        <ul style="line-height:24px">
                            <li>You can edit the meta information for each paper</li>
                            <li>You can add questions and edit them freely</li>
                            <li>For each question you can edit your own marking criteria</li>
                            <li>You can invite your partner to work with you</li>
                            <li>A fantastic Download function allows you to get the files you want according to your needs </li>
                            <li>A really cool Question Bank function</li>
                            <li>... ...</li>
                        </ul>

                        <br/>
                        <p class="content" style="font-size:18px"><b><i>What should I do right now?</i></b></p>
                        <ul style="line-height:24px">
                            <li>You can click the arrows on the left and right sides of the screen.</li>
                            <li>You can see some instructions on the <i><b>Instruction</b></i> page</li>
                            <li>You can create your own test paper on the <i><b>Document</b></i> page! In addition, all the files you have created will be displayed on the Document page.</li>
                        </ul>
                    </el-col>
                    <el-col :span="11" :offset="1" style="text-align:center">
                        <el-carousel :interval="2000" direction="vertical">
                            <el-carousel-item>
                                <img width="100%" src="../img/download.png"/>
                            </el-carousel-item>
                            <el-carousel-item>
                                <img width="100%" src="../img/question_bank.png"/>
                            </el-carousel-item>
                            <el-carousel-item>
                                <img width="100%" src="../img/invite.png"/>
                            </el-carousel-item>
                            <el-carousel-item>
                                <img width="100%" src="../img/comment.png"/>
                            </el-carousel-item>
                            <el-carousel-item>
                                <img width="100%" src="../img/question.png"/>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
            </el-row>


            <!-- <img src="../img/sample.png" class="sample2"/>
            <img src="../img/sample.png" class="sample2"/> -->
        </div>
    </div>
</template>

<style scoped>
.intro-block{
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
</style>
<style>
#app > div > div > div > button.el-carousel__arrow{
    color:white;
    font-weight: bold;
    font-size:24px!important;
    height: 50px;
    width:50px;
}
</style>