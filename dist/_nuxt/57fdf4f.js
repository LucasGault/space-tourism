(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6],{254:function(e,t,r){var content=r(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("0194e358",content,!0,{sourceMap:!1})},255:function(e,t,r){"use strict";r(254)},256:function(e,t,r){var n=r(38)((function(i){return i[1]}));n.push([e.i,"h2[data-v-2be95910],span[data-v-2be95910]{font-size:1rem;line-height:19px;letter-spacing:2.7px}span[data-v-2be95910]{margin-right:1.125rem}@media (min-width: 768px){h2[data-v-2be95910],span[data-v-2be95910]{font-size:1.25rem;line-height:1.5rem;letter-spacing:.2109rem}span[data-v-2be95910]{margin-right:1rem}}@media (min-width: 1024px){h2[data-v-2be95910],span[data-v-2be95910]{font-size:1.75rem;letter-spacing:.2953rem;line-height:2.125rem}span[data-v-2be95910]{margin-right:1.75rem}}",""]),n.locals={},e.exports=n},257:function(e,t,r){"use strict";r.r(t);var n={props:{name:{type:String,required:!0},number:{type:String,required:!0}}},o=(r(255),r(21)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"text-white barlow_condensed uppercase text-center md:text-left"},[r("span",{staticClass:"opacity-25 font-bold"},[e._v(e._s(e.number))]),e._v("\n  "+e._s(e.name)+"\n")])}),[],!1,null,"2be95910",null);t.default=component.exports},260:function(e,t,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("fba16c4a",content,!0,{sourceMap:!1})},265:function(e,t,r){"use strict";r(260)},266:function(e,t,r){var n=r(38)((function(i){return i[1]}));n.push([e.i,".nav_tech[data-v-2c5012a8]{width:40vw;font-size:1rem}.nav_tech div[data-v-2c5012a8]{display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;justify-content:center;border-radius:9999px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:1px solid hsla(0,0%,100%,.25);width:2.5rem;height:2.5rem}.nav_tech div[data-v-2c5012a8]:hover{border:1px solid #fff}.div_active[data-v-2c5012a8], .div_active[data-v-2c5012a8]:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.div_active[data-v-2c5012a8],.div_active[data-v-2c5012a8]:hover{color:#0b0d17;border:1px solid #fff}@media (min-width: 768px){.nav_tech[data-v-2c5012a8]{width:27.5vw;font-size:1.5rem}.nav_tech div[data-v-2c5012a8]{width:3.75rem;height:3.75rem}}@media (min-width: 1024px){.nav_tech[data-v-2c5012a8]{margin-right:5rem;height:35vh;width:auto;font-size:2rem}.nav_tech div[data-v-2c5012a8]{width:5rem;height:5rem}}",""]),n.locals={},e.exports=n},269:function(e,t,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("246e8322",content,!0,{sourceMap:!1})},274:function(e,t,r){"use strict";r.r(t);r(175),r(14),r(31);var n={methods:{swapTechnology:function(e){this.$parent.isTechActive=e,this.$parent.technology=this.$parent.technologys.find((function(p){return p.name===e}))}}},o=(r(265),r(21)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"\n    nav_tech\n    flex\n    justify-between\n    items-center\n    bellefair\n    mb-7\n    md:mb-11\n    lg:flex-col lg:mb-0 lg:self-start\n  "},[r("div",{class:{div_active:"launch"==e.$parent.isTechActive},on:{click:function(t){return e.swapTechnology("launch")}}},[e._v("\n    1\n  ")]),e._v(" "),r("div",{class:{div_active:"spaceport"==e.$parent.isTechActive},on:{click:function(t){return e.swapTechnology("spaceport")}}},[e._v("\n    2\n  ")]),e._v(" "),r("div",{class:{div_active:"capsule"==e.$parent.isTechActive},on:{click:function(t){return e.swapTechnology("capsule")}}},[e._v("\n    3\n  ")])])}),[],!1,null,"2c5012a8",null);t.default=component.exports},289:function(e,t,r){var map={"./image-launch-vehicle-portrait.jpg":290,"./image-space-capsule-portrait.jpg":291,"./image-spaceport-portrait.jpg":292};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=289},290:function(e,t,r){e.exports=r.p+"img/image-launch-vehicle-portrait.0c75895.jpg"},291:function(e,t,r){e.exports=r.p+"img/image-space-capsule-portrait.dd0ac13.jpg"},292:function(e,t,r){e.exports=r.p+"img/image-spaceport-portrait.85523db.jpg"},293:function(e,t,r){var map={"./image-launch-vehicle-landscape.jpg":294,"./image-space-capsule-landscape.jpg":295,"./image-spaceport-landscape.jpg":296};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=293},294:function(e,t,r){e.exports=r.p+"img/image-launch-vehicle-landscape.4281a59.jpg"},295:function(e,t,r){e.exports=r.p+"img/image-space-capsule-landscape.d672da8.jpg"},296:function(e,t,r){e.exports=r.p+"img/image-spaceport-landscape.0f3ca5c.jpg"},297:function(e,t,r){"use strict";r(269)},298:function(e,t,r){var n=r(38)((function(i){return i[1]}));n.push([e.i,".tech_container[data-v-fa86bdbe]{margin-top:4vh}.intro_title[data-v-fa86bdbe]{font-size:.875rem;line-height:1.0625rem;letter-spacing:.1477rem;margin-bottom:.5rem}.tech_title[data-v-fa86bdbe]{font-size:1.5rem;line-height:1.75rem;margin-bottom:1rem}.tech_description[data-v-fa86bdbe]{font-size:.9375rem;line-height:1.5625rem}@media (min-width: 768px){.tech_description[data-v-fa86bdbe]{font-size:1rem;line-height:1.75rem;width:90%}.intro_title[data-v-fa86bdbe]{font-size:1rem;line-height:19px;letter-spacing:2.7px;margin-bottom:1rem}.tech_title[data-v-fa86bdbe]{font-size:2.5rem;line-height:2.875rem}}@media (min-width: 1024px){.tech_container[data-v-fa86bdbe]{margin:5vh 0 0 14.375rem}.img_container img[data-v-fa86bdbe]{height:55vh}.container[data-v-fa86bdbe]{width:35vw}.intro_title[data-v-fa86bdbe]{font-size:16px;line-height:19px;letter-spacing:2.7px;margin-bottom:.5rem}.tech_title[data-v-fa86bdbe]{font-size:56px;line-height:64px}.tech_description[data-v-fa86bdbe]{font-size:18px;line-height:2rem}}",""]),n.locals={},e.exports=n},305:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{isTechActive:"launch",technologys:[{name:"launch",title:"LAUNCH VEHICLE",img:"launch-vehicle",description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"spaceport",title:"SPACEPORT",img:"space-capsule",description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{name:"capsule",title:"SPACE CAPSULE",img:"spaceport",description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}],technology:{name:"launch",title:"LAUNCH VEHICLE",img:"launch-vehicle",description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}}}},o=(r(297),r(21)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tech_container flex-1"},[n("TitlePage",{staticClass:"px-10 mb-8 md:mb-16 lg:px-0 lg:mb-0",attrs:{name:"SPACE LAUNCH 101",number:"03"}}),e._v(" "),n("div",{staticClass:"flex flex-col-reverse justify-between lg:flex-row"},[n("div",{staticClass:"\n        desc_tech_container \n        flex items-center flex-col self-center \n        lg:items-baseline lg:justify-start lg:flex-row"},[n("NavTech"),e._v(" "),n("div",{staticClass:"container"},[n("p",{staticClass:"intro_title uppercase text-blue-primary barlow_condensed text-center lg:text-left"},[e._v("\n          The terminologiy ...\n        ")]),e._v(" "),n("h3",{staticClass:"tech_title uppercase bellefair text-center lg:text-left"},[e._v("\n          "+e._s(e.technology.title)+"\n        ")]),e._v(" "),n("p",{staticClass:"\n            tech_description \n            mx-6\n            md:mx-auto text-blue-primary barlow text-center \n            lg:mx-0 lg:text-left"},[e._v("\n          "+e._s(e.technology.description)+"\n        ")])])],1),e._v(" "),n("div",{staticClass:"img_container mb-8 md:mb-14 lg:mb-0"},[n("img",{staticClass:"hidden lg:block",attrs:{src:r(289)("./image-"+e.technology.img+"-portrait.jpg"),alt:"tech"}}),e._v(" "),n("img",{staticClass:"block lg:hidden",attrs:{src:r(293)("./image-"+e.technology.img+"-landscape.jpg"),alt:"tech"}})])])],1)}),[],!1,null,"fa86bdbe",null);t.default=component.exports;installComponents(component,{TitlePage:r(257).default,NavTech:r(274).default})}}]);