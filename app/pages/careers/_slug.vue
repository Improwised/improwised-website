<template>
  <div v-if="career" class="main-container career">
    <section class="space--sm">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>{{ career.title }}</h1>
            <Breadcrumb />
            <!-- breadcrume -->
            <hr />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="switchable">
      <div class="container">
        <div class="row jobPosition">
          <div class="col-md-8 col-sm-12 job-details">
            <div v-html="career.overview"></div>
            <br />
            <div class="text-block">
              <h5>Responsibilities</h5>
              <div v-html="career.responsibilities"></div>
            </div>
            <div class="text-block">
              <h5>This position require:</h5>
              <div v-html="career.skills"></div>
            </div>
          </div>
          <div class="col-md-offset-1 col-md-3 col-sm-12">
            <div class="text-block">
              <h5>Experience</h5>
              <p>{{ career.experience }} years of relevant experience</p>
            </div>
            <div class="text-block">
              <h5>Employment Terms</h5>
              <p>{{ career.employment_terms }}</p>
            </div>
            <div class="text-block">
              <h5>Educational Qualification:</h5>
              <div v-html="career.qualification"></div>
            </div>
          </div>
          <div class="col-lg-12">
            <br /><br />
            <div class="text-block">
              <a
                class="btn btn--primary type--uppercase"
                target="_blank"
                rel="noopener"
                :href="career.apply_link"
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
    const career = await app.$axios.$get(app.$urls.career(title));

    return { career: career.data[0] };
  },
  head() {
    return {
      title: (this.career && this.career.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.career && this.career.seo_description) || "",
        },
      ],
    };
  },
};
</script>
