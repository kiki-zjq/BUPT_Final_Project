<template>
    <div>
        <div class='container'>
                            <el-image 
                                :src="src" 
                                :preview-src-list="srcList"
                                lazy>
                            </el-image>
                            <div class='footer-name'>
                                <p class="project-title">
                                    <span class="code">&lt;</span>
                                    {{projectName}}
                                    <span class="code">&#47;&gt;</span>
                                    <a  :href="href" target='_blank'>
                                        <i class="el-icon-more"></i>
                                    </a>
                                </p>
                            </div>
                            <!-- <div class='footer'>
                                <p class="project-title">
                                    <span class="code">&lt;</span>
                                    {{projectName}}
                                    <span class="code">&#47;&gt;</span>
                                    <a  :href="href" target='_blank'>
                                        <i class="el-icon-more"></i>
                                    </a>
                                </p>
                            </div> -->
        </div>
    </div>
</template>


<script>
export default {
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
    .container{
        position: relative;
        padding:10px;
        background:#303841;
    }
    .footer-name{
        text-align:center;
        font-size:20px;
        line-height:20px;
    }

    .code{
        color:#303841;
        transition: color 0.3s ease-out;
    }
    .footer-name:hover .code {
        color: #ff7f50;
    }
    .project-title{
        color:white;
    }
    .project-title a{
        color:white;
        float:right;
        margin-right:10px;
    }
</style>