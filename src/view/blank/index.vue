<template>
    <div class='blank'>
        <HeaderPart class="header-part"/>
        <ToolBox class="tool-box"/>
        <MainPart />
    </div>    
</template>


<script>
import HeaderPart from './components/head'
import ToolBox from './components/toolbox'
import MainPart from './components/mainPart'
export default {
    
    components:{
        HeaderPart,
        ToolBox,
        MainPart,
    }
}
</script>

<style scoped>
.header-part{
    z-index:999;
    position: sticky;
    top:0;
}
.tool-box{
    position: sticky;
    top:100px;
}
</style>