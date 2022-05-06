<template>
  <canvas id="granim-canvas" ref="granimCanvas"></canvas>
</template>

<script>
import Granim from "granim";
import Vue from "vue";

export default {
  name: "GranimElement",
  mounted() {
    // Export $granimInstance globally as a Vue prototype
    // you can acces it in other components with
    // this.$granimInstance (see GranimButtons.vue)
    Vue.prototype.$granimInstance = new Granim({
      element: this.$refs.granimCanvas,
      name: "basic-gradient",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#4876BD", "#5448BD"],
            ["#8F48BD", "#BD48B1"],
          ],
          transitionSpeed: 1000,
        },
      },
    });
  },
};
</script>
