this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={35:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([885,2,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},109:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},121:function(e,t){},122:function(e,t){},123:function(e,t){},124:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},13:function(e,t){!function(){e.exports=this.wp.apiFetch}()},14:function(e,t){!function(){e.exports=this.wp.blocks}()},15:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(5),c=Object(n.createElement)("img",{src:o.Q+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},17:function(e,t){!function(){e.exports=this.wp.url}()},24:function(e,t){!function(){e.exports=this.wp.blockEditor}()},27:function(e,t){!function(){e.exports=this.wp.compose}()},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},33:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},34:function(e,t){!function(){e.exports=this.moment}()},4:function(e,t){!function(){e.exports=this.wp.components}()},41:function(e,t,r){"use strict";r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return g})),r.d(t,"i",(function(){return f})),r.d(t,"f",(function(){return O})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return m})),r.d(t,"g",(function(){return j})),r.d(t,"a",(function(){return w}));var n=r(8),o=r.n(n),c=r(17),i=r(13),u=r.n(i),a=r(6),s=r(5);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,l=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.t?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},a),u))];return s.t&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return b(b({},e),{},{parent:0})}))})).catch((function(e){throw e}))},d=function(e){return u()({path:"/wc/store/products/".concat(e)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(e){return u()({path:"wc/store/products/attributes/".concat(e,"/terms")})},O=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.w?100:0,orderby:s.w?"count":"name",order:s.w?"desc":"asc",search:n})];return s.w&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},h=function(e){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},e))})},m=function(e){return u()({path:"wc/store/products/categories/".concat(e)})},j=function(e){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},w=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(15),o=r.n(n),c=r(38),i=r.n(c),u=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},46:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},49:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(46));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},5:function(e,t,r){"use strict";r.d(t,"k",(function(){return o})),r.d(t,"G",(function(){return c})),r.d(t,"M",(function(){return i})),r.d(t,"x",(function(){return u})),r.d(t,"z",(function(){return a})),r.d(t,"l",(function(){return s})),r.d(t,"y",(function(){return l})),r.d(t,"B",(function(){return b})),r.d(t,"n",(function(){return p})),r.d(t,"A",(function(){return d})),r.d(t,"m",(function(){return g})),r.d(t,"C",(function(){return f})),r.d(t,"t",(function(){return O})),r.d(t,"w",(function(){return h})),r.d(t,"q",(function(){return m})),r.d(t,"r",(function(){return j})),r.d(t,"s",(function(){return w})),r.d(t,"j",(function(){return y})),r.d(t,"I",(function(){return v})),r.d(t,"N",(function(){return _})),r.d(t,"p",(function(){return k})),r.d(t,"o",(function(){return S})),r.d(t,"F",(function(){return P})),r.d(t,"c",(function(){return E})),r.d(t,"u",(function(){return C})),r.d(t,"v",(function(){return x})),r.d(t,"Q",(function(){return D})),r.d(t,"R",(function(){return B})),r.d(t,"H",(function(){return T})),r.d(t,"a",(function(){return R})),r.d(t,"K",(function(){return M})),r.d(t,"b",(function(){return I})),r.d(t,"J",(function(){return N})),r.d(t,"h",(function(){return L})),r.d(t,"L",(function(){return Q})),r.d(t,"g",(function(){return V})),r.d(t,"i",(function(){return F})),r.d(t,"E",(function(){return q})),r.d(t,"D",(function(){return U})),r.d(t,"P",(function(){return G})),r.d(t,"O",(function(){return J})),r.d(t,"d",(function(){return W})),r.d(t,"e",(function(){return K})),r.d(t,"f",(function(){return Y})),r.d(t,"S",(function(){return X})),r.d(t,"T",(function(){return Z}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),u=Object(n.getSetting)("max_columns",6),a=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),l=Object(n.getSetting)("max_rows",6),b=Object(n.getSetting)("min_rows",1),p=Object(n.getSetting)("default_rows",3),d=Object(n.getSetting)("min_height",500),g=Object(n.getSetting)("default_height",500),f=Object(n.getSetting)("placeholderImgSrc",""),O=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),h=Object(n.getSetting)("limitTags"),m=Object(n.getSetting)("hasProducts",!0),j=Object(n.getSetting)("hasTags",!0),w=Object(n.getSetting)("homeUrl",""),y=Object(n.getSetting)("couponsEnabled",!0),v=Object(n.getSetting)("shippingEnabled",!0),_=Object(n.getSetting)("taxesEnabled",!0),k=Object(n.getSetting)("displayItemizedTaxes",!1),S=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),P=Object(n.getSetting)("productCount",0),E=Object(n.getSetting)("attributes",[]),C=Object(n.getSetting)("isShippingCalculatorEnabled",!0),x=Object(n.getSetting)("isShippingCostHidden",!1),A=Object(n.getSetting)("woocommerceBlocksPhase",1),D=Object(n.getSetting)("wcBlocksAssetUrl",""),B=Object(n.getSetting)("wcBlocksBuildUrl",""),T=Object(n.getSetting)("shippingCountries",{}),R=Object(n.getSetting)("allowedCountries",{}),M=Object(n.getSetting)("shippingStates",{}),I=Object(n.getSetting)("allowedStates",{}),N=Object(n.getSetting)("shippingMethodsExist",!1),L=Object(n.getSetting)("checkoutShowLoginReminder",!0),z={id:0,title:"",permalink:""},H=Object(n.getSetting)("storePages",{shop:z,cart:z,checkout:z,privacy:z,terms:z}),Q=H.shop.permalink,V=H.checkout.id,F=H.checkout.permalink,q=H.privacy.permalink,U=H.privacy.title,G=H.terms.permalink,J=H.terms.title,W=H.cart.id,K=H.cart.permalink,Y=Object(n.getSetting)("checkoutAllowsGuest",!1),$=(Object(n.getSetting)("checkoutAllowsSignup",!1),r(14)),X=function(e,t){if(A>2)return Object($.registerBlockType)(e,t)},Z=function(e,t){if(A>1)return Object($.registerBlockType)(e,t)}},53:function(e,t){!function(){e.exports=this.wp.keycodes}()},59:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(18),i=r.n(c),u=r(9);r(2);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(u.isValidElement)(t)&&Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},6:function(e,t){!function(){e.exports=this.lodash}()},68:function(e,t){!function(){e.exports=this.wp.editor}()},72:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:n.l},rows:{type:"number",default:n.n},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},74:function(e,t){!function(){e.exports=this.wp.dom}()},75:function(e,t){!function(){e.exports=this.wp.hooks}()},76:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(s(s({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(s(s({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(s(s({},r),{},{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(s(s({},r),{},{button:!n}))}}))}},77:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(6),i=(r(2),r(4)),u=r(5);t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,s=e.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,u.z,u.x);a({columns:Object(c.isNaN)(t)?"":t})},min:u.z,max:u.x}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(c.clamp)(e,u.B,u.y);a({rows:Object(c.isNaN)(t)?"":t})},min:u.B,max:u.y}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},789:function(e,t,r){},79:function(e,t){!function(){e.exports=this.ReactDOM}()},790:function(e,t,r){"use strict";var n=r(0),o=r(57),c=Object(n.createElement)(o.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),Object(n.createElement)("circle",{cx:"6.5",cy:"6.5",r:"1.5"}),Object(n.createElement)("path",{d:"M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"}));t.a=c},80:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(0),i=r(1),u=r(6),a=(r(2),r(50)),s=r(4),l=r(15),b=r.n(l),p=r(38),d=r.n(p),g=r(21),f=r.n(g),O=r(25),h=r.n(O),m=r(19),j=r.n(m),w=r(22),y=r.n(w),v=r(23),_=r.n(v),k=r(12),S=r.n(k),P=r(27),E=r(41),C=r(43);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S()(e);if(t){var o=S()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _()(this,r)}}var A=Object(P.createHigherOrderComponent)((function(e){return function(t){y()(n,t);var r=x(n);function n(){var e;return f()(this,n),(e=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(j()(e)),e}return h()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(E.c)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=d()(b.a.mark((function t(r){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(r);case 2:n=t.sent,e.setState({categories:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),n}(c.Component)}),"withCategories"),D=r(49),B=(r(191),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,b=e.onOperatorChange,p=e.operator,d=e.selected,g=e.isSingle,f=e.showReviewCount,O={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(D.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return Object(u.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",t.review_count,"woo-gutenberg-products-block"),l,t.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),l,t.count),p=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",t.count,"woo-gutenberg-products-block"),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:p,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:g}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:p,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});B.defaultProps={operator:"any",isSingle:!1};t.a=A(B)},82:function(e,t){!function(){e.exports=this.wp.viewport}()},84:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),o=r(7),c=r.n(o),i=r(11),u=r.n(i),a=r(5);function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,p=r.columns||a.l,d=r.rows||a.n,g=new Map;switch(g.set("limit",d*p),g.set("columns",p),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(e){return e.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),t){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";g.set("ids",b.join(",")),g.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,O="[products",h=s(g);try{for(h.s();!(f=h.n()).done;){var m=u()(f.value,2);O+=" "+m[0]+'="'+m[1]+'"'}}catch(e){h.e(e)}finally{h.f()}return O+="]"}(t,e))}}},885:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r.n(n),c=r(0),i=r(1),u=r(14),a=r(6),s=r(59),l=r(790),b=r(21),p=r.n(b),d=r(25),g=r.n(d),f=r(22),O=r.n(f),h=r(23),m=r.n(h),j=r(12),w=r.n(j),y=r(4),v=r(24),_=r(68),k=(r(2),r(76)),S=r(77),P=r(80),E=r(124),C=r(167);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m()(this,r)}}var A=function(){return Object(c.createElement)(y.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:l.a}),label:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),className:"wc-block-product-on-sale"},Object(i.__)("This block shows on-sale products. There are currently no discounted products in your store.","woo-gutenberg-products-block"))},D=function(e){O()(r,e);var t=x(r);function r(){return p()(this,r),t.apply(this,arguments)}return g()(r,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,o=t.catOperator,u=t.columns,a=t.contentVisibility,s=t.rows,l=t.orderby,b=t.alignButtons;return Object(c.createElement)(v.InspectorControls,{key:"inspector"},Object(c.createElement)(y.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(S.a,{columns:u,rows:s,alignButtons:b,setAttributes:r})),Object(c.createElement)(y.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(k.a,{settings:a,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(y.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{setAttributes:r,value:l})),Object(c.createElement)(y.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(P.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:o,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?C.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(y.Disabled,null,Object(c.createElement)(_.ServerSideRender,{block:r,attributes:t,EmptyResponsePlaceholder:A})))}}]),r}(c.Component),B=(r(789),r(84)),T=r(72);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(u.registerBlockType)("woocommerce/product-on-sale",{title:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:l.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products currently on sale.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:M(M({},T.a),{},{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(T.b,"woocommerce/product-on-sale"),transform:function(e){return Object(u.createBlock)("woocommerce/product-on-sale",e)}}]},deprecated:[{attributes:M(M({},T.a),{},{orderby:{type:"string",default:"date"}}),save:Object(B.a)("woocommerce/product-on-sale")}],edit:function(e){return Object(c.createElement)(D,e)},save:function(){return null}})},9:function(e,t){!function(){e.exports=this.React}()},95:function(e,t){!function(){e.exports=this.wp.date}()}});