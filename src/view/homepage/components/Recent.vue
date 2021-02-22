<template>
    <div class="recent">
        <span><b>Recent</b></span><br/>
        
        <div class="thumb-list">
            <Thumbnail 
                v-for="(paper,index) in recentPaper" 
                :key="index"
                :paperid="paper"
                @remove="removePaper"
            />
            
        </div>
    
    </div>
</template>


<script>

import Thumbnail from './thumb.vue';
import {getPaperMeta, deletePaper} from '@/request/paperApi'

export default {
    props:{
        recentPaper:[]
    },
    components:{
        Thumbnail
    },
    methods:{
        removePaper(paperid){
            var account="582133739@qq.com"
            deletePaper(paperid).then(()=>{
                this.$emit("getPaper")
            })


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
    margin:0px auto;
    color:black;
    font-size:18px;
    text-align:left;
}

.thumb-list{
    margin-top:20px;
}
</style>