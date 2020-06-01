(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{29:function(e,t,a){"use strict";var n=a(34),r=a.n(n),c="https://api.themoviedb.org/3/",o="c568eb497a154e87132efaa568a83ee9";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"trending/movie/day",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.get("".concat(c).concat(e,"?api_key=").concat(o).concat(""!==t?"&query="+t:""))}},61:function(e,t,a){e.exports={actorCard:"Cast_actorCard__I19US",actorList:"Cast_actorList__JEg4y"}},62:function(e,t,a){e.exports={border:"MovieDetailsPage_border__22UNx",wrapperImg:"MovieDetailsPage_wrapperImg__2e8Pm",wrapperInfo:"MovieDetailsPage_wrapperInfo__2V53G",button:"MovieDetailsPage_button__Ph7yw"}},64:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(30),r=a(31),c=a(33),o=a(32),l=a(0),i=a.n(l),s=a(8),u=a(1),p=a(29),m=a(61),h=a.n(m),v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={actorsList:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.a)("movie/".concat(this.props.match.params.movieId,"/credits")).then((function(t){return e.setState({actorsList:t.data.cast})}))}},{key:"render",value:function(){var e=this.state.actorsList.map((function(e){var t=null!==e.profile_path?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(e.profile_path):1===e.gender?"https://cdn1.savepice.ru/uploads/2020/5/31/c7130eda9f42f0501e700fe1372e6914-full.jpg":"https://cdn1.savepice.ru/uploads/2020/5/31/31a796d4910f3d692cab34f99484fd2a-full.jpg";return i.a.createElement("li",{key:e.id,className:h.a.actorCard},i.a.createElement("img",{src:t,alt:"Actor",width:"138",height:"175"}),i.a.createElement("span",null,e.name),i.a.createElement("span",null,"Character: ",e.character))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:h.a.actorList},e))}}]),a}(l.Component),d=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.a)("movie/".concat(this.props.match.params.movieId,"/reviews")).then((function(t){var a=t.data;return e.setState({reviews:a.results})}))}},{key:"render",value:function(){var e=this.state.reviews,t=e.map((function(e){var t=e.id,a=e.author,n=e.content;return i.a.createElement("li",{key:t},i.a.createElement("h3",null,a),i.a.createElement("p",null,n))}));return i.a.createElement("ul",null,e.length?t:"We don't have any reviews for this movie")}}]),a}(l.Component),f=a(62),b=a.n(f),E=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={movieInfo:null},e.hideCast=function(){return e.props.history.push(e.props.match.url,e.state)},e.handleClick=function(){var t=e.props.history;t.length>2?t.goBack():t.push("/",e.state)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.a)("movie/".concat(this.props.match.params.movieId)).then((function(t){return e.setState({movieInfo:t.data})}))}},{key:"render",value:function(){var e=this.state.movieInfo,t=this.props,a=t.match,n=a.url,r=a.path,c=t.location,o=e?e.release_date.split("-")[0]:"",l=c.pathname.split("/"),p=null!==e&&"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(e.poster_path),m=(e?e.genres:[]).reduce((function(e,t){return"".concat(e," ").concat(t.name," ")}),"");return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:this.handleClick},"Go Back"),!!e&&i.a.createElement("div",{className:b.a.border},i.a.createElement("div",{className:b.a.wrapperImg},p&&i.a.createElement("img",{src:p,alt:"poster"})),i.a.createElement("div",{className:b.a.wrapperInfo},i.a.createElement("h2",null,"".concat(e.title," (").concat(o,")")),i.a.createElement("span",null,"User score: ",Math.round(e.popularity)+"%"),i.a.createElement("h3",null,"Overview"),i.a.createElement("p",null,e.overview),i.a.createElement("h4",null,"Genres"),i.a.createElement("p",null,m))),i.a.createElement("div",{className:b.a.border},i.a.createElement("h3",null,"Aditional information"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.c,{exact:!0,to:"".concat(n,"/cast")},"Cast"),"cast"===l[l.length-1]&&i.a.createElement("button",{className:b.a.button,onClick:this.hideCast},"Close")),i.a.createElement("li",null,i.a.createElement(s.c,{to:"".concat(n,"/reviews")},"Reviews"),"reviews"===l[l.length-1]&&i.a.createElement("button",{className:b.a.button,onClick:this.hideCast},"Close")))),i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"".concat(r,"/cast"),component:v}),i.a.createElement(u.b,{path:"".concat(r,"/reviews"),component:d})))}}]),a}(l.Component)}}]);
//# sourceMappingURL=4.fbfd996d.chunk.js.map