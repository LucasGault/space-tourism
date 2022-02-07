<template>
  <div class="menu_mobile_container uppercase barlow_condensed transition absolute right-0 top-0 h-full z-10">
    <ul class=" mt-28 ml-10">
      <li
        @click="$parent.changeBg('index')"
      >
        <p>00</p>
        <p>Home</p>
      </li>
      <li
        @click="$parent.changeBg('destination')"
      >
        <p>01</p>
        <p>Destination</p>
      </li>
      <li
        @click="$parent.changeBg('crew')"
      >
        <p>02</p>
        <p>Crew</p>
      </li>
      <li
        @click="$parent.changeBg('technology')"
      >
        <p>03</p>
        <p>Technology</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style lang="postcss" scoped>
.menu_mobile_container {
  width: 68vw;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
}
li {
  @apply flex items-center pb-8 cursor-pointer;
  /* margin-bottom: 3px; */
    font-size: 1rem;
  line-height: 19px;
  letter-spacing: 2.7px;
}
li p:first-child {
  @apply mr-3 font-bold;
}
</style>
