var M,d,B,C,I,E={},z=[],Z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(_,e){for(var t in e)_[t]=e[t];return _}function G(_){var e=_.parentNode;e&&e.removeChild(_)}function w(_,e,t){var r,l,o,c={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)c[o]===void 0&&(c[o]=_.defaultProps[o]);return A(_,c,r,l,null)}function A(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++B};return l==null&&d.vnode!=null&&d.vnode(o),o}function N(_){return _.children}function D(_,e){this.props=_,this.context=e}function x(_,e){if(e==null)return _.__?x(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?x(_):null}function V(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return V(_)}}function O(_){(!_.__d&&(_.__d=!0)&&C.push(_)&&!U.__r++||I!==d.debounceRendering)&&((I=d.debounceRendering)||setTimeout)(U)}function U(){for(var _;U.__r=C.length;)_=C.sort(function(e,t){return e.__v.__b-t.__v.__b}),C=[],_.some(function(e){var t,r,l,o,c,u;e.__d&&(c=(o=(t=e).__v).__e,(u=t.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,W(u,o,l,t.__n,u.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c??x(o),o.__h),Q(r,o),o.__e!=c&&V(o)))})}function q(_,e,t,r,l,o,c,u,p,a){var n,h,s,i,f,b,v,y=r&&r.__k||z,g=y.length;for(t.__k=[],n=0;n<e.length;n++)if((i=t.__k[n]=(i=e[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?A(null,i,null,null,i):Array.isArray(i)?A(N,{children:i},null,null,null):i.__b>0?A(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=t,i.__b=t.__b+1,(s=y[n])===null||s&&i.key==s.key&&i.type===s.type)y[n]=void 0;else for(h=0;h<g;h++){if((s=y[h])&&i.key==s.key&&i.type===s.type){y[h]=void 0;break}s=null}W(_,i,s=s||E,l,o,c,u,p,a),f=i.__e,(h=i.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,i),v.push(h,i.__c||f,i)),f!=null?(b==null&&(b=f),typeof i.type=="function"&&i.__k===s.__k?i.__d=p=J(i,p,_):p=K(_,i,s,y,f,p),typeof t.type=="function"&&(t.__d=p)):p&&s.__e==p&&p.parentNode!=_&&(p=x(s))}for(t.__e=b,n=g;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=x(r,n+1)),Y(y[n],y[n]));if(v)for(n=0;n<v.length;n++)X(v[n],v[++n],v[++n])}function J(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?J(r,e,t):K(t,r,r,l,r.__e,e));return e}function K(_,e,t,r,l,o){var c,u,p;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==_)_.appendChild(l),c=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=2)if(u==l)break e;_.insertBefore(l,o),c=o}return c!==void 0?c:l.nextSibling}function ee(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||L(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||L(_,o,e[o],t[o],r)}function $(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||Z.test(e)?t:t+"px"}function L(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||$(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||$(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?j:R,o):_.removeEventListener(e,o?j:R,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?_.setAttribute(e,t):_.removeAttribute(e))}}function R(_){this.l[_.type+!1](d.event?d.event(_):_)}function j(_){this.l[_.type+!0](d.event?d.event(_):_)}function W(_,e,t,r,l,o,c,u,p){var a,n,h,s,i,f,b,v,y,g,S,F,P,m=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,u=e.__e=t.__e,e.__h=null,o=[u]),(a=d.__b)&&a(e);try{e:if(typeof m=="function"){if(v=e.props,y=(a=m.contextType)&&r[a.__c],g=a?y?y.props.value:a.__:r,t.__c?b=(n=e.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(v,g):(e.__c=n=new D(v,g),n.constructor=m,n.render=te),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),s=n.props,i=n.state,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||e.__v===t.__v){n.props=v,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,i,f)})}if(n.context=g,n.props=v,n.__v=e,n.__P=_,S=d.__r,F=0,"prototype"in m&&m.prototype.render)n.state=n.__s,n.__d=!1,S&&S(e),a=n.render(n.props,n.state,n.context);else do n.__d=!1,S&&S(e),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++F<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(f=n.getSnapshotBeforeUpdate(s,i)),P=a!=null&&a.type===N&&a.key==null?a.props.children:a,q(_,Array.isArray(P)?P:[P],e,t,r,l,o,c,u,p),n.base=e.__e,e.__h=null,n.__h.length&&c.push(n),b&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=_e(t.__e,e,t,r,l,o,c,p);(a=d.diffed)&&a(e)}catch(T){e.__v=null,(p||o!=null)&&(e.__e=u,e.__h=!!p,o[o.indexOf(u)]=null),d.__e(T,e,t)}}function Q(_,e){d.__c&&d.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(r){r.call(t)})}catch(r){d.__e(r,t.__v)}})}function _e(_,e,t,r,l,o,c,u){var p,a,n,h=t.props,s=e.props,i=e.type,f=0;if(i==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){_=p,o[f]=null;break}}if(_==null){if(i===null)return document.createTextNode(s);_=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),o=null,u=!1}if(i===null)h===s||u&&_.data===s||(_.data=s);else{if(o=o&&M.call(_.childNodes),a=(h=t.props||E).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},f=0;f<_.attributes.length;f++)h[_.attributes[f].name]=_.attributes[f].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(ee(_,s,h,l,u),n)e.__k=[];else if(f=e.props.children,q(_,Array.isArray(f)?f:[f],e,t,r,l&&i!=="foreignObject",o,c,o?o[0]:t.__k&&x(t,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&G(o[f]);u||("value"in s&&(f=s.value)!==void 0&&(f!==_.value||i==="progress"&&!f||i==="option"&&f!==h.value)&&L(_,"value",f,h.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==_.checked&&L(_,"checked",f,h.checked,!1))}return _}function X(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){d.__e(r,t)}}function Y(_,e,t){var r,l;if(d.unmount&&d.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||X(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&Y(r[l],e,typeof _.type!="function");t||_.__e==null||G(_.__e),_.__e=_.__d=void 0}function te(_,e,t){return this.constructor(_,t)}function ne(_,e,t){var r,l,o;d.__&&d.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],W(e,_=(!r&&t||e).__k=w(N,null,[_]),l||E,E,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?M.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r),Q(o,_)}M=z.slice,d={__e:function(_,e,t,r){for(var l,o,c;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),c=l.__d),c)return l.__E=l}catch(u){_=u}throw _}},B=0,D.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof _=="function"&&(_=_(k({},t),this.props)),_&&k(t,_),_!=null&&this.__v&&(e&&this.__h.push(e),O(this))},D.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),O(this))},D.prototype.render=N,C=[],U.__r=0;const H=({value:_,name:e})=>_?w("astro-slot",{name:e,dangerouslySetInnerHTML:{__html:_}}):null;H.shouldComponentUpdate=()=>!1;var oe=_=>(e,t,{default:r,...l})=>{if(!!_.hasAttribute("ssr")){for(const[o,c]of Object.entries(l))t[o]=w(H,{value:c,name:o});ne(w(e,t,r!=null?w(H,{value:r}):r),_)}};export{oe as default};
