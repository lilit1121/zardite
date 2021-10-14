<template>
  <div class="bg-gray">
    <div class="top-section">
      <h1 class="title text-bold text-center text-primary">
        The Gaming Ecosystem
      </h1>
      <img src="../assets/divider.svg" alt="" width="1342" class="mb-22" />
      <p class="top-section__info">
        <span class="text-bold">Video gaming</span> is one of the biggest
        avenues of entertainment in current times. Highly addictive, fun and
        engaging. It has evolved into this mammoth industry that directly rivals
        the movie industry.
      </p>
    </div>
    <div class="social-gaming-section text-center">
      <h3>Social gaming at a glance</h3>
      <p>
        With users engaging for 51 minutes daily, video gaming is now more
        engaging than any social media outlet (Facebook, Snapchat, and
        Instagram). It's a top engagement digital platform globally.
      </p>
    </div>
    <div class="wrap-globus">
      <div class="img-globus">
        <img src="@/assets/images/ecosystem/globus.svg" alt="world" />
      </div>
      <div
        v-for="item in dataGlobus"
        :key="item.id"
        :style="item.itemPosition"
        class="item-info-globus"
      >
        <div :class="{ colRev: item.colRev }">
          <div :style="item.infoPosition" class="item-info">
            <div class="globus-des">{{ item.description }}</div>
            <div class="globus-price">
              <span :style="{ color: item.colorGreen }">{{ item.$ }}</span
              ><span>{{ item.price }}</span
              ><span :style="{ color: item.colorYellow }">{{ item.b }}</span>
            </div>
            <div class="valuta" :style="{ color: item.colorGreen }">
              {{ item.bilion }}
            </div>
          </div>
          <div class="img-vector">
            <img
              :src="require(`@/assets/images/ecosystem/${item.img}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ecosystem",
  data() {
    return {
      dataGlobus: [
        {
          id: 1,
          price: "200.8",
          $: "$",
          b: "B",
          bilion: "Billion USD",
          description: "Video Game Market Global Revenue by 2023",
          img: "vector-1.svg",
          itemPosition: "top: 11vw; left: 18vw;",
          infoPosition: "right: 12vw; bottom: 6vw",
          colRev: false,
          colorGreen: "#0DA364",
          colorYellow: "#dabc57",
        },
        {
          id: 2,
          price: "98.9",
          $: "$",
          b: "B",
          bilion: "Billion USD",
          description: "Social Gaming Expected Revenue by 2024",
          img: "vector-2.svg",
          itemPosition: "top: 8vw; right: 14vw;",
          infoPosition: "left: 12vw;top: 1.5vw;",
          colRev: true,
          colorGreen: "#0DA364",
          colorYellow: "#dabc57",
        },
        {
          id: 3,
          price: "474",
          $: "",
          b: "M",
          bilion: "Million and counting...",
          description: "Esports audience size in 2021",
          img: "vector-3.svg",
          itemPosition: "bottom: 19vw; right: 15vw;",
          infoPosition: "left: 12.5vw;top: 2.5vw;",
          colRev: true,
          // colorGreen: "#0DA364",
          colorYellow: "#0DA364",
        },
        {
          id: 4,
          price: "77.2",
          $: "$",
          b: "B",
          bilion: "Billion USD",
          description: "Mobile Gaming 2020 Revenue",
          img: "vector-4.svg",
          itemPosition: "bottom: 13vw; left: 15vw;",
          infoPosition: "bottom: 2vw;right: 12vw;",
          colRev: false,
          colorGreen: "#0DA364",
          colorYellow: "#dabc57",
        },
      ],
      dataItmsEcosystem: [
        {
          id: this.uniqueId(),
          name: "",
          description: "E-sports
E-Sports describes the world of competitive, organized video gaming. Competitors from different leagues or teams face off in the same games that are popular with at-home gamers: Fortnite, League of Legends, Counter-Strike, Call of Duty,
Overwatch and Madden NFL, to name a few. These gamers are watched and followed by millions of fans all over the world, who attend live events or tune in on TV or online. Streaming services like Twitch allow viewers to watch as their favorite gamers play in real time, and this is typically where popular gamers build up their fandoms.
",
          imgGroup: [
            {
              id:this.uniqueId(),
              img:"ecosystem-img-1.svg",
            },
            {
              id:this.uniqueId(),
              img:"ecosystem-img-2.svg",
            },
            {
              id:this.uniqueId(),
              img:"ecosystem-img-3.svg",
            },
            ],
        },
      ],
    };
  },
  methods: {
    uniqueId() {
      return Date.now() + Math.random();
    },
  },
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-size: 95px;
}
@media (max-width: 880px) {
  .title {
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
  box-shadow: inset 0px 83.3px 85px -40.8px rgba(202, 172, 255, 0.2),
    inset 0px 3.4px 15.3px rgba(154, 146, 210, 0.2),
    inset 0px 0.85px 34px rgba(227, 222, 255, 0.2);
  border-radius: 71px;
  margin: auto;
  padding: 26px 92px 40px;
}
.social-gaming-section h3 {
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #af82f2;
  margin-bottom: 25px;
}
.social-gaming-section p {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #8b8999;
}
.wrap-globus {
  margin-top: 9.5vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-globus {
  width: 51vw;
  z-index: 1;
}
.colRev {
  position: relative;
}
.item-info {
  position: absolute;
}
.item-info-globus {
  position: absolute;
  width: 20.5vw;
}
.item-info-globus span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 5vw;
  line-height: 141.9%;
  color: #646464;
}
.globus-des {
  width: 17vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 115.4%;
  color: #2b2b2b;
  text-align: center;
}
.valuta {
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 1.5vw;
}
</style>
