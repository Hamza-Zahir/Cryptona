<template>
<div class="body-content">
<Header />
<Landing />
<Group />
<About />
<Features />
<Product />
<Roadmap />
<Team />
<Token />
<BestPrices />
<Trading />
</div>
</template>

<script>
import Header from "~/components/home/Header.vue";
import Landing from "~/components/home/sections/Landing.vue";
import Group from "~/components/home/sections/Group.vue";
import About from "~/components/home/sections/About.vue";
import Features from "~/components/home/sections/Features.vue";
import Product from "~/components/home/sections/Product.vue";
import Roadmap from "~/components/home/sections/Roadmap.vue";
import Team from "~/components/home/sections/Team.vue";
import Token from "~/components/home/sections/Token.vue";
import BestPrices from "~/components/home/sections/BestPrices.vue";
import Trading from "~/components/home/sections/Trading.vue";
export default {
  name: 'IndexPage',
  components: {
    Header,
    Landing,
    Group,
    About,
    Features,
    Product,
    Roadmap,
    Team,
    Token,
    BestPrices,
    Trading
  }
}
</script>
