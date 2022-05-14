<template>
  <section id="Trading" class="Trading py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">Cryptocurrency Trading Updates</h2>
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
        <div class="tebel ">
          <div class="box border_bv">
            <div class="d-flex">
              <div class="col-3">
                <div
                  class="bg_tr h-100 d-flex flex-column justify-content-around align-items-center text-center text-light py-3 px-2"
                >
                  <h1 class=" ">$ 15,025.00</h1>
                  <div>btc/USD</div>
                </div>
              </div>
              <div
                class="col-9 d-flex justify-content-around align-items-center bg-light p-3"
              >
                <div class="text-center">
                  <span>MktCap</span>
                  <h3 class="fw-bold">____._</h3>
                </div>
                <div class="text-center">
                  <span>HIGH</span>
                  <h3 class="fw-bold">$ 28,025.00</h3>
                </div>
                <div class="text-center">
                  <span>LOW</span>
                  <h3 class="fw-bold">$ 17,025.00</h3>
                </div>
                <div class="text-center">
                  <span>SUPPLY</span>
                  <h3 class="fw-bold">____._</h3>
                </div>
                <div class="text-center">
                  <span>BLOCKS</span>
                  <h3 class="fw-bold">____._</h3>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-3 d-flex justify-content-around p-2">
                <span>2.0%</span>
                <span class="fw-500">$ 15,025.00</span>
              </div>

              <div class="col-9 fw-500 ps-2 ps-md-5 bg_tr p-2">
                JANUARY,2022 6:00 pm
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
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.tebel {
  overflow-x: scroll;
  
    &::-webkit-scrollbar-thumb {
      background: #4fd3d3;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #4fd3d3;
    }

    &::-webkit-scrollbar {
      height: 2px;
    }
  .box {
    min-width: 1000px;
  }
}
</style>
