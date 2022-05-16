<template>
  <section id="product" class="product py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3 move-to-bottom">
        <h2 class="fw-bold m-0 text_bd">product details</h2>
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
      <div class="text_bd d-flex justify-content-center mt-4">
        <h3
          class="border-bottom cp move-to-left"
          :class="one ? 'text_ga border-dark' : ''"
          @click="
            () => {
              one = true;
              tow = false;
              three = false;
            }
          "
        >
          one
        </h3>
        <div class="border-2 border-start mx-4"></div>
        <h3
          class="border-bottom cp move-to-bottom"
          :class="tow ? 'text_ga border-dark' : ''"
          @click="
            () => {
              one = false;
              tow = true;
              three = false;
            }
          "
        >
          two
        </h3>
        <div class="border-2 border-start mx-4"></div>
        <h3
          class="border-bottom cp move-to-right"
          :class="three ? 'text_ga border-dark' : ''"
          @click="
            () => {
              one = false;
              tow = false;
              three = true;
            }
          "
        >
          three
        </h3>
      </div>
      <div
        class="content my-4 d-flex flex-column flex-md-row align-items-center justify-content-around"
      >
        <div class="text-box my-3 col-md-6 col-lg-5">
          <h2 class="ps-2 text_bd move-to-left">
            Quality management system QMS software solution
          </h2>
          <div class="p_color move-to-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ipsum
            proin sagittis consectetur nisi at dolor. Pharetra maecenas est nibh
            egestas vitae malesuada tempor
            <div class="d-none d-lg-block"></div>
            nam. Natoque enim, in molestie nisl. Mauris diam
            <div class="d-none d-lg-block"></div>
            volutpat urna sed luctus sem a consequat...
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ipsum
            proin sagittis consectetur nisi at dolor...
          </div>
          <br />
          <br />
          <div class="move-to-bottom">
          <div class="btn bg_ga text-light rounded px-4 py-2 ms-5 bsl">
            Rear More
          </div></div>
        </div>
        <div class="img-box col-12 col-md-6 col-xl-5 my-2 my-lg-0 move-to-right">
          <img src="~/assets/imges/prouduct.png" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      one: true,
      tow: false,
      three: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  h2 {
    border-left: 5px solid;
    border-color: inherit;
  }
}
</style>
