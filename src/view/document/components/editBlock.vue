<template>
<div>
    <el-dialog title="Edit Question" :visible.sync="dialogFormVisible">
        {{title}}
    </el-dialog>
</div>
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