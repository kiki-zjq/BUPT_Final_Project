<template>
    <div class="recent" >
        <div style="width:90%;margin:auto;height:100%">
            <span class="title"><b>Recent</b></span><br/>
            
            <div class="thumb-list">

                <Thumbnail 
                    v-for="(paper) in recentPaper" 
                    :key="paper"
                    :paperid="paper"
                    @remove="removePaper"
                    @showInfo="showInfo"
                />
                 
            
            </div>

            <div class='info-block'>
                
                <table class='info-table'>
                    <tr style="background:#F1F1F1">
                    <td class="info-item"><span style="font-weight:bold">File Name</span></td>
                    <td>{{this.info.fileName}}</td>
                    <tr/>

                    <tr>
                    <td class="info-item"><span style="font-weight:bold">Course NO</span></td>
                    <td>{{this.info.courseNO}}</td>
                    <tr/>

                    <tr style="background:#F1F1F1">
                    <td class="info-item"><span style="font-weight:bold">Course Name</span></td>
                    <td>{{this.info.courseName}}</td>
                    <tr/>

                    <tr>
                    <td class="info-item"><span style="font-weight:bold">Course Date</span></td>
                    <td>{{this.info.courseDate}}</td>
                    <tr/>

                    <tr style="background:#F1F1F1">
                    <td class="info-item"><span style="font-weight:bold">Examiners</span></td>
                    <td>{{this.info.examiners}}</td>
                    <tr/>

                    <tr>
                    <td class="info-item"><span style="font-weight:bold">Create Date</span></td>
                    <td>{{this.info.createDate}}</td>
                    <tr/>


                    <tr style="background:#F1F1F1">
                    <td class="info-item"><span style="font-weight:bold">Modify Date</span></td>
                    <td>{{this.info.modifyDate}}</td>
                    <tr/>

                </table>
            </div>
        </div>
    
    </div>
</template>


<script>

import Thumbnail from './thumb.vue';
import {getPaperMeta, deletePaper} from '@/request/paperApi'
import {getAccountPaper} from '@/request/accountApi'

export default {
    inject:['reload'],
    data(){
        return {
            info:{}
        }
    },
    props:{
        recentPaper:{},
    },
    components:{
        Thumbnail
    },
    methods:{
        removePaper(paperid){
            deletePaper(paperid).then(()=>{
                var index = this.recentPaper.indexOf(paperid);
                this.recentPaper.splice(index,1)
            })
        },
        showInfo(info){
            this.info = info;
        }
    },
    computed:{
        allPaper:function(){
            return this.recentPaper
        }
    }
}
</script>






<style scoped>
.recent{
    background-image:linear-gradient(to top right,#2C5364,#203A43,#0F2027);
    width:100%;
    min-width: 1400px;
    height:90vh;
    height:100%;
    box-sizing: border-box;
    padding:40px;
    margin:0px auto;
    color:black;
    font-size:18px;
    text-align:left;
}

.title{
    font-size:36px;
    color:white;
    /* margin:0; */
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
}

.thumb-list{
    margin-top:20px;
    margin-bottom: 50px;
    height:90%;
    width:65%;
    float:left;

    overflow:scroll;
    /* overflow-y: hidden; */
}

::-webkit-scrollbar{
    display: none;
}

.info-block{
    margin-top:20px;
    margin-bottom: 50px;
    width:30%;
    float:right;
    height:50%;
    background-color:white;
    box-sizing:border-box;
    padding:20px;
    font-family:'Times New Roman', Times, serif;
    line-height:24px;
}

.info-table{
    border:4px #F1F1F1 solid;
    width:100%;
    box-sizing:border-box;
}
.info-table td{
    word-break:break-all;
    vertical-align: top;
    border:none;
}
.info-table .info-item{
    width:40%;
}
</style>