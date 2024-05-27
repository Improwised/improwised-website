<template>
  <div class="main-container blog-style">
    <section class="space--xs">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <article v-if="blog">
              <div class="position-relative">
                <div
                  class="background-image position-absolute w-100 h-100"
                ></div>
                <Header
                  :title="blog.title"
                  :image="$urls.assets(blog.image.id)"
                  :date-time="blog.date_created | formatDateTime"
                />
              </div>

              <div class="container blogdesc">
                <div v-if="blog.description">
                  <div v-html="blog.description"></div>
                </div>
                <div v-if="blog.content" v-html="blog.content"></div>
              </div>
              <hr />
              <div class="article__share mt-0">
                <h4>
                  <span class="text-muted font-20">
                    <span v-for="(blogtag, index) in blog.tags" :key="index">
                      <span class="badge badge-secondary">
                        {{ blogtag.tags_id.name }}</span
                      >
                      <span v-if="index + 1 < blog.tags.length"> </span>
                      <!-- <span v-if="index + 1 < blog.tags.length">, </span> -->
                    </span>
                  </span>
                </h4>
              </div>
              <hr />
              <div class="article__share mt-0">
                <ul class="social-list list-inline list--hover blog_social">
                  <!-- <span class="h4 d-inline"> Share : </span> -->
                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="email"
                      :title="`${blog.title}`"
                      :url="`${baseUrlPath}`"
                      :description="`${strippedHtml(blog.description)}`"
                    >
                      <i class="socicon socicon-google icon icon--xs"></i>
                    </ShareNetwork>
                  </li>

                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="linkedin"
                      :title="`${blog.title}`"
                      :url="`${baseUrlPath}`"
                      :description="`${strippedHtml(blog.description)}`"
                    >
                      <i class="socicon socicon-linkedin icon icon--xs"></i>
                    </ShareNetwork>
                  </li>
                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="twitter"
                      :title="`${blog.title}`"
                      :url="`${baseUrlPath}`"
                    >
                      <i class="socicon socicon-twitter icon icon--xs"></i>
                    </ShareNetwork>
                  </li>
                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="facebook"
                      :title="`${blog.title}`"
                      :description="`${strippedHtml(blog.description)}`"
                      :url="`${baseUrlPath}`"
                      :quote="`${blog.title}`"
                      hashtags="blog"
                    >
                      <i class="socicon socicon-facebook icon icon--xs"></i>
                    </ShareNetwork>
                  </li>
                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="whatsapp"
                      :url="`${baseUrlPath}`"
                      :title="`${blog.title}`"
                      :description="`${strippedHtml(blog.description)}`"
                    >
                      <i class="socicon socicon-whatsapp icon icon--xs"></i>
                    </ShareNetwork>
                  </li>
                </ul>
              </div>
            </article>
            <div v-else>
              <h3>No Records Found</h3>
            </div>
            <!--end item-->
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      v-if="blogList && blogList.length"
      class="space--sm services boxed--border bg--secondary"
    >
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col-sm-12"><h2>Recent Blogs</h2></div>
        </div>
        <Blog :blog-list="blogList" />

        <!--end of masonry container-->
      </div>

      <!--end masonry-->

      <!--end of container-->
    </section>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Blog,
    Header,
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
    const title = params.slug;
    const blog = await app.$axios.$get(app.$urls.blog(title));
    blog.data[0].content = app.$dImage(blog.data[0].content);
    const blogList = await app.$axios.$get(app.$urls.blogothers(title));
    return { blog: blog.data[0], blogList: blogList.data };
  },
  data() {
    if (process.client) {
      return {
        baseUrlPath: window.location.href + "/", // this.$route.fullPath,
      };
    } else {
      return {
        baseUrlPath: "",
      };
    }
  },
  head() {
    const image =
      this.blog?.image?.id &&
      this.$img(this.$urls.assets(this.blog.image.id), {
        format: "webp",
        height: "400px",
      });

    const title = `${this.blog && this.blog.seo_title} | Improwised Technology`;
    const description = `${
      this.blog && this.blog.seo_description
    } | Improwised Technology`;

    return {
      title: title || "",
      meta: [
        {
          name: "description",
          content: (this.blog && this.blog.seo_description) || "",
        },
        {
          name: "title",
          content: title || "",
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
          content: title || "",
        },
        {
          property: "og:description",
          content: description || "",
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
          content: title || "",
        },
        {
          property: "twitter:description",
          content: description || "",
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
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
          body: true,
        },
        {
          src: "/js/hljs.js",
          body: true,
        },
      ],
    };
  },
  methods: {
    strippedHtml(description) {
      const regex = /(<([^>]+)>)/gi;

      return description.replace(regex, "");
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("/img/blog-bk-1.png");
  z-index: -1;
  opacity: 0.1;
}
</style>
