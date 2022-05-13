<template>
  <section id="token" class="token py-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto pt-4 mt-4">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">Token Distribution</h2>
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
        <div class="boxses d-lg-flex justify-content-around align-items-center">
          <div class="box">
            <h3 class="text-center text_bd mb-2">Token Allocation</h3>
            <div
              class="d-sm-flex flex-row-reverse justify-content-around align-items-center"
            >
              <div class="img text-center mx-auto ms-lg-3">
                <img src="~/assets/imges/token-cercl.png" alt="" />
              </div>
              <ul class="text_bd py-3 mx-auto">
                <li class="item-1">Advisory board : 20%</li>
                <li class="item-2">Development: 13%</li>
                <li class="item-3">Bounties: 16%</li>
                <li class="item-4">Reserve: 15%</li>
                <li class="item-5">Token Sale: 21%</li>
              </ul>
            </div>
          </div>
          <div class="box">
            <h3 class="text-center text_bd mb-2">Funds Allocation</h3>
            <div
              class="d-sm-flex flex-lg-row-reverse justify-content-around align-items-center"
            >
              <div class="img text-center mx-auto ms-lg-3">
                <img src="~/assets/imges/token-cercl.png" alt="" />
              </div>
              <ul class="text_bd py-3 mx-auto ">
                <li class="item-1">IT Development : 20%</li>
                <li class="item-2">Sales & Marketing : 13%</li>
                <li class="item-3">Accession : 16%</li>
                <li class="item-4">Admin & Partners : 15%</li>
                <li class="item-5">Bounty Program : 21%</li>
              </ul>
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
.token {
  background: url("~/assets/imges/token-bg.png");
  // background-size: cover;
  .img {
    img {
      max-width: 100%;
      margin: 0 auto;
      width: 200px;
    }
  }
  ul {
    font-weight: 500;
    width: fit-content;
    li {
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        left: -16px;
      }
    }
    .item-1 {
      &::before {
        background: #ffb32c;
      }
    }
    .item-2 {
      &::before {
        background: #b344eb;
      }
    }
    .item-3 {
      &::before {
        background: #3d88fb;
      }
    }
    .item-4 {
      &::before {
        background: #ff9b5c;
      }
    }
    .item-5 {
      &::before {
        background: #fc3352;
      }
    }
  }
}
</style>
