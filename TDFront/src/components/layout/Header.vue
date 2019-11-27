<template>
<div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      fixed
      app
    >
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>


      <v-spacer></v-spacer>

      <TDAddress/>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-app-bar>
</div>
</template>

<script>

  import TDAddress from "./TDAddress";

  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
    }),

    components:{
        TDAddress
    }
  }
</script>
