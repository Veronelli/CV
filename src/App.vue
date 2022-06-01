<template>
  <!-- <CardContainer></CardContainer> -->
  <Nav></Nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
hr{
  width: 80%;
  display: block;
  border:.5px solid  black;
  margin: 0% auto ;
}
*,body{
  margin: 0px;
  font-family: 'Inter', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100%;
  display: block;
  margin: 0px auto;
}

</style>

<script>
// import CardContainer from './components/CardContainer.vue'
import Nav from './components/Nav.vue'
export default{
  components:{
    // CardContainer,
    Nav
  }
}
</script>
