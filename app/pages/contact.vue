<template>
  <div class="main-container">
    <div class="main-container">
      <section class="text-center height-50">
        <div class="container pos-vertical-center">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-3 col-sm-12">
              <h1>Let's talk about your project</h1>
              <p class="lead">
                Visit us or make contact via the form below to talk more about
                your project, ideas or any others technical queries.
              </p>
            </div>
          </div>
          <div class="row mt-5 space--xs">
            <div class="col-sm-12">
              <div
                class="d-flex align-items-center justify-content-center p-3 rounded b1 alert"
              >
                <div>
                  <h5>
                    <span style="font-weight: 400">
                      For inquiries related to job & internship, please visit
                      <a
                        href="/careers/"
                        target="_blank"
                        rel="noopener"
                        class="font-weight-normal"
                      >
                        Careers</a
                      >
                      page.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <!--end of row-->
        </div>
        <!--end of container-->
      </section>

      <section>
        <div class="container">
          <div class="row">
            <!--  -->
            <div class="col-md-6">
              <div class="switchable__text">
                <h3 class="fs-24">
                  304 - Pride Square, <br />
                  Pushkardham Main Road, Nr. J. K. Chowk, <br />
                  Rajkot - 360005, Gujarat, India.
                </h3>
                <p class="lead">
                  We try to respond to all enquiries within 1 business day.
                </p>
                <p class="lead">We are open from 10am — 7pm on weekdays.</p>
              </div>
            </div>
            <!--  -->
            <div class="col-md-5 offset-md-1">
              <div id="errorMessages"></div>
              <div id="success">
                <div class="success-msg">
                  <b
                    >Message has been sent successfully. We will contact within
                    1 business day.</b
                  >
                </div>
              </div>
              <form
                id="contactus-submit"
                action="https://rnnmftp4t7.execute-api.us-west-2.amazonaws.com/production/api/contactus"
              >
                <input
                  id="sitekey"
                  type="hidden"
                  name="sitekey"
                  value="6LfM73IUAAAAAFFFAv5jHjpT_UIjRZqD2xcijnwn"
                />
                <div class="col-xs-12">
                  <label for="name">Your Name:</label>
                  <input
                    id="name"
                    type="text"
                    class="validate-required"
                    name="name"
                    required="required"
                  />
                </div>
                <div class="col-xs-12">
                  <label for="email">Email Address:</label>
                  <input
                    id="email"
                    type="email"
                    class="validate-required validate-email"
                    name="email"
                    required="required"
                  />
                </div>
                <div class="col-xs-12">
                  <label for="message">Message:</label>
                  <textarea
                    id="message"
                    type="textarea"
                    class="validate-required"
                    name="message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>
                <div class="col-xs-12">
                  <div id="recaptcha"></div>
                </div>
                <div class="col-xs-12">
                  <button
                    id="btn-submit"
                    type="submit"
                    class="btn btn--primary type--uppercase"
                    disabled="disabled"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--end of row-->
        </div>
        <section class="switchable" style="padding-bottom: 0"></section>
        <div class="container">
          <div class="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6509218365454!2d70.78636435101201!3d22.29120934878471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca22a0751231%3A0x23edc234940c18b2!2sImprowised+Technologies+Private+Limited.!5e0!3m2!1sen!2sin!4v1495780225620"
              width="600"
              height="530"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <!--end of container-->
      </section>
    </div>
  </div>
</template>
<script>
export default {
  layout: "theme",
  head() {
    const contactTitle = "Contact - Improwised Technologies Pvt. Ltd.";
    const contactDescription =
      "We are open from 10am - 7pm on weekdays. For any further info please feel free to Contact us on careers@improwised.com.";
    return {
      title: contactTitle,
      meta: [
        {
          name: "description",
          content: contactDescription,
        },
        {
          name: "title",
          content: contactTitle,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL + this.$route.path + "/",
        },
        {
          property: "og:title",
          content: contactTitle,
        },
        {
          property: "og:description",
          content: contactDescription,
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
          content: contactTitle,
        },
        {
          property: "twitter:description",
          content: contactDescription,
        },
        {
          property: "twitter:image",
          content: process.env.BASE_URL + "/img/logo.png",
        },
      ],
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit",
          async: true,
          body: true,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL + this.$route.path + "/",
        },
      ],
    };
  },
};
</script>

<style>
.b1 {
  box-shadow: rgba(230, 230, 250, 0.3) 0 1px 2px 0,
    rgba(230, 230, 250, 0.15) 0 2px 6px 2px;
}

.alert {
  background-color: #e6e6fa;
  color: black;
}

.alert a {
  color: #8a2be2;
}
</style>
