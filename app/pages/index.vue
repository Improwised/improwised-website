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
              <a :href="`/services/${service.slug}/`">
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
          <Tool image="img/technologies/go.png" name="Go" />
          <Tool image="img/technologies/laravel.png" name="Laravel" />
          <Tool image="img/technologies/node.png" name="Node Js" />
          <Tool image="img/technologies/python.png" name="Python" />

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Databases</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <Tool
            image="img/technologies/postgresql-icon.svg"
            name="PostgreSQL"
          />
          <Tool image="img/technologies/mariadb-icon.svg" name="MariaDB" />
          <Tool image="img/technologies/mysql-icon.svg" name="MySQL" />
          <Tool image="img/technologies/redis.png" name="Redis" />
          <Tool image="img/technologies/mongodb-icon.svg" name="MongoDB" />

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Infrastructure</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <Tool image="img/technologies/linux.png" name="Linux" />
          <Tool image="img/technologies/docker.png" name="Docker" />
          <Tool image="img/technologies/kubernetes.svg" name="Kubernetes" />
          <Tool image="img/technologies/helm.png" name="Helm" />
          <Tool image="img/technologies/terraform.svg" name="Terraform" />
          <Tool image="img/technologies/nginx.png" name="Nginx" />

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Cloud</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>

          <Tool
            image="img/technologies/amazon-web-services-icon.svg"
            name="Amazon Web Services"
          />
          <Tool
            image="img/technologies/google_cloud_platform.png"
            name="Google Cloud Platform"
          />
          <Tool image="img/technologies/azure.svg" name="Azure" />
          <Tool
            image="img/technologies/digital_ocean.png"
            name="DigitalOcean"
          />

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Frontend</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <Tool image="img/technologies/js.png" name="JavaScript" />
          <Tool image="img/technologies/vuejs.png" name="Vue.js" />
          <Tool image="img/technologies/react.png" name="React" />
          <Tool image="img/technologies/angular.png" name="Angular.js" />
          <Tool image="img/technologies/bootstrap.png" name="Bootstrap" />

          <div class="col-sm-12">
            <h2 class="mb-0 h3"><strong>Other</strong></h2>
            <div class="dlab-separator-outer">
              <div class="dlab-separator style-liner"></div>
            </div>
          </div>
          <Tool image="img/technologies/github.png" name="Github" />
          <Tool image="img/technologies/gitlab.png" name="GitLab" />
          <Tool image="img/technologies/circleci-icon.svg" name="Circle ci" />
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
            <Button text="Contact Us" redirect="/contact" />
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
import Tool from "@/components/common/Tool.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    HomeTyped,
    HomeCallToActionGranim,
    Tool,
    Button,
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
