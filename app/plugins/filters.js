export function titlecase(value) {
  if (!value) return value;
  return value
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

export function slugify(value) {
  if (!value) return value;
  return value
    .replace(/(^\w|\s\w)/g, (m) => m.toLowerCase())
    .replace(/ /g, "-");
}

const urls = {
  services: `/items/services?filter[status][_eq]=published&fields=*.*&sort=title`,
  servicesListWithTitleOnly: "/items/services?filter[status][_eq]=published&fields=title",
  service: (title) =>
    `/items/services?filter[status][_eq]=published&filter[title][_eq]=${title}&single=1&fields=*.*`,

  careers: "/items/pages?filter[slug][_eq]=careers&fields[]=*.*",

  jobOpenings: "/items/careers?filter[status][_eq]=published&fields=*.*&sort=title",
  job: (title) =>
    `/items/careers?filter[status][_eq]=published&filter[title][_eq]=${title}&single=1&fields=*.*`,

  caseStudies: "/items/case-studies?filter[status][_eq]=published&fields=*.*",

  aboutUs: "/items/about_us?filter[status][_eq]=published&fields=*.*",

  whyus: "/items/why_us?filter[status][_eq]=published&fields=*.*&sort=title",

  testimonials: "/items/testimonials?filter[status][_eq]=published&fields=*.*&sort=author",

  whyUsHome: `/items/why_us_home?filter[status][_eq]=published&fields=*.*&sort=title`,

  whoWeAre: `/items/blog?filter[slug][_eq]=who-we-are&fields[]=*.*,tags.tags_id.name`,
  whatWeDo: `/items/blog?filter[slug][_eq]=what-we-do&fields[]=*.*,tags.tags_id.name`,
  simpleHiringProcess: `/items/blog?filter[slug][_eq]=simple-hiring-process&fields[]=*.*,tags.tags_id.name`
};

export default function (context, inject) {
  inject("titlecase", titlecase);
  context.$titlecase = titlecase;

  inject("slugify", slugify);
  context.$slugify = slugify;

  const assets = (id) => `${context.$config.DATA_URL}/assets/${id}`;
  urls.assets = assets;

  inject("urls", urls);
  context.$urls = urls;
}
