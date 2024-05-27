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

    <section v-if="blogList && blogList.length" class="space--sm services">
      <div class="container">
        <Blog :blog-list="blogList" />
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
    const blogList = await app.$axios.$get(app.$urls.blogPageData);

    return { blogList: blogList.data };
  },
  head() {
    const image = this.$img("/img/blog-bk-1.png", {
      format: "webp",
      height: "400px",
    });

    const blogTitle = "Blogs - Improwised Technologies Pvt. Ltd.";
    const blogDescription = "Our Blog";
    return {
      title: "Blogs - Improwised Technologies Pvt. Ltd.",
      meta: [
        {
          name: "description",
          content: blogDescription,
        },
        {
          name: "title",
          content: blogTitle,
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
          content: blogTitle,
        },
        {
          property: "og:description",
          content: blogDescription,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + image,
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
          content: blogTitle,
        },
        {
          property: "twitter:description",
          content: blogDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + image,
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
};
</script>
