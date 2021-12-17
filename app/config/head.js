/* eslint-disable no-unused-vars */

import constants from "./constants.js";

// ===================================

const htmlAttrs = { lang: "en" };

// ===================================

const meta = [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "format-detection", content: "telephone=no" },
  { name: "author", content: "Improwised Technologies Pvt. Ltd." },
  { name: "theme-color", content: "#FFFFFF" },
  { name: "application-name", content: "Improwised Technologies Pvt. Ltd." },
  { name: "msapplication-TileColor", content: "#FFFFFF" },
  {
    name: "msapplication-TileImage",
    content: "/img/favicon/mstile-144x144.png",
  },
  {
    name: "msapplication-square70x70logo",
    content: "/img/favicon/mstile-70x70.png",
  },
  {
    name: "msapplication-square150x150logo",
    content: "/img/favicon/mstile-150x150.png",
  },
  {
    name: "msapplication-wide310x150logo",
    content: "/img/favicon/mstile-310x150.png",
  },
  {
    name: "msapplication-square310x310logo",
    content: "/img/favicon/mstile-310x310.png",
  },
];

// ===================================

const devLinks = [
  {
    href: "/css/bootstrap.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/stack-interface.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/socicon.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/lightbox.min.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/flickity.css",
    rel: "stylesheet",
    type: "text/css",
  },
  {
    href: "/css/iconsmind.css",
    rel: "stylesheet",
    type: "text/css",
  },
  { href: "/css/theme.css", rel: "stylesheet", type: "text/css", media: "all" },
  { href: "/css/index.css", rel: "stylesheet", type: "text/css", media: "all" },
  {
    href: "/css/font-rubiklato.css",
    rel: "stylesheet",
    type: "text/css",
  },
];

const prodLinks = [
  {
    href: "/dist/index.min.css",
    rel: "stylesheet",
    type: "text/css",

    lazyload: true,
  },
];

const _link = [
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { href: "https://fonts.googleapis.com", rel: "preconnect" },
  { href: "https://maps.googleapis.com", rel: "preconnect" },
  { href: "https://vars.hotjar.com", rel: "preconnect" },
  { href: "https://static.hotjar.com", rel: "preconnect" },
  { href: "https://www.gstatic.com", rel: "preconnect" },
  { href: "https://script.hotjar.com", rel: "preconnect" },
  {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i&display=swap",
    rel: "stylesheet",
    lazyload: true,
  },
  {
    href: "https://fonts.googleapis.com/css?family=Lato:400,400i,700%7CRubik:300,400,500&display=swap",
    rel: "stylesheet",
    lazyload: true,
  },
  {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
    rel: "stylesheet",
    lazyload: true,
  },
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/img/favicon/apple-touch-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/img/favicon/apple-touch-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/img/favicon/apple-touch-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/img/favicon/apple-touch-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/img/favicon/apple-touch-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/img/favicon/apple-touch-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/img/favicon/apple-touch-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/img/favicon/apple-touch-icon-152x152.png",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-196x196.png",
    sizes: "196x196",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-96x96.png",
    sizes: "96x96",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-16x16.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon/favicon-128.png",
    sizes: "128x128",
  },
  { rel: "manifest", href: "/manifest.json" },
];

// ===================================

const devScripts = [
  { src: "/js/jquery-3.5.1.min.js", body: true },
  { src: "/js/flickity.min.js", body: true },
  { src: "/js/easypiechart.min.js", body: true },
  { src: "/js/parallax.js", body: true },
  { src: "/js/typed.min.js", body: true },
  { src: "/js/datepicker.js", body: true },
  { src: "/js/isotope.min.js", body: true },
  { src: "/js/lightbox.min.js", body: true },
  { src: "/js/granim.min.js", body: true },
  { src: "/js/twitterfetcher.min.js", body: true },
  { src: "/js/spectragram.min.js", body: true },
  { src: "/js/smooth-scroll.min.js", body: true },
  { src: "/js/scripts.js", body: true },
  { src: "/js/contactus.js", body: true },
  { src: "/js/lazysizes.min.js", body: true },
];

const prodScripts = [{ src: "/dist/index.min.js", async: true, body: true }];

// ===================================

export default function (mode) {
  return {
    title: constants.title,
    htmlAttrs,
    meta,
    link: _link,
    // link: _link.concat(mode === "development" ? devLinks : prodLinks),
    // script: mode === "development" ? devScripts : prodScripts,
  };
}
