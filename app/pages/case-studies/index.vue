<template>
  <!--  -->
  <div class="main-container case-studies">
    <section class="text-center heroUnit">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8">
            <h1>Case Studies</h1>
            <Breadcrumb class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <div class="container card-container">
      <section
        v-if="caseStudies && caseStudies.length"
        class="space--sm text-center pt-0"
      >
        <div class="container">
          <div class="row">
            <div
              v-for="(caseStudie, index) in caseStudies"
              :key="index"
              class="col-lg-4 col-md-6 mb-4"
            >
              <div
                class="
                  casestudies-home
                  boxed boxed--border
                  text-left
                  feature feature-1
                  case-block
                  pt-0
                  pr-0
                  pl-0
                  pb-0
                  mb-0
                "
              >
                <div class="verticle-middle text-left">
                  <div class="contentbox">
                    <a href="#" class="block bg--secondary">
                      <nuxt-img
                        :src="$urls.assets(caseStudie.image.id)"
                        :alt="caseStudie.image.title"
                        :title="caseStudie.image.title"
                        width="100%"
                        height="245"
                        loading="lazy"
                        :format="
                          caseStudie.image.filename_download.split('.')[1]
                        "
                      />
                    </a>
                  </div>

                  <div class="feature__body p-3">
                    <h5>{{ caseStudie.title }}</h5>

                    <p class="word-break mb-4">
                      {{ caseStudie.short_description }}
                    </p>

                    <a
                      :href="$urls.assets(caseStudie.document.id)"
                      target="_blank"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  layout: "theme",
  async asyncData({ app, params }) {
    const caseStudies = await app.$axios.$get(app.$urls.caseStudies);

    return { caseStudies: caseStudies.data };
  },
  head: {
    title: "Case Studies - Improwised Technologies Pvt. Ltd.",
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
