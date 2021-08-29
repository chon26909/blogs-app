import axios from 'axios'

const state = () => ({
  dataPosts: [],
})

const mutations = {
  setDataPost(state, data) {
    state.dataPosts = data
  },
  addDataPost(state, newPost) {
    console.log('newPost', newPost)
    state.dataPosts.push(newPost)
  },
}

const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const res = await axios.get(
        'https://nuxt-blogs-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      let data = []

      for (const key in res.data) {
        data.push({
          ...res.data[key],
          id: key,
        })
      }
      return commit('posts/setDataPost', data)
    } catch (e) {
      console.log(e)
    }
  },
  async create({ commit }, data) {
    commit('addDataPost', data)
    await axios.post(
      'https://nuxt-blogs-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      data
    )
  },
}

export default {
  state,
  mutations,
  actions,
}
