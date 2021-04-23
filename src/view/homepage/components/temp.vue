<template>
    <div class="intro-page">
        <div style="width:90%;margin:auto;">
            <span class="title"><b>Create New Document</b></span><br/>
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
                case 0:
                    let url = '/Blank/' + this.$route.params.account
                    this.$router.push(url);
            }
        }
    }

}
</script>


<style scoped>
    .intro-page{
       
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
        /* background-image: linear-gradient(to top right,#bdc3c7,#2c3e50); */
        /* background-color: #dadce0; */
    }
    .title{
        color:white;
        font-size: 36px;
        font-family: 'Times New Roman', Times, serif;

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
        color:white;
        font-family: 'Times New Roman', Times, serif;
        
    }
    .el-icon-plus{
        width:50%;
        height:50%;
        transform: translateY(70%);
        font-weight: bold;
        font-size:36px;
    }
</style>