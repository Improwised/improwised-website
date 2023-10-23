(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{445:function(t,e,l){"use strict";(function(t){var o=l(7),c=(l(24),l(47),l(46),l(456)),r=l(496),n=l(497);e.a={components:{HomeTyped:r.a,HomeCallToActionGranim:n.a},layout:"theme",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var l,o,c,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t.app,t.params,!(o=t.payload)){e.next=5;break}return e.abrupt("return",{testimonials:o,services:o,whyUs:o});case 5:return e.next=7,l.$axios.$get(l.$urls.testimonials);case 7:return c=e.sent,e.next=10,l.$axios.$get(l.$urls.services);case 10:return r=e.sent,e.next=13,l.$axios.$get(l.$urls.whyUsHome);case 13:return n=e.sent,e.abrupt("return",{testimonials:c.data,services:r.data,whyUs:n.data});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{direction:"left"}},head:function(){return{title:c.a.title,meta:[{name:"description",content:c.a.description},{name:"title",content:c.a.title},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+"/"},{property:"og:title",content:c.a.title},{property:"og:description",content:c.a.description},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:"@improwised"},{property:"twitter:creator",content:"@improwised"},{property:"twitter:title",content:c.a.title},{property:"twitter:description",content:c.a.description},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+"/"}]}}}}).call(this,l(119))},456:function(t,e,l){"use strict";e.a={title:"Cloud Infrastructure, SAAS Application Development Company | Technology Consultancy",description:"Let us help you with cloud infrastructure and SAAS software development services to create revenue channels. Our technical support, IT Managed Services will let you focus on your strength while we are managing your software and IT assets."}},496:function(t,e,l){"use strict";var o=l(2),c=l(457);o.a.use(c.default);var r={},n=l(45),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-sm-12"},[l("h6",{staticClass:"type--uppercase"},[t._v("We are Improwised Technologies.")]),t._v(" "),l("h1",{staticClass:"d-none"},[t._v("\n    We help you engineer great products. We help you build applications for\n    the cloud. We help you make the most of next-gen tech. We help you realize\n    your product ideas.\n  ")]),t._v(" "),l("div",{staticClass:"typed-headline"},[l("vue-typed-js",{attrs:{strings:["engineer great products.","build applications for the cloud.","make the most of next-gen tech.","realize your product ideas."],"type-speed":100,loop:!0,"show-cursor":!1}},[l("div",[l("span",{staticClass:"h1 inline-block"},[t._v("We help you")]),t._v(" "),l("span",{staticClass:"h1 inline-block typed-text typed-text--cursor color--primary typing"})])]),t._v(" "),l("p",{staticClass:"lead"},[t._v("Your remote technology team.")]),t._v(" "),t._m(0)],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"btn btn--primary type--uppercase inner-link",attrs:{href:"/contact"}},[l("span",{staticClass:"btn__text"},[t._v(" Get in touch with us ")])])}],!1,null,null,null);e.a=component.exports},497:function(t,e,l){"use strict";var o=l(459),c=l.n(o),r={name:"GranimElement",data:function(){return{GObj:Object}},mounted:function(){this.GObj=new c.a({element:this.$refs.granimCanvas,name:"basic-gradient",direction:"left-right",opacity:[1,1],states:{"default-state":{gradients:[["#4876BD","#5448BD"],["#8F48BD","#BD48B1"]],transitionSpeed:1e3}}})}},n=l(45),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"granimCanvas",attrs:{id:"granim-canvas"}})}),[],!1,null,null,null);e.a=component.exports},510:function(t,e,l){"use strict";l.r(e);var o=l(445).a,c=l(45),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-container"},[l("section",{staticClass:"text-center"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("HomeTyped")],1)])]),t._v(" "),t.services&&t.services.length?l("section",{staticClass:"bg--secondary services space--xs",attrs:{id:"services"}},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},t._l(t.services,(function(e,o){return l("div",{key:o,staticClass:"col-md-6 col-sm-12"},[l("div",{staticClass:"feature feature-3 boxed boxed--lg boxed--border text-center"},[e.icon?l("i",{class:"icon icon--lg color--primary "+e.icon}):l("i",{class:"icon icon--lg color--primary icon-Optimization"}),t._v(" "),l("a",{attrs:{href:"/services/"+e.slug}},[l("h2",{staticClass:"h4"},[t._v(t._s(e.title))])]),t._v(" "),l("p",[t._v(t._s(e.short_description))])])])})),0)])]):t._e(),t._v(" "),t.whyUs&&t.whyUs.length?l("section",{staticClass:"features-style space--xs",attrs:{id:"whyUs"}},[l("div",{staticClass:"container"},[t._m(1),t._v(" "),t.whyUs&&t.whyUs.length?l("div",{staticClass:"row"},t._l(t.whyUs,(function(e,o){return l("div",{key:o,staticClass:"col-sm-6"},[l("div",{staticClass:"feature feature-5 boxed boxed--sm boxed--border"},[e.icon?l("i",{class:"icon "+e.icon+" icon--lg"}):l("i",{class:"icon icon-Gears icon--lg"}),t._v(" "),l("div",{staticClass:"feature__body"},[l("h2",{staticClass:"h5"},[t._v(t._s(e.title))]),t._v(" "),l("div",{domProps:{innerHTML:t._s(e.description)}})])])])})),0):t._e()])]):t._e(),t._v(" "),t._m(2),t._v(" "),t.testimonials&&t.testimonials.length?l("section",{staticClass:"space--sm text-center services"},[l("div",{staticClass:"container"},[t._m(3),t._v(" "),l("div",{staticClass:"row"},t._l(t.testimonials,(function(e,o){return l("div",{key:o,staticClass:"col-lg-4 col-md-6 mb-2"},[l("div",{staticClass:"testimonial testimonial-home boxed boxed--sm boxed--border"},[l("div",{staticClass:"verticle-middle"},[l("div",{staticClass:"testimonial-text contentbox"},[t._v("\n                “"+t._s(e.quote)+"”\n              ")]),t._v(" "),l("div",{staticClass:"testimonial-detail clearfix"},[l("h2",{staticClass:"testimonial-name h4"},[t._v(t._s(e.author))]),t._v(" "),l("span",[t._v(t._s(e.author_designation))])])])])])})),0)])]):t._e(),t._v(" "),l("section",{staticClass:"space--xs imagebg",attrs:{"data-gradient-bg":"#4876BD,#5448BD,#8F48BD,#BD48B1"}},[l("HomeCallToActionGranim"),t._v(" "),t._m(4)],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row mb-5 text-center"},[l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0"},[t._v("Our Services")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row mb-5 text-center"},[l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0"},[t._v("Why Us")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"bg--secondary text-center technologies space--xs",attrs:{id:"toolBox"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row mb-5"},[l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0"},[t._v("Our Toolbox")])])]),t._v(" "),l("div",{staticClass:"row text-center justify-content-center"},[l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Backend")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/go.png",alt:"go",title:"Go",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Go")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/laravel.png",alt:"laravel",title:"Laravel",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Laravel")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/node.png",alt:"node",title:"Node.js",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Node Js")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/python.png",alt:"python",title:"Python",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Python")])])]),t._v(" "),l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Databases")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/postgresql-icon.svg",alt:"postgresql",title:"PostgreSQL",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("PostgreSQL")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/mariadb-icon.svg",alt:"mariadb",title:"MariaDB",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("MariaDB")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/mysql-icon.svg",alt:"mysql",title:"MySQL",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("MySQL")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/redis.png",alt:"redis",title:"Redis",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Redis")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/mongodb-icon.svg",alt:"mongodb",title:"MongoDB",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("MongoDB")])])]),t._v(" "),l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Infrastructure")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/linux.png",alt:"linux",title:"Linux",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Linux")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/docker.png",alt:"docker",title:"Docker",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Docker")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/kubernetes.svg",alt:"kubernetes",title:"kubernetes",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Kubernetes")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/helm.png",alt:"Helm",title:"Helm",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Helm")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/terraform.svg",alt:"Terraforms",title:"Terraform",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Terraform")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/nginx.png",alt:"nginx",title:"nginx",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Nginx")])])]),t._v(" "),l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Cloud")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/amazon-web-services-icon.svg",alt:"amazon_web_services",loading:"lazy",title:"Amazon Web Services"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Amazon Web Services")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/google_cloud_platform.png",alt:"google_cloud_platform",loading:"lazy",title:"Google Cloud Platform"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Google Cloud Platform")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/digital_ocean.png",alt:"digital_ocean",loading:"lazy",title:"DigitalOcean"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("DigitalOcean")])])]),t._v(" "),l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Frontend")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/js.png",alt:"js",loading:"lazy",title:"JavaScript"}}),t._v(" "),l("h3",[t._v("JavaScript")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/vuejs.png",alt:"vuejs",loading:"lazy",title:"Vue.js"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Vue.js")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/react.png",alt:"react",loading:"lazy",title:"React"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("React")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/angular.png",alt:"angular",loading:"lazy",title:"Angular.js"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Angular.js")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/bootstrap.png",alt:"bootstrap",loading:"lazy",title:"Bootstrap"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Bootstrap")])])]),t._v(" "),l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0 h3"},[l("strong",[t._v("Other")])]),t._v(" "),l("div",{staticClass:"dlab-separator-outer"},[l("div",{staticClass:"dlab-separator style-liner"})])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/github.png",alt:"github",loading:"lazy",title:"Github"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Github")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/gitlab.png",alt:"gitlab",loading:"lazy",title:"GitLab"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("GitLab")])])]),t._v(" "),l("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6"},[l("div",{staticClass:"boxed boxed--border text-center"},[l("img",{staticClass:"lazyload",attrs:{src:"img/technologies/circleci-icon.svg",alt:"circle ci",title:"circle ci",loading:"lazy"}}),t._v(" "),l("h3",{staticClass:"h6 remove-height"},[t._v("Circle ci")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row mb-5"},[l("div",{staticClass:"col-sm-12"},[l("h2",{staticClass:"mb-0"},[t._v("Testimonials")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-9 d-flex align-items-center"},[l("h2",{staticClass:"lead m-0"},[t._v("\n            We will do our best to answer you within 24 hours or less.\n          ")])]),t._v(" "),l("div",{staticClass:"col-sm-3 text-right text-center-xs"},[l("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:"/contact"}},[l("span",{staticClass:"btn__text"},[t._v(" Contact Us ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=e977234.js.map