<template>
  <a
    v-smooth-scroll
    class="back-to-top inner-link"
    href="#start"
    data-scroll-class="100vh:active"
    title="click & go to top of the page"
  >
    <img src="/img/fonts/up-open-big.svg" alt="backToTop" title="backToTop" />
  </a>
</template>
<script>
import Vue from "vue";
import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);
export default {};
</script>
