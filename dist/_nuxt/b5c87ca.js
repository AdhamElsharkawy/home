(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{338:function(d,r){d.exports={}},368:function(d,r,t){"use strict";var l=t(338),c=t.n(l)},513:function(d,r,t){"use strict";t.r(r);var l=function(){var e=this,_=e._self._c;return _("h2",{ref:"title",staticClass:"title-h2 serif"},[_("span",{staticClass:"sr-only"},[e._v(e._s(e.defaultSlotText))]),e._v(" "),_("div",{ref:"titleContent",staticClass:"title-h2__content",attrs:{"aria-hidden":"true"}},[e._t("default")],2)])},c=[],g=t(21),y=t(22),b=t(28),h=t(29),P=t(23),x=t(11),T=t(18),f=t(10),M=t(151);function i(o,e){var _=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),_.push.apply(_,s)}return _}function p(o){for(var e=1;e<arguments.length;e++){var _=arguments[e]!=null?arguments[e]:{};e%2?i(Object(_),!0).forEach(function(s){Object(f.a)(o,s,_[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(_)):i(Object(_)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(_,s))})}return o}var v={props:{rangeOfMovement:{type:Number,required:!1,default:20}},computed:{defaultedYOffset:function(){return p({start:0,end:0},this.yOffset)},defaultSlotText:function(){return this.$slots.default[0].text}},mounted:function(){var e=this.$prefersReducedMotion(),_=this.$refs,s=_.title,n=_.titleContent,a=this.$gsap;e||a.fromTo(s,{yPercent:this.rangeOfMovement*-1},{yPercent:this.rangeOfMovement,scrollTrigger:{scrub:!0,trigger:s}});var u={trigger:s,start:"top bottom-=20%",once:!0};e?a.fromTo(n,{filter:"blur(10px)",opacity:0},{filter:"blur(0px)",opacity:1,scrollTrigger:u}):a.fromTo(n,{yPercent:-110},{yPercent:0,duration:.75,ease:"power2.out(1.5)",scrollTrigger:u})}},m=v,C=t(368),j=t(37),O=Object(j.a)(m,l,c,!1,null,null,null),D=r.default=O.exports}}]);
