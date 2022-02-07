<template>
  <div class="nav_crew mx-auto lg:mx-0 flex justify-between">
    <div
      class="round_nav"
      :class="{ round_active: $parent.isCrewActive == 'douglas' }"
      @click="swapCrew('douglas')"
    ></div>
    <div
      class="round_nav"
      :class="{ round_active: $parent.isCrewActive == 'mark' }"
      @click="swapCrew('mark')"
    ></div>
    <div
      class="round_nav"
      :class="{ round_active: $parent.isCrewActive == 'victor' }"
      @click="swapCrew('victor')"
    ></div>
    <div
      class="round_nav"
      :class="{ round_active: $parent.isCrewActive == 'anousheh' }"
      @click="swapCrew('anousheh')"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    swapCrew(crew) {
      this.$parent.isCrewActive = crew
      this.$parent.crew = this.$parent.crews.find((p) => p.name === crew)
      // console.log(planet);
      // this.$router.push({ name: route })
    },
  },
}
</script>

<style lang='postcss' scoped>
.nav_crew {
  width: 23vw;
}
@screen md {
  .nav_crew {
    width: 11.5vw;
  }
}

.round_nav {
  @apply rounded-full transition-opacity bg-white opacity-20 cursor-pointer;
  width: 0.625rem;
  height: 0.625rem;
}
@screen lg {
  .round_nav {
    @apply rounded-full transition-opacity bg-white opacity-20 cursor-pointer;
    width: 1rem;
    height: 1rem;
  }
  .nav_crew {
    width: 9vw;
  }
}

.round_nav:hover {
  @apply opacity-50;
}

.round_active,
.round_active:hover {
  @apply opacity-100;
  /* border-bottom: 3px solid rgb(255, 255, 255); */
}
</style>