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
            deletePaper(paperid)
        }
    }
}
</script>






<style scoped>
.recent{
    min-height: 800px;
    width:80%;
    margin:10px auto;
    color:black;
    font-size:18px;
    text-align:left;
}

.thumb-list{
    margin-top:20px;
}
</style>