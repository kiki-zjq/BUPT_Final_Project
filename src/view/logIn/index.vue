<template>
    <div>

        <figure class="ball bubble ball1"></figure>
        <figure class="ball bubble ball2"></figure>


        <div class="container">
            <div class="content">
                <logBlock v-if="isLogIn" @goReg="changeStatus"/>
                <regBlock v-if="!isLogIn" @goLogin="changeStatus"/>
            </div>
        </div>
   
   
    </div>
</template>



<script>



import logBlock from './components/logBlock'
import regBlock from './components/regBlock'
import Circle from './components/circle'
export default {
    components:{
        logBlock,
        regBlock,
        Circle,
    },
    data(){
        return{
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

.container {
	width: 100%;
	height: 100%;
    background:red;
}

.content {
	width: 800px;
	min-height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -200px;
	margin-left: -400px;
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.5);
	overflow: hidden;
	z-index: 2;
	padding: 50px;
	box-sizing: border-box;
}

.content::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	-webkit-filter: blur(20px);
	-moz-filter: blur(20px);
	-ms-filter: blur(20px);
	-o-filter: blur(20px);
	filter: blur(20px);
	z-index: -3;
	margin: -30px;
	background-position: center top;
	background-size: cover;
	background-attachment: fixed;
}

.content h1 {
	text-align: center;
	margin-bottom: 20px;
}

.content p {
	text-indent: 2em;
	line-height: 1.7;
}





.ball { 
    display: inline-block; 
    width: 250px; 
    height: 250px; 
    margin: 0; 
    border-radius: 50%; 
    position: relative; 
    background: radial-gradient(circle at bottom, #81e8f6, #76deef 10%, #055194 80%, #062745 100%)
} 
.ball:before { 
    content: ""; 
    position: absolute; 
    top: 1%; left: 5%; width: 90%; height: 90%; 
    border-radius: 50%; 
    background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%); 
    filter: blur(5px); 
    z-index: 2; 
}
.ball:after {
    content: "";
    position: absolute;
    display: none;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    -webkit-filter: blur(1px);
    filter: blur(1px);
    z-index: 2;
    -webkit-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg); }

 .ball.bubble {
    background: radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4));
    -webkit-animation: bubble-anim 4s ease-out infinite;
    animation: bubble-anim 4s ease-out infinite; }
    .ball.bubble:before {
      -webkit-filter: blur(0);
      filter: blur(0);
      height: 80%;
      width: 40%;
      background: radial-gradient(circle at 130% 130%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 58%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
      -webkit-transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
      transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg); }
    .ball.bubble:after {
      display: block;
      background: radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 74%, white 80%, white 84%, rgba(255, 255, 255, 0) 100%); }

.ball1{
    top:45vh;
    left:-25%;
}
.ball2.bubble{
    left:20%;
    background: radial-gradient(circle at 50% 55%, rgba(255, 121, 128, 0.9), rgba(255, 155, 160, 0.9) 40%, rgba(255, 172, 176, 0.9) 60%, rgba(255, 223, 225, 0.4));
}
@keyframes bubble-anim {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1); }

  20% {
    -webkit-transform: scaleY(0.95) scaleX(1.05);
    transform: scaleY(0.95) scaleX(1.05); }

  48% {
    -webkit-transform: scaleY(1.1) scaleX(0.9);
    transform: scaleY(1.1) scaleX(0.9); }

  68% {
    -webkit-transform: scaleY(0.98) scaleX(1.02);
    transform: scaleY(0.98) scaleX(1.02); }

  80% {
    -webkit-transform: scaleY(1.02) scaleX(0.98);
    transform: scaleY(1.02) scaleX(0.98); }

  97%, 100% {
    -webkit-transform: scale(1);
    transform: scale(1); } }
</style>

