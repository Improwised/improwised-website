<template>
  <!--  -->
  <div class="main-container case-studies">
    <section class="text-center heroUnit">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8">
            <h1>Our Blog</h1>
            <Breadcrumb class="m-0" />
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section v-if="blogPageData" class="space--sm services">
      <div class="container">
        <div class="row">
          <div
            v-for="(blogData, index) in blogPageData"
            :key="index"
            class="col-lg-4 col-md-6"
          >
            <article class="feature feature-3 boxed boxed--border">
              <div class="feature__body">
                <h4>{{ blogData.title }}</h4>
                <p>{{ blogData.description | truncate(100, "...") }}</p>
                <span class="font-14">{{
                  blogData.date_created | formatDateTime
                }}</span>
                <br />
                <a :href="`/blog/${blogData.slug}`" class="float-right">
                  Read More
                </a>
              </div>
            </article>
          </div>
          <!--end item-->
        </div>
        <!--end of masonry container-->
      </div>
      <!--end masonry-->

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
    const blogPageData = await app.$axios.$get(app.$urls.blogPageData);

    return { blogPageData: blogPageData.data };
  },
  head: {
    title: "Blogs - Improwised Technologies Pvt. Ltd.",
    meta: [
      {
        name: "description",
        content: "Our Blog",
      },
    ],
  },
};
</script>
