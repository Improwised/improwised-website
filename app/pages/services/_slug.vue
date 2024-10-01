<template>
  <div v-if="service" class="main-container career">
    <link rel="stylesheet" type="text/css" href="/css/markdown.css" />
    <section class="text-center serviceHeader space--sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ service.title }}</h1>
            <Breadcrumb class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <div class="container mb-5">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div
            v-if="service.alert_link"
            class="d-flex align-items-center justify-content-center p-3 rounded mb-5 b1 alert"
          >
            <nuxt-img
              :src="$urls.assets(service.alert_link.id)"
              :alt="service.alert_link.title"
              :title="service.alert_link.title"
              loading="lazy"
              :format="service.alert_link.filename_download.split('.')[1]"
              class="m-3"
            />
            <div v-html="service.alert_description" />
          </div>

          <article class="markdown-body">
            <div v-html="service.content_html" />
          </article>
        </div>
      </div>
      <!--end of row-->
    </div>
    <section
      class="space--xs imagebg"
      data-gradient-bg="#4876BD,#5448BD,#8F48BD,#BD48B1"
    >
      <HomeCallToActionGranim />

      <div class="container">
        <div class="row">
          <!-- <div class="cta cta--horizontal text-center-xs"> -->
          <div class="col-sm-9 d-flex align-items-center">
            <h2 class="lead m-0">
              We will do our best to answer you within 24 hours or less.
            </h2>
          </div>
          <div class="col-sm-3 text-right text-center-xs">
            <Button text="Contact Us" redirect="/contact" />
          </div>

          <!-- </div> -->
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb.vue";
import HomeCallToActionGranim from "@/components/HomeCallToActionGranim.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Breadcrumb,
    HomeCallToActionGranim,
    Button,
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const title = (params && params.slug) || "";
    const service = await app.$axios.$get(app.$urls.service(title));

    return { service: service.data[0] };
  },
  head() {
    return {
      title: (this.service && this.service.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.service && this.service.seo_description) || "",
        },
        {
          name: "title",
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL + this.$route.path + "/",
        },
        {
          property: "og:title",
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.service && this.service.seo_description) || "",
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "@improwised",
        },
        {
          property: "twitter:creator",
          content: "@improwised",
        },
        {
          property: "twitter:title",
          content: (this.service && this.service.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.service && this.service.seo_description) || "",
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL + this.$route.path + "/",
        },
      ],
    };
  },
};
</script>

<style>
.b1 {
  box-shadow: rgba(230, 230, 250, 0.3) 0 1px 2px 0,
    rgba(230, 230, 250, 0.15) 0 2px 6px 2px;
}

.alert {
  background-color: #e6e6fa;
  color: black;
}

.alert a {
  color: #8a2be2;
}
</style>
