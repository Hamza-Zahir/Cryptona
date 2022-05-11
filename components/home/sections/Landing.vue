<template>
  <div class="landing">
    <div class="col-sm-11 col-xl-10 mx-auto p-2 pt-4">
      <div class="text">
        <div class="text_ga fw-bolder">Trade crypto like it's meant to be</div>
        <h1 class="fw-bold text_bd h1">Buy and Sell Digital Currency</h1>
        <p class="lh-sm text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          sed nulla tristique aenean viverra urna nec. Dapibus nascetur amet
          lacinia et placerat nibh.
        </p>
        <div class="btns d-flex my-4">
          <div>
            <div class="btn bg_ga text-light rounded px-4 py-2 ms-sm-3 ms-xl-5 bsl">
              Get Started
            </div>
          </div>
          <div class="video-btn ms-2 ms-sm-4">
            <div class="btn bg_ga rounded-circle p-1 ">
              <b-icon
                icon="play"
                class="m-0 text_bd icon"
                @click="togle = !togle"
              ></b-icon>
            </div>
            <span class="text_bd">intro Video</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing {
  min-height: 500px;
  // background: url("~/assets/imges/landing-bg.png");
  background: url("~/assets/imges/landing-smbg.png");
  background-size: cover;
  // background-position: 0% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    left: -100%;
    width: 200%;
    height: 100%;
    background: #ffffff;
    z-index: -1;
    opacity: 0.5;
    border-radius: 100%;
    box-shadow: 0px 0px 100px 0px inset #4FD3D3;
  }
  @media (min-width: 400px) {
    background: url("~/assets/imges/landing-bg.png");
    background-position: 100% 100%;

    background-size: 150% 100%;
  }
  @media (min-width: 600px) {
    background-size: 130% 100%;
    &::before {
     left: -75%;
    width: 150%;
    }
  }
  @media (min-width: 700px) {
    background-size: 100% 100%;
    min-height: 550px;
    &::before {
      display: none;
     
    }
  }
  .text {
    // z-index: 2;
    @media (min-width: 600px) {
      width: 70%;
    }
    @media (min-width: 700px) {
      width: 50%;
    }
  }
   @media (min-width: 1300px) {
    padding-left: 40px;
    }
  h1 {
    font-size: 40px;
    @media (min-width: 700px) {
      font-size: 60px;
    }
  }
  p {
    font-weight: 500;
  }
  .video-btn {
    .btn {
      width: 40px;
      height: 40px;
      .icon {
        font-size: 30px !important;
      }
    }
  }
  //   mask: linear-gradient(to bottom, black, #00000067);
}
</style>
