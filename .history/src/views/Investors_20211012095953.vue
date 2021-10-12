<template>
  <div class="wrap-investors">
    <div class="wrap-name-investors">
      <h1>Investors</h1>
      <img src="../assets/divider-small.svg" alt="divider-small" />
      <p>
        <b>Transparency</b> is the cornerstone of our relations with investors
      </p>
    </div>
    <div class="inv"></div>
  </div>
</template>

<script>
export default {
  name: "Investors",
};
</script>

<style lang="css" scoped>
.wrap-name-investors {
  text-align: center;
}
.wrap-name-investors h1 {
  font-size: 95px;
  background: linear-gradient(45.64deg, #6e5cd9 -28.9%, #ba88f6 93.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrap-name-investors p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 115.4%;
  text-align: center;
  color: #535353;
  width: 50%;
  margin: 56px auto 45px;
}
</style>