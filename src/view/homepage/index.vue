<template>
    <div class="homepage">
        <!-- <HeaderPart id="header-part" v-bind:language='language' v-on:changeLang='changeLang()'/> -->
        <el-carousel trigger="click" height="100vh" >
            <el-carousel-item>
                <IntroPart/>
            </el-carousel-item>

            <el-carousel-item>
                <TempPart id="temp"/>
            </el-carousel-item>
            
            <el-carousel-item>
                <Recent id="recent" :recentPaper="recent" @getPaper="getPaper"/>
            </el-carousel-item>
    
        </el-carousel>

        <!-- <FooterPart class='footer'/> -->
    </div>
</template>

<script>
import HeaderPart from './components/header'
import FooterPart from './components/footer'
import TempPart from './components/temp'
import Recent from './components/recent'
import IntroPart from './components/intro'

import {getAccountPaper} from '@/request/accountApi'
export default {
    components:{
        FooterPart,
        HeaderPart,
        TempPart,
        Recent,
        IntroPart
    },
    data(){
        return{
            recent:[],
            activeName: '1',
        }
    },
    methods:{
        getPaper(){
            let account = window.atob(this.$route.params.account);

            getAccountPaper(account).then((res)=>{
                var data = res.data[0];
                this.recent = data.paper;

                //this.$set(this,recent,[...data.paper]);
                console.log(this.recent)

            })
        }
    },
    mounted(){
       this.getPaper();
    }
}
</script>

<style scoped>

</style>