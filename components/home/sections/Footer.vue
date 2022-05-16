<template>
  <footer id="" class="py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="Content my-5 d-lg-flex">
        <div class="col-lg-4 p-2 pe-lg-5 text-center text-lg-start move-to-left">
          <img src="~/assets/imges/logo.png" alt="" />
          <p class="my-2 text_bd fw-500">
            Sed diam nonumy eirmod tempor Invidunt ut labore et dolore.
          </p>
          <div
            class="my-3 d-flex justify-content-center justify-content-lg-start"
          >
            <a href="" class="text_ga m-1">
              <b-icon icon="facebook" class="h5 m-0 icon p-0"></b-icon>
            </a>
            <a href="" class="text_ga m-1">
              <b-icon icon="twitter" class="h5 m-0 icon"></b-icon>
            </a>
            <a href="" class="text_ga m-1">
              <b-icon icon="instagram" class="h5 m-0 icon"></b-icon>
            </a>
            <a href="" class="text_ga m-1">
              <img src="~/assets/imges/pinterest.png" alt="" class="icon" />
            </a>
          </div>
        </div>
        <div class="col-lg-8 d-sm-flex justify-content-around text-center">
          <div class="col d-flex justify-content-between mt-2">
            <div class="col">
              <span class="fw-bold border-bottom p-2 text_bd">About</span>
              <ul class="m-0 mt-3 p-0">
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Abou us</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Features</a>
                </li>
                <li class="my-1 fw-500"><a href="" class="p_color">News</a></li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <span class="fw-bold border-bottom p-2 text_bd">Company</span>
              <ul class="m-0 mt-3 p-0">
                <li class="my-1 fw-500">
                  <a href="" class="p_color"> Our Team</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Partner With Us</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Ambassador login</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex col justify-content-between mt-2">
            <div class="col">
              <span class="fw-bold border-bottom p-2 text_bd">Support</span>
              <ul class="m-0 mt-3 p-0">
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Account</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Support Center</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Feedback</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <span class="fw-bold border-bottom p-2 text_bd">Resources</span>
              <ul class="m-0 mt-3 p-0">
                <li class="my-1 fw-500"><a href="" class="p_color">Help</a></li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Learn</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Claims</a>
                </li>
                <li class="my-1 fw-500">
                  <a href="" class="p_color">Complaints</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-left d-flex justify-content-end align-items-end">
      <img src="~/assets/imges/footerBg-2.png" alt="" />
    </div>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
footer {
  background: url("~/assets/imges/footerBg-1.png");
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: #f5f5ffcb;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  img{
    max-width: 100%;
  }
  a .icon {
    width: 36px;
    height: 36px;
    padding: 6px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px 0px #d1cdcd;
  }
  .bg-left {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    img {
      max-width: 50%;
      max-height: 100%;
      opacity: 0.5;
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
