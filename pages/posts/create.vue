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
      await this.$store.dispatch('posts/create',postData)
      this.$router.push("/")
    },
  },
}
</script>

<style></style>
