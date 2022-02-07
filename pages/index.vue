<template>
  <div
    class="
      index_container
      flex flex-col flex-1
      justify-between
      items-center
      font-normal
      mt-12
      md:mx-40 md:mt-0 md:flex-initial
      lg:flex-row
    "
  >
    <div class="text-blue-primary">
      <p class="text_1 uppercase barlow_condensed">So, you want to travel to</p>
      <p
        class="
          text_2 text-white
          bellefair
          mt-4
          text-center
          md:mt-0
          lg:text-left
        "
      >
        SPACE
      </p>
      <p class="text_3 barlow mx-6 md:mx-0">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div
      class="
        hover_holder_container
        flex
        justify-center
        items-center
        md:pt-12
        lg:pb-10 lg:pt-0
      "
    >
      <!-- <NuxtLink >Home page</NuxtLink> -->
      <!-- <NuxtLink :to="{name:'destination'}" class="explore_container bellefair"> -->
      <div class="explore_container bellefair">
        <div class="explore_card">
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="postcss" scoped>
.index_container {
  margin-bottom: 6vh;
}
.text_1 {
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
  letter-spacing: 0.1688rem;
}
.text_2 {
  font-size: 5rem;
  /* line-height: 100px;\ */
}
.text_3 {
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #d0d6f9;
}

.hover_holder_container {
  width: 53vw;
  height: 53vw;
}
.explore_card {
  @apply bg-white rounded-full flex justify-center items-center;
  width: 40vw;
  height: 40vw;
  font-size: 1.25rem;
  line-height: 1.4375rem;
  letter-spacing: 1.25px;
  color: #0b0d17;
}
.explore_container {
  @apply bg-white bg-opacity-0 transition duration-1000 mix-blend-normal rounded-full flex justify-center items-center;
}
.explore_container:hover {
  @apply bg-opacity-10;
  width: 100%;
  height: 100%;
}

@screen md {
  
  .text_1 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.2109rem;
    text-align: left;
  }
  .text_2 {
    font-size: 9.375rem;
  }
  .text_3 {
    font-size: 1rem;

    line-height: 1.75rem;
    color: #d0d6f9;
  }
  .explore_card {
    width: 31.25vw;
    height: 31.25vw;
    font-size: 2rem;
    line-height: 2.3125rem;
    letter-spacing: 0.125rem;
  }
}

@screen lg {
  .text_1 {
    font-size: 1.75rem;
    letter-spacing: 0.2953rem;
    line-height: 2.125rem;
  }
  .text_3 {
    font-size: 1.125rem;
    line-height: 2rem;
    width: 31.25vw;
    text-align: left;
  }
  .hover_holder_container {
    width: 31vw;
    height: 31vw;
  }
  .explore_card {
    width: 19vw;
    height: 19vw;
  }
}
</style>
