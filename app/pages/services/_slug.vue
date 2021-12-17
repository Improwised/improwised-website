<template>
  <div v-if="service" class="main-container career">
    <link rel="stylesheet" type="text/css" href="/css/markdown.css" />
    <section class="text-center serviceHeader">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ service.title }}</h1>
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
export default {
  layout: "theme",
  async asyncData({ app, params }) {
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
      ],
    };
  },
};
</script>
