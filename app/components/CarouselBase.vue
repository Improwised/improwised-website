<template>
  <ClientOnly>
    <Flickity ref="flickity" class="carousel" :options="computedOptions">
      <slot />
    </Flickity>
  </ClientOnly>
</template>

<script>
export default {
  components: {
    [process.browser && "Flickity"]: () => import("vue-flickity"),
  },
  props: {
    direction: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedOptions() {
      return {
        initialIndex: 3,
        prevNextButtons: false,
      };
    },
  },
};
</script>
