<template>
    <div class="header" >
        <!-- <el-row>
            <el-col :span="12"><div style="background-color:#404040;height:100%;width:100%">'</div></el-col>
            <el-col :span="12">
                <el-menu
                    :default-active="active"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#404040"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>


            </el-col>   
        </el-row> -->
        <!-- <i class="fa fa-language" aria-hidden="true"></i> -->
        <ul class="nav">
            <li><a href='javascript:void(0)' @click="handleClick(1)">{{language=='Chinese'?'主页':'Homepage'}}</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(2)">{{language=='Chinese'?'简历':'Resume'}}</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(3)">{{language=='Chinese'?'经历':'Experience'}}</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(4)">{{language=='Chinese'?'项目':'Project'}}</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(5)">{{language=='Chinese'?'证书':'Certification'}}</a></li>
            <!-- <li><a href='javascript:void(0)' @click="handleClick(6)">{{language=='Chinese'?'博客':'Blogs'}}</a></li> -->
            <li><i class="fa fa-language" aria-hidden="true" @click='handleChangeLanguage()'></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        language:{
            type:String,
            default:'Chinese',
        }
    },
    data(){
        return{
            active:'1'
        }
    },
    mounted(){
        console.log("!route:",this.$route)
        switch(this.$route.path){
                case '/':
                    this.$store.commit('changePage','KiKi-Zjq');
                    this.$store.commit('changeIntro','Personal Homepage');
                    break;
                case '/Resume':
                    this.$store.commit('changePage','Resume');
                    this.$store.commit('changeIntro','');
                    break;
                case '/Experience':
                    this.$store.commit('changePage','Experience');
                    this.$store.commit('changeIntro','');
                    break;
                case '/Project':
                    this.$store.commit('changePage','Project');
                    this.$store.commit('changeIntro','');
                    break;
                case '/Certification':
                    this.$store.commit('changePage','Certification');
                    this.$store.commit('changeIntro','');
                    break;
                case '/Blogs':
                    this.$store.commit('changePage','Blogs');
                    this.$store.commit('changeIntro','');
                    break;
            }
    },
    methods: {
        
        handleChangeLanguage(){
            this.$store.commit('changeLanguage')
            this.$emit('changeLang')
        },

      handleClick(value){
          console.log(value)
          switch(value){
              case 1:
                  this.$router.push('./#app');
                  this.$store.commit('changePage','KiKi-Zjq');
                  this.$store.commit('changeIntro','Personal Homepage');
                  break;
              case 2:
                  this.$router.push('./Resume#app');
                  this.$store.commit('changePage','Resume');
                  this.$store.commit('changeIntro','');
                  break;
              case 3:
                  this.$router.push('./Experience#app');
                  this.$store.commit('changePage','Experience');
                  this.$store.commit('changeIntro','');
                  break;
              case 4:
                  this.$router.push('./Project#app');
                  this.$store.commit('changePage','Project');
                  this.$store.commit('changeIntro','');
                  break;
              case 5:
                  this.$router.push('./Certification#app');
                  this.$store.commit('changePage','Certification');
                  this.$store.commit('changeIntro','');
                  break;
              case 6:
                  this.$router.push('./Blogs#app');
                  this.$store.commit('changePage','Blogs');
                  this.$store.commit('changeIntro','');
                  break;
          }
      }
    }
}
</script>

<style scoped>
.header{
    color:white;
    width:100%;
    height:60px;
    z-index:9;
    position: relative;
    background-color:#404040;
    min-width:1400px;
}
.fa{
    margin-left:20px;
    margin-top:5px;
    font-size:24px;
    cursor:pointer;
}
.nav{
    position:absolute;
    right:100px;
    list-style:none;
}
.nav li{
    float:left;
}

.nav li a{
    display: block;
    
    /* border-left:1px white solid; */
    
    text-decoration: none;
    width:100px;
    padding:8px;
    background-color:inherit;
    text-transform: uppercase;
    color:inherit;
    font-size: 12px;
    line-height: 20px;
    font-weight: 800;
    letter-spacing: 1px;
}
.nav li a:hover{
    opacity: 0.8;
}

</style>