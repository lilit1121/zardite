<template>
  <footer class="footer">
    <div class="wrapper flex flex-start-between">
      <ul class="footer-menu flex">
        <li class="footer-menu__item">
          <router-link to="/downloads">Privacy Policy</router-link>
        </li>
        <li class="footer-menu__item">
          <router-link to="/ecosystem">Terms of Use</router-link>
        </li>
        <li class="footer-menu__item">
          <router-link to="/team">Data Usage</router-link>
        </li>
        <li class="footer-menu__item">
          <router-link to="/investors">F.A.Q</router-link>
        </li>
        <li class="footer-menu__item">
          <router-link to="/investors">Careers</router-link>
        </li>
      </ul>
      <ul class="footer-icons flex">
        <li class="footer-icons__item">
          <a href="">
            <img src="../assets/icons/instagram.svg" alt="instagram-icon"  />
          </a>
        </li>
        <li class="footer-icons__item">
          <a href="">
            <img src="../assets/icons/twitter.svg" alt="twitter-icon"  />
          </a>
        </li>
        <li class="footer-icons__item">
          <a href="">
            <img src="../assets/icons/facebook.svg" alt="facebook-icon"  />
          </a>
        </li>
      </ul>
    </div>
    <p class="copyright">Copyright 2021 Zardite LLC. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  padding: 57px 0 36px;
  background: #121212;
  color: #F4F4F4;
}
/* .footer-menu__item {

} */
.footer a {
  text-decoration: none;
}
.footer-menu__item a {
  font-weight: 600;
  font-size: 16px;
  line-height: 157.9%;
  color: #F4F4F4;
  padding: 0 50px;
}
.footer-menu__item:first-child a {
  padding-left: 0;
}
.footer-icons {
  margin-bottom: 34px;
}
.footer-icons__item {
  padding: 0 13px;
}
.footer-icons__item:last-child {
  padding-right: 0;
}
.copyright {
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
@media (max-width: 1400px) {
  .footer-menu__item a {
    padding: 0 25px;
  }
}
@media (max-width: 992px) {
  .footer .wrapper {
    flex-direction: column;
  }
  .footer-menu {
    margin-bottom: 20px;
  }
}
@media (max-width: 768px) {
  .footer-menu {
    flex-direction: column;
  }
  .footer-menu__item  a {
    display: block;
    padding: 0 0 15px;
  }
}
@media (max-width: 600px) {
  .footer {
    padding: 50px 0 30px;
  }
  .footer-icons__item:first-child {
    padding-left: 0;
  }
}
</style>
