(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[13],{353:function(e,t,n){"use strict";t.a={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"}}},354:function(e,t,n){"use strict";var c=n(8),r=n.n(c),a=n(11),o=n.n(a),l=n(18),i=n.n(l),s=n(0),u=(n(2),n(7)),d=n.n(u),p=n(5),m=n(42),g=n(239);n(528);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){return Object(s.createElement)("img",{src:p.C,alt:""})},j=function(e){var t=e.image,n=e.onLoad,c=e.loaded,r=e.showFullSize,a=t||{},o=a.thumbnail,l=a.src,i=a.srcset,u=a.sizes,d={alt:a.alt,onLoad:n,hidden:!c,src:o};return r&&(d=O(O({},d),{},{src:l,srcSet:i,sizes:u})),Object(s.createElement)(s.Fragment,null,Object(s.createElement)("img",d),!c&&Object(s.createElement)(f,null))};t.a=function(e){var t=e.className,n=e.imageSizing,c=void 0===n?"full-size":n,r=e.productLink,a=void 0===r||r,l=e.showSaleBadge,u=e.saleBadgeAlign,p=void 0===u?"right":u,b=i()(e,["className","imageSizing","productLink","showSaleBadge","saleBadgeAlign"]),O=Object(m.useInnerBlockLayoutContext)().parentClassName,w=Object(m.useProductDataContext)(),h=b.product||w.product,v=Object(s.useState)(!1),y=o()(v,2),E=y[0],k=y[1];if(!h)return Object(s.createElement)("div",{className:d()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder","".concat(O,"__product-image"))},Object(s.createElement)(f,null));var S=(null==h?void 0:h.images)&&h.images.length?h.images[0]:null;return Object(s.createElement)("div",{className:d()(t,"wc-block-components-product-image","".concat(O,"__product-image"))},a?Object(s.createElement)("a",{href:h.permalink,rel:"nofollow"},!!l&&Object(s.createElement)(g.default,{align:p,product:h}),Object(s.createElement)(j,{image:S,onLoad:function(){return k(!0)},loaded:E,showFullSize:"cropped"!==c})):Object(s.createElement)(s.Fragment,null,!!l&&Object(s.createElement)(g.default,{align:p,product:h}),Object(s.createElement)(j,{image:S,onLoad:function(){return k(!0)},loaded:E,showFullSize:"cropped"!==c})))}},909:function(e,t,n){"use strict";n.r(t);var c=n(27),r=n(908),a=n(354),o=n(353);t.default=Object(c.compose)(Object(r.a)(o.a))(a.a)}}]);