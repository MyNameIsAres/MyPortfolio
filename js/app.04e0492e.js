(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],m=0,u=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/MyPortfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function o(e,t,a,o,i,s){var r=Object(n["h"])("ProjectCard");return Object(n["f"])(),Object(n["c"])(r)}var i={class:"card"},s={class:"overlay"},r={class:"overlay-content"},c={id:"overlay-title"},l=Object(n["e"])("div",{class:"button-container"},[Object(n["e"])("button",{id:"toggle",class:"button"},"View Project")],-1),d=Object(n["e"])("div",{id:"overlay"},null,-1),m={id:"project",class:"project"},u=Object(n["e"])("button",{class:"project-close",id:"test"},[Object(n["e"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",class:"svg-inline--fa fa-times fa-w-11"},[Object(n["e"])("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",class:""})])],-1),g={class:"project-description"},p=Object(n["e"])("h5",null,"About",-1),h={class:"links-container"};function b(e,t,a,o,b,f){return Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(b.projects,(function(e){return Object(n["f"])(),Object(n["c"])("li",{key:e.title,class:["thumbnail project-thumbnail",[e.class]]},[Object(n["e"])("div",i,[Object(n["e"])("img",{src:e.cardImage,alt:"test"},null,8,["src"]),Object(n["e"])("div",s,[Object(n["e"])("div",r,[Object(n["e"])("h4",c,Object(n["i"])(e.title),1),Object(n["e"])("ul",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(e.tags,(function(e){return Object(n["f"])(),Object(n["c"])("li",{key:e.tag},Object(n["i"])(e.tag),1)})),128))]),l])])]),d,Object(n["e"])("div",m,[u,Object(n["e"])("div",g,[Object(n["e"])("h3",null,Object(n["i"])(e.title),1),Object(n["e"])("ul",null,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(e.tags,(function(e){return Object(n["f"])(),Object(n["c"])("li",{class:"tag-item",key:e.tag},Object(n["i"])(e.tag),1)})),128))]),p,Object(n["e"])("p",null,Object(n["i"])(e.body),1),Object(n["e"])("div",h,[e.demoLink?(Object(n["f"])(),Object(n["c"])("a",{key:0,class:"btn-detail links-container-button demo-button",href:e.demoLink,target:"_blank"},"Demo",8,["href"])):Object(n["d"])("",!0),e.codeLink?(Object(n["f"])(),Object(n["c"])("a",{key:1,class:"btn-detail links-container-button code-button",href:e.codeLink,target:"_blank"},"Code",8,["href"])):Object(n["d"])("",!0)])])])],2)})),128)}var f={name:"app",data:function(){return{projects:{karelmuns:{title:"Karel Muns",cardImage:"images//karelmunstest2.png",body:"My role in this project was to serve as one of three full stack developers.\n\n My primary responsiblities were to customize, manage and setup Voyager to serve as the CMS, implement our custom Voyager design template, manage and setup the database and relationships, and load content from Voyager to the frontend.",tags:[{tag:"laravel"},{tag:"vue"},{tag:"voyager"}],demoLink:"https://karelmuns.nl/",class:"php"},amsterdamlightfestival:{title:"Amsterdam Light Festival",cardImage:"images//amsterdamlightfestival4.png",body:"My role in this project was to serve as a full stack developer. Amsterdam Light Festival to upgrade the News Letter feature on their website. This project utalized VueJS on the frontend, and Mailchimp as the backend newsletter API. My job was to allows users to sign up for the newsletter, register the new user, and send them e-mails.",tags:[{tag:"laravel"},{tag:"vue"},{tag:"mailchimp"}],demoLink:"https://amsterdamlightfestival.com/nl",class:"php"},custom_chrome_extension:{title:"Personal Chrome Extension",cardImage:"images//chromeextension.jpg",body:"Chrome offers a good newtab page by default. However, I wanted something custom, and more personalised to me. My personal chrome extension is a new tab page with links to Github, linkedin, my email and a new site. It uses Ecosia as a default search engine.",tags:[{tag:"javascript"},{tag:"openweather"}],demoLink:"https://github.com/MyNameIsAres/Personal-Chrome-Extension/blob/master/README.md",codeLink:"https://github.com/MyNameIsAres/Personal-Chrome-Extension",class:"open-source"},elytra_death_handler:{title:"Elytra Death Handler",cardImage:"images//elytradeath.png",body:"This project was created to provide servers with a better solution to return to a player's death location, after they died with an elytra, because of some server lag that resulted in a bad landing, or late rendering of a mountain/hill.",tags:[{tag:"spigot"},{tag:"java"},{tag:"foundation"}],demoLink:"https://github.com/MyNameIsAres/ElytraDeathHandler/blob/master/README.md",codeLink:"https://github.com/MyNameIsAres/ElytraDeathHandler",class:"java open-source"},betterwitches:{title:"Better Witches",cardImage:"images//betterwitchesimage.png",body:"Better Witches is a plugin created to create different varieties and more challenging witches, and bring new mechanics to the Cauldron item. This is accomplished by introducing custom pathfinding and dynamic targetting AI mechanics at runtime, along with a unique list of abilities that can be applied to witches.",tags:[{tag:"spigot"},{tag:"java"},{tag:"foundation"}],demoLink:"https://github.com/MyNameIsAres/BetterWitches",codeLink:"https://github.com/MyNameIsAres/BetterWitches",class:"java open-source"},betterenchants:{title:"Better Enchants",cardImage:"images//enchantmenttable.png",body:"Better Enchants is another plugin in the 'Better Plugins' plugin series. This plugin aims to create new, and exiciting enchantments for players, and create different enchantment mechanics for players to enjoy. This plugin also includes a dynamic enchantment targetting mechanic, where enchantments can be aimed at a specific item, or a specific group of items.",tags:[{tag:"spigot"},{tag:"java"},{tag:"foundation"}],demoLink:"https://github.com/MyNameIsAres/CustomEnchants/blob/master/README.md",codeLink:"https://github.com/MyNameIsAres/CustomEnchants",class:"open-source"},caveofremembrance:{title:"Cave of Remembrance",cardImage:"images//cor2.png",body:"This plugin was contracted by a Skyblock Minecraft server to accomodate a new exclusive shop area. This plugin is the shop component, where players can purchase exclusive items. Server administrators can dynamically add or remove shops, change the items and price in game, and much more. ",tags:[{tag:"spigot"},{tag:"java"},{tag:"foundation"}],class:"java"},springcli:{title:"SpringCLI",cardImage:"images//springclitest1.png",body:"SpringCLI is a command-line tool to support developers utilizing Spring Boot. It includes different Git Bash commands to scaffold parts of a Spring Boot application.",tags:[{tag:"java"},{tag:"velocity"},{tag:"picocli"}],demoLink:"https://github.com/MyNameIsAres/SpringCLI/blob/main/README.md",codeLink:"https://github.com/MyNameIsAres/SpringCLI",class:"java open-source"},foundationcli:{title:"FoundationCLI",cardImage:"images//clitest2.png",body:"FoundationCL is a command-line tool to support developers utilizing the Foundation library. It includes different Git Bash commands to scaffold parts of a Minecraft plugin. Like a command to scaffold an event listener, a menu, or an in-game command.",tags:[{tag:"java"},{tag:"velocity"},{tag:"picocli"}],demoLink:"https://github.com/MyNameIsAres/FoundationCLI/blob/main/README.md",codeLink:"https://github.com/MyNameIsAres/FoundationCLI",class:"java open-source"}}}}};f.render=b;var j=f,y={name:"app",components:{ProjectCard:j}};y.render=o;var v=y;Object(n["b"])(v).mount("#project-grid")}});
//# sourceMappingURL=app.04e0492e.js.map