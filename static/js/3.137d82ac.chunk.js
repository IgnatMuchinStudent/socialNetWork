(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{298:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1Rn3C",mainPhoto:"ProfileInfo_mainPhoto__3GW-J",contact:"ProfileInfo_contact__2HmuS",inform:"ProfileInfo_inform__xml4B",inputfile:"ProfileInfo_inputfile__3KN1p"}},299:function(e,t,a){e.exports={hide:"ProfileStatus_hide__3HSmU",open:"ProfileStatus_open__1O68u",status:"ProfileStatus_status__1h8sr"}},300:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3Mvfw",posts:"MyPosts_posts__NcoHa",button:"MyPosts_button__JKJZn"}},301:function(e,t,a){e.exports={item:"Post_item__InyVb"}},302:function(e,t,a){"use strict";a.r(t);var n=a(24),o=a(25),r=a(27),s=a(26),l=a(0),i=a.n(l),u=a(94),c=a(298),m=a.n(c),f=a(44),p=a(299),d=a.n(p),h=function(e){var t=Object(l.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],r=Object(l.useState)(e.status),s=Object(u.a)(r,2),c=s[0],m=s[1];Object(l.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",{className:d.a.status},"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){o(!0)},className:d.a.hide},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},className:d.a.open,autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(c)},value:c})))},b=a(103),E=a.n(b),v=a(21),P=a(125),_=a(47),O=a.n(_),g=Object(P.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=(e.profile,e.error);return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),a&&i.a.createElement("div",{className:O.a.formSummaryError},a),i.a.createElement("div",null,i.a.createElement("b",null," name"),": ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)))}),S=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:m.a.inform},a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null," name :")," ",i.a.createElement("h3",null," ",t.fullName," ")),i.a.createElement("div",null,i.a.createElement("b",null,"About me :")," ",i.a.createElement("h3",null,t.aboutMe?t.aboutMe:"Censored"," ")))},w=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,s=e.saveProfile,c=Object(l.useState)(!1),p=Object(u.a)(c,2),d=p[0],b=p[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:m.a.mainPhoto}),o&&i.a.createElement("input",{className:m.a.inputfile,type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),o&&i.a.createElement("label",{for:"file"},"Choose a file"),d?i.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){s(e).then(function(){b(!1)})}}):i.a.createElement(S,{goToEditMode:function(){b(!0)},profile:t,isOwner:o}),i.a.createElement(h,{status:a,updateStatus:n})))},j=a(93),k=a(35),N=a(300),y=a.n(N),I=a(301),C=a.n(I),M=function(e){return i.a.createElement("div",{className:C.a.item},i.a.createElement("img",{src:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",e.likesCount))},x=a(88),B=a(63),A=Object(B.a)(10),T=Object(P.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(x.a,{name:"newPostText",component:v.b,placeholder:"Post message",validate:[B.b,A]})),i.a.createElement("div",null,i.a.createElement("button",{className:y.a.button},"Add post")))}),U=i.a.memo(function(e){var t=Object(k.a)(e.posts).reverse().map(function(e){return i.a.createElement(M,{key:e.id,message:e.message,likesCount:e.likesCount})});return i.a.createElement("div",{className:y.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:y.a.posts},i.a.createElement("div",null,"  ",t," ")))}),J=a(14),D=Object(J.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}},function(e){return{addPost:function(t){e(Object(j.a)(t))}}})(U),F=function(e){return i.a.createElement("div",null,i.a.createElement(w,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(D,null))},H=a(296),z=a(8),K=function(e){return e.profilePage.profile},V=function(e){return e.profilePage.status},G=function(e){return e.auth.isAuth},R=function(e){return e.auth.userId},W=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(F,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(z.d)(Object(J.b)(function(e){return{profile:K(e),status:V(e),authorizedUserId:R(e),isAuth:G(e)}},{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),H.a)(W)}}]);
//# sourceMappingURL=3.137d82ac.chunk.js.map