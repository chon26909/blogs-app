<template>
  <div class="bg-form-create">
    <b-container class="pt-4">
      <b-form @submit.prevent="submitForm()">
        <h3 class="text-center">สร้างบทความ</h3>
        <b-form-group label="ชื่อบทความ">
          <b-form-input type="text" v-model="form.title" />
        </b-form-group>
        <b-form-group label="รายละเอียดบทความ">
          <b-form-textarea rows="5" v-model="form.content" />
        </b-form-group>
        <b-form-group label="ลิงค์รูปภาพ">
          <b-form-input type="text" v-model="form.image" />
        </b-form-group>
        <b-form-group label="ผู้แต่ง">
          <b-form-input type="text" v-model="form.author" />
        </b-form-group>
        <b-row>
          <b-col>
            <b-button variant="success" block type="submit">สร้าง</b-button>
          </b-col>
          <b-col>
            <b-button variant="light" block type="reset">ล้าง</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        image: '',
        author: '',
      },
    }
  },
  methods: {
    submitForm() {
      this.$emit('data', this.form)
    },
  },
}
</script>

<style></style>
