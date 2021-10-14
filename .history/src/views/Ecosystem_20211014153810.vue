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
              alt="vector"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-items-ecosystem">
      <div
        v-for="item in dataItemsEcosystem"
        :key="item.id"
        class="item-ecosystem"
      >
        <div class="ecosystems-text-part">
          <div class="ecosystems-divide-img">
            <img
              src="@/assets/images/ecosystem/divider-ecosystem-items.svg"
              alt="divider"
            />
          </div>
          <div class="name-item-ecosystem">{{ item.name }}</div>
          <p class="text-item-ecosystem">{{item.description}}</p>
        </div>
        <div class="ecosystems-img-part">
          <div
            class="item-images"
            v-for="item in item.imgGroup"
            :key="item.id"
            :style="item.posImg"
          >
            <img
              :src="require(`@/assets/images/ecosystem/${item.img}`)"
              alt="img"
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
      dataItemsEcosystem: [
        {
          id: this.uniqueId(),
          name: "E-sports",
          description:
            "E-Sports describes the world of competitive, organized video gaming. Competitors from different leagues or teams face off in the same games that are popular with at-home gamers: Fortnite, League of Legends, Counter-Strike, Call of Duty,Overwatch and Madden NFL, to name a few. These gamers are watched and followed by millions of fans all over the world, who attend live events or tune in on TV or online. Streaming services like Twitch allow viewers to watch as their favorite gamers play in real time, and this is typically where popular gamers build up their fandoms.",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-1.png",
              posImg:"z-index: 3; top: 5.7vw; right: 2.5vw;",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-2.png",
              posImg:"z-index: 2;top: -2vw;",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-3.png",
              posImg:"z-index: 1; top: 2vw; left: -6.9vw;",
            },
          ],
        },
        {
          id: this.uniqueId(),
          name: "Augmented and Virtual Reality",
          description:
            "Whereas virtual reality replaces your vision, augmented reality adds to it. AR devices, such as the Microsoft HoloLens and various enterprise-level 'smart glasses',are transparent, letting you see everything in front of you as if you are wearing a weak pair of sunglasses. The technology is designed for free movement, while projecting images over whatever you look at. The concept extends to smartphones with AR apps and games, such as Pokemon Go, which use your phone's camera to track your surroundings and overlay additional information on top of it, on the screen. Pokemon Go projects a Pokemon on your screen, on top of whatever the camera is looking at.VR would become a social norm in near future.Oculus was acquired by Facebook, showing the possibility of integrated VR within the social platform. Since most of the people worldwide have moved from their office into their home, online cooperation has never been quite as important as it is now.Through VR, we can significantly augment the quality of online interactions both in business and private dealings. VR has become a social norm, making it one of the leading innovations in digital cooperation.",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-4.png",
              posImg:"z-index: 3; top: -2vw;",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-5.png",
              posImg:"z-index:2; top: 4vw;left: -6vw;",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-6.png",
              posImg:"z-index:2;top: 3vw; left: 4.6vw;",
            },
          ],
        },
        {
          id: this.uniqueId(),
          name: "Music",
          description:
            "Music is inevitably important within video games. Games such as FIFA and Madden have specially curated playlists whilst the player is at the menus of the game. These playlists include a range of artists from around the world, and have often spawned the next breakout star. Artists such as The Black Keys, Lorde and Avicii have all featured on FIFA at some point.Grime star Stormzy is set to take a starring role in the forthcoming video game Watch Dogs: Legion. The Glastonbury headliner appears as a fictional version of himself in the game, which is set in a dystopian near-future London that has been taken over by a rogue government.Katy Perry, on the other hand, has 4 different costumes and her song was made specifically for the game.A special event held at Long Beach California was held called the Final Fantasy Brave Exvius FFBE Fan Festa 2018, announcing an update alongside Katy’s appearance and song original song Immortal Flame to be included in the game.In April 2020, rapper and singer-songwriter Travis Scott held an in-game, real-time concert on Fortnite called “Astronomical”- complete with tour dates, a virtual stage constructed on an island, and surreal visuals for the players who logged in to attend. The Fortnite concert drew 12.3 million viewers, further confirming a universal truth in this industry: gamers seek social interaction",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-7.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-8.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-9.png",
              posImg:"",
            },
          ],
        },
        {
          id: this.uniqueId(),
          name: "Gambling",
          description:
            "Online gambling generally means the use of internet to place bets and earn money. It is similar to playing in a casino but the difference is that it is held in a virtual environment. This includes playing of poker, sport games, casino games, etc.Video games are becoming increasingly monetized with the addition of in-game purchasing options, which has prompted some comparisons of these products to electronic gaming machines. The expansion and sophistication of ‘microtransaction’ options in online games (e.g., ‘loot boxes’) has also led to concerns about vulnerable users (e.g., adolescents) overspending In video games, a loot box (also called a loot/prize crate) is a consumable virtual item which can be redeemed to receive a randomised selection of further virtual items, or loot, ranging from simple customization options for a player's avatar or character, to game-changing equipment such as weapons and armor.",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-10.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-11.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-12.png",
              posImg:"",
            },
          ],
        },
        {
          id: this.uniqueId(),
          name: "Art & Storytelling",
          description:
            "Everything about the game, like the environment, the characters, the rules and the gameplay, can be opportunities to tell the story. This makes game writing extremely collaborative, technical and iterative. These unassumingly simple techniques give us a common language with which to communicate across the various disciplines of art, game design, and programming found collectively in video game development. Deluxe collector's editions of games, which offer additional components beyond a box and a disc. Deluxe editions can get very elaborate and expensive, including special metal cases, statues, DVDs with documentaries, art books, cloth maps and other items, with prices ranging up to $200 and beyond. The variety of items in collector's editions has even included night-vision goggles, remote-controlled vehicles, and other 'practical' items.",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-13.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-14.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-15.png",
              posImg:"",
            },
          ],
        },
        {
          id: this.uniqueId(),
          name: "Social Gaming",
          description:
            "Despite many countries easing lockdown restrictions as vaccines become available, the idea of games integrating more social features will not only become a trend but eventually a requirement. While new features, graphics, or the story of a particular game can be the springboard of interest for gamers, the social interactions and bonds created in-game often linger even long after gameplay is over.Online games can often transcend the digital world, impacting real-life connections and creating larger communities- strangers who were once opponents can become real-life friends or even lovers.Having said this, social gaming, or the category of games that facilitate social interaction, has been identified as one of the key trends in the gaming industry for 2021. Like Fortnite’s series of concerts, many games will expand into a metaverse—a digital space where real-world events and experiences such as fashion shows, music performances, movie viewings, and more are possible. These inherently non-gaming events can potentially draw in non-gamers, increasing users’ number of a particular game.",
          imgGroup: [
            {
              id: this.uniqueId(),
              img: "ecosystem-img-16.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-17.png",
              posImg:"",
            },
            {
              id: this.uniqueId(),
              img: "ecosystem-img-18.png",
              posImg:"",
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
.wrap-items-ecosystem {
  padding: 167px 90px 67px;
  border-bottom: 1px solid #bababa;
}
/* .ecosystems-divide-img{
  width: 100%;
}
.ecosystems-divide-img img{
  width: 100%;
} */
.item-ecosystem {
  display: flex;
  margin-bottom: 300px;
}
.ecosystems-text-part {
  width: 50vw;
}
.ecosystems-img-part {
  width: 50vw;
}
.name-item-ecosystem {
  margin: 25px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 115.4%;
  color: #4b4b4b;
}
.text-item-ecosystem{
   width: 86%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 130.4%;
  color: #4b4b4b;
}
.ecosystems-img-part{
  position: relative;
}
.item-images{
  position: absolute;
  width: 39vw;
}
</style>
