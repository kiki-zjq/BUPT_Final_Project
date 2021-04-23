<template>
    <div>
        <span class="title">LOG IN</span><br/>
        <el-input v-model="account" style="margin:2em 0 0;" placeholder="Input Your Account"></el-input>
        <el-input v-model="pwd" style="margin:2em 0;" placeholder="Input Your Password"></el-input>
        <el-button class="start-btn" style="width:50%" @click="LogIn" round>Log In</el-button><br/>
        <p class="reg-prompt">Don't have an account yet? <span class="go-reg" @click="goReg">Register first.</span></p>
    </div>
</template>


<script>
import {checkAccount} from '@/request/accountApi'
export default {
    data(){
        return{
            account:'',
            pwd:'',
        }
    },
    methods:{
        goReg:function(){
            this.$emit("goReg")
        },
        LogIn:function(){
            checkAccount(this.account,this.pwd).then((res)=>{
                 this.$notify({
                    title: 'Success',
                    message: 'Log In Successfully',
                    type: 'success',
                    duration:5000,
                });
                this.$store.commit('changeAccount',this.account,this.pwd,res.data[0].name);
                let url = '/Homepage/'+window.btoa(this.account)
                this.$router.push(url);
            }).catch((res)=>{
                this.$notify.error({
                    title: 'Error',
                    message: 'Account Does Not Exist',
                    duration:5000,
                });
            })
        }
    }
}
</script>

<style scoped>
.reg-prompt{
    text-align: left;
    color:white;
    animation: start-btn-animate 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.go-reg{
    border-bottom: 2px white solid;
    cursor: pointer;
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
    font-size:16px;
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

            opacity: 0;
        }
        100% {

            opacity: 1;
        }
}



</style>