(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const he=(e,t)=>e===t,ge=Symbol("solid-track"),F={equals:he};let se=oe;const E=1,H=2,le={owned:null,cleanups:null,context:null,owner:null};var g=null;let q=null,pe=null,d=null,m=null,_=null,R=0;function U(e,t){const n=d,s=g,l=e.length===0,i=t===void 0?s:t,o=l?le:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>B(()=>Y(o)));g=o,d=null;try{return M(r,!0)}finally{d=n,g=s}}function N(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),re(n,l));return[ie.bind(n),s]}function L(e,t,n){const s=W(e,t,!1,E);O(s)}function me(e,t,n){se=Se;const s=W(e,t,!1,E);s.user=!0,_?_.push(s):O(s)}function D(e,t,n){n=n?Object.assign({},F,n):F;const s=W(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),ie.bind(s)}function B(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function ye(e){me(()=>B(e))}function we(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===E)O(this);else{const e=m;m=null,M(()=>V(this),!1),m=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function re(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=q&&q.running;o&&q.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?m.push(i):_.push(i),i.observers&&ce(i)),o||(i.state=E)}if(m.length>1e6)throw m=[],new Error},!1)),t}function O(e){if(!e.fn)return;Y(e);const t=R;$e(e,e.value,t)}function $e(e,t,n){let s;const l=g,i=d;d=g=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(Y),e.owned=null),e.updatedAt=n+1,ue(o)}finally{d=i,g=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?re(e,s):e.value=s,e.updatedAt=n)}function W(e,t,n,s=E,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==le&&(g.owned?g.owned.push(i):g.owned=[i]),i}function K(e){if(e.state===0)return;if(e.state===H)return V(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)O(e);else if(e.state===H){const s=m;m=null,M(()=>V(e,t[0]),!1),m=s}}function M(e,t){if(m)return e();let n=!1;t||(m=[]),_?n=!0:_=[],R++;try{const s=e();return be(n),s}catch(s){n||(_=null),m=null,ue(s)}}function be(e){if(m&&(oe(m),m=null),e)return;const t=_;_=null,t.length&&M(()=>se(t),!1)}function oe(e){for(let t=0;t<e.length;t++)K(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}for(t=0;t<n;t++)K(e[t])}function V(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===E?s!==t&&(!s.updatedAt||s.updatedAt<R)&&K(s):l===H&&V(s,t)}}}function ce(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=H,n.pure?m.push(n):_.push(n),n.observers&&ce(n))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),o=n.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ie(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ue(e,t=g){throw Ie(e)}const ve=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let s=[],l=[],i=[],o=0,r=t.length>1?[]:null;return we(()=>Z(i)),()=>{let u=e()||[],f,c;return u[ge],B(()=>{let h=u.length,S,I,a,p,$,C,A,x,T;if(h===0)o!==0&&(Z(i),i=[],s=[],l=[],o=0,r&&(r=[])),n.fallback&&(s=[ve],l[0]=U(de=>(i[0]=de,n.fallback())),o=1);else if(o===0){for(l=new Array(h),c=0;c<h;c++)s[c]=u[c],l[c]=U(b);o=h}else{for(a=new Array(h),p=new Array(h),r&&($=new Array(h)),C=0,A=Math.min(o,h);C<A&&s[C]===u[C];C++);for(A=o-1,x=h-1;A>=C&&x>=C&&s[A]===u[x];A--,x--)a[x]=l[A],p[x]=i[A],r&&($[x]=r[A]);for(S=new Map,I=new Array(x+1),c=x;c>=C;c--)T=u[c],f=S.get(T),I[c]=f===void 0?-1:f,S.set(T,c);for(f=C;f<=A;f++)T=s[f],c=S.get(T),c!==void 0&&c!==-1?(a[c]=l[f],p[c]=i[f],r&&($[c]=r[f]),c=I[c],S.set(T,c)):i[f]();for(c=C;c<h;c++)c in a?(l[c]=a[c],i[c]=p[c],r&&(r[c]=$[c],r[c](c))):l[c]=U(b);l=l.slice(0,o=h),s=u.slice(0)}return l});function b(h){if(i[c]=h,r){const[S,I]=N(c);return r[c]=I,t(u[c],S)}return t(u[c])}}}let Ae=!1;function w(e,t){return B(()=>e(t||{}))}function P(e){const t="fallback"in e&&{fallback:()=>e.fallback};return D(Ce(()=>e.each,e.children,t||void 0))}function xe(e,t,n){let s=n.length,l=t.length,i=s,o=0,r=0,u=t[l-1].nextSibling,f=null;for(;o<l||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===o){const c=i<s?r?n[r-1].nextSibling:n[i-r]:u;for(;r<i;)e.insertBefore(n[r++],c)}else if(i===r)for(;o<l;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[l]=n[i]}else{if(!f){f=new Map;let b=r;for(;b<i;)f.set(n[b],b++)}const c=f.get(t[o]);if(c!=null)if(r<c&&c<i){let b=o,h=1,S;for(;++b<l&&b<i&&!((S=f.get(t[b]))==null||S!==c+h);)h++;if(h>c-r){const I=t[o];for(;r<c;)e.insertBefore(n[r++],I)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const z="_$DX_DELEGATE";function _e(e,t,n,s={}){let l;return U(i=>{l=i,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function y(e,t,n){let s;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(s||(s=l())).cloneNode(!0);return i.cloneNode=i,i}function fe(e,t=window.document){const n=t[z]||(t[z]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ke))}}function Ee(e,t,n){e.setAttribute(t,n)}function Le(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n,s){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function v(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return G(e,t,s,n);L(l=>G(e,t(),l,n),s)}function ke(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=k(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=k(e,n,s);else{if(i==="function")return L(()=>{let r=t();for(;typeof r=="function";)r=r();n=G(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(Q(r,t,n,l))return L(()=>n=G(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=k(e,n,s),o)return n}else u?n.length===0?ee(e,r,s):xe(e,n,r):(n&&k(e),ee(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=k(e,n,s,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Q(e,t,n,s){let l=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],u=n&&n[e.length],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=Q(e,r,u)||l;else if(f==="function")if(s){for(;typeof r=="function";)r=r();l=Q(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||l}else e.push(r),l=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return l}function ee(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function k(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const u=r.parentNode===e;!i&&!o?u?e.replaceChild(l,r):e.insertBefore(l,n):u&&r.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}const j="allItems",X=()=>{const e=localStorage.getItem(j);if(e===null)return[];let t=JSON.parse(e);return!Array.isArray(t)||!t.every(n=>typeof n=="string")?(console.error(`Expected an array of strings but got ${JSON.stringify(t)} - resetting ${j}`),localStorage.removeItem(j),[]):t},ae=e=>{localStorage.setItem(j,JSON.stringify(e))},Ne=e=>{const t=X().concat(e).sort();return ae(t),t},De=e=>{const t=X().filter(n=>n!==e);return ae(t),t};var Pe=y("<button class=navigation-button>");const J=e=>{const t=()=>{switch(e.direction){case"forward":return e.text+" →";case"back":return"← "+e.text}};return(()=>{var n=Pe();return Te(n,"click",e.goToPage),v(n,t),n})()};fe(["click"]);var Be=y("<h1>Create shopping list"),te=y("<ol>"),Oe=y("<hr>"),Me=y("<li class=all-items-item><input type=checkbox>"),Ue=y("<li>");const je=e=>{const t=(n,s)=>{s.target.checked?e.addDesiredItem(n):e.removeDesiredItem(n)};return[Be(),(()=>{var n=te();return v(n,w(P,{get each(){return e.availableItems},children:s=>(()=>{var l=Me(),i=l.firstChild;return v(l,s,i),i.addEventListener("change",o=>t(s,o)),L(()=>i.checked=e.desiredItems.includes(s)),l})()})),n})(),Oe(),(()=>{var n=te();return v(n,w(P,{get each(){return e.desiredItems},children:s=>(()=>{var l=Ue();return v(l,s),l})()})),n})(),w(J,{text:"Start shopping",direction:"forward",get goToPage(){return e.goToStartShopping}}),w(J,{text:"Catalogue",direction:"back",get goToPage(){return e.goBackToCatalogue}})]};var Fe=y("<h1>Shopping list"),He=y("<h2 class=finished-shopping>You've got everything!"),Ke=y("<ol id=unchecked-items>"),Ve=y("<details class=collected-items><summary>Collected (<!> items)</summary><ol id=checked-items>"),Ge=y("<li class=all-items-item><input type=checkbox>");const Je=e=>{const t=()=>e.desiredItems.filter(n=>!e.collectedItems.includes(n));return[Fe(),D(()=>D(()=>t().length===0)()?He():(()=>{var n=Ke();return v(n,w(P,{get each(){return t()},children:s=>w(ne,{item:s,checked:!1,toggleChecked:()=>e.checkItem(s)})})),n})()),D(()=>D(()=>e.collectedItems.length>0)()&&(()=>{var n=Ve(),s=n.firstChild,l=s.firstChild,i=l.nextSibling;i.nextSibling;var o=s.nextSibling;return v(s,()=>e.collectedItems.length,i),v(o,w(P,{get each(){return e.desiredItems.filter(r=>e.collectedItems.includes(r))},children:r=>w(ne,{item:r,checked:!0,toggleChecked:()=>e.uncheckItem(r)})})),n})()),w(J,{text:"Create shopping list",direction:"back",get goToPage(){return e.goBackToCreateShoppingList}})]},ne=e=>(()=>{var t=Ge(),n=t.firstChild;return v(t,()=>e.item,n),n.addEventListener("change",()=>e.toggleChecked(e.item)),L(()=>n.checked=e.checked),t})(),Re=""+new URL("cross-DeeVdYrH.png",import.meta.url).href;var Ye=y("<h1>Catalogue"),qe=y("<ol>"),Qe=y('<input type=text class=new-item-input placeholder="New item">'),We=y("<p>Item already exists"),Xe=y("<li class=all-items-item><img class=remove- style=height:15px; alt=delete-item>");const Ze=e=>{const[t,n]=N(""),s=o=>{let r=o.target.value;n(r)},l=o=>{o.key==="Enter"&&t().length>0&&!i()&&(e.addItem(t()),n(""))},i=()=>e.items.includes(t());return[Ye(),(()=>{var o=qe();return v(o,w(P,{get each(){return e.items},children:r=>(()=>{var u=Xe(),f=u.firstChild;return v(u,r,f),f.$$click=()=>e.removeItem(r),Ee(f,"src",Re),u})()})),o})(),(()=>{var o=Qe();return o.$$keyup=l,o.$$input=s,L(()=>o.value=t()),o})(),(()=>{var o=We();return L(()=>Le(o,i()?"error":"hidden")),o})(),w(J,{text:"Create shopping list",direction:"forward",get goToPage(){return e.goToCreateShoppingList}})]};fe(["input","keyup","click"]);const ze=()=>{const[e,t]=N("catalogue"),[n,s]=N([]),[l,i]=N([]),[o,r]=N([]);ye(()=>{const a=X();s(a)});const u=a=>{s(()=>Ne(a))},f=a=>{s(()=>De(a)),i(p=>p.filter($=>$!==a)),r(p=>p.filter($=>$!==a))},c=a=>{i(p=>p.concat(a))},b=a=>{i(p=>p.filter($=>$!==a)),r(p=>p.filter($=>$!==a))},h=a=>{r(p=>p.concat(a))},S=a=>{r(p=>p.filter($=>$!==a))},I=a=>()=>t(a);return D(()=>{switch(e()){case"catalogue":return w(Ze,{get items(){return n()},addItem:u,removeItem:f,get goToCreateShoppingList(){return I("createShoppingList")}});case"createShoppingList":return w(je,{get availableItems(){return n()},get desiredItems(){return l()},addDesiredItem:c,removeDesiredItem:b,get goBackToCatalogue(){return I("catalogue")},get goToStartShopping(){return I("shopping")}});case"shopping":return w(Je,{get desiredItems(){return l()},get collectedItems(){return o()},checkItem:h,uncheckItem:S,get goBackToCreateShoppingList(){return I("createShoppingList")}})}})},et=document.getElementById("root");_e(()=>w(ze,{}),et);
