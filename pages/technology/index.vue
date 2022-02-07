<template>
  <div class="tech_container flex-1">
    <TitlePage
      class="px-10 mb-8 md:mb-16 lg:px-0 lg:mb-0"
      name="SPACE LAUNCH 101"
      number="03"
    />
    <div class="flex flex-col-reverse justify-between lg:flex-row">
      <div
        class="
          desc_tech_container 
          flex items-center flex-col self-center 
          lg:items-baseline lg:justify-start lg:flex-row"
      >
        <NavTech />
        <div class="container">
          <p
            class="intro_title uppercase text-blue-primary barlow_condensed text-center lg:text-left"
          >
            The terminologiy ...
          </p>
          <h3 class="tech_title uppercase bellefair text-center lg:text-left">
            {{ technology.title }}
          </h3>
          <p
            class="
              tech_description 
              mx-6
              md:mx-auto text-blue-primary barlow text-center 
              lg:mx-0 lg:text-left"
          >
            {{ technology.description }}
          </p>
        </div>
      </div>
      <div class="img_container mb-8 md:mb-14 lg:mb-0">
        <img
          class="hidden lg:block"
          :src="require(`@/assets/technology/image-${technology.img}-portrait.jpg`)"
          alt="tech"
        />
        <img
          class="block lg:hidden"
          :src="require(`@/assets/technology/image-${technology.img}-landscape.jpg`)"
          alt="tech"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTechActive: "launch",
      technologys: [
        {
          name: "launch",
          title: "LAUNCH VEHICLE",
          img: "launch-vehicle",
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          name: "spaceport",
          title: "SPACEPORT",
          img: "space-capsule",
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          name: "capsule",
          title: "SPACE CAPSULE",
          img: "spaceport",
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
      technology: {
        name: "launch",
        title: "LAUNCH VEHICLE",
        img: "launch-vehicle",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
.tech_container {
  margin-top: 4vh;
}

.intro_title {
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.1477rem;
  margin-bottom: 0.5rem;
}

.tech_title {
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
}

.tech_description {
  font-size: 0.9375rem;
  line-height: 1.5625rem;
}

@screen md {
  .tech_description {
    font-size: 1rem;
    line-height: 1.75rem;
    width: 90%;
  }
  .intro_title {
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-bottom: 1rem;
  }
  .tech_title {
    font-size: 2.5rem;
    line-height: 2.875rem;
  }
}

@screen lg {
  .tech_container {
    margin: 5vh 0 0 14.375rem;
  }
  .img_container img {
    height: 55vh;
  }
  .container {
    width: 35vw;
  }
  .intro_title {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-bottom: 0.5rem;
  }
  .tech_title {
    font-size: 56px;
    line-height: 64px;
  }
  .tech_description {
    font-size: 18px;
    line-height: 2rem;
    /* width: 40%; */
  }
}
</style>
