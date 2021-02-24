<template>
    <div class="recent" >
        <div style="width:90%;margin:auto;">
            <span class="title"><b>Recent</b></span><br/>
            
            <div class="thumb-list">

                <Thumbnail 
                    v-for="(paper) in recentPaper" 
                    :key="paper"
                    :paperid="paper"
                    @remove="removePaper"
                />

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
    height:85%;
    overflow-y: auto;
}

::-webkit-scrollbar{
    display: none;
}
</style>