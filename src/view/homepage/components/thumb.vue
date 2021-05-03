<template>
    <div class="thumb-block" @mouseenter="showInfo()">

        <div class="thumb-pic"  @click="openDoc()">
            <i class="el-icon-zoom-in"></i>
        </div>
        
        
        <div class="thumb-tool">
            <el-tooltip class="item" effect="dark" :content="fileName" placement="top-start">
                <span v-if="!isRename">{{displayFileName}}</span>
                <el-input class="change-name" v-if="isRename" :placeholder="displayFileName" v-model="modifyName"></el-input>
            </el-tooltip>
    

            <br/>
            <span class="modify-time">{{modifyDate}}</span>
            

            <el-popover
            placement="bottom"
            width="120"
            trigger="click"
            v-model="visible">
                <div class="thumb-tool-btn" v-if="!isRename" @click="rename(1)"><i class="el-icon-edit-outline"></i> Rename</div>
                <div class="thumb-tool-btn" v-if="isRename" @click="rename(2)"><i class="el-icon-check"></i> Finish</div>
                <div class="thumb-tool-btn" v-if="isRename" @click="rename(3)"><i class="el-icon-back"></i> Back</div>
                <div class="thumb-tool-btn" @click="removePaper()"><i class="el-icon-delete"></i> Delete</div>
                <div class="thumb-tool-btn" @click="visible = !visible"><i class="el-icon-data-board"></i><a :href="docURL" target="_blank"> Open in new tab</a></div>

            <i slot="reference" class="el-icon-more"></i>
            </el-popover>
        </div>

        
    </div>
</template>



<script>
import {getPaperMeta,modifyPaperMeta} from '@/request/paperApi'
import {dateMixin} from '@/mixins/DateMixin.js';

export default {
    mixins:[dateMixin],
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

            modifyName:'',
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
        rename(val){
            if(val==1){
                this.isRename = true;
            } else if(val==3){
                this.isRename = false;
                this.modifyName = '';
            } else{
                if(this.modifyName==''){
                    this.$notify.error({
                        title:'Error',
                        message:'Please input a valid file name',
                    })
                    this.isRename = false;
                    this.modifyName = '';
                    return;
                }

                let obj = this.info;
                obj.fileName = this.modifyName;
                obj.modifyDate = this.formatDate();
                

                modifyPaperMeta(this.info.paperid, obj);
                this.getRecentPaperInfo();
                this.$notify({
                        type:'success',
                        title:'Success',
                        message:'Modify your file name successfully!'
                })
                this.isRename = false;
                this.modifyName = '';
            }
            
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
.change-name{
    width:80%;
    float:left;
    height:20px;
}
</style>