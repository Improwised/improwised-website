<template>
  <div class="main-container">
    <div class="pp-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 py-5 text-center">
            <h3 class="m-0 p-0">Privacy Policy</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 py-5">
          <div class="privacypolicy" v-html="privacyPolicy.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const privacyPolicy = await app.$axios.$get(app.$urls.privacypolicy);
    return {
      privacyPolicy: privacyPolicy.data,
    };
  },
};
</script>

<style>
.pp-hero {
  background-color: #b0c4de;
}

.privacypolicy * {
  line-height: 1.25 !important;
  font-size: 14px;
}

.privacypolicy ul,
.privacypolicy ol {
  list-style: auto;
  padding: revert-layer;
  margin: auto;
}

div.privacypolicy li {
  margin-bottom: 5px;
}

div.privacypolicy p {
  margin-bottom: 10px;
}
</style>
