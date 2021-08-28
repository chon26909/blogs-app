<template>
  <div>
    <b-container>
      <b-row class="mt-3">
        <b-col sm="4" v-for="_post in data" :key="_post.id">
          <Post :post="_post" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Post from '@/components/blogs/Post'

export default {
  components: {
    Post,
  },
  props: ['data'],
}
</script>

<style></style>
