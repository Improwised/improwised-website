<template>
  <div class="main-container careers">
    <section class="">
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

    <section class="bg--secondary">
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

    <section>
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

    <section v-if="images && images.length">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mb-5 text-center">
            <h2 class="">Our Gallery</h2>
          </div>
          <!---  :autoplay="3000" --->
          <div class="col-lg-12">
            <vue-glide
              :autoplay="3000"
              :keyboard="true"
              :per-view="4"
              :bound="true"
              :rewind="false"
              type="carousel"
              :rewind-duration="0"
              class="activeSlide activeNav anabledArrow"
              :bullet="false"
              :controls="true"
            >
              <vue-glide-slide
                v-for="(img, idx) in images"
                :key="idx"
                class="mb-4"
              >
                <img
                  :src="img.src"
                  :alt="img.alt"
                  class="open-tinybox imgbox"
                  height="300"
                  :data-title="index"
                  @click="index = idx"
                />
              </vue-glide-slide>
              <div slot="control" data-glide-el="controls">
                <button data-glide-dir="<">&lt;</button>
                <button data-glide-dir=">">&gt;</button>
              </div>
            </vue-glide>
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

    <section class="bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="m-0">Our Core Values</h2>
            <p class="mb-5">
              We care about people whom we work with as much as we care about
              client we work, which you can see in core values
            </p>
          </div>
          <div
            v-for="(coreValue, index) in coreValues"
            :key="index"
            class="col-lg-4 col-md-6"
          >
            <div
              class="
                boxed boxed--border
                bg-white bg--secondary
                boxed--lg
                box-shadow
              "
            >
              <h4>{{ coreValue.title }}</h4>
              <p>{{ coreValue.description | truncate(100, "...") }}</p>
              <a
                v-if="coreValue.content && coreValue.content.length"
                :href="`/blog/${coreValue.slug}`"
              >
                <span class="btn__text"> Read More </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg--dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="mb-5">Our Blog</h2>
            <!-- <p class="mb-5">Read our blog from our company</p> -->
          </div>
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="col-lg-4 col-md-6"
          >
            <div class="boxed boxed--border bg--secondary boxed--lg box-shadow">
              <h4>{{ blog.title }}</h4>
              <p>{{ blog.description | truncate(100, "...") }}</p>
              <a
                v-if="blog.content && blog.content.length"
                :href="`/blog/${blog.slug}`"
              >
                <span class="btn__text"> Read More </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
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
            class="col-md-3 col-xs-3 col-sm-3 col-lg-2"
          >
            <div class="testimonial testimonial-2">
              <div class="testimonial__body boxed boxed--border bg--secondary">
                <img
                  :src="$urls.assets(meetTeamData.image.id)"
                  :alt="meetTeamData.name"
                  :title="meetTeamData.name"
                  height="138"
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
import Tinybox from "vue-tinybox";
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
export default {
  components: {
    Tinybox,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
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
          alt: value.src.id,
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
      images: newGalleriesData,
    };
  },
  data() {
    return {
      index: null,
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
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
};
</script>
