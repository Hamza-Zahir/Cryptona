<template>
  <section id="contact" class="contact py-5 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">contact US</h2>
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

      <div class="content d-lg-flex flex-row-reverse align-items-center my-5">
        <div class="messag border_bv p-2 col-lg-7 col-xxl-8">
          <h2 class="text-center my-3">Leave Us a Message</h2>
          <div class="form">
            <form action="" class="w-100">
              <select name="" id="" class="w-100 bg-none border_bv my-2 p-2">
                <option value="">- SELECT SERVICE -</option>
                <option value="">SELECT 1</option>
                <option value="">SELECT 2</option>
                <option value="">SELECT 3</option>
                <option value="">SELECT 4</option>
                <option value="">SELECT 5</option>
              </select>

              <div class="d-sm-flex justify-content-between">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  class="col-12 col-sm-5 bg-none border_bv my-2 p-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  class="col-12 col-sm-5 bg-none border_bv my-2 p-2"
                />
              </div>

              <div class="d-sm-flex justify-content-between">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="phone"
                  class="col-12 col-sm-5 bg-none border_bv my-2 p-2"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  class="col-12 col-sm-5 bg-none border_bv my-2 p-2"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="Type Your Message"
                class="w-100 bg-none border_bv my-2 p-2"
              ></textarea>
              <div class="btn text-light bg_ga">
                Submit Message   
                <b-icon icon="send" class="text-light h1 m-0"></b-icon>

              </div>   

            </form>
          </div>
        </div>
        <div class="contact_info p-2 col-lg-5 col-xxl-4">
          <div class="img text-center">
            <img src="~/assets/imges/btc-img.png" alt="" />
          </div>
          <div class="tetle text-center my-3">
            <h2 class="fw-bold m-0 text_bd">contact Info</h2>
            <img
              src="~/assets/imges/titles-line.png"
              alt=""
              style="maxwidth: 200px"
            />
          </div>
          <ul class="m-0 p-0 text-center fw-500">
            <li class="my-2">
              <b-icon icon="telephone" class="h4 m-0 text_tr me-2"></b-icon
              ><a href="" class="text_bd">+444 736 6487 </a>
            </li>
            <li class="my-2">
              <b-icon icon="envelope" class="h4 m-0 text_tr me-2"></b-icon>

              <a href="" class="text_bd"> info@cryptona.com </a>
            </li>

            <li class="my-2">
              <b-icon icon="geo-alt" class="h4 m-0 text_tr me-2"></b-icon
              ><a href="" class="text_bd">A88 Whitby Road London, UK </a>
            </li>
          </ul>
          <div
            class="social text-center mt-3 d-sm-flex justify-content-center justify-content-lg-berween align-items-center"
          >
            <div class="text_bd fw-500 my-3 me-sm-3 me-lg-1">
              SOCIAL NETWORK
            </div>
            <div class="icons ms-sm-3 ms-lg-1">
              <a href="" class="text_bv m-1"
                ><b-icon icon="facebook" class="h5 m-0"></b-icon
              ></a>
              <a href="" class="text_bv m-1"
                ><b-icon icon="whatsapp" class="h5 m-0"></b-icon
              ></a>
              <a href="" class="m-1">
                <h4 class="fw-bold text_bv d-inline">in</h4>
              </a>
              <a href="" class="text_bv m-1"
                ><b-icon icon="twitter" class="h5 m-0"></b-icon
              ></a>
              <a href="" class="text_bv m-1"
                ><b-icon icon="instagram" class="h5 m-0"></b-icon
              ></a>
            </div>
          </div>
          <div class="text-center my-2">
            <div class="btn bg_ga text-light px-3 py-2 m-3">
              <b-icon icon="geo-alt" class="h5 m-0"></b-icon>
              <span class="h5">View Map</span>
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
    return {
      business: true,
      myCoin: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.contact {
  .form {
    .bg-none {
      background: none;
      outline: none;
    }
  }
}
</style>
