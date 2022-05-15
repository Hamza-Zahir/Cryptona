<template>
  <section id="bestBrices" class="bestBrices py-4 mb-4 px-2">
    <div class="col-sm-11 col-xl-10 mx-auto">
      <div class="tetle text-center my-3">
        <h2 class="fw-bold m-0 text_bd">Find the Best Cryptocurrency Prices</h2>
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
        <div class="text_bd d-sm-flex">
          <h3
            class="border-bottom cp pb-2"
            :class="buying ? 'text_ga border-dark' : ''"
            @click="
              () => {
                selling = false;
                buying = true;
              }
            "
          >
            BUYING RATE
          </h3>
          <div class="border-2 border-start mx-4"></div>
          <h3
            class="border-bottom cp pb-2"
            :class="selling ? 'text_ga border-dark' : ''"
            @click="
              () => {
                selling = true;
                buying = false;
              }
            "
          >
            SELLING RATE
          </h3>
        </div>
      </div>
      <div class="box-change rounded-10 p-2 d-lg-flex">
        <div class="d-sm-flex align-items-center gap-3 col">
          <ul
            class="cryptos p-0 py-2 mb-3 m-sm-0 d-flex col-sm-7 col-md-7 col-lg-7 col-xl"
          >
            <li
              v-for="(crypt, i) in cryptos"
              :key="`crypt-${i + 1}`"
              :class="currentCrypto == crypt ? `text-light bg_bd` : ``"
              class="px-3 py-1 rounded cp"
              @click="currentCrypto = crypt"
            >
              {{ crypt }}
            </li>
          </ul>
          <div class="input col ms-lg-3">
            <input
              type="number"
              name="currentCrypto"
              placeholder="Enter Amount"
              class="w-100 rounded p-2"
            />
            <span class="p-2">{{ currentCrypto }}</span>
          </div>
        </div>
        <div
          class="d-flex justify-content-around align-items-center my-2 ms-lg-3 col-lg-4 col-xl-3"
        >
          <ul class="currency py-2 p-0 my-2 d-flex">
            <li
              v-for="(currency, i) in currencys"
              :key="`currency-${i + 1}`"
              :class="currentCurrency == currency ? `text-light bg_bd` : ``"
              @click="currentCurrency = currency"
              class="px-3 py-1 rounded cp"
            >
              {{ currency }}
            </li>
          </ul>
          <div class="btn bg_ga text-light bsl px-4">CONVERT</div>
        </div>
      </div>
      <h1 class="text-center my-4 p-2 text_ga">
        {{ inputValue }} {{ currentCrypto }} = {{ changValue }}
        {{ currentCurrency }}
      </h1>
      <div class="boxses my-3 d-flex flex-wrap justify-content-center">
        <div
          v-for="bP in bestPrices"
          :key="`brice-${bP.id}`"
          class="col-11 col-sm-6 col-md-4 col-lg-3 p-2 p-xl-3"
        >
          <div
            class="box text-center py-3 px-2 cp rounded-10 d-flex flex-column justify-content-between align-items-center"
          >
            <span><img :src="bP.img" alt="" class="" /></span>

            <h3 class="my-2 text_bv">$ {{ bP.price }}</h3>
            <div class="fw-500">best Price Of 1 {{ bP.crypto }}</div>
            <div class="my-2 p_color">Found At Karen</div>
            <a href="" class="">
              <b-icon icon="arrow-right" class="h1 m-0"></b-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const cryptos = ["BTC", "ETH", "ETC", "XMR", "ZEC", "DASH", "LTC"];
const currencys = ["USD", "EUR"];
const bestPrices = [
  {
    id: 1,
    crypto: "BITCOIN",
    price: "15,025.00",
    img: require("../../../assets/imges/bestPrice/bitcoin.png"),
  },
  {
    id: 2,
    crypto: "ETHEREUM",
    price: "25,524.00",
    img: require("../../../assets/imges/bestPrice/eth.png"),
  },
  {
    id: 3,
    crypto: "LITECOIN",
    price: "25,000.00",
    img: require("../../../assets/imges/bestPrice/ltc.png"),
  },
  {
    id: 4,
    crypto: "DASH",
    price: "24,200.00",
    img: require("../../../assets/imges/bestPrice/dash.png"),
  },
];
export default {
  data() {
    return {
      buying: true,
      selling: false,
      cryptos,
      currencys,
      currentCrypto: "BTC",
      currentCurrency: "USD",
      inputValue: 0,
      changValue: 0,
      bestPrices,
    };
  },
};
</script>
<style lang="scss" scoped>
.bestBrices {
  .box-change {
    background: #ffffff;
    border: 1px solid #9683de;
  }
  ul.cryptos {
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
  }
  .input {
    background: #e8e8f1;
    display: flex;
    align-items: center;
    input {
      border: none;
      outline: none;
      background: none;
    }
  }

  .boxses {
    .box {
      height: 100%;
      border: 1px solid #9683de;
      transition: all 0.5s;

      img {
        height: 90px;
      }

      &:hover {
     background: #ffffff;
      box-shadow: 1px 1px 8px 0px #999898;
      transform: translateY(-10px);
      }
    }
  }
}
</style>
