<template>
  <div
    class="
      destination_container
      px-6 mb-14
      md:px-10 md:mb-0
      flex flex-col flex-1
      lg:justify-evenly lg:px-0
    "
  >
    <div
      class="
        planet_container
        flex flex-col flex-1
        lg:justify-between lg:flex-row lg:items-center
      "
    >
      <div>
        <TitlePage
          class="lg:mb-16"
          name="Pick Your Destination"
          number="01"
        ></TitlePage>
        <div class="img_container mt-12 lg:mt-0 lg:ml-12">
          <img
            class="mx-auto"
            :src="
              require(`@/assets/destination/image-${destination.name}.webp`)
            "
            alt=""
          />
        </div>
      </div>
      <div class="destination_description mt-14 lg:mt-0 lg:self-end">
        <NavPlanet></NavPlanet>
        <h3
          class="
            planet_title
            uppercase
            bellefair
            text-white text-center
            mb-4
            lg:text-left
          "
        >
          {{ destination.name }}
        </h3>
        <p
          class="
            planet_description
            text-blue-primary
            barlow
            font-normal
            text-center
            md:mx-14
            lg:text-left lg:mx-0
          "
        >
          {{ destination.description }}
        </p>
        <div class="line_planet mb-7"></div>
        <div
          class="
            time_km_container
            flex flex-col
            justify-center
            items-center
            uppercase
            text-white
            space-y-8
            md:space-y-0
            md:flex-row
            lg:justify-start
          "
        >
          <div class="md:mr-20">
            <p
              class="
                text-blue-primary
                barlow_condensed
                text-center
                lg:text-left
              "
            >
              AVG. Distance
            </p>
            <p class="bellefair text-center lg:text-left">
              {{ destination.distance }}
            </p>
          </div>
          <div>
            <p
              class="
                text-blue-primary
                barlow_condensed
                text-center
                lg:text-left
              "
            >
              EST. Travel Time
            </p>
            <p class="bellefair text-center lg:text-left">
              {{ destination.travel_time }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlanetActive: 'moon',
      destinations: [
        {
          name: 'moon',
          description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
          distance: '384,400 km',
          travel_time: '3 days',
        },
        {
          name: 'mars',
          description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          distance: '225 Mil. km',
          travel_time: '9 Months',
        },
        {
          name: 'europa',
          description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          distance: '628 Mil. km',
          travel_time: '3 years',
        },
        {
          name: 'titan',
          description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          distance: '1.6 Bil. Km',
          travel_time: '7 Years',
        },
      ],
      destination: {
        name: 'moon',
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel_time: '3 days',
      },
    }
  },
  mounted() {
    // let selected = this.isPlanetActive
    // let test =
    // console.log(this.isPlanetActive.`${this.isPlanetActive}`);
  },
}
</script>

<style lang="postcss" scoped>
.destination_container {
  margin-top: 1.5rem;
}

.img_container img {
  width: 52%;
}

.planet_title {
  font-size: 3.5rem;
  line-height: 4rem;
}

.planet_description {
  font-size: 15px;
line-height: 25px;
  margin-bottom: 5vh;
  /* width: 85%; */
}


.line_planet {
  height: 1px;
  width: 100%;
  background-color: #383b4b;
}
.time_km_container p:first-child {
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.1477rem;
  margin-bottom: 0.75rem;
}
.time_km_container p:last-child {
  font-size: 1.75rem;
  line-height: 2rem;
}

@screen md {
  .destination_container {
    margin-top: 4vh;
  }
  .img_container img {
    width: 45%;
  }
  .planet_title {
    font-size: 5rem;
    line-height: 5.75rem;
  }
  .planet_description {
  font-size: 1rem;
  line-height: 1.75rem;
  /* width: 85%; */
}
}

@screen lg {
  .destination_container {
    margin-top: 2vh;
  }
  .img_container img {
    width: auto;
  }
  .planet_container {
    margin: 0 10rem 5vh 14.375rem;
  }
  .destination_description {
    width: 31.25vw;
  }
  .planet_title {
    font-size: 6.25rem;
    line-height: 7.1875rem;
  }
  .planet_description {
    font-size: 1.125rem;
    line-height: 2rem;
    width: 85%;
  }
}
</style>
