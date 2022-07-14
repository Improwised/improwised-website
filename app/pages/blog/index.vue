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

    <section
      v-if="blogPageData && blogPageData.length"
      class="space--sm services"
    >
      <div class="container">
        <Blog :blogsdata="blogPageData" />
      </div>

      <!--end of container-->
    </section>
    <section v-else class="space--sm services">
      <div class="container">
        <h3 class="text-center">No Records Found.</h3>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb.vue";
import Blog from "@/components/Blog.vue";
export default {
  components: {
    Breadcrumb,
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
