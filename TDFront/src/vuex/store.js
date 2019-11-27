import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    mydata: []
  },
  mutations: {
    getData(state, res){
      state.mydata = res;
      console.log(state.mydata)
    }
  },
  actions: {              // 在 action 中创建方法使用 axios
    getData(context){
      Axios.get("http://127.0.0.1:8000/user")
        .then((res)=>{
          context.commit("getData", res)    // 获取到的数据传到 mutations 激活一下
        })
    }
  }
});

export default store
