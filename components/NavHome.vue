<template>
  <div
    class="
      flex
      items-center
      justify-between
      px-6
      pt-6
      md:px-0 md:pt-0 md:pl-10
      lg:pl-16 lg:pt-11
    "
  >
    <div class="logo cursor-pointer" @click="changeBg('index')">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
          fill="#0B0D17"
        />
      </svg>
    </div>
    <div class="line"></div>
    <div
      class="
        nav
        text-white
        uppercase
        barlow_condensed
        font-regular
        px-12
        pt-10
        hidden
        md:block
        lg:pt-11 lg:pl-32 lg:pr-40 lg:px-0
      "
    >
      <nav id="main-nav" role="navigation" aria-label="Main NaV">
        <ul class="flex justify-between">
          <li
            :class="{ li_active: $parent.currentRoute == 'index' }"
            @click="changeBg('index')"
          >
            <p class="hidden lg:block">00</p>
            <p>Home</p>
          </li>
          <li
            :class="{ li_active: $parent.currentRoute == 'destination' }"
            @click="changeBg('destination')"
          >
            <p class="hidden lg:block">01</p>
            <p>Destination</p>
          </li>
          <li
            :class="{ li_active: $parent.currentRoute == 'crew' }"
            @click="changeBg('crew')"
          >
            <p class="hidden lg:block">02</p>
            <p>Crew</p>
          </li>
          <li
            :class="{ li_active: $parent.currentRoute == 'technology' }"
            @click="changeBg('technology')"
          >
            <p class="hidden lg:block">03</p>
            <p>Technology</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class="mobile_container flex md:hidden">
      <div
        ref="button"
        class="menu-btn"
        :class="{ 'menu-btn--open': isMenuOpen }"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="menu sr-only"> Menu</span>
      </div>
    </div>
    <!-- <transition name="slide-fade"> -->
      <MenuMobile v-if="isMenuOpen" />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    changeBg(route) {
      this.$parent.currentRoute = route
      this.$router.push({ name: route })
    },
  },
}
</script>

<style lang='postcss' scoped>
.nav {
  width: 58vw;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
}
li {
  @apply flex items-center pb-10 cursor-pointer;
  border-bottom: 3px solid transparent;
  /* margin-bottom: 3px; */
  transition: border-bottom 0.2s ease-in-out;
}
li:hover {
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}
li p:first-child {
  @apply mr-3 font-bold;
}

.li_active {
  border-bottom: 3px solid rgb(255, 255, 255);
}
.li_active:hover {
  border-bottom: 3px solid rgb(255, 255, 255);
}

.menu-btn {
  @apply ml-auto flex flex-col justify-between rounded-full transition duration-500 z-20;
  width: 24px;
  height: 21px;
  outline: none;
  /* padding: 13px 10px; */
}
.menu-btn .bar {
  width: 24px;
  height: 3px;
  @apply bg-blue-primary block transition duration-500 origin-center;
}
/* .menu-btn:focus .bar,
.menu-btn:hover .bar {
  @apply bg-black;
} */
.menu-btn--open .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.menu-btn--open .bar:nth-child(2) {
  transform: scaleX(0);
}
.menu-btn--open .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
.slide-fade-enter-active {
  transition: all 0.7s cubic-bezier(0.1, 0.75, 0.56, 1);
  /* transition: all 0.3s ease; */
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translate(30rem, 0);
  /* opacity: 0; */
}

@screen lg {
  .line {
    width: 33vw;
    height: 1px;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
    margin-right: -100px;
    z-index: 1;
  }
}
</style>