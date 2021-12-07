<template>
  <div class="main-container careers">
    <section class="text-center heroUnit">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8">
            <h1>Careers</h1>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="switchable bg--secondary">
      <div class="container currentOpening">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-block">
              <h3>Current Openings</h3>
            </div>
          </div>
          <div v-for="(career, index) in careers" :key="index" class="col-sm-4">
            <div class="feature feature-1 boxed boxed--border">
              <span class="label">{{ career.employment_terms }}</span>
              <h5>{{ career.title }}</h5>
              <p>{{ career.experience }} years of relevant experience</p>
              <a :href="`/careers/${$slugify(career.title)}`"
                >View &amp; Apply</a
              >
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-block text-center">
              <h2>Meet the Team</h2>
            </div>
          </div>
          <!-- <div class="col-sm-6 col-md-5">
                  <ul class="accordion accordion-2 accordion--oneopen">
                    <li class="active">
                      <div class="accordion__title">
                        <span class="h5">Culture</span>
                      </div>
                      <div class="accordion__content">
                        <p class="lead">
                          Stack follows the BEM naming convention that focusses on logical code readability that is reflected in both the HTML and CSS. Interactive elements such as accordions and tabs follow the same markup patterns making rapid development easier for developers and beginners alike.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="accordion__title">
                        <span class="h5">Benefits</span>
                      </div>
                      <div class="accordion__content">
                        <p class="lead">
                          Stack offers a clean and contemporary to suit a range of purposes from corporate, tech startup, marketing site to digital storefront. Elements have been designed to showcase content in a diverse yet consistent manner.
                        </p>
                        <p class="lead">
                          Multiple font and colour scheme options mean that dramatically altering the look of your site is just clicks away &mdash; Customizing your site in the included Variant Page Builder makes experimenting with styles and content arrangements dead simple.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="accordion__title">
                        <span class="h5">Learning</span>
                      </div>
                      <div class="accordion__content">
                        <p class="lead">
                          Medium Rare is an elite author known for offering high-quality, high-value products backed by timely and personable support. Recognised and awarded by Envato on multiple occasions for producing consistently outstanding products, it's no wonder over 20,000 customers enjoy using Medium Rare templates.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div> -->
          <!--end accordion-->
          <div class="row">
            <div class="col-xs-12">
              <div class="teamMarquee">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="text-center switchable bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="cta">
              <h2>We're always looking for talent</h2>
              <p class="lead">
                Got what it takes to work with us? Great! Send us a link to your
                resumé or portfolio to become part of our talent pool.
              </p>
              <a
                class="btn btn--primary type--uppercase"
                href="mailto:careers@improwised.com?subject=Dropped Resume to get job"
              >
                <span class="btn__text"> Drop your resume here </span>
              </a>
            </div>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
  </div>
</template>

<script>
export default {
  layout: "theme",
  async asyncData({ app, params }) {
    const careers = await app.$axios.$get(app.$urls.careers);

    return { careers: careers.data };
  },
  head: {
    title: "Careers | Top Software Development Company",
    meta: [
      {
        name: "description",
        content: "Improwised Technologies is always looking for new talents.",
      },
    ],
  },
};
</script>
