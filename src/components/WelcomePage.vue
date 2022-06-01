<template>
  <div id="first">
    <div id="my-name" class="c-white">
      <p class="bienvenido c-white">Bienvenido</p>
      <p class="soy c-white">Soy</p>
      <pre class="c-white">{{aboutMe.name}}
{{aboutMe.lastname}}</pre
      >
    </div>
    <div class="github">
        <h3>Github</h3>
        <div class="github-card">
            <div class="g-card">
            <p>Followers</p>
            <p class="large">{{github.followers}}</p>
            </div>
            <div class="g-dividor"></div>
            <div class="g-card">
            <p>Followers</p>
            <p class="large">{{github.public_repos}}</p>
            </div>
        </div>
        <a href="https://github.com/Veronelli"><p style="display:table;margin:0px auto; border-bottom:1px solid white">Veronelli</p></a>
    </div>
  </div>
</template>

<script>
import Information from "../mock/Information";
import github from "../services/github";
export default {
  name: "WelcomePage",
  data() {
    return {
      aboutMe: Information.aboutMySelf,
      github: {}
    };
  },
  async mounted(){
      this.github = await github.getUser("Veronelli");
      console.log(this.github)
  }
};
</script>

<style>
#first{
    background: #199DFD;
    width: 100%;
    height: 100%;
}
#my-name{
    position: absolute;
    z-index: 100;
    bottom: 0px;
    margin: 50px;
}
.c-white{
    color:white;
}
.bienvenido{
    font-size: 48px;
    font-weight: bold;
}
.soy, #my-name > pre{
    font-size: 128px;
    font-weight: 900;
}
.github{
    position: absolute;
    display: table;
    right: 0px;
    bottom: 0px;
    margin: 70px;
}
.github>*{
    color: white;
    font-weight: 500;
    text-align: center;
}
.github-card{
    display: flex;
    align-items: center;
}
.g-card>p{
    font-size: 20px;
}
.github>h3:first-child{
    font-size: 32px;
}
.g-dividor{
   width: 1px;
   height: 50px;
   background: white; 
   margin: .5rem 1rem;
}
.g-card>.large{
    font-size: 30px;
}
</style>