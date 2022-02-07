<template>
  <h2 class="text-white barlow_condensed uppercase text-center md:text-left">
    <span class="opacity-25 font-bold">{{ number }}</span>
    {{ name }}
  </h2>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang='postcss' scoped>

h2 {
  font-size: 1rem;
line-height: 19px;
letter-spacing: 2.7px;
}
span {
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: 2.7px;
    margin-right: 1.125rem;

}

@screen md {
  h2 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.2109rem;
  }
  span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.2109rem;
    margin-right: 1rem;

  }

}
@screen lg {
  h2 {
    font-size: 1.75rem;
    letter-spacing: 0.2953rem;
    line-height: 2.125rem;
    /* margin-left: 10.4063rem; */
    /* margin-bottom: 4vh; */
  }
  span {
    font-size: 1.75rem;
    letter-spacing: 0.2953rem;
    line-height: 2.125rem;
    margin-right: 1.75rem;
  }
}

</style>