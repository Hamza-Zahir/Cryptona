<template>
  <div class="landing">
    <div class="col-sm-11 col-xl-10 mx-auto p-2 pt-4">
      <div class="text">
        <div class="text_ga">Trade crypto like it's meant to be</div>
        <h1 class="fw-bold text_bd h1">Buy and Sell Digital Currency</h1>
        <p class="fw-normal lh-sm p_color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          sed nulla tristique aenean viverra urna nec. Dapibus nascetur amet
          lacinia et placerat nibh.
        </p>
        <div class="btns d-flex my-4"> 
                         <div>

          <div class="btn bg_ga text-light rounded ms-3 ms-xl-5 bsl">
            Get Started
          </div>
          </div>
          <div class="video-btn ms-4">
            <div class="btn bg_ga rounded-circle p-1">
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
  min-height: 480px;
  background: url("~/assets/imges/landing-bg.png");
  background-size: 170% 100%;
  background-position: 0% 100%;
  display: flex;
  align-items: center;
  @media (min-width: 500px) {
    background-size: 150% 100%;
  }
  @media (min-width: 600px) {
    background-size: 130% 100%;
  }
   @media (min-width: 700px) {
    background-size: 100% 100%;
  }
  .text{
@media (min-width: 600px) {
width: 70%; 
 }
 @media (min-width: 700px) {
width: 50%; 
 }
  }
   h1 {
    font-size: 40px;
     @media (min-width: 700px) {
font-size: 60px; 
 }
  }
  .video-btn{
      .btn{
            width: 40px;
            height: 40px;
            .icon{
                font-size: 30px !important;
            }
      }
  }
  //   mask: linear-gradient(to bottom, black, #00000067);
 
}
</style>
