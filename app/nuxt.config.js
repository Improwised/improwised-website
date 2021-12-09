import axios from "axios";
import head from "./config/head.js";
import { slugify } from "./plugins/filters.js";

require("dotenv").config(); // eslint-disable-line nuxt/no-cjs-in-config

const CompressionPlugin = require("compression-webpack-plugin"); // eslint-disable-line nuxt/no-cjs-in-config

export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: head(process.env.MODE),

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/filters" }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      "@nuxtjs/eslint-module",
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    [
      "@nuxtjs/stylelint-module",
      {
        fix: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // sitemap
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    hostname: process.env.BASE_URL,
    defaults: {
      lastmod: new Date(),
    },
  },

  publicRuntimeConfig: {
    MODE: process.env.MODE,
    BASE_URL: process.env.BASE_URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },

    extractCSS: {
      ignoreOrder: true,
    },

    cssSourceMap: true,

    plugins: [new CompressionPlugin()],

    extend(config, ctx) {
      config.devtool = "source-map";
    },
  },

  render: {
    injectScripts: false,
  },

  generate: {
    routes: async () => {
      const routes = [];

      await axios
        .get(`${process.env.BASE_URL}/items/careers?fields=title&sort=title`)
        .then((response) => {
          const careers = response.data.data;
          careers.forEach((career) =>
            routes.push(`/careers/${slugify(career.title)}`)
          );
        });

      await axios
        .get(`${process.env.BASE_URL}/items/services?fields=title&sort=title`)
        .then((response) => {
          const services = response.data.data;
          services.forEach((career) =>
            routes.push(`/services/${slugify(career.title)}`)
          );
        });

      return routes;
    },
  },
};
