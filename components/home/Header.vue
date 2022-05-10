<template>
  <div class="header p-2">
    <div class="col-sm-11 col-xl-10 mx-auto  d-flex justify-content-between align-items-center">
      <div class="logo col-5 col-sm-4 col-md-3 col-lg-2">
        <img src="~/assets/imges/logo.png" alt="" />
      </div>
      <div class="togelMenu">
        <b-icon
          icon="list"
          class="h2 p-0 m-0 d-lg-none"
          @click="togle = !togle"
        ></b-icon>
      </div>
      <div
        class="menu menu_sm bso rounded d-lg-none"
        :class="!togle ? 'move-to-right' : ''"
      >
        <div class="text-end p-3">
          <b-icon icon="x-lg" class="h4" @click="togle = !togle"></b-icon>
        </div>

        <ul class="m-0 p-0 text-center" @click="togle = !togle">
          <li class="mx-3 py-2">
            <nuxt-link to="/" class="d-block t-d-n">Home</nuxt-link>
          </li>
          <li v-for="(link, i) in links" :key="`link-${i + 1}`" class="py-2">
            <nuxt-link :to="`/#${link}`" class="d-block t-d-n">{{
              link
            }}</nuxt-link>
          </li>
        </ul>
        <div class="text-center p-2" @click="togle = !togle">
          <div class="btn ms-auto bg_ga text-light bsl">
            But Tokens
          </div>
        </div>
      </div>

      <div class="menu menu_lg d-none d-lg-flex justify-content-between align-items-center">
        <ul class="m-0 p-0 d-flex">
          <li class="">
            <nuxt-link to="/" class="">Home</nuxt-link>
          </li>
          <li v-for="(link, i) in links" :key="`link-${i + 1}`" class="">
            <nuxt-link :to="`/#${link}`" class="d-block t-d-n">{{
              link
            }}</nuxt-link>
          </li>
        </ul> 
   <div class="btn bg_ga text-light rounded ms-3 ms-xl-5">But Tokens</div>

      </div>  

    </div>
  </div>
</template>
<script>
const links = [
  "about",
  "features",
  "product",
  "roadmap",
  "team",
  "tokens",
  "blog",
  "contact",
];

export default {
  data() {
    return {
      links: links,
      togle: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
    background: #DCE5F8;
// filter: blur(113px);
    .menu_lg{
      li{
    margin-left:20px ;
}  }
    

  .logo {
    img {
      max-width: 100%;
    }
  }
  .menu_sm {
    position: absolute;
    width: 290px;
    background: #ffffff;
    right: 0;
    top: 0;
    transition: all 0.5s;
  
  ul {
    max-height: 65vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #4fd3d3;
      border-radius: 40px;
    }
  }
  }
  .move-to-right {
    width: 0px !important;
    overflow: hidden;
  }
}
</style>
/* Rectangle 3922 */

position: absolute;
width: 1920px;
height: 92.07px;
left: -0.06px;
top: 9.48px;

background: #DCE5F8;
filter: blur(113px);
