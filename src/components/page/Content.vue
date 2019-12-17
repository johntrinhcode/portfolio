<template>
  <div id="content" class="overflow-scroll w-full h-full">
    <transition name="fade" mode="out-in">
      <Code v-if="codeView" @unset-current-project="unsetCurrentProject" @set-current-project="e => setCurrentProject(e)" />
      <Photo v-if="photoView" />
      <Contact v-if="contactView" />
    </transition>
  </div>
</template>

<script>
import Code from "./Code.vue";
import Photo from "./Photo.vue";
import Contact from "./Contact";

export default {
  name: "Content",
  props: {
    mode: {
      required: true
    }
  },
  components: {
    Code,
    Photo,
    Contact
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
  },
  mounted() {
    function setDocHeight() {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    }

    window.addEventListener("resize", function() {
      setDocHeight();
    });

    window.addEventListener("orientationchange", function() {
      setDocHeight();
    });

    setDocHeight();
  }
};
</script>

<style>
#content {
  height: calc(var(--vh, 1vh) * 85);
}
</style>
