<template>
  <section id="roadmap" class="roadmap py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">Benefits of Using Our Solution</h2>
        <img src="~/assets/imges/titles-line.png" alt="" style="maxwidth: 200px" />
      </div>
      <p class="text-center p_color col-sm-8 col-md-7 col-lg-6 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <div class="Content col-12 mx-0 my-5">
        <div class="btn_scrol prev">
          <b-icon icon="chevron-left" class="h4 p-0 m-0"></b-icon>
        </div>
        <div class="btn_scrol next">
          <b-icon icon="chevron-right" class="h4 p-0 m-0"></b-icon>
        </div>
        <div class="boxses">
          <div v-for="i in 12" :key="`roadmap-${i}`" :class="`roadmap-${i}`">
            <div class="box text-center" :class="i % 2 == 0 ? 'mt-5' : ''">
              <div class="img rounded-circle d-flex justify-content-center align-items-center">
                <span class="id rounded-circle d-flex justify-content-center align-items-center">{{ i }}</span>
                <img src="~/assets/imges/calendar-dark.png" alt="" class="active-img" />
                <!-- <img src="~/assets/imges/calendar-light.png" alt="" class="inactive-img" /> -->
              </div>
              <div class="text">
                <div class="p_color my-2">january, 2020</div>
                <h5>Platform Idea</h5>
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
export default {
 methods: {
prev() {

},
next() {
  
}

 },
  data() {
    return {};
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
      // z-index: 9;
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
      top: 60px;

      // opacity: 0;
      cursor: pointer;

      &::selection {
        // opacity: 0;
      }
    }

    .next {
      right: 0;
    }

    .prev {
      left: 0;
    }
  }
}
</style>
