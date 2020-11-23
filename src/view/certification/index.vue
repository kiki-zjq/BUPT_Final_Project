<template>
    <div class='block'>
        
        <div class='sub-title'>
            {{language=='Chinese'?'证书':'CERTIFICATION'}}
        </div>
            <div class="certi-content">

                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Machine Learning.jpg' 
                                        projectName='Machine Learning' :srcList='srcList'/>
                            </el-col>
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/M001.png' 
                                        projectName='MongoDB basic' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/M220JS.png'  
                                        projectName='MongoDB JS' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Responsive Web Design.png' 
                                        projectName='Responsive Web Design' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Algorithms and Data Structure.png' 
                                        projectName='Algorithms and Data Structure' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Front End Library.png' 
                                        projectName='Front End Library' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/APIs and Microservices.png' 
                                        projectName='APIs and Microservices' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Data Visualization.png' 
                                        projectName='Data Visualization' :srcList='srcList'/>
                            </el-col>
                        </el-row>
            </div>

    </div>
</template>

<script>
import imgShow from './components/imgShow';

export default {
    components:{
            imgShow,
        },
    data() {
      return {
        url: '',
        srcList: [
          '../../static/img/Certification/Machine Learning.jpg',
          '../../static/img/Certification/M001.png',
          '../../static/img/Certification/M220JS.png',
          '../../static/img/Certification/Responsive Web Design.png',
          '../../static/img/Certification/Algorithms and Data Structure.png',
          '../../static/img/Certification/Front End Library.png',
          '../../static/img/Certification/APIs and Microservices.png',
          '../../static/img/Certification/Data Visualization.png'
        ],
      }
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
}
</script>

<style scoped>
.block{
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}


.sub-title{
        margin-top:2%;
        margin-bottom: 2%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }
    .certi-content{
        margin-top:5%;
        width:100%;
        font-size:16px;
        height:400px;
    }
    .container{
        padding:10px;
        background:#303841;
    }
    .el-col{
        margin-bottom: 20px;
    }
     .el-icon-circle-close:before {
        content: "\E78D";
        color: white;
        font-weight: 1000;
    }
</style>