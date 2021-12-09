export const strict = false;

export const state = () => ({
  services: [],
});

export const mutations = {
  services(state, services) {
    state.services = services;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    await dispatch("servicesListWithTitleOnly").then((services) => {
      commit("services", services.data);
    });
  },

  servicesListWithTitleOnly({ commit }, slug) {
    return this.$axios.$get(this.$urls.servicesListWithTitleOnly);
  },
};
