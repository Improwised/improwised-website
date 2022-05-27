<template>
  <canvas id="granim-canvas" ref="granimCanvas"></canvas>
</template>

<script>
import Granim from "granim";

export default {
  name: "GranimElement",
  data() {
    return {
      GObj: Object,
    };
  },
  mounted() {
    this.GObj = new Granim({
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
