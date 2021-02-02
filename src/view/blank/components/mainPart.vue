<template>
    <div class="main-part">
        
        <div class="doc">
            <Cover style="margin-bottom:4em;"/>
            <QuestionBlock
                v-for="(question,index) in questions"
                :key="index"
                :question="question"
                :ind="index+1"

                @modify="modify"
                @del="del"
             />
        </div>
    </div>    
</template>

<script>


import QuestionBlock from './questionBlock'
import Cover from './coverPage'
export default {
    props:{
        questions:[],
    },
    data(){
        return{
            
        }
    },
    methods:{
        del(qid){
            this.$emit("del",qid)
        },
        modify(data,qid){
            this.$emit("modify",data,qid)
        },
    },
    mounted(){
        
    },
    components:{
        QuestionBlock,
        Cover
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