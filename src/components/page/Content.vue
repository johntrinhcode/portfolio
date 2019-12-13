<template>
  <div id="content" class="overflow-scroll">
      <div v-if="codeView">
          <div class="text-white p-4">
          code
          </div>
      </div>

      <div v-if="photoView">
          photo
      </div>

      <div v-if="contactView">
          contact
      </div>
  </div>
</template>

<script>
export default {
    name: "Content",
    props: {
        mode: {
            required: true,
        }
    },
    computed: {
        codeView() {
            return this.mode === "code";
        },
        photoView() {
            return this.mode === "photo";
        },
        contactView() {
            return this.mode === "contact";
        }
    }

}
</script>

<style>
#content {
    height: 85vh;
}
</style>