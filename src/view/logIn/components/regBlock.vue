<template>
    <div>
        <span class="title">REGISTER</span><br/>
        <el-input v-model="name" style="margin-top:2em;" placeholder="Input Your Name"></el-input>
        <el-input v-model="account" style="margin-top:2em;" placeholder="Input Your Account"></el-input>
        <el-input v-model="pwd" style="margin-top:2em;" placeholder="Input Your Password"></el-input>
        <el-input v-model="pwdAgain" style="margin-top:2em;" placeholder="Input Your Password Again"></el-input>
        <el-button class="start-btn" style="width:50%;margin-top:2em;" @click="RegAccount" round>Register</el-button><br/>
        <p class="reg-prompt">Already have an account? <span class="go-reg" @click="goLogin">Return.</span></p>
    </div>
</template>


<script>

import {createAccount} from '@/request/accountApi'


export default {
    data(){
        return{
            name:'',
            account:'',
            pwd:'',
            pwdAgain:'',
        }
    },
    methods:{
        goLogin:function(){
            this.$emit("goLogin")
        },
        RegAccount:function(){
            var obj = {
                "name":this.name,
                "account":this.account,
                "password":this.pwd,
                "paper":[]
            }
            createAccount(obj).then((res)=>{
                this.$notify({
                    title: 'Success',
                    message: 'Register Successfully',
                    type: 'success',
                    duration:5000,
                });
            }).catch((res)=>{
                this.$notify.error({
                    title: 'Error',
                    message: 'Account Already Exist',
                    duration:5000,
                });
            })
        }
    }
}
</script>

<style scoped>
.reg-prompt{
    color:white;
    text-align: left;
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