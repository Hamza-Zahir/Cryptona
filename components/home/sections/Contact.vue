<template>
  <section id="contact" class="contact t-5 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3 move-to-bottom">
        <h2 class="fw-bold m-0 text_bd">Contact US</h2>
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

      <div class="content d-lg-flex flex-row-reverse align-items-center my-5">
        <div class="messag border_bv p-2 p-lg-4 col-lg-7 col-xxl-8 move-to-right">
          <h2 class="text-center my-3 text_bd">Leave Us a Message</h2>
          <div class="form text_bd">
            <form action="" class="w-100">
              <div class="select w-100 border_bv my-2">
                <div class="d-flex">
                  <div class="col p-2">{{ serviceSelect }}</div>
                  <span
                    class="bg_ga cp p-2 text-light"
                    @click="showServices = !showServices"
                  >
                    <b-icon
                      v-if="!showServices"
                      icon="chevron-down"
                      class="h4 m-0"
                    ></b-icon>
                    <b-icon
                      v-if="showServices"
                      icon="chevron-up"
                      class="h4 m-0"
                    ></b-icon>
                  </span>
                </div>

                <div v-if="showServices" class="services border_bv">
                  <ul class="m-0 p-0 text_bd">
                    <li
                      v-for="(service, i) in services"
                      :key="`service-${i}`"
                      class="p-2 border-top"
                      @click="
                        () => {
                          showServices = false;
                          serviceSelect = service;
                        }
                      "
                    >
                      {{ service }}
                    </li>
                  </ul>
                </div>
              </div>

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
              <div class="btn px-4 py-2 mt-2 text-light bg_ga">
                <span class="h5">Submit Message</span>
                <img
                  src="~/assets/imges/send-icon.png"
                  alt=""
                  class="ms-2"
                  style="width: 20px"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="contact_info p-2 col-lg-5 col-xxl-4">
          <div class="img text-center move-to-left">
            <img src="~/assets/imges/btc-img.png" alt="" />
          </div>
          <div class="tetle text-center my-3 move-to-right">
            <h2 class="fw-bold m-0 text_bd">Contact Info</h2>
            <img
              src="~/assets/imges/titles-line.png"
              alt=""
              style="maxwidth: 200px"
            />
          </div>
          <ul class="m-0 p-0 text-center fw-500 move-to-top">
            <li class="my-2">
              <b-icon
                icon="telephone"
                class="h4 m-0 text_tr me-2 p-2 icon"
              ></b-icon
              ><a href="" class="text_bd">+444 736 6487 </a>
            </li>
            <li class="my-2">
              <b-icon icon="envelope" class="h4 m-0 text_tr me-2 icon"></b-icon>

              <a href="" class="text_bd"> info@cryptona.com </a>
            </li>

            <li class="my-2">
              <b-icon icon="geo-alt" class="h4 m-0 text_tr me-2 icon"></b-icon
              ><a href="" class="text_bd">A88 Whitby Road London, UK </a>
            </li>
          </ul>
          <div
            class="social text-center mt-3 d-sm-flex justify-content-center justify-content-lg-berween align-items-center"
          >
            <div class="text_bd fw-500 my-3 me-sm-3 me-lg-1 move-to-bottom">
              SOCIAL NETWORK
            </div>
            <div class="border col-1 d-none d-sm-block col-xl-2"></div>
            <div class="icons ms-sm-3 ms-lg-1">
              <a href="" class="text_bv m-1">
                <b-icon icon="facebook" class="h5 m-0"></b-icon>
              </a>
              <a href="" class="text_bv m-1">
                <b-icon icon="whatsapp" class="h5 m-0"></b-icon>
              </a>
              <a href="" class="m-1">
                <h4 class="fw-bold text_bv d-inline">in</h4>
              </a>
              <a href="" class="text_bv m-1">
                <b-icon icon="twitter" class="h5 m-0"></b-icon>
              </a>
              <a href="" class="text_bv m-1">
                <b-icon icon="instagram" class="h5 m-0"></b-icon>
              </a>
            </div>
          </div>
          <div class="text-center my-2 move-to-left">
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
const services = [
  "select 1",
  "select 2",
  "select 3",
  "select 4",
  "select 5",
  "select 6",
  "select 7",
  "select 8",
];
export default {
  data() {
    return {
      services,
      serviceSelect: "- SELECT SERVICE -",
      showServices: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.contact {
  .messag {
    background: #f5f5ff;
  }

  .form {
    .select {
      position: relative;

      .services {
        width: calc(100% + 2px);
        max-height: 250px;
        position: absolute;
        top: calc(100% - 1px);
        left: -1px;
        background: #f5f5ff;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar-thumb {
          background: #4fd3d3;
        }

        li {
          &:hover {
            background: #60dada;
          }
        }
      }
    }

    .bg-none {
      background: none;
      outline: none;
    }
  }

  .contact_info {
    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 35px;
          height: 35px;
          padding: 6px;
          border-radius: 50%;
          box-shadow: 0px 0px 5px 0px #d1cdcd inset;
        }
      }
    }
  }
  a {
    transition: all 0.5s;
    display: inline-block;
    &:hover {
      transform: translateY(-7px) scale(1.1);
      color: rgb(86, 216, 216);
    }
  }
}
</style>
