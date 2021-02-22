<template>
    <div class="back">
        <div class="content-block">
            <div v-if="welcome">
                <span class="title">JOIN AND CREATE</span><br/>
                <span class="title">YOUR OWN TEST</span><br/>
                <el-button class="start-btn" @click="welcome=!welcome" round>Get Started</el-button>
            </div>
            <div v-if="!welcome">
                <logBlock v-if="isLogIn" @goReg="changeStatus"/>
                <regBlock v-if="!isLogIn" @goLogin="changeStatus"/>
            </div>
        </div>
    </div>    
</template>

<script>
import logBlock from './components/logBlock'
import regBlock from './components/regBlock'
export default {
    components:{
        logBlock,
        regBlock,
    },
    data(){
        return{
            welcome:true,
            isLogIn:true,
        }
    },
    methods:{
        changeStatus(){
            this.isLogIn=!this.isLogIn;
        }
    }
    
}
</script>

<style scoped>
.back{
    box-sizing: border-box;
    padding-top:25vh;
    background-color:black;
    width:100%;
    height:100vh;
    background-image: url('bg.png');
    background-position: center top;
    background-repeat: no-repeat;
    /* background-image: linear-gradient(pink 0.5px,transparent 0),
                        linear-gradient(90deg, yellow 0.5px,transparent 0),
                        linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0),
                        linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);

background-size:75px 75px,75px 75px,15px 15px,15px 15px; */
}

.content-block{
    width:35%;
    min-height:300px;
    padding:20px;
    /* border:1px solid white; */
    top: 25%;
	left: 33%;
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    z-index:1;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
   
}
.content-block::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.8);
    z-index: -1;
    background-image: url('bg.png');
    background-position: center top;

    
    background-attachment: fixed;
    filter: blur(20px);
}
.title{
    font-size:28px;
    color:white;
    font-weight:bold;
    font-family:'Times New Roman', Times, serif;
    animation: start-btn-animate 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.start-btn{
    color:white;
    border:none;
    margin-top:1em;
    font-size:24px;
    font-weight:bold;
    font-family:'Times New Roman', Times, serif;
    /* background:#daa1c4; */
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    background-image: linear-gradient(to top left,#50867d,#70aaa0,#90bdb5,#a5cac3);
    animation: start-btn-animate 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    /* background-image: linear-gradient(to top left, #b94c8f,#c771a6,#d189b5,#dfaecc); */
}

@keyframes start-btn-animate{
      0% {
            transform: translateY(75px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
}

</style>