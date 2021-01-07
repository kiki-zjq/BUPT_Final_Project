<template>
    <div class="main-part">
        <div class="doc">
            <QuestionBlock
                v-for="(question,index) in questions"
                :key="index"
                :question="question.question"
                :grade="question.grade"
                :subquestion="question.subquestion"
                :index="index+1"
             />
        </div>
    </div>    
</template>

<script>

import {fetchWordCloud, fetchQuestion} from '@/request/api'
import QuestionBlock from './questionBlock'
export default {
    data(){
        return{
            questions:[],
        }
    },
    mounted(){

        fetchQuestion().then((res)=>{
            console.log(res.data)
            this.questions = res.data
        })
    },
    components:{
        QuestionBlock
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