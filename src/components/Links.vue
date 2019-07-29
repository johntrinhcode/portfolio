<template>
    <div id="links" class="bg-gray-600 h-full w-full font-sans text-xl text-white font-medium" >
        <div id="link-items">
            <a href="#" v-for="item in links">
                {{ item }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'links',
  data: function () {
    return {
      links: ['code', 'photography', 'about me', 'contact', 'resume']
    };
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
</style>
