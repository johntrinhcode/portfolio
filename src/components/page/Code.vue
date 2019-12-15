<template>
    <div id="code" class="pt-4 mx-4 md:mx-24 lg:mx-24" >
        <div id="resume" class="w-full h-full text-white text-center">
            <div id="experience" class="flex flex-col">
                <h1 class="w-full font-body font-bold text-4xl">EXPERIENCE</h1>
                <div class="detail flex items-center card h-full mx-auto p-2 rounded-sm">
                    <img src="../../assets/ibm-logo.png" class="h-12" />
                    <div class="text-sm text-left ml-4">
                        <p>
                            Full Stack Developer Intern
                        </p>
                        <p class="text-xs text-gray-500">
                            May 2019 - August 2019
                        </p>
                    </div>

                </div>

            </div>

            <!-- School -->
            <div id="education" class="mt-12">
                <h1 class="font-body font-bold text-4xl">EDUCATION</h1>
            </div>
            <p class="w-full">
                University of Maryland - College Park
            </p>

            <!-- Projects -->
            <div id="projects" class="w-full h-full flex flex-col mt-12">
                <h1 class="w-full font-body font-bold text-4xl">PROJECTS</h1>
                <div id="project-row" class="flex flex-col md:flex-row w-full">
                    <div class="detail relative h-64 w-full flex items-center card  rounded-sm overflow-hidden md:ml-2 mx-auto m-2">
                        <img src="../../assets/bud.jpg" class="absolute" />
                        <div class="absolute h-32 right-0 card bg-gray-700 text-sm text-left opacity-75 p-4">
                            <p class="font-head text-4xl">
                                Bud
                            </p>
                            <p class="text-xs text-gray-500">
                                October 2019 - Present
                            </p>
                            <p class="absolute text-sm bottom-0 right-0 pr-4 pb-4">
                                <a href="www.beediscovery.com" target="_blank">Explore</a>
                            </p>
                        </div>
                    </div>
                    <div class="detail relative h-64 w-full flex items-center card rounded-sm overflow-hidden md:ml-2 mx-auto m-2">
                        <img src="../../assets/bud.jpg" class="absolute" />
                        <div class="absolute h-32 right-0 card bg-gray-700 text-sm text-left opacity-75 p-4">
                            <p class="font-head text-4xl">
                                Portfolio
                            </p>
                            <p class="text-xs text-gray-500">
                                You're looking at it!
                            </p>
                        </div>
                    </div>
                    <div class="detail relative h-64 w-full flex items-center card rounded-sm overflow-hidden md:ml-2 mx-auto m-2">
                        <img src="../../assets/bud.jpg" class="absolute" />
                        <div class="absolute h-32 right-0 card text-sm text-left opacity-75 p-4">
                            <p class="font-head text-4xl">
                                Gem
                            </p>
                            <p class="text-xs text-gray-500">
                                May 2019 - August 2019
                            </p>
                            <p class="absolute text-sm bottom-0 right-0 pr-4 pb-4">
                                <a href="www.beediscovery.com" target="_blank">Explore</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Skills -->
            <div id="skills" class="mt-12">
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
.detail {
    line-height: 1;
}

.card {
    background-color: rgb(49, 49, 49);
}

</style>
