<template>
  <div v-if="blog" class="main-container">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <article>
              <div class="article__title">
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
                  <div class="post-desc">
                    <a href="#">Test</a>
                    <span class="date">
                      Blog created at
                      {{ blog.date_created | formatDateTime }}
                    </span>
                  </div>
                </div>
              </div>
              <!--end article title-->
              <div class="article__body">
                <div v-if="blog.content" v-html="blog.content"></div>
              </div>
              <div class="article__share text-center">
                <a class="btn bg--facebook btn--icon" href="#">
                  <span class="btn__text">
                    <i class="socicon socicon-facebook"></i>
                    Share on Facebook
                  </span>
                </a>
                <a class="btn bg--twitter btn--icon" href="#">
                  <span class="btn__text">
                    <i class="socicon socicon-twitter"></i>
                    Share on Twitter
                  </span>
                </a>
              </div>
            </article>
            <!--end item-->
          </div>
          <div class="col-lg-4 hidden-sm">
            <div class="sidebar boxed boxed--border bg--secondary">
              <div
                v-if="blogothers"
                class="widget widget_categories sidebar__widget recent"
              >
                <h5>Recent Posts</h5>

                <div
                  v-for="(blogother, index) in blogothers"
                  :key="index"
                  class="show-featured"
                >
                  <a :href="`/blog/${blogother.slug}`">
                    <!-- <div class="post-img">
                    <a :href="`/blog/${blogother.slug}`"
                      ><img
                        v-if="blogother.image"
                        :src="$urls.assets(blogother.image.id)"
                        :alt="blogother.title"
                        :title="blogother.title"
                      />
                    </a>
                  </div> -->
                    <div class="post-desc">
                      <h6 class="mb-1">{{ blogother.title }}</h6>
                      <div class="show-featured author_block">
                        <div class="post-img">
                          <img
                            src="https://facttradingco.com/images/testimonials/pic2.jpg"
                            alt=""
                            class=""
                          />
                        </div>
                        <div class="post-desc">
                          <h6 class="mb-0">Username</h6>
                          <span class="date">
                            {{ blogother.date_created | formatDateTime }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <!--end widget-->
              <div
                id="tag_cloud-1"
                class="widget widget_tag_cloud sidebar__widget"
              >
                <h5>Tags</h5>
                <div class="tagcloud">
                  <a
                    href="http://stack.tommusdemos.wpengine.com/tag/inspiration/"
                    class="tag-cloud-link tag-link-9 tag-link-position-1"
                    style="font-size: 8pt"
                    aria-label="Inspiration (8 items)"
                    >Inspiration</a
                  >
                  <a
                    href="http://stack.tommusdemos.wpengine.com/tag/tags/"
                    class="tag-cloud-link tag-link-10 tag-link-position-2"
                    style="font-size: 8pt"
                    aria-label="Tags (8 items)"
                    >Tags</a
                  >
                  <a
                    href="http://stack.tommusdemos.wpengine.com/tag/trends/"
                    class="tag-cloud-link tag-link-11 tag-link-position-3"
                    style="font-size: 8pt"
                    aria-label="Trends (8 items)"
                    >Trends</a
                  >
                  <a
                    href="http://stack.tommusdemos.wpengine.com/tag/web-design/"
                    class="tag-cloud-link tag-link-12 tag-link-position-4"
                    style="font-size: 8pt"
                    aria-label="Web Design (8 items)"
                    >Web Design</a
                  >
                </div>
              </div>
              <!--end widget-->
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const title = params.slug;
    const blog = await app.$axios.$get(app.$urls.blog(title));
    const blogothers = await app.$axios.$get(app.$urls.blogothers(title));
    console.log(blogothers);

    return { blog: blog.data[0], blogothers: blogothers.data };
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
