this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-top-rated"]=function(t){function e(e){for(var n,i,a=e[0],s=e[1],u=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={15:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;return c.push([596,1,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},16:function(t,e){!function(){t.exports=this.wp.compose}()},18:function(t,e,r){"use strict";r.d(e,"g",(function(){return p})),r.d(e,"d",(function(){return b})),r.d(e,"e",(function(){return g})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"f",(function(){return O})),r.d(e,"a",(function(){return m})),r.d(e,"h",(function(){return v}));var n=r(8),o=r.n(n),c=r(21),i=r(20),a=r.n(i),s=r(4),u=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,a=void 0===i?[]:i,s={per_page:u.h?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(u.e.products,d({},s,{},a))];return u.h&&r.length&&l.push(Object(c.addQueryArgs)(u.e.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return a()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return d({},t,{parent:0})}))})).catch((function(t){throw t}))},b=function(t){return a()({path:"".concat(u.e.products,"/").concat(t)})},g=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("".concat(u.e.products,"/tags"),{per_page:u.i?100:-1,orderby:u.i?"count":"name",order:u.i?"desc":"asc",search:n})];return u.i&&r.length&&o.push(Object(c.addQueryArgs)("".concat(u.e.products,"/tags"),{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return a()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},f=function(t){return a()({path:"".concat(u.e.categories,"/").concat(t)})},h=function(){return a()({path:Object(c.addQueryArgs)("".concat(u.e.products,"/categories"),{per_page:-1})})},O=function(t){return a()({path:Object(c.addQueryArgs)("".concat(u.e.products,"/").concat(t,"/variations"),{per_page:-1})})},m=function(){return a()({path:Object(c.addQueryArgs)("".concat(u.e.products,"/attributes"),{per_page:-1})})},v=function(t){return a()({path:Object(c.addQueryArgs)("".concat(u.e.products,"/attributes/").concat(t,"/terms"),{per_page:-1})})}},19:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(7),o=r.n(n),c=function(t){var e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof t.json){r.next=11;break}return r.prev=1,r.next=4,o.a.awrap(t.json());case 4:return e=r.sent,r.abrupt("return",{message:e.message,type:e.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])}},2:function(t,e){!function(){t.exports=this.wp.components}()},20:function(t,e){!function(){t.exports=this.wp.apiFetch}()},21:function(t,e){!function(){t.exports=this.wp.url}()},22:function(t,e){!function(){t.exports=this.moment}()},23:function(t,e){!function(){t.exports=this.React}()},24:function(t,e){!function(){t.exports=this.wp.editor}()},27:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},28:function(t,e){!function(){t.exports=this.wp.blocks}()},29:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(3),r(27));e.a=function(t){var e,r,i,a=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=a).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},30:function(t,e,r){"use strict";var n=r(10),o=r.n(n),c=r(7),i=r.n(c),a=r(8),s=r.n(a),u=r(11),l=r.n(u),d=r(12),p=r.n(d),b=r(13),g=r.n(b),f=r(14),h=r.n(f),O=r(9),m=r.n(O),v=r(15),y=r.n(v),j=r(0),w=r(16),k=(r(3),r(4)),_=r(18),P=r(19);function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(r,!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var x=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={attributes:[],error:null,expandedAttribute:null,loading:!1,termsList:{},termsLoading:!1},t.loadAttributes=t.loadAttributes.bind(m()(t)),t.onExpandAttribute=t.onExpandAttribute.bind(m()(t)),t.debouncedLoadTerms=Object(k.debounce)(t.loadTerms.bind(m()(t)),200),t}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){this.loadAttributes()}},{key:"componentWillUnmount",value:function(){this.debouncedLoadTerms.cancel()}},{key:"componentDidUpdate",value:function(t,e){e.expandedAttribute!==this.state.expandedAttribute&&this.debouncedLoadTerms()}},{key:"loadAttributes",value:function(){var t=this,e=this.props.selected,r=this.state.expandedAttribute;this.setState({loading:!0}),Object(_.a)().then((function(n){n=n.map((function(t){return C({},t,{parent:0})}));var o=r;if(!r&&e.length>0){var c=n.find((function(t){return t.slug===e[0].attr_slug}));c&&(o=c.id)}t.setState({attributes:n,expandedAttribute:o,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(e));case 2:r=n.sent,t.setState({attributes:[],expandedAttribute:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))}},{key:"loadTerms",value:function(){var t=this,e=this.state,r=e.expandedAttribute,n=e.termsList;r&&(n[r]||this.setState({termsLoading:!0}),Object(_.h)(r).then((function(e){e=e.map((function(t){return C({},t,{parent:r,attr_slug:t.attribute.slug})})),t.setState((function(t){return{termsList:C({},t.termsList,s()({},r,e)),termsLoading:!1}}))})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(e));case 2:r=n.sent,t.setState({termsList:{},termsLoading:!1,error:r});case 4:case"end":return n.stop()}}))})))}},{key:"onExpandAttribute",value:function(t){var e=this.state.expandedAttribute;this.setState({expandedAttribute:t===e?null:t})}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.expandedAttribute,c=e.loading,i=e.attributes,a=e.termsList,s=e.termsLoading;return Object(j.createElement)(t,o()({},this.props,{attributes:i,error:r,expandedAttribute:n,onExpandAttribute:this.onExpandAttribute,isLoading:c,termsAreLoading:s,termsList:a}))}}]),r}(j.Component);return e.defaultProps={selected:[]},e}),"withAttributes"),E=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(m()(t)),t}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(_.b)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(e));case 2:r=n.sent,t.setState({categories:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.categories;return Object(j.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:c}))}}]),r}(j.Component)}),"withCategories"),A=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={error:null,loading:!1,category:"preview"===t.props.attributes.categoryId?t.props.attributes.previewCategory:null},t.loadCategory=t.loadCategory.bind(m()(t)),t}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){this.loadCategory()}},{key:"componentDidUpdate",value:function(t){t.attributes.categoryId!==this.props.attributes.categoryId&&this.loadCategory()}},{key:"loadCategory",value:function(){var t=this,e=this.props.attributes.categoryId;"preview"!==e&&(e?(this.setState({loading:!0}),Object(_.c)(e).then((function(e){t.setState({category:e,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(e));case 2:r=n.sent,t.setState({category:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):this.setState({category:null,loading:!1,error:null}))}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.category;return Object(j.createElement)(t,o()({},this.props,{error:r,getCategory:this.loadCategory,isLoading:n,category:c}))}}]),r}(j.Component)}),"withCategory"),D=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t,e;l()(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=g()(this,(t=h()(r)).call.apply(t,[this].concat(o))),s()(m()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),s()(m()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(_.d)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch((function(t){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(t));case 2:r=n.sent,e.setState({product:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):e.setState({product:null,loading:!1,error:null}))})),e}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(t){t.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.product;return Object(j.createElement)(t,o()({},this.props,{error:r,getProduct:this.loadProduct,isLoading:n,product:c}))}}]),r}(j.Component)}),"withProduct"),L=r(33),T=r.n(L);function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t,e;l()(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=g()(this,(t=h()(r)).call.apply(t,[this].concat(o))),s()(m()(e),"state",{error:null,loading:!1,variations:{}}),s()(m()(e),"loadVariations",(function(){var t=e.props.products,r=e.state,n=r.loading,o=r.variations;if(!n){var c=e.getExpandedProduct();if(c&&!o[c]){var a=t.find((function(t){return t.id===c}));a.variations&&0!==a.variations.length?(e.setState({loading:!0}),Object(_.f)(c).then((function(t){var r=t.map((function(t){return B({},t,{parent:c})}));e.setState({variations:B({},e.state.variations,s()({},c,r)),loading:!1,error:null})})).catch((function(t){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(P.a)(t));case 2:r=n.sent,e.setState({variations:B({},e.state.variations,s()({},c,null)),loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):e.setState({variations:B({},e.state.variations,s()({},c,null)),loading:!1,error:null})}}})),e}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.selected,r=t.showVariations;e&&r&&this.loadVariations()}},{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.isLoading,n=e.selected;e.showVariations&&(!T()(t.selected,n)||t.isLoading&&!r)&&this.loadVariations()}},{key:"isProductId",value:function(t){return this.props.products.some((function(e){return e.id===t}))}},{key:"findParentProduct",value:function(t){return this.props.products.filter((function(e){return e.variations&&e.variations.includes(t)}))[0].id}},{key:"getExpandedProduct",value:function(){var t=this.props,e=t.isLoading,r=t.selected;if(!t.showVariations)return null;var n=r&&r.length?r[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!e&&n?this.isProductId(n)?n:this.findParentProduct(n):null}},{key:"render",value:function(){var e=this.props,r=e.error,n=e.isLoading,c=this.state,i=c.error,a=c.loading,s=c.variations;return Object(j.createElement)(t,o()({},this.props,{error:i||r,expandedProduct:this.getExpandedProduct(),isLoading:n,variations:s,variationsLoading:a}))}}]),r}(j.Component);return s()(e,"defaultProps",{selected:[],showVariations:!1}),e}),"withProductVariations"),N=r(5),H=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={list:[],loading:!0},t.setError=t.setError.bind(m()(t)),t.debouncedOnSearch=Object(k.debounce)(t.onSearch.bind(m()(t)),400),t}return y()(r,e),p()(r,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(_.g)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(t){var e=this,r=this.props.selected;Object(_.g)({selected:r,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"setError",value:function(t){var e;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(Object(P.a)(t));case 2:e=r.sent,this.setState({list:[],loading:!1,error:e});case 4:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.list,c=e.loading;return Object(j.createElement)(t,o()({},this.props,{error:r,products:n,isLoading:c,onSearch:N.h?this.debouncedOnSearch:null}))}}]),r}(j.Component);return e.defaultProps={selected:[]},e}),"withSearchedProducts"),V=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){return l()(this,r),g()(this,h()(r).apply(this,arguments))}return y()(r,e),p()(r,[{key:"render",value:function(){var e=this.props.selected;return Object(j.createElement)(t,o()({},this.props,{selected:Object(k.isNil)(e)?[]:[e]}))}}]),r}(j.Component);return e.defaultProps={selected:null},e}),"withTransformSingleSelectToMultipleSelect");r.d(e,"a",(function(){return x})),r.d(e,"b",(function(){return E})),r.d(e,"c",(function(){return A})),r.d(e,"d",(function(){return D})),r.d(e,"e",(function(){return M})),r.d(e,"f",(function(){return H})),r.d(e,"g",(function(){return V}))},33:function(t,e){!function(){t.exports=this.wp.isShallowEqual}()},4:function(t,e){!function(){t.exports=this.lodash}()},40:function(t,e){!function(){t.exports=this.wp.keycodes}()},42:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:n.a},rows:{type:"number",default:n.c},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}}}},43:function(t,e,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),a=(r(3),r(2));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,s=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(u({},r,{title:!l}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(u({},r,{price:!o}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(u({},r,{rating:!s}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(u({},r,{button:!n}))}}))}},45:function(t,e,r){"use strict";var n=r(10),o=r.n(n),c=r(0),i=r(1),a=r(4),s=(r(3),r(31)),u=r(2),l=r(30),d=r(29),p=(r(95),function(t){var e=t.categories,r=t.error,n=t.isLoading,l=t.onChange,p=t.onOperatorChange,b=t.operator,g=t.selected,f=t.isSingle,h={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(d.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.a,{className:"woocommerce-product-categories",list:e,isLoading:n,selected:g.map((function(t){return Object(a.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,r=t.search,n=t.depth,a=void 0===n?0:n,u=["woocommerce-product-categories__item"];r.length&&u.push("is-searching"),0===a&&0!==e.parent&&u.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name;return Object(c.createElement)(s.b,o()({className:u.join(" ")},t,{showCount:!0,"aria-label":Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",e.count,"woo-gutenberg-products-block"),l,e.count)}))},messages:h,isHierarchical:!0,isSingle:f}),!!p&&Object(c.createElement)("div",{className:g.length<2?"screen-reader-text":""},Object(c.createElement)(u.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:p,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});p.defaultProps={operator:"any",isSingle:!1},e.a=Object(l.b)(p)},48:function(t,e){!function(){t.exports=this.ReactDOM}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4),i=(r(3),r(2)),a=r(5);e.a=function(t){var e=t.columns,r=t.rows,s=t.setAttributes,u=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,a.l,a.j);s({columns:Object(c.isNaN)(e)?"":e})},min:a.l,max:a.j}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,a.n,a.k);s({rows:Object(c.isNaN)(e)?"":e})},min:a.n,max:a.k}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:u?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:u,onChange:function(){return s({alignButtons:!u})}}))}},5:function(t,e,r){"use strict";var n=r(6),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),a=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),u=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",2),p=Object(n.getSetting)("min_height",500),b=Object(n.getSetting)("default_height",500),g=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),f=Object(n.getSetting)("limitTags"),h=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),O=Object(n.getSetting)("homeUrl",""),m=(Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")});r.d(e,"d",(function(){return o})),r.d(e,"o",(function(){return c})),r.d(e,"j",(function(){return i})),r.d(e,"l",(function(){return a})),r.d(e,"a",(function(){return s})),r.d(e,"k",(function(){return u})),r.d(e,"n",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"m",(function(){return p})),r.d(e,"b",(function(){return b})),r.d(e,"h",(function(){return g})),r.d(e,"i",(function(){return f})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return O})),r.d(e,"e",(function(){return m}))},50:function(t,e,r){"use strict";var n=r(0),o=r(17),c=r.n(o),i=r(63),a=r.n(i),s=r(5);r.d(e,"a",(function(){return u}));var u=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,u=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:u},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,u=r.orderby,l=r.products,d=r.columns||s.a,p=r.rows||s.c,b=new Map;switch(b.set("limit",p*d),b.set("columns",d),c&&c.length&&(b.set("category",c.join(",")),i&&"all"===i&&b.set("cat_operator","AND")),n&&n.length&&(b.set("terms",n.map((function(t){return t.id})).join(",")),b.set("attribute",n[0].attr_slug),o&&"all"===o&&b.set("terms_operator","AND")),u&&("price_desc"===u?(b.set("orderby","price"),b.set("order","DESC")):"price_asc"===u?(b.set("orderby","price"),b.set("order","ASC")):"date"===u?(b.set("orderby","date"),b.set("order","DESC")):b.set("orderby",u)),e){case"woocommerce/product-best-sellers":b.set("best_selling","1");break;case"woocommerce/product-top-rated":b.set("orderby","rating");break;case"woocommerce/product-on-sale":b.set("on_sale","1");break;case"woocommerce/product-new":b.set("orderby","date"),b.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";b.set("ids",l.join(",")),b.set("limit",l.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g="[products",f=!0,h=!1,O=void 0;try{for(var m,v=b[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var y=a()(m.value,2);g+=" "+y[0]+'="'+y[1]+'"'}}catch(t){h=!0,O=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw O}}return g+="]"}(e,t))}}},51:function(t,e){!function(){t.exports=this.wp.viewport}()},56:function(t,e){!function(){t.exports=this.wp.hooks}()},58:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},59:function(t,e){!function(){t.exports=this.wp.date}()},596:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r.n(n),c=r(0),i=r(1),a=r(28),s=r(34),u=r.n(s),l=r(4),d=r(11),p=r.n(d),b=r(12),g=r.n(b),f=r(13),h=r.n(f),O=r(14),m=r.n(O),v=r(15),y=r.n(v),j=r(2),w=r(24),k=(r(3),r(43)),_=r(49),P=r(45),S=function(t){function e(){return p()(this,e),h()(this,m()(e).apply(this,arguments))}return y()(e,t),g()(e,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,n=e.categories,o=e.catOperator,a=e.columns,s=e.contentVisibility,u=e.rows,l=e.alignButtons;return Object(c.createElement)(w.InspectorControls,{key:"inspector"},Object(c.createElement)(j.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(_.a,{columns:a,rows:u,alignButtons:l,setAttributes:r})),Object(c.createElement)(j.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(k.a,{settings:s,onChange:function(t){return r({contentVisibility:t})}})),Object(c.createElement)(j.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(P.a,{selected:n,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({categories:e})},operator:o,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:t})}})))}},{key:"render",value:function(){var t=this.props,e=t.name,r=t.attributes;return Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(j.Disabled,null,Object(c.createElement)(w.ServerSideRender,{block:e,attributes:r})))}}]),e}(c.Component),C=r(50),x=r(42);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var A="woocommerce/product-top-rated";Object(a.registerBlockType)(A,{title:Object(i.__)("Top Rated Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(u.a,{icon:"trophy"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of your top rated products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},x.a),transforms:{from:[{type:"block",blocks:Object(l.without)(x.b,A),transform:function(t){return Object(a.createBlock)("woocommerce/product-top-rated",t)}}]},deprecated:[{attributes:x.a,save:Object(C.a)(A)}],edit:function(t){return Object(c.createElement)(S,t)},save:function(){return null}})},6:function(t,e){!function(){t.exports=this.wc.wcSettings}()},67:function(t,e){!function(){t.exports=this.wp.dom}()},69:function(t,e){},7:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},70:function(t,e){},71:function(t,e){},73:function(t,e){},74:function(t,e){}});