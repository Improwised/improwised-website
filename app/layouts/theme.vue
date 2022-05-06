<template>
  <div>
    <div v-if="$config.MODE === 'development'">
      <link href="/theme/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link
        href="/theme/css/stack-interface.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/theme/css/socicon.css" rel="stylesheet" type="text/css" />
      <!-- <link
        href="/theme/css/lightbox.min.css"
        rel="stylesheet"
        type="text/css"

      /> -->
      <link href="/theme/css/flickity.css" rel="stylesheet" type="text/css" />
      <link href="/theme/css/iconsmind.css" rel="stylesheet" type="text/css" />
      <!-- <link
        href="/theme/css/jquery.steps.css"
        rel="stylesheet"
        type="text/css"

      /> -->
      <link href="/theme/css/theme.css" rel="stylesheet" type="text/css" />

      <link href="/css/custom.css" rel="stylesheet" type="text/css" />
      <link href="/css/pages.css" rel="stylesheet" type="text/css" />
      <link
        href="/theme/css/font-rubiklato.css"
        rel="stylesheet"
        type="text/css"
      />
    </div>
    <div v-else>
      <link rel="stylesheet" href="/dist/index.min.css" lazyload />
    </div>

    <a id="start" rel="nofollow" href="javscript:void(0);"></a>
    <Navigation />
    <nuxt />
    <Footer />
    <backToTop />

    <script src="/theme/js/jquery-3.1.1.min.js"></script>
    <script src="/theme/js/flickity.min.js"></script>
    <script src="/theme/js/scripts.js"></script>
    <script src="/js/contactus.js"></script>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import backToTop from "@/components/backToTop.vue";
export default {
  components: {
    Navigation,
    Footer,
    backToTop,
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
