<template>
  <nav
    class="
      planet_nav
      uppercase
      flex
      items-center
      justify-between
      text-blue-primary
      barlow_condensed
      mx-auto
      lg:mx-0
    "
  >
    <ul class="flex items-center justify-between">
      <li
        :class="{ li_active: $parent.isPlanetActive == 'moon' }"
        @click="swapDestination('moon')"
      >
        Moon
      </li>
      <li
        :class="{ li_active: $parent.isPlanetActive == 'mars' }"
        @click="swapDestination('mars')"
      >
        Mars
      </li>
      <li
        :class="{ li_active: $parent.isPlanetActive == 'europa' }"
        @click="swapDestination('europa')"
      >
        Europa
      </li>
      <li
        :class="{ li_active: $parent.isPlanetActive == 'titan' }"
        @click="swapDestination('titan')"
      >
        Titan
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    swapDestination(destination) {
      this.$parent.isPlanetActive = destination
      this.$parent.destination = this.$parent.destinations.find(p => p.name === destination)
      // console.log(planet);
      // this.$router.push({ name: route })
    },
  },
}
</script>

<style lang='postcss' scoped>
.planet_nav {
  width: 62.5vw;
  margin-bottom: 2rem;
}
@screen md {
  .planet_nav {
    width: 37.5%;
    margin-bottom: 2rem;
  }
}
@screen lg {
  .planet_nav {
    width: 64.5%;
    margin-bottom: 1vh;
  }
}
ul {
  width: 100%;
  font-size: 16px;
line-height: 19px;
letter-spacing: 2.7px;
}
li {
  @apply cursor-pointer pb-4;
  border-bottom: 3px solid transparent;
  /* margin-bottom: 3px; */
  transition: border-bottom 0.2s ease-in-out;
}
li:hover {
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
li:focus,
li:active {
  @apply text-white;

  border-bottom: 3px solid rgb(255, 255, 255);
}

.li_active,
.li_active:hover {
  @apply text-white;
  border-bottom: 3px solid rgb(255, 255, 255);
}
</style>