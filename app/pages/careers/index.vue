<template>
  <div class="main-container careers">
    <section v-if="careers" class="">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div>
              <h1>{{ careers.title }}</h1>
              <div class="lead" v-html="careers.description"></div>
              <a class="btn btn--primary type--uppercase" href="/careers/jobs">
                <span class="btn__text">Job Openings</span>
              </a>
              <a class="btn" href="/careers/internship-program">
                <span class="btn__text">Internship Program</span>
              </a>
              <span class="block type--fine-print">
                If you don't find your role, we will still hear you,
                <a
                  href="mailto:careers@improwised.com?subject=Dropped Resume to get job"
                  target="_blank"
                  >send resume here</a
                >.
              </span>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              :src="$urls.assets(careers.image.id)"
              :alt="careers.image.title"
              :title="careers.image.title"
            />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section v-if="whoWeAre" class="bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div>
              <p class="m-0">Our Culture</p>
              <h2>{{ whoWeAre.title }}</h2>
              <div class="lead" v-html="whoWeAre.description"></div>
              <a
                v-if="whoWeAre.content && whoWeAre.content.length"
                :href="`/blog/${whoWeAre.slug}`"
              >
                <span class="btn__text"> Read More </span>
              </a>
            </div>
          </div>
          <div
            class="col-lg-6 justify-content-center d-flex align-items-center"
          >
            <img
              :src="$urls.assets(whoWeAre.image.id)"
              :alt="whoWeAre.image.title"
              :title="whoWeAre.image.title"
            />
          </div>
        </div>
      </div>
      <h1></h1>
    </section>

    <section v-if="whatWeDo">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 justify-content-center d-flex align-items-center"
          >
            <img
              :src="$urls.assets(whatWeDo.image.id)"
              :alt="whatWeDo.image.title"
              :title="whatWeDo.image.title"
            />
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div>
              <p class="m-0">Our Culture</p>
              <h2>{{ whatWeDo.title }}</h2>
              <div class="lead" v-html="whatWeDo.description"></div>
              <a
                v-if="whatWeDo.content && whoWeAre.content.length"
                :href="`/blog/${whatWeDo.slug}`"
              >
                <span class="btn__text"> Read More </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="images && images.length"
      class="bg--secondary gallery_section"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mb-5 text-center">
            <h2 class="">Our Gallery</h2>
          </div>
          <!---  :autoplay="3000" --->
          <div class="col-lg-12">
            <VueSlickCarousel v-bind="settings">
              <div v-for="(img, idx) in images" :key="idx">
                <img
                  :src="img.src"
                  :alt="img.alt"
                  class="open-tinybox imgbox"
                  @click="index = idx"
                />
              </div>
            </VueSlickCarousel>

            <client-only>
              <Tinybox
                v-model="index"
                :index="index"
                :images="images"
              ></Tinybox>
            </client-only>
          </div>
        </div>
      </div>
    </section>

    <section v-if="coreValues && coreValues.length" class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="m-0">Our Core Values</h2>
            <p class="mb-5">
              We care about people whom we work with as much as we care about
              client we work, which you can see in core values
            </p>
          </div>
        </div>
        <Blog :blogsdata="coreValues" />
      </div>
    </section>
    <section v-if="blogs && blogs.length" class="bg--secondary services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="mb-5">Our Blog</h2>
            <!-- <p class="mb-5">Read our blog from our company</p> -->
          </div>
        </div>
        <Blog :blogsdata="blogs" />
      </div>
    </section>

    <section v-if="meetTeam && meetTeam.length">
      <div class="container">
        <div class="row justify-enter">
          <div class="col-lg-12">
            <h2 class="m-0">Meet the Team</h2>
            <p class="mb-5">
              Our team is biggest advocate for ourself, listen directly from
              them.
            </p>
          </div>

          <div
            v-for="(meetTeamData, index) in meetTeam"
            :key="index"
            class="col-sm-4 col-md-3 col-xs-4 col-lg-2 col-6"
          >
            <!-- -->

            <div class="testimonial testimonial-2">
              <div class="testimonial__body boxed boxed--border bg--secondary">
                <img
                  :src="$urls.assets(meetTeamData.image.id)"
                  :alt="meetTeamData.name"
                  :title="meetTeamData.name"
                  height="auto"
                  width="100%"
                />

                <div class="testimonial__image m-0 text-center">
                  <h5>{{ meetTeamData.name }}</h5>
                  <span>{{ meetTeamData.designation }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import Tinybox from "vue-tinybox";
import Blog from "@/components/Blog.vue";

export default {
  components: {
    Tinybox,
    VueSlickCarousel,
    Blog,
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
    const careers = await app.$axios.$get(app.$urls.careers);
    const whoWeAre = await app.$axios.$get(app.$urls.whoWeAre);
    const whatWeDo = await app.$axios.$get(app.$urls.whatWeDo);
    const coreValues = await app.$axios.$get(app.$urls.coreValues);
    const meetTeam = await app.$axios.$get(app.$urls.meetTeam);
    const blogs = await app.$axios.$get(app.$urls.blogs);
    const gallery = await app.$axios.$get(app.$urls.gallery);
    const newGalleriesData = [];
    if (gallery.data.length > 0) {
      gallery.data.forEach((value, index) => {
        const galleries = {
          src: app.$urls.assets(value.src.id),
          alt: value.alt !== "" ? value.alt : value.image_name,
          thumbnail: app.$urls.assets(value.src.id),
        };
        newGalleriesData.push(galleries);
      });
    }
    return {
      careers: careers.data[0],
      whoWeAre: whoWeAre.data[0],
      whatWeDo: whatWeDo.data[0],
      coreValues: coreValues.data,
      meetTeam: meetTeam.data,
      blogs: blogs.data,
      images: newGalleriesData.concat(newGalleriesData),
    };
  },
  data() {
    return {
      index: null,

      settings: {
        slidesToShow: 4,
        rows: 2,
        slidesPerRow: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 500,
        swipeToSlide: true,
        cssEase: "linear",
        slidesToScroll: 4,

        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },

  head() {
    return {
      title: (this.careers && this.careers.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.careers && this.careers.seo_description) || "",
        },
      ],
    };
  },
  // methods: {
  //   setFilter(filter) {
  //     this.currentFilter = filter;
  //   },
  // },
};
</script>
