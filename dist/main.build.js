!function(e){function t(t){for(var n,u,o=t[0],s=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],r[u]&&d.push(r[u][0]),r[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);d.length;)d.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(l.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},r={2:0},l=[];function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var c=s;l.push([644,1,0]),a()}({165:function(e,t,a){},188:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(64)),r=f(a(61)),l=f(a(60)),u=f(a(59)),o=f(a(54)),s=f(a(2)),i=a(36),c=a(76);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={posts:[]},(0,c.getPosts)().then(function(e){return a.setState({posts:e})}),a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"dateTransform",value:function(e){var t=new Date(e),a=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],t.getDate()+"TH",t.getFullYear()];return a[0]+" "+a[1]+" "+a[2]}},{key:"render",value:function(){var e=this;return this.state.posts.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(t){return!e.props.tag||!!t.Tags.includes(e.props.tag)}).map(function(t){return s.default.createElement("li",{key:t.ID},s.default.createElement(i.Link,{to:"/post/"+t.ID},s.default.createElement("span",{className:"item-name"},t.Title),s.default.createElement("span",{className:"item-date"},e.dateTransform(t.PublishDate))))})}}]),t}(s.default.PureComponent);t.default=d},194:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(64)),r=f(a(61)),l=f(a(60)),u=f(a(59)),o=f(a(54)),s=f(a(2)),i=a(36),c=a(76);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={tags:[],selected:""},(0,c.getTags)().then(function(e){return a.setState({tags:e,selected:a.props.tag})}),a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this;return[s.default.createElement("li",{key:"ALL",style:{color:"ALL"===this.state.selected?"#fff":"",background:"ALL"===this.state.selected?"#333":""}},s.default.createElement(i.Link,{to:"/archive",onClick:function(t){return e.setState({selected:"ALL"})}},"ALL"))].concat(this.state.tags.map(function(t){return s.default.createElement("li",{key:t,style:{color:e.state.selected===t?"#fff":"",background:e.state.selected===t?"#333":""}},s.default.createElement(i.Link,{to:"/archive/tag/"+t,onClick:function(a){return e.setState({selected:t})}},t))}))}}]),t}(s.default.PureComponent);t.default=d},195:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(194)),l=u(a(193));function u(e){return e&&e.__esModule?e:{default:e}}a(192);t.default=function(e){var t=e.match;return n.default.createElement("div",{className:"archive"},n.default.createElement("div",{className:"archive-tags"},n.default.createElement("h3",null,"Tags"),n.default.createElement("ul",{className:"archive-tag-items"},n.default.createElement(r.default,{tag:t.params.tag}))),n.default.createElement("div",{className:"archive-list"},n.default.createElement("h3",null,"List"),n.default.createElement("ul",{className:"archive-list-items"},n.default.createElement(l.default,{tag:t.params.tag}))))}},197:function(e,t,a){},198:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(64)),r=i(a(61)),l=i(a(60)),u=i(a(59)),o=i(a(54)),s=i(a(2));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={canvasSize:0,intervalCode:null,myCanvas:null},a.state.canvasSize=e.size,a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("lifegame");this.state.myCanvas=e;var t=10*Math.round(e.offsetWidth/10);this.state.canvasSize=t;var a=t/10,n=10;if(null!=e){var r=function(e){for(var t=new Array(e),a=0;a<e;a++){t[a]=new Array(e);for(var n=0;n<e;n++)t[a][n]=Math.round(Math.random())}return t}(a);this.mousePassCanvas=o,e.addEventListener("mousemove",o);var l=e.getContext("2d");l.fillRect(0,0,t,t),this.state.intervalCode=setInterval(function(){!function(e){for(var t=e.length,a=0;a<t;a++)for(var n=0;n<t;n++)s(a,n,e)}(function e(t){for(var a=[],n=t.length,r=0;r<n;r++)t[r]instanceof Array?a[r]=e(t[r]):a[r]=t[r];return a}(r)),u(r)},50)}function u(e){for(var t=e.length,a=0;a<t;a++)for(var n=0;n<t;n++)1===e[a][n]?i(a,n):c(a,n)}function o(e){var t=e.offsetX,l=e.offsetY,o=Math.floor(t/n),s=Math.floor(l/n);o<=0||s<=0||(o<a&&s<a&&(r[o][s]=1),u(r))}function s(e,t,a){switch(function(e,t,a){for(var n=0,r=e-1;r<=e+1;r++)for(var l=t-1;l<=t+1;l++)r>=0&&r<a.length&&l>=0&&l<a.length&&(r!==e||l!==t)&&(n+=1===a[r][l]?1:0);return n}(e,t,a)){case 3:return r[e][t]=1,1;case 2:return-1;default:return r[e][t]=0,0}}function i(e,t){l.fillStyle="#000000",l.fillRect(e*n,t*n,n,n)}function c(e,t){l.fillStyle="#ffffff",l.fillRect(e*n,t*n,n,n)}}},{key:"componentWillUnmount",value:function(){this.state.myCanvas.removeEventListener("mousemove",this.mousePassCanvas),clearInterval(this.state.intervalCode)}},{key:"sizePX",value:function(){if(0!==this.state.canvasSize)return{height:this.state.canvasSize+"px",width:this.state.canvasSize+"px",margin:"0 auto"}}},{key:"render",value:function(){return s.default.createElement("div",{className:"lifegame-box",style:this.sizePX()},s.default.createElement("canvas",{id:"lifegame",width:this.state.canvasSize,height:this.state.canvasSize}))}}]),t}(s.default.PureComponent);t.default=c},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),r=l(a(198));function l(e){return e&&e.__esModule?e:{default:e}}a(197);t.default=function(e){return n.default.createElement("div",{className:"about"},n.default.createElement("blockquote",null,n.default.createElement(r.default,{size:300}),n.default.createElement("p",null,"如果说艺术解释了我们的梦想，那么计算机就是以程序的名义执行着它们。",n.default.createElement("br",null)),n.default.createElement("p",null,"带着崇敬和赞美，将本书献给活在计算机中的神灵。"),n.default.createElement("p",{style:{textAlign:"right"}},"——Alan J.Perlis，《计算机程序的结构和解释》序")),n.default.createElement("p",null,"以为人生是连续的，从时光这头到那头，从出生到死亡，像条在时光里蠕动的虫子， 用无常生灭来形容或许更为恰当，岁月携身体流逝而无可挽留，思绪起伏却总是遗忘， 回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",n.default.createElement("br",null),n.default.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘， 能做的，仅是用文字去挽留那些思绪，在这里，给未来的自己留些东西， 也许能勾起回忆，也许能让回忆更加深刻。"),n.default.createElement("br",null),n.default.createElement("a",{href:"https://github.com/lzcers"},"My GitHub")," ",n.default.createElement("br",null),n.default.createElement("i",null,"Email: lzcers@gmail.com")," ",n.default.createElement("br",null))}},201:function(e,t,a){},202:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(83)),l=u(a(166));function u(e){return e&&e.__esModule?e:{default:e}}a(165),a(201);t.default=function(e){var t=e.title,a=e.tags,u=e.publishDate,o=e.content,s=new Date(u),i=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][s.getMonth()],s.getDate()+"TH",s.getFullYear()],c=i[0],f=i[1],d=i[2];return n.default.createElement("article",{className:"post"},n.default.createElement("h1",{className:"article-title"},t),n.default.createElement("div",{className:"article-date"},(c||"")+" "+f+" "+(d||"")),n.default.createElement("div",{className:"article-content"},n.default.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:o}})),n.default.createElement("div",{className:"article-info"},n.default.createElement("div",{className:"article-tags"},n.default.createElement(r.default,{icon:l.default,className:"article-tags-pic"}),a.map(function(e){return n.default.createElement("a",{href:"",key:e,className:"article-tags-link"},e)}))))}},203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(64)),r=f(a(61)),l=f(a(60)),u=f(a(59)),o=f(a(54)),s=f(a(2)),i=f(a(202)),c=a(76);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={post:{},loadingFlag:!0},(0,c.getPostByID)(e.id).then(function(e){return a.setState({post:e,loadingFlag:!1})}),a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.state.post;return this.state.loadingFlag?s.default.createElement("h3",null,"Loading..."):s.default.createElement(i.default,{id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content})}}]),t}(s.default.PureComponent);t.default=d},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),r=l(a(203));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.match;return n.default.createElement(r.default,{id:t.params.id})}},206:function(e,t,a){},528:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(527)),r=u(a(526)),l=u(a(348));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={nodeID:"root",nodeLevel:0,childrenNode:[]};return e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}).forEach(function(e){return function e(t,a){var n=void 0;t.childrenNode.forEach(function(e){a.nodeLevel>e.nodeLevel&&(n=e)}),void 0===n?t.childrenNode.push(a):e(n,a)}(t,e)}),t}var s=new n.default.Renderer;s.heading=function(e,t){return"<h"+t+' id="'+e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-")+'">'+e+"</h"+t+">"},s.code=function(e,t){return'<pre><code class="lang-'+t+'">'+r.default.highlightAuto(e).value+"</code></pre>"},n.default.setOptions({renderer:s,breaks:!0,gfm:!0}),t.default=function(e){var t=(0,l.default)(e),a=t.attributes,r=t.body,u=a,s=n.default.lexer(r),i=o(s);return{meta:u,html:n.default.parser(s),markdown:r,tocTree:i}}},531:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(530),l=(n=r)&&n.__esModule?n:{default:n};t.default={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,(0,l.default)(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}}},589:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(2)),r=o(a(83)),l=o(a(166)),u=a(36);function o(e){return e&&e.__esModule?e:{default:e}}a(588),a(586),a(165);t.default=function(e){var t=e.id,a=e.title,o=e.tags,s=e.publishDate,i=e.content,c=new Date(s),f=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][c.getMonth()],c.getDate()+"TH",c.getFullYear()],d=f[0],m=f[1],h=f[2];return n.default.createElement("article",{className:"article"},n.default.createElement("h1",{className:"article-title"},n.default.createElement(u.Link,{to:"/post/"+t},a)),n.default.createElement("div",{className:"article-date"},d+" "+m+" "+h),n.default.createElement("div",{className:"article-content"},n.default.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:i}})),n.default.createElement("div",{className:"article-info"},n.default.createElement(u.Link,{to:"/post/"+t},"MORE"),n.default.createElement("div",{className:"article-tags"},n.default.createElement(r.default,{icon:l.default,className:"article-tags-pic"}),o.map(function(e){return n.default.createElement("a",{href:"",key:e,className:"article-tags-link"},e)}))))}},621:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(64)),r=v(a(61)),l=v(a(60)),u=v(a(59)),o=v(a(54)),s=v(a(2)),i=a(36),c=v(a(83)),f=v(a(591)),d=v(a(590)),m=v(a(589)),h=a(76);function v(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={loadingFlag:!0,posts:[]},(0,h.getPosts)().then(function(e){return a.setState({loadingFlag:!1,posts:e})}),a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.pageNumber,t=10*(e-1);return s.default.createElement("div",{className:"articles"},this.state.posts.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(t,t+10).map(function(e){return s.default.createElement(m.default,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content})}),s.default.createElement("div",{className:"post-nav"},e>1&&s.default.createElement("div",{className:"post-left"},s.default.createElement(c.default,{icon:f.default}),s.default.createElement(i.Link,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+(parseInt(e,10)-1)},"PREVIOUS")),e<this.state.posts.length/10&&s.default.createElement("div",{className:"post-right"},s.default.createElement(i.Link,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+(e?parseInt(e,10)+1:2)},"NEXT"),s.default.createElement(c.default,{icon:d.default}))),!this.state.loadingFlag||s.default.createElement("h3",null,"Loading..."))}}]),t}(s.default.PureComponent);t.default=p},622:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),r=l(a(621));function l(e){return e&&e.__esModule?e:{default:e}}a(206);t.default=function(e){var t=e.match.params.pageNumber||1;return n.default.createElement(r.default,{pageNumber:t})}},623:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(2)),r=a(36),l=i(a(622)),u=i(a(204)),o=i(a(199)),s=i(a(195));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement(r.Switch,null,n.default.createElement(r.Route,{exact:!0,path:"/",component:l.default}),n.default.createElement(r.Route,{exact:!0,path:"/home/page/:pageNumber",component:l.default}),n.default.createElement(r.Route,{path:"/home",component:l.default}),n.default.createElement(r.Route,{path:"/post/:id",component:u.default}),n.default.createElement(r.Route,{path:"/about",component:o.default}),n.default.createElement(r.Route,{path:"/archive/tag/:tag",component:s.default}),n.default.createElement(r.Route,{path:"/archive",component:s.default}))}},625:function(e,t,a){},627:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(83)),l=u(a(626));function u(e){return e&&e.__esModule?e:{default:e}}a(625);t.default=function(e){return n.default.createElement("footer",null,n.default.createElement("p",null,"Copyright © KSANA 2017 - 2018 ",n.default.createElement(r.default,{icon:l.default})," Powered by React"))}},629:function(e,t,a){},630:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(2),l=(n=r)&&n.__esModule?n:{default:n},u=a(36);a(629);t.default=function(e){return l.default.createElement("nav",{className:"nav"},l.default.createElement("div",{className:"nav-header"},l.default.createElement("h1",{className:"nav-sitename"},"ksana")),l.default.createElement("ul",{className:"nav-menu"},l.default.createElement("li",{className:"nav-item"},l.default.createElement(u.Link,{to:"/home"},"HOME")),l.default.createElement("li",{className:"nav-item"},l.default.createElement(u.Link,{to:"/archive"},"ARCHIVE")),l.default.createElement("li",{className:"nav-item"},l.default.createElement(u.Link,{to:"/about"},"ABOUT"))))}},631:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(2)),r=o(a(630)),l=o(a(627)),u=o(a(623));function o(e){return e&&e.__esModule?e:{default:e}}a(190),a(188);t.default=function(e){return n.default.createElement("div",{className:"wrap"},n.default.createElement(r.default,null),n.default.createElement("div",{className:"content"},n.default.createElement(u.default,null)),n.default.createElement(l.default,null))}},644:function(e,t,a){"use strict";var n=o(a(2)),r=o(a(642)),l=a(36),u=o(a(631));function o(e){return e&&e.__esModule?e:{default:e}}r.default.render(n.default.createElement(l.HashRouter,null,n.default.createElement(u.default,null)),document.getElementById("app"))},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostByID=t.getTags=t.getPosts=void 0;var n,r=h(a(583)),l=h(a(568)),u=h(a(563)),o=h(a(560)),s=h(a(557)),i=h(a(159)),c=(n=(0,s.default)(u.default.mark(function e(){var t,a,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:if(t=e.sent,a=t.filter(function(e){return!e.name.match(".json")}),!(n=t.find(function(e){return"tags.json"===e.name}))){e.next=7;break}return e.abrupt("return",M(n.sha).then(function(e){return e.map(function(e){var t=!0,n=!1,r=void 0;try{for(var l,u=(0,o.default)(a);!(t=(l=u.next()).done);t=!0){var s=l.value;if(e.fileName===s.name){e.ID=s.sha,e.Tags=e.Tags.split("|").map(function(e){return e.trim()}),e.Content=(0,m.default)(e.Content).html;break}}}catch(e){n=!0,r=e}finally{try{!t&&u.return&&u.return()}finally{if(n)throw r}}return e})}));case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),f=h(a(550)),d=h(a(531)),m=h(a(528));function h(e){return e&&e.__esModule?e:{default:e}}a(321);var v="lzcers/KsanaBlog-React",p="master",g="https://api.github.com/repos/"+v+"/contents/"+"articles/"+"?ref="+p,E="https://api.github.com/repos/"+v+"/contents/"+"articles/"+"?ref="+p,_="https://api.github.com/repos/"+v+"/git/blobs/",b="WlRJM1lqTm1Zak0yTVRFd01qUXdOV05tTW1NMk1qQmtNekF5WW1ZMVlUVXlORGs1Wm1FMk9BPT0";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return d.default.has("postList")?i.default.resolve(d.default.get("postList")):f.default.get(e,{params:{access_token:atob(atob(b))}}).then(function(e){return e.data}).then(function(e){var t=e.map(function(e){return{name:e.name,sha:e.sha,size:e.size}}).filter(function(e){return 0!==e.size});return d.default.set("postList",t),t})}function M(e){if(d.default.has(e))return i.default.resolve(d.default.get(e));var t={headers:{Accept:"application/vnd.github.v3.raw"},params:{access_token:atob(atob(b))}};return f.default.get(_+e,t).then(function(e){return e.data}).then(function(t){return d.default.set(e,t),t})}t.getPosts=c,t.getTags=function(){return y(E).then(function(e){return e.find(function(e){return"tags.json"===e.name})}).then(function(e){return void 0===e?i.default.resolve([]):M(e.sha)}).then(function(e){return[].concat((0,l.default)(new r.default(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)}))))})},t.getPostByID=function(e){return M(e).then(function(e){return(0,m.default)(e)}).then(function(t){return{ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html}})}}});
//# sourceMappingURL=main.build.js.map