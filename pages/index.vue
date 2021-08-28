<template>
  <div>
    <PostLists :data="dataPosts" />
  </div>
</template>

<script>
import axios from 'axios'
import PostLists from '@/components/blogs/PostLists'
export default {
  components: {
    PostLists,
  },
  computed: {
    dataPosts() {
        return this.$store.getters.getAllPosts;
    }
  }
}
</script>
