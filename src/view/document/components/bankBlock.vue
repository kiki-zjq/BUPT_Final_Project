<template>
    <div class="bank-drawer">
        <h2>This is your question bank</h2>
        <span style="color:#9A9A9A"><i>You can add question to this paper directly</i></span>

        <div class="my-question"
            v-for="(question,index) in questions"
            :key="index">
            <div class="question-title">{{index+1}}.{{question.title}}</div>
            <div class="question-grade">[{{question.total}} marks]</div>

            <div class="question-sub"
                 v-for = "(sub,i) in question.subquestion"
                 :key="i">
                <p>({{i+1}}) {{sub.question}}</p>
                <p class="question-grade">({{sub.grade}} marks)</p>     
            
            </div>
            <div class="tool-box">
                <el-button class="add-button" type="primary" size="small" icon="el-icon-plus" @click="add(index)" circle></el-button>
            </div>
        </div>

    </div>
</template>

<script>
// account --> paperid --> question
import {getAccountPaper} from '@/request/accountApi'
import {fetchQuestion} from '@/request/questionApi'


export default {
    data(){
        return{
            papers:[],
            questions:[]
        }
    },
    porps:{
        bankBlock:false
    },
    methods:{
        add(index){
            this.$confirm('You will add this question to this paper!','Are you sure?',{
                confirmButtonText: 'sure',
                cancelButtonText: 'no'
            }).then(()=>{
                this.$emit('addFromBank',this.questions[index])
            })
        },
        getBank(){
            this.papers = [];
            this.questions = [];
            let account = window.atob(this.$route.params.account);
            getAccountPaper(account).then((res)=>{
                var data = res.data[0];
                this.papers = data.paper;
                for(let paper of this.papers){
                    fetchQuestion(paper).then((res)=>{
                        this.questions = this.questions.concat(res.data)
                        })
                    }
            })
        }
    },
    mounted(){
        this.getBank();
    }

}
</script>

<style scoped>
.bank-drawer{
    text-align: left;
    padding:2em;
    padding-top:0;
}
.my-question{
    font-family: 'Times New Roman', Times, serif;
    line-height:20px;
    margin:1.5em;
    padding:1.5em;
    border:2px white solid;
    box-shadow: black 0px 0px 10px;
}

.question-title{
    font-size:16px;
    font-weight:bold;
}

.question-grade{
    text-align:right;
    font-weight:bold;
}

.question-sub{
    font-size:14px;
    text-indent: 2em;
}

.tool-box .add-button{
    font-weight: bold;
}
.tool-box{
    margin-top:2em;
    text-align:right;
    /* visibility:hidden */
}

</style>