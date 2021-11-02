<template>
  <div class="wrap-investors" ref="refInvestors">
    <div class="wrap-name-investors">
      <h1>Investors</h1>
      <img src="../assets/divider-small-1.svg" alt="divider-small" />
      <p>
        <b>Transparency</b> is the cornerstone of our relations with investors
      </p>
    </div>
    <div class="inv-main-img">
      <img src="@/assets/images/investor/main-img-investor.png" alt="img" />
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
          <div class="img-logo-zardine">
            <img src="@/assets/images/investor/logo-zardine.svg" alt="logo" />
          </div>
          <h4>A word from the CEO</h4>
          <h3>Eugene Joseph</h3>
          <div class="img-user">
            <img
              src="@/assets/images/investor/En-Jos-investor.png"
              alt="img-user"
            />
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
    <div class="wrap-Get-in-touch">
      <div class="purple">
        <img src="@/assets/images/investor/purple.svg" alt="" />
      </div>
      <div class="Get-in-touch">
        <div class="Get-in-name">
          <h1>Get in Touch</h1>
          <img src="../assets/divider-small-2.svg" alt="" />
          <p>
            We're disrupting the gaming industry. We are excited to share our
            vision and story wtih you.
          </p>
        </div>
        <div class="wrap-input">
          <span>Name</span>
          <div class="input-div">
            <input type="text" />
            <img src="@/assets/ic-star.svg" alt="star" />
          </div>
        </div>
        <div class="wrap-input">
          <span>Email</span>
          <div class="input-div">
            <input type="email" pattern=".+@globex\.com" required />
            <img src="@/assets/ic-star.svg" alt="star" />
          </div>
        </div>
        <div class="wrap-contact-time">
          <div class="wrap-input">
            <span>
              Contact
              <p>(optimal)</p>
            </span>
            <div class="input-div">
              <img
                src="@/assets/images/investor/USA-Flag.svg"
                alt="flag"
                class="flag"
              />
              <input
                type="tel"
                v-model="phoneNumber"
                @input="generatorPhoneNumber"
                maxlength="12"
              />
            </div>
          </div>
          <div class="wrap-input">
            <span class="time-slot">
              Time Slot
              <p>(preferred)</p>
            </span>
            <div class="input-div time-div">
              <!-- <img src="@/assets/select-arrow.svg" alt="star" class="arrow" /> -->
              <input type="time" class="input-Time" />
            </div>
          </div>
        </div>
        <div class="wrap-input">
          <span>
            Profession
            <p>(Optional)</p>
          </span>
          <div class="input-div">
            <input type="text" />
          </div>
        </div>
        <div class="wrap-input">
          <span>Message</span>
          <div class="input-div">
            <textarea></textarea>
          </div>
        </div>
        <button>Send</button>
      </div>
    </div>

        <!--  -->
    <!--  -->
    <!--  -->
    <div class="wrap-droplet">
      <div class="blob">
        <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
        <svg
          class="blob_svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
          ></path>
        </svg>
      </div>
      <div class="droplet"></div>
      <div class="diamondMo">
        <img src="@/assets/images/investor/cross.svg" />
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "Investors",
  data() {
    return {
      phoneNumber: "",
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
  methods: {
    generatorPhoneNumber() {
      var x = this.phoneNumber
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phoneNumber = !x[2]
        ? x[1]
        : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    },
  },
};
</script>

<style lang="css" scoped>
.wrap-investors {
  overflow: hidden;
  padding-top: 106px;
  background: #e5e5e5;
}

.wrap-name-investors {
  text-align: center;
}
.wrap-name-investors h1 {
  font-size: 95px;
  background: linear-gradient(45.64deg, #6e5cd9 -28.9%, #ba88f6 93.13%);
  background-clip: text;
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
  border-radius: 65px;
  text-align: center;
  margin-bottom: 89px;
}
.inv-main-img img {
  border-radius: 65px;
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
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap-user-zardine-investor .wrap-user {
  width: 1154px;
  border-radius: 71px;
  padding-bottom: 210px;
  display: flex;
}

.user-investor-left-part {
  width: 50%;
  background: #fcfcfc;
  border-radius: 71px 0 0 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 131px 0 96px;
  text-align: center;
}
.user-investor-left-part h4 {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 300;
  font-size: 24px;
  line-height: 115.4%;
  color: #595959;
}
.user-investor-left-part h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 157.9%;
  color: #a889ea;
  margin-bottom: 20px;
}
.user-investor-right-part {
  width: 50%;
  background: linear-gradient(45.64deg, #6e5cd9 -28.9%, #ba88f6 93.13%);
  border-radius: 0 71px 71px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 20px;
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
.img-logo-zardine {
  margin: 36px 0 33px;
}
.wrap-Get-in-touch {
  padding: 112px 0 386px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.purple {
  position: absolute;
  bottom: -155px;
}
.Get-in-touch {
  z-index: 1;
  width: 860px;
  background: #f7f7f7;
  box-shadow: 0px 4px 37px rgba(0, 0, 0, 0.12);
  border-radius: 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 45px 88px;
}
.Get-in-name {
  text-align: center;
}
.Get-in-name h1 {
  font-size: 68px;
  background: linear-gradient(45.64deg, #6e5cd9 -28.9%, #ba88f6 93.13%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.Get-in-name p {
  margin: 15px 0 38px;
  width: 450px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 115.4%;
  color: #939393;
}
.wrap-input {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 34px;
}
.wrap-input .input-div {
  width: 82.5%;
  display: flex;
  background: #e4e6e7;
  padding: 0 23px 0 9px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}

.wrap-contact-time {
  display: flex;
}
.wrap-contact-time {
  width: 100%;
}
.time-slot {
  width: 89px;
  margin-left: 28px;
}
.wrap-contact-time .wrap-input .input-div {
  width: 65%;
}
.wrap-input .time-div {
  padding: 0 5px 0 9px;
}
.input-Time {
  color: #8e62d6;
}
.input-Time::-webkit-calendar-picker-indicator {
  margin-top: 5px;
  width: 20px;
  height: 20px;
  background: url("../assets/images/investor/ic-time.svg");
  background-repeat: no-repeat;
}
input {
  outline: none;
  font-size: 18px;
  width: 100%;
  height: 60px;
  border: none;
  background: #e4e6e7;
  border-radius: 20px;
  padding: 8px;
}

textarea {
  outline: none;
  width: 100%;
  height: 197px;
  resize: none;
  border: none;
  background: #e4e6e7;
  border-radius: 20px;
  padding: 8px;
}
.wrap-input span {
  padding-top: 8px;
  color: #3a393d;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}
.wrap-input p {
  font-weight: 200;
  font-size: 15px;
}
button {
  border: none;
  background: linear-gradient(180deg, #9a5dff 44.64%, #766fff 100%);
  width: 200.76px;
  height: 68.92px;
  color: #f5f1f8;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  border-radius: 50px;
  cursor: pointer;
}
.img-user {
  width: 196px;
}


/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
.wrap-droplet {
  background: url("../assets/images/investor/background-investor.png");
  position: relative;
  width: 100%;
  height: 600px;
}
.blob {
  position: absolute;
  /* top: 0;
  left: 0; */
  fill: #7047e2;
  width: 280px;
  z-index: 1;
  animation: move-blob 10s ease-in-out infinite;
  transform-origin: 100% 100%;
}
@keyframes move-blob {
  0%   {left:85%; top:-10%;}
  25%  {left:60%; top:65%; width: 180px;}
  50%  {left:10%; top:-3%;width: 250px;}
  75%  {left:-5%; top:60%;width: 210px;}
  100% {left:85%; top:-10%;width: 280px;}  
}
.droplet {
  position: absolute;
  background: #6036f1;
  border-radius: 2% 50%;
  height: 100px;
  margin: 150px;
  width: 100px;
  animation: move-droplet 10s ease-in-out infinite;
  /* transform-origin: 100% 100%; */
  z-index: 1;
  /* top: 0;
  left: 0; */
}
@keyframes move-droplet {
  0%   {left:-5%; top:50%;}
  25%  {left:85%; top:-20%;tr}
  50%  {left:50%; top:50%;}
  75%  {left:5%; top:-10%;}
  100% {left:-5%; top:50%;}  
}
.diamondMo {
  position: absolute;
  /* background: #6036f1; */
  width: 200px;
  height: 200px;
  animation: move-diamondMo 12s ease-in-out infinite;
  transform-origin: 100% 100%;
  z-index: 1;
  top: 0;
  left: 0;
}
@keyframes move-diamondMo {
  0%   {left:5%; top:-10%;}
  25%  {left:92%; top:70%;}
  50%  {left:70%; top:0%;}
  75%  {left:30%; top:60%;}
  100% {left:5%; top:-10%;}  
}
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
@media (max-width: 1500px) {
  .item-desc {
    height: unset;
  }
  .item-desc .left-part-desc {
    padding-bottom: 25px;
    padding-top: 25px;
  }
  .right-part-desc img {
    max-width: 50%;
  }
  .item-desc .left-part-desc h2 {
    font-size: 58px;
  }
}
@media (max-width: 1100px) {
  .wrap-user-zardine-investor {
    padding: 015px;
  }
  .Get-in-touch {
    margin: 0 15px;
  }
  .item-desc .left-part-desc h2 {
    font-size: 43px;
    margin-bottom: 20px;
  }
  .item-desc .left-part-desc p {
    font-size: 17px;
  }
  .user-investor-left-part {
    padding: 60px 0 70px;
  }
  .user-investor-left-part img {
    max-width: 70%;
  }
  .user-investor-right-part {
    padding: 60px 15px 20px;
  }
  .user-investor-right-part p {
    font-size: 22px;
  }
  .wrap-Get-in-touch {
    padding: 0 0 100px;
  }
}
@media (max-width: 900px) {
  .left-part-desc {
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .item-desc .left-part-desc h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .item-desc .left-part-desc p {
    font-size: 15px;
  }
  .right-part-desc img {
    width: 80%;
  }
}
@media (max-width: 830px) {
  .user-investor-right-part p {
    font-size: 18px;
  }
  .user-investor-left-part {
    padding: 60px 0 50px;
  }
  .user-investor-left-part img {
    max-width: 70%;
  }
  .wrap-contact-time {
    display: block;
  }
  .wrap-contact-time .wrap-input .input-div {
    width: 82.5%;
  }
  .time-slot {
    margin-left: unset;
  }
  .flag {
    width: 50px;
  }
  .arrow {
    width: 20px;
  }
  .user-investor-right-part {
    border-radius: 0 20px 20px 0;
  }
  .user-investor-left-part {
    border-radius: 20px 0 0 20px;
  }
  .Get-in-touch {
    border-radius: 20px;
  }
  .wrap-Get-in-touch {
    padding: 0 0 150px;
  }
  button {
    border-radius: 20px;
    height: 50px;
  }
}
@media (max-width: 630px) {
  .wrap-user-zardine-investor .wrap-user {
    width: 100%;
    padding-bottom: 130px;
    display: block;
  }
  .wrap-user-zardine-investor {
    padding: unset;
  }

  .user-investor-left-part {
    width: 100%;
    border-radius: 0;
  }
  .user-investor-right-part {
    border-radius: 0;
    width: 100%;
  }
  .item-desc .left-part-desc p {
    width: 100%;
  }
  .item-desc .left-part-desc {
    width: 100%;
    padding: 25px 15px;
  }
  .item-desc .left-part-desc h2 {
    width: 100%;
  }
  .Get-in-touch {
    margin: 0;
    border-radius: 0;
    width: 100%;
    padding: 45px 15px 30px;
  }
  .wrap-input {
    display: block;
    margin-bottom: 20px;
  }
  .wrap-input span {
    padding: 0;
    display: flex;
    align-items: center;
  }
  input {
    height: 40px;
  }
  textarea {
    height: 150px;
  }
  .wrap-input span p {
    margin-left: 10px;
  }
  .wrap-input .input-div {
    width: 100% !important;
    border-radius: 12px;
  }
  .wrap-name-investors h1 {
    font-size: 60px;
  }
  .wrap-name-investors img {
    max-width: 50%;
  }
  .wrap-name-investors p {
    margin: 20px auto;
    font-size: 20px;
  }
  .name-des-investor h3 {
    font-size: 22px;
  }
  .name-des-investor img {
    max-width: 80%;
  }
  .item-desc .right-part-desc {
    display: none;
  }
  .Get-in-name h1 {
    font-size: 40px;
  }
  .Get-in-name img {
    max-width: 60%;
  }
  .Get-in-name p {
    font-size: 15px;
    margin: 15px 0 20px 0;
    width: 100%;
  }
  .wrap-Get-in-touch {
    padding: 0;
  }
  .wrap-input span {
    font-size: 15px;
  }
  .wrap-input p {
    font-size: 12px;
  }
  .wrap-contact-time .wrap-input .input-div {
    width: 75.5%;
  }
  button {
    height: 40px;
    font-size: 20px;
    border-radius: 12px;
  }
  .wrap-description {
    padding: 0;
  }
}
@media (max-width: 380px) {
  .inv-main-img {
    margin-bottom: 34px;
  }
  .wrap-name-investors h1 {
    font-size: 40px;
  }
  .wrap-user-zardine-investor {
    background: unset;
  }
  .user-investor-left-part img {
    width: 50%;
  }
  input {
    height: 40px;
  }
  textarea {
    height: 150px;
  }
  .wrap-input {
    display: block;
  }
  .wrap-contact-time .wrap-input .input-div {
    width: 100%;
  }
  .wrap-input .input-div {
    width: 100%;
  }
  .purple {
    display: none;
  }
  .wrap-user {
    padding: 0 !important;
  }
}
</style>