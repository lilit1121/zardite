<template>
  <div class="bg-gray">
    <div class="top-section">
      <h1 class="title text-bold  text-center text-primary">The Gaming Ecosystem</h1>
      <img src="../assets/divider.svg" alt="" width="1342" class="mb-22" />
      <p class="top-section__info">
        <span class="text-bold">Video gaming</span> is one of the biggest avenues of entertainment in current times. Highly addictive, fun and engaging.
        It has evolved into this mammoth industry that directly rivals the movie industry.
      </p>
    </div>
    <div class="social-gaming-section text-center">
      <h3>Social gaming at a glance</h3>
      <p>
        With users engaging for 51 minutes daily, video gaming is now more engaging than any social media outlet
        (Facebook, Snapchat, and Instagram). It's a top engagement digital platform globally.
      </p>
    </div>
    <div
  </div>
</template>

<script>
export default {
  name: "Ecosystem"
}
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-size: 95px;
}
@media (max-width: 880px) {
  .title{
    font-size: 11vw;
  }
}
.top-section {
  width: 72%;
  margin: auto;
  padding-top: 89px;
  text-align: center;
}
.top-section__info {
  max-width: 905px;
  margin: 0 auto 55px;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #535353;
}
.social-gaming-section {
  max-width: 732px;
  background: rgba(196, 196, 196, 0.01);
  box-shadow: inset 0px 83.3px 85px -40.8px rgba(202, 172, 255, 0.2), inset 0px 3.4px 15.3px rgba(154, 146, 210, 0.2), inset 0px 0.85px 34px rgba(227, 222, 255, 0.2);
  border-radius: 71px;
  margin: auto;
  padding: 26px 92px 40px;
}
.social-gaming-section h3 {
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #AF82F2;
  margin-bottom: 25px;
}
.social-gaming-section p {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #8B8999;
}
</style>
