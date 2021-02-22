<template>
    <div class="intro-page">
        <div style="width:80%;margin:auto;">
            <span><b>Create New Document</b></span><br/>
            <div class="temp-list">

                <div class="temp" @click="create(0)">
                    <div class="abbr">
                        <i class="el-icon-plus"></i>
                    </div>
                    <div class="description">
                        BLANK
                    </div>
                </div>


                <div class="temp">
                    <div class="abbr">
                        <i class="el-icon-plus"></i>
                    </div>
                    <div class="description">
                        Temp1
                    </div>
                </div>


                <div class="temp">
                    <div class="abbr">
                        <i class="el-icon-plus"></i>
                    </div>
                    <div class="description">
                        Temp2
                    </div>
                </div>
            



            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
       
    },
    methods:{
        create(val){
            switch(val){
                case 0:this.$router.push('/Blank');
            }
        }
    }

}
</script>


<style scoped>
    .intro-page{
       
        position:relative;
        width:100%;
        min-width: 1400px;
        height:360px;
        background-image: linear-gradient(to top right,#bdc3c7,#2c3e50);
        /* background-color: #dadce0; */
        /* background: radial-gradient(circle at 30% 55%, rgba(255, 121, 128, 0.9), rgba(255, 155, 160, 0.9) 40%, rgba(255, 172, 176, 0.9) 60%, rgba(255, 223, 225, 0.4)); */
        text-align: left;
        color:black;
        padding-top:1.5em;
    }
    .temp-list{
        margin-top:20px;
    }
    .temp{
        width:180px;
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
        color:black;
        
    }
    .el-icon-plus{
        width:50%;
        height:50%;
        transform: translateY(70%);
        font-weight: bold;
        font-size:36px;
    }
</style>