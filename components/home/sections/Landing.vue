<template>
  <div class="content">
    <div class="landing d-flex align-items-center d-md-block">
      <div class="sm-bg d-md-none"></div>
      <div class="inf-bg col-6 d-none d-md-block ">
        <img
          src="~/assets/imges/landing/infinit-bgLanding.png"
          alt=""
          class="w-100"
        />
      </div>
      <div class="backgrounds d-none d-md-block col-12 ">
        <div v-for="i in 12" :key="`bg-${i}`" :class="`bgr bg-${i} `">
          <img src="~/assets/imges/landing/bg-2.png" alt="" />
        </div>
      </div>

      <div class="box-text col-sm-11 col-xl-10 mx-auto p-2 pt-4">
        <div class="text col-md-6 px-xxl-5 ms-xxl-4">
          <div class="text_ga fw-bolder move-to-left">
            Trade crypto like it's meant to be
          </div>
          <h1 class="fw-bold text_bd h1 move-to-right">Buy And Sell Digital Currency</h1>
          <p class="lh-sm text-secondary move-to-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
            sed nulla tristique aenean viverra urna nec. Dapibus nascetur amet
            lacinia et placerat nibh.
          </p>
          <div class="btns d-flex my-4">
            <div class="move-to-bottom">
              <div
                class="btn bg_ga text-light rounded px-4 py-2 ms-sm-3 ms-xl-5 bsl"
              >
                Get Started
              </div>
            </div>
            <div class="video-btn ms-2 ms-sm-4 move-to-right">
              <div class="btn bg_ga rounded-circle p-1">
                <b-icon icon="play" class="m-0 text_bd icon"></b-icon>
              </div>
              <span class="text_bd fw-500">intro Video</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-none d-md-flex lg-bg ">
        <div class="col-2"></div>
        <div class="box-img col-10 ms-auto">
          <img
            src="~/assets/imges/landing/landing-img.png"
            alt=""
            class="w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  overflow: hidden;
}
.landing {
  min-height: 400px;
  background: #f4f8fb;
  z-index: 0;
  position: relative;
  user-select: none;

  @media (min-width: 800px) {
    margin-top: -30px;
  }
  .box-text {
    z-index: 99;
    @media (min-width: 768px) {
      position: absolute;
      z-index: 9;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  h1 {
    font-size: 40px;
    @media (min-width: 1020px) {
      font-size: 60px;
    }
  }
  p {
    font-weight: 500;
  }

  .video-btn {
    .btn {
      z-index: 9;
      width: 40px;
      height: 40px;
      transition: all 0.5s;

      &:hover {
        transform: translateY(-7px) scale(1.1);
        color: rgb(86, 216, 216);
      }
    }
    .icon {
      font-size: 30px !important;
    }
  }
  .sm-bg {
    width: 100%;
    height: 100%;
    background: url("~/assets/imges/landing/landing-smbg.png");
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: -2;
    position: absolute;
  }
  .inf-bg {
    position: absolute;
    top: calc(0% + 35px);
    left: calc(0% + 100% / 12);
  }
  .backgrounds {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .bgr {
      position: absolute;
      img {
        width: 100%;
      }
    }
    .bg-1 {
      width: calc(100% / 12);
      top: 15%;
      left: 0;
      transform: rotateZ(15deg) rotateY(190deg);
    }
    .bg-2 {
      width: calc(100% / 12 / 3);
      top: 40%;
      left: calc(100% / 12 / 2);
    }
    .bg-3 {
      width: calc(100% / 12 / 1.5);
      top: 60%;
      left: 2%;
      transform: rotateZ(-40deg) rotateY(190deg);
    }
    .bg-4 {
      width: calc(100% / 12 / 2.5);
      top: 80%;
      left: 10%;
      transform: rotateZ(40deg) rotateY(190deg);
    }
    .bg-5 {
      width: calc(100% / 12 / 2);
      top: 10%;
      left: 15%;
      transform: rotateY(180deg);
    }
    .bg-6 {
      width: calc(100% / 12 / 2.5);
      top: 7%;
      left: 47%;
      transform: rotateZ(10deg);
    }
    .bg-7 {
      width: calc(100% / 12 / 3);
      top: 23%;
      left: 45%;
      transform: rotateY(180deg);
    }
    .bg-8 {
      width: calc(100% / 12 / 4);
      top: 37%;
      left: 53%;
      transform: rotateY(180deg);
    }
    .bg-9 {
      width: calc(100% / 12 * 1.2);
      bottom: 20%;
      left: 50%;
      transform: rotateY(180deg);
    }

    .bg-10 {
      width: calc(100% / 12 / 1.5);
      top: 10%;
      right: 5%;
    }
    .bg-11 {
      width: calc(100% / 12 / 3.5);
      bottom: 10%;
      left: 30%;
      transform: rotateY(180deg);
    }
    .bg-12 {
      width: calc(100% / 12 / 3);
      bottom: 13%;
      left: 90%;
    }
  }
}
</style>
