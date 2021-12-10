<template>
  <div>services</div>
</template>

<script>
export default {
  layout: "theme",
  mounted() {
    window.location.href = `/services/${this.$slugify(
      this.$store.state.services[0].title
    )}`;
  },
};
</script>
