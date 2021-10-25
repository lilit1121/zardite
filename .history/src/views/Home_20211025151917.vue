<template>
  <div ref="refHome">
    <div class="home flex">
      <div class="home-content text-center">
        <img
          src="../assets/images/home/home-z.svg"
          alt="icon-z"
          class="mb-22"
        />
        <h1 class="title text-light-gray">
          The comfort of finding cool amazing people at your fingertips
        </h1>
        <div class="mb-22">
          <img
            src="../assets/DownloadNow.svg"
            alt="download"
            width="498"
            class="download-now"
          />
        </div>
        <div>
          <img
            src="../assets/icons/app-store.svg"
            alt="app-store"
            class="mx-12 app-store"
            width="235"
          />
          <img
            src="../assets/icons/google-play.svg"
            alt="google-play"
            class="mx-12 google-play"
            width="235"
          />
        </div>
      </div>
    </div>
    <div class="about bg-gray">
      <div class="about-content text-center">
        <div class="flex-start-center">
          <img src="../assets/images/left-line.svg" alt="line" />
          <h2 class="title text-primary text-bold text-italic">
            We are a social gaming company
          </h2>
          <img src="../assets/images/right-line.svg" alt="line" />
        </div>
        <p class="about-content__info">
          Zardite aims to facilitate the evolution of gaming & social gaming -
          both industry and community. Our core values in everything we believe
          in and who we are;- Inclusivity, Diversity and Sincerity in
          Simplicity.
        </p>
      </div>
    </div>
    <div class="flex flex-sm-column flex-md-column">
      <div class="our-vision about-block text-center w-50 bg-primary">
        <h2 class="about-block__title text-bold text-italic">Our Vision</h2>
        <img src="../assets/images/home/mission-icon.svg" alt="mission-icon" />
        <p>
          Our vision is to revolutionise the gaming community, where everyone
          can belong and thrive.
        </p>
      </div>
      <div class="our-mission about-block text-center w-50 bg-secondary">
        <h2 class="about-block__title text-bold text-italic">
          Values we live by
        </h2>
        <img src="../assets/images/home/vision-icon.svg" alt="vision-icon" />
        <p>
          Our mission is to empower every gamer and gaming content-creator, on
          any platform, to achieve more.
        </p>
      </div>
    </div>
    <div class="more-info bg-gray">
      <div class="wrapper">
        <div class="more-info__top-block text-center">
          <h2 class="title text-italic text-primary text-bold">
            It’s all sorted with Zardite.
          </h2>
          <img src="../assets/divider.svg" alt="divider" />
        </div>
        <div
          class="
            more-info__content
            flex-center-between flex-sm-column flex-md-column
          "
        >
          <div class="w-50 mb-md-25">
            <img src="../assets/images/home/more-info-1.svg" alt="more-info" />
          </div>
          <div class="more-info__content-right-block">
            <h2 class="more-info__content-title">
              Grasping Next-Generation Social Gaming
            </h2>
            <p class="more-info__content-info">
              We will collect various streams of real-time data, to better to
              understand what the customers want, helping improving processes
              and products. We will do this by providing a better understanding
              of what it means to be a gamer, social gamer and "non-gamer",
              within proximities to their respective communities.
            </p>
          </div>
        </div>
        <div
          class="
            more-info__content
            flex-center-between flex-sm-column-reverse flex-md-column-reverse
          "
        >
          <div class="more-info__content-right-block">
            <h2 class="more-info__content-title">
              User- Segmentation Like Never Before
            </h2>
            <p class="more-info__content-info">
              Organization and managing of data, in a single pane of glass,
              using machine learning for segmentation and profiling, balancing
              the need for individuality and freedom of expression, while
              adhering to key principle in retention of structure and
              harmoniousness.
            </p>
          </div>
          <div class="w-50 mb-md-25">
            <img src="../assets/images/home/more-info-2.svg" alt="more-info" />
          </div>
        </div>
        <div
          class="
            more-info__content
            flex-center-between flex-sm-column flex-md-column
          "
        >
          <div class="w-50 mb-md-25">
            <img src="../assets/images/home/more-info-3.svg" alt="more-info" />
          </div>
          <div class="more-info__content-right-block">
            <h2 class="more-info__content-title">API & Data Optimized</h2>
            <p class="more-info__content-info">
              Our uninque way of optimising and personalising data, delivered
              through fully-scalable open API architecture, will help to add
              value, smarter gamer experience in the future and eliminate
              inefficiences in gaming innovation production. Architecture
              designed to synergise with, correlate and drive existing and
              future data streamlines. Fine-tuned compartmentalization and
              free-flowing channels, allowing for smarter uniformity in aid of
              artistry and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sign-up">
      <div class="sign-up__form">
        <h2>We don’t bother unless it’s something cool</h2>
        <p>
          Sign up to Zardite mail for the unknown and amazing that might seem
          like a mysterious dimension.
        </p>
        <form>
          <label>
            <input type="text" placeholder="Name" />
          </label>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <router-link to="">Sign Up</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations } from 'vuex';
export default {
  name: "home",
  data(){
    return{
      scrollYPos: "",
      scrollYHeight: "",
    }
  },
  methods: {
    ...mapMutations(["changeHorizonPositionScroll"]),
    knowScrollPosition() {
      this.scrollYPos = window.scrollY;
      this.scrollYHeight = this.$refs.refHome.scrollHeight;
      this.changeHorizonPositionScroll(
        (this.scrollYPos* 100) / (this.scrollYHeight - 887) 
      );
    },    
  },
  created() {
      window.addEventListener("scroll", this.knowScrollPosition);
    },
    destroyed()

    }
};
</script>
<style scoped>
/* home */
.home {
  background: url("../assets/images/home/home-bg-2.png") no-repeat center center;
  background-size: cover;
  background-clip: content-box;
  width: 100%;
  height: 100vh;
  align-items: center;
}
.home .title {
  margin: 21px 0 82px;
}
.home-content {
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
}
.download-now {
  margin: 0 25px;
}
/* about */
.about {
  padding: 126px 0;
}
.about-content {
  max-width: 1100px;
  width: 100%;
  margin: auto;
}
.about-content .title {
  font-weight: 700;
  margin: 0 20px;
}
.about-content__info {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #9e9e9e;
  margin: 30px 105px 0;
}
/* our vision */
.about-block {
  padding: 99px 0 153px;
}
.about-block__title {
  font-size: 50px;
  line-height: 61px;
}
.our-vision h2,
.our-vision p {
  color: #f0f0f0;
}
.our-mission h2,
.our-mission p {
  color: #424242;
}
.about-block p {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 92px 225px 0;
}
/* more info */
.more-info {
  padding: 81px 0;
}
.more-info .title {
  font-weight: 700;
}
.more-info__top-block {
  margin-bottom: 86px;
}
.more-info__content-right-block {
  max-width: 565px;
  width: 100%;
}
.more-info__content-title {
  font-weight: 700;
  font-size: 60px;
}
.more-info__content-info {
  font-weight: 500;
  font-size: 20px;
  color: #272727;
  margin-top: 37px;
}
.more-info__content {
  margin-bottom: 24px;
}
.more-info__content:last-child {
  margin-bottom: 0;
}
/* sign up */
.sign-up {
  background: url("../assets/sign-up-bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 1354px;
  position: relative;
}
.sign-up__form {
  max-width: 449px;
  width: 100%;
  background: rgba(223, 223, 223, 0.5);
  backdrop-filter: blur(108px);
  border-radius: 45px;
  padding: 55px 40px 94px;
  position: absolute;
  right: 13%;
  top: 24%;
}
.sign-up__form h2 {
  font-weight: bold;
  font-size: 33px;
  color: #000059;
  margin-bottom: 26px;
}
.sign-up__form p {
  margin-right: 30px;
  margin-bottom: 20px;
}
.sign-up__form form {
  display: flex;
  flex-direction: column;
}
.sign-up__form form input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d6d6d6;
  margin: 12px 0;
  padding-bottom: 10px;
}
.sign-up__form form input:focus {
  outline: none;
}
.sign-up__form form input::-webkit-input-placeholder {
  color: #d6d6d6;
  padding-bottom: 10px;
}
.sign-up__form .router-link-exact-active {
  font-weight: bold;
  font-size: 33px;
  color: #000059;
  margin-top: 20px;
  text-decoration: none;
}
.app-store,
.google-play {
  cursor: pointer;
}
@media (max-width: 1600px) {
  .about-block p {
    margin: 92px 100px 0;
  }
  .more-info__content-right-block {
    max-width: 503px;
  }
  .more-info__content-title {
    font-size: 50px;
  }
  .more-info__content-info {
    font-size: 18px;
  }
  .about-block__title {
    font-size: 43px;
  }
}
@media (max-width: 1430px) {
  .about-block__title {
    font-size: 40px;
  }
  .more-info__content-title {
    font-size: 45px;
  }
  .about-block {
    padding: 60px 0;
  }
  .about-block img {
    max-width: 300px;
  }
  .about-block p {
    margin: 40px 50px 0;
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .more-info__content-right-block {
    width: 40%;
  }
}
@media (max-width: 992px) {
  .home .title {
    margin: 21px 25px 60px;
  }
  .about-block p {
    margin: 40px;
  }
  .more-info__content-title {
    font-size: 22px;
  }
  .about-content {
    padding: 0 20px;
  }
}
@media (max-width: 768px) {
  .about-content img {
    max-width: 70px;
  }
  .about-block.w-50 {
    width: 100%;
  }
  .more-info__content-right-block {
    max-width: 85%;
  }
}
@media (max-width: 600px) {
  .home {
    height: 550px;
  }
  .home-content > img {
    max-width: 80px;
  }
  .home .title {
    margin: 0 0 40px;
  }
  .download-now {
    max-width: 250px;
  }
  .app-store,
  .google-play {
    max-width: 150px;
  }
  .about {
    padding: 50px 20px;
  }
  .about-content__info {
    margin: 20px 0 0;
    font-size: 15px;
    line-height: 20px;
  }
  .about-block {
    padding: 50px 20px;
  }
  .more-info__content-right-block {
    max-width: inherit;
  }
  .about-block p {
    margin: 20px 20px 0;
    font-size: 18px;
  }
  .more-info {
    padding: 50px 0;
  }
  .more-info__content-title,
  .about-block__title {
    font-size: 28px;
  }
  .more-info__top-block {
    margin-bottom: 26px;
  }
  .sign-up {
    height: 800px;
  }
  .sign-up__form {
    max-width: inherit;
    width: auto;
    right: inherit;
    padding: 35px 24px;
    margin: 0 20px;
  }
  .sign-up__form .router-link-exact-active,
  .sign-up__form h2 {
    font-size: 26px;
  }
}
@media (max-width: 500px) {
  .about-content {
    padding: 0;
  }
  .sign-up {
    background: #6e5cd9;
    height: 550px;
  }
  .sign-up__form {
    top: 7%;
  }
  .about-content .title {
    margin: 0;
  }
}
@media (max-width: 400px) {
  .home-content > img {
    max-width: 65px;
  }
  .title {
    font-size: 17px;
  }
}
</style>
