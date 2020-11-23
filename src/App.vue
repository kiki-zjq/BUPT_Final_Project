<template>
  <div id="app">
    <HeaderPart id="header-part" v-bind:language='language' v-on:changeLang='changeLang()'/>
    <IntroPart id="intro"/>
    <!-- <div id='main-part'>
        <div class="Menu">
          <Menu />
        </div>
        <div class="View">
          <router-view />
        </div>
    </div>

    <FooterPart class='footer'/> -->
     
    <div class="Wrapper" id='anchor' name='anchor'>
      <div class='Menu'>
        <Menu  v-bind:language='language'/>
      </div>
      <div class="View">
        <router-view/>
      </div>
    </div>

    <FooterPart class='footer'/>

  </div>
</template>

<script>
import HeaderPart from '@/layout/header'
import FooterPart from '@/layout/footer'
import Menu from '@/layout/menu'
import IntroPart from '@/components/intro.vue'
export default {
  name: 'App',
  data(){
    return{
        language:'Chinese',
    }
  },
  methods:{
    changeLang(){
      if (this.language == 'Chinese'){
         this.language = 'English'
      }else{
        this.language = 'Chinese'
      } 
    }
  },

  components:{
    FooterPart,
    HeaderPart,
    IntroPart,
    Menu
  },
};

</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  text-align: center;
}


#header-part{
  z-index:9;
  /* position: fixed;
  top:0; */
}

#main-part{
  width:70%;
  min-height:1200px;
  min-width:600px;
  margin: auto;
  border:1px white solid;
}


.footer{
  margin-top:100px;
  min-width: 1250px;
}


.Wrapper{
  min-height:800px;
  min-width: 1400px;
  width:100%;
}

.Wrapper:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.Menu{
  width:25%;
  padding-left:10%;
  padding-top: 5vh;
  min-width: 400px;
  box-sizing: border-box;
  float:left;
  position: sticky;
  top:5vh;
}

.View{
  float:left;
  width:65%;
  margin-top:1%;
  margin-left:4%;
}

</style>
