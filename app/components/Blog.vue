<template>
  <div class="row">
    <div
      v-for="(blogdata, index) in blogsdata"
      :key="index"
      class="col-lg-4 col-md-6"
    >
      <article class="feature feature-3 blog-feature boxed boxed--border">
        <div class="feature__body">
          <h4>{{ blogdata.title }}</h4>
          <p class="pb-4">{{ blogdata.description }}</p>

          <span class="font-14 float-left">{{
            blogdata.date_created | formatDateTime
          }}</span>
          <a
            v-if="blogdata.content && blogdata.content.length"
            :href="`/blog/${blogdata.slug}`"
            class="float-right"
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
  layout: "theme",
  props: {
    blogsdata: {
      type: Array,
      required: true,
    },
  },
};
</script>
