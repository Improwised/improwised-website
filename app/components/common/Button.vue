<template>
  <a class="btn btn--primary type--uppercase" :href="redirect">
    <span class="btn__text"> {{ text }} </span>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
    redirect: {
      type: String,
      require: true,
    },
  },
};
</script>
