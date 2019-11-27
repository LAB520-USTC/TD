<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          color="deep-purple accent-4"
          depressed
          v-on="on"
        >
          {{title}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="clickButton(item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        items:['南七里','M-78星云','木星','金星'],
        title: "南七里",
        on:null
      }
    },
      methods:{
        clickButton(item)
        {
            this.title=item
        }
      }
  }

</script>

<style scoped>

</style>
