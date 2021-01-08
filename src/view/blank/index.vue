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
                <div class="edit-box">
                    <el-button type="primary" class="btn" @click="addQuestion=true">EDIT</el-button><br/>
                    <el-button type="success" class="btn" @click="addQuestion=true">PREVIEW</el-button><br/>
                    <el-button type="warning" class="btn" @click="addQuestion=true">DOWNLOAD</el-button><br/>
                </div>
            </el-col>
                    

        </el-row>



    </div>    
</template>


<script>
import HeaderPart from './components/head'
import ToolBox from './components/toolbox'
import MainPart from './components/mainPart'

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
    margin-top:20px;
    width:120px;
    height:60px;
}
.edit-box{
    position: fixed;
    bottom: 40px;
    right:60px;
}
</style>