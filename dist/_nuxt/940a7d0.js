(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{307:function(t,u){function e(n){return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},309:function(t,u,e){var n=e(313);function _(o,s,i){return(s=n(s))in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},311:function(t,u,e){var n=e(317);function _(o,s){if(o==null)return{};var i,l,p=n(o,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)i=c[l],s.indexOf(i)>=0||{}.propertyIsEnumerable.call(o,i)&&(p[i]=o[i])}return p}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},313:function(t,u,e){var n=e(307).default,_=e(315);function o(s){var i=_(s,"string");return n(i)=="symbol"?i:i+""}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},315:function(t,u,e){var n=e(307).default;function _(o,s){if(n(o)!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var l=i.call(o,s||"default");if(n(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},317:function(t,u){function e(n,_){if(n==null)return{};var o={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(_.indexOf(s)>=0)continue;o[s]=n[s]}return o}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},337:function(t,u){t.exports={}},366:function(t,u,e){var n=e(309),_=e(311),o=["class","staticClass","style","staticStyle","attrs"];e(21),e(43),e(22),e(28),e(29),e(23),e(11),e(18);function s(l,p){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);p&&(f=f.filter(function(x){return Object.getOwnPropertyDescriptor(l,x).enumerable})),c.push.apply(c,f)}return c}function i(l){for(var p=1;p<arguments.length;p++){var c=arguments[p]!=null?arguments[p]:{};p%2?s(Object(c),!0).forEach(function(f){n(l,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach(function(f){Object.defineProperty(l,f,Object.getOwnPropertyDescriptor(c,f))})}return l}t.exports={functional:!0,render:function(p,c){var f=c._c,x=c._v,d=c.data,r=c.children,a=r===void 0?[]:r,v=d.class,y=d.staticClass,b=d.style,g=d.staticStyle,h=d.attrs,m=h===void 0?{}:h,j=_(d,o);return f("svg",i({class:[v,y],style:[b,g],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"},m)},j),a.concat([f("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"}})]))}}},367:function(t,u,e){"use strict";var n=e(337),_=e.n(n)},512:function(t,u,e){"use strict";e.r(u);var n=function(){var r=this,a=r._self._c;return a("footer",{ref:"footer",staticClass:"footer"},[a("div",{ref:"footerWrapper",staticClass:"footer__wrapper",attrs:{"data-scroll-sticky":""}},[a("div",{ref:"footerContent",staticClass:"footer__content"},[a("p",{ref:"footerContentTitle",staticClass:"footer__content__title"},[r._v(`
                Adham `),a("br"),r._v(" "),a("span",{staticClass:"serif"},[r._v("Elsharkawy")])]),r._v(" "),a("ul",{staticClass:"footer__content__social"},r._l(r.socialLinks,function(v,y){return a("li",{key:y,staticClass:"footer__content__social__link"},[a("V-Footer-Social-Link",{directives:[{name:"hoverable",rawName:"v-hoverable"}],ref:"footerContentSocialLinks",refInFor:!0,attrs:{target:"_blank",href:v.href,"aria-label":"link to ".concat(v.label)}},[r._v(`
                        `+r._s(v.label)+`
                    `)])],1)}),0),r._v(" "),a("p",{staticClass:"footer__content__copyright"},[r._v(`
                Copyright \xA9`+r._s(r.getCurrentYear())+` AE
            `)]),r._v(" "),a("p",{staticClass:"footer__content__note"},[r._v("Made with \u2764 from Egypt!")])]),r._v(" "),a("div",{staticClass:"footer__arrow__wrapper",attrs:{role:"button","aria-label":"scroll to top",tabindex:"0"},on:{click:function(y){return r.$scrollTo(0)}}},[a("ArrowUpSVG",{staticClass:"footer__arrow",attrs:{"aria-label":"up arrow"}})],1)])])},_=[],o=e(366),s=e.n(o),i={components:{ArrowUpSVG:s.a},data:function(){return{socialLinks:[{label:"LinkedIn",href:"https://www.linkedin.com/in/adham-elsharkawy-4b8b70240/"},{label:"github",href:"https://github.com/AdhamElsharkawy"},{label:"email",href:"mailto:adhamm.elsharkawyy@gmail.com"}]}},mounted:function(){var r=this.$prefersReducedMotion(),a=this.$refs,v=a.footer,y=a.footerWrapper,b=a.footerContentTitle,g=this.$gsap,h=new ResizeObserver(this.setFooterWrapperHeightVar);h.observe(y),this.setFooterWrapperHeightVar(),r||g.fromTo(b,{"--x-offset":"0%"},{"--x-offset":"100%",ease:"none",scrollTrigger:{trigger:v,start:"bottom-=".concat(b.offsetHeight," bottom"),end:"bottom bottom",scrub:!0}})},methods:{setFooterWrapperHeightVar:function(){var r=this;this.$gsap.set(this.$refs.footer,{"--wrapper-height":"".concat(this.$refs.footerWrapper.offsetHeight,"px"),onEnd:function(){return r.$locomotiveScroll.update()}})},getCurrentYear:function(){return new Date().getFullYear()}}},l=i,p=e(367),c=e(37),f=Object(c.a)(l,n,_,!1,null,null,null),x=u.default=f.exports}}]);