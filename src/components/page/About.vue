<template>
  <div id="about" class="w-full h-full text-white bg-black p-8">
    <div class="flex flex-col md:flex-row md:w-1/2 h-full mx-auto my-auto">
      <div class="w-full h-64 md:h-auto md:my-auto">
        <img src="../../assets/selfie.jpeg" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col mt-4 md:w-full md:ml-4 md:my-auto">
        <p class="font-head font-bold text-2xl md:text-6xl leading-none">Hey!</p>

        <p class="leading-tight mt-4 text-xs">
          My name is <b>John Trinh</b> and I am a full-stack developer who's passionate about the web, technology, design and art. If i'm not coding
          at a nearby coffee shop or taking pictures of friends, you can usually find me eating sushi. 🍣
        </p>

        <div class="flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current text-white">
            <path
              class="heroicon-ui"
              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
            />
          </svg>
          <p class="pl-2 text-xs">johntrinhcode@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style></style>
