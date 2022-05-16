<template>
  <section id="features" class="features py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3 move-to-bottom">
        <h2 class="fw-bold m-0 text_bd">Benefits of Using Our Solution</h2>
        <img
          src="~/assets/imges/titles-line.png"
          alt=""
          style="maxwidth: 200px"
        />
      </div>
      <p class="text-center p_color col-sm-8 col-md-7 col-lg-6 mx-auto move-to-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <div
        class="content my-5 d-flex flex-column flex-md-row-reverse align-items-center justify-content-center"
      >
        <div class="text_bd d-flex">
          <h3
            class="border-bottom cp move-to-left"
            :class="business ? 'text_ga border-dark' : ''"
            @click="
              () => {
                myCoin = false;
                business = true;
              }
            "
          >
            BUSINESS
          </h3>
          <div class="border-2 border-start mx-4"></div>
          <h3
            class="border-bottom cp move-to-right"
            :class="myCoin ? 'text_ga border-dark' : ''"
            @click="
              () => {
                myCoin = true;
                business = false;
              }
            "
          >
            MY COIN
          </h3>
        </div>
      </div>
      <div class="boxses d-flex justify-content-center">
        <div class="box p-3 m-2 text-center cp move-to-bottom">
          <img src="~/assets/imges/features/img-1.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <div class="border-top col-8 mx-auto my-3"></div>
          <h5 class="m-0 text-bd">SMART MANAGEMENT</h5>
        </div>
        <div class="box p-3 m-2 text-center cp move-to-top">
          <img src="~/assets/imges/features/img-1.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <div class="border-top col-8 mx-auto my-3"></div>
          <h5 class="m-0 text-bd">Ethereum Platform</h5>
        </div>
        <div class="box p-3 m-2 text-center cp move-to-bottom">
          <img src="~/assets/imges/features/img-2.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <div class="border-top col-8 mx-auto my-3"></div>
          <h5 class="m-0 text-bd">TRANSPARENCY</h5>
        </div>
        <div class="box p-3 m-2 text-center cp move-to-top">
          <img src="~/assets/imges/features/img-3.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <div class="border-top col-8 mx-auto my-3"></div>
          <h5 class="m-0 text-bd">COMPLIANCE</h5>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      business: true,
      myCoin: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.boxses {
  flex-wrap: wrap;

  * {
    transition: all 0.5s;
  }

  .box {
    width: 280px;
    position: relative;
    overflow: hidden;
    border: 1px solid #9683de;
    height: 270px;
    @media (min-width: 1200px) {
      width: 250px;
    }
    img {
      width: 170px;
      max-height: 170px;
    }

    p {
      overflow: hidden;
      height: 0%;
      position: absolute;
      color: #9683de;
      transition: 0.5s;
    }
  }

  .box {
    &:hover {
      background: #0e096d;

      img {
        width: 50px;
      }

      p {
        position: relative;
        height: fit-content;
      }
      h5 {
        color: #f5f5ff;
      }
    }
  }
}
</style>
