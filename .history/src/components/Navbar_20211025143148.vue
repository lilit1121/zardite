<template>
  <div
  style="position: fixed, width: 100%"
    :class="{
      'bg-gray pos-fix-nav': !showTransparentNavbar,
      'main-navbar': showTransparentNavbar,
      'pos-fix-nav': showMobileMenu,
    }"
  >
    <header class="header wrapper">
      <nav class="flex-center-between">
        <div @click="showMobileMenu = false">
          <router-link to="/" v-if="!showTransparentNavbar">
            <img src="../assets/logo1.svg" alt="logo" class="header-logo" />
          </router-link>
          <router-link to="/" v-else>
            <img
              v-if="showMobileMenu || GET_HORIZON_POSITION_SCROLL &&"
              src="../assets/logo1.svg"
              alt="logo"
              class="header-logo"
            />
            <img
              v-if="!showMobileMenu"
              src="../assets/images/logo-white.svg"
              alt="logo"
              class="header-logo"
            />
          </router-link>
        </div>
        <ul
          class="menu flex menu-md-none"
          :class="showTransparentNavbar ? 'menu-white-color' : ''"
        >
          <li class="menu__item">
            <router-link to="/404">Downloads</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/ecosystem">Ecosystem</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/team">The Team</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/investors">Investors</router-link>
          </li>
        </ul>
        <div
          v-if="!showTransparentNavbar"
          class="menu-icon"
          @click="showMobileMenu = !showMobileMenu"
        >
          <img src="../assets/menu.png" alt="menu-icon" width="40" />
        </div>
        <div v-else class="menu-icon" @click="showMobileMenu = !showMobileMenu">
          <img
            v-if="!showMobileMenu"
            src="../assets/menu-white-icon.svg"
            alt="menu-icon"
            width="40"
          />
          <img
            v-if="showMobileMenu"
            src="../assets/menu.png"
            alt="menu-icon"
            width="40"
          />
        </div>
        <transition name="slide">
          <ul
            class="menu flex"
            v-if="showMobileMenu"
            :class="{
              'show-mobile-menu flex-center-center pos-fix': showMobileMenu,
            }"
          >
            <li class="menu__item" @click="showMobileMenu = !showMobileMenu">
              <router-link to="/404">Downloads</router-link>
            </li>
            <li class="menu__item" @click="showMobileMenu = !showMobileMenu">
              <router-link to="/ecosystem">Ecosystem</router-link>
            </li>
            <li class="menu__item" @click="showMobileMenu = !showMobileMenu">
              <router-link to="/team">The Team</router-link>
            </li>
            <li class="menu__item" @click="showMobileMenu = !showMobileMenu">
              <router-link to="/investors">Investors</router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </header>
    <div class="horizonScroll">
      <div :style="`width: ${GET_HORIZON_POSITION_SCROLL}`"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "Navbar",
  data() {
    return {
      showMobileMenu: false,
      horizonPositionScroll:"30%"
    };
  },
  props: {
    showTransparentNavbar: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
    ...mapGetters(["GET_HORIZON_POSITION_SCROLL"])
  }
};
</script>

<style scoped>
.header {
  position: relative;
  padding-top: 25px;
  padding-bottom: 25px;
}
.horizonScroll {
  position: fixed;
  height: 5px;
  width: 100%;
}
.horizonScroll div {
  height: 5px;
  background: #a889ea;
}
.show-mobile-menu {
  background-image: radial-gradient(
    circle,
    #e5e5e5,
    #d4ceeb,
    #c6b5f0,
    #b99cf2,
    #af82f2
  );
  position: absolute;
  top: 94px;
  left: 0;
  width: 100%;
  height: calc(100vh - 74px);
  padding: 0;
  z-index: 9999;
}
.show-mobile-menu .menu__item {
  padding: 10px 20px;
}
.slide-enter-active {
  transition-duration: 0.4s;
}
.slide-leave-active {
  transition-duration: 0.4s;
}
.slide-enter-to,
.slide-leave {
  max-height: 100vh;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 1px;
}
.menu__item {
  padding: 0 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.menu__item a {
  color: #323232;
  text-decoration: none;
}
.main-navbar {
  position: fixed;
  width: 100%;
  background: transparent;
}
.menu-white-color .menu__item a {
  color: #f1f1f1;
}
.menu-icon {
  display: none;
}
.header .router-link-exact-active.router-link-active {
  font-weight: 800;
  color: #8f63d6;
}
.pos-fix {
  position: fixed;
}
.pos-fix-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #e5e5e5;
}
@media (max-width: 1600px) {
  .header-logo {
    max-width: 140px;
  }
}
@media (max-width: 992px) {
  .menu-icon {
    display: block;
  }
  .menu-md-none {
    display: none;
  }
}
@media (max-width: 600px) {
  .show-mobile-menu {
    top: 75px;
    z-index: 6;
  }
  .header {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .header-logo {
    max-width: 110px;
  }
}
</style>
