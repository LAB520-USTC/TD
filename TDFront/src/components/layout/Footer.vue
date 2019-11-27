<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="blue"
    fixed
    app
  >
    <v-btn @click="appointment()">
      <span>预约上课</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn @click="myappointment()">
      <span>我的预约</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn @click="my()">
      <span>个人信息</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  import '@mdi/font/css/materialdesignicons.css'
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
    methods:{
        appointment(){
            this.$router.push({path: "/appointment"});
        },
        myappointment(){
            this.$router.push({path: "/myappointment"})
        },
        my(){
            this.$router.push({path: "/my"})
        }
    }
  }
</script>
