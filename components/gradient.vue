<template>
  <div
    class="gradient mx-auto ms-lg-3"
    :style="gradientStyle(Tokens, colores)"
  >
    <div
      v-for="pecent in Tokens"
      key="${pecent.id}"
      :class="`Token ${pecent.id}`"
      :style="rotetStyle(Tokens, pecent.id)"
    >
      <span class="" :style="spanstyle(Tokens, pecent.id)"
        >{{ pecent.percentage}}%</span
      >
    </div>
  </div>
</template>

<script>
export default {
    props: {
    Tokens: {
      required: true,
      type: Array,
    },
    colores: {
      required: true,
      type: Array,
    },
    },
  methods: {
    gradientStyle(items, colors) {
      let gradientColord = [];
      let bfor = 0;
      items.map((e, i) => {
        let item = `${colors[i]} 0 ${bfor + e.percentage}%`;
        gradientColord.push(item);
        bfor += e.percentage;
      });
      return `background: conic-gradient(${gradientColord.join(",")});`;
    },

    rotetStyle(items, id) {
      let bfor = 0;
      items.map((e) => {
        if (id < e.id) {
          bfor += e.percentage;
        }
      });
      return `transform: rotateZ(-${(360 / 100) * bfor + 2}deg)`;
    },
    spanstyle(items, id) {
      let bfor = 0;
      items.map((e) => {
        if (id < e.id) {
          bfor += e.percentage;
        }
      });
      return `transform: rotateZ(${(360 / 100) * bfor + 2}deg)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.gradient {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px #000000b4;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "";
      width: 35%;
      height: 35%;
      background: #eaeafd;
      box-shadow: 0px 0px 20px 0px #3535298f;
      border-radius: inherit;
    }
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 35px 0px #7e7e79ad inset;
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
    }
    .Token {
      height: 50%;
      position: absolute;
      top: 0;
      right: 50%;
      padding-top: 10px;
      transform-origin: right bottom;
      font-size: 14px;
      color: #e7e7eb;
      span {
        display: inline-block;
      }
    }
  }
</style>