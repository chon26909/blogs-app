import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      dataPosts: [],
    },
    mutations: {
      setPostData(state, data) {
        state.dataPosts = data
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        axios
          .get(
            'https://nuxt-blogs-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
          )
          .then((res) => {
            let data = []

            for (const key in res.data) {
              arr.push({
                ...res.data[key],
                id: key,
              })
            }
            vuexContext.commit('setPostData', data)
          })
          .catch((e) => context.error(e))
      },
    },
    getters: {
      getAllPosts(state) {
        return state.dataPosts
      },
    },
  })
}

export default createStore
