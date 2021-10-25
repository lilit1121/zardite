<template>
  <div id="app" ref="refapp">
    <Navbar :show-transparent-navbar="$route.path === '/'" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mapMutations } from "vuex";
export default {
  components: { Footer, Navbar },
  data() {
    return {
      scrollYPos: "",
      scrollYHeight: "",
    };
  },
  methods: {
    ...mapMutations(["changeHorizonPositionScroll"]),
    knowScrollPosition() {
      this.scrollYPos = window.scrollY;
      this.scrollYHeight = this.$refs.refapp.scrollHeight;
      this.changeHorizonPositionScroll(
        (this.scrollYPos * 100) / (this.scrollYHeight - 935)
      );
    },
  },
  created() {
    window.addEventListener("scroll", this.knowScrollPosition);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap");
@import "assets/css/style.css";
</style>
