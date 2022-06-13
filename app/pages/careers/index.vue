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

    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mb-5 text-center">
            <h2 class="">Our Gallery</h2>
          </div>
          <div class="col-lg-12">
            <vue-glide
              :autoplay="3000"
              :keyboard="true"
              :per-view="8"
              :bound="true"
              :rewind="true"
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
                  :src="img.thumbnail"
                  :alt="img.alt"
                  class="open-tinybox imgbox"
                  height="200"
                  @click="index = idx"
                />
              </vue-glide-slide>
              <div slot="control" data-glide-el="controls">
                <button data-glide-dir="<">&lt;</button>
                <button data-glide-dir=">">&gt;</button>
              </div>
            </vue-glide>

            <hr />

            <div class="filters text-center">
              <span
                class="filter"
                :class="{ active: currentFilter === 'ALL' }"
                @click="setFilter('ALL')"
                >ALL</span
              >
              <span
                class="filter"
                :class="{ active: currentFilter === 'ART' }"
                @click="setFilter('ART')"
                >ART</span
              >
              <span
                class="filter"
                :class="{ active: currentFilter === 'WORKSHOPS' }"
                @click="setFilter('WORKSHOPS')"
                >WORKSHOPS</span
              >
              <span
                class="filter"
                :class="{ active: currentFilter === 'DOODLES' }"
                @click="setFilter('DOODLES')"
                >DOODLES</span
              >
            </div>

            <client-only>
              <Tinybox v-model="index" :images="images"></Tinybox>

              <transition-group class="projects" name="projects">
                <div v-for="(image, idx) in images" :key="idx" class="project">
                  <div
                    v-if="
                      currentFilter === image.category ||
                      currentFilter === 'ALL'
                    "
                    class=""
                  >
                    <img
                      class="open-tinybox"
                      :alt="image.alt"
                      :src="image.thumbnail"
                      @click="index = idx"
                    />
                  </div>
                </div>
              </transition-group>
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

    return {
      careers: careers.data[0],
      whoWeAre: whoWeAre.data[0],
      whatWeDo: whatWeDo.data[0],
      coreValues: coreValues.data,
      meetTeam: meetTeam.data,
      blogs: blogs.data,
    };
  },
  data() {
    return {
      currentFilter: "ALL",
      images: [
        {
          alt: "Artwork",
          src: "https://picsum.photos/300",
          category: "ART",
          thumbnail: "https://picsum.photos/300",
        },
        {
          alt: "Charcoal",
          src: "https://picsum.photos/seed/picsum/300",
          category: "ART",
          thumbnail: "https://picsum.photos/seed/picsum/300",
        },
        {
          alt: "Sketching",
          src: "https://picsum.photos/id/250/300",
          category: "DOODLES",
          thumbnail: "https://picsum.photos/id/250/300",
        },
        {
          alt: "Acrillic",
          src: "https://picsum.photos/200",
          category: "WORKSHOPS",
          thumbnail: "https://picsum.photos/200",
        },
        {
          alt: "Artwork",
          src: "https://picsum.photos/id/257/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/257/300",
        },
        {
          alt: "Charcoal",
          src: "https://picsum.photos/id/240/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/240/300",
        },
        {
          alt: "Sketching",
          src: "https://picsum.photos/id/235/300",
          category: "DOODLES",
          thumbnail: "https://picsum.photos/id/235/300",
        },
        {
          alt: "Acrillic",
          src: "https://picsum.photos/id/237/300",
          category: "WORKSHOPS",
          thumbnail: "https://picsum.photos/id/237/300",
        },

        {
          alt: "Artwork",
          src: "https://picsum.photos/id/241/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/241/300",
        },
        {
          alt: "Charcoal",
          src: "https://picsum.photos/id/242/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/242/300",
        },
        {
          alt: "Sketching",
          src: "https://picsum.photos/id/243/300",
          category: "DOODLES",
          thumbnail: "https://picsum.photos/id/243/300",
        },
        {
          alt: "Acrillic",
          src: "https://picsum.photos/id/230/300",
          category: "WORKSHOPS",
          thumbnail: "https://picsum.photos/id/230/300",
        },
        {
          alt: "Artwork",
          src: "https://picsum.photos/id/231/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/231/300",
        },
        {
          alt: "Charcoal",
          src: "https://picsum.photos/id/232/300",
          category: "ART",
          thumbnail: "https://picsum.photos/id/232/300",
        },
        {
          alt: "Sketching",
          src: "https://picsum.photos/id/247/300",
          category: "DOODLES",
          thumbnail: "https://picsum.photos/id/247/300",
        },
        {
          alt: "Acrillic",
          src: "https://picsum.photos/id/248/300",
          category: "WORKSHOPS",
          thumbnail: "https://picsum.photos/id/248/300",
        },
      ],

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
