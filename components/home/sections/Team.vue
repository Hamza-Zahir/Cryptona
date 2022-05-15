<template>
  <section id="team" class="team py-4 mb-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">OUR EXPART TEAM MEMBER</h2>
        <img
          src="~/assets/imges/titles-line.png"
          alt=""
          style="maxwidth: 200px"
        />
      </div>
      <p class="text-center p_color col-sm-8 col-md-7 col-lg-6 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <div
        class="content my-5 d-flex flex-column flex-md-row-reverse align-items-center justify-content-center"
      >
        <div class="text_bd d-sm-flex">
          <h3
            class="border-bottom cp pb-2"
            :class="Operating ? 'text_ga border-dark' : ''"
            @click="
              () => {
                Advisory = false;
                Operating = true;
              }
            "
          >
            Operating team
          </h3>
          <div class="border-2 border-start mx-4"></div>
          <h3
            class="border-bottom cp pb-2"
            :class="Advisory ? 'text_ga border-dark' : ''"
            @click="
              () => {
                Advisory = true;
                Operating = false;
              }
            "
          >
            Advisory Board
          </h3>
        </div>
      </div>
      <div class="boxses d-flex flex-wrap justify-content-center">
        <div
          v-for="person in team"
          :key="`team-${person.id}`"
          class="col-11 col-sm-6 col-md-4 col-lg-3 p-2 p-xl-3"
        >
          <div class="box text-center cp rounded-10">
            <div class="img d-flex justify-content-between">
              <img :src="person.img" alt="img" class="mx-auto" />
              <p class="m-0 p-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
                aliquet turpis elit elit natoque varius eget facilisi. Amet
                rhoncus
              </p>
            </div>

            <div
              class="footr p-2 d-flex justify-content-between align-items-center"
            >
              <div class="text-start ps-2">
                <h5 class="m-0 text_bd">{{ person.name }}</h5>
                <span class="p_color">{{ person.specialty }}</span>
              </div>
              <a
                href=""
                class="icon me-1 me-xl-2 m-0 h4 text-light fw-bold d-flex justify-content-center align-items-center"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const team = [
  {
    id: 1,
    name: "LORA SNOW",
    specialty: "Co-founder & CTO",
    img: require("~/assets/imges/team/myrtie.png"),
  },
  {
    id: 2,
    name: "OLIVA LORA",
    specialty: "Founder & CEO",
    img: require("~/assets/imges/team/oliva.png"),
  },
  {
    id: 3,
    name: "NIVA OLYN",
    specialty: "Technology Officer",
    img: require("~/assets/imges/team/niva.png"),
  },
  {
    id: 4,
    name: "MYRTIE BUSH",
    specialty: "Founder & CEO",
    img: require("~/assets/imges/team/myrtie.png"),
  },
  {
    id: 5,
    name: "JONE MOGE",
    specialty: "Marketing Officer",
    img: require("~/assets/imges/team/jone.png"),
  },
  {
    id: 6,
    name: "OLYN HUNT",
    specialty: "Founder & CEO",
    img: require("~/assets/imges/team/olyn.png"),
  },
  {
    id: 7,
    name: "STEVEN SMITH",
    specialty: "Marketing Officer",
    img: require("~/assets/imges/team/steven.png"),
  },
  {
    id: 8,
    name: "HARRY SON",
    specialty: "Founder & CEO",
    img: require("~/assets/imges/team/harry.png"),
  },
];

export default {
  data() {
    return {
      team,
      Operating: true,
      Advisory: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.team {
  .box {
    border: 1px solid #9683de;
    width: 100%;
    height: 100%;
    transition: all 0.7s;

    .img {
      height: 200px;
      align-items: end;

      img {
        max-height: 100%;
        max-width: 100%;
      }

      p {
        display: none;
      }
    }

    .footr {
      border-top: inherit;

      .icon {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #9683de;
        box-shadow: 1px 1px 5px 0px #444444;
      }

      span {
        font-size: 14px;
      }
    }

    &:hover {
      background: #0e096d;
      box-shadow: 1px 1px 8px 0px #999898;
      transform: translateY(-10px);

      * {
        color: white !important;
      }

      .img {
        align-items: center;

        p {
          display: block;
        }

        img {
          display: none;
        }
      }

      .icon {
        background: #4fd3d3;
      }
    }
  }
}
</style>
