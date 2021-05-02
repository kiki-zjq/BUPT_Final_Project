<template>
    <div class="recent" >
        <div style="width:90%;margin:auto;height:100%">
            <h1 class="title">Document</h1>
            <div class="thumb-list">
                <p style="color:white;font-size:16px;margin-bottom:30px">You can create a blank document here. What's more, all the files you have created will be displayed in this page!</p>
            
                <div class="temp" style="margin-top:20px" @mouseenter="handleEnter" @click="create(0)">
                    <div class="abbr">
                        <i class="el-icon-plus"></i>
                    </div>

                </div>


                <Thumbnail 
                    v-for="(paper) in recentPaper" 
                    :key="paper"
                    :paperid="paper"
                    @remove="removePaper"
                    @showInfo="showInfo"
                />

        
                 
            
            </div>

            <div class='info-block'>
                <div  class='alt-table' id='altTable'>
                    <span v-show="!showTable" style="color:#505050;line-height:200px;font-size:48px">Information Display</span>
                

                <table v-show="showTable" class='info-table'>
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

            <div class="contact">
                <h1>Contact</h1>
                <div class="contact-block">
                    <div @mouseenter="handleContact(1)" class="item1">
                        <transition name="el-fade-in-linear">
                            <i v-show="item1==1" class="fa fa-github" aria-hidden="true" style="font-size:64px;line-height:100px"></i>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <p v-show="item1==2">https://github.com/kiki-zjq</p>
                        </transition>
                        
                    </div>
                    
                    <div @mouseenter="handleContact(2)" class="item2">
                        <transition name="el-fade-in-linear">
                            <i v-show="item2==1" class="fa fa-weixin" aria-hidden="true" style="font-size:64px;line-height:100px"></i>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <p v-show="item2==2">CienADSoledad</p>
                        </transition>
                    </div>

                    <div @mouseenter="handleContact(3)" class="item3">
                        <transition name="el-fade-in-linear">
                            <i v-show="item3==1" class="fa fa-envelope" aria-hidden="true" style="font-size:64px;line-height:100px"></i>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <p v-show="item3==2" >jiangqiz@andrew.cmu.edu</p>
                        </transition>
                    </div>
                    
                    <div @mouseenter="handleContact(4)" class="item4">
                        <transition name="el-fade-in-linear">
                            <i v-show="item4==1" class="fa fa-mobile" aria-hidden="true" style="font-size:64px;line-height:100px"></i>
                        </transition>
                        <transition name="el-fade-in-linear">
                            <p v-show="item4==2">+86 18810701233</p>
                        </transition>
                    </div>
                </div>
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
            info:{},
            showTable:false,
            item1:1,
            item2:1,
            item3:1,
            item4:1,
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
            this.showTable = true;
            // let altTable = document.getElementById("altTable");
            // altTable.style.animationDuration = '6s';
        },
        handleEnter(){
            this.showTable = false;
            let altTable = document.getElementById("altTable");
            // altTable.style.animationDuration = '3s';

        },
        handleContact(val){
            switch(val){
                case 1:
                    this.item1 = 5 - this.item1; // A number will not render any icon/text
                    setTimeout(()=>{
                        this.item1 = this.item1 == 4 ? 2:1;
                    },500);
                    break;
                case 2:
                    this.item2 = 5 - this.item2;
                    setTimeout(()=>{
                        this.item2 = this.item2 == 4 ? 2:1;
                    },500);
                    break;
                case 3:
                    this.item3 = 5 - this.item3;
                    setTimeout(()=>{
                        this.item3 = this.item3 == 4 ? 2:1;
                    },500);
                    break;
                case 4:
                    this.item4 = 5 - this.item4;
                    setTimeout(()=>{
                        this.item4 = this.item4 == 4 ? 2:1;
                    },500);
                    break;
            }
            
        },
        create(val){
            switch(val){
                case 0:
                    let url = '/Blank/' + this.$route.params.account
                    this.$router.push(url);
            }
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
    font-size:48px;
    color:white;
    margin:0;
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
}

.thumb-list{

    margin-bottom: 50px;
    height:90%;
    width:60%;
    float:left;

    overflow:scroll;
    border-right:2px white solid;
    /* overflow-y: hidden; */
}

::-webkit-scrollbar{
    display: none;
}

.info-block{
    /* margin-top:20px; */
    width:34%;
    float:right;
    height:40%;
    /* background-color:white; */
    /* box-sizing:border-box; */
    padding:0 20px;
    font-family:'Times New Roman', Times, serif;
    line-height:24px;
    border-bottom: 2px white solid;
}

.contact{
    float:right;
    width:34%;
    color:white;
    /* border:1px white solid; */
    padding: 0 20px;
    height:50%;
}
.contact-block{
    display:grid;
    width:100%;
    height:70%;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    grid-gap:10px 10px;
    text-align:center;
}
.contact-block p{
    margin:0;
    font-size:16px;
    line-height:100px;
    font-weight:bold;
    font-style:italic
}
.item1{
    background-color:pink;
}
.item2{
    background-color:gray;
}
.item3{
    background-color:burlywood;
}
.item4{
    background-color:darksalmon;
}
.alt-table{
    border:4px #F1F1F1 solid;
    width:100%;
    background:white;
    height:230px;
    box-sizing:border-box;
    position:relative;
    animation: tableMove linear;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    text-align:center;
}

.info-table{
    border:4px #F1F1F1 solid;
    width:100%;
    box-sizing:border-box;
    position:relative;

}
.info-table td{
    word-break:break-all;
    vertical-align: top;
    border:none;
}
.info-table .info-item{
    width:40%;
}

    .temp{
        width:200px;
        text-align: center;
        float:left;
        margin-right:50px;
    }
    .abbr{
        width:100%;
        height:240px;
        background: white;
        text-align: center;
        transition: all .4s;
    }
    .abbr:hover{
        cursor:pointer;
        margin-top:10px;
    }
    .description{
        margin-top:1em;
        color:white;
        font-family: 'Times New Roman', Times, serif;
        
    }
    .el-icon-plus{
        width:50%;
        height:50%;
        transform: translateY(70%);
        font-weight: bold;
        font-size:36px;
    }

.thumb-tool{
    height:60px;
    border-top:gray 1px solid;
    text-align:left;
    padding:5px;
    box-sizing: border-box;
    background:white;
}

@keyframes tableMove{
    0%{top:0;}
    25%{top:10px;transform: rotate(6deg)}
    50%{top:0;transform: rotate(0)}
    75%{top:-10px;transform: rotate(-6deg)}
    100%{top:0}
}

</style>