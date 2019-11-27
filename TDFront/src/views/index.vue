<template>
  <v-app class="home">
    <Header/>
    <v-content>

        <router-view/>

    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default {
  name: 'index',
  components: {
    Footer,
    Header
  }
}
</script>
