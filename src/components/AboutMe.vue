<template>
  <div id="sobre-mi ">
    <div class="information d-flex">

        <div class="image-image ">
        <img :src="aboutMe.image" alt="">
        </div>
        <div class="about-me-text ">
        <h1 class="sobre-mi">~ Sobre mi</h1>

            <p>{{aboutMe.aboutMe}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import Information from '../mock/Information'
export default {
  name: "AboutMe",
  data(){
      return({
          aboutMe: Information.aboutMySelf
      })
  }
};
</script>

<style scoped>
#sobre-mi {
  width: 100%;
  height: 100%;
}
.sobre-mi {
  font-size: 40px;
  color: #199dfd;
  padding: 30px;
}
.d-flex{
    display: flex;
    flex: 1;
}
.justify-center{
    justify-content: center;
}
.align-center{
    align-items: center;
}
.grow{
    flex-grow: 1;
}
.about-me-text{
    width: 600px;
    font-size: 23px;
  color: #005b9c;
    font-weight: 500;
}
.information{
    margin: 50px auto;
    width: 1300px;
    background:white;
    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.205);
}
</style>