<template>
  <div id="nv" @scroll="handleScroll">
    <b-navbar toggleable="lg" type="dark" variant="" :class="[isActive?'red':'green']" fixed="top" class="h-auto">
      <b-navbar-brand href="#" class="" style="padding-right: 0px"><img src="../assets/logo.png" class="d-block img-fluid" style="max-height: 40px" alt="logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="text-center">
        <b-navbar-nav>
          <b-nav-item><router-link :to="'/'">Home</router-link></b-nav-item>
          <b-nav-item><router-link :to="'/contact'">Contact</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "NavigationPage",
        data(){
            return {
                isActive:false
            }
        },

        methods: {
            handleScroll () {
                // Any code to be executed when the window is scrolled
                if (window.scrollY < 50)
                {
                    this.isActive=false
                }
                else {
                    this.isActive=true
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }

    }
</script>

<style scoped>
  .red{
    background-color:red;
  }
  .green{
    background-color:green;
  }
</style>
