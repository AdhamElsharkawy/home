(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(o,p){function t(_,c,a){return c in _?Object.defineProperty(_,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):_[c]=a,_}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},271:function(o,p,t){var _=t(273);function c(a,d){if(a==null)return{};var f=_(a,d),r,l;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(l=0;l<n.length;l++)r=n[l],!(d.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,r)||(f[r]=a[r]))}return f}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},273:function(o,p){function t(_,c){if(_==null)return{};var a={},d=Object.keys(_),f,r;for(r=0;r<d.length;r++)f=d[r],!(c.indexOf(f)>=0)&&(a[f]=_[f]);return a}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},286:function(o,p,t){o.exports={}},313:function(o,p,t){t(21),t(19),t(20),t(10),t(29),t(18),t(30);var _=t(270),c=t(271),a=["class","staticClass","style","staticStyle","attrs"];t(42);function d(r,l){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);l&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(r,b).enumerable})),n.push.apply(n,i)}return n}function f(r){for(var l=1;l<arguments.length;l++){var n=arguments[l]!=null?arguments[l]:{};l%2?d(Object(n),!0).forEach(function(i){_(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}o.exports={functional:!0,render:function(l,n){var i=n._c,b=n._v,e=n.data,u=n.children,s=u===void 0?[]:u,v=e.class,h=e.staticClass,g=e.style,y=e.staticStyle,m=e.attrs,j=m===void 0?{}:m,O=c(e,a);return i("svg",f({class:[v,h],style:[g,y],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"},j)},O),s.concat([i("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"}})]))}}},314:function(o,p,t){"use strict";var _=t(286),c=t.n(_)},447:function(o,p,t){"use strict";t.r(p);var _=function(){var e=this,u=e.$createElement,s=e._self._c||u;return s("footer",{ref:"footer",staticClass:"footer"},[s("div",{ref:"footerWrapper",staticClass:"footer__wrapper",attrs:{"data-scroll-sticky":""}},[s("div",{ref:"footerContent",staticClass:"footer__content"},[s("p",{ref:"footerContentTitle",staticClass:"footer__content__title"},[e._v(`
                Adham `),s("br"),e._v(" "),s("span",{staticClass:"serif"},[e._v("Elsharkawy")])]),e._v(" "),s("ul",{staticClass:"footer__content__social"},e._l(e.socialLinks,function(v,h){return s("li",{key:h,staticClass:"footer__content__social__link"},[s("V-Footer-Social-Link",{directives:[{name:"hoverable",rawName:"v-hoverable"}],ref:"footerContentSocialLinks",refInFor:!0,attrs:{target:"_blank",href:v.href,"aria-label":"link to "+v.label}},[e._v(`
                        `+e._s(v.label)+`
                    `)])],1)}),0),e._v(" "),s("p",{staticClass:"footer__content__copyright"},[e._v(`
                Copyright \xA9`+e._s(e.getCurrentYear())+` AE
            `)]),e._v(" "),s("p",{staticClass:"footer__content__note"},[e._v("Made with \u2764 from Egypt!")])]),e._v(" "),s("div",{staticClass:"footer__arrow__wrapper",attrs:{role:"button","aria-label":"scroll to top",tabindex:"0"},on:{click:function(v){return e.$scrollTo(0)}}},[s("ArrowUpSVG",{staticClass:"footer__arrow",attrs:{"aria-label":"up arrow"}})],1)])])},c=[],a=t(313),d=t.n(a),f={components:{ArrowUpSVG:d.a},data:function(){return{socialLinks:[{label:"LinkedIn",href:"https://www.linkedin.com/in/adham-elsharkawy-4b8b70240/"},{label:"github",href:"https://github.com/AdhamElsharkawy"},{label:"email",href:"mailto:adhamm.elsharkawyy@gmail.com"}]}},mounted:function(){var u=this.$prefersReducedMotion(),s=this.$refs,v=s.footer,h=s.footerWrapper,g=s.footerContentTitle,y=this.$gsap,m=new ResizeObserver(this.setFooterWrapperHeightVar);m.observe(h),this.setFooterWrapperHeightVar(),u||y.fromTo(g,{"--x-offset":"0%"},{"--x-offset":"100%",ease:"none",scrollTrigger:{trigger:v,start:"bottom-=".concat(g.offsetHeight," bottom"),end:"bottom bottom",scrub:!0}})},methods:{setFooterWrapperHeightVar:function(){var u=this;this.$gsap.set(this.$refs.footer,{"--wrapper-height":"".concat(this.$refs.footerWrapper.offsetHeight,"px"),onEnd:function(){return u.$locomotiveScroll.update()}})},getCurrentYear:function(){return new Date().getFullYear()}}},r=f,l=t(314),n=t(36),i=Object(n.a)(r,_,c,!1,null,null,null),b=p.default=i.exports}}]);