(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{433:function(t,e,r){"use strict";var n={props:{blogList:{type:Array,required:!0}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.blogList,(function(e,n){return r("div",{key:n,staticClass:"col-lg-4 col-md-6 mb-1"},[r("article",{staticClass:"feature feature-3 blog-feature boxed boxed--border m-1"},[r("div",{staticClass:"feature__body"},[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"pb-5"},[t._v(t._s(e.description))]),t._v(" "),r("span",{staticClass:"font-14 blog_sub_details_left"},[t._v(t._s(t._f("formatDateTime")(e.date_created)))]),t._v(" "),e.content&&e.content.length?r("a",{staticClass:"float-right blog_sub_details_right",attrs:{href:"/blog/"+e.slug}},[t._v("\n          Read More\n        ")]):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},437:function(t,e,r){"use strict";(function(t){var n=r(7),o=(r(46),r(10),r(20),r(448)),l=r.n(o),c=(r(449),r(450),r(451)),d=r(433);e.a={components:{Tinybox:c.a,VueSlickCarousel:l.a,Blog:d.a},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},layout:"theme",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,_,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,e.next=3,r.$axios.$get(r.$urls.careers);case 3:return n=e.sent,e.next=6,r.$axios.$get(r.$urls.whoWeAre);case 6:return o=e.sent,e.next=9,r.$axios.$get(r.$urls.whatWeDo);case 9:return l=e.sent,e.next=12,r.$axios.$get(r.$urls.coreValues);case 12:return c=e.sent,e.next=15,r.$axios.$get(r.$urls.blogs);case 15:return d=e.sent,e.next=18,r.$axios.$get(r.$urls.gallery);case 18:return _=e.sent,h=[],_.data.length>0&&_.data.forEach((function(t,e){var n={src:r.$urls.assets(t.src.id),alt:""!==t.alt?t.alt:t.image_name,thumbnail:r.$urls.assets(t.src.id)};h.push(n)})),e.abrupt("return",{careers:n.data[0],whoWeAre:o.data[0],whatWeDo:l.data[0],coreValues:c.data,blogList:d.data,images:h});case 22:case"end":return e.stop()}}),e)})))()},data:function(){return{index:null,settings:{slidesToShow:4,rows:2,slidesPerRow:1,arrows:!0,dots:!1,infinite:!0,autoplay:!1,speed:2e3,autoplaySpeed:500,swipeToSlide:!0,cssEase:"linear",slidesToScroll:4,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},head:function(){return{title:this.careers&&this.careers.seo_title||"",meta:[{name:"description",content:this.careers&&this.careers.seo_description||""},{name:"title",content:this.careers&&this.careers.seo_title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path},{property:"og:title",content:this.careers&&this.careers.seo_title||""},{property:"og:description",content:this.careers&&this.careers.seo_description||""},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:"@improwised"},{property:"twitter:creator",content:"@improwised"},{property:"twitter:title",content:this.careers&&this.careers.seo_title||""},{property:"twitter:description",content:this.careers&&this.careers.seo_description||""},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path}]}},computed:{staticImages:function(){var t=this,e=[];return this.images&&this.images.length&&this.images.forEach((function(r){var n=r.src,o=r.alt;r.thumbnail;e.push({src:t.$img(n,{width:918,height:600,format:"jpeg"}),alt:o,thumbnail:t.$img(n,{width:88,height:88,format:"jpeg"})})})),e}}}}).call(this,r(148))},500:function(t,e,r){"use strict";r.r(e);var n=r(437).a,o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container careers"},[t.careers?r("section",{},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 d-flex align-items-center"},[r("div",[r("h1",[t._v(t._s(t.careers.title))]),t._v(" "),r("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.careers.description)}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[t.careers.image?r("nuxt-img",{attrs:{src:t.$urls.assets(t.careers.image.id),alt:t.careers.image.title,title:t.careers.image.title,format:"webp",width:"540px",height:"540px",loading:"lazy"}}):t._e()],1)])])]):t._e(),t._v(" "),t.whoWeAre?r("section",{staticClass:"bg--secondary"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 d-flex align-items-center"},[r("div",[r("p",{staticClass:"m-0"},[t._v("Our Culture")]),t._v(" "),r("h2",[t._v(t._s(t.whoWeAre.title))]),t._v(" "),r("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.whoWeAre.description)}}),t._v(" "),t.whoWeAre.content&&t.whoWeAre.content.length?r("a",{attrs:{href:"/blog/"+t.whoWeAre.slug}},[r("span",{staticClass:"btn__text"},[t._v(" Read More ")])]):t._e()])]),t._v(" "),r("div",{staticClass:"col-lg-6 justify-content-center d-flex align-items-center"},[t.whoWeAre.image?r("nuxt-img",{attrs:{src:t.$urls.assets(t.whoWeAre.image.id),alt:t.whoWeAre.image.title,title:t.whoWeAre.image.title,format:"webp",width:"406px",height:"306px",loading:"lazy"}}):t._e()],1)])]),t._v(" "),r("h1")]):t._e(),t._v(" "),t.whatWeDo?r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 justify-content-center d-flex align-items-center"},[t.whatWeDo.image?r("nuxt-img",{attrs:{src:t.$urls.assets(t.whatWeDo.image.id),alt:t.whatWeDo.image.title,title:t.whatWeDo.image.title,format:"webp",width:"406px",height:"306px",loading:"lazy"}}):t._e()],1),t._v(" "),r("div",{staticClass:"col-lg-6 d-flex align-items-center"},[r("div",[r("p",{staticClass:"m-0"},[t._v("Our Culture")]),t._v(" "),r("h2",[t._v(t._s(t.whatWeDo.title))]),t._v(" "),r("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.whatWeDo.description)}}),t._v(" "),t.whatWeDo.content&&t.whoWeAre.content.length?r("a",{attrs:{href:"/blog/"+t.whatWeDo.slug}},[r("span",{staticClass:"btn__text"},[t._v(" Read More ")])]):t._e()])])])])]):t._e(),t._v(" "),t.images&&t.images.length?r("section",{staticClass:"bg--secondary gallery_section"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[t._m(3),t._v(" "),r("div",{staticClass:"col-lg-12"},[r("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.images,(function(img,e){return r("div",{key:e},[img?r("nuxt-img",{attrs:{src:img.src,alt:img.alt,format:"jpeg",width:"459px",height:"300px",loading:"lazy"},on:{click:function(r){t.index=e}}}):t._e()],1)})),0),t._v(" "),r("client-only",[r("Tinybox",{attrs:{index:t.index,images:t.staticImages},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}})],1)],1)])])]):t._e(),t._v(" "),t.coreValues&&t.coreValues.length?r("section",{staticClass:"services"},[r("div",{staticClass:"container"},[t._m(4),t._v(" "),r("Blog",{attrs:{"blog-list":t.coreValues}})],1)]):t._e(),t._v(" "),t.blogList&&t.blogList.length?r("section",{staticClass:"bg--secondary services"},[r("div",{staticClass:"container"},[t._m(5),t._v(" "),r("Blog",{attrs:{"blog-list":t.blogList}})],1)]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:"/careers/jobs"}},[r("span",{staticClass:"btn__text"},[t._v("Job Openings")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"btn",attrs:{href:"/careers/internship-program"}},[r("span",{staticClass:"btn__text"},[t._v("Internship Program")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"block type--fine-print"},[t._v("\n              If you don't find your role, we will still hear you,\n              "),r("a",{attrs:{href:"mailto:careers@improwised.com?subject=Dropped Resume to get job",target:"_blank"}},[t._v("send resume here")]),t._v(".\n            ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-12 mb-5 text-center"},[r("h2",{},[t._v("Our Gallery")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("h2",{staticClass:"m-0"},[t._v("Our Core Values")]),t._v(" "),r("p",{staticClass:"mb-5"},[t._v("\n            We care about people whom we work with as much as we care about\n            client we work, which you can see in core values\n          ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("h2",{staticClass:"mb-5"},[t._v("Our Blog")])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=cdad661.js.map