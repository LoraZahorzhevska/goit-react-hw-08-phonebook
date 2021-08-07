(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return d}));var r=n(2),c=Object(r.b)("phonebooks/fetchContactRequest"),u=Object(r.b)("phonebooks/fetchContactSuccess"),o=Object(r.b)("phonebooks/fetchContactError"),a=Object(r.b)("phonebooks/addContactRequest"),s=Object(r.b)("phonebooks/addContactSuccess"),i=Object(r.b)("phonebooks/addContactError"),b=Object(r.b)("phonebooks/deleteContactRequest"),j=Object(r.b)("phonebooks/deleteContactSuccess"),l=Object(r.b)("phonebooks/deleteContactError"),d=Object(r.b)("phonebooks/changeFilter")},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return S}));var r,c,u,o,a=n(2),s={registerRequest:Object(a.b)("auth/registerRequest"),registerSuccess:Object(a.b)("auth/registerSuccess"),registerError:Object(a.b)("auth/registerError"),loginRequest:Object(a.b)("auth/loginRequest"),loginSuccess:Object(a.b)("auth/loginSuccess"),loginError:Object(a.b)("auth/loginError"),logoutRequest:Object(a.b)("auth/logoutRequest"),logoutSuccess:Object(a.b)("auth/logoutSuccess"),logoutError:Object(a.b)("auth/logoutError"),getCurrentUserRequest:Object(a.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(a.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(a.b)("auth/getCurrentUserError")},i=n(3),b=n(6),j={name:null,email:null},l=Object(a.c)(j,(r={},Object(i.a)(r,s.registerSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.loginSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.logoutSuccess,(function(){return j})),Object(i.a)(r,s.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),d=Object(a.c)(null,(c={},Object(i.a)(c,s.registerSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.loginSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.logoutSuccess,(function(){return null})),c)),O=Object(a.c)(null,(u={},Object(i.a)(u,s.registerError,(function(t,e){return e.payload})),Object(i.a)(u,s.loginError,(function(t,e){return e.payload})),Object(i.a)(u,s.logoutError,(function(t,e){return e.payload})),Object(i.a)(u,s.getCurrentUserError,(function(t,e){return e.payload})),u)),f=Object(a.c)(!1,(o={},Object(i.a)(o,s.registerSuccess,(function(){return!0})),Object(i.a)(o,s.loginSuccess,(function(){return!0})),Object(i.a)(o,s.getCurrentUserSuccess,(function(){return!0})),Object(i.a)(o,s.registerError,(function(){return!1})),Object(i.a)(o,s.loginError,(function(){return!1})),Object(i.a)(o,s.getCurrentUserError,(function(){return!1})),Object(i.a)(o,s.logoutSuccess,(function(){return!1})),o)),h=Object(b.b)({user:l,isAuthenticated:f,token:d,error:O}),g=n(17),p=n.n(g),x=n(22),v=n(19),k=n.n(v);k.a.defaults.baseURL="https://connections-api.herokuapp.com";var m=function(t){k.a.defaults.headers.common.Authorization="Bearer ".concat(t)},y=function(){k.a.defaults.headers.common.Authorization=""},C={getCurrentUser:function(){return function(){var t=Object(x.a)(p.a.mark((function t(e,n){var r,c,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return m(c),e(s.getCurrentUserRequest()),t.prev=5,t.next=8,k.a.get("/users/current");case 8:u=t.sent,e(s.getCurrentUserSuccess(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(s.getCurrentUserError(t.t0.massage));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.loginRequest()),e.prev=1,e.next=4,k.a.post("/users/login",t);case 4:r=e.sent,m(r.data.token),n(s.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},register:function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.registerRequest()),e.prev=1,e.next=4,k.a.post("/users/signup",t);case 4:r=e.sent,m(r.data.token),n(s.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(x.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.logoutRequest()),t.prev=1,t.next=4,k.a.post("/users/logout");case 4:y(),e(s.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(s.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},S={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}}},83:function(t,e,n){"use strict";n.r(e);var r,c,u=n(0),o=n.n(u),a=n(23),s=n.n(a),i=n(31),b=n(32),j=n(34),l=n(33),d=n(9),O=n(5),f=n(15),h=n(8),g=n(1),p=Object(d.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f.b,{to:"/",exact:!0,children:" \u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(g.jsx)(f.b,{to:"/contacts",children:" \u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})})),x=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(f.b,{to:"/register",exact:!0,children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsx)(f.b,{to:"/login",children:" \u041b\u043e\u0433\u0438\u043d"})]})},v={onLogout:h.a.logout},k=Object(d.b)((function(t){return{name:h.c.getUserName(t)}}),v)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:e,alt:"",width:"32"}),Object(g.jsxs)("span",{children:["Welcome, ",n]}),Object(g.jsx)("button",{type:"button",onClick:r,children:"\u0412\u044b\u0439\u0442\u0438"})]})})),m={header:{display:"flex",justifyContent:"space-between",alingItems:"center",borderBotton:"1px, solid #2A363B"}},y=Object(d.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(g.jsxs)("header",{style:m.header,children:[Object(g.jsx)(p,{}),e?Object(g.jsx)(k,{}):Object(g.jsx)(x,{})]})})),C=n(16),S=n(25),E=["component","isAuthenticated","redirectTo"],A=Object(d.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(S.a)(t,E);return Object(g.jsx)(O.b,Object(C.a)(Object(C.a)({},c),{},{render:function(t){return n?Object(g.jsx)(e,Object(C.a)({},t)):Object(g.jsx)(O.a,{to:r})}}))})),U=["component","isAuthenticated","redirectTo"],w=Object(d.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(S.a)(t,U);return Object(g.jsx)(O.b,Object(C.a)(Object(C.a)({},c),{},{render:function(t){return n&&c.restricted?Object(g.jsx)(O.a,{to:r}):Object(g.jsx)(e,Object(C.a)({},t))}}))})),R=Object(u.lazy)((function(){return n.e(4).then(n.bind(null,87))})),q=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,88))})),T=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,89))})),z=Object(u.lazy)((function(){return n.e(3).then(n.bind(null,90))})),I=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsx)(u.Suspense,{fallback:Object(g.jsx)("p",{children:"Loading page..."}),children:Object(g.jsxs)(O.d,{children:[Object(g.jsx)(w,{exact:!0,path:"/",component:R}),Object(g.jsx)(w,{path:"/register",restricted:!0,redirectTo:"/contacts",component:q}),Object(g.jsx)(w,{path:"/login",restricted:!0,redirectTo:"/contacts",component:T}),Object(g.jsx)(A,{path:"/contacts",component:z,redirectTo:"/login"})]})})]})}}]),n}(u.Component),B={onGetCurrentUser:h.a.getCurrentUser},L=Object(d.b)(null,B)(I),G=(n(80),n(26)),J=n(2),M=n(45),N=n.n(M),D=n(18),F=n(3),W=n(6),H=n(10),K=Object(J.c)([],(r={},Object(F.a)(r,H.j,(function(t,e){return e.payload})),Object(F.a)(r,H.c,(function(t,e){return[e.payload].concat(Object(G.a)(t))})),Object(F.a)(r,H.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),P=Object(J.c)(!1,(c={},Object(F.a)(c,H.i,(function(){return!0})),Object(F.a)(c,H.j,(function(){return!1})),Object(F.a)(c,H.h,(function(){return!1})),Object(F.a)(c,H.b,(function(){return!0})),Object(F.a)(c,H.c,(function(){return!1})),Object(F.a)(c,H.a,(function(){return!1})),Object(F.a)(c,H.f,(function(){return!0})),Object(F.a)(c,H.g,(function(){return!1})),Object(F.a)(c,H.e,(function(){return!1})),c)),Q=Object(J.c)("",Object(F.a)({},H.d,(function(t,e){return e.payload}))),V=Object(W.b)({items:K,filter:Q,loading:P}),X=n(46),Y=n.n(X),Z=[].concat(Object(G.a)(Object(J.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[N.a]),$={key:"auth",storage:Y.a,whitelist:["token"]},_=Object(J.a)({reducer:{auth:Object(D.g)($,h.b),contacts:V},middleware:Z,devTools:!1}),tt={store:_,persistor:Object(D.h)(_)},et=n(47);s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(d.a,{store:tt.store,children:Object(g.jsx)(et.a,{loading:null,persistor:tt.persistor,children:Object(g.jsx)(f.a,{children:Object(g.jsx)(L,{})})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.12c4630d.chunk.js.map