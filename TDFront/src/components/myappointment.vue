<template>
  <div class="text-center">
    <v-btn rounded color="primary" dark @click="initD">Rounded Button</v-btn>
    {{a}}
  </div>
</template>

<script>

  import TDAddress from "./layout/TDAddress";

  export default {
      data() {
          return {
              a: null
          }
      },
      components:{
        TDAddress
      },
      methods:{
          initD: function () {
            this.$axios.get('http://xuezhen.natapp1.cc/user')
              .then(response => (this.a = response.data))
              .catch(function(err){
                console.log(err);
              });
          }
      }
  }
</script>

<style scoped>

</style>
