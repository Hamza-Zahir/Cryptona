<template>
  <div class="gradient d-flex">
    <div
      class="prices text-secondary d-flex flex-column-reverse justify-content-between px-2"
    >
      <span v-for="i in 10" :key="i">
        $ {{ ((data.maxPrice / 9) * (i - 1)).toFixed(2) }}
      </span>
    </div>

    <div class="gradient-img col">
      <div
        class="gradient-bg"
        :style="bgStyle(data.prices, data.maxPrice)"
      ></div>
      <div class="dates d-flex justify-content-between">
        <div v-for="i in 60" :key="i">
          <div v-if="formatdate_ll(data.dates[i - 1]) % 4 == 0" class="">
            {{ formatdate_ll(data.dates[i - 1]) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../json/tradingData.json";
import moment from "moment";
export default {
  components: {},
  data() {
    return {
      data,
    };
  },

  methods: {
    formatdate_ll(date) {
      return moment(date).format("D");
    },

    bgStyle(data, maxprice) {
      let bgCoordinatien = [];
      data.map((e, i) => {
        let x = (100 / data.length) * i + 100 / data.length / 1;
        let y = 100 - (data[i] * 100) / maxprice;
        bgCoordinatien.push(`${x}% ${y}%`);
      });

      return ` clip-path:polygon(${bgCoordinatien.join(",")} , ${100}% 100% , ${
        100 / data.length / 1
      }% 100%);`;
      
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 100%;
  height: 350px;
  margin-top: 120px;

  .gradient-img {
    position: relative;

    .gradient-bg {
      background-color: #9683de;
      width: 100%;
      height: 100%;

      &::before {
        content: "";
        width: 100%;
        height: calc(100% - 5px);
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom, #3ecccc, #f1fcfc);
        clip-path: inherit;
      }
    }

    .dates {
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
    }
  }

  .columns {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    div {
      display: inline-block;
      // position: absolute;
    }

    span {
      height: 100%;
      width: 100%;
      // position: absolute;
      display: inline-block;
    }
  }

  .rows {
    width: 100%;
  }
}
</style>
