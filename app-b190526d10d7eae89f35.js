webpackJsonp([0xd2a57dc1d883],{107:function(n,e){"use strict";function o(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function t(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=t;var r=[]},268:function(n,e,o){"use strict";e.components={"component---src-templates-docs-page-tsx":o(417),"component---src-pages-404-tsx":o(415),"component---src-pages-index-tsx":o(416)},e.json={"docs-agast-detector.json":o(420),"docs-akaze-detector.json":o(421),"docs-background-subtractor-knn.json":o(422),"docs-background-subtractor-mog-2.json":o(423),"docs-brisk-detector.json":o(424),"docs-cascade-classifier.json":o(425),"docs-contour.json":o(426),"docs-cv.json":o(427),"docs-descriptor-match.json":o(428),"docs-detection-roi.json":o(429),"docs-eigen-face-recognizer.json":o(430),"docs-fast-detector.json":o(431),"docs-fisher-face-recognizer.json":o(432),"docs-gftt-detector.json":o(433),"docs-hog-descriptor.json":o(434),"docs-kaze-detector.json":o(435),"docs-key-point.json":o(436),"docs-lbph-face-recognizer.json":o(437),"docs-mat.json":o(438),"docs-moments.json":o(439),"docs-mser-detector.json":o(440),"docs-multi-tracker.json":o(441),"docs-net.json":o(442),"docs-ocrhmm-classifier.json":o(443),"docs-ocrhmm-decoder.json":o(444),"docs-orb-detector.json":o(445),"docs-param-grid.json":o(446),"docs-point.json":o(447),"docs-rect.json":o(448),"docs-rotated-rect.json":o(449),"docs-sift-detector.json":o(450),"docs-simple-blob-detector.json":o(451),"docs-simple-blob-detector-params.json":o(452),"docs-size.json":o(453),"docs-superpixel-lsc.json":o(454),"docs-superpixel-seeds.json":o(455),"docs-superpixel-slic.json":o(456),"docs-surf-detector.json":o(457),"docs-svm.json":o(458),"docs-term-criteria.json":o(459),"docs-tracker-boosting.json":o(460),"docs-tracker-boosting-params.json":o(461),"docs-tracker-goturn.json":o(462),"docs-tracker-kcf.json":o(463),"docs-tracker-kcf-params.json":o(464),"docs-tracker-median-flow.json":o(465),"docs-tracker-mil.json":o(466),"docs-tracker-mil-params.json":o(467),"docs-tracker-tld.json":o(468),"docs-train-data.json":o(469),"docs-vec.json":o(470),"docs-video-capture.json":o(471),"docs-video-writer.json":o(472),"404.json":o(418),"index.json":o(473),"404-html.json":o(419)},e.layouts={}},269:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(1),l=t(a),i=o(6),d=t(i),p=o(169),f=t(p),m=o(75),g=t(m),h=o(107),j=o(1670),x=t(j),y=function(n){var e=n.children;return l.default.createElement("div",null,e())},b=function(n){function e(o){r(this,e);var t=c(this,n.call(this)),u=o.location;return f.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:f.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=f.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;f.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),f.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){f.default.getPage(n.state.location.pathname)&&e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,a.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,a.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(l.default.Component);b.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=b,n.exports=e.default},75:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(1561),c=t(r),u=(0,c.default)();n.exports=u},270:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(104),c=o(170),u=t(c),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),c=(0,u.default)(t,e);if(c.split("#").length>1&&(c=c.split("#").slice(0,-1).join("")),c.split("?").length>1&&(c=c.split("?").slice(0,-1).join("")),s[c])return s[c];var a=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(c,{path:n.path})||(0,r.matchPath)(c,{path:n.matchPath}))return a=n,s[c]=n,!0}else{if((0,r.matchPath)(c,{path:n.path,exact:!0}))return a=n,s[c]=n,!0;if((0,r.matchPath)(c,{path:n.path+"index.html"}))return a=n,s[c]=n,!0}return!1}),a}}},271:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(140),c=t(r),u=o(107),s=(0,u.apiRunner)("replaceHistory"),a=s[0],l=a||(0,c.default)();n.exports=l},419:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(482)})})}},418:function(n,e,o){o(4),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(483)})})}},420:function(n,e,o){o(4),n.exports=function(n){return o.e(0xccfcc72fb7ab,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(484)})})}},421:function(n,e,o){o(4),n.exports=function(n){return o.e(0xbd28e384810c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(485)})})}},422:function(n,e,o){o(4),n.exports=function(n){return o.e(0xcd55c436b022,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(486)})})}},423:function(n,e,o){o(4),n.exports=function(n){return o.e(0x715e18d27c9e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(487)})})}},424:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9ebc16ec011,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(488)})})}},425:function(n,e,o){o(4),n.exports=function(n){return o.e(98333129605407,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(489)})})}},426:function(n,e,o){o(4),n.exports=function(n){return o.e(0x898cf6675019,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(490)})})}},427:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc8e7b80754d4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(491)})})}},428:function(n,e,o){o(4),n.exports=function(n){return o.e(49066256427240,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(492)})})}},429:function(n,e,o){o(4),n.exports=function(n){return o.e(0xadd8431eb406,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(493)})})}},430:function(n,e,o){o(4),n.exports=function(n){return o.e(0xbf673344eba9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(494)})})}},431:function(n,e,o){o(4),n.exports=function(n){return o.e(83042509492592,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(495)})})}},432:function(n,e,o){o(4),n.exports=function(n){return o.e(0x8cd16635c592,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(496)})})}},433:function(n,e,o){o(4),n.exports=function(n){return o.e(0xd7b2f620a4a0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(497)})})}},434:function(n,e,o){o(4),n.exports=function(n){return o.e(0xdf2a3d9ee7e2,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(498)})})}},435:function(n,e,o){o(4),n.exports=function(n){return o.e(0x62a1da165857,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(499)})})}},436:function(n,e,o){o(4),n.exports=function(n){return o.e(0xae2d21cbbcc9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(500)})})}},437:function(n,e,o){o(4),n.exports=function(n){return o.e(0x6f2bc6f76c8b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(501)})})}},438:function(n,e,o){o(4),n.exports=function(n){return o.e(49442969764337,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(502)})})}},439:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa854d10750ba,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(503)})})}},440:function(n,e,o){o(4),n.exports=function(n){return o.e(0x8f4df7c15b78,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(504)})})}},441:function(n,e,o){o(4),n.exports=function(n){return o.e(0xdc4c8b9274c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(505)})})}},442:function(n,e,o){o(4),n.exports=function(n){return o.e(49080381570314,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(506)})})}},443:function(n,e,o){o(4),n.exports=function(n){return o.e(0xd71b7377837b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(507)})})}},444:function(n,e,o){o(4),n.exports=function(n){return o.e(0xf3e43d92f7a7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(508)})})}},445:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9c3e66ad64d1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(509)})})}},446:function(n,e,o){o(4),n.exports=function(n){return o.e(0xf7d95f625356,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(510)})})}},447:function(n,e,o){o(4),n.exports=function(n){return o.e(69715227534995,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(511)})})}},448:function(n,e,o){o(4),n.exports=function(n){return o.e(0xb593a14e6a1a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(512)})})}},449:function(n,e,o){o(4),n.exports=function(n){return o.e(0x5c768ce8fd0a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(513)})})}},450:function(n,e,o){o(4),n.exports=function(n){return o.e(0xad8a6efa9074,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(514)})})}},452:function(n,e,o){o(4),n.exports=function(n){return o.e(0x5e695a47a84d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(515)})})}},451:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7f30d5c23975,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(516)})})}},453:function(n,e,o){o(4),n.exports=function(n){return o.e(58631922174324,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(517)})})}},454:function(n,e,o){o(4),n.exports=function(n){return o.e(54957459539283,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(518)})})}},455:function(n,e,o){o(4),n.exports=function(n){return o.e(0xb28111663c37,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(519)})})}},456:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7f98d5a7e595,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(520)})})}},457:function(n,e,o){o(4),n.exports=function(n){return o.e(0x72fe94e9f334,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(521)})})}},458:function(n,e,o){o(4),n.exports=function(n){return o.e(0xcace3a3521e9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(522)})})}},459:function(n,e,o){o(4),n.exports=function(n){return o.e(0xaa387b47331c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(523)})})}},461:function(n,e,o){o(4),n.exports=function(n){return o.e(0x91aac0e15d73,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(524)})})}},460:function(n,e,o){o(4),n.exports=function(n){return o.e(67191772742280,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(525)})})}},462:function(n,e,o){o(4),n.exports=function(n){return o.e(27829719275619,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(526)})})}},464:function(n,e,o){o(4),n.exports=function(n){return o.e(25727945132503,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(527)})})}},463:function(n,e,o){o(4),n.exports=function(n){return o.e(47658755963682,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(528)})})}},465:function(n,e,o){o(4),n.exports=function(n){return o.e(0xfe978b6c8f71,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(529)})})}},467:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa2b47a3a78a7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(530)})})}},466:function(n,e,o){o(4),n.exports=function(n){return o.e(0xfdc4da599275,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(531)})})}},468:function(n,e,o){o(4),n.exports=function(n){return o.e(0x98bfe4612798,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(532)})})}},469:function(n,e,o){o(4),n.exports=function(n){return o.e(0xe31cf21cc4bd,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(533)})})}},470:function(n,e,o){o(4),n.exports=function(n){return o.e(54571561803450,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(534)})})}},471:function(n,e,o){o(4),n.exports=function(n){return o.e(74476004353778,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(535)})})}},472:function(n,e,o){o(4),n.exports=function(n){return o.e(31611542137742,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(536)})})}},473:function(n,e,o){o(4),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(537)})})}},169:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),c=(t(r),o(270)),u=t(c),s=o(75),a=t(s),l=o(170),i=t(l),d=void 0,p={},f={},m={},g={},h={},j=[],x=[],y={},b="",v=[],N={},k=function(n){return n&&n.default||n},R=void 0,C=!0,P=[],w={},_={},E=5;R=o(272)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){v=v.filter(function(e){return e!==n}),R.onResourcedFinished(n)})}}),a.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),a.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var T=function(n,e){return N[n]>N[e]?1:N[n]<N[e]?-1:0},O=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},S=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?f.components[e]:"layout---"===e.slice(0,9)?f.layouts[e]:f.json[e],t(function(n,t){g[e]=t,P.push({resource:e,succeeded:!n}),_[e]||(_[e]=n),P=P.slice(-E),o(n,t)})}},L=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):_[e]?n.nextTick(function(){o(_[e])}):S(e,function(n,t){if(n)o(n);else{var r=k(t());h[e]=r,o(n,r)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=P.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),w[n]||(w[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,F={empty:function(){x=[],y={},N={},v=[],j=[],b=""},addPagesArray:function(n){j=n,b="/opencv4nodejs",d=(0,u.default)(n,b)},addDevRequires:function(n){p=n},addProdRequires:function(n){f=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,i.default)(n,b);if(!j.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,y[e]?y[e]+=1:y[e]=1,F.has(e)||x.unshift(e),x.sort(O);var t=d(e);return t.jsonName&&(N[t.jsonName]?N[t.jsonName]+=1+o:N[t.jsonName]=1+o,v.indexOf(t.jsonName)!==-1||g[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(N[t.componentChunkName]?N[t.componentChunkName]+=1+o:N[t.componentChunkName]=1+o,v.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(T),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:N}},getPages:function(){return{pathArray:x,pathCount:y}},getPage:function(n){return d(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var c=r;c.unregister()}window.location.reload()}})),C=!1;if(w[e])return A(e,'Previously detected load failure for "'+e+'"'),o();var t=d(e);if(!t)return A(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),a.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];a.default.emit("onPreLoadPageResources",{path:e});var r=void 0,c=void 0,u=void 0,s=function(){if(r&&c&&(!t.layoutComponentChunkName||u)){m[e]={component:r,json:c,layout:u,page:t};var n={component:r,json:c,layout:u,page:t};o(n),a.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return L(t.componentChunkName,function(n,e){n&&A(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),L(t.jsonName,function(n,e){n&&A(t.path,"Loading the JSON for "+t.path+" failed"),c=e,s()}),void(t.layoutComponentChunkName&&L(t.layout,function(n,e){n&&A(t.path,"Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:F.getResourcesForPathname};e.default=F}).call(e,o(54))},538:function(n,e){n.exports=[{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-agast-detector.json",path:"/docs/AGASTDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-akaze-detector.json",path:"/docs/AKAZEDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-background-subtractor-knn.json",path:"/docs/BackgroundSubtractorKNN"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-background-subtractor-mog-2.json",path:"/docs/BackgroundSubtractorMOG2"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-brisk-detector.json",path:"/docs/BRISKDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-cascade-classifier.json",path:"/docs/CascadeClassifier"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-contour.json",path:"/docs/Contour"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-cv.json",path:"/docs/cv"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-descriptor-match.json",path:"/docs/DescriptorMatch"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-detection-roi.json",path:"/docs/DetectionROI"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-eigen-face-recognizer.json",path:"/docs/EigenFaceRecognizer"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-fast-detector.json",path:"/docs/FASTDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-fisher-face-recognizer.json",path:"/docs/FisherFaceRecognizer"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-gftt-detector.json",path:"/docs/GFTTDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-hog-descriptor.json",path:"/docs/HOGDescriptor"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-kaze-detector.json",path:"/docs/KAZEDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-key-point.json",path:"/docs/KeyPoint"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-lbph-face-recognizer.json",path:"/docs/LBPHFaceRecognizer"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-mat.json",path:"/docs/Mat"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-moments.json",path:"/docs/Moments"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-mser-detector.json",path:"/docs/MSERDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-multi-tracker.json",path:"/docs/MultiTracker"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-net.json",path:"/docs/Net"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-ocrhmm-classifier.json",path:"/docs/OCRHMMClassifier"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-ocrhmm-decoder.json",path:"/docs/OCRHMMDecoder"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-orb-detector.json",path:"/docs/ORBDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-param-grid.json",path:"/docs/ParamGrid"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-point.json",path:"/docs/Point"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-rect.json",path:"/docs/Rect"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-rotated-rect.json",path:"/docs/RotatedRect"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-sift-detector.json",path:"/docs/SIFTDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-simple-blob-detector.json",path:"/docs/SimpleBlobDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-simple-blob-detector-params.json",path:"/docs/SimpleBlobDetectorParams"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-size.json",path:"/docs/Size"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-superpixel-lsc.json",path:"/docs/SuperpixelLSC"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-superpixel-seeds.json",path:"/docs/SuperpixelSEEDS"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-superpixel-slic.json",path:"/docs/SuperpixelSLIC"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-surf-detector.json",path:"/docs/SURFDetector"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-svm.json",path:"/docs/SVM"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-term-criteria.json",path:"/docs/TermCriteria"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-boosting.json",path:"/docs/TrackerBoosting"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-boosting-params.json",path:"/docs/TrackerBoostingParams"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-goturn.json",path:"/docs/TrackerGOTURN"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-kcf.json",path:"/docs/TrackerKCF"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-kcf-params.json",path:"/docs/TrackerKCFParams"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-median-flow.json",path:"/docs/TrackerMedianFlow"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-mil.json",path:"/docs/TrackerMIL"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-mil-params.json",path:"/docs/TrackerMILParams"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-tracker-tld.json",path:"/docs/TrackerTLD"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-train-data.json",path:"/docs/TrainData"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-vec.json",path:"/docs/Vec"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-video-capture.json",path:"/docs/VideoCapture"},{componentChunkName:"component---src-templates-docs-page-tsx",layout:null,jsonName:"docs-video-writer.json",path:"/docs/VideoWriter"},{componentChunkName:"component---src-pages-404-tsx",layout:null,jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-tsx",layout:null,jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-tsx",layout:null,jsonName:"404-html.json",path:"/404.html"}]},272:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],c=function(){var n=e();n&&(r.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&c()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},c=o(107),u=o(1),s=t(u),a=o(69),l=t(a),i=o(104),d=o(477),p=o(402),f=t(p),m=o(142),g=o(271),h=t(g),j=o(75),x=t(j),y=o(538),b=t(y),v=o(539),N=t(v),k=o(269),R=t(k),C=o(268),P=t(C),w=o(169),_=t(w);o(305),window.___history=h.default,window.___emitter=x.default,_.default.addPagesArray(b.default),_.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=_.default,window.matchPath=i.matchPath;var E=N.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),T=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};T(window.location.pathname),(0,c.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&a!==!1||(window.___history=n,a=!0,n.listen(function(n,e){T(n.pathname)||setTimeout(function(){(0,c.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,c.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,c.apiRunner)("registerServiceWorker").length>0&&o(273);var t=function(n){function e(n){n.page.path===_.default.getPage(t).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,h.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var c=window.location;if(c.pathname!==o.pathname||c.search!==o.search||c.hash!==o.hash){var u=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);_.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,c.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var a=!1,p=(0,c.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(i.Router,{history:h.default},e)},j=(0,i.withRouter)(R.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(j,{layout:!0,children:function(e){return(0,u.createElement)(i.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,u.createElement)(R.default,r({page:!0},t)):(0,u.createElement)(R.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,c.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,f.default)(function(){return l.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,c.apiRunner)("onInitialClientRender");
})})})})},539:function(n,e){n.exports=[{fromPath:"/opencv4nodejs/opencv4nodejs",isPermanent:!0,redirectInBrowser:!0,toPath:"/opencv4nodejs/opencv4nodejs/docs"},{fromPath:"/opencv4nodejs/opencv4nodejs/docs",isPermanent:!0,redirectInBrowser:!0,toPath:"/opencv4nodejs/opencv4nodejs/docs/Mat"}]},273:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(75),c=t(r),u="/";u="/opencv4nodejs/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),c.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},170:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},402:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",c=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return c||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),c=1;n=e.shift();)n()}),function(n){c?setTimeout(n,0):e.push(n)}})},4:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,c=o.s;o.e=function(t,u){var s=!1,a=!0,l=function(n){u&&(u(o,n),u=null)};return!c&&e&&e[t]?void l(!0):(r(t,function(){s||(s=!0,a?setTimeout(function(){l()}):l())}),void(s||(a=!1,n(function(){s||(s=!0,c?c[t]=void 0:(e||(e={}),e[t]=!0),l(!0))}))))}}t()},52:function(n,e,o){!function(e,o){n.exports=o()}(this,function(){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,t=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);return function a(l,i,d){if("string"!=typeof i){if(s){var p=u(i);p&&p!==s&&a(l,p,d)}var f=t(i);r&&(f=f.concat(r(i)));for(var m=0;m<f.length;++m){var g=f[m];if(!(n[g]||e[g]||d&&d[g])){var h=c(i,g);try{o(l,g,h)}catch(n){}}}return l}return l}})},1561:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},54:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(i===setTimeout)return setTimeout(n,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(n,0);try{return i(n,0)}catch(e){try{return i.call(null,n,0)}catch(e){return i.call(this,n,0)}}}function c(n){if(d===clearTimeout)return clearTimeout(n);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(n);try{return d(n)}catch(e){try{return d.call(null,n)}catch(e){return d.call(this,n)}}}function u(){g&&f&&(g=!1,f.length?m=f.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(f=m,m=[];++h<e;)f&&f[h].run();h=-1,e=m.length}f=null,g=!1,c(n)}}function a(n,e){this.fun=n,this.array=e}function l(){}var i,d,p=n.exports={};!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(n){i=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(n){d=t}}();var f,m=[],g=!1,h=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new a(n,e)),1!==m.length||g||r(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},1670:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},415:function(n,e,o){o(4),n.exports=function(n){return o.e(0xa25129398ba8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(289)})})}},416:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc956abe28b23,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(290)})})}},417:function(n,e,o){o(4),n.exports=function(n){return o.e(18775305762365,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(291)})})}}});
//# sourceMappingURL=app-b190526d10d7eae89f35.js.map