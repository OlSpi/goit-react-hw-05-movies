"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{298:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(786),s=n(184),o=function(e){var t=e.reviews;return(0,s.jsx)(s.Fragment,{children:t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author:",(0,s.jsx)("span",{children:e.author})]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})},p=n(791),h=n(689),f=n(323),l=function(){var e=(0,p.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,p.useState)(null),v=(0,a.Z)(l,2),d=v[0],m=v[1],g=(0,p.useState)(!1),x=(0,a.Z)(g,2),Z=x[0],j=x[1],w=(0,h.UO)().movieId;return(0,p.useEffect)((function(){j(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.q5)(w);case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0.message);case 10:return e.prev=10,j(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),(0,s.jsxs)(s.Fragment,{children:[Z&&(0,s.jsx)(i.Z,{}),d&&(0,s.jsx)("div",{children:d}),Z||0!==n.length?(0,s.jsx)("ul",{children:(0,s.jsx)(o,{reviews:n})}):(0,s.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},323:function(e,t,n){n.d(t,{Aj:function(){return s},XT:function(){return o},au:function(){return h},fh:function(){return p},q5:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGZmMTg3MzZjZTY2MDU0OTFjOGRiOGU5NTM4ZmNiZiIsInN1YiI6IjY0YWFhYTI0YjY4NmI5MDBhZjllMzAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFHoZbG_T5mmqJXFYzBCzmy8I8U9mbqm_qZxq2TKF-I"}},s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",i);case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),i);case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i);case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i);case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=298.ee5fb097.chunk.js.map