<template>
  <div class="team bg-gray" ref="refTeam">
    <div class="team-top-block w-50 text-center">
      <h1 class="title text-bold text-primary">We Are Zardite</h1>
      <img src="../assets/divider.svg" alt="divider" />
      <p class="team-info text-bold">
        The passionate few with a flare for gaming in their hearts and a vision
        to connect as many people as possible through social gaming.
      </p>
    </div>
    <div class="wrap-them-group">
      <div
        v-for="item in themData"
        :key="item.id + 'id'"
        class="team-member__block mb-115"
      >
        <div :data-aos="item.dataAOS" data-aos-duration="2000">
          <img
            :src="require(`@/assets/images/team/${item.img}`)"
            alt="team-member"
            width="275"
            class="img-team-user"
          />
          <p class="team-member__name">{{ item.name }}</p>
          <span class="team-member__profession">{{ item.position }}</span>
        </div>
      </div>
    </div>
    <div class="UsAtAGlance">
      <p class="us-at-glance text-center text-bold text-italic">
        Us at a glance
      </p>
      <img src="../assets/large-divider.svg" alt="divider" width="100%" />
    </div>
    <!--  -->
    <!--  -->
    <div v-for="(item, index) in themData" :key="item.id">
      <div
        v-if="index % 2 === 0"
        class="about-team flex-start-between flex-md-column"
      >
        <div>
          <div class="team-member">
            <div class="team-member__block left mb-115">
              <img
                :src="require(`@/assets/images/team/${item.img}`)"
                alt="team-member"
                class="img-team-user"
              />
              <p class="team-member__name">{{ item.name }}</p>
              <span class="team-member__profession">{{ item.position }}</span>
              <p class="team-member__info">
                {{ item.likeDescription }}
              </p>
            </div>
          </div>
        </div>

        <div class="message">
          <p class="message__content">
            {{ item.description }}
          </p>
          <div class="img-ic-des left">
            <img src="../assets/images/team/ic-des-left.png" alt="ic" />
          </div>
        </div>
      </div>
      <div v-else class="about-team flex-start-between flex-md-column-reverse">
        <div class="message">
          <p class="message__content box">
            {{ item.description }}
          </p>
          <div class="img-ic-des right">
            <img src="../assets/images/team/ic-des-right.png" alt="ic" />
          </div>
        </div>
        <div class="right-block">
          <div class="team-member">
            <div class="team-member__block">
              <img
                :src="require(`@/assets/images/team/${item.img}`)"
                alt="team-member"
                class="img-team-user"
              />
              <p class="team-member__name">{{ item.name }}</p>
              <span class="team-member__profession">{{ item.position }}</span>
              <p class="team-member__info">{{ item.likeDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      themData: [
        {
          id: this.uniqueId(),
          img: "Eugene.png",
          name: "Eugene Joseph",
          position: "CEO/Co-Founder",
          dataAOS:"zoom-in-down",
          likeDescription: "“Possesses unmatched zeal for the Zardite.”",
          description:
            "Eugene is the creator and founder of Zardite. Originally from a finance background and applying his skills in playing the market, he decided to transition to a different kind of gaming. Eugene enjoys seeing new places, engaging in new experiences, playing sports from football to squash and cycling.",
        },
        {
          id: this.uniqueId(),
          img: "Dimitri.png",
          name: "Dimitri Miles",
          position: "CTO/Co-Founder",
          dataAOS:"zoom-in-down",
          likeDescription: "“Man with a vision to lead”",
          description:
            "With a passion for gaming and technology, there was no question Dimitri wouldn't have taken up the opportunity to lead Zardite's technical vision.Previously, he led multidisciplinary teams at high profile technology companies including IBM, Vonage & Aristocrat. Dimitri's hobbies include military LARP, cars, flying and travelling. Apart from this, he is a man who is driven to make his dream a reality.",
        },
        {
          id: this.uniqueId(),
          img: "Tamara.png",
          name: "Tamara Korcak",
          position: "CSO/Cheif Strategic Officer",
          dataAOS:"zoom-in-down",
          likeDescription: "“Strategic and resourceful.”",
          description:
            "Tamara is a seasoned digital transformation professional with over 10 years of experience in strategy design and implementation from data driven environments, developing and implementing cross-functional softwares as a service solutions for organisations, both on buyer and seller side. In her current role, Tamara is enabling enterprise customers through digitally transformative solutions to grow and scale.",
        },
        {
          id: this.uniqueId(),
          img: "Shub.png",
          name: "Shubham Chouhan",
          position: "Visual/Communication Designer",
          dataAOS:"zoom-in-down",
          likeDescription: "“Gets adrenaline rush while talking about design.”",
          description:
            "Brainstorming ideas and and making calculated design decisions is Shubham’s cup of joe. Shubham is a Digital Graphic Designer with over 6 years of experience in design who has designed successful design solutions for a wide variety of brands and companies. An avid learner who loves to talk about the science and reasoning behind design.With a vision to create beautiful experiences that also appreciate functionality Shubham joined hands with Zardite.",
        },
        {
          id: this.uniqueId(),
          img: "Opey.png",
          name: "Opeyemi Agbeja",
          position: "Mobile Engineer",
          dataAOS:"zoom-in-down",
          likeDescription: "“Plays the role of a wizard in coding.”",
          description:
            "Mobile Engineer who’s been developing mobile applications for 4+years now. He started out as a front end web developer before moving to mobile applications . Apart from this, he loves to learn new things. He even plays pian in his free time and loves to hang out with his family whenever he’s not working.",
        },
        {
          id: this.uniqueId(),
          img: "Lasha.png",
          name: "Lasha Abazashvili",
          position: "Back-End Developer",
          dataAOS:"zoom-in-down",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lasha is Back-end developer who is super passionate about his job and craft - so much so, that even on his free time, he enjoys learning new things. He's also PlayStation and PC gamer, with a fondness for playing to a competitive level, when time permits. With his love for the gaming space and staying ahead of the curve in the software development, Zardite and Lasha have proven to be a perfect match. Outside of the tech space, Lasha enjoys travel and has great interest in ancient architecture.",
        },
        {
          id: this.uniqueId(),
          img: "Atanas.png",
          name: "Atanas",
          position: "Back-End Developer",
          dataAOS:"zoom-in-down",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: this.uniqueId(),
          img: "Joe.png",
          name: "Joe",
          position: "Back-End Developer",
          dataAOS:"zoom-in-down",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: this.uniqueId(),
          img: "Josh.png",
          name: "Josh",
          position: "Back-End Developer",
          dataAOS:"zoom-in-down",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: this.uniqueId(),
          img: "Karina.png",
          name: "Karina",
          position: "Back-End Developer",
          dataAOS:"zoom-in-down",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: this.uniqueId(),
          img: "Keith.png",
          name: "Keith",
          position: "Back-End Developer",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: this.uniqueId(),
          img: "Kirill.png",
          name: "Kirill",
          position: "Back-End Developer",
          likeDescription: "“A passionate man with a simple ideology”",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
.UsAtAGlance {
  margin-bottom: 124px;
}
.team {
  padding: 191px 0 70px;
}
.team-top-block {
  margin: auto;
  padding-bottom: 116px;
}
.wrap-them-group {
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.team-info {
  font-size: 30px;
  line-height: 35px;
  color: #535353;
  margin: 20px 18px 0;
}
.team-member__block {
  padding: 0 45px;
  text-align: center;
}
.team-member__name {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 47px;
  color: #7347d1;
  margin-top: 22px;
}
.team-member__profession {
  font-size: 20px;
  line-height: 32px;
}
.us-at-glance {
  font-size: 36px;
  line-height: 42px;
  color: rgba(43, 43, 43, 0.7);
  margin-bottom: 12px;
}
/* about team */
.about-team {
  flex-wrap: wrap;
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
}
.about-team > div {
  width: 47%;
}
.about-team .team-member__block {
  max-width: 410px;
  padding: 0;
}
.about-team .team-member__block.left {
  position: relative;
  padding: 0;
}
.about-team .team-member__block img {
  width: 100%;
}
.about-team .team-member__name {
  font-weight: bold;
  font-size: 40px;
  line-height: 63px;
  margin-top: 32px;
}
.about-team .team-member__profession {
  font-size: 24px;
}
.about-team .team-member__info {
  max-width: 413px;
  width: max-content;
  font-style: italic;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: rgba(43, 43, 43, 0.7);
  text-align: start;
  position: absolute;
  top: 65px;
  left: 80%;
}
.message {
  position: relative;
  background: rgba(196, 196, 196, 0.01);
  box-shadow: inset 0px 33.15px 47.6px -30.6px rgba(255, 255, 255, 0.5),
    inset 0px 5.95px 9.35px -3.4px #ffffff,
    inset 0px -69.7px 57.8px -54.4px rgba(96, 68, 145, 0.3),
    inset 0px 83.3px 85px -40.8px rgba(202, 172, 255, 0.3),
    inset 0px 3.4px 15.3px rgba(154, 146, 210, 0.3),
    inset 0px 0.85px 34px rgba(227, 222, 255, 0.2);
  border-radius: 102px;
}
.message .img-ic-des {
  z-index: 1;
  position: absolute;
  bottom: -60px;
}
.left {
  left: 87px;
}
.right {
  right: 87px;
}

.message__content {
  position: relative;
  z-index: 3;
  padding: 65px 67px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #422a69;
}
.about-team .right-block {
  max-width: 410px;
  position: relative;
}
.about-team .right-block .team-member__info {
  max-width: 410px;
  position: absolute;
  top: 17%;
  left: inherit;
  right: 59%;
  padding: 50px;
}
.img-team-user {
  width: 275px;
  border-radius: 50%;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
@media (max-width: 1500px) {
  .about-team {
    padding: 50px 35px 0;
  }
  .team-top-block.w-50 {
    width: 70%;
  }
  .about-team .team-member__block img {
    max-width: 350px;
  }
  .about-team .team-member__info {
    max-width: 300px !important;
  }
}
@media (max-width: 1300px) {
  .about-team .team-member__info {
    font-size: 20px !important;
  }

  .about-team .team-member__info {
    max-width: 231px !important;
  }
  .img-ic-des {
    display: none;
  }
  .left {
    left: unset;
  }
  .right {
    right: unset;
  }
}
@media (max-width: 1120px) {
  .about-team > div {
    width: 38%;
  }
  .message__content {
    padding: 40px;
    font-size: 16px;
  }
}
@media (max-width: 992px) {
  .team-info {
    font-size: 24px;
  }
}
@media (max-width: 900px) {
  .about-team .team-member__block img {
    max-width: 250px;
  }
  .message {
    border-radius: 20px;
  }
  .message__content {
    font-size: 14px;
    line-height: 25px;
    padding: 30px;
  }
}
@media (max-width: 768px) {
  .UsAtAGlance {
    margin: 0 !important;
  }
  .about-team > div {
    width: 100%;
  }
  .about-team {
    padding-bottom: 0px;
  }
  .team-member__block {
    margin-bottom: 25px;
  }
  .team-top-block {
    padding-bottom: 50px;
  }
  .team-member.mb-124 {
    padding-bottom: 25px;
  }
  .team-member.mb-115 {
    margin-bottom: 0;
  }
  .about-team .right-block .team-member__info {
    left: 65%;
    right: inherit;
    top: 5%;
  }
  .about-team .team-member__info {
    max-width: 250px !important;
  }
  .about-team .team-member__block {
    max-width: 320px;
  }
  .about-team .team-member__name {
    font-size: 31px;
    margin: 0;
  }
  .about-team .right-block .team-member__info {
    left: 58%;
    padding: 40px 0 0 0;
  }
  .about-team .team-member__info {
    left: 75%;
  }
  .about-team .team-member__profession {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .UsAtAGlance {
    margin-bottom: 20px;
  }
  .team {
    padding-top: 80px;
  }
  .team-info {
    font-size: 18px;
    line-height: 24px;
  }
  .team-member__name {
    margin-top: 16px;
    line-height: 36px;
  }
  .img-team-user {
    width: 220px;
  }
  .message__content {
    padding: 30px 25px;
    font-size: 16px;
  }
  .about-team .team-member__block {
    text-align: start;
  }
  .about-team {
    padding: 0px 20px;
  }
  /* .about-team .team-member__block img {
    max-width: 180px;
  } */
  .about-team .team-member__name {
    font-size: 30px;
    line-height: inherit;
    margin-top: 5px;
  }

  .about-team .team-member__info {
    max-width: 165px !important;
    font-size: 18px;
    line-height: 24px;
    left: 63%;
    top: 53px;
  }
  .about-team .right-block .team-member__info {
    padding: 0;
    left: 50%;
    right: inherit;
    top: 53px;
  }
  .message {
    /* border-radius: 50px; */
    margin-bottom: 25px;
  }
}
@media (max-width: 420px) {
  .about-team .right-block .team-member__info {
    left: 52%;
    top: 30px;
  }
  .about-team .team-member__info {
    left: 52%;
    font-size: 16px !important;
    top: 30px;
    width: 150px;
  }
  .about-team .team-member__name {
    font-size: 22px;
  }
  .about-team .team-member__profession {
    font-size: 16px;
  }
  .about-team .team-member__block img {
    max-width: 180px;
  }
}
</style>
