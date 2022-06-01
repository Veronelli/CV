<template>
  <div>
    <div
      class="splide"
      role="group"
      aria-label="Splide Basic HTML Example"
      disabled
    >
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <welcome-page></welcome-page>
          </li>
          <li class="splide__slide">
            <self-information></self-information>
          </li>
          <li class="splide__slide d-flex justify-center align-center bg-blue">
            <about-me></about-me>
          </li>
          <li class="splide__slide">
            <about-knowledge></about-knowledge>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  height: 10000px;
}
.about-me {
  padding: 50px 0px;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
}
.d-flex{
    display: flex;
}
.justify-center{
    justify-content: center;
}
.align-center{
    align-items: center;
}
.splide {
  height: calc(100vh - 45px);
}
.bg-blue{

  background: #199dfd;
}
</style>

<script>
import WelcomePage from "../components/WelcomePage.vue";
import SelfInformation from "../components/SelfInformation.vue";
import AboutMe from "../components/AboutMe.vue";
import AboutKnowledge from "../components/Knowledge.vue"

import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

export default {
  name: "HomeView",
  components: {
    // SeparatorStyle,
    SelfInformation,
    // CarrouselCard,
    WelcomePage,
    AboutMe,
    AboutKnowledge
  },
  data() {
    return {
      splide: {},
    };
  },
  mounted() {
    this.splide = new Splide(".splide", {
      direction: "ttb",
      height: "100%",
      wheel: true,
      arrows: false,
      speed: 900,
      gap: 60,
    }).mount();
  },
};
</script>
