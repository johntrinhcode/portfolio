<template>
    <div id="about">
        <div class="flex content-center w-full h-full justify-left" >
            <div id="about-content-header" class="w-1/6 font-body text-huge font-bold text-black">
                Hi,
            </div>
        </div>
        <div class="flex content-center w-full h-full justify-left p-1">
            <div class="w-1/12 h-full">
            </div>
            <div id="about-content-body" class="font-body font-thin text-tiny w-2/4 h-full">
                <div>
                    My name is John Trinh. I like to create. Whether it's applications as a full-stack software engineer,
                    portraits and lookbooks as a photographer or an illustration as an artist, I really am looking to
                    create good work that people enjoy.
                </div>
                <div class="flex flex-wrap h-24 content-center">
                    <div>
                        This is a website where I showcase examples of the work
                        that I do with code, photography and art. Enjoy your stay.
                    </div>
                </div>
                <div id="contact">
                    <div class="font-body text-4xl font-bold">
                        Looking to reach me?
                    </div>
                    <div class="social-links pr-4">
                        <a class="pr-2" href="https://www.instagram.com/__jt.self/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="3x" /></a>
                        <a class="pr-2" href="https://www.google.com" target="_blank"    ><font-awesome-icon :icon="['fab', 'facebook']" size="3x" /></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        changeImage: Function
    },

};
</script>

<style scoped>

</style>
