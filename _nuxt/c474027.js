(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{297:function(n,a,s){n.exports={}},414:function(n,a,s){"use strict";var l=s(297),c=s.n(l)},449:function(n,a,s){"use strict";s.r(a);var l=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("header",{ref:"header",staticClass:"header",attrs:{role:"banner","data-scroll-section":""}},[_("V-Header-Background",{staticClass:"header__canvas"}),e._v(" "),_("div",{ref:"headerContainer",staticClass:"header__container"},[e._m(0),e._v(" "),_("div",{staticClass:"header__container__subtitle"},[_("p",{staticClass:"sr-only"},[e._v(e._s(e.subTitleText))]),e._v(" "),e._l(e.subTitleText,function(r,d){return _("span",{key:d,ref:"headerContainerSubtitle",refInFor:!0,attrs:{"aria-hidden":"true"},domProps:{innerHTML:e._s(r)}})})],2)]),e._v(" "),_("div",{staticClass:"header__bottom-bar"},[_("V-Scroll-Down",{staticClass:"header__bottom-bar__scroll-down",nativeOn:{click:function(r){return e.$scrollTo(".works")}}})],1)],1)},c=[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("h1",{staticClass:"header__container__title"},[_("span",{staticClass:"sr-only"},[e._v("Adham Elsharkawy")]),e._v(" "),_("span",{staticClass:"line",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"line__content"},[e._v("Adham")])]),e._v(" "),_("span",{staticClass:"line",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"line__content ml-responsive serif"},[e._v("El-Sharkawy")])])])}],f={data:function(){var t=this;return{links:[{label:"Work",action:function(){return t.$scrollTo(".works")}},{label:"About",action:function(){return t.$scrollTo(".about")}},{label:"Contact",action:function(){return t.$scrollTo(".contact")}}],subTitleText:"Software Developer"}},mounted:function(){var t=this,_=this.$refs,r=_.header,d=_.headerContainer,h=_.headerContainerSubtitle,i=this.$gsap,u=this.$prefersReducedMotion();u||(i.fromTo(d,{y:-3},{y:20,scrollTrigger:{scrub:!0,trigger:r,start:"top-=50px top",end:"bottom top"}}),i.fromTo(".scroll-down",{opacity:1},{opacity:0,scrollTrigger:{scrub:.75,trigger:r,start:"top+=25% top",end:"bottom-=25% top"}}));var o=i.timeline({paused:!0,delay:.25,onEnd:function(){return t.$locomotiveScroll.update()}});u?o.from(".line__content",{opacity:0,stagger:.25}):o.from(".line__content",{yPercent:105,ease:"power1.out",duration:1,stagger:.25}),o.from(h,{opacity:0,stagger:{amount:.5,from:"center"}},"-=0.75"),o.from(".nav__sections__list__section, .nav__menu-button",{opacity:0,stagger:.05},"<+0.75"),o.from(".scroll-down",{opacity:0},"<+0.25"),this.$nuxt.$on("show-layout",function(){return o.play()})}},v=f,b=s(414),p=s(36),m=Object(p.a)(v,l,c,!1,null,null,null),j=a.default=m.exports}}]);
