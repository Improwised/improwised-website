<template>
  <div :class="`p-3 consent ${isConsentShow ? 'd-block' : 'd-none'}`">
    <h3 class="m-0 p-0 h5">Cookies</h3>
    <div class="">
      We use cookies to improve your experience on our website and to analyze
      site traffic. By continuing to browse our site, you consent to our use of
      cookies. For more information, please see our
      <a href="/privacy-policy" class="color--primary-1">privacy policy</a>.
      <br />
      <button
        class="mt-2 consent-button btn btn--primary px-3"
        @click="hideConsent"
      >
        Ok I Understand
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConsentShow: false,
    };
  },
  mounted() {
    const consent = localStorage.getItem("consent");
    if (!consent) {
      this.isConsentShow = true;
    }
  },
  methods: {
    hideConsent() {
      localStorage.setItem("consent", false);
      this.isConsentShow = false;
    },
  },
};
</script>

<style>
.consent {
  bottom: 0;
  position: fixed;
  max-width: 443px;
  background-color: white;
  border-radius: 0 15px 0 0;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.consent-button {
  white-space: nowrap;
}
</style>
