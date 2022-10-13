<template>
  <div v-if="job" class="main-container career">
    <section class="hspecing">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>{{ job.title }}</h1>
            <Breadcrumb />
            <!-- breadcrume -->
            <hr class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section>
      <div class="container">
        <div class="row jobPosition">
          <div class="col-md-8 col-sm-12 job-details">
            <div v-html="job.overview"></div>
            <br />
            <div v-if="job.objectives_of_this_role" class="text-block">
              <h5>Objectives of this Role</h5>
              <div v-html="job.objectives_of_this_role"></div>
            </div>
            <div v-if="job.responsibilities" class="text-block">
              <h5>Responsibilities</h5>
              <div v-html="job.responsibilities"></div>
            </div>
            <div v-if="job.skills" class="text-block">
              <h5>Skills and Qualifications</h5>
              <div v-html="job.skills"></div>
            </div>
          </div>

          <div class="col-md-offset-1 col-md-3 col-sm-12">
            <div v-if="job.pay_range" class="text-block">
              <h5>Pay Range:</h5>
              <div v-html="job.pay_range"></div>
            </div>
            <div v-if="job.experience" class="text-block">
              <h5>Relevant Experience</h5>
              <p>{{ job.experience }}</p>
            </div>
            <!-- <div v-if="job.keyskills" class="text-block">
              <h5>Keyskills</h5>
              <p>{{ job.keyskills }}</p>
            </div>
            <div v-if="job.employment_terms" class="text-block">
              <h5>Employment Terms</h5>
              <p>{{ job.employment_terms }}</p>
            </div>
            <div v-if="job.qualification" class="text-block">
              <h5>Educational Qualification:</h5>
              <div v-html="job.qualification"></div>
            </div> -->
          </div>
          <div class="col-lg-12">
            <br /><br />
            <div class="text-block">
              <a
                class="btn btn--primary type--uppercase"
                target="_blank"
                rel="noopener"
                :href="job.apply_link"
              >
                <span class="btn__text"> Apply </span>
              </a>
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
              <h2>Sound like the job for you?</h2>
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
    // const title = app.$titlecase(params && params.slug) || "";
    const title = params.slug;
    const job = await app.$axios.$get(app.$urls.job(title));

    return { job: job.data[0] };
  },
  head() {
    return {
      title: (this.job && this.job.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.job && this.job.seo_description) || "",
        },
        {
          name: "title",
          content: (this.job && this.job.seo_title) || "",
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
          content: (this.job && this.job.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.job && this.job.seo_description) || "",
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
          content: (this.job && this.job.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.job && this.job.seo_description) || "",
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
<style type="text/css">
ul.bullets {
  list-style: outside;
  padding-left: 20px;
}

.career .hspecing {
  padding: 3.85714286em 0 3.85714286em 0;
}

.m-0 {
  margin: 0 !important;
}
</style>
