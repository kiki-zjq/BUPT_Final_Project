<template>
  <div id="app">

        <router-view/>


  </div>
</template>

<script>
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



</style>
