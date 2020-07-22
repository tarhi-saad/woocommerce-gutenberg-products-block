!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=255)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t,r){var n=r(69),o=r(70),c=r(53),i=r(71);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||i()}},104:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(11),o=r.n(n),c=r(6),i=r.n(c),a=r(45),u=r(43);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.Block,r=e.selector,n=e.getProps,c=void 0===n?function(){}:n,i=e.getErrorBoundaryProps,s=void 0===i?function(){}:i,f=document.querySelectorAll(r);f.length&&Array.prototype.forEach.call(f,(function(e,r){var n=c(e,r),i=s(e,r),f=l(l({},e.dataset),n.attributes);e.classList.remove("is-loading"),Object(a.render)(React.createElement(u.a,i,React.createElement(t,o()({},n,{attributes:f}))),e)}))}},107:function(e,t){},11:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(14),o=r(13),c=r(0),i=r(86),a=r(37),u=function(e){var t=e.namespace,r=e.resourceName,u=e.resourceValues,s=void 0===u?[]:u,l=e.query,f=void 0===l?{}:l,p=e.shouldSelect,b=void 0===p||p;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(c.useRef)({results:[],isLoading:!0}),g=Object(a.a)(f),m=Object(a.a)(s),O=Object(i.a)(),y=Object(o.useSelect)((function(e){if(!b)return null;var o=e(n.COLLECTIONS_STORE_KEY),c=[t,r,g,m],i=o.getCollectionError.apply(o,c);return i&&O(i),{results:o.getCollection.apply(o,c),isLoading:!o.hasFinishedResolution("getCollection",c)}}),[t,r,m,g,b]);return null!==y&&(d.current=y),d.current}},122:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(15),i=r.n(c),a=r(51),u=function(e){var t=e.className,r=e.size,n=i()(e,["className","size"]);return React.createElement(a.a,o()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:r,height:r},n),React.createElement("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))},s=React.createElement(u,null);t.a=s},123:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(15),i=r.n(c),a=r(3);r(4);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},125:function(e,t,r){"use strict";var n=r(0),o=r(2),c=r(14),i=r(13);t.a=function(e){return function(t){var r;return r=Object(n.useRef)(Object(o.getSetting)("restApiRoutes")),Object(i.useSelect)((function(e,t){if(r.current){var n=e(c.SCHEMA_STORE_KEY),o=n.isResolving,i=n.hasFinishedResolution,a=t.dispatch(c.SCHEMA_STORE_KEY),u=a.receiveRoutes,s=a.startResolution,l=a.finishResolution;Object.keys(r.current).forEach((function(e){var t=r.current[e];o("getRoutes",[e])||i("getRoutes",[e])||(s("getRoutes",[e]),u(t,[e]),l("getRoutes",[e]))}))}}),[]),React.createElement(e,t)}}},13:function(e,t){!function(){e.exports=this.wp.data}()},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return i}));var n=r(8),o=n.c.reduce((function(e,t){var r,n=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;return n.id&&e.push(n),e}),[]),c=function(e){if(e)return o.find((function(t){return t.id===e}))},i=function(e){if(e)return o.find((function(t){return t.taxonomy===e}))}},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r(7),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=e.filter((function(e){return e.attribute===r.taxonomy})),i=c.length?c[0]:null;if(i&&i.slug&&Array.isArray(i.slug)&&i.slug.includes(o)){var a=i.slug.filter((function(e){return e!==o})),u=e.filter((function(e){return e.attribute!==r.taxonomy}));a.length>0&&(i.slug=a.sort(),u.push(i)),t(Object(n.sortBy)(u,"attribute"))}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",i=e.filter((function(e){return e.attribute!==r.taxonomy}));0===o.length?t(i):(i.push({attribute:r.taxonomy,operator:c,slug:Object(n.map)(o,"slug").sort()}),t(Object(n.sortBy)(i,"attribute")))}},139:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(15),i=r.n(c),a=(r(4),r(5)),u=r.n(a),s=r(1),l=r(123),f=r(122),p=(r(107),function(e){var t=e.text,r=e.screenReaderText,n=void 0===r?"":r,c=e.element,a=void 0===c?"li":c,s=e.className,l=void 0===s?"":s,f=e.radius,p=void 0===f?"small":f,b=e.children,d=void 0===b?null:b,g=i()(e,["text","screenReaderText","element","className","radius","children"]),m=a,O=u()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+p),y=Boolean(n&&n!==t);return React.createElement(m,o()({className:O},g),React.createElement("span",{"aria-hidden":y,className:"wc-block-components-chip__text"},t),y&&React.createElement("span",{className:"screen-reader-text"},n),d)});t.a=function(e){var t=e.ariaLabel,r=void 0===t?"":t,n=e.className,c=void 0===n?"":n,a=e.disabled,b=void 0!==a&&a,d=e.onRemove,g=void 0===d?function(){}:d,m=e.removeOnAnyClick,O=void 0!==m&&m,y=e.text,v=e.screenReaderText,h=void 0===v?"":v,j=i()(e,["ariaLabel","className","disabled","onRemove","removeOnAnyClick","text","screenReaderText"]),_=O?"span":"button";if(!r){var w=h&&"string"==typeof h?h:y;r="string"!=typeof w?Object(s.__)("Remove","woo-gutenberg-products-block"):Object(s.sprintf)(Object(s.__)('Remove "%s"',"woo-gutenberg-products-block"),w)}var E={"aria-label":r,disabled:b,onClick:g,onKeyDown:function(e){"Backspace"!==e.key&&"Delete"!==e.key||g()}},S=O?E:{},R=O?{"aria-hidden":!0}:E;return React.createElement(p,o()({},j,S,{className:u()(c,"is-removable"),element:O?"button":j.element,screenReaderText:h,text:y}),React.createElement(_,o()({className:"wc-block-components-chip__remove"},R),React.createElement(l.a,{className:"wc-block-components-chip__remove-icon",srcElement:f.a,size:16})))}},14:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},142:function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return g}));var n=r(6),o=r.n(n),c=r(23),i=r.n(c),a=r(2);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l,f,p={code:a.CURRENCY.code,symbol:a.CURRENCY.symbol,thousandSeparator:a.CURRENCY.thousandSeparator,decimalSeparator:a.CURRENCY.decimalSeparator,minorUnit:a.CURRENCY.precision,prefix:(l=a.CURRENCY.symbol,f=a.CURRENCY.symbolPosition,{left:l,left_space:" "+l,right:"",right_space:""}[f]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(a.CURRENCY.symbol,a.CURRENCY.symbolPosition)},b=function(e){if(!e||"object"!==i()(e))return p;var t=e.currency_code,r=e.currency_symbol,n=e.currency_thousand_separator,o=e.currency_decimal_separator,c=e.currency_minor_unit,a=e.currency_prefix,u=e.currency_suffix;return{code:t||"USD",symbol:r||"$",thousandSeparator:"string"==typeof n?n:",",decimalSeparator:"string"==typeof o?o:".",minorUnit:Number.isFinite(c)?c:2,prefix:"string"==typeof a?a:"$",suffix:"string"==typeof u?u:""}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(s({},p),e)},g=function(e,t){if(""===e||void 0===e)return"";var r=parseInt(e,10);if(!Number.isFinite(r))return"";var n=d(t),o=r/Math.pow(10,n.minorUnit),c=n.prefix+o+n.suffix,i=document.createElement("textarea");return i.innerHTML=c,i.value}},15:function(e,t,r){var n=r(55);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},16:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},18:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},19:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},197:function(e,t){},2:function(e,t){!function(){e.exports=this.wc.wcSettings}()},20:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(40);function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){Object(n.a)(e,t,r[t])}))}return e}},23:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},255:function(e,t,r){"use strict";r.r(t);var n=r(125),o=r(104),c=r(10),i=r.n(c),a=r(1),u=r(94),s=r(0),l=r(5),f=r.n(l),p=(r(4),r(29)),b=(r(197),r(136)),d=r(142),g=r(139),m=function(e,t){return Number.isFinite(e)&&Number.isFinite(t)?Object(a.sprintf)(Object(a.__)("Between %s and %s","woo-gutenberg-products-block"),Object(d.a)(e),Object(d.a)(t)):Number.isFinite(e)?Object(a.sprintf)(Object(a.__)("From %s","woo-gutenberg-products-block"),Object(d.a)(e)):Object(a.sprintf)(Object(a.__)("Up to %s","woo-gutenberg-products-block"),Object(d.a)(t))},O=function(e){var t=e.type,r=e.name,n=e.prefix,o=e.removeCallback,c=void 0===o?function(){}:o,i=e.showLabel,u=void 0===i||i,s=e.displayStyle,l=n?React.createElement(React.Fragment,null,n," ",r):r,f=Object(a.sprintf)(Object(a.__)("Remove %s filter","woo-gutenberg-products-block"),r);return React.createElement("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},u&&React.createElement("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===s?React.createElement(g.a,{element:"span",text:l,onRemove:c,radius:"large",ariaLabel:f}):React.createElement("span",{className:"wc-block-active-filters__list-item-name"},l,React.createElement("button",{className:"wc-block-active-filters__list-item-remove",onClick:c},f)))},y=r(110),v=r(16),h=r(137),j=function(e){var t=e.attributeObject,r=void 0===t?{}:t,n=e.slugs,o=void 0===n?[]:n,c=e.operator,s=void 0===c?"in":c,l=e.displayStyle,f=Object(y.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[r.id]}),p=f.results,b=f.isLoading,d=Object(u.b)("attributes",[]),g=i()(d,2),m=g[0],j=g[1];if(b)return null;var _=r.label;return React.createElement("li",null,React.createElement("span",{className:"wc-block-active-filters__list-item-type"},_,":"),React.createElement("ul",null,o.map((function(e,t){var n=p.find((function(t){return t.slug===e}));if(!n)return null;var o="";return t>0&&"and"===s&&(o=React.createElement("span",{className:"wc-block-active-filters__list-item-operator"},Object(a.__)("and","woo-gutenberg-products-block"))),O({type:_,name:Object(v.decodeEntities)(n.name||e),prefix:o,removeCallback:function(){Object(h.a)(m,j,r,e)},showLabel:!1,displayStyle:l})}))))},_=function(e){var t=e.attributes,r=e.isEditor,n=void 0!==r&&r,o=Object(u.b)("attributes",[]),c=i()(o,2),l=c[0],d=c[1],g=Object(u.b)("min_price"),y=i()(g,2),v=y[0],h=y[1],_=Object(u.b)("max_price"),w=i()(_,2),E=w[0],S=w[1],R=Object(s.useMemo)((function(){return Number.isFinite(v)||Number.isFinite(E)?O({type:Object(a.__)("Price","woo-gutenberg-products-block"),name:m(v,E),removeCallback:function(){h(void 0),S(void 0)},displayStyle:t.displayStyle}):null}),[v,E,m]),x=Object(s.useMemo)((function(){return l.map((function(e){var r=Object(b.b)(e.attribute);return React.createElement(j,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}))}),[l]);if(!(l.length>0||Number.isFinite(v)||Number.isFinite(E)||n))return null;var k="h".concat(t.headingLevel),P=f()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return React.createElement(s.Fragment,null,!n&&t.heading&&React.createElement(k,null,t.heading),React.createElement("div",{className:"wc-block-active-filters"},React.createElement("ul",{className:P},n?React.createElement(s.Fragment,null,O({type:Object(a.__)("Size","woo-gutenberg-products-block"),name:Object(a.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),O({type:Object(a.__)("Color","woo-gutenberg-products-block"),name:Object(a.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):React.createElement(s.Fragment,null,R,x)),React.createElement("button",{className:"wc-block-active-filters__clear-all",onClick:function(){h(void 0),S(void 0),d([])}},React.createElement(p.a,{label:Object(a.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Clear All Filters","woo-gutenberg-products-block")}))))};Object(o.a)({selector:".wp-block-woocommerce-active-filters",Block:Object(n.a)(_),getProps:function(e){return{attributes:{displayStyle:e.dataset.displayStyle,heading:e.dataset.heading,headingLevel:e.dataset.headingLevel||3}}}})},29:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=(r(4),r(3)),i=r(5),a=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,i=e.wrapperProps,u=null!=r,l=null!=n;return!u&&l?(t=o||"span",i=s(s({},i),{},{className:a()(i.className,"screen-reader-text")}),React.createElement(t,i,n)):(t=o||c.Fragment,u&&l&&r!==n?React.createElement(t,i,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,i,r))};l.defaultProps={wrapperProps:{}},t.a=l},3:function(e,t){!function(){e.exports=this.React}()},30:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},31:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},32:function(e,t,r){var n=r(59);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},33:function(e,t,r){var n=r(23),o=r(18);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},36:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r(36),c=r.n(o),i=function(e){var t=Object(n.useRef)();return c()(e,t.current)||(t.current=e),t.current}},38:function(e,t){!function(){e.exports=this.wp.blocks}()},4:function(e,t,r){e.exports=r(60)()},40:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},43:function(e,t,r){"use strict";var n=r(30),o=r.n(n),c=r(31),i=r.n(c),a=r(18),u=r.n(a),s=r(32),l=r.n(s),f=r(33),p=r.n(f),b=r(19),d=r.n(b),g=r(6),m=r.n(g),O=(r(4),r(3)),y=r(1),v=r(8),h=function(e){var t=e.imageUrl,r=void 0===t?"".concat(v.A,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(y.__)("Oops!","woo-gutenberg-products-block"):n,c=e.text,i=void 0===c?Object(y.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,a=e.errorMessage,u=e.errorMessagePrefix,s=void 0===u?Object(y.__)("Error:","woo-gutenberg-products-block"):u;return React.createElement("div",{className:"wc-block-error wc-block-components-error"},r&&React.createElement("img",{className:"wc-block-error__image wc-block-components-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&React.createElement("p",{className:"wc-block-error__header wc-block-components-error__header"},o),i&&React.createElement("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&React.createElement("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",a)))};r(62);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p()(this,r)}}var _=function(e){l()(r,e);var t=j(r);function r(){var e;o()(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),m()(u()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,i=this.state,a=i.errorMessage;return i.hasError?React.createElement(h,{errorMessage:n?a:null,header:t,imageUrl:r,text:o,errorMessagePrefix:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(O.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),r}(O.Component);_.defaultProps={showErrorMessage:!0};t.a=_},45:function(e,t){!function(){e.exports=this.ReactDOM}()},5:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===c)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(20),o=r(7),c=r(0),i=function(e){var t=Object(n.a)({},e,{role:"img","aria-hidden":"true",focusable:"false"});return Object(c.createElement)("svg",Object(o.omit)(t,"__unstableActive"))}},53:function(e,t,r){var n=r(54);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},54:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},55:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=Object(n.createContext)("page"),c=function(){return Object(n.useContext)(o)};o.Provider},59:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},6:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},60:function(e,t,r){"use strict";var n=r(61);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},61:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},62:function(e,t){},69:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},7:function(e,t){!function(){e.exports=this.lodash}()},70:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}},71:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8:function(e,t,r){"use strict";r.d(t,"i",(function(){return o})),r.d(t,"s",(function(){return c})),r.d(t,"w",(function(){return i})),r.d(t,"p",(function(){return a})),r.d(t,"l",(function(){return u})),r.d(t,"o",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"x",(function(){return f})),r.d(t,"k",(function(){return p})),r.d(t,"j",(function(){return b})),r.d(t,"c",(function(){return d})),r.d(t,"m",(function(){return g})),r.d(t,"n",(function(){return m})),r.d(t,"A",(function(){return O})),r.d(t,"B",(function(){return y})),r.d(t,"t",(function(){return v})),r.d(t,"a",(function(){return h})),r.d(t,"u",(function(){return j})),r.d(t,"b",(function(){return _})),r.d(t,"f",(function(){return w})),r.d(t,"v",(function(){return R})),r.d(t,"g",(function(){return x})),r.d(t,"r",(function(){return k})),r.d(t,"q",(function(){return P})),r.d(t,"z",(function(){return C})),r.d(t,"y",(function(){return N})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return A}));var n=r(2),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),a=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",3),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),u=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),s=Object(n.getSetting)("limitTags"),l=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("couponsEnabled",!0)),f=(Object(n.getSetting)("shippingEnabled",!0),Object(n.getSetting)("taxesEnabled",!0)),p=Object(n.getSetting)("displayItemizedTaxes",!1),b=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),d=(Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[])),g=Object(n.getSetting)("isShippingCalculatorEnabled",!0),m=Object(n.getSetting)("isShippingCostHidden",!1),O=(Object(n.getSetting)("woocommerceBlocksPhase",1),Object(n.getSetting)("wcBlocksAssetUrl","")),y=Object(n.getSetting)("wcBlocksBuildUrl",""),v=Object(n.getSetting)("shippingCountries",{}),h=Object(n.getSetting)("allowedCountries",{}),j=Object(n.getSetting)("shippingStates",{}),_=Object(n.getSetting)("allowedStates",{}),w=(Object(n.getSetting)("shippingMethodsExist",!1),Object(n.getSetting)("checkoutShowLoginReminder",!0)),E={id:0,title:"",permalink:""},S=Object(n.getSetting)("storePages",{shop:E,cart:E,checkout:E,privacy:E,terms:E}),R=S.shop.permalink,x=(S.checkout.id,S.checkout.permalink),k=S.privacy.permalink,P=S.privacy.title,C=S.terms.permalink,N=S.terms.title,T=(S.cart.id,S.cart.permalink),A=Object(n.getSetting)("checkoutAllowsGuest",!1);Object(n.getSetting)("checkoutAllowsSignup",!1),r(38)},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(10),o=r.n(n),c=r(0),i=function(){var e=Object(c.useState)(),t=o()(e,2)[1];return function(e){return t((function(){throw e}))}}},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b}));var n=r(10),o=r.n(n),c=r(14),i=r(13),a=r(0),u=r(57),s=r(7),l=r(37),f=function(e){var t=Object(u.a)();e=e||t;var r=Object(i.useSelect)((function(t){return t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),n=Object(i.useDispatch)(c.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[r,Object(a.useCallback)((function(t){n(e,t)}),[e])]},p=function(e,t,r){var n=Object(u.a)();r=r||n;var o=Object(i.useSelect)((function(n){return n(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)}),[r,e]),s=Object(i.useDispatch)(c.QUERY_STATE_STORE_KEY).setQueryValue;return[o,Object(a.useCallback)((function(t){s(r,e,t)}),[r,e])]},b=function(e,t){var r=Object(u.a)(),n=f(t=t||r),c=o()(n,2),i=c[0],p=c[1],b=Object(l.a)(e),d=Object(a.useRef)(!1);return Object(a.useEffect)((function(){p(Object(s.assign)({},i,b)),d.current=!0}),[b]),d.current?[i,p]:[e,p]}}});