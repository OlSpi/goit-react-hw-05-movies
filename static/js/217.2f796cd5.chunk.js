"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{217:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(786),u="MovieCards_movieCard__dVpF5",o="MovieCards_img__+U2i1",l="MovieCards_title__PbxdW",d="MovieCards_text__G2m-O",h="MovieCards_titleSecond__6JzFx",p="MovieCards_genres__VDqBQ",v="MovieCards_genre__P0OuG",m=t(184),f=function(e){var r=e.title,t=e.overview,n=e.img,a=e.userScore,s=e.genres,i=10*Math.round(a);return(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w200".concat(n),alt:r}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:l,children:r}),(0,m.jsxs)("p",{className:d,children:[(0,m.jsx)("span",{children:"User Score:"}),i,"%"]}),(0,m.jsx)("h3",{className:h,children:"Owerview"}),(0,m.jsx)("p",{className:d,children:t}),(0,m.jsx)("h3",{className:h,children:"Genres"}),(0,m.jsx)("div",{className:p,children:s.map((function(e){return(0,m.jsx)("p",{className:v,children:e.name},e.id)}))})]})]})},x=t(218),g=t(87).Outlet,j=function(e){var r=e.movieId;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(x.Fg,{to:"/movies/".concat(r,"/cast"),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(x.Fg,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})})]}),(0,m.jsx)(g,{})]})},_=t(791),Z=t(689),w=t(323),b=function(){var e,r,t=(0,_.useState)(null),s=(0,a.Z)(t,2),u=s[0],o=s[1],l=(0,_.useState)(null),d=(0,a.Z)(l,2),h=d[0],p=d[1],v=(0,_.useState)(!1),g=(0,a.Z)(v,2),b=g[0],I=g[1],N=(0,Z.UO)().movieId,k=(0,Z.TH)();return(0,_.useEffect)((function(){I(!0);var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.fh)(N);case 3:r=e.sent,o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0.message);case 10:return e.prev=10,I(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(x.W2,{children:[b&&(0,m.jsx)(c.Z,{}),h&&(0,m.jsx)("div",{children:h}),u&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.ZP,{to:null!==(e=null===(r=k.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:"Go Back"}),(0,m.jsx)(f,{title:u.title,overview:u.overview,img:u.poster_path,id:u.id,userScore:u.vote_average,genres:u.genres}),(0,m.jsx)(j,{movieId:u.id})]})]})})}},323:function(e,r,t){t.d(r,{Aj:function(){return u},XT:function(){return o},au:function(){return d},fh:function(){return l},q5:function(){return h}});var n=t(861),a=t(757),s=t.n(a),i=t(243),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGZmMTg3MzZjZTY2MDU0OTFjOGRiOGU5NTM4ZmNiZiIsInN1YiI6IjY0YWFhYTI0YjY4NmI5MDBhZjllMzAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFHoZbG_T5mmqJXFYzBCzmy8I8U9mbqm_qZxq2TKF-I"}},u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",c);case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),c);case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?language=en-US"),c);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?language=en-US"),c);case 2:return t=e.sent,n=t.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?language=en-US&page=1"),c);case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=217.2f796cd5.chunk.js.map