<template>
  <div id="self-information">
    <div class="informacion">
      <h1>~ Información</h1>
    </div>
    <div class="sobre justify-center">
      <div class="profile d-flex grow justify-center">
        <img :src="aboutMySelf.profile" alt="" />
      </div>
      <div class="info d-flex grow justify-center">
        <table>
          <tbody>
            <tr>
              <td class="datos">Datos</td>
            </tr>
            <tr v-for="(item, i) in aboutMySelf.informations" v-bind:key="i">
              <td>{{ item.label }}</td>
              <td>{{ item.data }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info d-flex grow justify-center">
        <ul class="aptitudes">
          <h1>Aptitudes</h1>
          <li v-for="(item, index) in aboutMySelf.aptitudes" v-bind:key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#self-information {
  margin: 0px auto;
  width: 100%;
  height: 100%;
}
.informacion {
  height: 25%;
}
.informacion > h1 {
  font-size: 40px;
  color: #199dfd;
  padding: 30px;
}
.sobre {
  display: flex;
  align-items: center;
}
.aptitudes{
  background: #0195ff;
  padding: 20px;
  width: 300px;
  height: 360px;
}
.aptitudes>*{
  list-style: none;
  color: white;
  font-size: 20px;
  padding-top: .5rem;
  padding-bottom: .2rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, 0.137);
}
.aptitudes>h1{
  font-size: 23px;
  font-weight: 900;
  padding-bottom: .8rem;
  padding-top:.5rem;
}
.aptitudes>li:last-child{
  border-bottom: none;
  
}
table {
  border-collapse: collapse;
  background: #0195ff;
  border: 20px solid #0195ff;
  height: 400px;
}
tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.137);
}
tr > * {
  font-size: 20px;
  color: white;
}
tr > td:nth-child(1) {
  font-weight: 900;
}
.grow {
  flex-grow: 1;
  margin: 10px;
}
.justify-center {
  justify-content: center;
}
.d-flex {
  display: flex;
}
.datos {
  font-size: 23px;
}
</style>
<script>
import Profile from "../mock/Profile";
import Information from "../mock/Information";

export default {
  name: "SelfInformation",
  data() {
    return {
      aboutMySelf: Information.aboutMySelf,
      profile: Profile,
    };
  },
  computed: {
    fullName() {
      return `${this.aboutMySelf.name} ${this.aboutMySelf.lastname}`;
    },
  },
};
</script>
