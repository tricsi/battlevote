(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa66865a"],{1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),i=r("d2c8"),o="includes";n(n.P+n.F*r("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),i=r("8378"),o=r("2d00"),a=r("37c8"),c=r("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),i=r("d8e8"),o=r("4bf8"),a=r("79e5"),c=[].sort,s=[1,2,3];n(n.P+n.F*(a(function(){s.sort(void 0)})||!a(function(){s.sort(null)})||!r("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},6762:function(t,e,r){"use strict";var n=r("5ca1"),i=r("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"67ab":function(t,e,r){var n=r("ca5a")("meta"),i=r("d3f4"),o=r("69a8"),a=r("86cc").f,c=0,s=Object.isExtensible||function(){return!0},u=!r("79e5")(function(){return s(Object.preventExtensions({}))}),l=function(t){a(t,n,{value:{i:"O"+ ++c,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[n].i},d=function(t,e){if(!o(t,n)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[n].w},h=function(t){return u&&v.NEED&&s(t)&&!o(t,n)&&l(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},"7a00":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("div",{staticClass:"d-flex justify-content-center"},[r("b-spinner",{attrs:{label:"Loading entries..."}})],1)]):r("div",[r("b-form",{staticClass:"d-flex",attrs:{inline:""}},[r("b-form-input",{staticClass:"flex-grow-1 mr-md-2 mb-3",attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("b-form-select",{staticClass:"mb-3",attrs:{options:t.categories},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[r("option",{attrs:{slot:"first"},domProps:{value:null},slot:"first"},[t._v("All Category")])])],1),r("b-table",{attrs:{items:t.items,fields:t.fields,"filter-function":t.filterTable,filter:"true",striped:"",responsive:""},scopedSlots:t._u([{key:"rank",fn:function(e){return[t._v(t._s(e.item.rank||""))]}},{key:"title",fn:function(e){return[r("router-link",{attrs:{to:{name:"entry",params:{id:e.item.id}}}},[t._v(t._s(e.item.title))])]}}])})],1)},i=[],o=(r("55dd"),r("ac4d"),r("8a81"),r("ac6a"),r("6762"),r("2fdb"),r("386d"),r("a481"),r("96cf"),r("3b8d")),a=r("bc3a"),c=r.n(a),s=r("11de"),u=r("4797"),l=r("8361"),f=r("db49"),d=r.n(f),h={components:{BForm:s["a"],BFormInput:u["a"],BFormSelect:l["a"]},data:function(){return{loading:!0,items:null,length:9999,search:"",category:null,categories:d.a.categories,fields:{rank:{label:"#",tdClass:"text-right",thClass:"text-right",thStyle:"width: 1%"},title:{label:"Game"},votes:{key:"votes.length",label:"Votes",tdClass:"text-center",thStyle:"width: 1%"},score:{label:"Score",tdClass:"text-center",thStyle:"width: 1%"},tie:{label:"TBS",headerTitle:"Tie Break Score",tdClass:"text-center",thStyle:"width: 1%"}}}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/entry");case 3:e=t.sent,r=e.data,this.computeTies(r),this.sortByScore(r),this.computeRank(r),this.items=r,this.loading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.$router.replace("/");case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{filterTable:function(t){var e=!0;return this.search&&(e=t.title.toLowerCase().includes(this.search.toLowerCase())),e&&this.category&&(e=t.category.includes(this.category)),e},computeTies:function(t){var e=!0,r=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a.tie=0;var c=!0,s=!1,u=void 0;try{for(var l,f=function(){var t=l.value;a.id!==t.id&&a.votes.filter(function(e){return t.votes.includes(e)}).length&&(a.tie=t.score)},d=t[Symbol.iterator]();!(c=(l=d.next()).done);c=!0)f()}catch(h){s=!0,u=h}finally{try{c||null==d.return||d.return()}finally{if(s)throw u}}}}catch(h){r=!0,n=h}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}},sortByScore:function(t){t.sort(function(t,e){var r=e.score-t.score;return r||(r=e.tie-t.tie),r})},computeRank:function(t){var e=1;t[0].rank=t[0].votes.length?e:0;for(var r=1;r<t.length;r++){var n=t[r-1],i=t[r];(n.score>i.score||n.tie>i.tie)&&(e=r+1),i.rank=i.votes.length?e:0}}}},v=h,p=r("2877"),b=Object(p["a"])(v,n,i,!1,null,null,null);e["default"]=b.exports},"7bbc":function(t,e,r){var n=r("6821"),i=r("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"8a81":function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),o=r("9e1e"),a=r("5ca1"),c=r("2aba"),s=r("67ab").KEY,u=r("79e5"),l=r("5537"),f=r("7f20"),d=r("ca5a"),h=r("2b4c"),v=r("37c8"),p=r("3a72"),b=r("d4c0"),y=r("1169"),m=r("cb7c"),g=r("d3f4"),S=r("4bf8"),w=r("6821"),x=r("6a99"),_=r("4630"),k=r("2aeb"),O=r("7bbc"),E=r("11e9"),P=r("2621"),j=r("86cc"),C=r("0d58"),F=E.f,N=j.f,T=O.f,A=n.Symbol,B=n.JSON,J=B&&B.stringify,I="prototype",R=h("_hidden"),D=h("toPrimitive"),K={}.propertyIsEnumerable,L=l("symbol-registry"),W=l("symbols"),z=l("op-symbols"),G=Object[I],M="function"==typeof A&&!!P.f,Y=n.QObject,$=!Y||!Y[I]||!Y[I].findChild,q=o&&u(function(){return 7!=k(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=F(G,e);n&&delete G[e],N(t,e,r),n&&t!==G&&N(G,e,n)}:N,Q=function(t){var e=W[t]=k(A[I]);return e._k=t,e},U=M&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},V=function(t,e,r){return t===G&&V(z,e,r),m(t),e=x(e,!0),m(r),i(W,e)?(r.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),r=k(r,{enumerable:_(0,!1)})):(i(t,R)||N(t,R,_(1,{})),t[R][e]=!0),q(t,e,r)):N(t,e,r)},H=function(t,e){m(t);var r,n=b(e=w(e)),i=0,o=n.length;while(o>i)V(t,r=n[i++],e[r]);return t},X=function(t,e){return void 0===e?k(t):H(k(t),e)},Z=function(t){var e=K.call(this,t=x(t,!0));return!(this===G&&i(W,t)&&!i(z,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,R)&&this[R][t])||e)},tt=function(t,e){if(t=w(t),e=x(e,!0),t!==G||!i(W,e)||i(z,e)){var r=F(t,e);return!r||!i(W,e)||i(t,R)&&t[R][e]||(r.enumerable=!0),r}},et=function(t){var e,r=T(w(t)),n=[],o=0;while(r.length>o)i(W,e=r[o++])||e==R||e==s||n.push(e);return n},rt=function(t){var e,r=t===G,n=T(r?z:w(t)),o=[],a=0;while(n.length>a)!i(W,e=n[a++])||r&&!i(G,e)||o.push(W[e]);return o};M||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===G&&e.call(z,r),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),q(this,t,_(1,r))};return o&&$&&q(G,t,{configurable:!0,set:e}),Q(t)},c(A[I],"toString",function(){return this._k}),E.f=tt,j.f=V,r("9093").f=O.f=et,r("52a7").f=Z,P.f=rt,o&&!r("2d00")&&c(G,"propertyIsEnumerable",Z,!0),v.f=function(t){return Q(h(t))}),a(a.G+a.W+a.F*!M,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)h(nt[it++]);for(var ot=C(h.store),at=0;ot.length>at;)p(ot[at++]);a(a.S+a.F*!M,"Symbol",{for:function(t){return i(L,t+="")?L[t]:L[t]=A(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){$=!0},useSimple:function(){$=!1}}),a(a.S+a.F*!M,"Object",{create:X,defineProperty:V,defineProperties:H,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ct=u(function(){P.f(1)});a(a.S+a.F*ct,"Object",{getOwnPropertySymbols:function(t){return P.f(S(t))}}),B&&a(a.S+a.F*(!M||u(function(){var t=A();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(g(e)||void 0!==t)&&!U(t))return y(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!U(e))return e}),n[1]=e,J.apply(B,n)}}),A[I][D]||r("32e9")(A[I],D,A[I].valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},aae3:function(t,e,r){var n=r("d3f4"),i=r("2d95"),o=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},ac4d:function(t,e,r){r("3a72")("asyncIterator")},d2c8:function(t,e,r){var n=r("aae3"),i=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},d4c0:function(t,e,r){var n=r("0d58"),i=r("2621"),o=r("52a7");t.exports=function(t){var e=n(t),r=i.f;if(r){var a,c=r(t),s=o.f,u=0;while(c.length>u)s.call(t,a=c[u++])&&e.push(a)}return e}},db49:function(t,e){t.exports={criteria:["innovation","fun","theme","gameplay","graphics","technical"],categories:["desktop","mobile","server","webxr"],messages:{error_invalid_code:"Authentication error!",error_invalid_user:"Access denied!",error_no_active_vote:"No active vote!",error_no_vote_left:"No vote left!",error_missing_token:"Unauthorized request!",error_invalid_token:"Expired token!",error_system_error:"System error!"}}}}]);
//# sourceMappingURL=chunk-aa66865a.e43e5ab4.js.map