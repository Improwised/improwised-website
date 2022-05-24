<template>
  <div v-if="blog" class="main-container">
    <section class="space--xs">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <article>
              <div class="article__title text-left">
                <h1 v-if="blog.title" class="h2">{{ blog.title }}</h1>
                <div class="show-featured author_block">
                  <div class="post-img">
                    <a href="#">
                      <img
                        src="https://facttradingco.com/images/testimonials/pic2.jpg"
                        alt=""
                        class=""
                    /></a>
                  </div>
                  <div class="post-desc w-100">
                    <a
                      v-if="
                        blog.user_created.first_name ||
                        blog.user_created.last_name
                      "
                      href="#"
                      >{{ blog.user_created.first_name }}
                      {{ blog.user_created.last_name }}</a
                    >
                    <a v-else href="#"> Improwised Technologies</a>

                    <div class="row">
                      <div class="col-sm-6">
                        Created at {{ blog.date_created | formatDateTime }}
                      </div>
                      <div class="col-sm-6 text-right">
                        Updated at

                        {{ blog.date_updated | formatDateTime }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end article title-->
              <div>
                <div v-if="blog.content" v-html="blog.content"></div>
              </div>
              <hr />
              <div class="article__share mt-0">
                <h4>
                  Tags :
                  <span class="text-muted font-16">
                    <span v-for="(blogtag, index) in blog.tags" :key="index">
                      <span>{{ blogtag.tags_id.name }}</span>
                      <span v-if="index + 1 < blog.tags.length">, </span>
                    </span>
                  </span>
                </h4>
              </div>
              <hr />
              <div class="article__share mt-0">
                <ul class="social-list list-inline list--hover blog_social">
                  <span class="h4 d-inline"> Share : </span>
                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="email"
                      :title="`${blog.title}`"
                      :url="`${baseUrlPath}`"
                      :description="`${blog.description}`"
                    >
                      <i class="socicon socicon-google icon icon--xs"></i>
                    </ShareNetwork>
                  </li>

                  <li class="list-inline-item mr-0">
                    <ShareNetwork
                      network="linkedin"
                      :title="`${blog.title}`"
                      :url="`${baseUrlPath}`"
                      :description="`${blog.description}`"
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
                      :description="`${blog.description}`"
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
                      :description="`${blog.description}`"
                    >
                      <i class="socicon socicon-whatsapp icon icon--xs"></i>
                    </ShareNetwork>
                  </li>
                </ul>
              </div>
            </article>
            <!--end item-->
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      v-if="blogothers"
      class="space--sm services boxed--border bg--secondary"
    >
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col-sm-12"><h2>Recent Blogs</h2></div>
        </div>
        <div class="row">
          <div
            v-for="(blogother, index) in blogothers"
            :key="index"
            class="col-lg-4 col-md-6"
            data-masonry-filter="Marketing"
          >
            <article class="feature feature-3 boxed boxed--border">
              <div class="feature__body">
                <h4>{{ blogother.title }}</h4>
                <p>{{ blogother.description | truncate(100, "...") }}</p>
                <span class="font-14">{{
                  blogother.date_created | formatDateTime
                }}</span>
                <br />
                <a :href="`/blog/${blogother.slug}`" class="float-right">
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
export default {
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
    const blogothers = await app.$axios.$get(app.$urls.blogothers(title));
    return { blog: blog.data[0], blogothers: blogothers.data };
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
      ],
    };
  },
};
</script>
