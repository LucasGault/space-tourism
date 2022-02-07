<template>
  <div
    class="
      nav_tech
      flex
      justify-between
      items-center
      bellefair
      mb-7
      md:mb-11
      lg:flex-col lg:mb-0 lg:self-start
    "
  >
    <div
      :class="{ div_active: $parent.isTechActive == 'launch' }"
      @click="swapTechnology('launch')"
    >
      1
    </div>
    <div
      :class="{ div_active: $parent.isTechActive == 'spaceport' }"
      @click="swapTechnology('spaceport')"
    >
      2
    </div>
    <div
      :class="{ div_active: $parent.isTechActive == 'capsule' }"
      @click="swapTechnology('capsule')"
    >
      3
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    swapTechnology(technology) {
      this.$parent.isTechActive = technology
      this.$parent.technology = this.$parent.technologys.find(
        (p) => p.name === technology
      )
    },
  },
}
</script>

<style lang='postcss' scoped>
.nav_tech {
  width: 40vw;
  font-size: 1rem;
  /* line-height: 1.75rem; */
}
.nav_tech div {
  @apply rounded-full flex justify-center items-center transition cursor-pointer select-none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 2.5rem;
  height: 2.5rem;
}
.nav_tech div:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}
.div_active,
.div_active:hover {
  @apply bg-white;
  color: #0b0d17;
  border: 1px solid rgba(255, 255, 255, 1);
}

@screen md {
  .nav_tech {
    width: 27.5vw;
    font-size: 1.5rem;
    /* line-height: 1.75rem; */
  }
  .nav_tech div {
    width: 3.75rem;
    height: 3.75rem;
  }
}

@screen lg {
  .nav_tech {
    margin-right: 5rem;
    height: 35vh;
    width: auto;
    font-size: 2rem;
  }
  .nav_tech div {
    width: 5rem;
    height: 5rem;
  }
}
</style>