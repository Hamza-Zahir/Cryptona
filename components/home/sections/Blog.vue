<template>
  <section id="blog" class="blog py-5 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3 move-to-bottom">
        <h2 class="fw-bold m-0 text_bd">Latest Blog Posts on Cryptocurrency</h2>
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
        class="boxses d-flex mt-5 py-3 flex-wrap justify-content-center justify-content-lg-around"
      >
        <div
          class="box border_bv m-2 cp rounded-10 rounded-10 d-flex flex-column justify-content-between move-to-top"
        >
          <div class="img">
            <img src="~/assets/imges/blog/blog-1.png" alt="" />
          </div>
          <div class="d-flex flex-column justify-content-between">
            <div class="fs-14 p_color mx-3 mt-3">27 August, 2021</div>
            <p class="m-3 p-0">
              Major Canadian Bank Files Patent To Make Credit Scores
              ‘Transparent’ Via Blockchain
            </p>
          </div>
          <b-icon icon="arrow-right" class="h1 ms-3 text_bv"></b-icon>
        </div>

        <div
          class="box m-2 cp border_bv rounded-10 d-flex flex-column justify-content-between move-to-bottom"
        >
          <div class="body d-flex flex-column justify-content-between">
            <div class="img">
              <img src="~/assets/imges/blog/blog-2.png" alt="" />
            </div>

            <div class="fs-14 p_color mx-3 mt-3">27 August, 2021</div>
            <p class="m-3">Bitcoin still consolidating above 200 SMA!</p>
          </div>
          <b-icon icon="arrow-right" class="h1 ms-3 text_bv"></b-icon>
        </div>
        <div
          class="box m-2 cp border_bv rounded-10 d-flex flex-column justify-content-between move-to-top"
        >
          <div class="body d-flex flex-column justify-content-between">
            <div class="img">
              <img src="~/assets/imges/blog/blog-3.png" alt="" />
            </div>
            <div class="fs-14 p_color mx-3 mt-3">27 August, 2021</div>
            <p class="m-3">
              After a Slow Start, Bitcoin Will Hit Its Prime in the Years to
              Come
            </p>
          </div>
          <b-icon icon="arrow-right" class="h1 ms-3 text_bv icon"></b-icon>
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
  * {
    transition: all 0.5s;
  }

  .box {
    overflow: hidden;
    width: 280px;

    @media (min-width: 1200px) {
      width: 300px;
    }

    .img {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
  }

  .box {
    &:hover {
      background: #ffffff;
      box-shadow: 1px 1px 8px 0px #999898;
      transform: translateY(-10px);
      p {
        color: #4fd3d3;
      }

      .icon {
        animation: drop-right 0.5s infinite linear;
      }
    }
  }
}
</style>
