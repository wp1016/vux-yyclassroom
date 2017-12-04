import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const vux={
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward',
    title:'渔鱼课堂'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    updateTitle(state,payload){
      state.title=payload.title||'渔鱼课堂'
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
}


export default new Vuex.Store({
  modules:{
    vux
  }
})


