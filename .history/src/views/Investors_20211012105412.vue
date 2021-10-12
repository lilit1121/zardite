<template>
  <div class="wrap-investors">
    <div class="wrap-name-investors">
      <h1>Investors</h1>
      <img src="../assets/divider-small-1.svg" alt="divider-small" />
      <p>
        <b>Transparency</b> is the cornerstone of our relations with investors
      </p>
    </div>
    <div class="inv-main-img">
      <img src="@/assets/images/investor/main-img-investor.svg" alt="img" />
    </div>
    <div class="name-des-investor">
      <h3>
        Our take on
        <p>Tokenomics</p>
      </h3>
      <img src="../assets/divider-small-2.svg" alt="divider-small" />
    </div>
    <div class="wrap-description">
      <div class="item-desc" v-for="item in dataInvestor" :key="item.id">
        <div class="left-part-desc">
          <
        </div>
        <div class="right-part-desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investors",
  dataInvestor: [
    {
      id: 1,
      name: "Zardite Token",
      description:
        "The means of payment for the APN is the Zardite Token. It is based on Ethereum, the most popular core for building blockchain systems, and follows the ERC-20 token standard. The value proposition of the Zardite Token is to be the crypto-currency of reference for in-game monetization and smart contracts within the gaming industry. The token will gradually be introduced and adopted through use cases, beginning with the Zardite Casino and Zardite Smart Games. Ethereum’s prominence grants the Zardite Token a wide spectrum of usage and integration capabilities.",
      img: "cents.svg",
    },
    {
      id: 2,
      name: "Zardite Wallet",
      description:
        "Zardite Wallet The Zardite Token and other currencies can be acquired within the APN through the Zardite Wallet. It will support all types of currencies, including popular crypto-currencies, and gives users a multitude of options for transactions. In addition to direct payments from the wallet itself, users can pay through SMS, email, or chat. The wallet uses human-readable addresses to facilitate easy-of use. It is available for Android and iOS, and can also be accessed through Z-Change.",
      img: "wallet.svg",
    },
    {
      id: 3,
      name: "Zardite Exchange",
      description:
        "Zardite Wallet The Zardite Token and other currencies can be acquired within the APN through the Zardite Wallet. It will support all types of currencies, including popular crypto-currencies, and gives users a multitude of options for transactions. In addition to direct payments from the wallet itself, users can pay through SMS, email, or chat. The wallet uses human-readable addresses to facilitate easy-of use. It is available for Android and iOS, and can also be accessed through Z-Change.",
      img: "exchange.svg",
    },
  ],
};
</script>

<style lang="css" scoped>
.wrap-investors {
  background: #e5e5e5;
}
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
.inv-main-img {
  text-align: center;
  margin-bottom: 89px;
}
.name-des-investor {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 43px;
}
.name-des-investor h3 {
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  color: #2b2b2b;
}
.name-des-investor h3 p {
  color: #a889ea;
  margin-left: 10px;
}
</style>