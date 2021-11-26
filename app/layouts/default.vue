<template>
  <div>
    <a id="start" rel="nofollow" href="javscript:void(0);"></a>
    <Navigation />
    <nuxt />
    <Footer />
    <a
      class="back-to-top inner-link"
      href="#start"
      data-scroll-class="100vh:active"
      title="click & go to top of the page"
    >
      <i class="stack-interface stack-up-open-big"></i>
    </a>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    if (this.$config.MODE !== "development") {
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          (function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: 1039513, hjsv: 6 };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(
            window,
            document,
            "https://static.hotjar.com/c/hotjar-",
            ".js?sv="
          );
        },
        false
      );
    }
  },
};
</script>
