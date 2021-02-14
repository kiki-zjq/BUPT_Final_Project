<template>
    <div>


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
export default {
    components:{
        logBlock,
        regBlock
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
	height: 400px;
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


</style>

