<template>
    <div class="homepage">
        <HeaderPart id="header-part" v-bind:language='language' v-on:changeLang='changeLang()'/>
        <IntroPart id="intro"/>
        <Recent id="recent" :recentPaper="recent"/>
        <FooterPart class='footer'/>
    </div>
</template>

<script>
import HeaderPart from './components/header'
import FooterPart from './components/footer'
import IntroPart from './components/intro'
import Recent from './components/recent'

import {getAccountPaper} from '@/request/accountApi'
export default {
    components:{
        FooterPart,
        HeaderPart,
        IntroPart,
        Recent,
    },
    data(){
        return{
            recent:[],
        }
    },
    mounted(){
        getAccountPaper('582133739@qq.com').then((res)=>{
            var data = res.data[0];
            this.recent = data.paper;
        })
    }
}
</script>

<style scoped>
.homepage{
    
}
</style>