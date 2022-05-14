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
                <gradientCard :Tokens="TokenAllocation" :colores="colores" />
              </div>
              <ul class="text_bd py-3 mx-auto">
                <li
                  v-for="(pecent, i) in TokenAllocation"
                  :key="`item-${pecent.id}`"
                >
                  {{ pecent.name }} : {{ pecent.percentage }}%
                  <span :style="`background:${colores[i]}`"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">
            <h3 class="text-center text_bd mb-2">Funds Allocation</h3>
            <div
              class="d-sm-flex flex-lg-row-reverse justify-content-around align-items-center"
            >
              <div class="img text-center mx-auto ms-lg-3">
                <gradientCard :Tokens="FundsAllocation" :colores="colores" />
              </div>
              <ul class="text_bd py-3 mx-auto">
                <li
                  v-for="(pecent, i) in FundsAllocation"
                  :key="`item-${pecent.id}`"
                >
                  {{ pecent.name }} : {{ pecent.percentage }}%
                  <span :style="`background:${colores[i]}`"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import gradientCard from "../../gradient.vue";
const TokenAllocation = [
  {
    id: 1,
    percentage: 23,
    name: "Advisory board",
  },
  {
    id: 2,
    percentage: 16,
    name: "Development",
  },
  {
    id: 3,
    percentage: 19,
    name: "Bounties",
  },
  {
    id: 4,
    percentage: 18,
    name: "Bounties",
  },
  {
    id: 5,
    percentage: 24,
    name: "Token Sale",
  },
];
const FundsAllocation = [
  {
    id: 1,
    percentage: 23,
    name: "IT Development",
  },
  {
    id: 2,
    percentage: 16,
    name: "Sales & Marketing",
  },
  {
    id: 3,
    percentage: 19,
    name: "Accession ",
  },
  {
    id: 4,
    percentage: 21,
    name: "Admin & Partners",
  },
  {
    id: 5,
    percentage: 21,
    name: "Bounty Program",
  },
];
const colores = ["#ffb32c", "#b344eb", "#3d88fb", "#ff9b5c", "#fc3352"];
export default {
  components: {
    gradientCard,
  },
  data() {
    return { TokenAllocation, FundsAllocation, colores };
  },
};
</script>
<style lang="scss" scoped>
.token {
  background: url("~/assets/imges/token-bg.png");
  @media (min-width: 768px) {
    background-size: cover;
  }

  ul {
    font-weight: 500;
    width: fit-content;

    li {
      position: relative;
      display: flex;
      align-items: center;
      padding: 5px 0;

      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        left: -16px;
      }
    }
  }
}
</style>
