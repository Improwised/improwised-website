<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div>
          <h1 class="h2 mb-0">{{ title }}</h1>
          {{ dateTime }}
        </div>
      </div>
      <div
        class="col-md-6 mt-4 mb-3 d-flex align-items-center justify-content-center"
      >
        <nuxt-img
          v-if="image"
          :src="image"
          :alt="`${title} | Improwised Technology`"
          height="400"
          format="webp"
          class="img-dim"
          decoding="async"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
    },
  },
};
</script>
