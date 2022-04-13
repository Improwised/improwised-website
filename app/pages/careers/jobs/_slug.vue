<template>
  <div v-if="job" class="main-container career">
    <section class="space--xs">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>{{ job.title }}</h1>
            <Breadcrumb />
            <!-- breadcrume -->
            <hr />
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
            <div class="text-block">
              <h5>Responsibilities</h5>
              <div v-html="job.responsibilities"></div>
            </div>
            <div class="text-block">
              <h5>This position require:</h5>
              <div v-html="job.skills"></div>
            </div>
          </div>
          <div class="col-md-offset-1 col-md-3 col-sm-12">
            <div class="text-block">
              <h5>Experience</h5>
              <p>{{ job.experience }} years of relevant experience</p>
            </div>
            <div class="text-block">
              <h5>Employment Terms</h5>
              <p>{{ job.employment_terms }}</p>
            </div>
            <div class="text-block">
              <h5>Educational Qualification:</h5>
              <div v-html="job.qualification"></div>
            </div>
            <div v-if="job.pay_range" class="text-block">
              <h5>Pay Range:</h5>
              <div v-html="job.pay_range"></div>
            </div>
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
    const title = app.$titlecase(params && params.slug) || "";
    console.log(app.$urls.job(title));
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
      ],
    };
  },
};
</script>
