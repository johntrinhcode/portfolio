<template>
  <div id="contact" class="relative flex w-full h-screen text-white">
    <div id="contact-info" class="flex flex-col my-auto mx-auto text-center">
      <p class="email font-head font-bold text-5xl">Thanks for looking,</p>
      <p>you can find me at:</p>
      <div class="relative flex w-full">
        <div class="flex items-center mx-auto mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current text-white"
          >
            <path
              class="heroicon-ui"
              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
            />
          </svg>
          <p class="pl-2">johntrinhcode@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
.email {
  line-height: 0.75;
}

#contact-info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;

  height: 16rem;
  margin: auto;
}
</style>
