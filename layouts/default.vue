<template>
  <div
    class="main_container flex flex-col justify-between text-white bg-black"
    :class="[
      { bg_home: currentRoute == 'index' },
      { bg_destination: currentRoute == 'destination' },
      { bg_crew: currentRoute == 'crew' },
      { bg_technology: currentRoute == 'technology' },
    ]"
  >
    <NavHome></NavHome>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.name,
    }
  },
  mounted() {
    // console.log(this.$router.currentRoute.name);
  },
}
</script>

<style lang='postcss' scoped>
.main_container {
  min-height: 100vh;
  /* max-height: 100vh; */
}
  .bg_home {
    background-image: url('@/assets/home/background-home-mobile.jpg');
    background-size: cover;
  }
  .bg_destination {
    background-image: url('@/assets/destination/background-destination-mobile.jpg');
    background-size: cover;
  }
  .bg_crew {
    background-image: url('@/assets/crew/background-crew-mobile.jpg');
    background-size: cover;
  }
  .bg_technology {
    background-image: url('@/assets/technology/background-technology-mobile.jpg');
    background-size: cover;
  }
@screen md {
  .bg_home {
    background-image: url('@/assets/home/background-home-tablet.jpg');
    background-size: cover;
  }
  .bg_destination {
    background-image: url('@/assets/destination/background-destination-tablet.jpg');
    background-size: cover;
  }
  .bg_crew {
    background-image: url('@/assets/crew/background-crew-tablet.jpg');
    background-size: cover;
  }
  .bg_technology {
    background-image: url('@/assets/technology/background-technology-tablet.jpg');
    background-size: cover;
  }

}

@screen lg {
  .bg_home {
    background-image: url('@/assets/home/background-home-desktop.jpg');
    background-size: cover;
  }
  .bg_destination {
    background-image: url('@/assets/destination/background-destination-desktop.jpg');
    background-size: cover;
  }
  .bg_crew {
    background-image: url('@/assets/crew/background-crew-desktop.jpg');
    background-size: cover;
  }
  .bg_technology {
    background-image: url('@/assets/technology/background-technology-desktop.jpg');
    background-size: cover;
  }
}
</style>