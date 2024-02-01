<template>
  <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6 tool">
    <div class="boxed boxed--border text-center">
      <img
        :src="image"
        :alt="name"
        :title="name"
        class="lazyload"
        loading="lazy"
      />
      <h3 class="h6 remove-height">{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.tool {
  display: grid;
}
</style>
