(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(8),a=s.n(c),r=(s(13),s(7)),o=s(2),l=s(3),u=s(5),d=s(4),m=(s.p,s.p+"static/media/arrow.8fff2916.svg"),h=(s(14),s(15),s(0)),j=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("span",{children:"uMark.it "}),Object(h.jsx)("span",{children:"\u2014 uAdds"})]}),Object(h.jsxs)("div",{className:"data-range-wrapper",children:[Object(h.jsx)("span",{className:"data-range",children:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u0430\u0442 "}),Object(h.jsxs)("span",{className:"data",children:["2.03.2021 \u2014 3.03.2021",Object(h.jsx)("svg",{className:"data__img",width:"13",height:"7",viewBox:"0 0 13 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M6.5 7L12.9952 0.25H0.00480938L6.5 7Z",fill:"white"})})]})]})]})}}]),s}(i.Component),b=(s(17),function(){function e(t){Object(o.a)(this,e),this.menuTriggerSelector=t.menuTriggerSelector,this.menuSelector=t.menuSelector,this.type=t.type||"appear",this.transitionTime=t.transitionTime||".25s",this.transitionType=t.transitionType||".ease",this.menuDisplay=t.menuDisplay||"block",this.slideBegin=t.slideBegin||"translate(-100%, 0px)",this.slideEnd=t.slideEnd||"translate(0px, 0px)",this.menuTrigger=document.querySelector("".concat(this.menuTriggerSelector)),this.menuFirstTrigger=document.querySelector(".menu-toggler"),this.menu=document.querySelector("".concat(this.menuSelector)),this.isChanging=!1,this.state="hide",this.init()}return Object(l.a)(e,[{key:"init",value:function(){var e=this;this.menuTrigger.addEventListener("click",this.toggle.bind(this)),"appear"==this.type&&(this.menu.style.height="0",this.menu.style.opacity=0,this.menu.style.display="none",this.menu.addEventListener("transitionend",(function(t){t.target==e.menu&&(e.isChanging=!1,"hide"==e.state&&(e.menu.style.display="none"))}))),"slide"==this.type&&(document.body.style.overflowX="hidden",this.setVendorStyleProperty(this.menu,"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin),this.setVendorStyleProperty(this.menuTrigger.querySelector(".menu-toggler__img"),"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)))}},{key:"setVendorStyleProperty",value:function(e,t,s){e.style["webkit"+t]=s,e.style["moz"+t]=s,e.style["ms"+t]=s,e.style["o"+t]=s,e.style[t]=s}},{key:"toggle",value:function(){var e=this;if("appear"==this.type&&!this.isChanging){if("1"==this.menu.style.opacity)return this.setVendorStyleProperty(this.menu,"transition","opacity ".concat(this.transitionTime," ").concat(this.transitionType)),this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuTrigger.classList.remove("close"),this.state="hide",this.menu.style.height="0",this.menu.style.opacity="0",void(this.isChanging=!0);if("0"==this.menu.style.opacity)return this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuTrigger.classList.add("close"),this.state="show",this.menu.style.display=this.menuDisplay,void setTimeout((function(){e.setVendorStyleProperty(e.menu,"transition","opacity ".concat(e.transitionTime," ").concat(e.transitionType)),e.menu.style.height="initial",e.menu.style.opacity="1",e.isChanging=!0}),1)}"slide"!=this.type||this.isChanging||(this.menu.style.transform==this.slideBegin?(this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuFirstTrigger.classList.add("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideEnd)):(this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuFirstTrigger.classList.remove("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin)))}}]),e}());document.addEventListener("DOMContentLoaded",(function(){var e=function(){new b({menuTriggerSelector:".menu-toggler",menuSelector:".menu-wrapper",transitionTime:".5s",transitionType:"linear",menuDisplay:"grid",type:"slide",slideBegin:"translate(-200%, 0px)",slideEnd:"translate(0px, 0px)"});document.querySelectorAll(".menu__item").forEach((function(e,t){var s=e.getAttribute("data-id");try{new b({menuTriggerSelector:".".concat(s),menuSelector:".menu-wrapper",transitionTime:".5s",transitionType:"linear",menuDisplay:"grid",type:"slide",slideBegin:"translate(-200%, 0px)",slideEnd:"translate(0px, 0px)"})}catch(i){}}))};window.innerWidth<=450&&e(),window.addEventListener("resize",(function(){window.innerWidth<=450&&e()}))}));var _=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"menu-wrapper",children:Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("span",{"data-id":"item_dealings",className:"menu__item item_dealings",children:"\u0421\u0434\u0435\u043b\u043a\u0438"}),Object(h.jsx)("span",{"data-id":"item_sources",className:"menu__item item_sources",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"}),Object(h.jsx)("span",{"data-id":"item_companies",className:"menu__item item_companies",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(h.jsx)("span",{"data-id":"item_groups",className:"menu__item item_groups",children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),Object(h.jsx)("span",{"data-id":"item_keywords",className:"menu__item item_keywords",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(h.jsx)("span",{"data-id":"item_ads",className:"menu__item item_ads",children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"})]})})}}]),s}(i.Component),p=(s(18),s.p+"static/media/download.50308752.svg"),g=s.p+"static/media/rect.74b4077e.svg",v=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.headerTitle;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h4",{className:"title header__title",children:e}),Object(h.jsxs)("div",{className:"header__btn-wrapper",children:[Object(h.jsxs)("button",{className:"btn btn_download",children:[Object(h.jsx)("div",{className:"btn-columns__img-wrapper",children:Object(h.jsx)("img",{className:"btn__img",src:p})}),Object(h.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})]}),Object(h.jsxs)("button",{className:"btn btn_columns",children:[Object(h.jsxs)("div",{className:"btn-columns__img-wrapper",children:[Object(h.jsx)("img",{className:"btn__img",src:g}),Object(h.jsx)("img",{className:"btn__img",src:g}),Object(h.jsx)("img",{className:"btn__img",src:g})]}),Object(h.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u0442\u043e\u043b\u0431\u0446\u044b"})]})]})]})}}]),s}(i.Component),O=(s(19),s.p+"static/media/arrowDown.1e6b48d4.svg"),w=s.p+"static/media/lines-horiz.3e300706.svg",x=s.p+"static/media/lines-vert.bf9e2219.svg",y=s.p+"static/media/lines-x.db2bc477.svg",f=s.p+"static/media/magnifier.9e985bde.svg",C=s.p+"static/media/gear.b21a0ffe.svg",N=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"dealings-header",children:[Object(h.jsx)("div",{className:"dealings-header__item funnel-name ",children:Object(h.jsxs)("span",{className:"funnel-name__title text_no-br",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0440\u043e\u043d\u043a\u0438",Object(h.jsx)("img",{className:"funnel-name__img",src:O})]})}),Object(h.jsxs)("div",{className:"dealings-header__item btn-wrapper filter",children:[Object(h.jsx)("button",{className:"btn btn_colums",children:Object(h.jsx)("img",{src:w})}),Object(h.jsx)("button",{className:"btn btn_lines",children:Object(h.jsx)("img",{src:x})}),Object(h.jsx)("button",{className:"btn btn_hz",children:Object(h.jsx)("img",{src:y})})]}),Object(h.jsx)("div",{className:"sep sep_1"}),Object(h.jsxs)("div",{className:"dealings-header__item search-wrapper",children:[Object(h.jsx)("img",{className:"search-wrapper__img",src:f}),Object(h.jsx)("input",{className:"search-wrapper__input color_light-grey",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438 \u0444\u0438\u043b\u044c\u0442\u0440"})]}),Object(h.jsxs)("div",{className:"dealings-header__item dealings",children:[Object(h.jsx)("span",{className:"dealings__count color_light-grey text_no-br",children:"23 \u0441\u0434\u0435\u043b\u043a\u0438:\u2002"}),Object(h.jsx)("span",{className:"dealings__price text_no-br",children:" 19290 \u0440."})]}),Object(h.jsx)("div",{className:"sep sep_2"}),Object(h.jsx)("div",{className:"dealings-header__item btn-wrapper new-deal-wrapper",children:Object(h.jsx)("button",{className:"dealings-header__item btn btn_new-deal",children:"+ \u041d\u043e\u0432\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430"})}),Object(h.jsx)("div",{className:"dealings-header__item settings-wrapper",children:Object(h.jsx)("button",{className:"dealings-header__item btn btn_settings",children:Object(h.jsx)("img",{src:C})})})]})}}]),s}(i.Component),T=(s(20),s.p+"static/media/avatar.cea1ff2e.svg"),k=s.p+"static/media/telegram_logo.a85e748b.svg",S=s.p+"static/media/instagram_logo.c4d9399b.svg",D=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={logo:""},i}return Object(l.a)(s,[{key:"componentDidMount",value:function(){switch(this.props.socialNetwork){case"Telegram":this.setState({logo:k});break;case"Instagram":this.setState({logo:S})}}},{key:"render",value:function(){var e=this.props,t=e.socialNetwork,s=e.currentData,i=e.nickname,n=e.comment,c=e.linkHref;return Object(h.jsxs)("div",{className:"post dealings__item",children:[Object(h.jsx)("img",{className:"post__user-avatar",src:T}),Object(h.jsxs)("span",{className:"post__social-network-title color_light-grey",children:[t," channel"]}),Object(h.jsx)("span",{className:"post__current-data",children:s}),Object(h.jsxs)("span",{className:"post__user-name color_blue",children:[t," ",i]}),Object(h.jsxs)("div",{className:"post__comment",children:[Object(h.jsx)("img",{className:"post__user-avatar post__user-avatar_minify",src:T}),Object(h.jsx)("span",{className:"post__comment-text",children:n})]}),Object(h.jsx)("a",{className:"post__share post__share_telegram",href:c,children:Object(h.jsx)("img",{className:"post__img",src:this.state.logo})})]})}}]),s}(i.Component),P=(s(21),function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"dealings",children:[Object(h.jsxs)("div",{className:"dealings__article dealings__article_unparsed",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u041d\u0415\u0420\u0410\u0417\u041e\u0411\u0420\u0410\u041d\u041d\u041e\u0415"}),Object(h.jsx)("span",{className:"dealings__desc",children:"13 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(h.jsx)(D,{socialNetwork:"Telegram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 13:20",nickname:"user1",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(h.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 23:05",nickname:"user2",comment:"\u043a 10 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_wip",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"}),Object(h.jsx)("span",{className:"dealings__desc",children:"10 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(h.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:25",nickname:"user3",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_assembly",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0421\u0411\u041e\u0420\u041a\u0410 \u0417\u0410\u041a\u0410\u0417\u0410"}),Object(h.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(h.jsx)(D,{socialNetwork:"Telegram",currentData:"\u041d\u0435\u0434\u0435\u043b\u044e \u043d\u0430\u0437\u0430\u0434",nickname:"user4",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_realized",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0423\u0421\u041f\u0415\u0428\u041d\u041e \u0420\u0415\u0410\u041b\u0418\u0417\u041e\u0412\u0410\u041d\u041e"}),Object(h.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(h.jsx)(D,{socialNetwork:"Telegram",currentData:"\u0412\u0447\u0435\u0440\u0430 8:30",nickname:"user5",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(h.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 13:18",nickname:"user6",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"}),Object(h.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:42",nickname:"user7",comment:"\u043a 20 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]})]})}}]),s}(i.Component)),A=(s(22),s(23),s.p+"static/media/arrow.75ac89e1.svg"),L=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={tableTitle:i.props.tableTitle},i}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props,t=e.circleColor,s=e.serviceTitle,i=e.serviceTitleDesc,n=e.clicksCount,c=e.showsCount,a=e.conversionPriceCount,r=e.priceCount,o=e.conversionCount,l=e.salesCount;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"table__item table__cell service-title border-top_grey",children:Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(h.jsx)("circle",{cx:"9.5",cy:"9.57959",r:"9.5",fill:t})}),Object(h.jsxs)("span",{className:"table__p color_blue",children:[s," "]}),Object(h.jsxs)("span",{className:"table__desc color_grey",children:[i," "]})]})}),Object(h.jsx)("div",{className:"table__item table__cell clicks-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:n})}),Object(h.jsx)("div",{className:"table__item table__cell shows-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:c})}),Object(h.jsx)("div",{className:"table__item table__cell conversion-price-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:a})}),Object(h.jsx)("div",{className:"table__item table__cell price-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:r})}),Object(h.jsx)("div",{className:"table__item table__cell conversion-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:o})}),Object(h.jsx)("div",{className:"table__item table__cell sales-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:l})})]})}}]),s}(i.Component),I=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props,t=e.tableTitle,s=e.row_1,i=e.row_2,n=e.row_3;return Object(h.jsxs)("section",{className:"table",children:[Object(h.jsx)("div",{"data-id":"sources",className:"table__article table__item sources border-top_grey",children:Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(h.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(h.jsxs)("h4",{className:"table__title",children:[t,Object(h.jsx)("img",{className:"table__img img_arrow",src:A})]})]})}),Object(h.jsx)("div",{"data-id":"clicks",className:"table__article table__item clicks border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(h.jsx)("div",{"data-id":"shows",className:"table__article table__item shows border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(h.jsx)("div",{"data-id":"conversion-price",className:"table__article table__item conversion-price border-top_grey",children:Object(h.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(h.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(h.jsx)("div",{"data-id":"price",className:"table__article table__item price border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(h.jsx)("div",{"data-id":"conversion",className:"table__article table__item conversion border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(h.jsx)("div",{"data-id":"sales",className:"table__article table__item sales border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),s,i,n]})}}]),s}(i.Component),B=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={rows:"",rowsCount:2,activeMenuItem:"item_sources",headerTitle:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"},i.checkTableTitle(),i}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(e,t){var s=this;t.activeMenuItem,this.state.activeMenuItem,this.state.headerTitle!=t.headerTitle&&this.checkTableTitle(),this.state.rowsCount!=t.rowsCount&&(console.log("compDidUpdate"),this.countRows(),setTimeout((function(){s.pasteTableArticlesTwins()}),1))}},{key:"componentDidMount",value:function(){var e=this;this.checkTableTitle(),this.countRows(),setTimeout((function(){e.pasteTableArticlesTwins()}),1),console.log("App componentDidMount"),this.setState({menuItems:document.querySelectorAll(".menu__item")},(function(){e.toggleMenuItem(e.state.activeMenuItem);var t,s=Object(r.a)(e.state.menuItems);try{var i=function(){var s=t.value;s.addEventListener("click",(function(){e.toggleMenuItem(s.getAttribute("data-id"))}))};for(s.s();!(t=s.n()).done;)i()}catch(n){s.e(n)}finally{s.f()}}))}},{key:"countRows",value:function(){var e=this,t=0;for(var s in this.state.rows)0!=this.state.rows[s]&&t++,this.setState({rowsCount:t},(function(){console.log(e.state.rowsCount)}))}},{key:"checkTableTitle",value:function(){var e=this;switch(this.state.headerTitle){case"\u0421\u0434\u0435\u043b\u043a\u0438":this.setState({rows:{row_1:!1,row_2:!1,row_3:!1}},(function(){e.countRows()}));break;case"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438":this.setState({rows:{row_1:Object(h.jsx)(L,{serviceTitle:"Yandex",serviceTitleDesc:"Yandex letai-266319-enc0",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(L,{serviceTitle:"GoogleAds",serviceTitleDesc:"146-362-7099",clicksCount:"900",showsCount:"18000",conversionPriceCount:"931 \u20bd",priceCount:"186200",conversionCount:"200",salesCount:"40",circleColor:"#f00"}),row_3:!1}},(function(){e.countRows()}));break;case"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":this.setState({rows:{row_1:Object(h.jsx)(L,{serviceTitle:"\u0410\u0440\u0435\u043d\u0434\u0430-\u041f\u043e\u0438\u0441\u043a-\u0421\u043e\u0447\u0438",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:!1,row_3:!1}},(function(){e.countRows()}));break;case"\u0413\u0440\u0443\u043f\u043f\u044b":this.setState({rows:{row_1:Object(h.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 2",serviceTitleDesc:"23",clicksCount:"14",showsCount:"55",conversionPriceCount:"3",priceCount:"d",conversionCount:"e",salesCount:"s",circleColor:"red"}),row_3:Object(h.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 3",serviceTitleDesc:"5",clicksCount:"5",showsCount:"123",conversionPriceCount:"40",priceCount:"5",conversionCount:"2",salesCount:"1",circleColor:"blue"})}},(function(){e.countRows()}));break;case"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430":this.setState({rows:{row_1:Object(h.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 2",serviceTitleDesc:"555",clicksCount:"777",showsCount:"2505",conversionPriceCount:"2550 \u20bd",priceCount:"17520",conversionCount:"100",salesCount:"10",circleColor:"red"}),row_3:Object(h.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 3",serviceTitleDesc:"123",clicksCount:"456",showsCount:"789",conversionPriceCount:"22",priceCount:"11",conversionCount:"0",salesCount:"55",circleColor:"blue"})}},(function(){e.countRows()}));break;case"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":this.setState({rows:{row_1:Object(h.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 2",serviceTitleDesc:"51a",clicksCount:"25411",showsCount:"8541",conversionPriceCount:"6541 \u20bd",priceCount:"2020",conversionCount:"05",salesCount:"10",circleColor:"red"}),row_3:Object(h.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 3",serviceTitleDesc:"1358",clicksCount:"4561",showsCount:"854",conversionPriceCount:"8141 \u20bd",priceCount:"8541",conversionCount:"",salesCount:"145",circleColor:"blue"})}},(function(){e.countRows()}))}}},{key:"pasteTableArticlesTwins",value:function(){for(var e,t=this,s=document.querySelector(".table"),i=document.querySelectorAll(".table__article:not(.twin)"),n=["'sources auto'","'clicks auto'","'shows auto'","'conversion-price auto'","'price auto'","'conversion auto'","'sales auto'"],c=n,a=function(i){var a=n.map((function(e,t){if(!e.includes("twin"))return e.replace(/\s+/,"_twin_".concat(i-1," "))}));try{a.forEach((function(e,t,s){s[t].includes("0")||c.push("".concat(e))}))}catch(o){}1===t.state.rowsCount&&(c=["'sources auto'","'clicks auto'","'shows auto'","'conversion-price auto'","'price auto'","'conversion auto'","'sales auto'"]);var r=c.join().replace(/[.,%]/g,"");if(console.log("newGridAreas string:"),console.log(r),window.innerWidth<=450)try{s.style.gridTemplateAreas="".concat(r)}catch(l){}if(window.innerWidth>=450)try{s.style.gridTemplateAreas="".concat(n.join())}catch(u){}e=i},r=1;r<=this.state.rowsCount;r++)a(r);document.querySelectorAll(".twin").forEach((function(e,t){e.remove()}));var o,l=0;c.forEach((function(e,t){e.toString().includes("twin")&&l++})),o=l/i.length;for(var u=0,d=0;d<o;d++)u++,console.log("tech: ".concat(u)),i.forEach((function(t,i){if(1!=e){var n=t.getAttribute("data-id"),c=t.cloneNode(!0);c.setAttribute("data-id","".concat(n,"_twin_").concat(e-u)),c.classList.add("twin","".concat(n,"_twin_").concat(e-u)),s.prepend(c)}}));document.querySelectorAll(".twin").forEach((function(e,t){e.getAttribute("data-id");console.log("clone:"),console.log(e)}))}},{key:"toggleMenuItem",value:function(e){var t,s=Object(r.a)(this.state.menuItems);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.classList.remove("item_active"),i.getAttribute("data-id")==e&&(this.setState({activeMenuItem:e,headerTitle:i.textContent}),i.classList.add("item_active"))}}catch(n){s.e(n)}finally{s.f()}}},{key:"render",value:function(){var e,t,s,i;return"\u0421\u0434\u0435\u043b\u043a\u0438"==this.state.headerTitle?(e="",t=Object(h.jsx)(N,{}),s=Object(h.jsx)(P,{}),i=""):(e=Object(h.jsx)(v,{headerTitle:this.state.headerTitle}),t="",s="",i=Object(h.jsx)(I,{tableTitle:this.state.headerTitle,activeMenuItem:this.state.activeMenuItem,row_1:this.state.rows.row_1,row_2:this.state.rows.row_2,row_3:this.state.rows.row_3})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsxs)("main",{className:"content-wrapper",children:[Object(h.jsx)("div",{className:"menu-toggler",children:Object(h.jsx)("img",{className:"menu-toggler__img",src:m})}),Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"options-wrapper",children:[e,t,s,i]})]})]})}}]),s}(i.Component),E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),E()}],[[24,1,2]]]);
//# sourceMappingURL=main.c025ae72.chunk.js.map