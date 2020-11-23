<template>
    <div class="header" >
        <!-- <p>K-Doc</p>

        <i class="fa fa-language" aria-hidden="true" @click='handleChangeLanguage()'></i> -->
    
    </div>
</template>

<script>
export default {
    props:{
        language:{
            type:String,
            default:'Chinese',
        }
    },
    methods: {
        
        handleChangeLanguage(){
            this.$store.commit('changeLanguage')
            this.$emit('changeLang')
        },

    }
}
</script>

<style scoped>
.header{
    color:black;
    width:100%;
    height:60px;
    z-index:9;
    position: relative;
    background-color:rgba(255,255,255,1);
    min-width:1400px;
    text-align: left;
}
.fa{
    float: right;
    margin-left:20px;
    margin-top:5px;
    font-size:24px;
    cursor:pointer;
}

</style>