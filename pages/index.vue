<template>
  <div>
    <PostLists :data="data_posts" />
  </div>
</template>

<script>
import axios from 'axios'
import PostLists from '@/components/blogs/PostLists'
export default {
  components: {
    PostLists,
  },
  data() {
    // return {
    //   data_posts : [],
    // }
  },
  computed: {
    data_posts() {
        return this.$store.posts.dataPosts;
    }
  }
//   mounted() {
//     this.getDataPost()
//   },
//   methods: {
//     async getDataPost() {
//       const res = await axios.get(
//         'https://nuxt-blogs-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
//       )
//       let arr = []

//       for (const key in res.data) {
//         console.log(key)
//         console.log(res.data[key])
//         arr.push({
//           ...res.data[key],
//           id: key,
//         })
//       }

//       this.data_posts = arr
//     },
//   },
}
</script>
