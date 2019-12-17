<template>
  <div id="content" class="overflow-scroll">
    <transition name="fade" mode="out-in">
      <Code v-if="codeView" @unset-current-project="unsetCurrentProject" @set-current-project="e => setCurrentProject(e)" />
      <Photo v-if="photoView" />
      <div v-if="contactView">contact</div>
    </transition>
  </div>
</template>

<script>
import Code from "./Code.vue";
import Photo from "./Photo.vue";

export default {
  name: "Content",
  props: {
    mode: {
      required: true
    }
  },
  components: {
    Code,
    Photo
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
  },
  methods: {
    unsetCurrentProject() {
      this.$emit("unset-current-project");
    },
    setCurrentProject(project) {
      this.$emit("set-current-project", project);
      console.log("hit");
    }
  }
};
</script>

<style>
#content {
  height: 85vh;
}
</style>
