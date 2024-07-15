import Vue from "vue";
const moment = require("moment");

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

Vue.filter("formatDateTime", function (value) {
  if (!value) return "-";

  return `${moment(value).local().format("ddd, MMM DD, YYYY")}`;
});

const urls = {
  services: `/items/services?filter[status][_eq]=published&fields=*.*&sort=title`,
  servicesListWithTitleOnly:
    "/items/services?filter[status][_eq]=published&fields=title,slug&sort=title",
  service: (title) =>
    `/items/services?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*`,

  careers:
    "/items/pages?filter[status][_eq]=published&filter[slug][_eq]=careers&fields[]=*.*",

  jobOpenings:
    "/items/careers?filter[status][_eq]=published&fields=*.*&sort=title",
  job: (title) =>
    `/items/careers?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*`,

  caseStudies:
    "/items/case-studies?filter[status][_eq]=published&fields=*.*&sort=-date_created",

  aboutUs: "/items/about_us?filter[status][_eq]=published&fields=*.*",

  whyus: "/items/why_us?filter[status][_eq]=published&fields=*.*&sort=title",

  testimonials:
    "/items/testimonials?filter[status][_eq]=published&fields=*.*&sort=sort,-id&limit=3",

  whyUsHome: `/items/why_us_home?filter[status][_eq]=published&fields=*.*&sort=title`,

  whoWeAre: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=who-we-are&fields[]=*.*,tags.tags_id.name`,
  whatWeDo: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=what-we-do&fields[]=*.*,tags.tags_id.name`,
  simpleHiringProcess: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=simple-hiring-process&fields[]=*.*,tags.tags_id.name`,
  coreValues: `/items/blog?filter[status][_eq]=published&filter[tags][tags_id][_eq]=2&sort=sort,-id&limit=3&fields[]=*.*`,
  meetTeam: `/items/team?filter[status][_eq]=published&fields=*.*&sort=sort,id`,
  blogs: `/items/blog?filter[status][_eq]=published&filter[tags][tags_id][_neq]=2&sort=-date_created&limit=6&fields[]=*.*,tags.*`,
  blog: (title) =>
    `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*,tags.tags_id.name,users.user_created.first_name,users.user_created.last_name`,
  blogothers: (title) =>
    `/items/blog?filter[status][_eq]=published&sort=-date_created&limit=3&fields[]=*.*&filter[slug][_neq]=${title}&filter[tags][tags_id][_neq]=2`,
  blogPageData: `/items/blog?filter[status][_eq]=published&sort=-date_created&fields[]=*.*&filter[tags][tags_id][_neq]=2`,
  gallery: `/items/gallery?filter[status][_eq]=published&fields[]=*.*&sort=sort,-id`,

  privacypolicy: `/items/privacy_policy`,
  termsofuse: `/items/terms`,
};

export default function (context, inject) {
  inject("titlecase", titlecase);
  context.$titlecase = titlecase;

  inject("slugify", slugify);
  context.$slugify = slugify;

  const assets = (id) => `${context.$config.DATA_URL}/assets/${id}`;
  urls.assets = assets;

  const link = (id, extension) =>
    context.store.state.generate
      ? `/${id}.${extension}`
      : `${context.$config.DATA_URL}/assets/${id}`;
  inject("link", link);
  context.$link = link;

  inject("urls", urls);
  context.$urls = urls;
}
