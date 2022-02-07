<template>
  <div class="crew_container flex flex-col flex-1">
    <TitlePage
      class="md:px-10 lg:px-0"
      name="Meet Your Crew"
      number="02"
    ></TitlePage>
    <div
      class="
        flex flex-col-reverse
        flex-1 justify-end
        px-6
        md:flex-col md:px-10 md:justify-start
        lg:px-0 lg:flex-row lg:justify-between
      "
    >
      <div
        class="
          desc_container
          flex flex-col-reverse
          bellefair
          pt-8
          md:mb-10 md:block md:pt-0
          lg:mb-0 lg:self-center
        "
      >
        <div>
          <h3 class="job_title opacity-50 uppercase text-center lg:text-left">
            {{ crew.job }}
          </h3>
          <p class="name_title uppercase text-center lg:text-left">
            {{ crew.fullName }}
          </p>
          <p
            class="
              description
              mx-auto
              text-blue-primary
              barlow
              text-center
              lg:text-left lg:mx-0
            "
          >
            {{ crew.description }}
            <!-- Douglas Gerald Hurley is an American engineer, former <br />
          Marine Corps pilot and former NASA astronaut. He <br />
          launched into space for the third time as commander of <br />
          Crew Dragon Demo-2. -->
          </p>
        </div>
        <NavCrew class="lg:mb-4" />
      </div>
      <div class="img_container mt-8 md:mt-0 self-center lg:self-end">
        <img :src="require(`@/assets/crew/image-${crew.img}.webp`)" alt="" />

        <!-- <img src="douglas-hurley.webp" alt="crew" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCrewActive: 'douglas',
      crews: [
        {
          name: 'douglas',
          fullName: 'douglas Hurley',
          job: 'Commander',
          description:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
          img: 'douglas-hurley',
        },
        {
          name: 'mark',
          fullName: 'MARK SHUTTLEWORTH',
          job: 'Mission Specialist ',
          description:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
          img: 'mark-shuttleworth',
        },
        {
          name: 'victor',
          fullName: 'Victor Glover',
          job: 'PILOT',
          description:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
          img: 'victor-glover',
        },
        {
          name: 'anousheh',
          fullName: 'Anousheh Ansari',
          job: 'Flight Engineer',
          description:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
          img: 'anousheh-ansari',
        },
      ],
      crew: {
        name: 'douglas',
        fullName: 'douglas Hurley',
        job: 'Commander',
        description:
          'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: 'douglas-hurley',
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.crew_container {
  margin-top: 4vh;
}
.desc_container {
  border-top: 1px solid #383b4b;
}

.job_title {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.125rem;
}

.name_title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
}

.description {
  margin-bottom: 1rem;
  font-size: 15px;
  line-height: 25px;
}

.img_container img {
  width: auto;
  height: 13.875rem;
}
@screen md {
  .job_title {
    margin-top: 3.75rem;
    margin-bottom: 1rem;
    font-size: 24px;
    line-height: 28px;
  }
  .name_title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    line-height: 2.875rem;
  }
  .description {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    line-height: 1.75rem;
    width: 58vw;
  }
  .img_container img {
    height: 33rem;
  }
  .desc_container {
    border-top: 0px;
  }
}

@screen lg {
  .crew_container {
    margin: 2vh 8.5rem 0 14.375rem;
    /* max-height: 100%; */
  }
  .job_title {
    margin-top: 8vh;
    margin-bottom: 1rem;
    font-size: 32px;
    line-height: 37px;
  }
  .name_title {
    margin-bottom: 1.69rem;
    font-size: 56px;
    line-height: 64px;
  }
  .description {
    margin-bottom: 8vh;
    font-size: 1.125rem;
    line-height: 2rem;
    width: 28vw;
  }
  .img_container img {
    width: auto;
  }
}
</style>
