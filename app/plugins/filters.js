function titlecase(value) {
  if (!value) return value;
  return value
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

function slugify(value) {
  if (!value) return value;
  return value
    .replace(/(^\w|\s\w)/g, (m) => m.toLowerCase())
    .replace(/ /g, "-");
}

const urls = {
  services: `/items/services?fields=*.*&sort=title`,
  servicesListWithTitleOnly: "/items/services?fields=title",
  service: (title) =>
    `/items/services?filter[title]=${title}&single=1&fields=*.*`,

  careers: "/items/careers?fields=*.*&sort=title",
  career: (title) =>
    `/items/careers?filter[title]=${title}&single=1&fields=*.*`,

  caseStudies: "/items/case-studies?fields=*.*",

  aboutUs: "/items/about_us?fields=*.*",

  whyus: "/items/why_us?fields=*.*&sort=title",

  testimonials: "/items/testimonials?fields=*.*&sort=author",

  whyUsHome: `/items/why_us_home?fields=*.*&sort=title`,
};

export default function (context, inject) {
  inject("titlecase", titlecase);
  context.$titlecase = titlecase;

  inject("slugify", slugify);
  context.$slugify = slugify;

  const assets = (id) => `${context.$config.BASE_URL}/assets/${id}`;
  urls.assets = assets;

  inject("urls", urls);
  context.$urls = urls;
}
