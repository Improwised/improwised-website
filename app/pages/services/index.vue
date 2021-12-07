<template>
  <div>redirect</div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params, redirect }) {
    const services = await app.$axios.$get(app.$urls.services);
    redirect(`/services/${app.$slugify(services.data[0].title)}`);

    return {};
  },
};
</script>
