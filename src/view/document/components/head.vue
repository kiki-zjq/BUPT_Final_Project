<template>
    <div class='head'>
        
        <div class="logo">
            <i class="el-icon-back" @click="goBack()"></i>
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.head{
    width:100%;
    height:100px;
    background-color: white;
    /* background-image: linear-gradient(to top right,#bdc3c7,#2c3e50); */
    border-bottom: #333 solid 1px;
}
.el-icon-back{
    cursor: pointer;
}
.logo{
    line-height:100px;
    float:left;
    width:20%;
    font-size:36px;
    color:#409EFF;
}
.logo i{

}
</style>