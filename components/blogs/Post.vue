<template>
    <b-card
      :title="post.title"
      :img-src="post.image"
      :img-alt="post.title"
      img-top
      tag="article"
      class="img-card"
    >
      <b-card-text>
        {{ post.content }}
      </b-card-text>
    </b-card>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style>
.img-card {
  margin: 10px 0;
}
.img-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
