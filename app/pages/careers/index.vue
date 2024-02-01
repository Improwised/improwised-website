<template>
  <div class="main-container careers">
    <section v-if="careers" class="">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center md-order-2">
            <div>
              <h1>{{ careers.title }}</h1>
              <div class="lead" v-html="careers.description"></div>
              <Button text="Job Openings" redirect="/careers/jobs" />
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
          <div class="col-lg-6 md-order-1">
            <nuxt-img
              v-if="careers.image"
              :src="$urls.assets(careers.image.id)"
              :alt="careers.image.title"
              :title="careers.image.title"
              format="webp"
              width="540px"
              height="auto"
              loading="lazy"
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
          <div class="col-lg-6 d-flex align-items-center md-order-2">
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
            class="col-lg-6 justify-content-center d-flex align-items-center md-order-1"
          >
            <nuxt-img
              v-if="whoWeAre.image"
              :src="$urls.assets(whoWeAre.image.id)"
              :alt="whoWeAre.image.title"
              :title="whoWeAre.image.title"
              format="webp"
              width="406px"
              height="auto"
              loading="lazy"
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
            <nuxt-img
              v-if="whatWeDo.image"
              :src="$urls.assets(whatWeDo.image.id)"
              :alt="whatWeDo.image.title"
              :title="whatWeDo.image.title"
              format="webp"
              width="406px"
              height="auto"
              loading="lazy"
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
            <h2 class="">Life at Improwised Technologies</h2>
          </div>
          <!---  :autoplay="3000" --->
          <div class="col-lg-12">
            <VueSlickCarousel v-bind="settings">
              <div v-for="(img, idx) in images" :key="idx">
                <nuxt-img
                  v-if="img"
                  :src="img.src"
                  :alt="img.alt"
                  format="jpeg"
                  loading="lazy"
                  class="card-img-top"
                  @click="index = idx"
                />
              </div>
            </VueSlickCarousel>

            <client-only>
              <Tinybox
                v-model="index"
                :index="index"
                :images="staticImages"
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
        <Blog :blog-list="coreValues" />
      </div>
    </section>
    <section v-if="blogList && blogList.length" class="bg--secondary services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h2 class="mb-5">Our Blog</h2>
            </div>
            <!-- <p class="mb-5">Read our blog from our company</p> -->
          </div>
        </div>
        <Blog :blog-list="blogList" />
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
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Tinybox,
    VueSlickCarousel,
    Blog,
    Button,
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
    const blogList = await app.$axios.$get(app.$urls.blogs);
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
      blogList: blogList.data,
      images: newGalleriesData,
      // images: newGalleriesData.concat(newGalleriesData),
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
        accessibility: false,
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
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },

          {
            breakpoint: 600,
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
        {
          name: "title",
          content: (this.careers && this.careers.seo_title) || "",
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
          content: (this.careers && this.careers.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.careers && this.careers.seo_description) || "",
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
          content: (this.careers && this.careers.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.careers && this.careers.seo_description) || "",
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
  computed: {
    staticImages() {
      const images = [];
      this.images &&
        this.images.length &&
        this.images.forEach(({ src, alt, thumbnail }) => {
          images.push({
            src: this.$img(src, { width: 918, height: 600, format: "jpeg" }),
            alt,
            thumbnail: this.$img(src, {
              width: 88,
              height: 88,
              format: "jpeg",
            }),
          });
        });
      return images;
    },
  },
};
</script>
