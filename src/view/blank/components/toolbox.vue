<template>
    <div class="toolbox">
            <el-button type="success" class="btn" @click="addTeam()">ADD TEAM</el-button><br/>
            <el-button type="primary" class="btn" @click="handleEdit()" v-if="!isEditMeta">EDIT META</el-button>
            <el-button type="success" class="editing-btn" @click="saveMeta()" v-if="isEditMeta" icon="el-icon-check"></el-button>
            <el-button type="danger"  class="editing-btn" @click="cancelMeta()" v-if="isEditMeta" icon="el-icon-close" ></el-button>
            <br/>
            <el-button type="primary" class="btn" @click="addNewQuestion()">ADD</el-button><br/>
            <el-button type="success" class="btn" @click="addQuestion=true">PREVIEW</el-button><br/>
            <el-button type="warning" class="btn" @click="addQuestion=true">DOWNLOAD</el-button><br/>
    </div>
</template>


<script>
export default {
    data(){
        return{
            questions:[],
            addQuestion:false,
            dialogFormVisible:false,
            title:'',
            total:'',   
            subquestion:[],
            isEditMeta:false,
        };
    },
    methods:{
        handleEdit(){
            this.isEditMeta = true;
            this.$emit("editMeta")
        },
        saveMeta(){
            this.isEditMeta = false;
            this.$emit("saveMeta")
        },
        cancelMeta(){
            this.$confirm('We will NOT save your modification.', 'Prompt', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning'
            }).then(() => {
                
                //this.$refs.mainPart.cancelMeta();
                this.isEditMeta = false;
                this.$emit('cancelMeta')
            
            });
        },
        addNewQuestion(){
            this.$emit("addNewQuestion")
        },
        addTeam(){
            this.$emit('addTeam')
        }
    }
}
</script>


<style scoped>
.toolbox{
    margin-top:20px;
    position: sticky;
    top:100px;

}

.btn{
    margin-top:20px;
    width:120px;
    height:60px;
}
.editing-btn{
    margin-top:20px;
    width:50px;
    padding-left:16px;
}
</style>