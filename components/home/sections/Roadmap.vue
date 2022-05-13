<template>
  <section id="roadmap" class="roadmap py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">Roadmap to Success</h2>
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
      <div class="Content col-12 mx-0 my-5">
        <div class="boxses">
          <div class="btn_scrol prev">
            <b-icon icon="chevron-left" class="p-0 m-0 icon icon-prev"></b-icon>
          </div>
          <div class="btn_scrol next">
            <b-icon
              icon="chevron-right"
              class="p-0 m-0 icon icon-next"
            ></b-icon>
          </div>
          <div v-for="map in roudmap" :key="`roadmap-${map.id}`" :class="`roadmap-${map.id}`">
            <div
              class="box text-center"
              :class="map.id % 2 == 0 ? 'mt-5 even' : map.id != 1 ? 'add' : ''"
            >
              <div
                class="img rounded-circle d-flex justify-content-center align-items-center"
              >
                <span
                  class="id rounded-circle d-flex justify-content-center align-items-center"
                  >{{ map.id }}</span
                >
                <img
                  src="~/assets/imges/calendar-dark.png"
                  alt=""
                  class="inactive-img"
                />
                <img
                  src="~/assets/imges/calendar-light.png"
                  alt=""
                  class="active-img"
                />
              </div>
              <div class="text">
                <div class="p_color my-2 fw-bolder">{{map.date}}</div>
                <h5>{{map.title}}</h5>
                <p class="p_color py-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Natoque viverra eget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const roudmap = [
  { id: 1, date: "january, 2020", title: "Platform Idea" },
  {
    id: 2,
    date: "february, 2020",
    title: "Preparation for ICO",
  },
  { id: 3, date: "march, 2020", title: "Trade Enquiries" },
  {
    id: 4,
    date: "apryl, 2020",
    title: "ICO Conducting",
  },
  {
    id: 5,
    date: "january, 2020",
    title: "Platform Idea",
  },
  {
    id: 6,
    date: "january, 2020",
    title: "Platform Idea",
  },
  {
    id: 7,
    date: "january, 2020",
    title: "Platform Idea",
  },
  {
    id: 8,
    date: "january, 2020",
    title: "Platform Idea",
  },
];
export default {
  mounted() {
    this.prev();
  },
  methods: {
    prev() {
      document.addEventListener("click", (e) => {
        let parent = e.target.parentElement;
        const parent2 = parent.parentElement;

        if (e.target.classList.contains("icon-next")) {
          parent2.scrollLeft += 260;
        }
        if (e.target.classList.contains("icon-prev")) {
          parent2.scrollLeft -= 260;
        }
      });
    },
  },
  data() {
    return {roudmap};
  },
};
</script>
<style lang="scss" scoped>
.roadmap {
  .Content {
    padding: 0px calc(50% - 260px / 2);
    position: relative;
    @media (min-width: 540px) {
      padding: 0px calc(50% - 520px / 2);
    }

    @media (min-width: 870px) {
      padding: 0px calc(50% - (780px / 2));
    }

    @media (min-width: 1272px) {
      padding: 0 calc(50% - (1041px / 2));
    }

    .boxses {
      width: 100%;
      display: flex;
      overflow-x: scroll;
      scroll-behavior: smooth;

      &::-webkit-scrollbar-thumb {
        width: 0px;
        height: 0px;
      }

      &::-webkit-scrollbar {
        height: 0px;
      }

      .box {
        width: 260px;
        padding: 5px 30px;
        .img {
          width: 150px;
          height: 150px;
          margin: 0 auto;
          border: 1px solid #0a164b;
          position: relative;
          .active-img {
            display: none;
          }
          .inactive-img {
            display: block;
          }
          img {
            width: 60%;
          }

          .id {
            width: 30px;
            height: 30px;
            border: 1px solid #0a164b;
            font-size: 18px;
            font-weight: bold;
            position: absolute;
            top: 0;
            left: 2%;
            background: #f5f5ff;
          }
        }
        &:hover {
          .img {
            box-shadow: 0px 0px 140px 0pc #0e096d inset;
            .active-img {
              display: block;
            }
            .inactive-img {
              display: none;
            }
          }
          .id {
            background: #0e096d;
            color: #ffffff;
            border: 2px solid #ffffff;
          }
          h5 {
            color: #9683de;
          }
        }
      }
    }

    .btn_scrol {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ddddff;
      position: absolute;
      -webkit-transition: 0.5s ease;
      -moz-transition: 0.5s ease;
      -ms-transition: 0.5s ease;
      -o-transition: 0.5s ease;
      transition: 0.5s ease;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      border-radius: 50%;
      top: 80px;
      cursor: pointer;

      .icon {
        width: 80%;
        height: 80%;
      }
    }
    .next {
      right: 0;
    }

    .prev {
      left: 0;
    }
  }
  .even,
  .add {
    position: relative;
    &::before {
      content: "";
      width: 120px;
      border: 1px dashed #bac7de;
      position: absolute;
      right: 205px;
      top: 75px;
      transform-origin: right center;
      z-index: -1;
    }
  }
  .add {
    &::before {
      transform: rotateZ(-25deg);
    }
  }
  .even {
    &::before {
      transform: rotateZ(25deg);
    }
  }
}
</style>
