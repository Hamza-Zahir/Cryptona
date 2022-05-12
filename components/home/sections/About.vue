<template>
  <section id="about" class="about py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">About us</h2>
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
        <div class="img-box col-md-6">
          <img src="~/assets/imges/about.png" alt="" class="w-100" />
        </div>
        <div class="text-box my-3 col-md-6">
          <h2 class="border-3 border-start border-dark ps-2 text_bd">
            What is cryptona?
          </h2>
          <div class="p_color">
            cryptona is a private, decentralized cryptocurrency with
            <div class="d-none d-lg-block"></div>
            open source code that allows everyone to take part in
            <div class="d-none d-lg-block"></div>
            the Lymcoin network development. Privacy and
            <div class="d-none d-lg-block"></div>
            security come naturally from using Lymcoin.
            <div class="d-none d-lg-block"></div>
            The best solution for...
          </div>
          <ul class="text-bd">
            <li>Realtime Update</li>
            <li>Excepteur sint occaecat deleniti</li>
            <li>Corporis suscipit laboriosam cupid</li>
            <li>Sollicitudin, lorem dolor fringilla sapien.</li>
            <li>Pellentesque auctor nibh sit amet rhoncus</li>
            <li>Vivamus vulputate fermentum luctus nunc</li>
          </ul>

          <div class="btn bg_ga text-light rounded px-4 py-2 ms-5 bsl">
            Rear More
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
ul {
  padding: 14px;
  li {
    position: relative;
    font-size: 14px;
    @media (min-width: 350px) {
      font-size: 16px;
    }
    &::before {
      content: "";
      height: 8px;
      width: 8px;
      background: #4fd3d3;
      position: absolute;
      left: -14px;
      top: 8px;
      border-radius: 50%;
    }
  }
}
</style>
