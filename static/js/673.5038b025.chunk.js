"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[673],{673:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(786),i=n(689),o="TrendsList_list__-BgK1",p="TrendsList_listItem__BfCtu",f=n(218),l=n(184),h=function(t){var e=t.trends,n=(0,i.TH)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:o,children:e.map((function(t){return t.title?(0,l.jsx)("li",{className:p,children:(0,l.jsx)(f.Fg,{to:"/movies/".concat(t.id),state:{from:n},children:(0,l.jsx)("p",{children:t.title})})},t.id):null}))})})},d=n(791),v=n(323),m=function(){var t=(0,d.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],i=(0,d.useState)(null),o=(0,a.Z)(i,2),p=o[0],m=o[1],g=(0,d.useState)(!1),x=(0,a.Z)(g,2),Z=x[0],j=x[1];return(0,d.useEffect)((function(){j(!0);var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.Aj)();case 3:e=t.sent,u(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0);case 10:return t.prev=10,j(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)(l.Fragment,{children:[Z&&(0,l.jsx)(s.Z,{}),p&&(0,l.jsx)("div",{children:p}),!Z&&n&&(0,l.jsxs)(f.W2,{children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)(h,{trends:n})]})]})}},323:function(t,e,n){n.d(e,{Aj:function(){return i},XT:function(){return o},au:function(){return f},fh:function(){return p},q5:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGZmMTg3MzZjZTY2MDU0OTFjOGRiOGU5NTM4ZmNiZiIsInN1YiI6IjY0YWFhYTI0YjY4NmI5MDBhZjllMzAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFHoZbG_T5mmqJXFYzBCzmy8I8U9mbqm_qZxq2TKF-I"}},i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",s);case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),s);case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),s);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),s);case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),s);case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=673.5038b025.chunk.js.map