<template>
  <div class="row">
    <div
      v-for="(blogs, index) in blogList"
      :key="index"
      class="col-lg-4 col-md-6 mb-1"
    >
      <article class="feature feature-3 blog-feature boxed boxed--border m-1">
        <div class="feature__body">
          <h4>{{ blogs.title }}</h4>
          <p class="pb-4">{{ blogs.description }}</p>

          <span class="font-14 blog_sub_details_left">{{
            blogs.date_created | formatDateTime
          }}</span>
          <a
            v-if="blogs.content && blogs.content.length"
            :href="`/blog/${blogs.slug}`"
            class="float-right blog_sub_details_right"
          >
            Read More
          </a>
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
