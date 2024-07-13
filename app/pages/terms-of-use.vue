<template>
  <div class="main-container">
    <div class="pp-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 py-5 text-center">
            <h3 class="m-0 p-0">Terms of Use</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 py-5">
          <div class="termsofuse" v-html="termsofuse.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const termsofuse = await app.$axios.$get(app.$urls.termsofuse);
    return {
      termsofuse: termsofuse.data,
    };
  },
};
</script>

<style>
.pp-hero {
  background-color: #b0c4de;
}

.termsofuse * {
  line-height: 1.25 !important;
  font-size: 14px;
}

.termsofuse ul,
.termsofuse ol {
  list-style: auto;
  padding: revert-layer;
  margin: auto;
}

div.termsofuse li {
  margin-bottom: 5px;
}

div.termsofuse p {
  margin-bottom: 10px;
}
</style>
