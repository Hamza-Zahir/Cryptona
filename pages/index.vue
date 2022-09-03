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
<Tokens />
<BestPrices />
<Trading />
<Blog />
<Contact />
<Footer />
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
import Tokens from "~/components/home/sections/Tokens.vue";
import BestPrices from "~/components/home/sections/BestPrices.vue";
import Trading from "~/components/home/sections/Trading.vue";
import Blog from "~/components/home/sections/Blog.vue";
import Contact from "~/components/home/sections/Contact.vue";
import Footer from "~/components/home/sections/Footer.vue";
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
    Tokens,
    BestPrices,
    Trading,
    Blog,
    Contact,
    Footer
  }
}
</script>


<style scoped>
.body-content{
  overflow: hidden;
}
</style>
