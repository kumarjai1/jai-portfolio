(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e41de4a4","chunk-2640dccb":"2ab35a1e","chunk-cd3d00e2":"f9262591"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-2640dccb":1,"chunk-cd3d00e2":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"ffc2db0c","chunk-2640dccb":"d8c6395a","chunk-cd3d00e2":"ffc2db0c"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],p.parentNode.removeChild(p),a(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0044":function(t,e,a){"use strict";var n=a("9cbe"),i=a.n(n);i.a},1195:function(t,e,a){t.exports=a.p+"img/avatar.2818f824.png"},3075:function(t,e,a){"use strict";var n=a("9aaa"),i=a.n(n);i.a},"487a":function(t,e,a){"use strict";var n=a("92f3"),i=a.n(n);i.a},4989:function(t,e,a){t.exports=a.p+"img/GMTY_logo.1abe2a9b.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"image jaiLogo",attrs:{alt:"Vue logo",src:a("5d37")}})]),n("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:t.toggleNav}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])],1),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item is-family-monospace",attrs:{to:"/projects"},on:{click:t.toggleNav}},[t._v("projects")]),n("router-link",{staticClass:"navbar-item is-family-monospace",attrs:{to:"/graphics"}},[t._v("graphics")]),n("a",{staticClass:"navbar-item is-family-monospace",attrs:{href:"https://drive.google.com/file/d/1lY5yDAofO1dFeqIM49Fq1E-0HSqjvpt9/view?usp=sharing",target:"_blank"}},[t._v("resume")])],1)])])]),n("router-view"),n("br"),n("br"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer has-text-centered "},[a("p",{staticClass:"is-family-monospace"},[t._v("kumarjai.com by Jai Kumar © Copyright 2019. All Rights Reserved. "),a("a",{attrs:{href:"mailto:hello@kumarjai.com"}},[t._v("say hello")])])])}],o={data:function(){return{isActive:!1}},methods:{toggleNav:function(){this.isActive=!this.isActive}}},s=o,c=(a("5c0b"),a("2877")),l=Object(c["a"])(s,i,r,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("AboutMe"),a("div",{staticClass:"container"},[a("h2",{staticClass:"is-size-3"},[t._v("Project Favorites")]),a("h3",{staticClass:"subtitle is-size-5"},[t._v("Below are some of the most extensive backend and frontend projects I had fun working with")]),a("Backend"),a("Featured")],1)],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutMe has-text-centered"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),t._m(2),a("p",{staticClass:"socialIcons"},[a("a",{attrs:{href:"//www.linkedin.com/in/jai-kumar-3a397a38/",target:"_blank"}},[a("font-awesome-icon",{staticStyle:{color:"#0077B5"},attrs:{icon:["fab","linkedin"]}})],1),t._v(" "),a("a",{attrs:{href:"https://github.com/kumarjai1"}},[a("font-awesome-icon",{staticStyle:{color:"#333"},attrs:{icon:["fab","github-square"]}})],1),t._v(" "),a("a",{attrs:{href:"mailto:hello@kumarjai.com"}},[a("font-awesome-icon",{staticStyle:{color:"#c04d48"},attrs:{icon:["fas","envelope"]}})],1)]),a("br"),a("button",{staticClass:"button is-warning is-light is-medium"},[a("span",{staticClass:"buttonTextSpace"},[t._v("hire me")]),a("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-right"]}})],1)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"image is-128x128 container"},[n("img",{staticClass:"is-rounded",attrs:{src:a("1195"),alt:"Jai Kumar avatar"}}),n("br"),n("span",[n("a",{attrs:{href:"//www.linkedin.com/in/jai-kumar-3a397a38/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin",staticStyle:{color:"#0077B5"}})]),t._v(" "),n("a",{attrs:{href:"tel:16469799329"}},[n("i",{staticClass:"fas fa-phone-square-alt",staticStyle:{color:"#424242"}})]),t._v(" "),n("a",{attrs:{href:"mailto:hello@kumarjai.com"}},[n("i",{staticClass:"fas fa-envelope",staticStyle:{color:"#424242"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"is-size-1 is-family-monospace"},[a("strong",[t._v("Jai Kumar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:" is-size-4 is-family-monospace"},[t._v("I am a "),a("b",[t._v("fullstack developer")]),t._v(", a home gardner, and a constant learner. Obsessed with food and sustainability, I believe "),a("b",[t._v("design driven systems")]),t._v(" can alter behavior and create positive change")])}],b={name:"about-me"},g=b,v=(a("3075"),Object(c["a"])(g,h,m,!1,null,null,null)),A=v.exports,k=a("7a70"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"featured"},[a("div",{staticClass:"tile is-ancestor"},t._l(t.projects,(function(e){return a("div",{key:e.companyHeading,staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child project",style:e.style},[a("img",{staticClass:"projectLogo",style:e.imageStyle,attrs:{src:e.projectLogoSrc,alt:e.logoAlt}}),a("h3",{staticClass:"is-size-5 is-marginless has-text-weight-semibold"},[t._v(t._s(e.companyHeading))]),a("h5",{staticClass:"is-size-6"},[a("small",[t._v(" "+t._s(e.companySubheading))])]),a("br"),a("p",[t._v(t._s(e.projectDescription))]),a("br"),a("p",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Tech stack: ")]),t._v(" "+t._s(e.techStack))]),a("br"),a("a",{staticClass:"button is-info is-outlined link",attrs:{target:"_blank",href:e.link}},[a("span",{staticClass:"linkText"},[t._v(t._s(e.projectLinkText))]),a("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-right"]}})],1)])])})),0)])},w=[],j={name:"featured",data:function(){return{projects:[{style:"background-color:#fffbeb",projectLogoSrc:a("9747"),logoAlt:"Elodge Taxation",companyHeading:"E-lodge, powered by H&R Block",companySubheading:"Rapid Filing Services",projectDescription:"I revamped the E-lodge website and maintained the application's design associated with the site for a consistent user experience througohut.",techStack:"Javascript | Jquery | HTML/CSS | Bootstrap 4.xx | ASP.net | C#",link:"https://elodge.com.au",projectLinkText:"Checkout Elodge"},{style:"background-color:#eef6fc",projectLogoSrc:a("5a50"),logoAlt:"Rapid Tax Logo",companyHeading:"Rapid Tax",companySubheading:"Rapid Filing Services",projectDescription:"I revamped the RapidTax website and was in-charge of the complete customer experience from user interface and experience to the copy on the site. The application is built on ASP.NET and C#.",techStack:"Javascript | Jquery | HTML/CSS | Bootstrap 3.7 | ASP.net | C#",projectLink:"https://rapidtax.com",projectLinkText:"Checkout RapidTax"},{style:"background-color:#feecf0",projectLogoSrc:a("7a01"),logoAlt:"Premini Events Logo",companyHeading:"Premini Events",companySubheading:"A premium event management firm",projectDescription:"I fully customized the SquareSpace site and wrote simple script for a slider animation on their homepage, while maintaining cross-browser and device compatability.",techStack:"Javascript | HTML/CSS | SquareSpace",projectLink:"https://preminievents.com",projectLinkText:"Checkout Premini Events"},{style:"background-color:#effaf3",projectLogoSrc:a("4989"),logoAlt:"Good Morning To You Children's Book Logo",companyHeading:"Good Morning To You",companySubheading:"A children's interactive book",projectDescription:"I developed the site utilizing PureCSS, HTML/CSS, and pure javascript for the interactive childen's book.",techStack:"Javascript | HTML/CSS | PureCSS | Jquery",projectLink:"http://gm2you.com/",projectLinkText:"Checkout GMTY Site & Book",imageStyle:"width:96px"}]}}},C=j,S=(a("487a"),Object(c["a"])(C,y,w,!1,null,null,null)),T=S.exports,L={name:"home",components:{AboutMe:A,Featured:T,Backend:k["a"]}},x=L,P=Object(c["a"])(x,p,f,!1,null,null,null),z=P.exports;n["a"].use(d["a"]);var M=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"projects",component:function(){return a.e("chunk-cd3d00e2").then(a.bind(null,"acca"))}},{path:"/graphics",name:"graphics",component:function(){return a.e("chunk-2640dccb").then(a.bind(null,"d795"))}}],E=new d["a"]({routes:M}),F=E,H=a("2f62");n["a"].use(H["a"]);var q=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("ecee"),O=a("c074"),_=a("f2d1"),I=a("ad3d");G["c"].add(O["a"],O["c"],_["b"],_["a"],O["b"]),n["a"].component("font-awesome-icon",I["a"]),n["a"].config.productionTip=!1,new n["a"]({router:F,store:q,render:function(t){return t(u)}}).$mount("#app")},"5a50":function(t,e,a){t.exports=a.p+"img/rapidTaxLogo.c8aa0cd6.png"},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"5d37":function(t,e,a){t.exports=a.p+"img/jaikumaryellowlogo.9ffea54c.png"},"7a01":function(t,e){t.exports="data:image/png;base64,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"},"7a70":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backend"},[a("div",{staticClass:"tile is-ancestor"},t._l(t.projects,(function(e){return a("div",{key:e.projectTitle,staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child notification",class:e.style},[a("h3",{staticClass:"is-size-5 is-marginless has-text-weight-semibold"},[t._v(t._s(e.projectTitle)+" "),a("a",{attrs:{href:e.projectGithub}},[a("font-awesome-icon",{staticStyle:{color:"#333"},attrs:{icon:["fab","github-square"]}})],1)]),a("p",[t._v(t._s(e.projectDesc))]),a("br"),a("p",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Tech stack: ")]),t._v(" "+t._s(e.techStack))]),a("br"),a("a",{staticClass:"button is-info is-light",attrs:{target:"_blank",href:e.projectReadMoreLink}},[a("span",{staticClass:"buttonTextSpace"},[t._v("Click to read more")]),a("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-right"]}})],1)])])})),0)])},i=[],r={name:"backend",data:function(){return{projects:[{projectTitle:"Reddclone Spring Microservices",style:["has-background-warning"],projectDesc:"The objective of the project was to create a reddit/twitter like clone backend with APIs using Spring boot microservice based architecture. The project was split into two stages with first building the APIs and then focusing on the devops. It was a team effort and about 80% of the project was pair-programmed.",techStack:"Java | Spring boot | Postgres DB | JUnit | Docker | RabbitMQ | Jenkins | Swagger | ELK Stack | Mockito | Zuul Eureka | Netflix Hystric ",projectGithub:"https://github.com/kumarjai1/reddclone-microservices",projectReadMoreLink:"https://github.com/kumarjai1/reddclone-microservices"},{projectTitle:"Reddclone Spring Monolith",style:["has-background-primary"],projectDesc:"The objective of the project was to create a reddit/twitter like clone backend with APIs using Spring framework based on a monolith architecture. The application was primarily pair programmed, which allowed us to meet the deadline quickly with minimal bugs.",techStack:"Java | Spring Framework | JUnit | Hibernate | Postgresql | Mockito",projectGithub:"https://github.com/kumarjai1/redd-clone-backend",projectReadMoreLink:"https://github.com/kumarjai1/redd-clone-backend"}]}}},o=r,s=(a("0044"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},"92f3":function(t,e,a){},9747:function(t,e,a){t.exports=a.p+"img/elodgeLogo.181ee039.png"},"9aaa":function(t,e,a){},"9c0c":function(t,e,a){},"9cbe":function(t,e,a){}});
//# sourceMappingURL=app.9a430f32.js.map