<template>
    <div class="thumb-block">

        <div class="thumb-pic">



        </div>
        
        
        <div class="thumb-tool">
            <el-tooltip class="item" effect="dark" :content="fileName" placement="top-start">
                <span>{{displayFileName}}</span>
            </el-tooltip>
    

            <br/>
            <span class="modify-time">{{modifyDate}}</span>
            

            <el-popover
            placement="bottom"
            width="120"
            trigger="click">
                <div class="thumb-tool-btn"><i class="el-icon-edit-outline"></i> Rename</div>
                <div class="thumb-tool-btn" @click="removePaper()"><i class="el-icon-delete"></i> Delete</div>
                <div class="thumb-tool-btn"><i class="el-icon-data-board"></i><a :href="docURL" target="_blank"> Open in new tab</a></div>

            <i slot="reference" class="el-icon-more"></i>
            </el-popover>
        </div>

        
    </div>
</template>



<script>
import {getPaperMeta} from '@/request/paperApi'

export default {
    props:{
        paperid:''
    },
    data(){
        return{
            fileName:'',
            modifyDate:'',
            docURL:'http://localhost:8081/#/Document/'
        }
    },
    methods:{
        getRecentPaperInfo(){
            getPaperMeta(this.paperid).then((res)=>{
                var data = res.data[0];
                this.fileName = data.fileName;
                this.modifyDate = data.modifyDate;
                this.docURL = this.docURL + data.paperid
            })
        },
        removePaper(){
            this.$emit("remove", this.paperid)
        },
        openDoc(){

        }
    },
    mounted(){

    },
    created(){
        this.getRecentPaperInfo();
    },
    computed:{
        displayFileName:function(){
            if(this.fileName.length>10){
                return this.fileName.slice(0,10)+"..."
            }else{
                return this.fileName
            }
        }
    }
}
</script>



<style scoped>

.thumb-block{
    border:gray 1px solid;
    width:200px;
    background-color:white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    text-align: center;
    float:left;
    margin-right:50px;
    margin-bottom: 50px;
}

.thumb-pic{
    height:240px;
}

.thumb-tool{
    height:60px;
    border-top:gray 1px solid;
    text-align:left;
    padding:5px;
    box-sizing: border-box;
}

.modify-time{
    font-size:12px;
}

.el-icon-more{
    float:right;
    transform: rotate(90deg);
    cursor: pointer;
}

.thumb-tool-btn{
    width:100%;
    font-size:15px;
    padding:3px 0;
    cursor:pointer;
}
.thumb-tool-btn:hover{
    font-weight:bold;
}

.thumb-tool-btn a{
    text-decoration:none;
}
.thumb-tool-btn a:visited{
	color: #606266;
}
</style>