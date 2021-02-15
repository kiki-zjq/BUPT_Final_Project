<template>
    <div>
        <el-input v-model="name" placeholder="Input Your Name"></el-input>
        <el-input v-model="account" style="margin-top:2em;" placeholder="Input Your Account"></el-input>
        <el-input v-model="pwd" style="margin-top:2em;" placeholder="Input Your Password"></el-input>
        <el-input v-model="pwdAgain" style="margin-top:2em;" placeholder="Input Your Password Again"></el-input>
        <el-button type="primary" style="width:50%;margin-top:2em;" @click="RegAccount">Reg</el-button><br/>
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
    text-align: left;
}
.go-reg{
    border-bottom: 1px #444 solid;
    cursor: pointer;
}
</style>