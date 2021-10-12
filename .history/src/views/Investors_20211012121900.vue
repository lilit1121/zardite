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
      <div
        class="item-desc"
        v-for="item in dataInvestor"
        :key="item.id"
        :class="{ revert: item.revert }"
      >
        <div class="left-part-desc" :style="{ background: item.bc }">
          <h2 :style="{ color: item.nameColor }">{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <div class="right-part-desc">
          <img
            :src="require(`@/assets/images/investor/${item.img}`)"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div class="wrap-user-zardine-investor">
      <div class="wrap-user">
        <div class="user-investor-left-part">
          <div>
            <img src="@/assets/images/investor/logo-z.svg" alt="logo-z" />
          </div>
          <div>
            <img src="@/assets/images/investor/logo-zardine.svg" alt="logo" />
          </div>
          <h4>A word from the CEO</h4>
          <h3>Eugene Joseph</h3>
          <div>
            <img src="@/assets/images/investor/En-Jos-investor.svg" alt="img-user" />
          </div>
        </div>
        <div class="user-investor-right-part">
          <p>
            Zardite is dedicated to providing a safe, reliable, and efficient
            payment platform for users. The Zardite Payment Network will give
            individuals and companies the right flexibility to match the
            fast-growing gaming industry, while supplying the security needed to
            guarantee smooth and global operations. This is a large undertaking
            and the project is expected to evolve over time. Not all features
            will be readily available at launch, but we are determined to
            deliver our platform as soon as possible.We prefer to approach the
            release of our product through step-by-step implementation,
            beginning with the launch and wide-adoption of the Zardite Token.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investors",
  data() {
    return {
      dataInvestor: [
        {
          id: 1,
          name: "Zardite Token",
          description:
            "The means of payment for the APN is the Zardite Token. It is based on Ethereum, the most popular core for building blockchain systems, and follows the ERC-20 token standard. The value proposition of the Zardite Token is to be the crypto-currency of reference for in-game monetization and smart contracts within the gaming industry. The token will gradually be introduced and adopted through use cases, beginning with the Zardite Casino and Zardite Smart Games. Ethereum’s prominence grants the Zardite Token a wide spectrum of usage and integration capabilities.",
          img: "cents.svg",
          bc: "#A889EA",
          nameColor: "#4D3484",
          revert: false,
        },
        {
          id: 2,
          name: "Zardite Wallet",
          description:
            "Zardite Wallet The Zardite Token and other currencies can be acquired within the APN through the Zardite Wallet. It will support all types of currencies, including popular crypto-currencies, and gives users a multitude of options for transactions. In addition to direct payments from the wallet itself, users can pay through SMS, email, or chat. The wallet uses human-readable addresses to facilitate easy-of use. It is available for Android and iOS, and can also be accessed through Z-Change.",
          img: "wallet.svg",
          bc: "#EA8989",
          nameColor: "#492519",
          revert: true,
        },
        {
          id: 3,
          name: "Zardite Exchange",
          description:
            "Zardite Wallet The Zardite Token and other currencies can be acquired within the APN through the Zardite Wallet. It will support all types of currencies, including popular crypto-currencies, and gives users a multitude of options for transactions. In addition to direct payments from the wallet itself, users can pay through SMS, email, or chat. The wallet uses human-readable addresses to facilitate easy-of use. It is available for Android and iOS, and can also be accessed through Z-Change.",
          img: "exchange.svg",
          bc: "#F179B2",
          nameColor: "#742249",
          revert: false,
        },
      ],
    };
  },
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
.wrap-description {
  padding-bottom: 77px;
}
.revert {
  flex-direction: row-reverse;
}
.item-desc {
  display: flex;
  width: 100%;
  height: 965px;
}
.item-desc .left-part-desc {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item-desc .left-part-desc h2 {
  width: 74%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 74px;
  line-height: 115.4%;
  margin-bottom: 37px;
}
.item-desc .left-part-desc p {
  width: 74%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 156.9%;
  color: #f2f2f2;
}
.item-desc .right-part-desc {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap-user-zardine-investor {
  background: url("../assets/images/investor/investor-liners.svg");
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap-user-zardine-investor .wrap-user {
  width: 1154px;
  border-radius: 71px;
  padding-bottom: 300px;
  display: flex;
}

.user-investor-left-part {
  width: 50%;
  background: #fcfcfc;
  border-radius: 71px 0 0 71px;
}
.user-investor-left-par h4{

}
.user-investor-left-par 
.user-investor-right-part {
  width: 50%;
  background: linear-gradient(45.64deg, #6e5cd9 -28.9%, #ba88f6 93.13%);
  border-radius: 0 71px 71px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 0;
}
.user-investor-right-part p {
  width: 453px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 115.4%;
  color: #f2f2f2;
}
</style>