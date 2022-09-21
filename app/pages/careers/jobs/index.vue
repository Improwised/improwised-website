<template>
  <div class="main-container careers">
    <section class="heroUnit">
      <div class="container">
        <div class="row">
          <div class="col d-flex align-items-center justify-content-center">
            <div class="text-center">
              <h1 class="m-0">Current Openings</h1>
              <Breadcrumb class="m-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="jobOpenings && jobOpenings.length" class="bg--secondary">
      <div class="container currentOpening">
        <div class="row">
          <div
            v-for="(job, index) in jobOpenings"
            :key="index"
            class="col-sm-6 col-md-4"
          >
            <div class="feature boxed boxed--border" style="height: auto">
              <div class="label">{{ job.employment_terms }}</div>
              <h5 class="mt-15px">{{ job.title }}</h5>
              <p class="mb-0">{{ job.experience }}</p>
              <p v-if="job.pay_range" class="mb-1">{{ job.pay_range }}</p>
              <a :href="`/careers/jobs/${job.slug}`"> View &amp; Apply</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center switchable">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="cta">
              <h2>We're always looking for talent</h2>
              <p class="lead">
                Got what it takes to work with us? Great! Send us a link to your
                resumé or portfolio to become part of our talent pool.
              </p>
              <a
                class="btn btn--primary type--uppercase"
                href="mailto:careers@improwised.com?subject=Dropped Resume to get job"
              >
                <span class="btn__text"> Drop your resume here </span>
              </a>
            </div>
          </div>
        </div>
      </div>
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
    const jobOpenings = await app.$axios.$get(app.$urls.jobOpenings);
    return { jobOpenings: jobOpenings.data };
  },
  head() {
    const jobTitle = "Job openings - Improwised Technologies Pvt. Ltd.";
    const jobDescription =
      "Job openings at Improwised Technologies Pvt. Ltd. | Rajkot";
    return {
      title: "Job openings - Improwised Technologies Pvt. Ltd.",
      meta: [
        {
          name: "description",
          content: jobDescription,
        },
        {
          name: "title",
          content: jobTitle,
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
          content: jobTitle,
        },
        {
          property: "og:description",
          content: jobDescription,
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
          content: jobTitle,
        },
        {
          property: "twitter:description",
          content: jobDescription,
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
<style type="text/css">
.feature h5.mt-15px {
  margin-top: 15px;
}

.m-0 {
  margin: 0;
}
</style>
