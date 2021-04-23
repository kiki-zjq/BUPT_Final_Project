<template>
    <div class="thumb-block" @mouseenter="showInfo()">

        <div class="thumb-pic"  @click="openDoc()">
            <i class="el-icon-zoom-in"></i>
        </div>
        
        
        <div class="thumb-tool">
            <el-tooltip class="item" effect="dark" :content="fileName" placement="top-start">
                <span v-if="!isRename">{{displayFileName}}</span>
                <!-- <el-input v-if="isRename" ></el-input> -->
            </el-tooltip>
    

            <br/>
            <span class="modify-time">{{modifyDate}}</span>
            

            <el-popover
            placement="bottom"
            width="120"
            trigger="click"
            v-model="visible">
                <div class="thumb-tool-btn" @click="rename()"><i class="el-icon-edit-outline"></i> Rename</div>
                <div class="thumb-tool-btn" @click="removePaper()"><i class="el-icon-delete"></i> Delete</div>
                <div class="thumb-tool-btn" @click="visible = !visible"><i class="el-icon-data-board"></i><a :href="docURL" target="_blank"> Open in new tab</a></div>

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
            visible:false,
            info:{},
            fileName:'',
            modifyDate:'',
            docURL:'http://localhost:8081/#/Document/',
            isRename:false,
        }
    },
    methods:{
        getRecentPaperInfo(){
            getPaperMeta(this.paperid).then((res)=>{
                var data = res.data[0];
                this.info = data;
                this.fileName = data.fileName;
                this.modifyDate = data.modifyDate;
                this.docURL = this.docURL + this.$route.params.account +'/' + data.paperid
            })
        },
        removePaper(){
            this.$emit("remove", this.paperid)
        },
        showInfo(){
            this.$emit("showInfo", this.info);
        },
        openDoc(){
            let url = '/Document/'+this.$route.params.account +'/'+this.info.paperid
            this.$router.push(url);
        },
        rename(){

        },
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
    cursor: pointer;
    display: flex;
    opacity: 0;
    transition: opacity 1.5s;
}

.thumb-pic:hover{
    opacity:0.7 ; 
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
.el-icon-zoom-in{
    font-size:48px;
    margin:auto;
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