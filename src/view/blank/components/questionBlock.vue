<template>
    <div class="question-block">
        <div class="question-title">{{index}}.{{question}}</div>
        <div class="question-grade">[{{grade}} marks]</div>
        <div 
            class="question-sub" 
            v-for="(sub,i) in subquestion"
            :key="i">
            ({{i+1}}).{{sub}}
            </div>
    </div>
</template>

<script>
export default {
    props:{
        question:'',
        grade:'',
        subquestion:[],
        index:0,
    }
    
}
</script>

<style scoped>

.question-block{
    font-family: 'Times New Roman', Times, serif;
    line-height:24px;
    margin:1.5em;
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
</style>