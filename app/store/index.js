export const strict = false;

export const state = () => ({
  services: [],
  generate: false,
});

export const mutations = {
  services(state, services) {
    state.services = services;
  },
  generate(state, generate) {
    state.generate = generate;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    await dispatch("servicesListWithTitleOnly").then((services) => {
      commit("services", services.data);
      if (process.argv[2] && process.argv[2] === "generate") {
        commit("generate", true);
      }
    });
  },

  servicesListWithTitleOnly({ commit }, slug) {
    return this.$axios.$get(this.$urls.servicesListWithTitleOnly);
  },
};
