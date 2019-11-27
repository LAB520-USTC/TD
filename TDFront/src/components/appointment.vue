<template>
  <div >
    <v-tabs
      background-color="indigo"
      dark
      centered
      grow
      v-model="tab"
      slider-size="2"
      style="position: fixed;z-index: 1;font-family:  Monaco, Courier, monospace;font-size: 5px;"
      >
        <v-tab
        v-for="item in items"
        :key="item"
        :href="'#tab-' + item.time"
        >
        {{item.time}}
        </v-tab>
    </v-tabs>
    <v-tabs></v-tabs>
    <v-tabs-items
    v-model="tab"
    style="font-family: 'Trebuchet MS', sans-serif"
    >
        <v-tab-item
        v-for="item in items"
        :key="item"
        :value="'tab-' + item.time"
        >
          <v-card
          class="mx-auto"
          max-width="500"
          v-for="k in 3"
          :key="k">
            <v-img
              class="white--text align-end"
              height="200px"
              v-bind:src=item.imgsrc
            >
            <v-card-title>{{item.name}}</v-card-title>
            </v-img>
            <v-container class="grey lighten-5"
            >
              <v-row
                class="mb-6"
                dense
                no-gutters
                style="height: 7px"
              >
                <v-col
                  :cols=4
                >
                  <div style="font-family:Dialog">PF:ZHANGZO</div>
                </v-col>
                <v-col
                  :cols=3
                >
                  <div style="font-size: 12px"><div style="padding-top: 5px;color: #ff2d1f">训练强度:中等</div></div>
                </v-col>
                <v-col
                  :cols=3
                >
                  <div style="color: orangered;font-size: 20px">￥149.00</div>
                </v-col>
                <v-col
                  :cols=2
                >
                  <v-btn color="#ff2d1f" dark tile small>
                    预约{{k}}
                  </v-btn>
                </v-col>
              </v-row>
              <v-row
                class="mb-6"
                no-gutters
                style="height: 7px"
              >
                <v-col
                  :cols=5
                >
                    <v-icon
                      small
                    >mdi-clock-outline</v-icon>
                    <span style="color: #797673">10:20-11:45</span>
                </v-col>
                <v-col
                  :cols=2
                >
                  <div style="color: #c9302c">vol.1</div>
                </v-col>
                <v-col
                  :cols=2
                >
                  <v-icon
                      x-small
                    >mdi-coffee-outline</v-icon>
                  <span style="font-size: 10px;color: #9e9e9e">空闲</span>
                </v-col>
                <v-col
                  :cols=3
                >
                  <div style="float: right">剩余:<span style="color: #ac2925">42</span>位</div>
                </v-col>
              </v-row>
              <v-row
                class="mb-6"
                no-gutters
                style="height: 7px"
              >
                <v-col
                  :cols=6
                >
                  <div><span style="color: #797673">DJ:</span>GEOGRE</div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
    export default {
        name: "appointment",
        data(){
            return{
                tab:null,
              items:[
                {
                    time:"wed",
                    name:'class1',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"thu",
                    name:'class2',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"fri",
                    name:'class3',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"sat",
                    name:'class4',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"sun",
                    name:'class5',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"mon",
                    name:'class6',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                },
                {
                    time:"tue",
                    name:'class7',
                    imgsrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                }
              ]
            }
        }
    }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
