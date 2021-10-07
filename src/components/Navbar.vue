<template>
  <div class="bg-gray">
    <header class="header wrapper">
      <nav class="flex-center-between">
        <div>
          <img src="../assets/logo1.svg" alt="logo" class="header-logo" />
        </div>
        <ul class="menu flex menu-md-none">
          <li class="menu__item">
            <router-link to="/downloads">Downloads</router-link>
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
        <div class="menu-icon" @click="showMobileMenu = !showMobileMenu">
          <img src="../assets/menu.png" alt="menu-icon" width="40" />
        </div>
        <transition name="fade">
          <ul class="menu flex" v-if="showMobileMenu" :class="showMobileMenu ? 'show-mobile-menu' : ''">
            <li class="menu__item" @click="showMobileMenu = !showMobileMenu">
              <router-link to="/downloads">Downloads</router-link>
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
        </transition>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.header {
  position: relative;
  padding-top: 25px;
  padding-bottom: 25px;
}
.show-mobile-menu {
  position: absolute;
  width: 100%;
  background-color: bisque;
  display: block;
  /*height: calc(35vh - 106px);*/
  top: 95px;
  left: 0;
  padding: 10px 0;
  transition: 2s all ease;
}
.show-mobile-menu .menu__item {
  padding: 10px 20px;
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
.menu-icon {
  display: none;
}
.header .router-link-exact-active.router-link-active {
  font-weight: 800;
  color: #8F63D6;
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
