<template>
  <FormCreate @data="submitted" />
</template>

<script>
import FormCreate from '@/components/admin/FormCreate'
import axios from 'axios'
export default {
  components: {
    FormCreate,
  },
  methods: {
    async submitted(postData) {
      await axios.post(
        'https://nuxt-blogs-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData
      )
      await this.$router.push("/")
    },
  },
}
</script>

<style></style>
