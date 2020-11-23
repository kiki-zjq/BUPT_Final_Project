<template>
    <div>
        <div class='img-container'>
                            <el-image 
                                :fit="fit"
                                style='height:330px'
                                :src="src" 
                                :preview-src-list="srcList"
                                lazy>
                            </el-image>
                            <div class='img-footer'>
                                <p class="project-title">
                                    <span class="code">&lt;</span>
                                    {{projectName}}
                                    <span class="code">&#47;&gt;</span>
                                    <!-- <a  :href="href" target='_blank'>
                                        <i class="el-icon-more"></i>
                                    </a> -->
                                </p>
                            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            fit:'cover'
        }
    },
    props:{
        src:{
            type:String,
            default:''
        },
        srcList:{
            type:Array,
            default:[]
        },
        href:{
            type:String,
            default:''
        },
        projectName:{
            type:String,
            default:''
        }
    }
}
</script>


<style scoped>
    .img-container{
        padding:10px;
        background:#303841;
    }
    .img-container .img-footer{
        width:100%;
        height:40px;
        background: #303841;
        text-align:center;
        font-size:20px;
        line-height:20px;
    }
    .img-container .code{
        color:#303841;
        transition: color 0.3s ease-out;
    }
    .img-container .img-footer:hover .code {
        color: #ff7f50;
    }
    .img-container .project-title{
        color:white;
    }
    .img-container .project-title a{
        color:white;
        float:right;
        margin-right:10px;
    }
    .el-icon-circle-close:before {
        content: "\E78D";
        color: white!important;
        font-weight: 1000;
    }
</style>