<template>
    <div class='blank'>
        <HeaderPart class="header-part"/>
        <el-row>

            <el-col :span="4">
                <ToolBox class="tool-box"/>

            </el-col>

            <el-col :span="16">
                
                <MainPart />
                
            </el-col>
            
            
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-edit" class="btn" @click="addQuestion=true"></el-button>

            </el-col>
                    

        </el-row>


        <QuestionBlock :visible.sync="addQuestion"/>

    </div>    
</template>


<script>
import HeaderPart from './components/head'
import ToolBox from './components/toolbox'
import MainPart from './components/mainPart'
import QuestionBlock from './components/questionBlock'
export default {
    data(){
        return{
            addQuestion:false,
        };
    },
    components:{
        HeaderPart,
        ToolBox,
        MainPart,
        QuestionBlock
    }
}
</script>

<style scoped>
.header-part{
    z-index:999;
    position: sticky;
    top:0;
}
.tool-box{
    position: sticky;
    top:100px;
}
.blank{
    background-color: #dadce0;
}
.btn{
    position: fixed;
    bottom: 100px;
    right:60px;
    width:120px;
    height:60px;
}
</style>