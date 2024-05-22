<template>
  <div class="row">
    <div
      v-for="(blogs, index) in blogList"
      :key="index"
      class="col-lg-4 col-md-6 mb-1"
      style="cursor: pointer"
    >
      <article class="feature feature-3 blog-feature boxed boxed--border m-1">
        <div class="feature__body">
          <h4>
            <a :href="`/blog/${blogs.slug}`" class="blog-title">{{
              blogs.title
            }}</a>
          </h4>
          <p class="pb-5" v-html="blogs.description"></p>

          <span class="font-14 blog_sub_details_left">{{
            blogs.date_created | formatDateTime
          }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.blog-title {
  color: inherit;
  font-weight: normal;
}
</style>
