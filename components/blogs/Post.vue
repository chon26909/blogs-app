<template>
  <div>
    <b-card
      :title="post.title"
      :img-src="post.image"
      :img-alt="post.title"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ post.content }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style></style>
