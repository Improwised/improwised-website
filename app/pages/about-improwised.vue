<template>
  <div class="main-container about-us">
    <section class="text-center heroUnit">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8">
            <h1 class="">About Us</h1>
            <Breadcrumb class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div
            class="
              col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2
              text-left
              lead
            "
            v-html="aboutUs.content"
          ></div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center space--xs">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="mb-0">Why us?</h2>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="whyUS space--xs">
      <div class="container">
        <div class="row">
          <div v-for="(why, index) in whyUs" :key="index" class="col-sm-6">
            <div class="feature boxed boxed--lg boxed--border">
              <h4>{{ why.title }}</h4>
              <hr />
              <div v-html="why.content"></div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="cta">
              <h2>Want to know more about us?</h2>
              <a
                class="btn btn--primary type--uppercase"
                href="/contact"
                title="contact"
              >
                <span class="btn__text"> Get in Touch </span>
              </a>
            </div>
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
  async asyncData({ app, params }) {
    const aboutUs = await app.$axios.$get(app.$urls.aboutUs);
    const whyUs = await app.$axios.$get(app.$urls.whyus);

    return { aboutUs: aboutUs.data, whyUs: whyUs.data };
  },
  head() {
    return {
      title: this.aboutUs.seo_title,
      meta: [
        {
          name: "description",
          content: this.aboutUs.seo_description,
        },
      ],
    };
  },
};
</script>
