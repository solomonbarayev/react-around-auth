(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.8f7611ae.svg"},22:function(e,t,a){e.exports=a.p+"static/media/hamburger_icon.318d0337.svg"},23:function(e,t,a){e.exports=a.p+"static/media/close_icon.9293aa8f.svg"},30:function(e,t,a){e.exports=a.p+"static/media/successful_icon.e38b395c.svg"},31:function(e,t,a){e.exports=a.p+"static/media/unsuccessful_icon.f10ac534.svg"},35:function(e,t,a){e.exports=a(52)},43:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(20),r=a.n(o),i=(a(43),a(33)),l=a(1),s=a(21),u=a.n(s),m=a(2),p=a(4),d=a(22),f=a.n(d),_=a(23),h=a.n(_);function b(e){var t=e.loggedIn,a=e.email,n=e.toggleMobileMenu,o=e.isMobileMenuOpen,r=e.handleSignout,i=Object(m.h)(),l="/signin"===i.pathname,s="/signup"===i.pathname;return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"header__links header__links_desktop ".concat(l||s?"header__links_signup-login-page":"")},l&&c.a.createElement("li",{className:"header__link-item"},c.a.createElement(p.b,{to:"/signup",className:"header__link"},"Sign up")),s&&c.a.createElement("li",{className:"header__link-item"},c.a.createElement(p.b,{to:"/signin",className:"header__link"},"Log in")),t&&c.a.createElement("li",{className:"header__link-item"},c.a.createElement(p.b,{to:"/signin",className:"header__link",onClick:r},"Log out")),t&&c.a.createElement("li",{className:"header__link-item"},a)),!s&&!l&&c.a.createElement("button",{type:"button",className:"header__menu-button",onClick:n},o?c.a.createElement("img",{src:h.a,alt:"close",className:"header__close-icon"}):c.a.createElement("img",{src:f.a,alt:"menu",className:"header__hamburger-icon"})))}function g(e){return c.a.createElement("div",{className:"header__mobile-menu ".concat(e.isMobileMenuOpen?"header__mobile-menu_opened":"")},c.a.createElement("ul",{className:"header__links header__links_mobile"},c.a.createElement("li",{className:"header__link-item"},e.email),c.a.createElement("li",{className:"header__link-item"},c.a.createElement(p.b,{to:"/signin",className:"header__link",onClick:e.handleSignout},"Log out"))),c.a.createElement("div",{className:"separator separator_type_mobile-menu"}))}var E=function(e){var t=e.loggedIn,a=e.email,o=e.handleSignout,r=c.a.useState(!1),i=Object(l.a)(r,2),s=i[0],m=i[1];return Object(n.useEffect)(function(){t||m(!1)},[t]),c.a.createElement("header",{className:"header section"},c.a.createElement(g,{isMobileMenuOpen:s,email:a,handleSignout:o}),c.a.createElement("div",{className:"header__container"},c.a.createElement("img",{src:u.a,alt:"Around the US Logo",className:"logo"}),c.a.createElement(b,{loggedIn:t,email:a,isMobileMenuOpen:s,toggleMobileMenu:function(){m(!s)},handleSignout:o})),c.a.createElement("div",{className:"separator"}))},v=c.a.createContext(),k=function(e){var t=Object(n.useContext)(v),a=e.card.owner._id===t._id,o=e.card.likes.some(function(e){return e._id===t._id}),r="card__like-button ".concat(o&&"card__like-button_active");return c.a.createElement("li",{className:"card"},a&&c.a.createElement("button",{type:"button","aria-label":"delete card",className:"card__delete-button",onClick:function(){e.onDeleteButtonClick(e.card)}}),c.a.createElement("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),c.a.createElement("div",{className:"card__title-area"},c.a.createElement("h2",{className:"card__title"},e.card.name),c.a.createElement("div",{className:"card__like-container"},c.a.createElement("button",{className:r,type:"button","aria-label":"like card",onClick:function(){e.onLikeCard(e.card)}}),c.a.createElement("span",{className:"card__like-count"},e.card.likes.length))))},N=function(e){var t=e.onCardClick,a=e.onAddPlaceClick,o=e.onEditProfileClick,r=e.onEditAvatarClick,i=e.cards,l=e.onCardLike,s=e.onDeleteButtonClick,u=Object(n.useContext)(v);return c.a.createElement("main",{className:"content section"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{className:"profile__image-container",onClick:r},c.a.createElement("img",{src:u.avatar,alt:"User's Profile",className:"profile__image"})),c.a.createElement("div",{className:"profile__info"},c.a.createElement("div",{className:"profile__person"},c.a.createElement("h1",{className:"profile__name"},u.name),c.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"edit profile",onClick:o})),c.a.createElement("p",{className:"profile__title"},u.about)),c.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"add place",onClick:a})),c.a.createElement("section",{className:"cards"},c.a.createElement("ul",{className:"cards__list"},i.map(function(e){return c.a.createElement(k,{card:e,key:e._id,onCardClick:t,onLikeCard:l,onDeleteButtonClick:s})}))))},O=function(){return c.a.createElement("footer",{className:"footer section"},c.a.createElement("p",{className:"footer__copyrights"},"\xa9 ",(new Date).getFullYear()," Around The U.S."))},C=function(e){var t=e.isOpen,a=e.name,o=e.onClose,r=e.children;return Object(n.useEffect)(function(){if(t)return document.addEventListener("keydown",e),document.addEventListener("click",a),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",a)};function e(e){"Escape"===e.key&&o()}function a(e){e.target.classList.contains("popup_opened")&&o()}},[t,o]),c.a.createElement("div",{className:"popup ".concat(t?"popup_opened":""," popup_type_").concat(a)},c.a.createElement("div",{className:"popup__container popup__container_type_".concat(a)},r,c.a.createElement("button",{className:"popup__close-button ".concat("popup__close-button_type_".concat(a)),type:"button",onClick:o})))},j=function(e){return c.a.createElement(C,{isOpen:e.isOpen,name:e.name,onClose:e.onClose},c.a.createElement("img",{src:e.card.link,alt:"A beautiful scene in ".concat(e.card.name),className:"popup__image"}),c.a.createElement("p",{className:"popup__caption"},e.card.name))},y=a(25),S=a(26),L=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(y.a)(this,e),this._baseUrl=a,this._headers=n}return Object(S.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._checkResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"2aae8d26-8315-4517-953d-28905b81f143","Content-Type":"application/json"}}),w=function(e){return c.a.createElement(C,{isOpen:e.isOpen,name:e.name,onClose:e.onClose},c.a.createElement("h2",{className:"popup__title popup__title_type_".concat(e.name)},e.title),c.a.createElement("form",{action:"submit",className:"form popup__form",name:e.name,onSubmit:e.onSubmit},e.children,c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("button",{className:"form__button form__button_type_".concat(e.name),type:"submit"},e.buttonText))))},T=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateUser,r=e.isLoading,i=Object(n.useContext)(v),s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(""),f=Object(l.a)(d,2),_=f[0],h=f[1];Object(n.useEffect)(function(){p(i.name),h(i.about)},[i,t]);return c.a.createElement(w,{title:"Edit profile",name:"edit-profile",buttonText:"".concat(r?"Saving...":"Save"),isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),o({name:m,about:_})}},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"name-input",type:"text",name:"name",placeholder:"Name",className:"form__input form__input_type_profile-name",minLength:"2",maxLength:"40",value:m||"",onChange:function(e){p(e.target.value)},required:!0}),c.a.createElement("span",{className:"form__input-error name-input-error"})),c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"title-input",type:"text",name:"title",placeholder:"About me",className:"form__input form__input_type_profile-title",minLength:"2",maxLength:"200",value:_||"",onChange:function(e){h(e.target.value)},required:!0}),c.a.createElement("span",{className:"form__input-error title-input-error"}))))},U=function(e){var t=e.isLoading,a=e.isOpen,o=e.onClose,r=e.onUpdateAvatar,i=Object(n.useRef)();return c.a.createElement(w,{title:"Change Profile Picture",name:"avatar",isOpen:a,onClose:o,buttonText:"".concat(t?"Saving...":"Save"),onSubmit:function(e){e.preventDefault(),r(i.current.value)}},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"avatar-input",type:"url",name:"link",placeholder:"Profile Image link",className:"form__input form__input_type_avatar",required:!0,ref:i}),c.a.createElement("span",{className:"form__input-error avatar-input-error"}))))},x=a(9),P=a(11);var A=function(e){var t=e.isLoading,a=e.isOpen,o=e.onClose,r=e.onAddPlaceSubmit,i=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),c=a[0],o=a[1];return{values:c,handleChange:function(e){var t=e.target,a=t.value,n=t.name;o(Object(P.a)({},c,Object(x.a)({},n,a)))},setValues:o}}({}),s=i.values,u=i.handleChange,m=i.setValues;return Object(n.useEffect)(function(){m({})},[a]),c.a.createElement(w,{title:"New place",name:"add-place",isOpen:a,onClose:o,buttonText:"".concat(t?"Creating...":"Create"),onSubmit:function(e){var t=s.name,a=s.link;e.preventDefault(),r({name:t,link:a})}},c.a.createElement("fieldset",{className:"form__fieldset"},c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"place-title-input",type:"text",name:"name",placeholder:"Title",className:"form__input form__input_type_place-name",required:!0,minLength:"1",maxLength:"30",value:s.name||"",onChange:u}),c.a.createElement("span",{className:"form__input-error place-title-input-error"})),c.a.createElement("div",{className:"form__input-container"},c.a.createElement("input",{id:"place-url-input",type:"url",name:"link",placeholder:"Image link",className:"form__input form__input_type_place-url",required:!0,value:s.link||"",onChange:u}),c.a.createElement("span",{className:"form__input-error place-url-input-error"}))))},I=function(e){var t=e.isLoading,a=e.isOpen,n=e.onClose,o=e.onSubmitDelete;return c.a.createElement(w,{title:"Are you sure?",name:"delete-card",buttonText:"".concat(t?"Deleting...":"Yes"),isOpen:a,onClose:n,onSubmit:o})},D=function(e){var t=e.handleLogin,a=Object(n.useState)({email:"",password:""}),o=Object(l.a)(a,2),r=o[0],i=o[1],s=function(e){var t=e.target,a=t.name,n=t.value;i(Object(P.a)({},r,Object(x.a)({},a,n)))};return c.a.createElement("div",{className:"auth-form"},c.a.createElement("h2",{className:"auth-form__title"},"Log in"),c.a.createElement("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault();var a=r.email,n=r.password;t({email:a,password:n})}},c.a.createElement("input",{type:"email",name:"email",className:"auth-form__input",placeholder:"Email",value:r.email,onChange:s}),c.a.createElement("input",{type:"password",name:"password",className:"auth-form__input",placeholder:"Password",value:r.password,onChange:s}),c.a.createElement("div",{className:"auth-form__footer"},c.a.createElement("div",{className:"auth-form__footer-wrapper"},c.a.createElement("button",{type:"submit",className:"auth-form__submit-button"},"Log in"),c.a.createElement("p",{className:"auth-form__footer-text"},"Not a member yet?"," ",c.a.createElement(p.b,{to:"/signup",className:"auth-form__footer-link"},"Sign up here!"))))))},M=function(e){var t=e.handleRegister,a=Object(n.useState)({email:"",password:""}),o=Object(l.a)(a,2),r=o[0],i=o[1],s=function(e){var t=e.target,a=t.name,n=t.value;i(Object(P.a)({},r,Object(x.a)({},a,n)))};return c.a.createElement("div",{className:"auth-form"},c.a.createElement("h2",{className:"auth-form__title"},"Sign up"),c.a.createElement("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault();var a=r.email,n=r.password;t({email:a,password:n})}},c.a.createElement("input",{type:"email",name:"email",className:"auth-form__input",placeholder:"Email",value:r.email,onChange:s}),c.a.createElement("input",{type:"password",name:"password",className:"auth-form__input",placeholder:"Password",value:r.password,onChange:s}),c.a.createElement("div",{className:"auth-form__footer"},c.a.createElement("div",{className:"auth-form__footer-wrapper"},c.a.createElement("button",{type:"submit",className:"auth-form__submit-button"},"Sign up"),c.a.createElement("p",{className:"auth-form__footer-text"},"Already a member?"," ",c.a.createElement(p.b,{to:"/signin",className:"auth-form__footer-link"},"Log in here!"))))))},R=a(34),B=a(32),J=function(){return c.a.createElement("div",{className:"loader"},c.a.createElement(B.a,{height:"80",width:"80",color:"#fff",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}))},q=function(e){var t=e.loggedIn,a=e.children,n=e.isCheckingToken,o=Object(R.a)(e,["loggedIn","children","isCheckingToken"]);return n?c.a.createElement(J,null):t?c.a.createElement(m.b,o,a):c.a.createElement(m.a,{to:"/signin"})},F=a(30),Y=a.n(F),z=a(31),H=a.n(z),V=function(e){var t=e.isOpen,a=e.onClose,o="successful"===e.type;return Object(n.useEffect)(function(){if(t){var e=setTimeout(function(){a()},2500);return function(){return clearTimeout(e)}}},[t]),c.a.createElement(C,{isOpen:t,name:"tooltip",onClose:a},c.a.createElement("img",{src:o?Y.a:H.a,className:"tooltip__image",alt:"".concat(o?"successful":"unsuccessful"," attempt")}),c.a.createElement("h2",{className:"tooltip__text"},o?"Success! You have now been registered.":"Oops, something went wrong! Please try again."))},G="https://register.nomoreparties.co",K=function(e,t){return fetch(e,t).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)})},Q=function(e,t){return K("".concat(G,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})},W=function(e,t){return K("".concat(G,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})},X=function(e){return K("".concat(G,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})};var Z=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),u=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),_=f[0],h=f[1],b=Object(n.useState)(!1),g=Object(l.a)(b,2),k=g[0],C=g[1],y=Object(n.useState)(!1),S=Object(l.a)(y,2),w=S[0],x=S[1],P=Object(n.useState)(!1),R=Object(l.a)(P,2),B=R[0],J=R[1],F=Object(n.useState)(""),Y=Object(l.a)(F,2),z=Y[0],H=Y[1],G=Object(n.useState)({name:"",link:""}),K=Object(l.a)(G,2),Z=K[0],$=K[1],ee=Object(n.useState)([]),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(!0),oe=Object(l.a)(ce,2),re=oe[0],ie=oe[1],le=Object(n.useState)({}),se=Object(l.a)(le,2),ue=se[0],me=se[1],pe=Object(n.useState)(!1),de=Object(l.a)(pe,2),fe=de[0],_e=de[1],he=Object(n.useState)(!1),be=Object(l.a)(he,2),ge=be[0],Ee=be[1],ve=Object(n.useState)({email:"email@mail.com"}),ke=Object(l.a)(ve,2),Ne=ke[0],Oe=ke[1],Ce=Object(m.g)();Object(n.useEffect)(function(){var e=function(e){"Escape"===e.key&&je()},t=function(e){e.target.classList.contains("popup_opened")&&je()};return document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}},[]),Object(n.useEffect)(function(){L.getUserInfo().then(function(e){me(e)}).catch(console.log)},[]),Object(n.useEffect)(function(){L.getInitialCards().then(function(e){ne(e)}).catch(console.log)},[]),Object(n.useEffect)(function(){var e=localStorage.getItem("jwt");e?X(e).then(function(e){e.data._id&&(Ee(!0),Oe({email:e.data.email}),Ce.push("/react-around-auth"))}).catch(function(e){console.log(e),Ce.push("/signin")}).finally(function(){ie(!1)}):ie(!1)},[]);var je=function(){p(!1),h(!1),o(!1),C(!1),x(!1),J(!1)};return c.a.createElement("div",{className:"App"},c.a.createElement(v.Provider,{value:ue},c.a.createElement(E,{loggedIn:ge,email:Ne.email,handleSignout:function(){Ee(!1),localStorage.removeItem("jwt"),Ce.push("/signin")}}),c.a.createElement(m.d,null,c.a.createElement(q,{exact:!0,path:"/react-around-auth",loggedIn:ge,isCheckingToken:re},c.a.createElement(N,{onDeleteButtonClick:function(e){x(!0),$(e)},onEditProfileClick:function(){o(!0)},onAddPlaceClick:function(){p(!0)},onEditAvatarClick:function(){h(!0)},onCardClick:function(e){C(!0),$({name:e.name,link:e.link})},cards:ae,onCardLike:function(e){var t=e.likes.some(function(e){return e._id===ue._id});L.changeLikeCardStatus(e._id,t).then(function(t){ne(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(console.log)}})),c.a.createElement(m.b,{path:"/signup"},c.a.createElement(M,{handleRegister:function(e){var t=e.email,a=e.password;Q(t,a).then(function(e){e.data._id?(H("successful"),Ce.push("/signin")):H("unsuccessful")}).catch(function(e){console.log(e),H("unsuccessful")}).finally(function(){J(!0)})}})),c.a.createElement(m.b,{path:"/signin"},c.a.createElement(D,{handleLogin:function(e){var t=e.email,a=e.password;W(t,a).then(function(e){e.token&&(Ee(!0),Oe({email:t}),localStorage.setItem("jwt",e.token),Ce.push("/react-around-auth"))}).catch(function(e){console.log(e),H("unsuccessful"),J(!0)}).finally(function(){ie(!1)})}})),c.a.createElement(m.b,null,ge?c.a.createElement(m.a,{to:"/react-around-auth"}):c.a.createElement(m.a,{to:"/signin"}))),c.a.createElement(O,null),c.a.createElement(T,{isLoading:fe,isOpen:a,onClose:je,onUpdateUser:function(e){var t=e.name,a=e.about;_e(!0),L.setUserInfo({name:t,about:a}).then(function(e){me(e),je()}).catch(console.log).finally(function(){_e(!1)})}}),c.a.createElement(A,{isLoading:fe,isOpen:u,onClose:je,onAddPlaceSubmit:function(e){_e(!0),L.createCard(e).then(function(e){ne([e].concat(Object(i.a)(ae))),je()}).catch(console.log).finally(function(){_e(!1)})}}),c.a.createElement(U,{isLoading:fe,isOpen:_,onClose:je,onUpdateAvatar:function(e){_e(!0),L.setUserAvatar(e).then(function(e){me(e),je()}).catch(console.log).finally(function(){_e(!1)})}}),c.a.createElement(I,{isLoading:fe,isOpen:w,onClose:je,onSubmitDelete:function(e){e.preventDefault(),_e(!0),L.deleteCard(Z._id).then(function(e){var t=ae.filter(function(e){return e._id!==Z._id});ne(t),je()}).catch(console.log).finally(function(){_e(!1)})}}),c.a.createElement(j,{card:Z,isOpen:k,onClose:je,name:"image-prev"}),c.a.createElement(V,{isOpen:B,onClose:je,type:z,isTooltipOpen:B,name:"tooltip"})))},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p.a,null,c.a.createElement(Z,null)))),$()}},[[35,1,2]]]);
//# sourceMappingURL=main.1c0a90db.chunk.js.map