(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{61:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(34),i=s.n(c),r=s(9),o=s(3),l=s(1);var j=function(e){return console.log(e),Object(l.jsx)("span",{children:"About this Pages : Hello"})},m=s(19),d=s.n(m),b=s(35),u=s(13),h=s(14),v=s(16),p=s(15),O=s(36),x=s.n(O);s(61);var g=function(e){var t=e.id,s=e.year,n=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(l.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:a,poster:c,genres:i}},children:Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("img",{src:c,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("h2",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,200),"..."]})]})]})})},y=(s(66),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(d.a.mark((function t(){var s,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsxs)("div",{className:"loading_container",children:[Object(l.jsx)("div",{className:"loading"}),Object(l.jsx)("div",{className:"loader_text",children:"Loading..."})]})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),f=function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),s}(a.a.Component),_=(s(67),s(23)),N=s(22);var k=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsxs)("h1",{className:"title",children:[Object(l.jsx)("span",{children:Object(l.jsx)(N.a,{icon:_.a,size:"1x"})}),"My Movie App"]})}),Object(l.jsxs)("ul",{className:"navbar__menu",children:[Object(l.jsx)("li",{className:"homebtn",children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"aboutbtn",children:Object(l.jsx)(r.b,{to:"/about",children:"About"})})]})]})};var M=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.ac0d4a4a.chunk.js.map