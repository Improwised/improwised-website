<template>
  <!--  -->
  <div class="main-container case-studies">
    <section class="text-center heroUnit">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8">
            <h1>Case Studies</h1>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <div class="container card-container">
      <section
        v-for="(caseStudie, index) in caseStudies"
        :key="index"
        :class="`imageblock switchable feature-large bg--secondary ${
          index % 2 !== 0 ? 'switchable--switch' : ''
        }`"
      >
        <div class="imageblock__content col-md-6 col-sm-6 pos-right">
          <div class="background-image-holder">
            <img
              :src="$urls.assets(caseStudie.image.id)"
              :alt="caseStudie.image.title"
              :title="caseStudie.image.title"
            />
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-6 col-sm-6 card-content">
              <h2>{{ caseStudie.title }}</h2>
              <p class="lead">{{ caseStudie.short_description }}</p>
              <a :href="$urls.assets(caseStudie.document.id)" target="_blank">
                View Details
              </a>
            </div>
          </div>
          <!--end of row-->
        </div>
        <!--end of container-->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const caseStudies = await app.$axios.$get(app.$urls.caseStudies);

    return { caseStudies: caseStudies.data };
  },
  head: {
    title: "Case Studies | Top Software Development Company",
    meta: [
      {
        name: "description",
        content:
          "Case Studies | Case Studies Listing Services | Technology Case Studies | Marketing Case Studies | Cloud Infrastructure Case Studies | Cloud Computing Services Case Studies | Technology Consulting Services Case Studies",
      },
    ],
  },
};
</script>
