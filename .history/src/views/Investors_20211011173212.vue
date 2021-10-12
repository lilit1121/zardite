<template>
  <div class="wrap-investors">
    <div class="wrap-name-investors">
      <h1>Investors</h1>
      <img src="../assets/divider-small.svg" alt="divider-small" />
      <p><b>Transparency</b> is the cornerstone of our relations with investors</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investors",
};
</script>

<style lang="css" scoped>
.wrap-name-investors{
    margin: 0 auto;
}
.wrap-name-investors h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrap-name-investors p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 115.4%;
  text-align: center;
  color: #535353;
}
</style>