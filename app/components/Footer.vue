<template>
  <footer class="footer-3 text-center-xs space--xs bg--dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <nuxt-img
            alt="Improwised Technologies Pvt Ltd"
            class="logo lazyload"
            src="/img/logo.png"
            height="27"
            width="75"
            loading="lazy"
          />
          <ul class="list-inline list--hover">
            <li>
              <a href="/contact/">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="/privacy-policy/">
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/terms-of-use/">
                <span>Terms Of Use</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 text-right text-center-xs">
          <ul class="social-list list-inline list--hover">
            <li class="icon-container">
              <a
                href="https://www.facebook.com/improwised"
                title="Improwised Technologies facebook page"
              >
                <nuxt-img
                  src="/img/fonts/facebook.svg"
                  alt="facebook"
                  title="facebook"
                />
              </a>
            </li>
            <li class="icon-container">
              <a
                href="https://twitter.com/improwised"
                title="Improwised Technologies twitter account"
              >
                <nuxt-img
                  src="/img/fonts/twitter.svg"
                  alt="twitter"
                  title="twitter"
                />
              </a>
            </li>
            <li class="icon-container">
              <a
                href="https://www.linkedin.com/company/improwised-technologies/"
                title="Improwised Technologies linkedin page"
              >
                <nuxt-img
                  src="/img/fonts/linkedin.svg"
                  alt="linkedin"
                  title="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--end of row-->
      <div class="row">
        <div class="col-sm-6">
          <p>Building scalable web application since 2011.</p>
        </div>
        <div class="col-sm-6 text-right text-center-xs">
          <span
            >&copy; <span class="update-year"></span> Improwised Technologies
            Pvt. Ltd.</span
          >
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </footer>
</template>
