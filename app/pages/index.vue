<template>
  <div class="main-container">
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h6 class="type--uppercase">We are Improwised Technologies.</h6>
            <h1 class="d-none">
              We help you engineer great products. We help you build
              applications for the cloud. We help you make the most of next-gen
              tech. We help you realize your product ideas.
            </h1>
            <div class="typed-headline">
              <span class="h1 inline-block">We help you</span>
              <span
                class="
                  h1
                  inline-block
                  typed-text typed-text--cursor
                  color--primary
                "
                data-typed-strings="engineer great products.,build applications for the cloud.,make the most of next-gen tech.,realize your product ideas."
              ></span>
            </div>
            <p class="lead">Your remote technology team.</p>
            <a
              class="btn btn--primary type--uppercase inner-link"
              href="/contact"
            >
              <span class="btn__text"> Get in touch with us </span>
            </a>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section id="services" class="text-center bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Our Services</h2>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center bg--secondary services">
      <div class="container">
        <div v-if="services" class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-md-6 col-sm-12"
          >
            <div
              class="
                feature feature-3
                boxed boxed--lg boxed--border
                text-center
              "
            >
              <i :class="`icon icon--lg color--primary ${service.icon}`"></i>
              <a :href="`/services/${$slugify(service.title)}`">
                <h4>{{ service.title }}</h4>
              </a>
              <p>{{ service.short_description }}</p>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section id="whyUs" class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Why Us</h2>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="features-style">
      <div class="container">
        <div v-if="whyUs" class="row">
          <div v-for="(whyus, index) in whyUs" :key="index" class="col-sm-6">
            <div class="feature feature-5 boxed boxed--lg boxed--border">
              <i :class="`icon ${whyus.icon} icon--lg`"></i>
              <div class="feature__body">
                <h5>{{ whyus.title }}</h5>
                <div v-html="whyus.description"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section id="toolBox" class="text-center bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Our Toolbox</h2>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="bg--secondary technologies">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Backend</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/node.png"
                    alt="node"
                    title="Node.js"
                    class="lazyload"
                  />
                  <h5>Node Js</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/php.png"
                    alt="php"
                    title="PHP"
                    class="lazyload"
                  />
                  <h5>PHP</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/laravel.png"
                    alt="laravel"
                    title="Laravel"
                    class="lazyload"
                  />
                  <h5>Laravel</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/python.png"
                    alt="python"
                    title="Python"
                    class="lazyload"
                  />
                  <h5>Python</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/go.png"
                    alt="go"
                    title="Go"
                    class="lazyload"
                  />
                  <h5>Go</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Databases</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/postgresql-icon.svg"
                    alt="postgresql"
                    class="lazyload"
                    title="PostgreSQL"
                  />
                  <h5>PostgreSQL</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/mariadb-icon.svg"
                    alt="mariadb"
                    class="lazyload"
                    title="MariaDB"
                  />
                  <h5>MariaDB</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/mysql-icon.svg"
                    alt="mysql"
                    class="lazyload"
                    title="MySQL"
                  />
                  <h5>MySQL</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/mongodb-icon.svg"
                    alt="mongodb"
                    class="lazyload"
                    title="MongoDB"
                  />
                  <h5>MongoDB</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Infrastructure</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/linux.png"
                    alt="linux"
                    class="lazyload"
                    title="Linux"
                  />
                  <h5>Linux</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/nginx.png"
                    alt="nginx"
                    class="lazyload"
                    title="nginx"
                  />
                  <h5>Nginx</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/docker.png"
                    alt="docker"
                    class="lazyload"
                    title="Docker"
                  />
                  <h5>Docker</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/kubernetes.svg"
                    alt="kubernetes"
                    title="kubernetes"
                    class="lazyload"
                  />
                  <h5>Kubernetes</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/helm.png"
                    alt="Helm"
                    class="lazyload"
                    title="Helm"
                  />
                  <h5>Helm</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Cloud</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/amazon-web-services-icon.svg"
                    alt="amazon_web_services"
                    class="lazyload"
                    title="Amazon Web Services"
                  />
                  <h5>Amazon Web Services</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/digital_ocean.png"
                    alt="digital_ocean"
                    class="lazyload"
                    title="DigitalOcean"
                  />
                  <h5>DigitalOcean</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/google_cloud_platform.png"
                    alt="google_cloud_platform"
                    class="lazyload"
                    title="Google Cloud Platform"
                  />
                  <h5>Google Cloud Platform</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Frontend</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/html.png"
                    alt="html"
                    class="lazyload"
                    title="HTML 5"
                  />
                  <h5>HTML 5</h5>
                </div>

                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/css.png"
                    alt="css"
                    class="lazyload"
                    title="CSS 3"
                  />
                  <h5>CSS 3</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/js.png"
                    alt="js"
                    class="lazyload"
                    title="JavaScript"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/bootstrap.png"
                    alt="bootstrap"
                    class="lazyload"
                    title="Bootstrap"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/angular.png"
                    alt="angular"
                    class="lazyload"
                    title="Angular.js"
                  />
                  <h5>Angular.js</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/react.png"
                    alt="react"
                    class="lazyload"
                    title="React"
                  />
                  <h5>React</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/vuejs.png"
                    alt="vuejs"
                    class="lazyload"
                    title="Vue.js"
                  />
                  <h5>Vue.js</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="
                text-center
                feature feature-4
                boxed boxed--lg boxed--border
              "
            >
              <h3>Others</h3>
              <hr />
              <div class="row justify-content-center">
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/github.png"
                    alt="github"
                    class="lazyload"
                    title="Github"
                  />
                  <h5>Github</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/gitlab.png"
                    alt="gitlab"
                    class="lazyload"
                    title="GitLab"
                  />
                  <h5>GitLab</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/redis.png"
                    alt="redis"
                    class="lazyload"
                    title="Redis"
                  />
                  <h5>Redis</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/jenkins.png"
                    alt="jenkins"
                    class="lazyload"
                    title="Jenkins"
                  />
                  <h5>Jenkins</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/circleci-icon.svg"
                    alt="circle ci"
                    title="circle ci"
                    class="lazyload"
                  />
                  <h5>Circle ci</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/travis-ci.svg"
                    alt="travis ci"
                    title="travis ci"
                    class="travisci lazyload"
                  />
                  <h5>Travis ci</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/scrutinizer-ci.png"
                    alt="scrutinizer ci"
                    class="lazyload"
                    title="scrutinizer ci"
                  />
                  <h5>Scrutinizer ci</h5>
                </div>
                <div class="boxed m-1 boxed--border text-center">
                  <img
                    data-src="img/technologies/bitbucket-icon.svg"
                    alt="bitbucket"
                    class="lazyload"
                    title="bitbucket"
                  />
                  <h5>Bitbucket</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Testimonials</h2>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <div class="slider" data-paging="true">
              <ul v-if="testimonials" class="slides">
                <li v-for="(testimonial, index) in testimonials" :key="index">
                  <div class="testimonial">
                    <span class="h3">
                      &ldquo;{{ testimonial.quote }}&rdquo;
                    </span>
                    <h5>{{ testimonial.author }}</h5>
                    <span>{{ testimonial.author_designation }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>

    <section
      class="space--xs imagebg"
      data-gradient-bg="#4876BD,#5448BD,#8F48BD,#BD48B1"
    >
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

export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const testimonials = await app.$axios.$get(app.$urls.testimonials);
    const services = await app.$axios.$get(app.$urls.services);
    const whyUs = await app.$axios.$get(app.$urls.whyUsHome);

    return {
      testimonials: testimonials.data,
      services: services.data,
      whyUs: whyUs.data,
    };
  },
  head: {
    title: constants.title,
    meta: [
      {
        name: "description",
        content: constants.description,
      },
    ],
  },
};
</script>
