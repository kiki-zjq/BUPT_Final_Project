<template>

<div class='Menu-block'>

       <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ff4f4f"
      >
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{language=='Chinese'?'首页':'HOMEPAGE'}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click='handleClick(1.1)'>{{language=='Chinese'?'关于作者':'About'}}</el-menu-item>
          <el-menu-item index="1-2" @click='handleClick(1.2)'>{{language=='Chinese'?'相关技术栈':'Skill'}}</el-menu-item>
          <el-menu-item index="1-3" @click='handleClick(1.3)'>{{language=='Chinese'?'本科成绩单':'Academic'}}</el-menu-item> 
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2" @click='handleClick(2)'>
        <i class="el-icon-edit"></i>
        <span slot="title" >{{language=='Chinese'?'简历':'RESUME'}}</span>
      </el-menu-item>

      <el-menu-item index="3" @click='handleClick(3)'>
        <i class="el-icon-document"></i>
        <span slot="title">{{language=='Chinese'?'经历':'EXPERIENCE'}}</span>
      </el-menu-item>

      <el-menu-item index="4" @click='handleClick(4)'>
        <i class="el-icon-suitcase"></i>
        <span slot="title">{{language=='Chinese'?'项目':'PROJECT'}}</span>
      </el-menu-item>

      <el-menu-item index="5" @click='handleClick(5)'>
        <i class="el-icon-reading"></i>
        <span slot="title">{{language=='Chinese'?'证书':'CERTIFICATION'}}</span>
      </el-menu-item>

    </el-menu>


</div>
</template>

<script>
let active='1'
export default {
    props:{
        language:{
            type:String,
            default:'Chinese',
        }
    },
    data(){
      return{
        active
      }
    },

    mounted(){
      console.log(this.$route)
    switch(this.$route.path){
      case '/Resume':this.active='2';break;
      case '/Experience':this.active='3';break;
      case '/Project':this.active='4';break;
      case '/Certification':this.active='5';break;
      default:
        this.active='1';
    }
    if(this.$route.path=='/'){
          switch(this.$route.hash){
            case '#skill':this.active='1-2';return;
            case '#academic':this.active = '1-3';return;
            case '#anchor':this.active = '1-1';return;
            default:this.active = '1-1';
          }
        }
  },

    watch:{
      $route(to,from){
        switch(to.path){
        case '/Resume':
          this.active='2';return;
        case '/Experience':
          this.active='3';return;
        case '/Project':
          this.active='4';return;
        case '/Certification':
          this.active='5';break;
        }
        if(to.path=='/'){
          switch(to.hash){
            case '#skill':this.active='1-2';return;
            case '#academic':this.active = '1-3';return;
            case '#anchor':this.active = '1-1';return;
            default:this.active = '1-1';
          }
        }
      }
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(index){
        switch(index){
            case 1.1:
              this.$router.push('/#anchor');
              this.$store.commit('changePage','KiKi-Zjq');
              this.$store.commit('changeIntro','Personal Homepage');
              break;
            case 1.2:
              this.$router.push('/#skill');
              this.$store.commit('changePage','KiKi-Zjq');
              this.$store.commit('changeIntro','Personal Homepage');
              break;
            case 1.3:
              this.$router.push('/#academic');
              this.$store.commit('changePage','KiKi-Zjq');
              this.$store.commit('changeIntro','Personal Homepage');
              break;
            case 2:
              this.$router.push('/Resume#anchor');
              this.$store.commit('changePage','Resume');
              this.$store.commit('changeIntro','');
              break;
            case 3:
              this.$router.push('/Experience#anchor');
              this.$store.commit('changePage','Experience');
              this.$store.commit('changeIntro','');
              break;
            case 4:
              this.$router.push('/Project#anchor');
              this.$store.commit('changePage','Project');
              this.$store.commit('changeIntro','');
              break;
            case 5:
              this.$router.push('/Certification#anchor');
              this.$store.commit('changePage','Certification');
              this.$store.commit('changeIntro','');
              break;
        }

      }
    }
  }
</script>

<style >
.Menu-block{
    text-align: left;
}
ul.el-menu-vertical-demo.main-menu.el-menu{
    text-align: left;
    padding-left:5%;
    font-size:20px;
    font-weight:bold;
    border-color:"#fafafa";
    border-radius:20px;
    background-color:"#fafafa";
    
}
.el-menu-vertical-demo{
  font-weight:bold;
}
.el-submenu__icon-arrow{
  font-weight:bold;
  color:black;
}
</style>
