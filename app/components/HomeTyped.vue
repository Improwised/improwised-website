<template>
  <div class="col-sm-12">
    <h6 class="type--uppercase">We are Improwised Technologies.</h6>
    <h1 class="d-none">
      We help you engineer great products. We help you build applications for
      the cloud. We help you make the most of next-gen tech. We help you realize
      your product ideas.
    </h1>

    <div class="typed-headline">
      <vue-typed-js
        :strings="[
          'engineer great products.',
          'build applications for the cloud.',
          'make the most of next-gen tech.',
          'realize your product ideas.',
        ]"
        :type-speed="100"
        :loop="true"
        :show-cursor="false"
      >
        <div>
          <span class="h1 inline-block">We help you</span>
          <span
            class="h1 inline-block typed-text typed-text--cursor color--primary typing"
          ></span>
        </div>
      </vue-typed-js>
      <p class="lead">Your remote technology team.</p>

      <div class="text-center">
        <Button text="Get in touch with us" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import Button from "@/components/common/Button.vue";
Vue.use(VueTypedJs);
export default {
  components: {
    Button,
  },
};
</script>
