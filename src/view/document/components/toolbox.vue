<template>
    <div class="toolbox">
            <el-button type="success" class="btn btn1" @click="addTeam()">ADD TEAM</el-button><br/>
            <el-button type="primary" class="btn btn2" @click="handleEdit()" v-if="!isEditMeta">EDIT META</el-button>
            <el-button type="success" class="editing-btn" @click="saveMeta()" v-if="isEditMeta" icon="el-icon-check"></el-button>
            <el-button type="danger"  class="editing-btn" @click="cancelMeta()" v-if="isEditMeta" icon="el-icon-close" ></el-button>
            <br/>
            <el-button type="primary" class="btn btn3" @click="addNewQuestion()">ADD</el-button><br/>
            <el-button type="success" class="btn btn4" @click="openQuestionBank()">MY BANK</el-button><br/>
            <el-button type="danger" class="btn btn5" @click="download()">DOWNLOAD</el-button><br/>
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
        };
    },
    props:{
        isEditMeta:false,
    },
    methods:{
        handleEdit(){
            this.isEditMeta = true;
            this.$emit("editMeta")
        },
        saveMeta(){
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
        },
        download(){
            this.$emit('download')
        },
        openQuestionBank(){
            this.$emit('openBank')
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
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    border-radius:10px;
}
.editing-btn{
    margin-top:20px;
    width:50px;
    padding-left:16px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    border-radius:10px;
}

.btn1{
    background-color:pink;
    border:pink;
}

.btn2{
    background-color:gray;
    border:gray;
}

.btn3{
    background-color:burlywood;
    border:burlywood;
}

.btn4{
    background-color:darksalmon;
    border:darksalmon;
}
</style>