<template>
    <div id="code" class="flex content-center flex-wrap w-full h-full pt-4" >
        <div id="resume" class="w-full h-full">
            <div id="experience" class="flex">
                <h1 class="w-full font-body font-bold text-4xl">EXPERIENCE</h1>
            </div>
            <p class="w-full">
                IBM - Full Stack Developer
            </p>

            <!-- School -->
            <div id="education" class="flex">
                <h1 class="font-body font-bold text-4xl">EDUCATION</h1>
            </div>
            <p class="w-full">
                University of Maryland - College Park
            </p>

            <!-- Projects -->
            <div id="projects" class="flex">
                <h1 class="font-body font-bold text-4xl">PROJECTS</h1>
            </div>
            <p class="w-full">
                Bud.
            </p>

            <!-- Skills -->
            <div id="skills" class="flex">
                <div id="languages_frameworks">
                    <h1 class="font-body font-bold text-4xl">LANGUAGES & FRAMEWORKS</h1>
                </div>
                <div id="tools">
                    <h1 class="font-body font-bold text-4xl">TOOLS</h1>
                </div>
            </div>
            <p class="w-full">
                Bud.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    props: {
        changeImage: Function
    },
};
</script>

<style scoped>

</style>
