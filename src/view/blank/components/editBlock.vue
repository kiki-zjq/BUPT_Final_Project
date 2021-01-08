<template>
    <el-dialog title="Edit Question" :visible.sync="dialogFormVisible">
        {{title}}
    </el-dialog>
</template>

<script>
export default {
    props:{
        dialogFormVisible:false,
        title:'',
        total:'',
        subquestion:[],
    },
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>

</style>