<template>
  <div class="main-container">
    <section class="space--xs">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <article v-if="blog">
              <div class="article__title text-left">
                <h1 v-if="blog.title" class="h2">{{ blog.title }}</h1>
                <div class="show-featured author_block">
                  <!-- <div class="post-img">
                     <a href="#">
                      <img
                        v-if="blog.user_created.avatar"
                        :src="$urls.assets(blog.user_created.id)"
                        :alt="blog.user_created.first_name"
                        loading="lazy"
                        :title="blog.user_created.first_name"
                      />
                      <img
                        v-else
                        src="/img/avatar-round-1.png"
                        alt="User"
                        loading="lazy"
                        title="User"
                      />
                    </a>
                  </div> -->
                  <div class="post-desc w-100">
                    <!-- <a
                      v-if="
                        blog.user_created.first_name ||
                        blog.user_created.last_name
                      "
                      href="#"
                      >{{ blog.user_created.first_name }}
                      {{ blog.user_created.last_name }}</a
                    >
                    <a v-else href="#"> Improwised Technologies</a> -->

                    <div class="row">
                      <div class="col-sm-6">
                        Published Date {{ blog.date_updated | formatDateTime }}
                      </div>
                      <!-- <div class="col-sm-6 text-right">
                        Updated at

                        {{ blog.date_updated | formatDateTime }}
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <!--end article title-->
              <div class="blogdesc">
                <div v-if="blog.description">
                  <p v-html="blog.description"></p>
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
export default {
  components: {
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
    const title = params.slug;
    //  const tagsname = "";
    const blog = await app.$axios.$get(app.$urls.blog(title));
    blog.data[0].content = app.$unescapeHTML(blog.data[0].content);
    blog.data[0].content = app.$dImage(blog.data[0].content);
    blog.data[0].content = await app.$gist(blog.data[0].content);
    const blogList = await app.$axios.$get(app.$urls.blogothers(title));
    return { blog: blog.data[0], blogList: blogList.data };
  },
  data() {
    if (process.client) {
      return {
        baseUrlPath: window.location.href, // this.$route.fullPath,
      };
    } else {
      return {
        baseUrlPath: "",
      };
    }
  },
  head() {
    return {
      title: (this.blog && this.blog.seo_title) || "",
      meta: [
        {
          name: "description",
          content: (this.blog && this.blog.seo_description) || "",
        },
        {
          name: "title",
          content: (this.blog && this.blog.seo_title) || "",
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
          content: (this.blog && this.blog.seo_title) || "",
        },
        {
          property: "og:description",
          content: (this.blog && this.blog.seo_description) || "",
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
          content: (this.blog && this.blog.seo_title) || "",
        },
        {
          property: "twitter:description",
          content: (this.blog && this.blog.seo_description) || "",
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
  methods: {
    strippedHtml(description) {
      const regex = /(<([^>]+)>)/gi;

      return description.replace(regex, "");
    },
  },
};
</script>
