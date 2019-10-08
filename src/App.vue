<template>
  <div id="app" class="container-fluid">
    <!--img src="./assets/logo.png">
    <button class="btn border-white rounded">Clik Me</button>
    <HelloWorld/-->
    <div class="mb-5">
      <NavigationPage/>
    </div>
    <!--button  @click="onScroll">sasa</button>
    <p>asadzfùqskqlflqmfmlmqd</p-->

    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld'
import NavigationPage from "./components/NavigationPage"
import Carousel from "./components/Carousel";
import contact from "./components/contact";

export default {
  name: 'App',
  components: {
      NavigationPage,
      Carousel,
      contact
  },
    methods: {
    }
}
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


  #app {

    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 300px;*/

  }

  /*body
  {
    background-image: url('./assets/3.png');
  }*/

</style>
