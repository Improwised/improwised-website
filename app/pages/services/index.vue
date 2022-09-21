<template>
  <div class="main-container career">
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
    <section>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <article class="markdown-body">
              <div v-html="service.content_html" />
            </article>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  layout: "theme",
  async asyncData({ app, params, redirect, env }) {
    return redirect("/");
    const title = app.$titlecase(params && params.slug) || "";
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
          content: process.env.BASE_URL + this.$route.path,
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
          href: process.env.BASE_URL + this.$route.path,
        },
      ],
    };
  },
};
</script>
