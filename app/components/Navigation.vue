<template>
  <div class="nav-container">
    <div class="bar bar--sm visible-xs logo-style">
      <div class="container">
        <div class="row display_flex">
          <div class="col col-sm-2 col-md-6 align_self_center">
            <a href="/">
              <img
                class="logo logo-dark lazyload"
                alt="Improwised Technologies Pvt Ltd"
                src="/img/logo.png"
                height="80"
                width="225"
              />
            </a>
          </div>
          <div class="col col-sm-10 col-md-6 text-right align_self_center">
            <a
              href="#"
              class="hamburger-toggle"
              data-toggle-class="#menu1;hidden-xs"
              title="toggle menu for small screen"
            >
              <i class="icon icon--sm stack-interface stack-menu"></i>
            </a>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </div>
    <!--end bar-->
    <nav
      id="menu1"
      class="bar bar--sm bar-1 hidden-xs hiddem-sm navigation-style"
      data-scroll-class="366px:pos-fixed"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-md-5 col-sm-3 hidden-xs logo-style">
            <div class="bar__module">
              <a href="/">
                <img
                  class="logo logo-dark lazyload"
                  alt="Improwised Technologies Pvt Ltd"
                  src="/img/logo.png"
                  height="80"
                  width="225"
                />
              </a>
            </div>
            <!--end module-->
          </div>
          <div
            class="col-xs-6 col-md-7 col-sm-9 text-right text-left-xs text-left-sm menu-style"
          >
            <div class="bar__module">
              <ul class="menu-horizontal text-left">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-improwised">About Us</a>
                </li>
                <li class="dropdown">
                  <span class="dropdown__trigger">Services</span>
                  <div
                    v-if="$store.state.services && $store.state.services.length"
                    class="dropdown__container"
                  >
                    <div class="container">
                      <div class="row">
                        <div
                          class="dropdown__content col-lg-3 col-md-4 col-sm-6"
                        >
                          <ul class="menu-vertical">
                            <li
                              v-for="(service, index) in $store.state.services"
                              :key="index"
                            >
                              <a :href="`/services/${service.slug}`">
                                {{ service.title }}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <!--end dropdown content-->
                      </div>
                      <!--end row-->
                    </div>
                  </div>
                  <!--end dropdown container-->
                </li>
                <li>
                  <a href="/case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/blog">Blogs</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <!--end module-->
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </nav>
    <!--end bar-->
  </div>
</template>
