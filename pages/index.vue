<template>
<div class="">
<Header />
<Landing />
</div>
</template>

<script>
import Header from "~/components/home/Header.vue";
import Landing from "~/components/home/sections/Landing.vue";
export default {
  name: 'IndexPage',
  components: {
    Header,
    Landing
  }
}
</script>
