<template>
  <div id="app">
    <Navbar :show-transparent-navbar="$route.path==='/'" />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
@import "assets/css/style.css";
</style>
