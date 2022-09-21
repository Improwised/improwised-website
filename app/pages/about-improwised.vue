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
    <section v-if="aboutUs" class="text-center">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-left lead"
            v-html="aboutUs.content"
          ></div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section v-if="meetTeam && meetTeam.length" class="bg--secondary">
      <div class="container">
        <div class="row justify-enter">
          <div class="col-lg-12 mb-5 text-center">
            <h2 class="m-0">Meet the Team</h2>
            <!-- <p class="mb-5">
              Our team is biggest advocate for ourself, listen directly from
              them.
            </p> -->
          </div>

          <div
            v-for="(meetTeamData, index) in meetTeam"
            :key="index"
            class="col-sm-4 col-md-3 col-xs-4 col-lg-2 col-6"
          >
            <!-- -->

            <div class="testimonial testimonial-2">
              <div class="testimonial__body boxed boxed--border bg--secondary">
                <nuxt-img
                  v-if="meetTeamData.image"
                  :src="$urls.assets(meetTeamData.image.id)"
                  :alt="meetTeamData.name"
                  :title="meetTeamData.name"
                  format="jpeg"
                  width="148px"
                  height="185px"
                  loading="lazy"
                />
                <div class="testimonial__image m-0 text-center">
                  <h5>{{ meetTeamData.name }}</h5>
                  <!-- <span>{{ meetTeamData.designation }}</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="whyUs && whyUs.length" class="whyUS space--xs">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-sm-12">
            <h2 class="mb-0">Why us?</h2>
          </div>
        </div>
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
    const meetTeam = await app.$axios.$get(app.$urls.meetTeam);
    return {
      aboutUs: aboutUs.data,
      whyUs: whyUs.data,
      meetTeam: meetTeam.data,
    };
  },
  head() {
    return {
      title: this.aboutUs.seo_title,
      meta: [
        {
          name: "title",
          content: this.aboutUs.seo_title,
        },
        {
          name: "description",
          content: this.aboutUs.seo_description,
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
          content: this.aboutUs.seo_title,
        },
        {
          property: "og:description",
          content: this.aboutUs.seo_description,
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
          content: this.aboutUs.seo_title,
        },
        {
          property: "twitter:description",
          content: this.aboutUs.seo_description,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: process.env.BASE_URL + this.$route.path,
        },
      ],
    };
  },
};
</script>
