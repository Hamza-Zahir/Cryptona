<template>
<div class="body-content">
<Header />
<Landing />
<Group />
<About />
<Features />
<Product />
<Roadmap />
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
export default {
  name: 'IndexPage',
  components: {
    Header,
    Landing,
    Group,
    About,
    Features,
    Product,
    Roadmap
  }
}
</script>
