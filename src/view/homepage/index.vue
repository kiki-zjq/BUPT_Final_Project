<template>
    <div class='document-block'>
        
        <div class='sub-title'>
            {{language=='Chinese'?'关于作者':'About'}}
        </div>
        <div style="margin-left:2em;" v-if='language=="Chinese"'>
                <p>作者朱江奇，北京邮电大学2017级在读，电信工程及管理专业。绩点92.43/100，目前专业排名第一 （1/326）</p>
                <p>对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。</p>
                <p>日常喜欢应用新学到的知识做一些小的项目的编写，希望能籍由此巩固知识并提升自己的代码能力。</p>
                <p>目前有较多科研实习经历，希望能为未来从事相关行业工作夯实基础。</p>
                <p>最后，本项目是一个从零开始搭建的个人主页。并挂载到了github page上可以从互联网上进行访问。</p>
                <p>项目搭建在github page上，其中使用到了诸如vue,vue-router,element-ui,e-charts等技术。同时为了解析json文件也进行了axios封装。<b>（由于github-page网站自身的原因，加载图片的时候可能速度较慢）</b></p>
                <p>本网站后续会继续更新完善填充XD</p>
                <p>最后！24小时在线求职求实验室求求了QnQ</p>
        </div>
        <div style="margin-left:2em;" v-if='language=="English"'>
                <p>Jiangqi Zhu, a junior student from Beijing University of Posts and Telecommunications (BUPT).My college major is telecommunications engineering with Management with overall GPA 92.43/100 , <b>ranking 1st among 326</b>. </p>
                <p> I am very interested in software engineering, data mining and database. At the same time, I like to use programming language to write some simple projects in my daily study. </p>
                <p> For details about information and projects please check my CV or my Github. </p>
                <p> Finally, this project is a personal homepage built from scratch.</p><br />
                <p> This project, which has used vue, vuex, vue-router, axios and many front-end technologies, set up based on github-page.<b>(Some images may be slow to load due to github-page itself)</b></p>
                <p> This website may have many shortcomings, but I hope that with the growth of my skills I can  further improve it by myself.</p>
                <p> At last, asking for an opportunity about research in a lab or work as a internship！！QnQ</p>
            </div>
        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title' id='skill'>
            {{language=='Chinese'?'相关技术栈':'Skill'}}
        </div>

            <RectTreeChart v-if='language=="Chinese"' class='rect-tree-chart'/>
            <RectTreeChartEN  v-if='language=="English"' class='rect-tree-chart'/>
        <el-divider></el-divider>

        <!-------------------------------------------------------------------------------------->
        <div class='sub-title' id='academic'>
            {{language=='Chinese'?'本科成绩单':'Academic'}}
        </div>
        <p style="margin-left:2em;color:gray" v-if='language=="Chinese"'><i>(点击 <b>Semester</b> 或者 <b>Keywords</b> 进行筛选)</i></p>
        <p style="margin-left:2em;color:gray" v-if='language=="English"'><i>(Click <b>Semester</b> or <b>Keywords</b> to filter this table)</i></p>
        <div class="table" style="margin:5px auto;width:95%;">
           <List />
        </div>

    </div>    
</template>

<script>
import RectTreeChart from './components/RectTreeChart';
import RectTreeChartEN from './components/RectTreeChartEN';
import List from './components/List';
export default {
    components:{
      RectTreeChart,
      RectTreeChartEN,
      List
    },
    data() {
      return {

      }
    },
    computed:{
      language:function(){
          return this.$store.state.language
      }
    }
  }
</script>


<style scoped>
.document-block{
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}
.code-block{
    width:90%;
    padding:10px 20px;
    margin:10px auto 1.5em;
    background-color: #F6F8FA;
    /* min-height:300px; */
    border-radius: 20px;
}
.code-block .function-name{
    font-weight: bold;
    font-size: 18px;
}
.code-block .function-description{
    font-style: italic;
    font-size: 18px;
}

.document-block .sub-title{
        margin-top:2%;
        margin-bottom: 2%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }
.module-name{
    font-weight: bold;
    margin-left:2em;
}
</style>