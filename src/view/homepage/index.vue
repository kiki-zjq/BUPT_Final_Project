<template>
    <div class="homepage">
        <HeaderPart id="header-part" v-bind:language='language' v-on:changeLang='changeLang()'/>
        <IntroPart id="intro"/>
        <Recent id="recent"/>
        <FooterPart class='footer'/>
    </div>
</template>

<script>
import HeaderPart from './components/header'
import FooterPart from './components/footer'
import IntroPart from './components/intro'
import Recent from './components/recent'
export default {
    components:{
        FooterPart,
        HeaderPart,
        IntroPart,
        Recent,
    },
}
</script>

<style scoped>
.homepage{
    
}
</style>