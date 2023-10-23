<template>
  <div class="main-container">
    <section class="text-center">
      <div class="container">
        <div class="row">
          <HomeTyped />
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      v-if="services && services.length"
      id="services"
      class="bg--secondary services space--xs"
    >
      <div class="container">
        <div class="row mb-5 text-center">
          <div class="col-sm-12">
            <h2 class="mb-0">Our Services</h2>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-md-6 col-sm-12"
          >
            <div
              class="feature feature-3 boxed boxed--lg boxed--border text-center"
            >
              <i
                v-if="service.icon"
                :class="`icon icon--lg color--primary ${service.icon}`"
              ></i>
              <i
                v-else
                :class="`icon icon--lg color--primary icon-Optimization`"
              ></i>
              <a :href="`/services/${service.slug}`">
                <h2 class="h4">{{ service.title }}</h2>
              </a>
              <p>{{ service.short_description }}</p>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      v-if="whyUs && whyUs.length"
      id="whyUs"
      class="features-style space--xs"
    >
      <div class="container">
        <div class="row mb-5 text-center">
          <div class="col-sm-12">
            <h2 class="mb-0">Why Us</h2>
          </div>
        </div>

        <div v-if="whyUs && whyUs.length" class="row">
          <div v-for="(whyus, index) in whyUs" :key="index" class="col-sm-6">
            <div class="feature feature-5 boxed boxed--sm boxed--border">
              <i v-if="whyus.icon" :class="`icon ${whyus.icon} icon--lg`"></i>
              <i v-else :class="`icon icon-Gears icon--lg`"></i>

              <div class="feature__body">
                <h2 class="h5">{{ whyus.title }}</h2>
                <div v-html="whyus.description"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      id="toolBox"
      class="bg--secondary text-center technologies space--xs"
    >
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-12">
            <h2 class="mb-0">Our Toolbox</h2>
          </div>
        </div>
        <div class="row text-center justify-content-center">
          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Backend</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/go.png"
                alt="go"
                title="Go"
                class="lazyload"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Go</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/laravel.png"
                alt="laravel"
                title="Laravel"
                class="lazyload"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Laravel</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/node.png"
                alt="node"
                title="Node.js"
                class="lazyload"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Node Js</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/python.png"
                alt="python"
                title="Python"
                class="lazyload"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Python</h3>
            </div>
          </div>

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Databases</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/postgresql-icon.svg"
                alt="postgresql"
                class="lazyload"
                title="PostgreSQL"
                loading="lazy"
              />
              <h3 class="h6 remove-height">PostgreSQL</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/mariadb-icon.svg"
                alt="mariadb"
                class="lazyload"
                title="MariaDB"
                loading="lazy"
              />
              <h3 class="h6 remove-height">MariaDB</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/mysql-icon.svg"
                alt="mysql"
                class="lazyload"
                title="MySQL"
                loading="lazy"
              />
              <h3 class="h6 remove-height">MySQL</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/redis.png"
                alt="redis"
                class="lazyload"
                title="Redis"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Redis</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/mongodb-icon.svg"
                alt="mongodb"
                class="lazyload"
                title="MongoDB"
                loading="lazy"
              />
              <h3 class="h6 remove-height">MongoDB</h3>
            </div>
          </div>

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Infrastructure</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/linux.png"
                alt="linux"
                class="lazyload"
                title="Linux"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Linux</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/docker.png"
                alt="docker"
                class="lazyload"
                title="Docker"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Docker</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/kubernetes.svg"
                alt="kubernetes"
                title="kubernetes"
                class="lazyload"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Kubernetes</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/helm.png"
                alt="Helm"
                class="lazyload"
                title="Helm"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Helm</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/terraform.svg"
                alt="Terraforms"
                class="lazyload"
                title="Terraform"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Terraform</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/nginx.png"
                alt="nginx"
                class="lazyload"
                title="nginx"
                loading="lazy"
              />
              <h3 class="h6 remove-height">Nginx</h3>
            </div>
          </div>
          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Cloud</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/amazon-web-services-icon.svg"
                alt="amazon_web_services"
                class="lazyload"
                loading="lazy"
                title="Amazon Web Services"
              />
              <h3 class="h6 remove-height">Amazon Web Services</h3>
            </div>
          </div>

          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/google_cloud_platform.png"
                alt="google_cloud_platform"
                class="lazyload"
                loading="lazy"
                title="Google Cloud Platform"
              />
              <h3 class="h6 remove-height">Google Cloud Platform</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/digital_ocean.png"
                alt="digital_ocean"
                class="lazyload"
                loading="lazy"
                title="DigitalOcean"
              />
              <h3 class="h6 remove-height">DigitalOcean</h3>
            </div>
          </div>
          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Frontend</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/js.png"
                alt="js"
                class="lazyload"
                loading="lazy"
                title="JavaScript"
              />
              <h3>JavaScript</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/vuejs.png"
                alt="vuejs"
                class="lazyload"
                loading="lazy"
                title="Vue.js"
              />
              <h3 class="h6 remove-height">Vue.js</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/react.png"
                alt="react"
                class="lazyload"
                loading="lazy"
                title="React"
              />
              <h3 class="h6 remove-height">React</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/angular.png"
                alt="angular"
                class="lazyload"
                loading="lazy"
                title="Angular.js"
              />
              <h3 class="h6 remove-height">Angular.js</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/bootstrap.png"
                alt="bootstrap"
                class="lazyload"
                loading="lazy"
                title="Bootstrap"
              />
              <h3 class="h6 remove-height">Bootstrap</h3>
            </div>
          </div>
          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Other</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/github.png"
                alt="github"
                class="lazyload"
                loading="lazy"
                title="Github"
              />
              <h3 class="h6 remove-height">Github</h3>
            </div>
          </div>
          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/gitlab.png"
                alt="gitlab"
                class="lazyload"
                loading="lazy"
                title="GitLab"
              />
              <h3 class="h6 remove-height">GitLab</h3>
            </div>
          </div>

          <div class="col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6">
            <div class="boxed boxed--border text-center">
              <img
                src="img/technologies/circleci-icon.svg"
                alt="circle ci"
                title="circle ci"
                loading="lazy"
                class="lazyload"
              />
              <h3 class="h6 remove-height">Circle ci</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="testimonials && testimonials.length"
      class="space--sm text-center services"
    >
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-12">
            <h2 class="mb-0">Testimonials</h2>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="col-lg-4 col-md-6 mb-2"
          >
            <div
              class="testimonial testimonial-home boxed boxed--sm boxed--border"
            >
              <div class="verticle-middle">
                <div class="testimonial-text contentbox">
                  &ldquo;{{ testimonial.quote }}&rdquo;
                </div>
                <div class="testimonial-detail clearfix">
                  <h2 class="testimonial-name h4">{{ testimonial.author }}</h2>
                  <span>{{ testimonial.author_designation }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="space--xs imagebg"
      data-gradient-bg="#4876BD,#5448BD,#8F48BD,#BD48B1"
    >
      <HomeCallToActionGranim />

      <div class="container">
        <div class="row">
          <!-- <div class="cta cta--horizontal text-center-xs"> -->
          <div class="col-sm-9 d-flex align-items-center">
            <h2 class="lead m-0">
              We will do our best to answer you within 24 hours or less.
            </h2>
          </div>
          <div class="col-sm-3 text-right text-center-xs">
            <a class="btn btn--primary type--uppercase" href="/contact">
              <span class="btn__text"> Contact Us </span>
            </a>
          </div>
          <!-- </div> -->
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
import constants from "@/config/constants";
import HomeTyped from "@/components/HomeTyped.vue";
import HomeCallToActionGranim from "@/components/HomeCallToActionGranim.vue";

export default {
  components: {
    HomeTyped,
    HomeCallToActionGranim,
  },
  layout: "theme",
  async asyncData({ app, params, payload }) {
    if (payload) {
      return { testimonials: payload, services: payload, whyUs: payload };
    } else {
      const testimonials = await app.$axios.$get(app.$urls.testimonials);
      const services = await app.$axios.$get(app.$urls.services);
      const whyUs = await app.$axios.$get(app.$urls.whyUsHome);

      return {
        testimonials: testimonials.data,
        services: services.data,
        whyUs: whyUs.data,
      };
    }
  },

  data() {
    return {
      direction: "left",
    };
  },

  head() {
    return {
      title: constants.title,
      meta: [
        {
          name: "description",
          content: constants.description,
        },
        {
          name: "title",
          content: constants.title,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL + "/",
        },
        {
          property: "og:title",
          content: constants.title,
        },
        {
          property: "og:description",
          content: constants.description,
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:site",
          content: "@improwised",
        },
        {
          property: "twitter:creator",
          content: "@improwised",
        },
        {
          property: "twitter:title",
          content: constants.title,
        },
        {
          property: "twitter:description",
          content: constants.description,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL + "/",
        },
      ],
    };
  },
};
</script>
