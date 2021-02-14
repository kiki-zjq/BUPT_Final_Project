<template>
    <div>
        <el-input v-model="account" placeholder="Input Your Account"></el-input>
        <el-input v-model="pwd" style="margin:2em 0;" placeholder="Input Your Password"></el-input>
        <el-button type="primary" style="width:50%">Log In</el-button><br/>
        <p class="reg-prompt">Don't have an account yet? <span class="go-reg" @click="goReg">Register first.</span></p>
    </div>
</template>


<script>
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