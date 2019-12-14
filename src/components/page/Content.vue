<template>
    <div id="content" class="overflow-scroll">
        <div v-if="codeView">
            <Code />
        </div>

        <div v-if="photoView">
            <Photo />
        </div>

        <div v-if="contactView">
        contact
        </div>
    </div>
</template>

<script>
import Code from "./Code.vue";
import Photo from "./Photo.vue";

export default {
    name: "Content",
    props: {
        mode: {
            required: true,
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
    }

}
</script>

<style>
#content {
    height: 85vh;
}
</style>