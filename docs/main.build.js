!function(e){function t(t){for(var a,l,o=t[0],i=t[1],s=t[2],m=0,f=[];m<o.length;m++)l=o[m],r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={1:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://ksana.oss-cn-shenzhen.aliyuncs.com/";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;c.push([584,0,2]),n()}({331:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t,n){},577:function(e,t,n){},578:function(e,t,n){},579:function(e,t,n){},580:function(e,t,n){},581:function(e,t,n){},583:function(e,t,n){},584:function(e,t,n){"use strict";n.r(t);n(166),n(168),n(170),n(171),n(172),n(173),n(174),n(176),n(177),n(178),n(179),n(180),n(96),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(193),n(194),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(229),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(138),n(273),n(275),n(276),n(277),n(278),n(279),n(280),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(145);var a=n(0),r=n.n(a),c=n(156),l=n.n(c),o=n(13),i=n(54),s=n(32),u=n.n(s),m=n(33),f=n.n(m),h=n(34),p=n.n(h),d=n(35),v=n.n(d),E=n(23),g=n.n(E),b=n(36),y=n.n(b),N=n(37),w=n.n(N),D=function(e){function t(e){var n;return u()(this,t),n=p()(this,v()(t).call(this,e)),w()(g()(n),"state",{canvasSize:0,intervalCode:null,myCanvas:null}),n.state.canvasSize=e.size,n}return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("lifegame"),t=e.getContext("2d");this.state.myCanvas=e;var n=10*Math.round(e.offsetWidth/10);this.state.canvasSize=n;var a=n/10,r=10;if(null!=e){var c=function(e){for(var t=new Array(e),n=0;n<e;n++){t[n]=new Array(e);for(var a=0;a<e;a++)t[n][a]=Math.round(Math.random())}return t}(a);this.mousePassCanvas=s,e.addEventListener("mousemove",s),t.fillRect(0,0,n,n),this.state.intervalCode=setInterval(function(){!function(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)l(n,a,e)}(function e(t){for(var n=[],a=t.length,r=0;r<a;r++)t[r]instanceof Array?n[r]=e(t[r]):n[r]=t[r];return n}(c)),i(c)},50)}function l(e,t,n){switch(function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var c=t-1;c<=t+1;c++)r>=0&&r<n.length&&c>=0&&c<n.length&&(r!==e||c!==t)&&(a+=1===n[r][c]?1:0);return a}(e,t,n)){case 3:return c[e][t]=1,1;case 2:return-1;default:return c[e][t]=0,0}}function o(e,n){t.fillStyle="#ffffff",t.fillRect(e*r,n*r,r,r)}function i(e){for(var n,a,c=e.length,l=0;l<c;l++)for(var i=0;i<c;i++)1===e[l][i]?(n=l,a=i,t.fillStyle="#000000",t.fillRect(n*r,a*r,r,r)):o(l,i)}function s(e){var t=e.offsetX,n=e.offsetY,l=Math.floor(t/r),o=Math.floor(n/r);l<=0||o<=0||(l<a&&o<a&&(c[l][o]=1),i(c))}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.myCanvas,n=e.intervalCode;t.removeEventListener("mousemove",this.mousePassCanvas),clearInterval(n)}},{key:"sizePX",value:function(){var e=this.state.canvasSize;if(0!==e)return{height:e+"px",width:e+"px",margin:"0 auto"}}},{key:"render",value:function(){var e=this.state.canvasSize;return r.a.createElement("div",{className:"lifegame-box",style:this.sizePX()},r.a.createElement("canvas",{id:"lifegame",width:e,height:e}))}}]),t}(r.a.PureComponent),k=(n(331),function(e){return r.a.createElement("div",{className:"guide"},r.a.createElement(D,{size:300}),r.a.createElement("blockquote",{className:"quotoSICP"},r.a.createElement("p",null,"「 如果说艺术解释了我们的梦想，",r.a.createElement("br",null),"那么计算机就是以程序的名义执行着它们。」",r.a.createElement("br",null),r.a.createElement("i",{style:{textAlign:"center",fontStyle:"italic",fontSize:"14px"}},"——Alan J.Perlis《计算机程序的构造与解释》"))),r.a.createElement("div",{className:"link"},r.a.createElement("h3",null,r.a.createElement("a",{href:"/#/home"},"HOME")),r.a.createElement("h3",null,r.a.createElement("a",{href:"/#/about"},"ABOUTME"))))}),S=n(53),T=n(157),P=n.n(T),C=n(158),A=n.n(C),L=n(159),x=n.n(L);n(334),n(335),n(336),n(337);function I(e,t){var n=e.childrenNode;return r.a.createElement("li",{className:"toc-li",key:t},r.a.createElement("a",{className:"toc-anchor",onClick:function(t){return n=e.nodeID,a=document.querySelector("#"+n),r=document.documentElement.scrollTop||document.body.scrollTop,c=a.offsetTop-80,void(null!=a&&function e(){r+=(c-r)/4,Math.abs(c-r)<1?window.scrollTo(0,c):(window.scrollTo(0,r),requestAnimationFrame(e))}());var n,a,r,c}},e.nodeID),n.length?r.a.createElement("ol",{className:"toc-li"},n.map(function(e){return I(e,e.nodeID+t)})):null)}var O=function(e){var t=e.toc;return t?r.a.createElement("div",{className:"toc"},r.a.createElement("ol",null,t.childrenNode.map(function(e,t){return I(e,e.nodeID+t)}))):null},M=function(e){var t=e.id,n=e.title,a=e.tags,c=e.publishDate,l=e.content,i=e.toc,s=e.mode,u=new Date(c),m=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][u.getMonth()],u.getDate()+"TH",u.getFullYear()],f=m[0],h=m[1],p=m[2];return r.a.createElement("article",{className:"article post"},r.a.createElement("h1",{className:"article-title"},s?n:r.a.createElement(o.b,{to:"/post/"+t},n)),r.a.createElement("div",{className:"article-date"},"".concat(f||""," ").concat(h," ").concat(p||"")),r.a.createElement("div",{className:"article-content"},i&&i.childrenNode.length>=3?r.a.createElement("aside",{className:"article-toc"},r.a.createElement(O,{toc:i})):null,r.a.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:l}})),r.a.createElement("div",{className:"article-info"},s?null:r.a.createElement(o.b,{to:"/post/"+t},"MORE"),r.a.createElement("div",{className:"article-tags"},r.a.createElement(S.a,{icon:x.a,className:"article-tags-pic"}),a.map(function(e){return r.a.createElement(o.b,{to:"/archive/tag/"+e,key:e,className:"article-tags-link"},e)}))))},z=n(55),R=n.n(z),F=n(89),J=n.n(F),j=n(162),U=n.n(j),B=n(90),_=n.n(B),H={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,JSON.stringify(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}},Y=n(72),q=n.n(Y),V=n(163),X=n.n(V),G=n(164),K=n.n(G);function W(e){var t=e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}),n={nodeID:"root",nodeLevel:0,childrenNode:[]};return t.forEach(function(e){return function e(t,n){var a;t.childrenNode.forEach(function(e){n.nodeLevel>e.nodeLevel&&(a=e)}),void 0===a?t.childrenNode.push(n):e(a,n)}(n,e)}),n}var Q=new q.a.Renderer;Q.heading=function(e,t){var n=e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-");return"<h".concat(t,' id="').concat(n,'">').concat(e,"</h").concat(t,">")},Q.code=function(e,t){var n=X.a.highlightAuto(e).value;return'<pre><code class="lang-'.concat(t,'">').concat(n,"</code></pre>")},q.a.setOptions({renderer:Q,breaks:!0,gfm:!0});var Z=function(e){var t=K()(e),n=t.attributes,a=t.body,r=n,c=q.a.lexer(a),l=W(c);return{meta:r,html:q.a.parser(c),markdown:a,tocTree:l}},$="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/tags.json",ee="/articles/tags.json",te="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/",ne="/articles/";function ae(e){return H.has("postList")?Promise.resolve(H.get("postList")):_.a.get(e).then(function(e){return e.data}).then(function(e){return H.set("postList",e),e}).catch(function(e){return!1})}function re(){return ce.apply(this,arguments)}function ce(){return(ce=J()(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe().then(function(e){return e.map(function(e){return e.ID=e.fileName,e.Tags=e.Tags.split("|").map(function(e){return e.trim()}),e.Content=Z(e.Content).html,e})}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function le(e,t){return H.has(e)?Promise.resolve(H.get(e)):_.a.get(t+e).then(function(e){return e.data}).then(function(e){return Z(e)}).then(function(t){var n={ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html,TOC:t.tocTree};return H.set(e,n),n}).catch(function(e){return!1})}function oe(){return ie.apply(this,arguments)}function ie(){return(ie=J()(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae($);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,ae(ee);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function se(){return(se=J()(R.a.mark(function e(t){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(t,te);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,le(t,ne);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}_.a.defaults.timeout=3500;var ue=function(e,t){var n=t?parseInt(e,10)-1:parseInt(e,10)+1;return r.a.createElement("div",{className:t?"post-left":"post-right"},t&&r.a.createElement(S.a,{icon:P.a}),r.a.createElement(o.b,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+n},t?"PREVIOUS":"NEXT"),!t&&r.a.createElement(S.a,{icon:A.a}))},me=function(e){function t(e){var n;return u()(this,t),n=p()(this,v()(t).call(this,e)),w()(g()(n),"state",{loadingFlag:!0,posts:[]}),re().then(function(e){return n.setState({loadingFlag:!1,posts:e})}),n}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this.props.pageNumber,t=this.state,n=t.posts,a=t.loadingFlag,c=10*(e-1);return r.a.createElement("div",{className:"articles"},n.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(c,c+10).map(function(e){return r.a.createElement(M,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content,toc:null,mode:!1})}),r.a.createElement("div",{className:"post-nav"},e>1&&ue(e,!0),e<n.length/10&&ue(e,!1)),!a||r.a.createElement("h3",null,"Loading..."))}}]),t}(a.PureComponent),fe=(n(577),function(e){var t=e.match.params.pageNumber||1;return r.a.createElement(me,{pageNumber:t})}),he=function(e){function t(e){var n;return u()(this,t),n=p()(this,v()(t).call(this,e)),w()(g()(n),"state",{post:{},loadingFlag:!0}),function(e){return se.apply(this,arguments)}(e.id).then(function(e){return n.setState({post:e,loadingFlag:!1})}),n}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this.state,t=e.post;return e.loadingFlag?r.a.createElement("h3",null,"Loading..."):r.a.createElement(M,{id:t.ID,title:t.Title,tags:t.Tags,publishDate:t.PublishDate,content:t.Content,toc:t.TOC,mode:!0})}}]),t}(a.PureComponent),pe=function(e){var t=e.match;return r.a.createElement(he,{id:t.params.id})},de=(n(578),function(e){return r.a.createElement("div",{className:"about"},r.a.createElement("p",null,"以为人生是连续的，从时光这头到那头，从出生到死亡，像条在时光里蠕动的虫子，",r.a.createElement("br",null),"用无常生灭来形容或许更为恰当，岁月携身体流逝而无可挽留，思绪起伏却总是遗忘，",r.a.createElement("br",null),"回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",r.a.createElement("br",null),r.a.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘，",r.a.createElement("br",null),"能做的，仅是用文字去挽留那些思绪，在这里，",r.a.createElement("br",null),"给未来的自己留些东西， 也许能勾起回忆，也许能让回忆更加深刻。"),r.a.createElement("br",null),r.a.createElement("a",{style:{textDecoration:"underline"},href:"https://github.com/lzcers"},"My GitHub"),r.a.createElement("br",null),r.a.createElement("i",null,"Email: lzcers@gmail.com")," ",r.a.createElement("br",null))}),ve=function(e){function t(e){var n;u()(this,t),n=p()(this,v()(t).call(this,e)),w()(g()(n),"state",{tags:[],selected:""});var a=n.props.tag;return oe().then(function(e){return U()(new Set(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)})))}).then(function(e){return n.setState({tags:e,selected:a})}),n}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.selected,a=t.tags;return[r.a.createElement("li",{key:"ALL",style:{color:"ALL"===n?"#fff":"",background:"ALL"===n?"#333":""}},r.a.createElement(o.b,{to:"/archive",onClick:function(t){return e.setState({selected:"ALL"})}},"ALL"))].concat(a.map(function(t){return r.a.createElement("li",{key:t,style:{color:n===t?"#fff":"",background:n===t?"#333":""}},r.a.createElement(o.b,{to:"/archive/tag/"+t,onClick:function(n){return e.setState({selected:t})}},t))}))}}]),t}(a.PureComponent),Ee=function(e){function t(e){var n;return u()(this,t),n=p()(this,v()(t).call(this,e)),w()(g()(n),"state",{posts:[]}),re().then(function(e){return n.setState({posts:e})}),n}return y()(t,e),f()(t,[{key:"dateTransform",value:function(e){var t=new Date(e),n=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],t.getDate()+"TH",t.getFullYear()],a=n[1],r=n[2];return"".concat(n[0]," ").concat(a," ").concat(r)}},{key:"render",value:function(){var e=this,t=this.state.posts,n=this.props.tag;return t.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(e){return!n||!!e.Tags.includes(n)}).map(function(t){return r.a.createElement("li",{key:t.ID},r.a.createElement(o.b,{to:"/post/"+t.ID},r.a.createElement("span",{className:"item-name"},t.Title),r.a.createElement("span",{className:"item-date"},e.dateTransform(t.PublishDate))))})}}]),t}(r.a.PureComponent),ge=(n(579),function(e){var t=e.match;return r.a.createElement("div",{className:"archive"},r.a.createElement("div",{className:"archive-tags"},r.a.createElement("h3",null,"Tags"),r.a.createElement("ul",{className:"archive-tag-items"},r.a.createElement(ve,{tag:t.params.tag}))),r.a.createElement("div",{className:"archive-list"},r.a.createElement("h3",null,"List"),r.a.createElement("ul",{className:"archive-list-items"},r.a.createElement(Ee,{tag:t.params.tag}))))}),be=(n(580),function(e){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-header"},r.a.createElement("h1",{className:"nav-sitename"},"ksana")),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/home"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/archive"},"ARCHIVE")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/about"},"ABOUT"))))}),ye=n(165),Ne=n.n(ye),we=(n(581),function(e){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright © KSANA 2017 - 2019 ",r.a.createElement(S.a,{icon:Ne.a})," Powered by React"))}),De=function(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/home/page/:pageNumber",component:fe}),r.a.createElement(i.a,{path:"/home",component:fe}),r.a.createElement(i.a,{path:"/post/:id",component:pe}),r.a.createElement(i.a,{path:"/about",component:de}),r.a.createElement(i.a,{path:"/archive/tag/:tag",component:ge}),r.a.createElement(i.a,{path:"/archive",component:ge}))},ke=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrap"},r.a.createElement(be,null),r.a.createElement("div",{className:"content"},r.a.createElement(De,null)),r.a.createElement(we,null)))},Se=function(e){return r.a.createElement(k,null)},Te=function(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Se}),r.a.createElement(i.a,{path:"/",component:ke}))},Pe=(n(582),n(583),function(e){return r.a.createElement(Te,null)});l.a.render(r.a.createElement(o.a,null,r.a.createElement(Pe,null)),document.getElementById("app"))}});
//# sourceMappingURL=main.build.js.map