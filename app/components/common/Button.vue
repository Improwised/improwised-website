<template>
  <div class="col-sm-3 text-right text-center-xs">
    <a class="btn btn--primary type--uppercase" href="/contact">
      <span class="btn__text"> {{ text }} </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
  },
};
</script>
