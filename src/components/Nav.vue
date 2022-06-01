<template>
  <div id="navbar">
    <div class="navbar">
      <router-link to="/" class="flex">
        <p class="home">Home</p>
      </router-link>
      <router-link to="/" class="flex">
        <p class="sobre-mi">Sobre mi</p>
      </router-link>
      <div class="dividor"></div>
      <router-link to="/about" class=""
        ><h3 class="download-cv">Curriculum</h3></router-link
      >
    </div>
  </div>
</template>

<style>
* {
  text-decoration: none;
}
.dividor {
  width: 1px;
  height: 25px;
  margin: 0% 10px;
  background: rgb(255, 255, 255);
}
.top-nav {
  padding: 10px 0px;
}
.home-icon {
  width: 35px;
  margin-left: 5px;
}
.home {
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-left: 40px;
}
.sobre-mi{
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-left: 15px;

}
.grow {
  flex-grow: 1;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
#navbar {
  width: 100%;
  position: sticky;
  z-index: 10000;

  top: 0px;
  background: #199DFD;
  
}
.name {
  text-align: center;
}
.navbar {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.144);
}
.download-cv {
  color: white;
  display: table;
  font-weight: 700;
  font-size: 20px;
}
</style>

<script>
import AllIcons from "../mock/AllIcons";

export default {
  name: "NavBar",
  data() {
    return {
      homeIcon: AllIcons.home,
    };
  },
  mounted() {},
};
</script>