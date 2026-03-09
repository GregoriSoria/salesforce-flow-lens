(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ev(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},yi=[],In=()=>{},Ox=()=>!1,Ga=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Cv=e=>e.startsWith("onUpdate:"),pt=Object.assign,$v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rk=Object.prototype.hasOwnProperty,Re=(e,t)=>rk.call(e,t),ge=Array.isArray,bi=e=>us(e)==="[object Map]",Rx=e=>us(e)==="[object Set]",Hg=e=>us(e)==="[object Date]",_e=e=>typeof e=="function",Je=e=>typeof e=="string",ln=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Px=e=>(Pe(e)||_e(e))&&_e(e.then)&&_e(e.catch),Tx=Object.prototype.toString,us=e=>Tx.call(e),ik=e=>us(e).slice(8,-1),Nx=e=>us(e)==="[object Object]",Ka=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xo=Ev(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ok=/-\w/g,Ut=Wa(e=>e.replace(ok,t=>t.slice(1).toUpperCase())),sk=/\B([A-Z])/g,ni=Wa(e=>e.replace(sk,"-$1").toLowerCase()),Ya=Wa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hl=Wa(e=>e?`on${Ya(e)}`:""),Xn=(e,t)=>!Object.is(e,t),jl=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Mx=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ak=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let jg;const Xa=()=>jg||(jg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dt(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Je(r)?dk(r):Dt(r);if(i)for(const o in i)t[o]=i[o]}return t}else if(Je(e)||Pe(e))return e}const lk=/;(?![^(]*\))/g,uk=/:([^]+)/,ck=/\/\*[^]*?\*\//g;function dk(e){const t={};return e.replace(ck,"").split(lk).forEach(n=>{if(n){const r=n.split(uk);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Gt(e){let t="";if(Je(e))t=e;else if(ge(e))for(let n=0;n<e.length;n++){const r=Gt(e[n]);r&&(t+=r+" ")}else if(Pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function fk(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Je(t)&&(e.class=Gt(t)),n&&(e.style=Dt(n)),e}const hk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pk=Ev(hk);function Dx(e){return!!e||e===""}function vk(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=kv(e[r],t[r]);return n}function kv(e,t){if(e===t)return!0;let n=Hg(e),r=Hg(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ln(e),r=ln(t),n||r)return e===t;if(n=ge(e),r=ge(t),n||r)return n&&r?vk(e,t):!1;if(n=Pe(e),r=Pe(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const s in e){const a=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(a&&!l||!a&&l||!kv(e[s],t[s]))return!1}}return String(e)===String(t)}const qx=e=>!!(e&&e.__v_isRef===!0),Ii=e=>Je(e)?e:e==null?"":ge(e)||Pe(e)&&(e.toString===Tx||!_e(e.toString))?qx(e)?Ii(e.value):JSON.stringify(e,Bx,2):String(e),Bx=(e,t)=>qx(t)?Bx(e,t.value):bi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],o)=>(n[Ul(r,o)+" =>"]=i,n),{})}:Rx(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ul(n))}:ln(t)?Ul(t):Pe(t)&&!ge(t)&&!Nx(t)?String(t):t,Ul=(e,t="")=>{var n;return ln(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Lx{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yt,!t&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=yt;try{return yt=this,t()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function zx(e){return new Lx(e)}function Iv(){return yt}function Xs(e,t=!1){yt&&yt.cleanups.push(e)}let Ve;const Gl=new WeakSet;class Vx{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gl.has(this)&&(Gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hx(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ug(this),jx(this);const t=Ve,n=nn;Ve=this,nn=!0;try{return this.fn()}finally{Ux(this),Ve=t,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rv(t);this.deps=this.depsTail=void 0,Ug(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dp(this)&&this.run()}get dirty(){return Dp(this)}}let Fx=0,So,Eo;function Hx(e,t=!1){if(e.flags|=8,t){e.next=Eo,Eo=e;return}e.next=So,So=e}function Av(){Fx++}function Ov(){if(--Fx>0)return;if(Eo){let t=Eo;for(Eo=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;So;){let t=So;for(So=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function jx(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ux(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Rv(r),gk(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Dp(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gx(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Gx(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===No)||(e.globalVersion=No,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Dp(e))))return;e.flags|=2;const t=e.dep,n=Ve,r=nn;Ve=e,nn=!0;try{jx(e);const i=e.fn(e._value);(t.version===0||Xn(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ve=n,nn=r,Ux(e),e.flags&=-3}}function Rv(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Rv(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function gk(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let nn=!0;const Kx=[];function Zn(){Kx.push(nn),nn=!1}function Jn(){const e=Kx.pop();nn=e===void 0?!0:e}function Ug(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ve;Ve=void 0;try{t()}finally{Ve=n}}}let No=0;class mk{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Za{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ve||!nn||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new mk(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Wx(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(t){this.version++,No++,this.notify(t)}notify(t){Av();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ov()}}}function Wx(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Wx(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ua=new WeakMap,Fr=Symbol(""),qp=Symbol(""),Mo=Symbol("");function wt(e,t,n){if(nn&&Ve){let r=ua.get(e);r||ua.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Za),i.map=r,i.key=n),i.track()}}function Gn(e,t,n,r,i,o){const s=ua.get(e);if(!s){No++;return}const a=l=>{l&&l.trigger()};if(Av(),t==="clear")s.forEach(a);else{const l=ge(e),u=l&&Ka(n);if(l&&n==="length"){const c=Number(r);s.forEach((d,f)=>{(f==="length"||f===Mo||!ln(f)&&f>=c)&&a(d)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(Mo)),t){case"add":l?u&&a(s.get("length")):(a(s.get(Fr)),bi(e)&&a(s.get(qp)));break;case"delete":l||(a(s.get(Fr)),bi(e)&&a(s.get(qp)));break;case"set":bi(e)&&a(s.get(Fr));break}}Ov()}function _k(e,t){const n=ua.get(e);return n&&n.get(t)}function di(e){const t=Oe(e);return t===e?t:(wt(t,"iterate",Mo),zt(e)?t:t.map(un))}function Ja(e){return wt(e=Oe(e),"iterate",Mo),e}function dr(e,t){return Qn(e)?Ai(Hr(e)?un(t):t):un(t)}const yk={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,e=>dr(this,e))},concat(...e){return di(this).concat(...e.map(t=>ge(t)?di(t):t))},entries(){return Kl(this,"entries",e=>(e[1]=dr(this,e[1]),e))},every(e,t){return Bn(this,"every",e,t,void 0,arguments)},filter(e,t){return Bn(this,"filter",e,t,n=>n.map(r=>dr(this,r)),arguments)},find(e,t){return Bn(this,"find",e,t,n=>dr(this,n),arguments)},findIndex(e,t){return Bn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Bn(this,"findLast",e,t,n=>dr(this,n),arguments)},findLastIndex(e,t){return Bn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Bn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Wl(this,"includes",e)},indexOf(...e){return Wl(this,"indexOf",e)},join(e){return di(this).join(e)},lastIndexOf(...e){return Wl(this,"lastIndexOf",e)},map(e,t){return Bn(this,"map",e,t,void 0,arguments)},pop(){return no(this,"pop")},push(...e){return no(this,"push",e)},reduce(e,...t){return Gg(this,"reduce",e,t)},reduceRight(e,...t){return Gg(this,"reduceRight",e,t)},shift(){return no(this,"shift")},some(e,t){return Bn(this,"some",e,t,void 0,arguments)},splice(...e){return no(this,"splice",e)},toReversed(){return di(this).toReversed()},toSorted(e){return di(this).toSorted(e)},toSpliced(...e){return di(this).toSpliced(...e)},unshift(...e){return no(this,"unshift",e)},values(){return Kl(this,"values",e=>dr(this,e))}};function Kl(e,t,n){const r=Ja(e),i=r[t]();return r!==e&&!zt(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=n(o.value)),o}),i}const bk=Array.prototype;function Bn(e,t,n,r,i,o){const s=Ja(e),a=s!==e&&!zt(e),l=s[t];if(l!==bk[t]){const d=l.apply(e,o);return a?un(d):d}let u=n;s!==e&&(a?u=function(d,f){return n.call(this,dr(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(s,u,r);return a&&i?i(c):c}function Gg(e,t,n,r){const i=Ja(e);let o=n;return i!==e&&(zt(e)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,e)}):o=function(s,a,l){return n.call(this,s,dr(e,a),l,e)}),i[t](o,...r)}function Wl(e,t,n){const r=Oe(e);wt(r,"iterate",Mo);const i=r[t](...n);return(i===-1||i===!1)&&Qa(n[0])?(n[0]=Oe(n[0]),r[t](...n)):i}function no(e,t,n=[]){Zn(),Av();const r=Oe(e)[t].apply(e,n);return Ov(),Jn(),r}const wk=Ev("__proto__,__v_isRef,__isVue"),Yx=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ln));function xk(e){ln(e)||(e=String(e));const t=Oe(this);return wt(t,"has",e),t.hasOwnProperty(e)}class Xx{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?Pk:eS:o?Qx:Jx).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=ge(t);if(!i){let l;if(s&&(l=yk[n]))return l;if(n==="hasOwnProperty")return xk}const a=Reflect.get(t,n,Ze(t)?t:r);if((ln(n)?Yx.has(n):wk(n))||(i||wt(t,"get",n),o))return a;if(Ze(a)){const l=s&&Ka(n)?a:a.value;return i&&Pe(l)?Do(l):l}return Pe(a)?i?Do(a):cs(a):a}}class Zx extends Xx{constructor(t=!1){super(!1,t)}set(t,n,r,i){let o=t[n];const s=ge(t)&&Ka(n);if(!this._isShallow){const u=Qn(o);if(!zt(r)&&!Qn(r)&&(o=Oe(o),r=Oe(r)),!s&&Ze(o)&&!Ze(r))return u||(o.value=r),!0}const a=s?Number(n)<t.length:Re(t,n),l=Reflect.set(t,n,r,Ze(t)?t:i);return t===Oe(i)&&(a?Xn(r,o)&&Gn(t,"set",n,r):Gn(t,"add",n,r)),l}deleteProperty(t,n){const r=Re(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Gn(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!ln(n)||!Yx.has(n))&&wt(t,"has",n),r}ownKeys(t){return wt(t,"iterate",ge(t)?"length":Fr),Reflect.ownKeys(t)}}class Sk extends Xx{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ek=new Zx,Ck=new Sk,$k=new Zx(!0);const Bp=e=>e,Es=e=>Reflect.getPrototypeOf(e);function kk(e,t,n){return function(...r){const i=this.__v_raw,o=Oe(i),s=bi(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=i[e](...r),c=n?Bp:t?Ai:un;return!t&&wt(o,"iterate",l?qp:Fr),pt(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function Cs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ik(e,t){const n={get(i){const o=this.__v_raw,s=Oe(o),a=Oe(i);e||(Xn(i,a)&&wt(s,"get",i),wt(s,"get",a));const{has:l}=Es(s),u=t?Bp:e?Ai:un;if(l.call(s,i))return u(o.get(i));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&wt(Oe(i),"iterate",Fr),i.size},has(i){const o=this.__v_raw,s=Oe(o),a=Oe(i);return e||(Xn(i,a)&&wt(s,"has",i),wt(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,l=Oe(a),u=t?Bp:e?Ai:un;return!e&&wt(l,"iterate",Fr),a.forEach((c,d)=>i.call(o,u(c),u(d),s))}};return pt(n,e?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(i){!t&&!zt(i)&&!Qn(i)&&(i=Oe(i));const o=Oe(this);return Es(o).has.call(o,i)||(o.add(i),Gn(o,"add",i,i)),this},set(i,o){!t&&!zt(o)&&!Qn(o)&&(o=Oe(o));const s=Oe(this),{has:a,get:l}=Es(s);let u=a.call(s,i);u||(i=Oe(i),u=a.call(s,i));const c=l.call(s,i);return s.set(i,o),u?Xn(o,c)&&Gn(s,"set",i,o):Gn(s,"add",i,o),this},delete(i){const o=Oe(this),{has:s,get:a}=Es(o);let l=s.call(o,i);l||(i=Oe(i),l=s.call(o,i)),a&&a.call(o,i);const u=o.delete(i);return l&&Gn(o,"delete",i,void 0),u},clear(){const i=Oe(this),o=i.size!==0,s=i.clear();return o&&Gn(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=kk(i,e,t)}),n}function Pv(e,t){const n=Ik(e,t);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Re(n,i)&&i in r?n:r,i,o)}const Ak={get:Pv(!1,!1)},Ok={get:Pv(!1,!0)},Rk={get:Pv(!0,!1)};const Jx=new WeakMap,Qx=new WeakMap,eS=new WeakMap,Pk=new WeakMap;function Tk(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nk(e){return e.__v_skip||!Object.isExtensible(e)?0:Tk(ik(e))}function cs(e){return Qn(e)?e:Tv(e,!1,Ek,Ak,Jx)}function Mk(e){return Tv(e,!1,$k,Ok,Qx)}function Do(e){return Tv(e,!0,Ck,Rk,eS)}function Tv(e,t,n,r,i){if(!Pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Nk(e);if(o===0)return e;const s=i.get(e);if(s)return s;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Hr(e){return Qn(e)?Hr(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function zt(e){return!!(e&&e.__v_isShallow)}function Qa(e){return e?!!e.__v_raw:!1}function Oe(e){const t=e&&e.__v_raw;return t?Oe(t):e}function Co(e){return!Re(e,"__v_skip")&&Object.isExtensible(e)&&Mx(e,"__v_skip",!0),e}const un=e=>Pe(e)?cs(e):e,Ai=e=>Pe(e)?Do(e):e;function Ze(e){return e?e.__v_isRef===!0:!1}function Te(e){return tS(e,!1)}function _r(e){return tS(e,!0)}function tS(e,t){return Ze(e)?e:new Dk(e,t)}class Dk{constructor(t,n){this.dep=new Za,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Oe(t),this._value=n?t:un(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||zt(t)||Qn(t);t=r?t:Oe(t),Xn(t,n)&&(this._rawValue=t,this._value=r?t:un(t),this.dep.trigger())}}function ue(e){return Ze(e)?e.value:e}function Se(e){return _e(e)?e():ue(e)}const qk={get:(e,t,n)=>t==="__v_raw"?e:ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function nS(e){return Hr(e)?e:new Proxy(e,qk)}class Bk{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Za,{get:r,set:i}=t(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Lk(e){return new Bk(e)}function zk(e){const t=ge(e)?new Array(e.length):{};for(const n in e)t[n]=rS(e,n);return t}class Vk{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Oe(t);let i=!0,o=t;if(!ge(t)||!Ka(String(n)))do i=!Qa(o)||zt(o);while(i&&(o=o.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=ue(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ze(this._raw[this._key])){const n=this._object[this._key];if(Ze(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return _k(this._raw,this._key)}}class Fk{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ne(e,t,n){return Ze(e)?e:_e(e)?new Fk(e):Pe(e)&&arguments.length>1?rS(e,t,n):Te(e)}function rS(e,t,n){return new Vk(e,t,n)}class Hk{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Za(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=No-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Hx(this,!0),!0}get value(){const t=this.dep.track();return Gx(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jk(e,t,n=!1){let r,i;return _e(e)?r=e:(r=e.get,i=e.set),new Hk(r,i,n)}const $s={},ca=new WeakMap;let Tr;function Uk(e,t=!1,n=Tr){if(n){let r=ca.get(n);r||ca.set(n,r=[]),r.push(e)}}function Gk(e,t,n=Fe){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:a,call:l}=n,u=b=>i?b:zt(b)||i===!1||i===0?vr(b,1):vr(b);let c,d,f,h,m=!1,p=!1;if(Ze(e)?(d=()=>e.value,m=zt(e)):Hr(e)?(d=()=>u(e),m=!0):ge(e)?(p=!0,m=e.some(b=>Hr(b)||zt(b)),d=()=>e.map(b=>{if(Ze(b))return b.value;if(Hr(b))return u(b);if(_e(b))return l?l(b,2):b()})):_e(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){Zn();try{f()}finally{Jn()}}const b=Tr;Tr=c;try{return l?l(e,3,[h]):e(h)}finally{Tr=b}}:d=In,t&&i){const b=d,I=i===!0?1/0:i;d=()=>vr(b(),I)}const v=Iv(),g=()=>{c.stop(),v&&v.active&&$v(v.effects,c)};if(o&&t){const b=t;t=(...I)=>{b(...I),g()}}let y=p?new Array(e.length).fill($s):$s;const _=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(t){const I=c.run();if(i||m||(p?I.some((T,P)=>Xn(T,y[P])):Xn(I,y))){f&&f();const T=Tr;Tr=c;try{const P=[I,y===$s?void 0:p&&y[0]===$s?[]:y,h];y=I,l?l(t,3,P):t(...P)}finally{Tr=T}}}else c.run()};return a&&a(_),c=new Vx(d),c.scheduler=s?()=>s(_,!1):_,h=b=>Uk(b,!1,c),f=c.onStop=()=>{const b=ca.get(c);if(b){if(l)l(b,4);else for(const I of b)I();ca.delete(c)}},t?r?_(!0):y=c.run():s?s(_.bind(null,!0),!0):c.run(),g.pause=c.pause.bind(c),g.resume=c.resume.bind(c),g.stop=g,g}function vr(e,t=1/0,n){if(t<=0||!Pe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ze(e))vr(e.value,t,n);else if(ge(e))for(let r=0;r<e.length;r++)vr(e[r],t,n);else if(Rx(e)||bi(e))e.forEach(r=>{vr(r,t,n)});else if(Nx(e)){for(const r in e)vr(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vr(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e,t,n,r){try{return r?e(...r):e()}catch(i){el(i,t,n)}}function Rn(e,t,n,r){if(_e(e)){const i=ds(e,t,n,r);return i&&Px(i)&&i.catch(o=>{el(o,t,n)}),i}if(ge(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Rn(e[o],t,n,r));return i}}function el(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Fe;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(o){Zn(),ds(o,null,10,[e,l,u]),Jn();return}}Kk(e,n,i,r,s)}function Kk(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const kt=[];let Sn=-1;const wi=[];let fr=null,vi=0;const iS=Promise.resolve();let da=null;function rn(e){const t=da||iS;return e?t.then(this?e.bind(this):e):t}function Wk(e){let t=Sn+1,n=kt.length;for(;t<n;){const r=t+n>>>1,i=kt[r],o=qo(i);o<e||o===e&&i.flags&2?t=r+1:n=r}return t}function Nv(e){if(!(e.flags&1)){const t=qo(e),n=kt[kt.length-1];!n||!(e.flags&2)&&t>=qo(n)?kt.push(e):kt.splice(Wk(t),0,e),e.flags|=1,oS()}}function oS(){da||(da=iS.then(aS))}function Yk(e){ge(e)?wi.push(...e):fr&&e.id===-1?fr.splice(vi+1,0,e):e.flags&1||(wi.push(e),e.flags|=1),oS()}function Kg(e,t,n=Sn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function sS(e){if(wi.length){const t=[...new Set(wi)].sort((n,r)=>qo(n)-qo(r));if(wi.length=0,fr){fr.push(...t);return}for(fr=t,vi=0;vi<fr.length;vi++){const n=fr[vi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fr=null,vi=0}}const qo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function aS(e){try{for(Sn=0;Sn<kt.length;Sn++){const t=kt[Sn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ds(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Sn<kt.length;Sn++){const t=kt[Sn];t&&(t.flags&=-2)}Sn=-1,kt.length=0,sS(),da=null,(kt.length||wi.length)&&aS()}}let It=null,lS=null;function fa(e){const t=It;return It=e,lS=e&&e.type.__scopeId||null,t}function Jt(e,t=It,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&va(-1);const o=fa(t);let s;try{s=e(...i)}finally{fa(o),r._d&&va(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Zn(),Rn(l,n,8,[e.el,a,e,t]),Jn())}}function br(e,t){if(xt){let n=xt.provides;const r=xt.parent&&xt.parent.provides;r===n&&(n=xt.provides=Object.create(r)),n[e]=t}}function on(e,t,n=!1){const r=Pn();if(r||Si){let i=Si?Si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_e(t)?t.call(r&&r.proxy):t}}const Xk=Symbol.for("v-scx"),Zk=()=>on(Xk);function Jk(e,t){return Mv(e,null,t)}function Ee(e,t,n){return Mv(e,t,n)}function Mv(e,t,n=Fe){const{immediate:r,deep:i,flush:o,once:s}=n,a=pt({},n),l=t&&r||!t&&o!=="post";let u;if(zo){if(o==="sync"){const h=Zk();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=In,h.resume=In,h.pause=In,h}}const c=xt;a.call=(h,m,p)=>Rn(h,c,m,p);let d=!1;o==="post"?a.scheduler=h=>{Pt(h,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():Nv(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Gk(e,t,a);return zo&&(u?u.push(f):l&&f()),f}function Qk(e,t,n){const r=this.proxy,i=Je(e)?e.includes(".")?uS(r,e):()=>r[e]:e.bind(r,r);let o;_e(t)?o=t:(o=t.handler,n=t);const s=fs(this),a=Mv(i,o.bind(r),n);return s(),a}function uS(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const eI=Symbol("_vte"),tI=e=>e.__isTeleport,nI=Symbol("_leaveCb");function Dv(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dv(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ze(e,t){return _e(e)?pt({name:e.name},t,{setup:e}):e}function cS(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wg(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const ha=new WeakMap;function $o(e,t,n,r,i=!1){if(ge(e)){e.forEach((p,v)=>$o(p,t&&(ge(t)?t[v]:t),n,r,i));return}if(xi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&$o(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?Hv(r.component):r.el,s=i?null:o,{i:a,r:l}=e,u=t&&t.r,c=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,f=Oe(d),h=d===Fe?Ox:p=>Wg(c,p)?!1:Re(f,p),m=(p,v)=>!(v&&Wg(c,v));if(u!=null&&u!==l){if(Yg(t),Je(u))c[u]=null,h(u)&&(d[u]=null);else if(Ze(u)){const p=t;m(u,p.k)&&(u.value=null),p.k&&(c[p.k]=null)}}if(_e(l))ds(l,a,12,[s,c]);else{const p=Je(l),v=Ze(l);if(p||v){const g=()=>{if(e.f){const y=p?h(l)?d[l]:c[l]:m()||!e.k?l.value:c[e.k];if(i)ge(y)&&$v(y,o);else if(ge(y))y.includes(o)||y.push(o);else if(p)c[l]=[o],h(l)&&(d[l]=c[l]);else{const _=[o];m(l,e.k)&&(l.value=_),e.k&&(c[e.k]=_)}}else p?(c[l]=s,h(l)&&(d[l]=s)):v&&(m(l,e.k)&&(l.value=s),e.k&&(c[e.k]=s))};if(s){const y=()=>{g(),ha.delete(e)};y.id=-1,ha.set(e,y),Pt(y,n)}else Yg(e),g()}}}function Yg(e){const t=ha.get(e);t&&(t.flags|=8,ha.delete(e))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const xi=e=>!!e.type.__asyncLoader,dS=e=>e.type.__isKeepAlive;function rI(e,t){fS(e,"a",t)}function iI(e,t){fS(e,"da",t)}function fS(e,t,n=xt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(tl(t,r,n),n){let i=n.parent;for(;i&&i.parent;)dS(i.parent.vnode)&&oI(r,t,n,i),i=i.parent}}function oI(e,t,n,r){const i=tl(t,e,r,!0);Bv(()=>{$v(r[t],i)},n)}function tl(e,t,n=xt,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...s)=>{Zn();const a=fs(n),l=Rn(t,n,e,s);return a(),Jn(),l});return r?i.unshift(o):i.push(o),o}}const or=e=>(t,n=xt)=>{(!zo||e==="sp")&&tl(e,(...r)=>t(...r),n)},hS=or("bm"),pn=or("m"),sI=or("bu"),aI=or("u"),qv=or("bum"),Bv=or("um"),lI=or("sp"),uI=or("rtg"),cI=or("rtc");function dI(e,t=xt){tl("ec",e,t)}const pS="components";function vS(e,t){return mS(pS,e,!0,t)||e}const gS=Symbol.for("v-ndc");function Nr(e){return Je(e)?mS(pS,e,!1)||e:e||gS}function mS(e,t,n=!0,r=!1){const i=It||xt;if(i){const o=i.type;{const a=WI(o,!1);if(a&&(a===t||a===Ut(t)||a===Ya(Ut(t))))return o}const s=Xg(i[e]||o[e],t)||Xg(i.appContext[e],t);return!s&&r?o:s}}function Xg(e,t){return e&&(e[t]||e[Ut(t)]||e[Ya(Ut(t))])}function nl(e,t,n,r){let i;const o=n&&n[r],s=ge(e);if(s||Je(e)){const a=s&&Hr(e);let l=!1,u=!1;a&&(l=!zt(e),u=Qn(e),e=Ja(e)),i=new Array(e.length);for(let c=0,d=e.length;c<d;c++)i[c]=t(l?u?Ai(un(e[c])):un(e[c]):e[c],c,void 0,o&&o[c])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,o&&o[a])}else if(Pe(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,o&&o[l]));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];i[l]=t(e[c],c,l,o&&o[l])}}else i=[];return n&&(n[r]=i),i}function nt(e,t,n={},r,i){if(It.ce||It.parent&&xi(It.parent)&&It.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),fe(),ut(je,null,[Me("slot",n,r&&r())],u?-2:64)}let o=e[t];o&&o._c&&(o._d=!1),fe();const s=o&&_S(o(n)),a=n.key||s&&s.key,l=ut(je,{key:(a&&!ln(a)?a:`_${t}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function _S(e){return e.some(t=>Bo(t)?!(t.type===er||t.type===je&&!_S(t.children)):!0)?e:null}const Lp=e=>e?VS(e)?Hv(e):Lp(e.parent):null,ko=pt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lp(e.parent),$root:e=>Lp(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xS(e),$forceUpdate:e=>e.f||(e.f=()=>{Nv(e.update)}),$nextTick:e=>e.n||(e.n=rn.bind(e.proxy)),$watch:e=>Qk.bind(e)}),Yl=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Re(e,t),fI={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=e;if(t[0]!=="$"){const f=s[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Yl(r,t))return s[t]=1,r[t];if(i!==Fe&&Re(i,t))return s[t]=2,i[t];if(Re(o,t))return s[t]=3,o[t];if(n!==Fe&&Re(n,t))return s[t]=4,n[t];zp&&(s[t]=0)}}const u=ko[t];let c,d;if(u)return t==="$attrs"&&wt(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==Fe&&Re(n,t))return s[t]=4,n[t];if(d=l.config.globalProperties,Re(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return Yl(i,t)?(i[t]=n,!0):r!==Fe&&Re(r,t)?(r[t]=n,!0):Re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:o,type:s}},a){let l;return!!(n[a]||e!==Fe&&a[0]!=="$"&&Re(e,a)||Yl(t,a)||Re(o,a)||Re(r,a)||Re(ko,a)||Re(i.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function yS(){return bS().slots}function Lv(){return bS().attrs}function bS(e){const t=Pn();return t.setupContext||(t.setupContext=HS(t))}function Zg(e){return ge(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function hI(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}let zp=!0;function pI(e){const t=xS(e),n=e.proxy,r=e.ctx;zp=!1,t.beforeCreate&&Jg(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:p,deactivated:v,beforeDestroy:g,beforeUnmount:y,destroyed:_,unmounted:b,render:I,renderTracked:T,renderTriggered:P,errorCaptured:q,serverPrefetch:j,expose:B,inheritAttrs:F,components:R,directives:J,filters:w}=t;if(u&&vI(u,r,null),s)for(const L in s){const N=s[L];_e(N)&&(r[L]=N.bind(n))}if(i){const L=i.call(n,n);Pe(L)&&(e.data=cs(L))}if(zp=!0,o)for(const L in o){const N=o[L],W=_e(N)?N.bind(n,n):_e(N.get)?N.get.bind(n,n):In,U=!_e(N)&&_e(N.set)?N.set.bind(n):In,Q=he({get:W,set:U});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>Q.value,set:te=>Q.value=te})}if(a)for(const L in a)wS(a[L],r,n,L);if(l){const L=_e(l)?l.call(n):l;Reflect.ownKeys(L).forEach(N=>{br(N,L[N])})}c&&Jg(c,e,"c");function C(L,N){ge(N)?N.forEach(W=>L(W.bind(n))):N&&L(N.bind(n))}if(C(hS,d),C(pn,f),C(sI,h),C(aI,m),C(rI,p),C(iI,v),C(dI,q),C(cI,T),C(uI,P),C(qv,y),C(Bv,b),C(lI,j),ge(B))if(B.length){const L=e.exposed||(e.exposed={});B.forEach(N=>{Object.defineProperty(L,N,{get:()=>n[N],set:W=>n[N]=W,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===In&&(e.render=I),F!=null&&(e.inheritAttrs=F),R&&(e.components=R),J&&(e.directives=J),j&&cS(e)}function vI(e,t,n=In){ge(e)&&(e=Vp(e));for(const r in e){const i=e[r];let o;Pe(i)?"default"in i?o=on(i.from||r,i.default,!0):o=on(i.from||r):o=on(i),Ze(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[r]=o}}function Jg(e,t,n){Rn(ge(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wS(e,t,n,r){let i=r.includes(".")?uS(n,r):()=>n[r];if(Je(e)){const o=t[e];_e(o)&&Ee(i,o)}else if(_e(e))Ee(i,e.bind(n));else if(Pe(e))if(ge(e))e.forEach(o=>wS(o,t,n,r));else{const o=_e(e.handler)?e.handler.bind(n):t[e.handler];_e(o)&&Ee(i,o,e)}}function xS(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>pa(l,u,s,!0)),pa(l,t,s)),Pe(t)&&o.set(t,l),l}function pa(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&pa(e,o,n,!0),i&&i.forEach(s=>pa(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=gI[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const gI={data:Qg,props:em,emits:em,methods:fo,computed:fo,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:fo,directives:fo,watch:_I,provide:Qg,inject:mI};function Qg(e,t){return t?e?function(){return pt(_e(e)?e.call(this,this):e,_e(t)?t.call(this,this):t)}:t:e}function mI(e,t){return fo(Vp(e),Vp(t))}function Vp(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $t(e,t){return e?[...new Set([].concat(e,t))]:t}function fo(e,t){return e?pt(Object.create(null),e,t):t}function em(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:pt(Object.create(null),Zg(e),Zg(t??{})):t}function _I(e,t){if(!e)return t;if(!t)return e;const n=pt(Object.create(null),e);for(const r in t)n[r]=$t(e[r],t[r]);return n}function SS(){return{app:null,config:{isNativeTag:Ox,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yI=0;function bI(e,t){return function(r,i=null){_e(r)||(r=pt({},r)),i!=null&&!Pe(i)&&(i=null);const o=SS(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:yI++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:ZI,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&_e(c.install)?(s.add(c),c.install(u,...d)):_e(c)&&(s.add(c),c(u,...d))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,d){return d?(o.components[c]=d,u):o.components[c]},directive(c,d){return d?(o.directives[c]=d,u):o.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||Me(r,i);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Hv(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Rn(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return o.provides[c]=d,u},runWithContext(c){const d=Si;Si=u;try{return c()}finally{Si=d}}};return u}}let Si=null;const wI=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ut(t)}Modifiers`]||e[`${ni(t)}Modifiers`];function xI(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let i=n;const o=t.startsWith("update:"),s=o&&wI(r,t.slice(7));s&&(s.trim&&(i=n.map(c=>Je(c)?c.trim():c)),s.number&&(i=n.map(ak)));let a,l=r[a=Hl(t)]||r[a=Hl(Ut(t))];!l&&o&&(l=r[a=Hl(ni(t))]),l&&Rn(l,e,6,i);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Rn(u,e,6,i)}}const SI=new WeakMap;function ES(e,t,n=!1){const r=n?SI:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!_e(e)){const l=u=>{const c=ES(u,t,!0);c&&(a=!0,pt(s,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(Pe(e)&&r.set(e,null),null):(ge(o)?o.forEach(l=>s[l]=null):pt(s,o),Pe(e)&&r.set(e,s),s)}function rl(e,t){return!e||!Ga(t)?!1:(t=t.slice(2).replace(/Once$/,""),Re(e,t[0].toLowerCase()+t.slice(1))||Re(e,ni(t))||Re(e,t))}function tm(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:m,inheritAttrs:p}=e,v=fa(e);let g,y;try{if(n.shapeFlag&4){const b=i||r,I=b;g=Cn(u.call(I,b,c,d,h,f,m)),y=a}else{const b=t;g=Cn(b.length>1?b(d,{attrs:a,slots:s,emit:l}):b(d,null)),y=t.props?a:EI(a)}}catch(b){Io.length=0,el(b,e,1),g=Me(er)}let _=g;if(y&&p!==!1){const b=Object.keys(y),{shapeFlag:I}=_;b.length&&I&7&&(o&&b.some(Cv)&&(y=CI(y,o)),_=Ri(_,y,!1,!0))}return n.dirs&&(_=Ri(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Dv(_,n.transition),g=_,fa(v),g}const EI=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ga(n))&&((t||(t={}))[n]=e[n]);return t},CI=(e,t)=>{const n={};for(const r in e)(!Cv(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $I(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?nm(r,s,u):!!s;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(CS(s,r,f)&&!rl(u,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?nm(r,s,u):!0:!!s;return!1}function nm(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(CS(t,e,o)&&!rl(n,o))return!0}return!1}function CS(e,t,n){const r=e[n],i=t[n];return n==="style"&&Pe(r)&&Pe(i)?!kv(r,i):r!==i}function kI({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const $S={},kS=()=>Object.create($S),IS=e=>Object.getPrototypeOf(e)===$S;function II(e,t,n,r=!1){const i={},o=kS();e.propsDefaults=Object.create(null),AS(e,t,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:Mk(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function AI(e,t,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=Oe(i),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(rl(e.emitsOptions,f))continue;const h=t[f];if(l)if(Re(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const m=Ut(f);i[m]=Fp(l,a,m,h,e,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{AS(e,t,i,o)&&(u=!0);let c;for(const d in a)(!t||!Re(t,d)&&((c=ni(d))===d||!Re(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(i[d]=Fp(l,a,d,void 0,e,!0)):delete i[d]);if(o!==a)for(const d in o)(!t||!Re(t,d))&&(delete o[d],u=!0)}u&&Gn(e.attrs,"set","")}function AS(e,t,n,r){const[i,o]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(xo(l))continue;const u=t[l];let c;i&&Re(i,c=Ut(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:rl(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(o){const l=Oe(n),u=a||Fe;for(let c=0;c<o.length;c++){const d=o[c];n[d]=Fp(i,l,d,u[d],e,!Re(u,d))}}return s}function Fp(e,t,n,r,i,o){const s=e[n];if(s!=null){const a=Re(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&_e(l)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const c=fs(i);r=u[n]=l.call(null,t),c()}}else r=l;i.ce&&i.ce._setProp(n,r)}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===ni(n))&&(r=!0))}return r}const OI=new WeakMap;function OS(e,t,n=!1){const r=n?OI:t.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let l=!1;if(!_e(e)){const c=d=>{l=!0;const[f,h]=OS(d,t,!0);pt(s,f),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return Pe(e)&&r.set(e,yi),yi;if(ge(o))for(let c=0;c<o.length;c++){const d=Ut(o[c]);rm(d)&&(s[d]=Fe)}else if(o)for(const c in o){const d=Ut(c);if(rm(d)){const f=o[c],h=s[d]=ge(f)||_e(f)?{type:f}:pt({},f),m=h.type;let p=!1,v=!0;if(ge(m))for(let g=0;g<m.length;++g){const y=m[g],_=_e(y)&&y.name;if(_==="Boolean"){p=!0;break}else _==="String"&&(v=!1)}else p=_e(m)&&m.name==="Boolean";h[0]=p,h[1]=v,(p||Re(h,"default"))&&a.push(d)}}const u=[s,a];return Pe(e)&&r.set(e,u),u}function rm(e){return e[0]!=="$"&&!xo(e)}const zv=e=>e==="_"||e==="_ctx"||e==="$stable",Vv=e=>ge(e)?e.map(Cn):[Cn(e)],RI=(e,t,n)=>{if(t._n)return t;const r=Jt((...i)=>Vv(t(...i)),n);return r._c=!1,r},RS=(e,t,n)=>{const r=e._ctx;for(const i in e){if(zv(i))continue;const o=e[i];if(_e(o))t[i]=RI(i,o,r);else if(o!=null){const s=Vv(o);t[i]=()=>s}}},PS=(e,t)=>{const n=Vv(t);e.slots.default=()=>n},TS=(e,t,n)=>{for(const r in t)(n||!zv(r))&&(e[r]=t[r])},PI=(e,t,n)=>{const r=e.slots=kS();if(e.vnode.shapeFlag&32){const i=t._;i?(TS(r,t,n),n&&Mx(r,"_",i,!0)):RS(t,r)}else t&&PS(e,t)},TI=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,s=Fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:TS(i,t,n):(o=!t.$stable,RS(t,i)),s=t}else t&&(PS(e,t),s={default:1});if(o)for(const a in i)!zv(a)&&s[a]==null&&delete i[a]},Pt=BI;function NI(e){return MI(e)}function MI(e,t){const n=Xa();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=In,insertStaticContent:m}=e,p=(k,A,S,x=null,E=null,$=null,O=void 0,K=null,Y=!!A.dynamicChildren)=>{if(k===A)return;k&&!ro(k,A)&&(x=X(k),te(k,E,$,!0),k=null),A.patchFlag===-2&&(Y=!1,A.dynamicChildren=null);const{type:G,ref:ee,shapeFlag:Z}=A;switch(G){case il:v(k,A,S,x);break;case er:g(k,A,S,x);break;case Zl:k==null&&y(A,S,x,O);break;case je:R(k,A,S,x,E,$,O,K,Y);break;default:Z&1?I(k,A,S,x,E,$,O,K,Y):Z&6?J(k,A,S,x,E,$,O,K,Y):(Z&64||Z&128)&&G.process(k,A,S,x,E,$,O,K,Y,le)}ee!=null&&E?$o(ee,k&&k.ref,$,A||k,!A):ee==null&&k&&k.ref!=null&&$o(k.ref,null,$,k,!0)},v=(k,A,S,x)=>{if(k==null)r(A.el=a(A.children),S,x);else{const E=A.el=k.el;A.children!==k.children&&u(E,A.children)}},g=(k,A,S,x)=>{k==null?r(A.el=l(A.children||""),S,x):A.el=k.el},y=(k,A,S,x)=>{[k.el,k.anchor]=m(k.children,A,S,x,k.el,k.anchor)},_=({el:k,anchor:A},S,x)=>{let E;for(;k&&k!==A;)E=f(k),r(k,S,x),k=E;r(A,S,x)},b=({el:k,anchor:A})=>{let S;for(;k&&k!==A;)S=f(k),i(k),k=S;i(A)},I=(k,A,S,x,E,$,O,K,Y)=>{if(A.type==="svg"?O="svg":A.type==="math"&&(O="mathml"),k==null)T(A,S,x,E,$,O,K,Y);else{const G=k.el&&k.el._isVueCE?k.el:null;try{G&&G._beginPatch(),j(k,A,E,$,O,K,Y)}finally{G&&G._endPatch()}}},T=(k,A,S,x,E,$,O,K)=>{let Y,G;const{props:ee,shapeFlag:Z,transition:re,dirs:oe}=k;if(Y=k.el=s(k.type,$,ee&&ee.is,ee),Z&8?c(Y,k.children):Z&16&&q(k.children,Y,null,x,E,Xl(k,$),O,K),oe&&Ar(k,null,x,"created"),P(Y,k,k.scopeId,O,x),ee){for(const ye in ee)ye!=="value"&&!xo(ye)&&o(Y,ye,null,ee[ye],$,x);"value"in ee&&o(Y,"value",null,ee.value,$),(G=ee.onVnodeBeforeMount)&&xn(G,x,k)}oe&&Ar(k,null,x,"beforeMount");const me=DI(E,re);me&&re.beforeEnter(Y),r(Y,A,S),((G=ee&&ee.onVnodeMounted)||me||oe)&&Pt(()=>{G&&xn(G,x,k),me&&re.enter(Y),oe&&Ar(k,null,x,"mounted")},E)},P=(k,A,S,x,E)=>{if(S&&h(k,S),x)for(let $=0;$<x.length;$++)h(k,x[$]);if(E){let $=E.subTree;if(A===$||qS($.type)&&($.ssContent===A||$.ssFallback===A)){const O=E.vnode;P(k,O,O.scopeId,O.slotScopeIds,E.parent)}}},q=(k,A,S,x,E,$,O,K,Y=0)=>{for(let G=Y;G<k.length;G++){const ee=k[G]=K?Un(k[G]):Cn(k[G]);p(null,ee,A,S,x,E,$,O,K)}},j=(k,A,S,x,E,$,O)=>{const K=A.el=k.el;let{patchFlag:Y,dynamicChildren:G,dirs:ee}=A;Y|=k.patchFlag&16;const Z=k.props||Fe,re=A.props||Fe;let oe;if(S&&Or(S,!1),(oe=re.onVnodeBeforeUpdate)&&xn(oe,S,A,k),ee&&Ar(A,k,S,"beforeUpdate"),S&&Or(S,!0),(Z.innerHTML&&re.innerHTML==null||Z.textContent&&re.textContent==null)&&c(K,""),G?B(k.dynamicChildren,G,K,S,x,Xl(A,E),$):O||N(k,A,K,null,S,x,Xl(A,E),$,!1),Y>0){if(Y&16)F(K,Z,re,S,E);else if(Y&2&&Z.class!==re.class&&o(K,"class",null,re.class,E),Y&4&&o(K,"style",Z.style,re.style,E),Y&8){const me=A.dynamicProps;for(let ye=0;ye<me.length;ye++){const we=me[ye],at=Z[we],lt=re[we];(lt!==at||we==="value")&&o(K,we,at,lt,E,S)}}Y&1&&k.children!==A.children&&c(K,A.children)}else!O&&G==null&&F(K,Z,re,S,E);((oe=re.onVnodeUpdated)||ee)&&Pt(()=>{oe&&xn(oe,S,A,k),ee&&Ar(A,k,S,"updated")},x)},B=(k,A,S,x,E,$,O)=>{for(let K=0;K<A.length;K++){const Y=k[K],G=A[K],ee=Y.el&&(Y.type===je||!ro(Y,G)||Y.shapeFlag&198)?d(Y.el):S;p(Y,G,ee,null,x,E,$,O,!0)}},F=(k,A,S,x,E)=>{if(A!==S){if(A!==Fe)for(const $ in A)!xo($)&&!($ in S)&&o(k,$,A[$],null,E,x);for(const $ in S){if(xo($))continue;const O=S[$],K=A[$];O!==K&&$!=="value"&&o(k,$,K,O,E,x)}"value"in S&&o(k,"value",A.value,S.value,E)}},R=(k,A,S,x,E,$,O,K,Y)=>{const G=A.el=k?k.el:a(""),ee=A.anchor=k?k.anchor:a("");let{patchFlag:Z,dynamicChildren:re,slotScopeIds:oe}=A;oe&&(K=K?K.concat(oe):oe),k==null?(r(G,S,x),r(ee,S,x),q(A.children||[],S,ee,E,$,O,K,Y)):Z>0&&Z&64&&re&&k.dynamicChildren&&k.dynamicChildren.length===re.length?(B(k.dynamicChildren,re,S,E,$,O,K),(A.key!=null||E&&A===E.subTree)&&NS(k,A,!0)):N(k,A,S,ee,E,$,O,K,Y)},J=(k,A,S,x,E,$,O,K,Y)=>{A.slotScopeIds=K,k==null?A.shapeFlag&512?E.ctx.activate(A,S,x,O,Y):w(A,S,x,E,$,O,Y):M(k,A,Y)},w=(k,A,S,x,E,$,O)=>{const K=k.component=jI(k,x,E);if(dS(k)&&(K.ctx.renderer=le),UI(K,!1,O),K.asyncDep){if(E&&E.registerDep(K,C,O),!k.el){const Y=K.subTree=Me(er);g(null,Y,A,S),k.placeholder=Y.el}}else C(K,k,A,S,E,$,O)},M=(k,A,S)=>{const x=A.component=k.component;if($I(k,A,S))if(x.asyncDep&&!x.asyncResolved){L(x,A,S);return}else x.next=A,x.update();else A.el=k.el,x.vnode=A},C=(k,A,S,x,E,$,O)=>{const K=()=>{if(k.isMounted){let{next:Z,bu:re,u:oe,parent:me,vnode:ye}=k;{const Bt=MS(k);if(Bt){Z&&(Z.el=ye.el,L(k,Z,O)),Bt.asyncDep.then(()=>{Pt(()=>{k.isUnmounted||G()},E)});return}}let we=Z,at;Or(k,!1),Z?(Z.el=ye.el,L(k,Z,O)):Z=ye,re&&jl(re),(at=Z.props&&Z.props.onVnodeBeforeUpdate)&&xn(at,me,Z,ye),Or(k,!0);const lt=tm(k),jt=k.subTree;k.subTree=lt,p(jt,lt,d(jt.el),X(jt),k,E,$),Z.el=lt.el,we===null&&kI(k,lt.el),oe&&Pt(oe,E),(at=Z.props&&Z.props.onVnodeUpdated)&&Pt(()=>xn(at,me,Z,ye),E)}else{let Z;const{el:re,props:oe}=A,{bm:me,m:ye,parent:we,root:at,type:lt}=k,jt=xi(A);Or(k,!1),me&&jl(me),!jt&&(Z=oe&&oe.onVnodeBeforeMount)&&xn(Z,we,A),Or(k,!0);{at.ce&&at.ce._hasShadowRoot()&&at.ce._injectChildStyle(lt);const Bt=k.subTree=tm(k);p(null,Bt,S,x,k,E,$),A.el=Bt.el}if(ye&&Pt(ye,E),!jt&&(Z=oe&&oe.onVnodeMounted)){const Bt=A;Pt(()=>xn(Z,we,Bt),E)}(A.shapeFlag&256||we&&xi(we.vnode)&&we.vnode.shapeFlag&256)&&k.a&&Pt(k.a,E),k.isMounted=!0,A=S=x=null}};k.scope.on();const Y=k.effect=new Vx(K);k.scope.off();const G=k.update=Y.run.bind(Y),ee=k.job=Y.runIfDirty.bind(Y);ee.i=k,ee.id=k.uid,Y.scheduler=()=>Nv(ee),Or(k,!0),G()},L=(k,A,S)=>{A.component=k;const x=k.vnode.props;k.vnode=A,k.next=null,AI(k,A.props,x,S),TI(k,A.children,S),Zn(),Kg(k),Jn()},N=(k,A,S,x,E,$,O,K,Y=!1)=>{const G=k&&k.children,ee=k?k.shapeFlag:0,Z=A.children,{patchFlag:re,shapeFlag:oe}=A;if(re>0){if(re&128){U(G,Z,S,x,E,$,O,K,Y);return}else if(re&256){W(G,Z,S,x,E,$,O,K,Y);return}}oe&8?(ee&16&&H(G,E,$),Z!==G&&c(S,Z)):ee&16?oe&16?U(G,Z,S,x,E,$,O,K,Y):H(G,E,$,!0):(ee&8&&c(S,""),oe&16&&q(Z,S,x,E,$,O,K,Y))},W=(k,A,S,x,E,$,O,K,Y)=>{k=k||yi,A=A||yi;const G=k.length,ee=A.length,Z=Math.min(G,ee);let re;for(re=0;re<Z;re++){const oe=A[re]=Y?Un(A[re]):Cn(A[re]);p(k[re],oe,S,null,E,$,O,K,Y)}G>ee?H(k,E,$,!0,!1,Z):q(A,S,x,E,$,O,K,Y,Z)},U=(k,A,S,x,E,$,O,K,Y)=>{let G=0;const ee=A.length;let Z=k.length-1,re=ee-1;for(;G<=Z&&G<=re;){const oe=k[G],me=A[G]=Y?Un(A[G]):Cn(A[G]);if(ro(oe,me))p(oe,me,S,null,E,$,O,K,Y);else break;G++}for(;G<=Z&&G<=re;){const oe=k[Z],me=A[re]=Y?Un(A[re]):Cn(A[re]);if(ro(oe,me))p(oe,me,S,null,E,$,O,K,Y);else break;Z--,re--}if(G>Z){if(G<=re){const oe=re+1,me=oe<ee?A[oe].el:x;for(;G<=re;)p(null,A[G]=Y?Un(A[G]):Cn(A[G]),S,me,E,$,O,K,Y),G++}}else if(G>re)for(;G<=Z;)te(k[G],E,$,!0),G++;else{const oe=G,me=G,ye=new Map;for(G=me;G<=re;G++){const Lt=A[G]=Y?Un(A[G]):Cn(A[G]);Lt.key!=null&&ye.set(Lt.key,G)}let we,at=0;const lt=re-me+1;let jt=!1,Bt=0;const Rt=new Array(lt);for(G=0;G<lt;G++)Rt[G]=0;for(G=oe;G<=Z;G++){const Lt=k[G];if(at>=lt){te(Lt,E,$,!0);continue}let wn;if(Lt.key!=null)wn=ye.get(Lt.key);else for(we=me;we<=re;we++)if(Rt[we-me]===0&&ro(Lt,A[we])){wn=we;break}wn===void 0?te(Lt,E,$,!0):(Rt[wn-me]=G+1,wn>=Bt?Bt=wn:jt=!0,p(Lt,A[wn],S,null,E,$,O,K,Y),at++)}const bn=jt?qI(Rt):yi;for(we=bn.length-1,G=lt-1;G>=0;G--){const Lt=me+G,wn=A[Lt],Vg=A[Lt+1],Fg=Lt+1<ee?Vg.el||DS(Vg):x;Rt[G]===0?p(null,wn,S,Fg,E,$,O,K,Y):jt&&(we<0||G!==bn[we]?Q(wn,S,Fg,2):we--)}}},Q=(k,A,S,x,E=null)=>{const{el:$,type:O,transition:K,children:Y,shapeFlag:G}=k;if(G&6){Q(k.component.subTree,A,S,x);return}if(G&128){k.suspense.move(A,S,x);return}if(G&64){O.move(k,A,S,le);return}if(O===je){r($,A,S);for(let Z=0;Z<Y.length;Z++)Q(Y[Z],A,S,x);r(k.anchor,A,S);return}if(O===Zl){_(k,A,S);return}if(x!==2&&G&1&&K)if(x===0)K.beforeEnter($),r($,A,S),Pt(()=>K.enter($),E);else{const{leave:Z,delayLeave:re,afterLeave:oe}=K,me=()=>{k.ctx.isUnmounted?i($):r($,A,S)},ye=()=>{$._isLeaving&&$[nI](!0),Z($,()=>{me(),oe&&oe()})};re?re($,me,ye):ye()}else r($,A,S)},te=(k,A,S,x=!1,E=!1)=>{const{type:$,props:O,ref:K,children:Y,dynamicChildren:G,shapeFlag:ee,patchFlag:Z,dirs:re,cacheIndex:oe}=k;if(Z===-2&&(E=!1),K!=null&&(Zn(),$o(K,null,S,k,!0),Jn()),oe!=null&&(A.renderCache[oe]=void 0),ee&256){A.ctx.deactivate(k);return}const me=ee&1&&re,ye=!xi(k);let we;if(ye&&(we=O&&O.onVnodeBeforeUnmount)&&xn(we,A,k),ee&6)V(k.component,S,x);else{if(ee&128){k.suspense.unmount(S,x);return}me&&Ar(k,null,A,"beforeUnmount"),ee&64?k.type.remove(k,A,S,le,x):G&&!G.hasOnce&&($!==je||Z>0&&Z&64)?H(G,A,S,!1,!0):($===je&&Z&384||!E&&ee&16)&&H(Y,A,S),x&&se(k)}(ye&&(we=O&&O.onVnodeUnmounted)||me)&&Pt(()=>{we&&xn(we,A,k),me&&Ar(k,null,A,"unmounted")},S)},se=k=>{const{type:A,el:S,anchor:x,transition:E}=k;if(A===je){z(S,x);return}if(A===Zl){b(k);return}const $=()=>{i(S),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(k.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:K}=E,Y=()=>O(S,$);K?K(k.el,$,Y):Y()}else $()},z=(k,A)=>{let S;for(;k!==A;)S=f(k),i(k),k=S;i(A)},V=(k,A,S)=>{const{bum:x,scope:E,job:$,subTree:O,um:K,m:Y,a:G}=k;im(Y),im(G),x&&jl(x),E.stop(),$&&($.flags|=8,te(O,k,A,S)),K&&Pt(K,A),Pt(()=>{k.isUnmounted=!0},A)},H=(k,A,S,x=!1,E=!1,$=0)=>{for(let O=$;O<k.length;O++)te(k[O],A,S,x,E)},X=k=>{if(k.shapeFlag&6)return X(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const A=f(k.anchor||k.el),S=A&&A[eI];return S?f(S):A};let ie=!1;const ce=(k,A,S)=>{let x;k==null?A._vnode&&(te(A._vnode,null,null,!0),x=A._vnode.component):p(A._vnode||null,k,A,null,null,null,S),A._vnode=k,ie||(ie=!0,Kg(x),sS(),ie=!1)},le={p,um:te,m:Q,r:se,mt:w,mc:q,pc:N,pbc:B,n:X,o:e};return{render:ce,hydrate:void 0,createApp:bI(ce)}}function Xl({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Or({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function DI(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function NS(e,t,n=!1){const r=e.children,i=t.children;if(ge(r)&&ge(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Un(i[o]),a.el=s.el),!n&&a.patchFlag!==-2&&NS(s,a)),a.type===il&&(a.patchFlag===-1&&(a=i[o]=Un(a)),a.el=s.el),a.type===er&&!a.el&&(a.el=s.el)}}function qI(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,e[n[a]]<u?o=a+1:s=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=t[s];return n}function MS(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:MS(t)}function im(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function DS(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?DS(t.subTree):null}const qS=e=>e.__isSuspense;function BI(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):Yk(e)}const je=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),Io=[];let At=null;function fe(e=!1){Io.push(At=e?null:[])}function LI(){Io.pop(),At=Io[Io.length-1]||null}let Oi=1;function va(e,t=!1){Oi+=e,e<0&&At&&t&&(At.hasOnce=!0)}function BS(e){return e.dynamicChildren=Oi>0?At||yi:null,LI(),Oi>0&&At&&At.push(e),e}function be(e,t,n,r,i,o){return BS(vt(e,t,n,r,i,o,!0))}function ut(e,t,n,r,i){return BS(Me(e,t,n,r,i,!0))}function Bo(e){return e?e.__v_isVNode===!0:!1}function ro(e,t){return e.type===t.type&&e.key===t.key}const LS=({key:e})=>e??null,Zs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||Ze(e)||_e(e)?{i:It,r:e,k:t,f:!!n}:e:null);function vt(e,t=null,n=null,r=0,i=null,o=e===je?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&LS(t),ref:t&&Zs(t),scopeId:lS,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:It};return a?(Fv(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Oi>0&&!s&&At&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&At.push(l),l}const Me=zI;function zI(e,t=null,n=null,r=0,i=null,o=!1){if((!e||e===gS)&&(e=er),Bo(e)){const a=Ri(e,t,!0);return n&&Fv(a,n),Oi>0&&!o&&At&&(a.shapeFlag&6?At[At.indexOf(e)]=a:At.push(a)),a.patchFlag=-2,a}if(YI(e)&&(e=e.__vccOpts),t){t=VI(t);let{class:a,style:l}=t;a&&!Je(a)&&(t.class=Gt(a)),Pe(l)&&(Qa(l)&&!ge(l)&&(l=pt({},l)),t.style=Dt(l))}const s=Je(e)?1:qS(e)?128:tI(e)?64:Pe(e)?4:_e(e)?2:0;return vt(e,t,n,r,i,s,o,!0)}function VI(e){return e?Qa(e)||IS(e)?pt({},e):e:null}function Ri(e,t,n=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:a,transition:l}=e,u=t?Lo(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&LS(u),ref:t&&t.ref?n&&o?ge(o)?o.concat(Zs(t)):[o,Zs(t)]:Zs(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==je?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ri(e.ssContent),ssFallback:e.ssFallback&&Ri(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Dv(c,l.clone(c)),c}function zS(e=" ",t=0){return Me(il,null,e,t)}function ft(e="",t=!1){return t?(fe(),ut(er,null,e)):Me(er,null,e)}function Cn(e){return e==null||typeof e=="boolean"?Me(er):ge(e)?Me(je,null,e.slice()):Bo(e)?Un(e):Me(il,null,String(e))}function Un(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ri(e)}function Fv(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ge(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Fv(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!IS(t)?t._ctx=It:i===3&&It&&(It.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _e(t)?(t={default:t,_ctx:It},n=32):(t=String(t),r&64?(n=16,t=[zS(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Gt([t.class,r.class]));else if(i==="style")t.style=Dt([t.style,r.style]);else if(Ga(i)){const o=t[i],s=r[i];s&&o!==s&&!(ge(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=r[i])}return t}function xn(e,t,n,r=null){Rn(e,t,7,[n,r])}const FI=SS();let HI=0;function jI(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||FI,o={uid:HI++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:OS(r,i),emitsOptions:ES(r,i),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=xI.bind(null,o),e.ce&&e.ce(o),o}let xt=null;const Pn=()=>xt||It;let ga,Hp;{const e=Xa(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};ga=t("__VUE_INSTANCE_SETTERS__",n=>xt=n),Hp=t("__VUE_SSR_SETTERS__",n=>zo=n)}const fs=e=>{const t=xt;return ga(e),e.scope.on(),()=>{e.scope.off(),ga(t)}},om=()=>{xt&&xt.scope.off(),ga(null)};function VS(e){return e.vnode.shapeFlag&4}let zo=!1;function UI(e,t=!1,n=!1){t&&Hp(t);const{props:r,children:i}=e.vnode,o=VS(e);II(e,r,o,t),PI(e,i,n||t);const s=o?GI(e,t):void 0;return t&&Hp(!1),s}function GI(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,fI);const{setup:r}=n;if(r){Zn();const i=e.setupContext=r.length>1?HS(e):null,o=fs(e),s=ds(r,e,0,[e.props,i]),a=Px(s);if(Jn(),o(),(a||e.sp)&&!xi(e)&&cS(e),a){if(s.then(om,om),t)return s.then(l=>{sm(e,l)}).catch(l=>{el(l,e,0)});e.asyncDep=s}else sm(e,s)}else FS(e)}function sm(e,t,n){_e(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)&&(e.setupState=nS(t)),FS(e)}function FS(e,t,n){const r=e.type;e.render||(e.render=r.render||In);{const i=fs(e);Zn();try{pI(e)}finally{Jn(),i()}}}const KI={get(e,t){return wt(e,"get",""),e[t]}};function HS(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,KI),slots:e.slots,emit:e.emit,expose:t}}function Hv(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(nS(Co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ko)return ko[n](e)},has(t,n){return n in t||n in ko}})):e.proxy}function WI(e,t=!0){return _e(e)?e.displayName||e.name:e.name||t&&e.__name}function YI(e){return _e(e)&&"__vccOpts"in e}const he=(e,t)=>jk(e,t,zo);function qe(e,t,n){try{va(-1);const r=arguments.length;return r===2?Pe(t)&&!ge(t)?Bo(t)?Me(e,null,[t]):Me(e,t):Me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),Me(e,t,n))}finally{va(1)}}function XI(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(Xn(n[r],t[r]))return!1;return Oi>0&&At&&At.push(e),!0}const ZI="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jp;const am=typeof window<"u"&&window.trustedTypes;if(am)try{jp=am.createPolicy("vue",{createHTML:e=>e})}catch{}const jS=jp?e=>jp.createHTML(e):e=>e,JI="http://www.w3.org/2000/svg",QI="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,lm=Hn&&Hn.createElement("template"),eA={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Hn.createElementNS(JI,e):t==="mathml"?Hn.createElementNS(QI,e):n?Hn.createElement(e,{is:n}):Hn.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{lm.innerHTML=jS(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=lm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},tA=Symbol("_vtc");function nA(e,t,n){const r=e[tA];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const um=Symbol("_vod"),rA=Symbol("_vsh"),iA=Symbol(""),oA=/(?:^|;)\s*display\s*:/;function sA(e,t,n){const r=e.style,i=Je(n);let o=!1;if(n&&!i){if(t)if(Je(t))for(const s of t.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Js(r,a,"")}else for(const s in t)n[s]==null&&Js(r,s,"");for(const s in n)s==="display"&&(o=!0),Js(r,s,n[s])}else if(i){if(t!==n){const s=r[iA];s&&(n+=";"+s),r.cssText=n,o=oA.test(n)}}else t&&e.removeAttribute("style");um in e&&(e[um]=o?r.display:"",e[rA]&&(r.display="none"))}const cm=/\s*!important$/;function Js(e,t,n){if(ge(n))n.forEach(r=>Js(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=aA(e,t);cm.test(n)?e.setProperty(ni(r),n.replace(cm,""),"important"):e[r]=n}}const dm=["Webkit","Moz","ms"],Jl={};function aA(e,t){const n=Jl[t];if(n)return n;let r=Ut(t);if(r!=="filter"&&r in e)return Jl[t]=r;r=Ya(r);for(let i=0;i<dm.length;i++){const o=dm[i]+r;if(o in e)return Jl[t]=o}return t}const fm="http://www.w3.org/1999/xlink";function hm(e,t,n,r,i,o=pk(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fm,t.slice(6,t.length)):e.setAttributeNS(fm,t,n):n==null||o&&!Dx(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ln(n)?String(n):n)}function pm(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jS(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Dx(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function lA(e,t,n,r){e.addEventListener(t,n,r)}function uA(e,t,n,r){e.removeEventListener(t,n,r)}const vm=Symbol("_vei");function cA(e,t,n,r,i=null){const o=e[vm]||(e[vm]={}),s=o[t];if(r&&s)s.value=r;else{const[a,l]=dA(t);if(r){const u=o[t]=pA(r,i);lA(e,a,u,l)}else s&&(uA(e,a,s,l),o[t]=void 0)}}const gm=/(?:Once|Passive|Capture)$/;function dA(e){let t;if(gm.test(e)){t={};let r;for(;r=e.match(gm);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ni(e.slice(2)),t]}let Ql=0;const fA=Promise.resolve(),hA=()=>Ql||(fA.then(()=>Ql=0),Ql=Date.now());function pA(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(vA(r,n.value),t,5,[r])};return n.value=e,n.attached=hA(),n}function vA(e,t){if(ge(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const mm=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,gA=(e,t,n,r,i,o)=>{const s=i==="svg";t==="class"?nA(e,r,s):t==="style"?sA(e,n,r):Ga(t)?Cv(t)||cA(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mA(e,t,r,s))?(pm(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hm(e,t,r,s,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Je(r))?pm(e,Ut(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hm(e,t,r,s))};function mA(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&mm(t)&&_e(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return mm(t)&&Je(n)?!1:t in e}const _A=pt({patchProp:gA},eA);let _m;function yA(){return _m||(_m=NI(_A))}const bA=((...e)=>{const t=yA().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=xA(r);if(!i)return;const o=t._component;!_e(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=n(i,!1,wA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t});function wA(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xA(e){return Je(e)?document.querySelector(e):e}var SA=Object.defineProperty,ym=Object.getOwnPropertySymbols,EA=Object.prototype.hasOwnProperty,CA=Object.prototype.propertyIsEnumerable,bm=(e,t,n)=>t in e?SA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$A=(e,t)=>{for(var n in t||(t={}))EA.call(t,n)&&bm(e,n,t[n]);if(ym)for(var n of ym(t))CA.call(t,n)&&bm(e,n,t[n]);return e};function jv(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function kA(e){return typeof e=="function"&&"call"in e&&"apply"in e}function Qe(e){return!jv(e)}function jr(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function US(e={},t={}){let n=$A({},e);return Object.keys(t).forEach(r=>{let i=r;jr(t[i])&&i in e&&jr(e[i])?n[i]=US(e[i],t[i]):n[i]=t[i]}),n}function IA(...e){return e.reduce((t,n,r)=>r===0?n:US(t,n),{})}function yr(e,...t){return kA(e)?e(...t):e}function Pi(e,t=!0){return typeof e=="string"&&(t||e!=="")}function AA(e){return Qe(e)&&!isNaN(e)}function Ur(e,t){if(t){let n=t.test(e);return t.lastIndex=0,n}return!1}function OA(...e){return IA(...e)}function Ao(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function GS(e){return Pi(e)?e.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():e}function KS(){let e=new Map;return{on(t,n){let r=e.get(t);return r?r.push(n):r=[n],e.set(t,r),this},off(t,n){let r=e.get(t);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(t,n){let r=e.get(t);r&&r.forEach(i=>{i(n)})},clear(){e.clear()}}}function RA(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function PA(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&RA(e))}function WS(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function Up(e,t={}){if(WS(e)){let n=(r,i)=>{var o,s;let a=(o=e?.$attrs)!=null&&o[r]?[(s=e?.$attrs)==null?void 0:s[r]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?n(r,u):Object.entries(u).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(t).forEach(([r,i])=>{if(i!=null){let o=r.match(/^on(.+)/);o?e.addEventListener(o[1].toLowerCase(),i):r==="p-bind"||r==="pBind"?Up(e,i):(i=r==="class"?[...new Set(n("class",i))].join(" ").trim():r==="style"?n("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=i),e.setAttribute(r,i))}})}}function TA(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function NA(e,t="",n){WS(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}var MA=Object.defineProperty,DA=Object.defineProperties,qA=Object.getOwnPropertyDescriptors,ma=Object.getOwnPropertySymbols,YS=Object.prototype.hasOwnProperty,XS=Object.prototype.propertyIsEnumerable,wm=(e,t,n)=>t in e?MA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zt=(e,t)=>{for(var n in t||(t={}))YS.call(t,n)&&wm(e,n,t[n]);if(ma)for(var n of ma(t))XS.call(t,n)&&wm(e,n,t[n]);return e},eu=(e,t)=>DA(e,qA(t)),Ln=(e,t)=>{var n={};for(var r in e)YS.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ma)for(var r of ma(e))t.indexOf(r)<0&&XS.call(e,r)&&(n[r]=e[r]);return n},BA=KS(),jn=BA,Vo=/{([^}]*)}/g,ZS=/(\d+\s+[\+\-\*\/]\s+\d+)/g,JS=/var\([^)]+\)/g;function xm(e){return Pi(e)?e.replace(/[A-Z]/g,(t,n)=>n===0?t:"."+t.toLowerCase()).toLowerCase():e}function LA(e){return jr(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function zA(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Gp(e="",t=""){return zA(`${Pi(e,!1)&&Pi(t,!1)?`${e}-`:e}${t}`)}function QS(e="",t=""){return`--${Gp(e,t)}`}function VA(e=""){let t=(e.match(/{/g)||[]).length,n=(e.match(/}/g)||[]).length;return(t+n)%2!==0}function eE(e,t="",n="",r=[],i){if(Pi(e)){let o=e.trim();if(VA(o))return;if(Ur(o,Vo)){let s=o.replaceAll(Vo,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!r.some(c=>Ur(u,c)));return`var(${QS(n,GS(l.join("-")))}${Qe(i)?`, ${i}`:""})`});return Ur(s.replace(JS,"0"),ZS)?`calc(${s})`:s}return o}else if(AA(e))return e}function FA(e,t,n){Pi(t,!1)&&e.push(`${t}:${n};`)}function gi(e,t){return e?`${e}{${t}}`:""}function tE(e,t){if(e.indexOf("dt(")===-1)return e;function n(s,a){let l=[],u=0,c="",d=null,f=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(d=d===h?null:h),!d&&(h==="("&&f++,h===")"&&f--,(h===","||u===s.length)&&f===0)){let m=c.trim();m.startsWith("dt(")?l.push(tE(m,a)):l.push(r(m)),c="",u++;continue}h!==void 0&&(c+=h),u++}return l}function r(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],o=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")o.push(s),s+=2;else if(e[s]===")"&&o.length>0){let a=o.pop();o.length===0&&i.push([a,s])}if(!i.length)return e;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=e.slice(a+3,l),c=n(u,t),d=t(...c);e=e.slice(0,a)+d+e.slice(l+1)}return e}var Gr=(...e)=>HA(bt.getTheme(),...e),HA=(e={},t,n,r)=>{if(t){let{variable:i,options:o}=bt.defaults||{},{prefix:s,transform:a}=e?.options||o||{},l=Ur(t,Vo)?t:`{${t}}`;return r==="value"||jv(r)&&a==="strict"?bt.getTokenValue(t):eE(l,void 0,s,[i.excludedKeyRegex],n)}return""};function ks(e,...t){if(e instanceof Array){let n=e.reduce((r,i,o)=>{var s;return r+i+((s=yr(t[o],{dt:Gr}))!=null?s:"")},"");return tE(n,Gr)}return yr(e,{dt:Gr})}function jA(e,t={}){let n=bt.defaults.variable,{prefix:r=n.prefix,selector:i=n.selector,excludedKeyRegex:o=n.excludedKeyRegex}=t,s=[],a=[],l=[{node:e,path:r}];for(;l.length;){let{node:c,path:d}=l.pop();for(let f in c){let h=c[f],m=LA(h),p=Ur(f,o)?Gp(d):Gp(d,GS(f));if(jr(m))l.push({node:m,path:p});else{let v=QS(p),g=eE(m,p,r,[o]);FA(a,v,g);let y=p;r&&y.startsWith(r+"-")&&(y=y.slice(r.length+1)),s.push(y.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:gi(i,u)}}var Xt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e},:host${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let t=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[e].flat().map(n=>{var r;return(r=t.map(i=>i.resolve(n)).find(i=>i.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(e,t){return jA(e,{prefix:t?.prefix})},getCommon({name:e="",theme:t={},params:n,set:r,defaults:i}){var o,s,a,l,u,c,d;let{preset:f,options:h}=t,m,p,v,g,y,_,b;if(Qe(f)&&h.transform!=="strict"){let{primitive:I,semantic:T,extend:P}=f,q=T||{},{colorScheme:j}=q,B=Ln(q,["colorScheme"]),F=P||{},{colorScheme:R}=F,J=Ln(F,["colorScheme"]),w=j||{},{dark:M}=w,C=Ln(w,["dark"]),L=R||{},{dark:N}=L,W=Ln(L,["dark"]),U=Qe(I)?this._toVariables({primitive:I},h):{},Q=Qe(B)?this._toVariables({semantic:B},h):{},te=Qe(C)?this._toVariables({light:C},h):{},se=Qe(M)?this._toVariables({dark:M},h):{},z=Qe(J)?this._toVariables({semantic:J},h):{},V=Qe(W)?this._toVariables({light:W},h):{},H=Qe(N)?this._toVariables({dark:N},h):{},[X,ie]=[(o=U.declarations)!=null?o:"",U.tokens],[ce,le]=[(s=Q.declarations)!=null?s:"",Q.tokens||[]],[ve,k]=[(a=te.declarations)!=null?a:"",te.tokens||[]],[A,S]=[(l=se.declarations)!=null?l:"",se.tokens||[]],[x,E]=[(u=z.declarations)!=null?u:"",z.tokens||[]],[$,O]=[(c=V.declarations)!=null?c:"",V.tokens||[]],[K,Y]=[(d=H.declarations)!=null?d:"",H.tokens||[]];m=this.transformCSS(e,X,"light","variable",h,r,i),p=ie;let G=this.transformCSS(e,`${ce}${ve}`,"light","variable",h,r,i),ee=this.transformCSS(e,`${A}`,"dark","variable",h,r,i);v=`${G}${ee}`,g=[...new Set([...le,...k,...S])];let Z=this.transformCSS(e,`${x}${$}color-scheme:light`,"light","variable",h,r,i),re=this.transformCSS(e,`${K}color-scheme:dark`,"dark","variable",h,r,i);y=`${Z}${re}`,_=[...new Set([...E,...O,...Y])],b=yr(f.css,{dt:Gr})}return{primitive:{css:m,tokens:p},semantic:{css:v,tokens:g},global:{css:y,tokens:_},style:b}},getPreset({name:e="",preset:t={},options:n,params:r,set:i,defaults:o,selector:s}){var a,l,u;let c,d,f;if(Qe(t)&&n.transform!=="strict"){let h=e.replace("-directive",""),m=t,{colorScheme:p,extend:v,css:g}=m,y=Ln(m,["colorScheme","extend","css"]),_=v||{},{colorScheme:b}=_,I=Ln(_,["colorScheme"]),T=p||{},{dark:P}=T,q=Ln(T,["dark"]),j=b||{},{dark:B}=j,F=Ln(j,["dark"]),R=Qe(y)?this._toVariables({[h]:Zt(Zt({},y),I)},n):{},J=Qe(q)?this._toVariables({[h]:Zt(Zt({},q),F)},n):{},w=Qe(P)?this._toVariables({[h]:Zt(Zt({},P),B)},n):{},[M,C]=[(a=R.declarations)!=null?a:"",R.tokens||[]],[L,N]=[(l=J.declarations)!=null?l:"",J.tokens||[]],[W,U]=[(u=w.declarations)!=null?u:"",w.tokens||[]],Q=this.transformCSS(h,`${M}${L}`,"light","variable",n,i,o,s),te=this.transformCSS(h,W,"dark","variable",n,i,o,s);c=`${Q}${te}`,d=[...new Set([...C,...N,...U])],f=yr(g,{dt:Gr})}return{css:c,tokens:d,style:f}},getPresetC({name:e="",theme:t={},params:n,set:r,defaults:i}){var o;let{preset:s,options:a}=t,l=(o=s?.components)==null?void 0:o[e];return this.getPreset({name:e,preset:l,options:a,params:n,set:r,defaults:i})},getPresetD({name:e="",theme:t={},params:n,set:r,defaults:i}){var o,s;let a=e.replace("-directive",""),{preset:l,options:u}=t,c=((o=l?.components)==null?void 0:o[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:n,set:r,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,t){var n;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?t.options.darkModeSelector:(n=e.darkModeSelector)!=null?n:t.options.darkModeSelector):[]},getLayerOrder(e,t={},n,r){let{cssLayer:i}=t;return i?`@layer ${yr(i.order||i.name||"primeui",n)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:n,props:r={},set:i,defaults:o}){let s=this.getCommon({name:e,theme:t,params:n,set:i,defaults:o}),a=Object.entries(r).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(jr(c)&&Object.hasOwn(c,"css")){let d=Ao(c.css),f=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:t={},params:n,props:r={},set:i,defaults:o}){var s;let a={name:e,theme:t,params:n,set:i,defaults:o},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(r).reduce((c,[d,f])=>c.push(`${d}="${f}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${Ao(l)}</style>`:""},createTokens(e={},t,n="",r="",i={}){let o=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&Vo.test(this.value)){let d=this.value.trim().replace(Vo,f=>{var h;let m=f.slice(1,-1),p=this.tokens[m];if(!p)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let v=p.computed(a,l,u);return Array.isArray(v)&&v.length===2?`light-dark(${v[0].value},${v[1].value})`:(h=v?.value)!=null?h:"__UNRESOLVED__"});c=ZS.test(d.replace(JS,"0"))?`calc(${d})`:d}return jv(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let f=Ur(c,t.variable.excludedKeyRegex)?l:l?`${l}.${xm(c)}`:xm(c),h=u?`${u}.${c}`:c;jr(d)?s(d,f,h):(i[f]||(i[f]={paths:[],computed:(m,p={},v=[])=>{if(i[f].paths.length===1)return i[f].paths[0].computed(i[f].paths[0].scheme,p.binding,v);if(m&&m!=="none")for(let g=0;g<i[f].paths.length;g++){let y=i[f].paths[g];if(y.scheme===m)return y.computed(m,p.binding,v)}return i[f].paths.map(g=>g.computed(g.scheme,p[g.scheme],v))}}),i[f].paths.push({path:h,value:d,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:o,tokens:i}))})};return s(e,n,r),i},getTokenValue(e,t,n){var r;let i=(a=>a.split(".").filter(l=>!Ur(l.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(t),o=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,s=[(r=e[i])==null?void 0:r.computed(o)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=Ln(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(e,t,n,r){return n==="class"||n==="attr"?gi(Qe(t)?`${e}${t},${e} ${t}`:e,r):gi(e,gi(t??":root,:host",r))},transformCSS(e,t,n,r,i={},o,s,a){if(Qe(t)){let{cssLayer:l}=i;if(r!=="style"){let u=this.getColorSchemeOption(i,s);t=n==="dark"?u.reduce((c,{type:d,selector:f})=>(Qe(f)&&(c+=f.includes("[CSS]")?f.replace("[CSS]",t):this.getSelectorRule(f,a,d,t)),c),""):gi(a??":root,:host",t)}if(l){let u={name:"primeui"};jr(l)&&(u.name=yr(l.name,{name:e,type:r})),Qe(u.name)&&(t=gi(`@layer ${u.name}`,t),o?.layerNames(u.name))}return t}return""}},bt={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:t}=e;t&&(this._theme=eu(Zt({},t),{options:Zt(Zt({},this.defaults.options),t.options)}),this._tokens=Xt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),jn.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=eu(Zt({},this.theme),{preset:e}),this._tokens=Xt.createTokens(e,this.defaults),this.clearLoadedStyleNames(),jn.emit("preset:change",e),jn.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=eu(Zt({},this.theme),{options:e}),this.clearLoadedStyleNames(),jn.emit("options:change",e),jn.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return Xt.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return Xt.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Xt.getPresetC(n)},getDirective(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Xt.getPresetD(n)},getCustomPreset(e="",t,n,r){let i={name:e,preset:t,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Xt.getPreset(i)},getLayerOrderCSS(e=""){return Xt.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,n="style",r){return Xt.transformCSS(e,t,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,n={}){return Xt.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,n={}){return Xt.getStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),jn.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&jn.emit("theme:load"))}},_t={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},UA=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;function Fo(e){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fo(e)}function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Em(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sm(Object(n),!0).forEach(function(r){GA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GA(e,t,n){return(t=KA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KA(e){var t=WA(e,"string");return Fo(t)=="symbol"?t:t+""}function WA(e,t){if(Fo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Pn()&&Pn().components?pn(e):t?e():rn(e)}var XA=0;function ZA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Te(!1),r=Te(e),i=Te(null),o=TA()?window.document:void 0,s=t.document,a=s===void 0?o:s,l=t.immediate,u=l===void 0?!0:l,c=t.manual,d=c===void 0?!1:c,f=t.name,h=f===void 0?"style_".concat(++XA):f,m=t.id,p=m===void 0?void 0:m,v=t.media,g=v===void 0?void 0:v,y=t.nonce,_=y===void 0?void 0:y,b=t.first,I=b===void 0?!1:b,T=t.onMounted,P=T===void 0?void 0:T,q=t.onUpdated,j=q===void 0?void 0:q,B=t.onLoad,F=B===void 0?void 0:B,R=t.props,J=R===void 0?{}:R,w=function(){},M=function(N){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var U=Em(Em({},J),W),Q=U.name||h,te=U.id||p,se=U.nonce||_;i.value=a.querySelector('style[data-primevue-style-id="'.concat(Q,'"]'))||a.getElementById(te)||a.createElement("style"),i.value.isConnected||(r.value=N||e,Up(i.value,{type:"text/css",id:te,media:g,nonce:se}),I?a.head.prepend(i.value):a.head.appendChild(i.value),NA(i.value,"data-primevue-style-id",Q),Up(i.value,U),i.value.onload=function(z){return F?.(z,{name:Q})},P?.(Q)),!n.value&&(w=Ee(r,function(z){i.value.textContent=z,j?.(Q)},{immediate:!0}),n.value=!0)}},C=function(){!a||!n.value||(w(),PA(i.value)&&a.head.removeChild(i.value),n.value=!1,i.value=null)};return u&&!d&&YA(M),{id:p,name:h,el:i,css:r,unload:C,load:M,isLoaded:Do(n)}}function Ho(e){"@babel/helpers - typeof";return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ho(e)}var Cm,$m,km,Im;function Am(e,t){return tO(e)||eO(e,t)||QA(e,t)||JA()}function JA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QA(e,t){if(e){if(typeof e=="string")return Om(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Om(e,t):void 0}}function Om(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function eO(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return a}}function tO(e){if(Array.isArray(e))return e}function Rm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rm(Object(n),!0).forEach(function(r){nO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nO(e,t,n){return(t=rO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rO(e){var t=iO(e,"string");return Ho(t)=="symbol"?t:t+""}function iO(e,t){if(Ho(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ho(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Is(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var oO=function(t){var n=t.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},sO={},aO={},fi={name:"base",css:oO,style:UA,classes:sO,inlineStyles:aO,load:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(o){return o},i=r(ks(Cm||(Cm=Is(["",""])),t));return Qe(i)?ZA(Ao(i),tu({name:this.name},n)):{}},loadCSS:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,t)},loadStyle:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,n,function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return bt.transformCSS(n.name||t.name,"".concat(i).concat(ks($m||($m=Is(["",""])),r)))})},getCommonTheme:function(t){return bt.getCommon(this.name,t)},getComponentTheme:function(t){return bt.getComponent(this.name,t)},getDirectiveTheme:function(t){return bt.getDirective(this.name,t)},getPresetTheme:function(t,n,r){return bt.getCustomPreset(this.name,t,n,r)},getLayerOrderThemeCSS:function(){return bt.getLayerOrderCSS(this.name)},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=yr(this.css,{dt:Gr})||"",i=Ao(ks(km||(km=Is(["","",""])),r,t)),o=Object.entries(n).reduce(function(s,a){var l=Am(a,2),u=l[0],c=l[1];return s.push("".concat(u,'="').concat(c,'"'))&&s},[]).join(" ");return Qe(i)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(o,">").concat(i,"</style>"):""}return""},getCommonThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return bt.getCommonStyleSheet(this.name,t,n)},getThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[bt.getStyleSheet(this.name,t,n)];if(this.style){var i=this.name==="base"?"global-style":"".concat(this.name,"-style"),o=ks(Im||(Im=Is(["",""])),yr(this.style,{dt:Gr})),s=Ao(bt.transformCSS(i,o)),a=Object.entries(n).reduce(function(l,u){var c=Am(u,2),d=c[0],f=c[1];return l.push("".concat(d,'="').concat(f,'"'))&&l},[]).join(" ");Qe(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(i,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(t){return tu(tu({},this),{},{css:void 0,style:void 0},t)}},As=KS();function jo(e){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jo(e)}function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Os(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(Object(n),!0).forEach(function(r){lO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lO(e,t,n){return(t=uO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uO(e){var t=cO(e,"string");return jo(t)=="symbol"?t:t+""}function cO(e,t){if(jo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(jo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var dO={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[_t.STARTS_WITH,_t.CONTAINS,_t.NOT_CONTAINS,_t.ENDS_WITH,_t.EQUALS,_t.NOT_EQUALS],numeric:[_t.EQUALS,_t.NOT_EQUALS,_t.LESS_THAN,_t.LESS_THAN_OR_EQUAL_TO,_t.GREATER_THAN,_t.GREATER_THAN_OR_EQUAL_TO],date:[_t.DATE_IS,_t.DATE_IS_NOT,_t.DATE_BEFORE,_t.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},fO=Symbol();function hO(e,t){var n={config:cs(t)};return e.config.globalProperties.$primevue=n,e.provide(fO,n),pO(),vO(e,n),n}var _i=[];function pO(){jn.clear(),_i.forEach(function(e){return e?.()}),_i=[]}function vO(e,t){var n=Te(!1),r=function(){var u;if(((u=t.config)===null||u===void 0?void 0:u.theme)!=="none"&&!bt.isStyleNameLoaded("common")){var c,d,f=((c=fi.getCommonTheme)===null||c===void 0?void 0:c.call(fi))||{},h=f.primitive,m=f.semantic,p=f.global,v=f.style,g={nonce:(d=t.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};fi.load(h?.css,Os({name:"primitive-variables"},g)),fi.load(m?.css,Os({name:"semantic-variables"},g)),fi.load(p?.css,Os({name:"global-variables"},g)),fi.loadStyle(Os({name:"global-style"},g),v),bt.setLoadedStyleName("common")}};jn.on("theme:change",function(l){n.value||(e.config.globalProperties.$primevue.config.theme=l,n.value=!0)});var i=Ee(t.config,function(l,u){As.emit("config:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),o=Ee(function(){return t.config.ripple},function(l,u){As.emit("config:ripple:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),s=Ee(function(){return t.config.theme},function(l,u){n.value||bt.setTheme(l),t.config.unstyled||r(),n.value=!1,As.emit("config:theme:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!1}),a=Ee(function(){return t.config.unstyled},function(l,u){!l&&t.config.theme&&r(),As.emit("config:unstyled:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0});_i.push(i),_i.push(o),_i.push(s),_i.push(a)}var gO={install:function(t,n){var r=OA(dO,n);hO(t,r)}};function Uo(e){return Iv()?(Xs(e),!0):!1}function Kn(e){return typeof e=="function"?e():ue(e)}const mO=typeof window<"u"&&typeof document<"u",_O=e=>typeof e<"u",yO=Object.prototype.toString,bO=e=>yO.call(e)==="[object Object]",wO=()=>{};function xO(e,t){function n(...r){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(o)})}return n}const nE=e=>e();function SO(e=nE){const t=Te(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:Do(t),pause:n,resume:r,eventFilter:(...o)=>{t.value&&e(...o)}}}function Tm(e,t=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(t?()=>i(n):r,e)})}function EO(e,t,n={}){const{eventFilter:r=nE,...i}=n;return Ee(e,xO(r,t),i)}function hi(e,t,n={}){const{eventFilter:r,...i}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=SO(r);return{stop:EO(e,t,{...i,eventFilter:o}),pause:s,resume:a,isActive:l}}function CO(e,t={}){if(!Ze(e))return zk(e);const n=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const r in e.value)n[r]=Lk(()=>({get(){return e.value[r]},set(i){var o;if((o=Kn(t.replaceRef))!=null?o:!0)if(Array.isArray(e.value)){const a=[...e.value];a[r]=i,e.value=a}else{const a={...e.value,[r]:i};Object.setPrototypeOf(a,Object.getPrototypeOf(e.value)),e.value=a}else e.value[r]=i}}));return n}function Kp(e,t=!1){function n(d,{flush:f="sync",deep:h=!1,timeout:m,throwOnTimeout:p}={}){let v=null;const y=[new Promise(_=>{v=Ee(e,b=>{d(b)!==t&&(v?.(),_(b))},{flush:f,deep:h,immediate:!0})})];return m!=null&&y.push(Tm(m,p).then(()=>Kn(e)).finally(()=>v?.())),Promise.race(y)}function r(d,f){if(!Ze(d))return n(b=>b===d,f);const{flush:h="sync",deep:m=!1,timeout:p,throwOnTimeout:v}=f??{};let g=null;const _=[new Promise(b=>{g=Ee([e,d],([I,T])=>{t!==(I===T)&&(g?.(),b(I))},{flush:h,deep:m,immediate:!0})})];return p!=null&&_.push(Tm(p,v).then(()=>Kn(e)).finally(()=>(g?.(),Kn(e)))),Promise.race(_)}function i(d){return n(f=>!!f,d)}function o(d){return r(null,d)}function s(d){return r(void 0,d)}function a(d){return n(Number.isNaN,d)}function l(d,f){return n(h=>{const m=Array.from(h);return m.includes(d)||m.includes(Kn(d))},f)}function u(d){return c(1,d)}function c(d=1,f){let h=-1;return n(()=>(h+=1,h>=d),f)}return Array.isArray(Kn(e))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return Kp(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return Kp(e,!t)}}}function Wp(e){return Kp(e)}function $O(e){var t;const n=Kn(e);return(t=n?.$el)!=null?t:n}const rE=mO?window:void 0;function iE(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=rE):[t,n,r,i]=e,!t)return wO;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,d,f,h)=>(c.addEventListener(d,f,h),()=>c.removeEventListener(d,f,h)),l=Ee(()=>[$O(t),Kn(i)],([c,d])=>{if(s(),!c)return;const f=bO(d)?{...d}:d;o.push(...n.flatMap(h=>r.map(m=>a(c,h,m,f))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return Uo(u),u}function kO(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Nm(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:i=rE,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=r,l=kO(t);return iE(i,o,c=>{c.repeat&&Kn(a)||l(c)&&n(c)},s)}function IO(e){return JSON.parse(JSON.stringify(e))}function nu(e,t,n,r={}){var i,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:d,shouldEmit:f}=r,h=Pn(),m=n||h?.emit||((i=h?.$emit)==null?void 0:i.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let p=u;t||(t="modelValue"),p=p||`update:${t.toString()}`;const v=_=>a?typeof a=="function"?a(_):IO(_):_,g=()=>_O(e[t])?v(e[t]):d,y=_=>{f?f(_)&&m(p,_):m(p,_)};if(l){const _=g(),b=Te(_);let I=!1;return Ee(()=>e[t],T=>{I||(I=!0,b.value=v(T),rn(()=>I=!1))}),Ee(b,T=>{!I&&(T!==e[t]||c)&&y(T)},{deep:c}),b}else return he({get(){return g()},set(_){y(_)}})}var AO={value:()=>{}};function ol(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Qs(n)}function Qs(e){this._=e}function OO(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Qs.prototype=ol.prototype={constructor:Qs,on:function(e,t){var n=this._,r=OO(e+"",n),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=RO(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<s;)if(i=(e=r[o]).type)n[i]=Mm(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Mm(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Qs(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function RO(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Mm(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=AO,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Yp="http://www.w3.org/1999/xhtml";const Dm={svg:"http://www.w3.org/2000/svg",xhtml:Yp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function sl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Dm.hasOwnProperty(t)?{space:Dm[t],local:e}:e}function PO(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Yp&&t.documentElement.namespaceURI===Yp?t.createElement(e):t.createElementNS(n,e)}}function TO(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function oE(e){var t=sl(e);return(t.local?TO:PO)(t)}function NO(){}function Uv(e){return e==null?NO:function(){return this.querySelector(e)}}function MO(e){typeof e!="function"&&(e=Uv(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=e.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Vt(r,this._parents)}function DO(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function qO(){return[]}function sE(e){return e==null?qO:function(){return this.querySelectorAll(e)}}function BO(e){return function(){return DO(e.apply(this,arguments))}}function LO(e){typeof e=="function"?e=BO(e):e=sE(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var s=t[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(r.push(e.call(l,l.__data__,u,s)),i.push(l));return new Vt(r,i)}function aE(e){return function(){return this.matches(e)}}function lE(e){return function(t){return t.matches(e)}}var zO=Array.prototype.find;function VO(e){return function(){return zO.call(this.children,e)}}function FO(){return this.firstElementChild}function HO(e){return this.select(e==null?FO:VO(typeof e=="function"?e:lE(e)))}var jO=Array.prototype.filter;function UO(){return Array.from(this.children)}function GO(e){return function(){return jO.call(this.children,e)}}function KO(e){return this.selectAll(e==null?UO:GO(typeof e=="function"?e:lE(e)))}function WO(e){typeof e!="function"&&(e=aE(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,u=0;u<s;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new Vt(r,this._parents)}function uE(e){return new Array(e.length)}function YO(){return new Vt(this._enter||this._groups.map(uE),this._parents)}function _a(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}_a.prototype={constructor:_a,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function XO(e){return function(){return e}}function ZO(e,t,n,r,i,o){for(var s=0,a,l=t.length,u=o.length;s<u;++s)(a=t[s])?(a.__data__=o[s],r[s]=a):n[s]=new _a(e,o[s]);for(;s<l;++s)(a=t[s])&&(i[s]=a)}function JO(e,t,n,r,i,o,s){var a,l,u=new Map,c=t.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=t[a])&&(f[a]=h=s.call(l,l.__data__,a,t)+"",u.has(h)?i[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(e,o[a],a,o)+"",(l=u.get(h))?(r[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new _a(e,o[a]);for(a=0;a<c;++a)(l=t[a])&&u.get(f[a])===l&&(i[a]=l)}function QO(e){return e.__data__}function eR(e,t){if(!arguments.length)return Array.from(this,QO);var n=t?JO:ZO,r=this._parents,i=this._groups;typeof e!="function"&&(e=XO(e));for(var o=i.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=r[u],d=i[u],f=d.length,h=tR(e.call(c,c&&c.__data__,u,r)),m=h.length,p=a[u]=new Array(m),v=s[u]=new Array(m),g=l[u]=new Array(f);n(c,d,p,v,g,h,t);for(var y=0,_=0,b,I;y<m;++y)if(b=p[y]){for(y>=_&&(_=y+1);!(I=v[_])&&++_<m;);b._next=I||null}}return s=new Vt(s,r),s._enter=a,s._exit=l,s}function tR(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function nR(){return new Vt(this._exit||this._groups.map(uE),this._parents)}function rR(e,t,n){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function iR(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,s=Math.min(i,o),a=new Array(i),l=0;l<s;++l)for(var u=n[l],c=r[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<i;++l)a[l]=n[l];return new Vt(a,this._parents)}function oR(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function sR(e){e||(e=aR);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var s=n[o],a=s.length,l=i[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(t)}return new Vt(i,this._parents).order()}function aR(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function lR(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function uR(){return Array.from(this)}function cR(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function dR(){let e=0;for(const t of this)++e;return e}function fR(){return!this.node()}function hR(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,s=i.length,a;o<s;++o)(a=i[o])&&e.call(a,a.__data__,o,i);return this}function pR(e){return function(){this.removeAttribute(e)}}function vR(e){return function(){this.removeAttributeNS(e.space,e.local)}}function gR(e,t){return function(){this.setAttribute(e,t)}}function mR(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function _R(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function yR(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function bR(e,t){var n=sl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?vR:pR:typeof t=="function"?n.local?yR:_R:n.local?mR:gR)(n,t))}function cE(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function wR(e){return function(){this.style.removeProperty(e)}}function xR(e,t,n){return function(){this.style.setProperty(e,t,n)}}function SR(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function ER(e,t,n){return arguments.length>1?this.each((t==null?wR:typeof t=="function"?SR:xR)(e,t,n??"")):Ti(this.node(),e)}function Ti(e,t){return e.style.getPropertyValue(t)||cE(e).getComputedStyle(e,null).getPropertyValue(t)}function CR(e){return function(){delete this[e]}}function $R(e,t){return function(){this[e]=t}}function kR(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function IR(e,t){return arguments.length>1?this.each((t==null?CR:typeof t=="function"?kR:$R)(e,t)):this.node()[e]}function dE(e){return e.trim().split(/^|\s+/)}function Gv(e){return e.classList||new fE(e)}function fE(e){this._node=e,this._names=dE(e.getAttribute("class")||"")}fE.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function hE(e,t){for(var n=Gv(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function pE(e,t){for(var n=Gv(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function AR(e){return function(){hE(this,e)}}function OR(e){return function(){pE(this,e)}}function RR(e,t){return function(){(t.apply(this,arguments)?hE:pE)(this,e)}}function PR(e,t){var n=dE(e+"");if(arguments.length<2){for(var r=Gv(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?RR:t?AR:OR)(n,t))}function TR(){this.textContent=""}function NR(e){return function(){this.textContent=e}}function MR(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function DR(e){return arguments.length?this.each(e==null?TR:(typeof e=="function"?MR:NR)(e)):this.node().textContent}function qR(){this.innerHTML=""}function BR(e){return function(){this.innerHTML=e}}function LR(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function zR(e){return arguments.length?this.each(e==null?qR:(typeof e=="function"?LR:BR)(e)):this.node().innerHTML}function VR(){this.nextSibling&&this.parentNode.appendChild(this)}function FR(){return this.each(VR)}function HR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function jR(){return this.each(HR)}function UR(e){var t=typeof e=="function"?e:oE(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function GR(){return null}function KR(e,t){var n=typeof e=="function"?e:oE(e),r=t==null?GR:typeof t=="function"?t:Uv(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function WR(){var e=this.parentNode;e&&e.removeChild(this)}function YR(){return this.each(WR)}function XR(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ZR(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function JR(e){return this.select(e?ZR:XR)}function QR(e){return arguments.length?this.property("__data__",e):this.node().__data__}function eP(e){return function(t){e.call(this,t,this.__data__)}}function tP(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function nP(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function rP(e,t,n){return function(){var r=this.__on,i,o=eP(t);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function iP(e,t,n){var r=tP(e+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(i=0,c=a[l];i<o;++i)if((s=r[i]).type===c.type&&s.name===c.name)return c.value}return}for(a=t?rP:nP,i=0;i<o;++i)this.each(a(r[i],t,n));return this}function vE(e,t,n){var r=cE(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function oP(e,t){return function(){return vE(this,e,t)}}function sP(e,t){return function(){return vE(this,e,t.apply(this,arguments))}}function aP(e,t){return this.each((typeof t=="function"?sP:oP)(e,t))}function*lP(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var gE=[null];function Vt(e,t){this._groups=e,this._parents=t}function hs(){return new Vt([[document.documentElement]],gE)}function uP(){return this}Vt.prototype=hs.prototype={constructor:Vt,select:MO,selectAll:LO,selectChild:HO,selectChildren:KO,filter:WO,data:eR,enter:YO,exit:nR,join:rR,merge:iR,selection:uP,order:oR,sort:sR,call:lR,nodes:uR,node:cR,size:dR,empty:fR,each:hR,attr:bR,style:ER,property:IR,classed:PR,text:DR,html:zR,raise:FR,lower:jR,append:UR,insert:KR,remove:YR,clone:JR,datum:QR,on:iP,dispatch:aP,[Symbol.iterator]:lP};function Qt(e){return typeof e=="string"?new Vt([[document.querySelector(e)]],[document.documentElement]):new Vt([[e]],gE)}function cP(e){let t;for(;t=e.sourceEvent;)e=t;return e}function En(e,t){if(e=cP(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const dP={passive:!1},Go={capture:!0,passive:!1};function ru(e){e.stopImmediatePropagation()}function Ei(e){e.preventDefault(),e.stopImmediatePropagation()}function mE(e){var t=e.document.documentElement,n=Qt(e).on("dragstart.drag",Ei,Go);"onselectstart"in t?n.on("selectstart.drag",Ei,Go):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function _E(e,t){var n=e.document.documentElement,r=Qt(e).on("dragstart.drag",null);t&&(r.on("click.drag",Ei,Go),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Rs=e=>()=>e;function Xp(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Xp.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function fP(e){return!e.ctrlKey&&!e.button}function hP(){return this.parentNode}function pP(e,t){return t??{x:e.x,y:e.y}}function vP(){return navigator.maxTouchPoints||"ontouchstart"in this}function gP(){var e=fP,t=hP,n=pP,r=vP,i={},o=ol("start","drag","end"),s=0,a,l,u,c,d=0;function f(b){b.on("mousedown.drag",h).filter(r).on("touchstart.drag",v).on("touchmove.drag",g,dP).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(b,I){if(!(c||!e.call(this,b,I))){var T=_(this,t.call(this,b,I),b,I,"mouse");T&&(Qt(b.view).on("mousemove.drag",m,Go).on("mouseup.drag",p,Go),mE(b.view),ru(b),u=!1,a=b.clientX,l=b.clientY,T("start",b))}}function m(b){if(Ei(b),!u){var I=b.clientX-a,T=b.clientY-l;u=I*I+T*T>d}i.mouse("drag",b)}function p(b){Qt(b.view).on("mousemove.drag mouseup.drag",null),_E(b.view,u),Ei(b),i.mouse("end",b)}function v(b,I){if(e.call(this,b,I)){var T=b.changedTouches,P=t.call(this,b,I),q=T.length,j,B;for(j=0;j<q;++j)(B=_(this,P,b,I,T[j].identifier,T[j]))&&(ru(b),B("start",b,T[j]))}}function g(b){var I=b.changedTouches,T=I.length,P,q;for(P=0;P<T;++P)(q=i[I[P].identifier])&&(Ei(b),q("drag",b,I[P]))}function y(b){var I=b.changedTouches,T=I.length,P,q;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),P=0;P<T;++P)(q=i[I[P].identifier])&&(ru(b),q("end",b,I[P]))}function _(b,I,T,P,q,j){var B=o.copy(),F=En(j||T,I),R,J,w;if((w=n.call(b,new Xp("beforestart",{sourceEvent:T,target:f,identifier:q,active:s,x:F[0],y:F[1],dx:0,dy:0,dispatch:B}),P))!=null)return R=w.x-F[0]||0,J=w.y-F[1]||0,function M(C,L,N){var W=F,U;switch(C){case"start":i[q]=M,U=s++;break;case"end":delete i[q],--s;case"drag":F=En(N||L,I),U=s;break}B.call(C,b,new Xp(C,{sourceEvent:L,subject:w,target:f,identifier:q,active:U,x:F[0]+R,y:F[1]+J,dx:F[0]-W[0],dy:F[1]-W[1],dispatch:B}),P)}}return f.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Rs(!!b),f):e},f.container=function(b){return arguments.length?(t=typeof b=="function"?b:Rs(b),f):t},f.subject=function(b){return arguments.length?(n=typeof b=="function"?b:Rs(b),f):n},f.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:Rs(!!b),f):r},f.on=function(){var b=o.on.apply(o,arguments);return b===o?f:b},f.clickDistance=function(b){return arguments.length?(d=(b=+b)*b,f):Math.sqrt(d)},f}function Kv(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function yE(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ps(){}var Ko=.7,ya=1/Ko,Ci="\\s*([+-]?\\d+)\\s*",Wo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",An="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",mP=/^#([0-9a-f]{3,8})$/,_P=new RegExp(`^rgb\\(${Ci},${Ci},${Ci}\\)$`),yP=new RegExp(`^rgb\\(${An},${An},${An}\\)$`),bP=new RegExp(`^rgba\\(${Ci},${Ci},${Ci},${Wo}\\)$`),wP=new RegExp(`^rgba\\(${An},${An},${An},${Wo}\\)$`),xP=new RegExp(`^hsl\\(${Wo},${An},${An}\\)$`),SP=new RegExp(`^hsla\\(${Wo},${An},${An},${Wo}\\)$`),qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Kv(ps,Xr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Bm,formatHex:Bm,formatHex8:EP,formatHsl:CP,formatRgb:Lm,toString:Lm});function Bm(){return this.rgb().formatHex()}function EP(){return this.rgb().formatHex8()}function CP(){return bE(this).formatHsl()}function Lm(){return this.rgb().formatRgb()}function Xr(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=mP.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?zm(t):n===3?new Tt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ps(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ps(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=_P.exec(e))?new Tt(t[1],t[2],t[3],1):(t=yP.exec(e))?new Tt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=bP.exec(e))?Ps(t[1],t[2],t[3],t[4]):(t=wP.exec(e))?Ps(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=xP.exec(e))?Hm(t[1],t[2]/100,t[3]/100,1):(t=SP.exec(e))?Hm(t[1],t[2]/100,t[3]/100,t[4]):qm.hasOwnProperty(e)?zm(qm[e]):e==="transparent"?new Tt(NaN,NaN,NaN,0):null}function zm(e){return new Tt(e>>16&255,e>>8&255,e&255,1)}function Ps(e,t,n,r){return r<=0&&(e=t=n=NaN),new Tt(e,t,n,r)}function $P(e){return e instanceof ps||(e=Xr(e)),e?(e=e.rgb(),new Tt(e.r,e.g,e.b,e.opacity)):new Tt}function Zp(e,t,n,r){return arguments.length===1?$P(e):new Tt(e,t,n,r??1)}function Tt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Kv(Tt,Zp,yE(ps,{brighter(e){return e=e==null?ya:Math.pow(ya,e),new Tt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ko:Math.pow(Ko,e),new Tt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Tt(Kr(this.r),Kr(this.g),Kr(this.b),ba(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Vm,formatHex:Vm,formatHex8:kP,formatRgb:Fm,toString:Fm}));function Vm(){return`#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}`}function kP(){return`#${Lr(this.r)}${Lr(this.g)}${Lr(this.b)}${Lr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Fm(){const e=ba(this.opacity);return`${e===1?"rgb(":"rgba("}${Kr(this.r)}, ${Kr(this.g)}, ${Kr(this.b)}${e===1?")":`, ${e})`}`}function ba(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Kr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Lr(e){return e=Kr(e),(e<16?"0":"")+e.toString(16)}function Hm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new en(e,t,n,r)}function bE(e){if(e instanceof en)return new en(e.h,e.s,e.l,e.opacity);if(e instanceof ps||(e=Xr(e)),!e)return new en;if(e instanceof en)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,a=o-i,l=(o+i)/2;return a?(t===o?s=(n-r)/a+(n<r)*6:n===o?s=(r-t)/a+2:s=(t-n)/a+4,a/=l<.5?o+i:2-o-i,s*=60):a=l>0&&l<1?0:s,new en(s,a,l,e.opacity)}function IP(e,t,n,r){return arguments.length===1?bE(e):new en(e,t,n,r??1)}function en(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Kv(en,IP,yE(ps,{brighter(e){return e=e==null?ya:Math.pow(ya,e),new en(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ko:Math.pow(Ko,e),new en(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Tt(iu(e>=240?e-240:e+120,i,r),iu(e,i,r),iu(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new en(jm(this.h),Ts(this.s),Ts(this.l),ba(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ba(this.opacity);return`${e===1?"hsl(":"hsla("}${jm(this.h)}, ${Ts(this.s)*100}%, ${Ts(this.l)*100}%${e===1?")":`, ${e})`}`}}));function jm(e){return e=(e||0)%360,e<0?e+360:e}function Ts(e){return Math.max(0,Math.min(1,e||0))}function iu(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Wv=e=>()=>e;function AP(e,t){return function(n){return e+n*t}}function OP(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function RP(e){return(e=+e)==1?wE:function(t,n){return n-t?OP(t,n,e):Wv(isNaN(t)?n:t)}}function wE(e,t){var n=t-e;return n?AP(e,n):Wv(isNaN(e)?t:e)}const wa=(function e(t){var n=RP(t);function r(i,o){var s=n((i=Zp(i)).r,(o=Zp(o)).r),a=n(i.g,o.g),l=n(i.b,o.b),u=wE(i.opacity,o.opacity);return function(c){return i.r=s(c),i.g=a(c),i.b=l(c),i.opacity=u(c),i+""}}return r.gamma=e,r})(1);function PP(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(o){for(i=0;i<n;++i)r[i]=e[i]*(1-o)+t[i]*o;return r}}function TP(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function NP(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),o=new Array(n),s;for(s=0;s<r;++s)i[s]=Oo(e[s],t[s]);for(;s<n;++s)o[s]=t[s];return function(a){for(s=0;s<r;++s)o[s]=i[s](a);return o}}function MP(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function $n(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function DP(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Oo(e[i],t[i]):r[i]=t[i];return function(o){for(i in n)r[i]=n[i](o);return r}}var Jp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ou=new RegExp(Jp.source,"g");function qP(e){return function(){return e}}function BP(e){return function(t){return e(t)+""}}function xE(e,t){var n=Jp.lastIndex=ou.lastIndex=0,r,i,o,s=-1,a=[],l=[];for(e=e+"",t=t+"";(r=Jp.exec(e))&&(i=ou.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,l.push({i:s,x:$n(r,i)})),n=ou.lastIndex;return n<t.length&&(o=t.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?BP(l[0].x):qP(t):(t=l.length,function(u){for(var c=0,d;c<t;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}function Oo(e,t){var n=typeof t,r;return t==null||n==="boolean"?Wv(t):(n==="number"?$n:n==="string"?(r=Xr(t))?(t=r,wa):xE:t instanceof Xr?wa:t instanceof Date?MP:TP(t)?PP:Array.isArray(t)?NP:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?DP:$n)(e,t)}var Um=180/Math.PI,Qp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function SE(e,t,n,r,i,o){var s,a,l;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,l/=a),e*r<t*n&&(e=-e,t=-t,l=-l,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Um,skewX:Math.atan(l)*Um,scaleX:s,scaleY:a}}var Ns;function LP(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Qp:SE(t.a,t.b,t.c,t.d,t.e,t.f)}function zP(e){return e==null||(Ns||(Ns=document.createElementNS("http://www.w3.org/2000/svg","g")),Ns.setAttribute("transform",e),!(e=Ns.transform.baseVal.consolidate()))?Qp:(e=e.matrix,SE(e.a,e.b,e.c,e.d,e.e,e.f))}function EE(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var p=h.push("translate(",null,t,null,n);m.push({i:p-4,x:$n(u,d)},{i:p-2,x:$n(c,f)})}else(d||f)&&h.push("translate("+d+t+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(i(d)+"rotate(",null,r)-2,x:$n(u,c)})):c&&d.push(i(d)+"rotate("+c+r)}function a(u,c,d,f){u!==c?f.push({i:d.push(i(d)+"skewX(",null,r)-2,x:$n(u,c)}):c&&d.push(i(d)+"skewX("+c+r)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var p=h.push(i(h)+"scale(",null,",",null,")");m.push({i:p-4,x:$n(u,d)},{i:p-2,x:$n(c,f)})}else(d!==1||f!==1)&&h.push(i(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=e(u),c=e(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,p=f.length,v;++m<p;)d[(v=f[m]).i]=v.x(h);return d.join("")}}}var VP=EE(LP,"px, ","px)","deg)"),FP=EE(zP,", ",")",")"),HP=1e-12;function Gm(e){return((e=Math.exp(e))+1/e)/2}function jP(e){return((e=Math.exp(e))-1/e)/2}function UP(e){return((e=Math.exp(2*e))-1)/(e+1)}const ea=(function e(t,n,r){function i(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,p=h*h+m*m,v,g;if(p<HP)g=Math.log(f/u)/t,v=function(P){return[a+P*h,l+P*m,u*Math.exp(t*P*g)]};else{var y=Math.sqrt(p),_=(f*f-u*u+r*p)/(2*u*n*y),b=(f*f-u*u-r*p)/(2*f*n*y),I=Math.log(Math.sqrt(_*_+1)-_),T=Math.log(Math.sqrt(b*b+1)-b);g=(T-I)/t,v=function(P){var q=P*g,j=Gm(I),B=u/(n*y)*(j*UP(t*q+I)-jP(I));return[a+B*h,l+B*m,u*j/Gm(t*q+I)]}}return v.duration=g*1e3*t/Math.SQRT2,v}return i.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return e(s,a,l)},i})(Math.SQRT2,2,4);var Ni=0,ho=0,io=0,CE=1e3,xa,po,Sa=0,Zr=0,al=0,Yo=typeof performance=="object"&&performance.now?performance:Date,$E=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Yv(){return Zr||($E(GP),Zr=Yo.now()+al)}function GP(){Zr=0}function Ea(){this._call=this._time=this._next=null}Ea.prototype=kE.prototype={constructor:Ea,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Yv():+n)+(t==null?0:+t),!this._next&&po!==this&&(po?po._next=this:xa=this,po=this),this._call=e,this._time=n,ev()},stop:function(){this._call&&(this._call=null,this._time=1/0,ev())}};function kE(e,t,n){var r=new Ea;return r.restart(e,t,n),r}function KP(){Yv(),++Ni;for(var e=xa,t;e;)(t=Zr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ni}function Km(){Zr=(Sa=Yo.now())+al,Ni=ho=0;try{KP()}finally{Ni=0,YP(),Zr=0}}function WP(){var e=Yo.now(),t=e-Sa;t>CE&&(al-=t,Sa=e)}function YP(){for(var e,t=xa,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:xa=n);po=e,ev(r)}function ev(e){if(!Ni){ho&&(ho=clearTimeout(ho));var t=e-Zr;t>24?(e<1/0&&(ho=setTimeout(Km,e-Yo.now()-al)),io&&(io=clearInterval(io))):(io||(Sa=Yo.now(),io=setInterval(WP,CE)),Ni=1,$E(Km))}}function Wm(e,t,n){var r=new Ea;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var XP=ol("start","end","cancel","interrupt"),ZP=[],IE=0,Ym=1,tv=2,ta=3,Xm=4,nv=5,na=6;function ll(e,t,n,r,i,o){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;JP(e,n,{name:t,index:r,group:i,on:XP,tween:ZP,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:IE})}function Xv(e,t){var n=vn(e,t);if(n.state>IE)throw new Error("too late; already scheduled");return n}function Mn(e,t){var n=vn(e,t);if(n.state>ta)throw new Error("too late; already running");return n}function vn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function JP(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=kE(o,0,n.time);function o(u){n.state=Ym,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==Ym)return l();for(c in r)if(h=r[c],h.name===n.name){if(h.state===ta)return Wm(s);h.state===Xm?(h.state=na,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[c]):+c<t&&(h.state=na,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[c])}if(Wm(function(){n.state===ta&&(n.state=Xm,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=tv,n.on.call("start",e,e.__data__,n.index,n.group),n.state===tv){for(n.state=ta,i=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++d]=h);i.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=nv,1),d=-1,f=i.length;++d<f;)i[d].call(e,c);n.state===nv&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=na,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function ra(e,t){var n=e.__transition,r,i,o=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((r=n[s]).name!==t){o=!1;continue}i=r.state>tv&&r.state<nv,r.state=na,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[s]}o&&delete e.__transition}}function QP(e){return this.each(function(){ra(this,e)})}function eT(e,t){var n,r;return function(){var i=Mn(this,e),o=i.tween;if(o!==n){r=n=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===t){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function tT(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=Mn(this,e),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:t,value:n},l=0,u=i.length;l<u;++l)if(i[l].name===t){i[l]=a;break}l===u&&i.push(a)}o.tween=i}}function nT(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=vn(this.node(),n).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===e)return s.value;return null}return this.each((t==null?eT:tT)(n,e,t))}function Zv(e,t,n){var r=e._id;return e.each(function(){var i=Mn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return vn(i,r).value[t]}}function AE(e,t){var n;return(typeof t=="number"?$n:t instanceof Xr?wa:(n=Xr(t))?(t=n,wa):xE)(e,t)}function rT(e){return function(){this.removeAttribute(e)}}function iT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function oT(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttribute(e);return s===i?null:s===r?o:o=t(r=s,n)}}function sT(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttributeNS(e.space,e.local);return s===i?null:s===r?o:o=t(r=s,n)}}function aT(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function lT(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function uT(e,t){var n=sl(e),r=n==="transform"?FP:AE;return this.attrTween(e,typeof t=="function"?(n.local?lT:aT)(n,r,Zv(this,"attr."+e,t)):t==null?(n.local?iT:rT)(n):(n.local?sT:oT)(n,r,t))}function cT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function dT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function fT(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&dT(e,o)),n}return i._value=t,i}function hT(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&cT(e,o)),n}return i._value=t,i}function pT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=sl(e);return this.tween(n,(r.local?fT:hT)(r,t))}function vT(e,t){return function(){Xv(this,e).delay=+t.apply(this,arguments)}}function gT(e,t){return t=+t,function(){Xv(this,e).delay=t}}function mT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?vT:gT)(t,e)):vn(this.node(),t).delay}function _T(e,t){return function(){Mn(this,e).duration=+t.apply(this,arguments)}}function yT(e,t){return t=+t,function(){Mn(this,e).duration=t}}function bT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?_T:yT)(t,e)):vn(this.node(),t).duration}function wT(e,t){if(typeof t!="function")throw new Error;return function(){Mn(this,e).ease=t}}function xT(e){var t=this._id;return arguments.length?this.each(wT(t,e)):vn(this.node(),t).ease}function ST(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Mn(this,e).ease=n}}function ET(e){if(typeof e!="function")throw new Error;return this.each(ST(this._id,e))}function CT(e){typeof e!="function"&&(e=aE(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,u=0;u<s;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new tr(r,this._parents,this._name,this._id)}function $T(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var l=t[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<r;++a)s[a]=t[a];return new tr(s,this._parents,this._name,this._id)}function kT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function IT(e,t,n){var r,i,o=kT(t)?Xv:Mn;return function(){var s=o(this,e),a=s.on;a!==r&&(i=(r=a).copy()).on(t,n),s.on=i}}function AT(e,t){var n=this._id;return arguments.length<2?vn(this.node(),n).on.on(e):this.each(IT(n,e,t))}function OT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function RT(){return this.on("end.remove",OT(this._id))}function PT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Uv(e));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=e.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,ll(u[f],t,n,f,u,vn(c,n)));return new tr(o,this._parents,t,n)}function TT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=sE(e));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var l=r[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=e.call(c,c.__data__,d,l),h,m=vn(c,n),p=0,v=f.length;p<v;++p)(h=f[p])&&ll(h,t,n,p,f,m);o.push(f),s.push(c)}return new tr(o,s,t,n)}var NT=hs.prototype.constructor;function MT(){return new NT(this._groups,this._parents)}function DT(e,t){var n,r,i;return function(){var o=Ti(this,e),s=(this.style.removeProperty(e),Ti(this,e));return o===s?null:o===n&&s===r?i:i=t(n=o,r=s)}}function OE(e){return function(){this.style.removeProperty(e)}}function qT(e,t,n){var r,i=n+"",o;return function(){var s=Ti(this,e);return s===i?null:s===r?o:o=t(r=s,n)}}function BT(e,t,n){var r,i,o;return function(){var s=Ti(this,e),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),Ti(this,e))),s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a))}}function LT(e,t){var n,r,i,o="style."+t,s="end."+o,a;return function(){var l=Mn(this,e),u=l.on,c=l.value[o]==null?a||(a=OE(t)):void 0;(u!==n||i!==c)&&(r=(n=u).copy()).on(s,i=c),l.on=r}}function zT(e,t,n){var r=(e+="")=="transform"?VP:AE;return t==null?this.styleTween(e,DT(e,r)).on("end.style."+e,OE(e)):typeof t=="function"?this.styleTween(e,BT(e,r,Zv(this,"style."+e,t))).each(LT(this._id,e)):this.styleTween(e,qT(e,r,t),n).on("end.style."+e,null)}function VT(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function FT(e,t,n){var r,i;function o(){var s=t.apply(this,arguments);return s!==i&&(r=(i=s)&&VT(e,s,n)),r}return o._value=t,o}function HT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,FT(e,t,n??""))}function jT(e){return function(){this.textContent=e}}function UT(e){return function(){var t=e(this);this.textContent=t??""}}function GT(e){return this.tween("text",typeof e=="function"?UT(Zv(this,"text",e)):jT(e==null?"":e+""))}function KT(e){return function(t){this.textContent=e.call(this,t)}}function WT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&KT(i)),t}return r._value=e,r}function YT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,WT(e))}function XT(){for(var e=this._name,t=this._id,n=RE(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=vn(l,t);ll(l,e,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new tr(r,this._parents,e,n)}function ZT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--i===0&&o()}};n.each(function(){var u=Mn(this,r),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),u.on=t}),i===0&&o()})}var JT=0;function tr(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function RE(){return++JT}var zn=hs.prototype;tr.prototype={constructor:tr,select:PT,selectAll:TT,selectChild:zn.selectChild,selectChildren:zn.selectChildren,filter:CT,merge:$T,selection:MT,transition:XT,call:zn.call,nodes:zn.nodes,node:zn.node,size:zn.size,empty:zn.empty,each:zn.each,on:AT,attr:uT,attrTween:pT,style:zT,styleTween:HT,text:GT,textTween:YT,remove:RT,tween:nT,delay:mT,duration:bT,ease:xT,easeVarying:ET,end:ZT,[Symbol.iterator]:zn[Symbol.iterator]};function QT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var eN={time:null,delay:0,duration:250,ease:QT};function tN(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function nN(e){var t,n;e instanceof tr?(t=e._id,e=e._name):(t=RE(),(n=eN).time=Yv(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&ll(l,e,t,u,s,n||tN(l,t));return new tr(r,this._parents,e,t)}hs.prototype.interrupt=QP;hs.prototype.transition=nN;const Ms=e=>()=>e;function rN(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Wn(e,t,n){this.k=e,this.x=t,this.y=n}Wn.prototype={constructor:Wn,scale:function(e){return e===1?this:new Wn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Wn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Mi=new Wn(1,0,0);Wn.prototype;function su(e){e.stopImmediatePropagation()}function oo(e){e.preventDefault(),e.stopImmediatePropagation()}function iN(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function oN(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Zm(){return this.__zoom||Mi}function sN(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function aN(){return navigator.maxTouchPoints||"ontouchstart"in this}function lN(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function uN(){var e=iN,t=oN,n=lN,r=sN,i=aN,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=ea,u=ol("start","zoom","end"),c,d,f,h=500,m=150,p=0,v=10;function g(w){w.property("__zoom",Zm).on("wheel.zoom",q,{passive:!1}).on("mousedown.zoom",j).on("dblclick.zoom",B).filter(i).on("touchstart.zoom",F).on("touchmove.zoom",R).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,M,C,L){var N=w.selection?w.selection():w;N.property("__zoom",Zm),w!==N?I(w,M,C,L):N.interrupt().each(function(){T(this,arguments).event(L).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(w,M,C,L){g.scaleTo(w,function(){var N=this.__zoom.k,W=typeof M=="function"?M.apply(this,arguments):M;return N*W},C,L)},g.scaleTo=function(w,M,C,L){g.transform(w,function(){var N=t.apply(this,arguments),W=this.__zoom,U=C==null?b(N):typeof C=="function"?C.apply(this,arguments):C,Q=W.invert(U),te=typeof M=="function"?M.apply(this,arguments):M;return n(_(y(W,te),U,Q),N,s)},C,L)},g.translateBy=function(w,M,C,L){g.transform(w,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof C=="function"?C.apply(this,arguments):C),t.apply(this,arguments),s)},null,L)},g.translateTo=function(w,M,C,L,N){g.transform(w,function(){var W=t.apply(this,arguments),U=this.__zoom,Q=L==null?b(W):typeof L=="function"?L.apply(this,arguments):L;return n(Mi.translate(Q[0],Q[1]).scale(U.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof C=="function"?-C.apply(this,arguments):-C),W,s)},L,N)};function y(w,M){return M=Math.max(o[0],Math.min(o[1],M)),M===w.k?w:new Wn(M,w.x,w.y)}function _(w,M,C){var L=M[0]-C[0]*w.k,N=M[1]-C[1]*w.k;return L===w.x&&N===w.y?w:new Wn(w.k,L,N)}function b(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function I(w,M,C,L){w.on("start.zoom",function(){T(this,arguments).event(L).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(L).end()}).tween("zoom",function(){var N=this,W=arguments,U=T(N,W).event(L),Q=t.apply(N,W),te=C==null?b(Q):typeof C=="function"?C.apply(N,W):C,se=Math.max(Q[1][0]-Q[0][0],Q[1][1]-Q[0][1]),z=N.__zoom,V=typeof M=="function"?M.apply(N,W):M,H=l(z.invert(te).concat(se/z.k),V.invert(te).concat(se/V.k));return function(X){if(X===1)X=V;else{var ie=H(X),ce=se/ie[2];X=new Wn(ce,te[0]-ie[0]*ce,te[1]-ie[1]*ce)}U.zoom(null,X)}})}function T(w,M,C){return!C&&w.__zooming||new P(w,M)}function P(w,M){this.that=w,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,M),this.taps=0}P.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,M){return this.mouse&&w!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var M=Qt(this.that).datum();u.call(w,this.that,new rN(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),M)}};function q(w,...M){if(!e.apply(this,arguments))return;var C=T(this,M).event(w),L=this.__zoom,N=Math.max(o[0],Math.min(o[1],L.k*Math.pow(2,r.apply(this,arguments)))),W=En(w);if(C.wheel)(C.mouse[0][0]!==W[0]||C.mouse[0][1]!==W[1])&&(C.mouse[1]=L.invert(C.mouse[0]=W)),clearTimeout(C.wheel);else{if(L.k===N)return;C.mouse=[W,L.invert(W)],ra(this),C.start()}oo(w),C.wheel=setTimeout(U,m),C.zoom("mouse",n(_(y(L,N),C.mouse[0],C.mouse[1]),C.extent,s));function U(){C.wheel=null,C.end()}}function j(w,...M){if(f||!e.apply(this,arguments))return;var C=w.currentTarget,L=T(this,M,!0).event(w),N=Qt(w.view).on("mousemove.zoom",te,!0).on("mouseup.zoom",se,!0),W=En(w,C),U=w.clientX,Q=w.clientY;mE(w.view),su(w),L.mouse=[W,this.__zoom.invert(W)],ra(this),L.start();function te(z){if(oo(z),!L.moved){var V=z.clientX-U,H=z.clientY-Q;L.moved=V*V+H*H>p}L.event(z).zoom("mouse",n(_(L.that.__zoom,L.mouse[0]=En(z,C),L.mouse[1]),L.extent,s))}function se(z){N.on("mousemove.zoom mouseup.zoom",null),_E(z.view,L.moved),oo(z),L.event(z).end()}}function B(w,...M){if(e.apply(this,arguments)){var C=this.__zoom,L=En(w.changedTouches?w.changedTouches[0]:w,this),N=C.invert(L),W=C.k*(w.shiftKey?.5:2),U=n(_(y(C,W),L,N),t.apply(this,M),s);oo(w),a>0?Qt(this).transition().duration(a).call(I,U,L,w):Qt(this).call(g.transform,U,L,w)}}function F(w,...M){if(e.apply(this,arguments)){var C=w.touches,L=C.length,N=T(this,M,w.changedTouches.length===L).event(w),W,U,Q,te;for(su(w),U=0;U<L;++U)Q=C[U],te=En(Q,this),te=[te,this.__zoom.invert(te),Q.identifier],N.touch0?!N.touch1&&N.touch0[2]!==te[2]&&(N.touch1=te,N.taps=0):(N.touch0=te,W=!0,N.taps=1+!!c);c&&(c=clearTimeout(c)),W&&(N.taps<2&&(d=te[0],c=setTimeout(function(){c=null},h)),ra(this),N.start())}}function R(w,...M){if(this.__zooming){var C=T(this,M).event(w),L=w.changedTouches,N=L.length,W,U,Q,te;for(oo(w),W=0;W<N;++W)U=L[W],Q=En(U,this),C.touch0&&C.touch0[2]===U.identifier?C.touch0[0]=Q:C.touch1&&C.touch1[2]===U.identifier&&(C.touch1[0]=Q);if(U=C.that.__zoom,C.touch1){var se=C.touch0[0],z=C.touch0[1],V=C.touch1[0],H=C.touch1[1],X=(X=V[0]-se[0])*X+(X=V[1]-se[1])*X,ie=(ie=H[0]-z[0])*ie+(ie=H[1]-z[1])*ie;U=y(U,Math.sqrt(X/ie)),Q=[(se[0]+V[0])/2,(se[1]+V[1])/2],te=[(z[0]+H[0])/2,(z[1]+H[1])/2]}else if(C.touch0)Q=C.touch0[0],te=C.touch0[1];else return;C.zoom("touch",n(_(U,Q,te),C.extent,s))}}function J(w,...M){if(this.__zooming){var C=T(this,M).event(w),L=w.changedTouches,N=L.length,W,U;for(su(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),W=0;W<N;++W)U=L[W],C.touch0&&C.touch0[2]===U.identifier?delete C.touch0:C.touch1&&C.touch1[2]===U.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(U=En(U,this),Math.hypot(d[0]-U[0],d[1]-U[1])<v)){var Q=Qt(this).on("dblclick.zoom");Q&&Q.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(r=typeof w=="function"?w:Ms(+w),g):r},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Ms(!!w),g):e},g.touchable=function(w){return arguments.length?(i=typeof w=="function"?w:Ms(!!w),g):i},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Ms([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],g):[o[0],o[1]]},g.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],g):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(a=+w,g):a},g.interpolate=function(w){return arguments.length?(l=w,g):l},g.on=function(){var w=u.on.apply(u,arguments);return w===u?g:w},g.clickDistance=function(w){return arguments.length?(p=(w=+w)*w,g):Math.sqrt(p)},g.tapDistance=function(w){return arguments.length?(v=+w,g):v},g}var de=(e=>(e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom",e))(de||{}),Jv=(e=>(e.Partial="partial",e.Full="full",e))(Jv||{}),Mr=(e=>(e.Bezier="default",e.SimpleBezier="simple-bezier",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e))(Mr||{}),wr=(e=>(e.Strict="strict",e.Loose="loose",e))(wr||{}),rv=(e=>(e.Arrow="arrow",e.ArrowClosed="arrowclosed",e))(rv||{}),Ro=(e=>(e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal",e))(Ro||{}),PE=(e=>(e.TopLeft="top-left",e.TopCenter="top-center",e.TopRight="top-right",e.BottomLeft="bottom-left",e.BottomCenter="bottom-center",e.BottomRight="bottom-right",e))(PE||{});const cN=["INPUT","SELECT","TEXTAREA"],dN=typeof document<"u"?document:null;function iv(e){var t,n;const r=((n=(t=e.composedPath)==null?void 0:t.call(e))==null?void 0:n[0])||e.target,i=typeof r?.hasAttribute=="function"?r.hasAttribute("contenteditable"):!1,o=typeof r?.closest=="function"?r.closest(".nokey"):null;return cN.includes(r?.nodeName)||i||!!o}function fN(e){return e.ctrlKey||e.metaKey||e.shiftKey||e.altKey}function Jm(e,t,n,r){const i=t.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(i.length===1)return e.toLowerCase()===t.toLowerCase();r||n.add(e.toLowerCase());const o=i.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===i[a]);return r&&n.delete(e.toLowerCase()),o}function hN(e,t){return n=>{if(!n.code&&!n.key)return!1;const r=pN(n.code,e);return Array.isArray(e)?e.some(i=>Jm(n[r],i,t,n.type==="keyup")):Jm(n[r],e,t,n.type==="keyup")}}function pN(e,t){return t.includes(e)?"code":"key"}function Po(e,t){const n=he(()=>Se(t?.target)??dN),r=_r(Se(e)===!0);let i=!1;const o=new Set;let s=l(Se(e));Ee(()=>Se(e),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),iE(["blur","contextmenu"],a),Nm((...u)=>s(...u),u=>{var c,d;const f=Se(t?.actInsideInputWithModifier)??!0,h=Se(t?.preventDefault)??!1;if(i=fN(u),(!i||i&&!f)&&iv(u))return;const p=((d=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:d[0])||u.target,v=p?.nodeName==="BUTTON"||p?.nodeName==="A";!h&&(i||!v)&&u.preventDefault(),r.value=!0},{eventName:"keydown",target:n}),Nm((...u)=>s(...u),u=>{const c=Se(t?.actInsideInputWithModifier)??!0;if(r.value){if((!i||i&&!c)&&iv(u))return;i=!1,r.value=!1}},{eventName:"keyup",target:n});function a(){i=!1,o.clear(),r.value=Se(e)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),r.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?hN(u,o):u}return r}const TE="vue-flow__node-desc",NE="vue-flow__edge-desc",vN="vue-flow__aria-live",ME=["Enter"," ","Escape"],$i={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function Ca(e){return{...e.computedPosition||{x:0,y:0},width:e.dimensions.width||0,height:e.dimensions.height||0}}function $a(e,t){const n=Math.max(0,Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x)),r=Math.max(0,Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y));return Math.ceil(n*r)}function ul(e){return{width:e.offsetWidth,height:e.offsetHeight}}function Jr(e,t=0,n=1){return Math.min(Math.max(e,t),n)}function DE(e,t){return{x:Jr(e.x,t[0][0],t[1][0]),y:Jr(e.y,t[0][1],t[1][1])}}function Qm(e){const t=e.getRootNode();return"elementFromPoint"in t?t:window.document}function xr(e){return e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e}function Wr(e){return e&&typeof e=="object"&&"id"in e&&"position"in e&&!xr(e)}function vo(e){return Wr(e)&&"computedPosition"in e}function Ds(e){return!Number.isNaN(e)&&Number.isFinite(e)}function gN(e){return Ds(e.width)&&Ds(e.height)&&Ds(e.x)&&Ds(e.y)}function mN(e,t,n){const r={id:e.id.toString(),type:e.type??"default",dimensions:Co({width:0,height:0}),computedPosition:Co({z:0,...e.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:rt(e.data)?e.data:{},events:Co(rt(e.events)?e.events:{})};return Object.assign(t??r,e,{id:e.id.toString(),parentNode:n})}function qE(e,t,n){var r,i;const o={id:e.id.toString(),type:e.type??t?.type??"default",source:e.source.toString(),target:e.target.toString(),sourceHandle:(r=e.sourceHandle)==null?void 0:r.toString(),targetHandle:(i=e.targetHandle)==null?void 0:i.toString(),updatable:e.updatable??n?.updatable,selectable:e.selectable??n?.selectable,focusable:e.focusable??n?.focusable,data:rt(e.data)?e.data:{},events:Co(rt(e.events)?e.events:{}),label:e.label??"",interactionWidth:e.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(t??o,e,{id:e.id.toString()})}function BE(e,t,n,r){const i=typeof e=="string"?e:e.id,o=new Set,s=r==="source"?"target":"source";for(const a of n)a[s]===i&&o.add(a[r]);return t.filter(a=>o.has(a.id))}function _N(...e){if(e.length===3){const[o,s,a]=e;return BE(o,s,a,"target")}const[t,n]=e,r=typeof t=="string"?t:t.id;return n.filter(o=>xr(o)&&o.source===r).map(o=>n.find(s=>Wr(s)&&s.id===o.target))}function yN(...e){if(e.length===3){const[o,s,a]=e;return BE(o,s,a,"source")}const[t,n]=e,r=typeof t=="string"?t:t.id;return n.filter(o=>xr(o)&&o.target===r).map(o=>n.find(s=>Wr(s)&&s.id===o.source))}function LE({source:e,sourceHandle:t,target:n,targetHandle:r}){return`vueflow__edge-${e}${t??""}-${n}${r??""}`}function bN(e,t){return t.some(n=>xr(n)&&n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle))}function Xo({x:e,y:t},{x:n,y:r,zoom:i}){return{x:e*i+n,y:t*i+r}}function Zo({x:e,y:t},{x:n,y:r,zoom:i},o=!1,s=[1,1]){const a={x:(e-n)/i,y:(t-r)/i};return o?cl(a,s):a}function zE(e,t){return{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}}function ka({x:e,y:t,width:n,height:r}){return{x:e,y:t,x2:e+n,y2:t+r}}function VE({x:e,y:t,x2:n,y2:r}){return{x:e,y:t,width:n-e,height:r-t}}function wN(e,t){return VE(zE(ka(e),ka(t)))}function Qv(e){let t={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<e.length;n++){const r=e[n];t=zE(t,ka({...r.computedPosition,...r.dimensions}))}return VE(t)}function FE(e,t,n={x:0,y:0,zoom:1},r=!1,i=!1){const o={...Zo(t,n),width:t.width/n.zoom,height:t.height/n.zoom},s=[];for(const a of e){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,d=l.width??a.width??null,f=l.height??a.height??null;if(i&&!u||c)continue;const h=$a(o,Ca(a)),m=d===null||f===null,p=r&&h>0,v=(d??0)*(f??0);(m||p||h>=v||a.dragging)&&s.push(a)}return s}function Dr(e,t){const n=new Set;if(typeof e=="string")n.add(e);else if(e.length>=1)for(const r of e)n.add(r.id);return t.filter(r=>n.has(r.source)||n.has(r.target))}function pi(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){const n=Number.parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){const n=Number.parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return vs(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function xN(e,t,n){if(typeof e=="string"||typeof e=="number"){const r=pi(e,n),i=pi(e,t);return{top:r,right:i,bottom:r,left:i,x:i*2,y:r*2}}if(typeof e=="object"){const r=pi(e.top??e.y??0,n),i=pi(e.bottom??e.y??0,n),o=pi(e.left??e.x??0,t),s=pi(e.right??e.x??0,t);return{top:r,right:s,bottom:i,left:o,x:o+s,y:r+i}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function SN(e,t,n,r,i,o){const{x:s,y:a}=Xo(e,{x:t,y:n,zoom:r}),{x:l,y:u}=Xo({x:e.x+e.width,y:e.y+e.height},{x:t,y:n,zoom:r}),c=i-l,d=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(d)}}function e_(e,t,n,r,i,o=.1){const s=xN(o,t,n),a=(t-s.x)/e.width,l=(n-s.y)/e.height,u=Math.min(a,l),c=Jr(u,r,i),d=e.x+e.width/2,f=e.y+e.height/2,h=t/2-d*c,m=n/2-f*c,p=SN(e,h,m,c,t,n),v={left:Math.min(p.left-s.left,0),top:Math.min(p.top-s.top,0),right:Math.min(p.right-s.right,0),bottom:Math.min(p.bottom-s.bottom,0)};return{x:h-v.left+v.right,y:m-v.top+v.bottom,zoom:c}}function EN(e,t){return{x:t.x+e.x,y:t.y+e.y,z:(e.z>t.z?e.z:t.z)+1}}function HE(e,t){if(!e.parentNode)return!1;const n=t.get(e.parentNode);return n?n.selected?!0:HE(n,t):!1}function Jo(e,t){return typeof e>"u"?"":typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`}function ov(e){const t=e.ctrlKey&&Qo()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t}function t_(e,t,n){return e<t?Jr(Math.abs(e-t),1,t)/t:e>n?-Jr(Math.abs(e-n),1,t)/t:0}function jE(e,t,n=15,r=40){const i=t_(e.x,r,t.width-r)*n,o=t_(e.y,r,t.height-r)*n;return[i,o]}function au(e,t){if(t){const n=e.position.x+e.dimensions.width-t.dimensions.width,r=e.position.y+e.dimensions.height-t.dimensions.height;if(n>0||r>0||e.position.x<0||e.position.y<0){let i={};if(typeof t.style=="function"?i={...t.style(t)}:t.style&&(i={...t.style}),i.width=i.width??`${t.dimensions.width}px`,i.height=i.height??`${t.dimensions.height}px`,n>0)if(typeof i.width=="string"){const o=Number(i.width.replace("px",""));i.width=`${o+n}px`}else i.width+=n;if(r>0)if(typeof i.height=="string"){const o=Number(i.height.replace("px",""));i.height=`${o+r}px`}else i.height+=r;if(e.position.x<0){const o=Math.abs(e.position.x);if(t.position.x=t.position.x-o,typeof i.width=="string"){const s=Number(i.width.replace("px",""));i.width=`${s+o}px`}else i.width+=o;e.position.x=0}if(e.position.y<0){const o=Math.abs(e.position.y);if(t.position.y=t.position.y-o,typeof i.height=="string"){const s=Number(i.height.replace("px",""));i.height=`${s+o}px`}else i.height+=o;e.position.y=0}t.dimensions.width=Number(i.width.toString().replace("px","")),t.dimensions.height=Number(i.height.toString().replace("px","")),typeof t.style=="function"?t.style=o=>{const s=t.style;return{...s(o),...i}}:t.style={...t.style,...i}}}}function n_(e,t){var n,r;const i=e.filter(s=>s.type==="add"||s.type==="remove");for(const s of i)if(s.type==="add")t.findIndex(l=>l.id===s.item.id)===-1&&t.push(s.item);else if(s.type==="remove"){const a=t.findIndex(l=>l.id===s.id);a!==-1&&t.splice(a,1)}const o=t.map(s=>s.id);for(const s of t)for(const a of e)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(vo(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=t[o.indexOf(s.parentNode)];l&&vo(l)&&au(s,l)}break;case"dimensions":if(vo(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(r=a.dimensions)==null?void 0:r.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=t[o.indexOf(s.parentNode)];l&&vo(l)&&(!!l.dimensions.width&&!!l.dimensions.height?au(s,l):rn(()=>{au(s,l)}))}break}return t}function ur(e,t){return{id:e,type:"select",selected:t}}function r_(e){return{item:e,type:"add"}}function i_(e){return{id:e,type:"remove"}}function o_(e,t,n,r,i){return{id:e,source:t,target:n,sourceHandle:r||null,targetHandle:i||null,type:"remove"}}function hr(e,t=new Set,n=!1){const r=[];for(const[i,o]of e){const s=t.has(i);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),r.push(ur(o.id,s)))}return r}const s_=()=>{};function ae(e){const t=new Set;let n=s_,r=()=>!1;const i=()=>t.size>0||r(),o=f=>{n=f},s=()=>{n=s_},a=f=>{r=f},l=()=>{r=()=>!1},u=f=>{t.delete(f)};return{on:f=>{t.add(f);const h=()=>u(f);return Uo(h),{off:h}},off:u,trigger:f=>{const h=[n];return i()?h.push(...t):e&&h.push(e),Promise.allSettled(h.map(m=>m(f)))},hasListeners:i,listeners:t,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function a_(e,t,n){let r=e;do{if(r&&r.matches(t))return!0;if(r===n)return!1;r=r.parentElement}while(r);return!1}function CN(e,t,n,r){var i,o;const s=new Map;for(const[a,l]of e)(l.selected||l.id===r)&&(!l.parentNode||!HE(l,e))&&(l.draggable||t&&typeof l.draggable>"u")&&e.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((i=l.computedPosition)==null?void 0:i.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function lu({id:e,dragItems:t,findNode:n}){const r=[];for(const i of t){const o=n(i.id);o&&r.push(o)}return[e?r.find(i=>i.id===e):r[0],r]}function UE(e){if(Array.isArray(e))switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[0,0,0,0]}return[e,e,e,e]}function $N(e,t,n){const[r,i,o,s]=typeof e!="string"?UE(e.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+r],[n.computedPosition.x+n.dimensions.width-i,n.computedPosition.y+n.dimensions.height-o]]:!1}function kN(e,t,n,r){let i=e.extent||n;if((i==="parent"||!Array.isArray(i)&&i?.range==="parent")&&!e.expandParent)if(e.parentNode&&r&&e.dimensions.width&&e.dimensions.height){const o=$N(i,e,r);o&&(i=o)}else t(new ct(it.NODE_EXTENT_INVALID,e.id)),i=n;else if(Array.isArray(i)){const o=r?.computedPosition.x||0,s=r?.computedPosition.y||0;i=[[i[0][0]+o,i[0][1]+s],[i[1][0]+o,i[1][1]+s]]}else if(i!=="parent"&&i?.range&&Array.isArray(i.range)){const[o,s,a,l]=UE(i.padding),u=r?.computedPosition.x||0,c=r?.computedPosition.y||0;i=[[i.range[0][0]+u+l,i.range[0][1]+c+o],[i.range[1][0]+u-s,i.range[1][1]+c-a]]}return i==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:i}function IN({width:e,height:t},n){return[n[0],[n[1][0]-(e||0),n[1][1]-(t||0)]]}function eg(e,t,n,r,i){const o=IN(e.dimensions,kN(e,n,r,i)),s=DE(t,o);return{position:{x:s.x-(i?.computedPosition.x||0),y:s.y-(i?.computedPosition.y||0)},computedPosition:s}}function Di(e,t,n=de.Left,r=!1){const i=(t?.x??0)+e.computedPosition.x,o=(t?.y??0)+e.computedPosition.y,{width:s,height:a}=t??PN(e);if(r)return{x:i+s/2,y:o+a/2};switch(t?.position??n){case de.Top:return{x:i+s/2,y:o};case de.Right:return{x:i+s,y:o+a/2};case de.Bottom:return{x:i+s/2,y:o+a};case de.Left:return{x:i,y:o+a/2}}}function l_(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function AN({sourcePos:e,targetPos:t,sourceWidth:n,sourceHeight:r,targetWidth:i,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x+n,t.x+i),y2:Math.max(e.y+r,t.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=ka({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function ON(e,t,n=!1){const r=typeof e.zIndex=="number";let i=r?e.zIndex:0;const o=t(e.source),s=t(e.target);return!o||!s?0:(n&&(i=r?e.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),i)}var it=(e=>(e.MISSING_STYLES="MISSING_STYLES",e.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",e.NODE_INVALID="NODE_INVALID",e.NODE_NOT_FOUND="NODE_NOT_FOUND",e.NODE_MISSING_PARENT="NODE_MISSING_PARENT",e.NODE_TYPE_MISSING="NODE_TYPE_MISSING",e.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",e.EDGE_INVALID="EDGE_INVALID",e.EDGE_NOT_FOUND="EDGE_NOT_FOUND",e.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",e.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",e.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",e.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",e.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",e.EDGE_ORPHANED="EDGE_ORPHANED",e.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",e))(it||{});const u_={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:e=>`Node is invalid
Node: ${e}`,NODE_NOT_FOUND:e=>`Node not found
Node: ${e}`,NODE_MISSING_PARENT:(e,t)=>`Node is missing a parent
Node: ${e}
Parent: ${t}`,NODE_TYPE_MISSING:e=>`Node type is missing
Type: ${e}`,NODE_EXTENT_INVALID:e=>`Only child nodes can use a parent extent
Node: ${e}`,EDGE_INVALID:e=>`An edge needs a source and a target
Edge: ${e}`,EDGE_SOURCE_MISSING:(e,t)=>`Edge source is missing
Edge: ${e} 
Source: ${t}`,EDGE_TARGET_MISSING:(e,t)=>`Edge target is missing
Edge: ${e} 
Target: ${t}`,EDGE_TYPE_MISSING:e=>`Edge type is missing
Type: ${e}`,EDGE_SOURCE_TARGET_SAME:(e,t,n)=>`Edge source and target are the same
Edge: ${e} 
Source: ${t} 
Target: ${n}`,EDGE_SOURCE_TARGET_MISSING:(e,t,n)=>`Edge source or target is missing
Edge: ${e} 
Source: ${t} 
Target: ${n}`,EDGE_ORPHANED:e=>`Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e}`,EDGE_NOT_FOUND:e=>`Edge not found
Edge: ${e}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class ct extends Error{constructor(t,...n){var r;super((r=u_[t])==null?void 0:r.call(u_,...n)),this.name="VueFlowError",this.code=t,this.args=n}}function tg(e){return"clientX"in e}function RN(e){return"sourceEvent"in e}function kn(e,t){const n=tg(e);let r,i;return n?(r=e.clientX,i=e.clientY):"touches"in e&&e.touches.length>0?(r=e.touches[0].clientX,i=e.touches[0].clientY):"changedTouches"in e&&e.changedTouches.length>0?(r=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY):(r=0,i=0),{x:r-(t?.left??0),y:i-(t?.top??0)}}const Qo=()=>{var e;return typeof navigator<"u"&&((e=navigator?.userAgent)==null?void 0:e.indexOf("Mac"))>=0};function PN(e){var t,n;return{width:((t=e.dimensions)==null?void 0:t.width)??e.width??0,height:((n=e.dimensions)==null?void 0:n.height)??e.height??0}}function cl(e,t=[1,1]){return{x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}}const TN=()=>!0;function uu(e){e?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function NN(e,t,n){const r=[],i={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(const o of t.values())$a(i,Ca(o))>0&&r.push(o);return r}const MN=250;function DN(e,t,n,r){var i,o;let s=[],a=Number.POSITIVE_INFINITY;const l=NN(e,n,t+MN);for(const u of l){const c=[...((i=u.handleBounds)==null?void 0:i.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const d of c){if(r.nodeId===d.nodeId&&r.type===d.type&&r.id===d.id)continue;const{x:f,y:h}=Di(u,d,d.position,!0),m=Math.sqrt((f-e.x)**2+(h-e.y)**2);m>t||(m<a?(s=[{...d,x:f,y:h}],a=m):m===a&&s.push({...d,x:f,y:h}))}}if(!s.length)return null;if(s.length>1){const u=r.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function c_(e,{handle:t,connectionMode:n,fromNodeId:r,fromHandleId:i,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=TN},c,d,f,h){const m=o==="target",p=t?s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:v,y:g}=kn(e),y=s.elementFromPoint(v,g),_=y?.classList.contains(`${a}-flow__handle`)?y:p,b={handleDomNode:_,isValid:!1,connection:null,toHandle:null};if(_){const I=GE(void 0,_),T=_.getAttribute("data-nodeid"),P=_.getAttribute("data-handleid"),q=_.classList.contains("connectable"),j=_.classList.contains("connectableend");if(!T||!I)return b;const B={source:m?T:r,sourceHandle:m?P:i,target:m?r:T,targetHandle:m?i:P};b.connection=B;const R=q&&j&&(n===wr.Strict?m&&I==="source"||!m&&I==="target":T!==r||P!==i);b.isValid=R&&u(B,{nodes:d,edges:c,sourceNode:f(B.source),targetNode:f(B.target)}),b.toHandle=KE(T,I,P,h,n,!0)}return b}function GE(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function qN(e,t){let n=null;return t?n="valid":e&&!t&&(n="invalid"),n}function BN(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}function KE(e,t,n,r,i,o=!1){var s,a,l;const u=r.get(e);if(!u)return null;const c=i===wr.Strict?(s=u.handleBounds)==null?void 0:s[t]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],d=(n?c?.find(f=>f.id===n):c?.[0])??null;return d&&o?{...d,...Di(u,d,d.position,!0)}:d}const sv={[de.Left]:de.Right,[de.Right]:de.Left,[de.Top]:de.Bottom,[de.Bottom]:de.Top},LN=["production","prod"];function vs(e,...t){WE()&&console.warn(`[Vue Flow]: ${e}`,...t)}function WE(){return!LN.includes("production")}function d_(e,t,n,r,i){const o=t.querySelectorAll(`.vue-flow__handle.${e}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:i,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/r,y:(a.top-n.top)/r,...ul(s)}}):null}function av(e,t,n,r,i,o=!1,s){i.value=!1,e.selected?(o||e.selected&&t)&&(r([e]),rn(()=>{s.blur()})):n([e])}function rt(e){return typeof ue(e)<"u"}function zN(e,t,n,r){if(!e||!e.source||!e.target)return n(new ct(it.EDGE_INVALID,e?.id??"[ID UNKNOWN]")),!1;let i;return xr(e)?i=e:i={...e,id:LE(e)},i=qE(i,void 0,r),bN(i,t)?!1:i}function VN(e,t,n,r,i){if(!t.source||!t.target)return i(new ct(it.EDGE_INVALID,e.id)),!1;if(!n)return i(new ct(it.EDGE_NOT_FOUND,e.id)),!1;const{id:o,...s}=e;return{...s,id:r?LE(t):o,source:t.source,target:t.target,sourceHandle:t.sourceHandle,targetHandle:t.targetHandle}}function f_(e,t,n){const r={},i=[];for(let o=0;o<e.length;++o){const s=e[o];if(!Wr(s)){n(new ct(it.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=mN(s,t(s.id),s.parentNode);s.parentNode&&(r[s.parentNode]=!0),i[o]=a}for(const o of i){const s=t(o.parentNode)||i.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new ct(it.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||r[o.id])&&(r[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return i}function h_(e,t,n,r,i,o){let s=i;const a=r.get(s)||new Map;r.set(s,a.set(n,t)),s=`${i}-${e}`;const l=r.get(s)||new Map;if(r.set(s,l.set(n,t)),o){s=`${i}-${e}-${o}`;const u=r.get(s)||new Map;r.set(s,u.set(n,t))}}function cu(e,t,n){e.clear();for(const r of n){const{source:i,target:o,sourceHandle:s=null,targetHandle:a=null}=r,l={edgeId:r.id,source:i,target:o,sourceHandle:s,targetHandle:a},u=`${i}-${s}--${o}-${a}`,c=`${o}-${a}--${i}-${s}`;h_("source",l,c,e,i,s),h_("target",l,u,e,o,a)}}function p_(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function du(e,t,n,r,i,o,s,a){const l=[];for(const u of e){const c=xr(u)?u:zN(u,a,i,o);if(!c)continue;const d=n(c.source),f=n(c.target);if(!d||!f){i(new ct(it.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!d){i(new ct(it.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!f){i(new ct(it.EDGE_TARGET_MISSING,c.id,c.target));continue}if(t&&!t(c,{edges:a,nodes:s,sourceNode:d,targetNode:f})){i(new ct(it.EDGE_INVALID,c.id));continue}const h=r(c.id);l.push({...qE(c,h,o),sourceNode:d,targetNode:f})}return l}const v_=Symbol("vueFlow"),YE=Symbol("nodeId"),XE=Symbol("nodeRef"),FN=Symbol("edgeId"),HN=Symbol("edgeRef"),dl=Symbol("slots");function ZE(e){const{vueFlowRef:t,snapToGrid:n,snapGrid:r,noDragClassName:i,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:d,panBy:f,findNode:h,multiSelectionActive:m,nodesSelectionActive:p,selectNodesOnDrag:v,removeSelectedElements:g,addSelectedNodes:y,updateNodePositions:_,emits:b}=He(),{onStart:I,onDrag:T,onStop:P,onClick:q,el:j,disabled:B,id:F,selectable:R,dragHandle:J}=e,w=_r(!1);let M=[],C,L=null,N={x:void 0,y:void 0},W={x:0,y:0},U=null,Q=!1,te=!1,se=0,z=!1;const V=GN(),H=({x:k,y:A})=>{N={x:k,y:A};let S=!1;if(M=M.map(x=>{const E={x:k-x.distance.x,y:A-x.distance.y},{computedPosition:$}=eg(x,n.value?cl(E,r.value):E,b.error,s.value,x.parentNode?h(x.parentNode):void 0);return S=S||x.position.x!==$.x||x.position.y!==$.y,x.position=$,x}),te=te||S,!!S&&(_(M,!0,!0),w.value=!0,U)){const[x,E]=lu({id:F,dragItems:M,findNode:h});T({event:U,node:x,nodes:E})}},X=()=>{if(!L)return;const[k,A]=jE(W,L,c.value);if(k!==0||A!==0){const S={x:(N.x??0)-k/l.value.zoom,y:(N.y??0)-A/l.value.zoom};f({x:k,y:A})&&H(S)}se=requestAnimationFrame(X)},ie=(k,A)=>{Q=!0;const S=h(F);!v.value&&!m.value&&S&&(S.selected||g()),S&&Se(R)&&v.value&&av(S,m.value,y,g,p,!1,A);const x=V(k.sourceEvent);if(N=x,M=CN(o.value,d.value,x,F),M.length){const[E,$]=lu({id:F,dragItems:M,findNode:h});I({event:k.sourceEvent,node:E,nodes:$})}},ce=(k,A)=>{var S;k.sourceEvent.type==="touchmove"&&k.sourceEvent.touches.length>1||(te=!1,a.value===0&&ie(k,A),N=V(k.sourceEvent),L=((S=t.value)==null?void 0:S.getBoundingClientRect())||null,W=kn(k.sourceEvent,L))},le=(k,A)=>{const S=V(k.sourceEvent);if(!z&&Q&&u.value&&(z=!0,X()),!Q){const x=S.xSnapped-(N.x??0),E=S.ySnapped-(N.y??0);Math.sqrt(x*x+E*E)>a.value&&ie(k,A)}(N.x!==S.xSnapped||N.y!==S.ySnapped)&&M.length&&Q&&(U=k.sourceEvent,W=kn(k.sourceEvent,L),H(S))},ve=k=>{let A=!1;if(!Q&&!w.value&&!m.value){const S=k.sourceEvent,x=V(S),E=x.xSnapped-(N.x??0),$=x.ySnapped-(N.y??0),O=Math.sqrt(E*E+$*$);O!==0&&O<=a.value&&(q?.(S),A=!0)}if(M.length&&!A){te&&(_(M,!1,!1),te=!1);const[S,x]=lu({id:F,dragItems:M,findNode:h});P({event:k.sourceEvent,node:S,nodes:x})}M=[],w.value=!1,z=!1,Q=!1,N={x:void 0,y:void 0},cancelAnimationFrame(se)};return Ee([()=>Se(B),j],([k,A],S,x)=>{if(A){const E=Qt(A);k||(C=gP().on("start",$=>ce($,A)).on("drag",$=>le($,A)).on("end",$=>ve($)).filter($=>{const O=$.target,K=Se(J);return!$.button&&(!i.value||!a_(O,`.${i.value}`,A)&&(!K||a_(O,K,A)))}),E.call(C)),x(()=>{E.on(".drag",null),C&&(C.on("start",null),C.on("drag",null),C.on("end",null))})}}),w}function jN(){return{doubleClick:ae(),click:ae(),mouseEnter:ae(),mouseMove:ae(),mouseLeave:ae(),contextMenu:ae(),updateStart:ae(),update:ae(),updateEnd:ae()}}function UN(e,t){const n=jN();return n.doubleClick.on(r=>{var i,o;t.edgeDoubleClick(r),(o=(i=e.events)==null?void 0:i.doubleClick)==null||o.call(i,r)}),n.click.on(r=>{var i,o;t.edgeClick(r),(o=(i=e.events)==null?void 0:i.click)==null||o.call(i,r)}),n.mouseEnter.on(r=>{var i,o;t.edgeMouseEnter(r),(o=(i=e.events)==null?void 0:i.mouseEnter)==null||o.call(i,r)}),n.mouseMove.on(r=>{var i,o;t.edgeMouseMove(r),(o=(i=e.events)==null?void 0:i.mouseMove)==null||o.call(i,r)}),n.mouseLeave.on(r=>{var i,o;t.edgeMouseLeave(r),(o=(i=e.events)==null?void 0:i.mouseLeave)==null||o.call(i,r)}),n.contextMenu.on(r=>{var i,o;t.edgeContextMenu(r),(o=(i=e.events)==null?void 0:i.contextMenu)==null||o.call(i,r)}),n.updateStart.on(r=>{var i,o;t.edgeUpdateStart(r),(o=(i=e.events)==null?void 0:i.updateStart)==null||o.call(i,r)}),n.update.on(r=>{var i,o;t.edgeUpdate(r),(o=(i=e.events)==null?void 0:i.update)==null||o.call(i,r)}),n.updateEnd.on(r=>{var i,o;t.edgeUpdateEnd(r),(o=(i=e.events)==null?void 0:i.updateEnd)==null||o.call(i,r)}),Object.entries(n).reduce((r,[i,o])=>(r.emit[i]=o.trigger,r.on[i]=o.on,r),{emit:{},on:{}})}function GN(){const{viewport:e,snapGrid:t,snapToGrid:n,vueFlowRef:r}=He();return i=>{var o;const s=((o=r.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=RN(i)?i.sourceEvent:i,{x:l,y:u}=kn(a,s),c=Zo({x:l,y:u},e.value),{x:d,y:f}=n.value?cl(c,t.value):c;return{xSnapped:d,ySnapped:f,...c}}}function qs(){return!0}function JE({handleId:e,nodeId:t,type:n,isValidConnection:r,edgeUpdaterType:i,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:d,connectionClickStartHandle:f,nodesConnectable:h,autoPanOnConnect:m,autoPanSpeed:p,findNode:v,panBy:g,startConnection:y,updateConnection:_,endConnection:b,emits:I,viewport:T,edges:P,nodes:q,isValidConnection:j,nodeLookup:B}=He();let F=null,R=!1,J=null;function w(C){var L;const N=Se(n)==="target",W=tg(C),U=Qm(C.target),Q=C.currentTarget;if(Q&&(W&&C.button===0||!W)){let te=function(ee){S=kn(ee,ve),H=DN(Zo(S,T.value,!1,[1,1]),c.value,B.value,$),x||(E(),x=!0);const Z=c_(ee,{handle:H,connectionMode:u.value,fromNodeId:Se(t),fromHandleId:Se(e),fromType:N?"target":"source",isValidConnection:V,doc:U,lib:"vue",flowId:a,nodeLookup:B.value},P.value,q.value,v,B.value);J=Z.handleDomNode,F=Z.connection,R=BN(!!H,Z.isValid);const re={...G,isValid:R,to:Z.toHandle&&R?Xo({x:Z.toHandle.x,y:Z.toHandle.y},T.value):S,toHandle:Z.toHandle,toPosition:R&&Z.toHandle?Z.toHandle.position:sv[$.position],toNode:Z.toHandle?B.value.get(Z.toHandle.nodeId):null};if(R&&H&&G?.toHandle&&re.toHandle&&G.toHandle.type===re.toHandle.type&&G.toHandle.nodeId===re.toHandle.nodeId&&G.toHandle.id===re.toHandle.id&&G.to.x===re.to.x&&G.to.y===re.to.y)return;const oe=H??Z.toHandle;if(_(oe&&R?Xo({x:oe.x,y:oe.y},T.value):S,oe,qN(!!oe,R)),G=re,!H&&!R&&!J)return uu(A);F&&F.source!==F.target&&J&&(uu(A),A=J,J.classList.add("connecting","vue-flow__handle-connecting"),J.classList.toggle("valid",!!R),J.classList.toggle("vue-flow__handle-valid",!!R))},se=function(ee){"touches"in ee&&ee.touches.length>0||((H||J)&&F&&R&&(o?o(ee,F):I.connect(F)),I.connectEnd(ee),i&&s?.(ee),uu(A),cancelAnimationFrame(X),b(ee),x=!1,R=!1,F=null,J=null,U.removeEventListener("mousemove",te),U.removeEventListener("mouseup",se),U.removeEventListener("touchmove",te),U.removeEventListener("touchend",se))};const z=v(Se(t));let V=Se(r)||j.value||qs;!V&&z&&(V=(N?z.isValidSourcePos:z.isValidTargetPos)||qs);let H,X=0;const{x:ie,y:ce}=kn(C),le=GE(Se(i),Q),ve=(L=l.value)==null?void 0:L.getBoundingClientRect();if(!ve||!le)return;const k=KE(Se(t),le,Se(e),B.value,u.value);if(!k)return;let A,S=kn(C,ve),x=!1;const E=()=>{if(!m.value)return;const[ee,Z]=jE(S,ve,p.value);g({x:ee,y:Z}),X=requestAnimationFrame(E)},$={...k,nodeId:Se(t),type:le,position:k.position},O=B.value.get(Se(t)),Y={inProgress:!0,isValid:null,from:Di(O,$,de.Left,!0),fromHandle:$,fromPosition:$.position,fromNode:O,to:S,toHandle:null,toPosition:sv[$.position],toNode:null};y({nodeId:Se(t),id:Se(e),type:le,position:Q?.getAttribute("data-handlepos")||de.Top,...S},{x:ie-ve.left,y:ce-ve.top}),I.connectStart({event:C,nodeId:Se(t),handleId:Se(e),handleType:le});let G=Y;U.addEventListener("mousemove",te),U.addEventListener("mouseup",se),U.addEventListener("touchmove",te),U.addEventListener("touchend",se)}}function M(C){var L,N;if(!d.value)return;const W=Se(n)==="target";if(!f.value){I.clickConnectStart({event:C,nodeId:Se(t),handleId:Se(e)}),y({nodeId:Se(t),type:Se(n),id:Se(e),position:de.Top,...kn(C)},void 0,!0);return}let U=Se(r)||j.value||qs;const Q=v(Se(t));if(!U&&Q&&(U=(W?Q.isValidSourcePos:Q.isValidTargetPos)||qs),Q&&(typeof Q.connectable>"u"?h.value:Q.connectable)===!1)return;const te=Qm(C.target),se=c_(C,{handle:{nodeId:Se(t),id:Se(e),type:Se(n),position:de.Top,...kn(C)},connectionMode:u.value,fromNodeId:f.value.nodeId,fromHandleId:f.value.id??null,fromType:f.value.type,isValidConnection:U,doc:te,lib:"vue",flowId:a,nodeLookup:B.value},P.value,q.value,v,B.value),z=((L=se.connection)==null?void 0:L.source)===((N=se.connection)==null?void 0:N.target);se.isValid&&se.connection&&!z&&I.connect(se.connection),I.clickConnectEnd(C),b(C,!0)}return{handlePointerDown:w,handleClick:M}}function KN(){return on(YE,"")}function QE(e){const t=e??KN()??"",n=on(XE,Te(null)),{findNode:r,edges:i,emits:o}=He(),s=r(t);return s||o.error(new ct(it.NODE_NOT_FOUND,t)),{id:t,nodeEl:n,node:s,parentNode:he(()=>r(s.parentNode)),connectedEdges:he(()=>Dr([s],i.value))}}function WN(){return{doubleClick:ae(),click:ae(),mouseEnter:ae(),mouseMove:ae(),mouseLeave:ae(),contextMenu:ae(),dragStart:ae(),drag:ae(),dragStop:ae()}}function YN(e,t){const n=WN();return n.doubleClick.on(r=>{var i,o;t.nodeDoubleClick(r),(o=(i=e.events)==null?void 0:i.doubleClick)==null||o.call(i,r)}),n.click.on(r=>{var i,o;t.nodeClick(r),(o=(i=e.events)==null?void 0:i.click)==null||o.call(i,r)}),n.mouseEnter.on(r=>{var i,o;t.nodeMouseEnter(r),(o=(i=e.events)==null?void 0:i.mouseEnter)==null||o.call(i,r)}),n.mouseMove.on(r=>{var i,o;t.nodeMouseMove(r),(o=(i=e.events)==null?void 0:i.mouseMove)==null||o.call(i,r)}),n.mouseLeave.on(r=>{var i,o;t.nodeMouseLeave(r),(o=(i=e.events)==null?void 0:i.mouseLeave)==null||o.call(i,r)}),n.contextMenu.on(r=>{var i,o;t.nodeContextMenu(r),(o=(i=e.events)==null?void 0:i.contextMenu)==null||o.call(i,r)}),n.dragStart.on(r=>{var i,o;t.nodeDragStart(r),(o=(i=e.events)==null?void 0:i.dragStart)==null||o.call(i,r)}),n.drag.on(r=>{var i,o;t.nodeDrag(r),(o=(i=e.events)==null?void 0:i.drag)==null||o.call(i,r)}),n.dragStop.on(r=>{var i,o;t.nodeDragStop(r),(o=(i=e.events)==null?void 0:i.dragStop)==null||o.call(i,r)}),Object.entries(n).reduce((r,[i,o])=>(r.emit[i]=o.trigger,r.on[i]=o.on,r),{emit:{},on:{}})}function eC(){const{getSelectedNodes:e,nodeExtent:t,updateNodePositions:n,findNode:r,snapGrid:i,snapToGrid:o,nodesDraggable:s,emits:a}=He();return(l,u=!1)=>{const c=o.value?i.value[0]:5,d=o.value?i.value[1]:5,f=u?4:1,h=l.x*c*f,m=l.y*d*f,p=[];for(const v of e.value)if(v.draggable||s&&typeof v.draggable>"u"){const g={x:v.computedPosition.x+h,y:v.computedPosition.y+m},{position:y}=eg(v,g,a.error,t.value,v.parentNode?r(v.parentNode):void 0);p.push({id:v.id,position:y,from:v.position,distance:{x:l.x,y:l.y},dimensions:v.dimensions})}n(p,!0,!1)}}const Bs=.1,XN=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2;function lr(){return vs("Viewport not initialized yet."),Promise.resolve(!1)}const ZN={zoomIn:lr,zoomOut:lr,zoomTo:lr,fitView:lr,setCenter:lr,fitBounds:lr,project:e=>e,screenToFlowCoordinate:e=>e,flowToScreenCoordinate:e=>e,setViewport:lr,setTransform:lr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function JN(e){function t(r,i){return new Promise(o=>{e.d3Selection&&e.d3Zoom?e.d3Zoom.interpolate(i?.interpolate==="linear"?Oo:ea).scaleBy(fu(e.d3Selection,i?.duration,i?.ease,()=>{o(!0)}),r):o(!1)})}function n(r,i,o,s){return new Promise(a=>{var l;const{x:u,y:c}=DE({x:-r,y:-i},e.translateExtent),d=Mi.translate(-u,-c).scale(o);e.d3Selection&&e.d3Zoom?(l=e.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?Oo:ea).transform(fu(e.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),d):a(!1)})}return he(()=>e.d3Zoom&&e.d3Selection&&e.dimensions.width&&e.dimensions.height?{viewportInitialized:!0,zoomIn:i=>t(1.2,i),zoomOut:i=>t(1/1.2,i),zoomTo:(i,o)=>new Promise(s=>{e.d3Selection&&e.d3Zoom?e.d3Zoom.interpolate(o?.interpolate==="linear"?Oo:ea).scaleTo(fu(e.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),i):s(!1)}),setViewport:(i,o)=>n(i.x,i.y,i.zoom,o),setTransform:(i,o)=>n(i.x,i.y,i.zoom,o),getViewport:()=>({x:e.viewport.x,y:e.viewport.y,zoom:e.viewport.zoom}),getTransform:()=>({x:e.viewport.x,y:e.viewport.y,zoom:e.viewport.zoom}),fitView:(i={padding:Bs,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const f of e.nodes)f.dimensions.width&&f.dimensions.height&&(i?.includeHiddenNodes||!f.hidden)&&(!((o=i.nodes)!=null&&o.length)||(s=i.nodes)!=null&&s.length&&i.nodes.includes(f.id))&&a.push(f);if(!a.length)return Promise.resolve(!1);const l=Qv(a),{x:u,y:c,zoom:d}=e_(l,e.dimensions.width,e.dimensions.height,i.minZoom??e.minZoom,i.maxZoom??e.maxZoom,i.padding??Bs);return n(u,c,d,i)},setCenter:(i,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:e.maxZoom,l=e.dimensions.width/2-i*a,u=e.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(i,o={padding:Bs})=>{const{x:s,y:a,zoom:l}=e_(i,e.dimensions.width,e.dimensions.height,e.minZoom,e.maxZoom,o.padding??Bs);return n(s,a,l,o)},project:i=>Zo(i,e.viewport,e.snapToGrid,e.snapGrid),screenToFlowCoordinate:i=>{if(e.vueFlowRef){const{x:o,y:s}=e.vueFlowRef.getBoundingClientRect(),a={x:i.x-o,y:i.y-s};return Zo(a,e.viewport,e.snapToGrid,e.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:i=>{if(e.vueFlowRef){const{x:o,y:s}=e.vueFlowRef.getBoundingClientRect(),a={x:i.x+o,y:i.y+s};return Xo(a,e.viewport)}return{x:0,y:0}}}:ZN)}function fu(e,t=0,n=XN,r=()=>{}){const i=typeof t=="number"&&t>0;return i||r(),i?e.transition().duration(t).ease(n).on("end",r):e}function QN(e,t,n){const r=zx(!0);return r.run(()=>{const i=()=>{r.run(()=>{let p,v,g=!!(n.nodes.value.length||n.edges.value.length);p=hi([e.modelValue,()=>{var y,_;return(_=(y=e.modelValue)==null?void 0:y.value)==null?void 0:_.length}],([y])=>{y&&Array.isArray(y)&&(v?.pause(),n.setElements(y),!v&&!g&&y.length?g=!0:v?.resume())}),v=hi([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([y,_])=>{var b;(b=e.modelValue)!=null&&b.value&&Array.isArray(e.modelValue.value)&&(p?.pause(),e.modelValue.value=[...y,..._],rn(()=>{p?.resume()}))},{immediate:g}),Xs(()=>{p?.stop(),v?.stop()})})},o=()=>{r.run(()=>{let p,v,g=!!n.nodes.value.length;p=hi([e.nodes,()=>{var y,_;return(_=(y=e.nodes)==null?void 0:y.value)==null?void 0:_.length}],([y])=>{y&&Array.isArray(y)&&(v?.pause(),n.setNodes(y),!v&&!g&&y.length?g=!0:v?.resume())}),v=hi([n.nodes,()=>n.nodes.value.length],([y])=>{var _;(_=e.nodes)!=null&&_.value&&Array.isArray(e.nodes.value)&&(p?.pause(),e.nodes.value=[...y],rn(()=>{p?.resume()}))},{immediate:g}),Xs(()=>{p?.stop(),v?.stop()})})},s=()=>{r.run(()=>{let p,v,g=!!n.edges.value.length;p=hi([e.edges,()=>{var y,_;return(_=(y=e.edges)==null?void 0:y.value)==null?void 0:_.length}],([y])=>{y&&Array.isArray(y)&&(v?.pause(),n.setEdges(y),!v&&!g&&y.length?g=!0:v?.resume())}),v=hi([n.edges,()=>n.edges.value.length],([y])=>{var _;(_=e.edges)!=null&&_.value&&Array.isArray(e.edges.value)&&(p?.pause(),e.edges.value=[...y],rn(()=>{p?.resume()}))},{immediate:g}),Xs(()=>{p?.stop(),v?.stop()})})},a=()=>{r.run(()=>{Ee(()=>t.maxZoom,()=>{t.maxZoom&&rt(t.maxZoom)&&n.setMaxZoom(t.maxZoom)},{immediate:!0})})},l=()=>{r.run(()=>{Ee(()=>t.minZoom,()=>{t.minZoom&&rt(t.minZoom)&&n.setMinZoom(t.minZoom)},{immediate:!0})})},u=()=>{r.run(()=>{Ee(()=>t.translateExtent,()=>{t.translateExtent&&rt(t.translateExtent)&&n.setTranslateExtent(t.translateExtent)},{immediate:!0})})},c=()=>{r.run(()=>{Ee(()=>t.nodeExtent,()=>{t.nodeExtent&&rt(t.nodeExtent)&&n.setNodeExtent(t.nodeExtent)},{immediate:!0})})},d=()=>{r.run(()=>{Ee(()=>t.applyDefault,()=>{rt(t.applyDefault)&&(n.applyDefault.value=t.applyDefault)},{immediate:!0})})},f=()=>{r.run(()=>{const p=async v=>{let g=v;typeof t.autoConnect=="function"&&(g=await t.autoConnect(v)),g!==!1&&n.addEdges([g])};Ee(()=>t.autoConnect,()=>{rt(t.autoConnect)&&(n.autoConnect.value=t.autoConnect)},{immediate:!0}),Ee(n.autoConnect,(v,g,y)=>{v?n.onConnect(p):n.hooks.value.connect.off(p),y(()=>{n.hooks.value.connect.off(p)})},{immediate:!0})})},h=()=>{const p=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const v of Object.keys(t)){const g=v;if(!p.includes(g)){const y=Ne(()=>t[g]),_=n[g];Ze(_)&&r.run(()=>{Ee(y,b=>{rt(b)&&(_.value=b)},{immediate:!0})})}}};(()=>{i(),o(),s(),l(),a(),u(),c(),d(),f(),h()})()}),()=>r.stop()}function eM(){return{edgesChange:ae(),nodesChange:ae(),nodeDoubleClick:ae(),nodeClick:ae(),nodeMouseEnter:ae(),nodeMouseMove:ae(),nodeMouseLeave:ae(),nodeContextMenu:ae(),nodeDragStart:ae(),nodeDrag:ae(),nodeDragStop:ae(),nodesInitialized:ae(),miniMapNodeClick:ae(),miniMapNodeDoubleClick:ae(),miniMapNodeMouseEnter:ae(),miniMapNodeMouseMove:ae(),miniMapNodeMouseLeave:ae(),connect:ae(),connectStart:ae(),connectEnd:ae(),clickConnectStart:ae(),clickConnectEnd:ae(),paneReady:ae(),init:ae(),move:ae(),moveStart:ae(),moveEnd:ae(),selectionDragStart:ae(),selectionDrag:ae(),selectionDragStop:ae(),selectionContextMenu:ae(),selectionStart:ae(),selectionEnd:ae(),viewportChangeStart:ae(),viewportChange:ae(),viewportChangeEnd:ae(),paneScroll:ae(),paneClick:ae(),paneContextMenu:ae(),paneMouseEnter:ae(),paneMouseMove:ae(),paneMouseLeave:ae(),edgeContextMenu:ae(),edgeMouseEnter:ae(),edgeMouseMove:ae(),edgeMouseLeave:ae(),edgeDoubleClick:ae(),edgeClick:ae(),edgeUpdateStart:ae(),edgeUpdate:ae(),edgeUpdateEnd:ae(),updateNodeInternals:ae(),error:ae(e=>vs(e.message))}}function tM(e,t){const n=Pn();hS(()=>{for(const[i,o]of Object.entries(t.value)){const s=a=>{e(i,a)};o.setEmitter(s),Uo(o.removeEmitter),o.setHasEmitListeners(()=>r(i)),Uo(o.removeHasEmitListeners)}});function r(i){var o;const s=nM(i);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function nM(e){const[t,...n]=e.split(":");return`on${t.replace(/(?:^|-)(\w)/g,(i,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function tC(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:Jv.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:Ro.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:Mr.Bezier,style:{}},connectionMode:wr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:Qo()?"Meta":"Control",zoomActivationKeyCode:Qo()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:eM(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const rM=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function iM(e,t,n){const r=JN(e),i=S=>{const x=S??[];e.hooks.updateNodeInternals.trigger(x)},o=S=>yN(S,e.nodes,e.edges),s=S=>_N(S,e.nodes,e.edges),a=S=>Dr(S,e.edges),l=({id:S,type:x,nodeId:E})=>{var $;const O=S?`-${x}-${S}`:`-${x}`;return Array.from((($=e.connectionLookup.get(`${E}${O}`))==null?void 0:$.values())??[])},u=S=>{if(S)return t.value.get(S)},c=S=>{if(S)return n.value.get(S)},d=(S,x,E)=>{var $,O;const K=[];for(const Y of S){const G={id:Y.id,type:"position",dragging:E,from:Y.from};if(x&&(G.position=Y.position,Y.parentNode)){const ee=u(Y.parentNode);G.position={x:G.position.x-((($=ee?.computedPosition)==null?void 0:$.x)??0),y:G.position.y-(((O=ee?.computedPosition)==null?void 0:O.y)??0)}}K.push(G)}K?.length&&e.hooks.nodesChange.trigger(K)},f=S=>{if(!e.vueFlowRef)return;const x=e.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!x)return;const E=window.getComputedStyle(x),{m22:$}=new window.DOMMatrixReadOnly(E.transform),O=[];for(const K of S){const Y=K,G=u(Y.id);if(G){const ee=ul(Y.nodeElement);if(!!(ee.width&&ee.height&&(G.dimensions.width!==ee.width||G.dimensions.height!==ee.height||Y.forceUpdate))){const re=Y.nodeElement.getBoundingClientRect();G.dimensions=ee,G.handleBounds.source=d_("source",Y.nodeElement,re,$,G.id),G.handleBounds.target=d_("target",Y.nodeElement,re,$,G.id),O.push({id:G.id,type:"dimensions",dimensions:ee})}}}!e.fitViewOnInitDone&&e.fitViewOnInit&&r.value.fitView().then(()=>{e.fitViewOnInitDone=!0}),O.length&&e.hooks.nodesChange.trigger(O)},h=(S,x)=>{const E=new Set,$=new Set;for(const Y of S)Wr(Y)?E.add(Y.id):xr(Y)&&$.add(Y.id);const O=hr(t.value,E,!0),K=hr(n.value,$);if(e.multiSelectionActive){for(const Y of E)O.push(ur(Y,x));for(const Y of $)K.push(ur(Y,x))}O.length&&e.hooks.nodesChange.trigger(O),K.length&&e.hooks.edgesChange.trigger(K)},m=S=>{if(e.multiSelectionActive){const x=S.map(E=>ur(E.id,!0));e.hooks.nodesChange.trigger(x);return}e.hooks.nodesChange.trigger(hr(t.value,new Set(S.map(x=>x.id)),!0)),e.hooks.edgesChange.trigger(hr(n.value))},p=S=>{if(e.multiSelectionActive){const x=S.map(E=>ur(E.id,!0));e.hooks.edgesChange.trigger(x);return}e.hooks.edgesChange.trigger(hr(n.value,new Set(S.map(x=>x.id)))),e.hooks.nodesChange.trigger(hr(t.value,new Set,!0))},v=S=>{h(S,!0)},g=S=>{const E=(S||e.nodes).map($=>($.selected=!1,ur($.id,!1)));e.hooks.nodesChange.trigger(E)},y=S=>{const E=(S||e.edges).map($=>($.selected=!1,ur($.id,!1)));e.hooks.edgesChange.trigger(E)},_=S=>{if(!S||!S.length)return h([],!1);const x=S.reduce((E,$)=>{const O=ur($.id,!1);return Wr($)?E.nodes.push(O):E.edges.push(O),E},{nodes:[],edges:[]});x.nodes.length&&e.hooks.nodesChange.trigger(x.nodes),x.edges.length&&e.hooks.edgesChange.trigger(x.edges)},b=S=>{var x;(x=e.d3Zoom)==null||x.scaleExtent([S,e.maxZoom]),e.minZoom=S},I=S=>{var x;(x=e.d3Zoom)==null||x.scaleExtent([e.minZoom,S]),e.maxZoom=S},T=S=>{var x;(x=e.d3Zoom)==null||x.translateExtent(S),e.translateExtent=S},P=S=>{e.nodeExtent=S,i()},q=S=>{var x;(x=e.d3Zoom)==null||x.clickDistance(S)},j=S=>{e.nodesDraggable=S,e.nodesConnectable=S,e.elementsSelectable=S},B=S=>{const x=S instanceof Function?S(e.nodes):S;!e.initialized&&!x.length||(e.nodes=f_(x,u,e.hooks.error.trigger))},F=S=>{const x=S instanceof Function?S(e.edges):S;if(!e.initialized&&!x.length)return;const E=du(x,e.isValidConnection,u,c,e.hooks.error.trigger,e.defaultEdgeOptions,e.nodes,e.edges);cu(e.connectionLookup,n.value,E),e.edges=E},R=S=>{const x=S instanceof Function?S([...e.nodes,...e.edges]):S;!e.initialized&&!x.length||(B(x.filter(Wr)),F(x.filter(xr)))},J=S=>{let x=S instanceof Function?S(e.nodes):S;x=Array.isArray(x)?x:[x];const E=f_(x,u,e.hooks.error.trigger),$=[];for(const O of E)$.push(r_(O));$.length&&e.hooks.nodesChange.trigger($)},w=S=>{let x=S instanceof Function?S(e.edges):S;x=Array.isArray(x)?x:[x];const E=du(x,e.isValidConnection,u,c,e.hooks.error.trigger,e.defaultEdgeOptions,e.nodes,e.edges),$=[];for(const O of E)$.push(r_(O));$.length&&e.hooks.edgesChange.trigger($)},M=(S,x=!0,E=!1)=>{const $=S instanceof Function?S(e.nodes):S,O=Array.isArray($)?$:[$],K=[],Y=[];function G(Z){const re=a(Z);for(const oe of re)(!rt(oe.deletable)||oe.deletable)&&Y.push(o_(oe.id,oe.source,oe.target,oe.sourceHandle,oe.targetHandle))}function ee(Z){const re=[];for(const oe of e.nodes)oe.parentNode===Z&&re.push(oe);if(re.length){for(const oe of re)K.push(i_(oe.id));x&&G(re);for(const oe of re)ee(oe.id)}}for(const Z of O){const re=typeof Z=="string"?u(Z):Z;re&&(rt(re.deletable)&&!re.deletable||(K.push(i_(re.id)),x&&G([re]),E&&ee(re.id)))}Y.length&&e.hooks.edgesChange.trigger(Y),K.length&&e.hooks.nodesChange.trigger(K)},C=S=>{const x=S instanceof Function?S(e.edges):S,E=Array.isArray(x)?x:[x],$=[];for(const O of E){const K=typeof O=="string"?c(O):O;K&&(rt(K.deletable)&&!K.deletable||$.push(o_(typeof O=="string"?O:O.id,K.source,K.target,K.sourceHandle,K.targetHandle)))}e.hooks.edgesChange.trigger($)},L=(S,x,E=!0)=>{const $=c(S.id);if(!$)return!1;const O=e.edges.indexOf($),K=VN(S,x,$,E,e.hooks.error.trigger);if(K){const[Y]=du([K],e.isValidConnection,u,c,e.hooks.error.trigger,e.defaultEdgeOptions,e.nodes,e.edges);return e.edges=e.edges.map((G,ee)=>ee===O?Y:G),cu(e.connectionLookup,n.value,[Y]),Y}return!1},N=(S,x,E={replace:!1})=>{const $=c(S);if(!$)return;const O=typeof x=="function"?x($):x;$.data=E.replace?O:{...$.data,...O}},W=S=>n_(S,e.nodes),U=S=>{const x=n_(S,e.edges);return cu(e.connectionLookup,n.value,x),x},Q=(S,x,E={replace:!1})=>{const $=u(S);if(!$)return;const O=typeof x=="function"?x($):x;E.replace?e.nodes.splice(e.nodes.indexOf($),1,O):Object.assign($,O)},te=(S,x,E={replace:!1})=>{const $=u(S);if(!$)return;const O=typeof x=="function"?x($):x;$.data=E.replace?O:{...$.data,...O}},se=(S,x,E=!1)=>{E?e.connectionClickStartHandle=S:e.connectionStartHandle=S,e.connectionEndHandle=null,e.connectionStatus=null,x&&(e.connectionPosition=x)},z=(S,x=null,E=null)=>{e.connectionStartHandle&&(e.connectionPosition=S,e.connectionEndHandle=x,e.connectionStatus=E)},V=(S,x)=>{e.connectionPosition={x:Number.NaN,y:Number.NaN},e.connectionEndHandle=null,e.connectionStatus=null,x?e.connectionClickStartHandle=null:e.connectionStartHandle=null},H=S=>{const x=gN(S),E=x?null:vo(S)?S:u(S.id);return!x&&!E?[null,null,x]:[x?S:Ca(E),E,x]},X=(S,x=!0,E=e.nodes)=>{const[$,O,K]=H(S);if(!$)return[];const Y=[];for(const G of E||e.nodes){if(!K&&(G.id===O.id||!G.computedPosition))continue;const ee=Ca(G),Z=$a(ee,$);(x&&Z>0||Z>=ee.width*ee.height||Z>=Number($.width)*Number($.height))&&Y.push(G)}return Y},ie=(S,x,E=!0)=>{const[$]=H(S);if(!$)return!1;const O=$a($,x);return E&&O>0||O>=Number($.width)*Number($.height)},ce=S=>{const{viewport:x,dimensions:E,d3Zoom:$,d3Selection:O,translateExtent:K}=e;if(!$||!O||!S.x&&!S.y)return!1;const Y=Mi.translate(x.x+S.x,x.y+S.y).scale(x.zoom),G=[[0,0],[E.width,E.height]],ee=$.constrain()(Y,G,K),Z=e.viewport.x!==ee.x||e.viewport.y!==ee.y||e.viewport.zoom!==ee.k;return $.transform(O,ee),Z},le=S=>{const x=S instanceof Function?S(e):S,E=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];rt(x.defaultEdgeOptions)&&(e.defaultEdgeOptions=x.defaultEdgeOptions);const $=x.modelValue||x.nodes||x.edges?[]:void 0;$&&(x.modelValue&&$.push(...x.modelValue),x.nodes&&$.push(...x.nodes),x.edges&&$.push(...x.edges),R($));const O=()=>{rt(x.maxZoom)&&I(x.maxZoom),rt(x.minZoom)&&b(x.minZoom),rt(x.translateExtent)&&T(x.translateExtent)};for(const K of Object.keys(x)){const Y=K,G=x[Y];![...rM,...E].includes(Y)&&rt(G)&&(e[Y]=G)}Wp(()=>e.d3Zoom).not.toBeNull().then(O),e.initialized||(e.initialized=!0)};return{updateNodePositions:d,updateNodeDimensions:f,setElements:R,setNodes:B,setEdges:F,addNodes:J,addEdges:w,removeNodes:M,removeEdges:C,findNode:u,findEdge:c,updateEdge:L,updateEdgeData:N,updateNode:Q,updateNodeData:te,applyEdgeChanges:U,applyNodeChanges:W,addSelectedElements:v,addSelectedNodes:m,addSelectedEdges:p,setMinZoom:b,setMaxZoom:I,setTranslateExtent:T,setNodeExtent:P,setPaneClickDistance:q,removeSelectedElements:_,removeSelectedNodes:g,removeSelectedEdges:y,startConnection:se,updateConnection:z,endConnection:V,setInteractive:j,setState:le,getIntersectingNodes:X,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:ie,panBy:ce,fitView:S=>r.value.fitView(S),zoomIn:S=>r.value.zoomIn(S),zoomOut:S=>r.value.zoomOut(S),zoomTo:(S,x)=>r.value.zoomTo(S,x),setViewport:(S,x)=>r.value.setViewport(S,x),setTransform:(S,x)=>r.value.setTransform(S,x),getViewport:()=>r.value.getViewport(),getTransform:()=>r.value.getTransform(),setCenter:(S,x,E)=>r.value.setCenter(S,x,E),fitBounds:(S,x)=>r.value.fitBounds(S,x),project:S=>r.value.project(S),screenToFlowCoordinate:S=>r.value.screenToFlowCoordinate(S),flowToScreenCoordinate:S=>r.value.flowToScreenCoordinate(S),toObject:()=>{const S=[],x=[];for(const E of e.nodes){const{computedPosition:$,handleBounds:O,selected:K,dimensions:Y,isParent:G,resizing:ee,dragging:Z,events:re,...oe}=E;S.push(oe)}for(const E of e.edges){const{selected:$,sourceNode:O,targetNode:K,events:Y,...G}=E;x.push(G)}return JSON.parse(JSON.stringify({nodes:S,edges:x,position:[e.viewport.x,e.viewport.y],zoom:e.viewport.zoom,viewport:e.viewport}))},fromObject:S=>new Promise(x=>{const{nodes:E,edges:$,position:O,zoom:K,viewport:Y}=S;E&&B(E),$&&F($);const[G,ee]=Y?.x&&Y?.y?[Y.x,Y.y]:O??[null,null];if(G&&ee){const Z=Y?.zoom||K||e.viewport.zoom;return Wp(()=>r.value.viewportInitialized).toBe(!0).then(()=>{r.value.setViewport({x:G,y:ee,zoom:Z}).then(()=>{x(!0)})})}else x(!0)}),updateNodeInternals:i,viewportHelper:r,$reset:()=>{const S=tC();if(e.edges=[],e.nodes=[],e.d3Zoom&&e.d3Selection){const x=Mi.translate(S.defaultViewport.x??0,S.defaultViewport.y??0).scale(Jr(S.defaultViewport.zoom??1,S.minZoom,S.maxZoom)),E=e.viewportRef.getBoundingClientRect(),$=[[0,0],[E.width,E.height]],O=e.d3Zoom.constrain()(x,$,S.translateExtent);e.d3Zoom.transform(e.d3Selection,O)}le(S)},$destroy:()=>{}}}const oM=["data-id","data-handleid","data-nodeid","data-handlepos"],sM={name:"Handle",compatConfig:{MODE:3}},Ia=ze({...sM,props:{id:{default:null},type:{},position:{default:()=>de.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(e,{expose:t}){const n=hI(e,["position","connectable","connectableStart","connectableEnd","id"]),r=Ne(()=>n.type??"source"),i=Ne(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:d,noPanClassName:f}=He(),{id:h,node:m,nodeEl:p,connectedEdges:v}=QE(),g=Te(),y=Ne(()=>typeof e.connectableStart<"u"?e.connectableStart:!0),_=Ne(()=>typeof e.connectableEnd<"u"?e.connectableEnd:!0),b=Ne(()=>{var F,R,J,w,M,C;return((F=s.value)==null?void 0:F.nodeId)===h&&((R=s.value)==null?void 0:R.id)===e.id&&((J=s.value)==null?void 0:J.type)===r.value||((w=l.value)==null?void 0:w.nodeId)===h&&((M=l.value)==null?void 0:M.id)===e.id&&((C=l.value)==null?void 0:C.type)===r.value}),I=Ne(()=>{var F,R,J;return((F=a.value)==null?void 0:F.nodeId)===h&&((R=a.value)==null?void 0:R.id)===e.id&&((J=a.value)==null?void 0:J.type)===r.value}),{handlePointerDown:T,handleClick:P}=JE({nodeId:h,handleId:e.id,isValidConnection:i,type:r}),q=he(()=>typeof e.connectable=="string"&&e.connectable==="single"?!v.value.some(F=>{const R=F[`${r.value}Handle`];return F[r.value]!==h?!1:R?R===e.id:!0}):typeof e.connectable=="number"?v.value.filter(F=>{const R=F[`${r.value}Handle`];return F[r.value]!==h?!1:R?R===e.id:!0}).length<e.connectable:typeof e.connectable=="function"?e.connectable(m,v.value):rt(e.connectable)?e.connectable:c.value);pn(()=>{var F;if(!m.dimensions.width||!m.dimensions.height)return;const R=(F=m.handleBounds[r.value])==null?void 0:F.find(W=>W.id===e.id);if(!u.value||R)return;const J=u.value.querySelector(".vue-flow__transformationpane");if(!p.value||!g.value||!J||!e.id)return;const w=p.value.getBoundingClientRect(),M=g.value.getBoundingClientRect(),C=window.getComputedStyle(J),{m22:L}=new window.DOMMatrixReadOnly(C.transform),N={id:e.id,position:e.position,x:(M.left-w.left)/L,y:(M.top-w.top)/L,type:r.value,nodeId:h,...ul(g.value)};m.handleBounds[r.value]=[...m.handleBounds[r.value]??[],N]});function j(F){const R=tg(F);q.value&&y.value&&(R&&F.button===0||!R)&&T(F)}function B(F){!h||!a.value&&!y.value||q.value&&P(F)}return t({handleClick:P,handlePointerDown:T,onClick:B,onPointerDown:j}),(F,R)=>(fe(),be("div",{ref_key:"handle",ref:g,"data-id":`${ue(o)}-${ue(h)}-${e.id}-${r.value}`,"data-handleid":e.id,"data-nodeid":ue(h),"data-handlepos":F.position,class:Gt(["vue-flow__handle",[`vue-flow__handle-${F.position}`,`vue-flow__handle-${e.id}`,ue(d),ue(f),r.value,{connectable:q.value,connecting:I.value,connectablestart:y.value,connectableend:_.value,connectionindicator:q.value&&(y.value&&!b.value||_.value&&b.value)}]]),onMousedown:j,onTouchstartPassive:j,onClick:B},[nt(F.$slots,"default",{id:F.id})],42,oM))}}),fl=function({sourcePosition:e=de.Bottom,targetPosition:t=de.Top,label:n,connectable:r=!0,isValidTargetPos:i,isValidSourcePos:o,data:s}){const a=s.label??n;return[qe(Ia,{type:"target",position:t,connectable:r,isValidConnection:i}),typeof a!="string"&&a?qe(a):qe(je,[a]),qe(Ia,{type:"source",position:e,connectable:r,isValidConnection:o})]};fl.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];fl.inheritAttrs=!1;fl.compatConfig={MODE:3};const aM=fl,hl=function({targetPosition:e=de.Top,label:t,connectable:n=!0,isValidTargetPos:r,data:i}){const o=i.label??t;return[qe(Ia,{type:"target",position:e,connectable:n,isValidConnection:r}),typeof o!="string"&&o?qe(o):qe(je,[o])]};hl.props=["targetPosition","label","isValidTargetPos","connectable","data"];hl.inheritAttrs=!1;hl.compatConfig={MODE:3};const lM=hl,pl=function({sourcePosition:e=de.Bottom,label:t,connectable:n=!0,isValidSourcePos:r,data:i}){const o=i.label??t;return[typeof o!="string"&&o?qe(o):qe(je,[o]),qe(Ia,{type:"source",position:e,connectable:n,isValidConnection:r})]};pl.props=["sourcePosition","label","isValidSourcePos","connectable","data"];pl.inheritAttrs=!1;pl.compatConfig={MODE:3};const uM=pl,cM=["transform"],dM=["width","height","x","y","rx","ry"],fM=["y"],hM={name:"EdgeText",compatConfig:{MODE:3}},pM=ze({...hM,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(e){const t=Te({x:0,y:0,width:0,height:0}),n=Te(null),r=he(()=>`translate(${e.x-t.value.width/2} ${e.y-t.value.height/2})`);pn(i),Ee([()=>e.x,()=>e.y,n,()=>e.label],i);function i(){if(!n.value)return;const o=n.value.getBBox();(o.width!==t.value.width||o.height!==t.value.height)&&(t.value=o)}return(o,s)=>(fe(),be("g",{transform:r.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(fe(),be("rect",{key:0,class:"vue-flow__edge-textbg",width:`${t.value.width+2*o.labelBgPadding[0]}px`,height:`${t.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:Dt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,dM)):ft("",!0),vt("text",Lo(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:t.value.height/2,dy:"0.3em",style:o.labelStyle}),[nt(o.$slots,"default",{},()=>[typeof o.label!="string"?(fe(),ut(Nr(o.label),{key:0})):(fe(),be(je,{key:1},[zS(Ii(o.label),1)],64))])],16,fM)],8,cM))}}),vM=["id","d","marker-end","marker-start"],gM=["d","stroke-width"],mM={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},vl=ze({...mM,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(e,{expose:t}){const n=Te(null),r=Te(null),i=Te(null),o=Lv();return t({pathEl:n,interactionEl:r,labelEl:i}),(s,a)=>(fe(),be(je,null,[vt("path",Lo(ue(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,vM),s.interactionWidth?(fe(),be("path",{key:0,ref_key:"interactionEl",ref:r,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,gM)):ft("",!0),s.label&&s.labelX&&s.labelY?(fe(),ut(pM,{key:1,ref_key:"labelEl",ref:i,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):ft("",!0)],64))}});function nC({sourceX:e,sourceY:t,targetX:n,targetY:r}){const i=Math.abs(n-e)/2,o=n<e?n+i:n-i,s=Math.abs(r-t)/2,a=r<t?r+s:r-s;return[o,a,i,s]}function rC({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:i,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=e*.125+i*.375+s*.375+n*.125,u=t*.125+o*.375+a*.375+r*.125,c=Math.abs(l-e),d=Math.abs(u-t);return[l,u,c,d]}function Ls(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function g_({pos:e,x1:t,y1:n,x2:r,y2:i,c:o}){let s,a;switch(e){case de.Left:s=t-Ls(t-r,o),a=n;break;case de.Right:s=t+Ls(r-t,o),a=n;break;case de.Top:s=t,a=n-Ls(n-i,o);break;case de.Bottom:s=t,a=n+Ls(i-n,o);break}return[s,a]}function iC(e){const{sourceX:t,sourceY:n,sourcePosition:r=de.Bottom,targetX:i,targetY:o,targetPosition:s=de.Top,curvature:a=.25}=e,[l,u]=g_({pos:r,x1:t,y1:n,x2:i,y2:o,c:a}),[c,d]=g_({pos:s,x1:i,y1:o,x2:t,y2:n,c:a}),[f,h,m,p]=rC({sourceX:t,sourceY:n,targetX:i,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:d});return[`M${t},${n} C${l},${u} ${c},${d} ${i},${o}`,f,h,m,p]}function m_({pos:e,x1:t,y1:n,x2:r,y2:i}){let o,s;switch(e){case de.Left:case de.Right:o=.5*(t+r),s=n;break;case de.Top:case de.Bottom:o=t,s=.5*(n+i);break}return[o,s]}function oC(e){const{sourceX:t,sourceY:n,sourcePosition:r=de.Bottom,targetX:i,targetY:o,targetPosition:s=de.Top}=e,[a,l]=m_({pos:r,x1:t,y1:n,x2:i,y2:o}),[u,c]=m_({pos:s,x1:i,y1:o,x2:t,y2:n}),[d,f,h,m]=rC({sourceX:t,sourceY:n,targetX:i,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${t},${n} C${a},${l} ${u},${c} ${i},${o}`,d,f,h,m]}const __={[de.Left]:{x:-1,y:0},[de.Right]:{x:1,y:0},[de.Top]:{x:0,y:-1},[de.Bottom]:{x:0,y:1}};function _M({source:e,sourcePosition:t=de.Bottom,target:n}){return t===de.Left||t===de.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1}}function y_(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function yM({source:e,sourcePosition:t=de.Bottom,target:n,targetPosition:r=de.Top,center:i,offset:o}){const s=__[t],a=__[r],l={x:e.x+s.x*o,y:e.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=_M({source:l,sourcePosition:t,target:u}),d=c.x!==0?"x":"y",f=c[d];let h,m,p;const v={x:0,y:0},g={x:0,y:0},[y,_,b,I]=nC({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[d]*a[d]===-1){m=i.x??y,p=i.y??_;const P=[{x:m,y:l.y},{x:m,y:u.y}],q=[{x:l.x,y:p},{x:u.x,y:p}];s[d]===f?h=d==="x"?P:q:h=d==="x"?q:P}else{const P=[{x:l.x,y:u.y}],q=[{x:u.x,y:l.y}];if(d==="x"?h=s.x===f?q:P:h=s.y===f?P:q,t===r){const J=Math.abs(e[d]-n[d]);if(J<=o){const w=Math.min(o-1,o-J);s[d]===f?v[d]=(l[d]>e[d]?-1:1)*w:g[d]=(u[d]>n[d]?-1:1)*w}}if(t!==r){const J=d==="x"?"y":"x",w=s[d]===a[J],M=l[J]>u[J],C=l[J]<u[J];(s[d]===1&&(!w&&M||w&&C)||s[d]!==1&&(!w&&C||w&&M))&&(h=d==="x"?P:q)}const j={x:l.x+v.x,y:l.y+v.y},B={x:u.x+g.x,y:u.y+g.y},F=Math.max(Math.abs(j.x-h[0].x),Math.abs(B.x-h[0].x)),R=Math.max(Math.abs(j.y-h[0].y),Math.abs(B.y-h[0].y));F>=R?(m=(j.x+B.x)/2,p=h[0].y):(m=h[0].x,p=(j.y+B.y)/2)}return[[e,{x:l.x+v.x,y:l.y+v.y},...h,{x:u.x+g.x,y:u.y+g.y},n],m,p,b,I]}function bM(e,t,n,r){const i=Math.min(y_(e,t)/2,y_(t,n)/2,r),{x:o,y:s}=t;if(e.x===o&&o===n.x||e.y===s&&s===n.y)return`L${o} ${s}`;if(e.y===s){const u=e.x<n.x?-1:1,c=e.y<n.y?1:-1;return`L ${o+i*u},${s}Q ${o},${s} ${o},${s+i*c}`}const a=e.x<n.x?1:-1,l=e.y<n.y?-1:1;return`L ${o},${s+i*l}Q ${o},${s} ${o+i*a},${s}`}function lv(e){const{sourceX:t,sourceY:n,sourcePosition:r=de.Bottom,targetX:i,targetY:o,targetPosition:s=de.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=e,[d,f,h,m,p]=yM({source:{x:t,y:n},sourcePosition:r,target:{x:i,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[d.reduce((g,y,_)=>{let b;return _>0&&_<d.length-1?b=bM(d[_-1],y,d[_+1],a):b=`${_===0?"M":"L"}${y.x} ${y.y}`,g+=b,g},""),f,h,m,p]}function wM(e){const{sourceX:t,sourceY:n,targetX:r,targetY:i}=e,[o,s,a,l]=nC({sourceX:t,sourceY:n,targetX:r,targetY:i});return[`M ${t},${n}L ${r},${i}`,o,s,a,l]}const xM=ze({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(e,{attrs:t}){return()=>{const[n,r,i]=wM(e);return qe(vl,{path:n,labelX:r,labelY:i,...t,...e})}}}),SM=xM,EM=ze({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(e,{attrs:t}){return()=>{const[n,r,i]=lv({...e,sourcePosition:e.sourcePosition??de.Bottom,targetPosition:e.targetPosition??de.Top});return qe(vl,{path:n,labelX:r,labelY:i,...t,...e})}}}),sC=EM,CM=ze({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(e,{attrs:t}){return()=>qe(sC,{...e,...t,borderRadius:0})}}),$M=CM,kM=ze({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(e,{attrs:t}){return()=>{const[n,r,i]=iC({...e,sourcePosition:e.sourcePosition??de.Bottom,targetPosition:e.targetPosition??de.Top});return qe(vl,{path:n,labelX:r,labelY:i,...t,...e})}}}),IM=kM,AM=ze({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(e,{attrs:t}){return()=>{const[n,r,i]=oC({...e,sourcePosition:e.sourcePosition??de.Bottom,targetPosition:e.targetPosition??de.Top});return qe(vl,{path:n,labelX:r,labelY:i,...t,...e})}}}),OM=AM,RM={input:uM,default:aM,output:lM},PM={default:IM,straight:SM,step:$M,smoothstep:sC,simplebezier:OM};function TM(e,t,n){const r=he(()=>p=>t.value.get(p)),i=he(()=>p=>n.value.get(p)),o=he(()=>{const p={...PM,...e.edgeTypes},v=Object.keys(p);for(const g of e.edges)g.type&&!v.includes(g.type)&&(p[g.type]=g.type);return p}),s=he(()=>{const p={...RM,...e.nodeTypes},v=Object.keys(p);for(const g of e.nodes)g.type&&!v.includes(g.type)&&(p[g.type]=g.type);return p}),a=he(()=>e.onlyRenderVisibleElements?FE(e.nodes,{x:0,y:0,width:e.dimensions.width,height:e.dimensions.height},e.viewport,!0):e.nodes),l=he(()=>{if(e.onlyRenderVisibleElements){const p=[];for(const v of e.edges){const g=t.value.get(v.source),y=t.value.get(v.target);AN({sourcePos:g.computedPosition||{x:0,y:0},targetPos:y.computedPosition||{x:0,y:0},sourceWidth:g.dimensions.width,sourceHeight:g.dimensions.height,targetWidth:y.dimensions.width,targetHeight:y.dimensions.height,width:e.dimensions.width,height:e.dimensions.height,viewport:e.viewport})&&p.push(v)}return p}return e.edges}),u=he(()=>[...a.value,...l.value]),c=he(()=>{const p=[];for(const v of e.nodes)v.selected&&p.push(v);return p}),d=he(()=>{const p=[];for(const v of e.edges)v.selected&&p.push(v);return p}),f=he(()=>[...c.value,...d.value]),h=he(()=>{const p=[];for(const v of e.nodes)v.dimensions.width&&v.dimensions.height&&v.handleBounds!==void 0&&p.push(v);return p}),m=he(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:r,getEdge:i,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:f,getSelectedNodes:c,getSelectedEdges:d,getNodesInitialized:h,areNodesInitialized:m}}class qr{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var t;const n=(t=Pn())==null?void 0:t.appContext.app,r=n?.config.globalProperties.$vueFlowStorage??qr.instance;return qr.instance=r??new qr,n&&(n.config.globalProperties.$vueFlowStorage=qr.instance),qr.instance}set(t,n){return this.flows.set(t,n)}get(t){return this.flows.get(t)}remove(t){return this.flows.delete(t)}create(t,n){const r=tC(),i=cs(r),o={};for(const[f,h]of Object.entries(i.hooks)){const m=`on${f.charAt(0).toUpperCase()+f.slice(1)}`;o[m]=h.on}const s={};for(const[f,h]of Object.entries(i.hooks))s[f]=h.trigger;const a=he(()=>{const f=new Map;for(const h of i.nodes)f.set(h.id,h);return f}),l=he(()=>{const f=new Map;for(const h of i.edges)f.set(h.id,h);return f}),u=TM(i,a,l),c=iM(i,a,l);c.setState({...i,...n});const d={...o,...u,...c,...CO(i),nodeLookup:a,edgeLookup:l,emits:s,id:t,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(t)}};return this.set(t,d),d}getId(){return`vue-flow-${this.currentId++}`}}function He(e){const t=qr.getInstance(),n=Iv(),r=typeof e=="object",i=r?e:{id:e},o=i.id,s=o??n?.vueFlowId;let a;if(n){const l=on(v_,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=t.get(s)),!a||s&&a.id!==s){const l=o??t.getId(),u=t.create(l,i);a=u,(n??zx(!0)).run(()=>{Ee(u.applyDefault,(d,f,h)=>{const m=v=>{u.applyNodeChanges(v)},p=v=>{u.applyEdgeChanges(v)};d?(u.onNodesChange(m),u.onEdgesChange(p)):(u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(p)),h(()=>{u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(p)})},{immediate:!0}),Uo(()=>{if(a){const d=t.get(a.id);d?d.$destroy():vs(`No store instance found for id ${a.id} in storage.`)}})})}else r&&a.setState(i);if(n&&(br(v_,a),n.vueFlowId=a.id),r){const l=Pn();l?.type.name!=="VueFlow"&&a.emits.error(new ct(it.USEVUEFLOW_OPTIONS))}return a}function NM(e){const{emits:t,dimensions:n}=He();let r;pn(()=>{const i=()=>{var o,s;if(!e.value||!(((s=(o=e.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=ul(e.value);(a.width===0||a.height===0)&&t.error(new ct(it.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};i(),window.addEventListener("resize",i),e.value&&(r=new ResizeObserver(()=>i()),r.observe(e.value)),qv(()=>{window.removeEventListener("resize",i),r&&e.value&&r.unobserve(e.value)})})}const MM={name:"UserSelection",compatConfig:{MODE:3}},DM=ze({...MM,props:{userSelectionRect:{}},setup(e){return(t,n)=>(fe(),be("div",{class:"vue-flow__selection vue-flow__container",style:Dt({width:`${t.userSelectionRect.width}px`,height:`${t.userSelectionRect.height}px`,transform:`translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`})},null,4))}}),qM=["tabIndex"],BM={name:"NodesSelection",compatConfig:{MODE:3}},LM=ze({...BM,setup(e){const{emits:t,viewport:n,getSelectedNodes:r,noPanClassName:i,disableKeyboardA11y:o,userSelectionActive:s}=He(),a=eC(),l=Te(null),u=ZE({el:l,onStart(m){t.selectionDragStart(m),t.nodeDragStart(m)},onDrag(m){t.selectionDrag(m),t.nodeDrag(m)},onStop(m){t.selectionDragStop(m),t.nodeDragStop(m)}});pn(()=>{var m;o.value||(m=l.value)==null||m.focus({preventScroll:!0})});const c=he(()=>Qv(r.value)),d=he(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function f(m){t.selectionContextMenu({event:m,nodes:r.value})}function h(m){o.value||$i[m.key]&&(m.preventDefault(),a({x:$i[m.key].x,y:$i[m.key].y},m.shiftKey))}return(m,p)=>!ue(s)&&c.value.width&&c.value.height?(fe(),be("div",{key:0,class:Gt(["vue-flow__nodesselection vue-flow__container",ue(i)]),style:Dt({transform:`translate(${ue(n).x}px,${ue(n).y}px) scale(${ue(n).zoom})`})},[vt("div",{ref_key:"el",ref:l,class:Gt([{dragging:ue(u)},"vue-flow__nodesselection-rect"]),style:Dt(d.value),tabIndex:ue(o)?void 0:-1,onContextmenu:f,onKeydown:h},null,46,qM)],6)):ft("",!0)}});function zM(e,t){return{x:e.clientX-t.left,y:e.clientY-t.top}}const VM={name:"Pane",compatConfig:{MODE:3}},FM=ze({...VM,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(e){const{vueFlowRef:t,nodes:n,viewport:r,emits:i,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:d,removeNodes:f,removeEdges:h,selectionMode:m,deleteKeyCode:p,multiSelectionKeyCode:v,multiSelectionActive:g,edgeLookup:y,nodeLookup:_,connectionLookup:b,defaultEdgeOptions:I,connectionStartHandle:T,panOnDrag:P}=He(),q=_r(null),j=_r(new Set),B=_r(new Set),F=_r(null),R=Ne(()=>l.value&&(e.isSelecting||o.value)),J=Ne(()=>T.value!==null);let w=!1,M=!1;const C=Po(p,{actInsideInputWithModifier:!1}),L=Po(v);Ee(C,V=>{V&&(f(d.value),h(c.value),u.value=!1)}),Ee(L,V=>{g.value=V});function N(V,H){return X=>{X.target===H&&V?.(X)}}function W(V){if(w||J.value){w=!1;return}i.paneClick(V),s(),u.value=!1}function U(V){var H;if(Array.isArray(P.value)&&((H=P.value)!=null&&H.includes(2))){V.preventDefault();return}i.paneContextMenu(V)}function Q(V){i.paneScroll(V)}function te(V){var H,X,ie;if(F.value=((H=t.value)==null?void 0:H.getBoundingClientRect())??null,!l.value||!e.isSelecting||V.button!==0||V.target!==q.value||!F.value)return;(ie=(X=V.target)==null?void 0:X.setPointerCapture)==null||ie.call(X,V.pointerId);const{x:ce,y:le}=zM(V,F.value);M=!0,w=!1,s(),a.value={width:0,height:0,startX:ce,startY:le,x:ce,y:le},i.selectionStart(V)}function se(V){var H;if(!F.value||!a.value)return;w=!0;const{x:X,y:ie}=kn(V,F.value),{startX:ce=0,startY:le=0}=a.value,ve={startX:ce,startY:le,x:X<ce?X:ce,y:ie<le?ie:le,width:Math.abs(X-ce),height:Math.abs(ie-le)},k=j.value,A=B.value;j.value=new Set(FE(n.value,ve,r.value,m.value===Jv.Partial,!0).map(x=>x.id)),B.value=new Set;const S=((H=I.value)==null?void 0:H.selectable)??!0;for(const x of j.value){const E=b.value.get(x);if(E)for(const{edgeId:$}of E.values()){const O=y.value.get($);O&&(O.selectable??S)&&B.value.add($)}}if(!p_(k,j.value)){const x=hr(_.value,j.value,!0);i.nodesChange(x)}if(!p_(A,B.value)){const x=hr(y.value,B.value);i.edgesChange(x)}a.value=ve,o.value=!0,u.value=!1}function z(V){var H;V.button!==0||!M||((H=V.target)==null||H.releasePointerCapture(V.pointerId),!o.value&&a.value&&V.target===q.value&&W(V),o.value=!1,a.value=null,u.value=j.value.size>0,i.selectionEnd(V),e.selectionKeyPressed&&(w=!1),M=!1)}return(V,H)=>(fe(),be("div",{ref_key:"container",ref:q,class:Gt(["vue-flow__pane vue-flow__container",{selection:V.isSelecting}]),onClick:H[0]||(H[0]=X=>R.value?void 0:N(W,q.value)(X)),onContextmenu:H[1]||(H[1]=X=>N(U,q.value)(X)),onWheelPassive:H[2]||(H[2]=X=>N(Q,q.value)(X)),onPointerenter:H[3]||(H[3]=X=>R.value?void 0:ue(i).paneMouseEnter(X)),onPointerdown:H[4]||(H[4]=X=>R.value?te(X):ue(i).paneMouseMove(X)),onPointermove:H[5]||(H[5]=X=>R.value?se(X):ue(i).paneMouseMove(X)),onPointerup:H[6]||(H[6]=X=>R.value?z(X):void 0),onPointerleave:H[7]||(H[7]=X=>ue(i).paneMouseLeave(X))},[nt(V.$slots,"default"),ue(o)&&ue(a)?(fe(),ut(DM,{key:0,"user-selection-rect":ue(a)},null,8,["user-selection-rect"])):ft("",!0),ue(u)&&ue(d).length?(fe(),ut(LM,{key:1})):ft("",!0)],34))}}),HM={name:"Transform",compatConfig:{MODE:3}},jM=ze({...HM,setup(e){const{viewport:t,fitViewOnInit:n,fitViewOnInitDone:r}=He(),i=he(()=>n.value?!r.value:!1),o=he(()=>`translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);return(s,a)=>(fe(),be("div",{class:"vue-flow__transformationpane vue-flow__container",style:Dt({transform:o.value,opacity:i.value?0:void 0})},[nt(s.$slots,"default")],4))}}),UM={name:"Viewport",compatConfig:{MODE:3}},GM=ze({...UM,setup(e){const{minZoom:t,maxZoom:n,defaultViewport:r,translateExtent:i,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:d,zoomOnDoubleClick:f,zoomOnPinch:h,zoomOnScroll:m,preventScrolling:p,noWheelClassName:v,noPanClassName:g,emits:y,connectionStartHandle:_,userSelectionActive:b,paneDragging:I,d3Zoom:T,d3Selection:P,d3ZoomHandler:q,viewport:j,viewportRef:B,paneClickDistance:F}=He();NM(B);const R=_r(!1),J=_r(!1);let w=null,M=!1,C=0,L={x:0,y:0,zoom:0};const N=Po(a),W=Po(s),U=Po(o),Q=Ne(()=>(!W.value||W.value&&s.value===!0)&&(N.value||d.value)),te=Ne(()=>N.value||l.value),se=Ne(()=>s.value===!0&&Q.value!==!0),z=Ne(()=>W.value&&s.value!==!0||b.value||se.value),V=Ne(()=>_.value!==null);pn(()=>{if(!B.value){vs("Viewport element is missing");return}const le=B.value,ve=le.getBoundingClientRect(),k=uN().clickDistance(F.value).scaleExtent([t.value,n.value]).translateExtent(i.value),A=Qt(le).call(k),S=A.on("wheel.zoom"),x=Mi.translate(r.value.x??0,r.value.y??0).scale(Jr(r.value.zoom??1,t.value,n.value)),E=[[0,0],[ve.width,ve.height]],$=k.constrain()(x,E,i.value);k.transform(A,$),k.wheelDelta(ov),T.value=k,P.value=A,q.value=S,j.value={x:$.x,y:$.y,zoom:$.k},k.on("start",O=>{var K;if(!O.sourceEvent)return null;C=O.sourceEvent.button,R.value=!0;const Y=ie(O.transform);((K=O.sourceEvent)==null?void 0:K.type)==="mousedown"&&(I.value=!0),L=Y,y.viewportChangeStart(Y),y.moveStart({event:O,flowTransform:Y})}),k.on("end",O=>{if(!O.sourceEvent)return null;if(R.value=!1,I.value=!1,H(Q.value,C??0)&&!M&&y.paneContextMenu(O.sourceEvent),M=!1,X(L,O.transform)){const K=ie(O.transform);L=K,y.viewportChangeEnd(K),y.moveEnd({event:O,flowTransform:K})}}),k.filter(O=>{var K;const Y=U.value||m.value,G=h.value&&O.ctrlKey,ee=O.button,Z=O.type==="wheel";if(ee===1&&O.type==="mousedown"&&(ce(O,"vue-flow__node")||ce(O,"vue-flow__edge")))return!0;if(!Q.value&&!Y&&!te.value&&!f.value&&!h.value||b.value||V.value&&!Z||!f.value&&O.type==="dblclick"||ce(O,v.value)&&Z||ce(O,g.value)&&(!Z||te.value&&Z&&!U.value)||!h.value&&O.ctrlKey&&Z||!Y&&!te.value&&!G&&Z)return!1;if(!h&&O.type==="touchstart"&&((K=O.touches)==null?void 0:K.length)>1)return O.preventDefault(),!1;if(!Q.value&&(O.type==="mousedown"||O.type==="touchstart")||se.value&&Array.isArray(d.value)&&d.value.includes(0)&&ee===0||Array.isArray(d.value)&&!d.value.includes(ee)&&(O.type==="mousedown"||O.type==="touchstart"))return!1;const re=Array.isArray(d.value)&&d.value.includes(ee)||s.value===!0&&Array.isArray(d.value)&&!d.value.includes(0)||!ee||ee<=1;return(!O.ctrlKey||N.value||Z)&&re}),Ee([b,Q],()=>{b.value&&!R.value?k.on("zoom",null):b.value||k.on("zoom",O=>{j.value={x:O.transform.x,y:O.transform.y,zoom:O.transform.k};const K=ie(O.transform);M=H(Q.value,C??0),y.viewportChange(K),y.move({event:O,flowTransform:K})})},{immediate:!0}),Ee([b,te,u,U,h,p,v],()=>{te.value&&!U.value&&!b.value?A.on("wheel.zoom",O=>{if(ce(O,v.value))return!1;const K=U.value||m.value,Y=h.value&&O.ctrlKey;if(!(!p.value||te.value||K||Y))return!1;O.preventDefault(),O.stopImmediatePropagation();const ee=A.property("__zoom").k||1,Z=Qo();if(!N.value&&O.ctrlKey&&h.value&&Z){const we=En(O),at=ov(O),lt=ee*2**at;k.scaleTo(A,lt,we,O);return}const re=O.deltaMode===1?20:1;let oe=u.value===Ro.Vertical?0:O.deltaX*re,me=u.value===Ro.Horizontal?0:O.deltaY*re;!Z&&O.shiftKey&&u.value!==Ro.Vertical&&!oe&&me&&(oe=me,me=0),k.translateBy(A,-(oe/ee)*c.value,-(me/ee)*c.value);const ye=ie(A.property("__zoom"));w&&clearTimeout(w),J.value?(y.move({event:O,flowTransform:ye}),y.viewportChange(ye),w=setTimeout(()=>{y.moveEnd({event:O,flowTransform:ye}),y.viewportChangeEnd(ye),J.value=!1},150)):(J.value=!0,y.moveStart({event:O,flowTransform:ye}),y.viewportChangeStart(ye))},{passive:!1}):typeof S<"u"&&A.on("wheel.zoom",function(O,K){const Y=!p.value&&O.type==="wheel"&&!O.ctrlKey,G=U.value||m.value,ee=h.value&&O.ctrlKey;if(!G&&!l.value&&!ee&&O.type==="wheel"||Y||ce(O,v.value))return null;O.preventDefault(),S.call(this,O,K)},{passive:!1})},{immediate:!0})});function H(le,ve){return ve===2&&Array.isArray(le)&&le.includes(2)}function X(le,ve){return le.x!==ve.x&&!Number.isNaN(ve.x)||le.y!==ve.y&&!Number.isNaN(ve.y)||le.zoom!==ve.k&&!Number.isNaN(ve.k)}function ie(le){return{x:le.x,y:le.y,zoom:le.k}}function ce(le,ve){return le.target.closest(`.${ve}`)}return(le,ve)=>(fe(),be("div",{ref_key:"viewportRef",ref:B,class:"vue-flow__viewport vue-flow__container"},[Me(FM,{"is-selecting":z.value,"selection-key-pressed":ue(W),class:Gt({connecting:V.value,dragging:ue(I),draggable:ue(d)===!0||Array.isArray(ue(d))&&ue(d).includes(0)})},{default:Jt(()=>[Me(jM,null,{default:Jt(()=>[nt(le.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),KM=["id"],WM=["id"],YM=["id"],XM={name:"A11yDescriptions",compatConfig:{MODE:3}},ZM=ze({...XM,setup(e){const{id:t,disableKeyboardA11y:n,ariaLiveMessage:r}=He();return(i,o)=>(fe(),be(je,null,[vt("div",{id:`${ue(TE)}-${ue(t)}`,style:{display:"none"}}," Press enter or space to select a node. "+Ii(ue(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,KM),vt("div",{id:`${ue(NE)}-${ue(t)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,WM),ue(n)?ft("",!0):(fe(),be("div",{key:0,id:`${ue(vN)}-${ue(t)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Ii(ue(r)),9,YM))],64))}});function JM(){const e=He();Ee(()=>e.viewportHelper.value.viewportInitialized,t=>{t&&setTimeout(()=>{e.emits.init(e),e.emits.paneReady(e)},1)})}function QM(e,t,n){return n===de.Left?e-t:n===de.Right?e+t:e}function e3(e,t,n){return n===de.Top?e-t:n===de.Bottom?e+t:e}const ng=function({radius:e=10,centerX:t=0,centerY:n=0,position:r=de.Top,type:i}){return qe("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${i}`,cx:QM(t,e,r),cy:e3(n,e,r),r:e,stroke:"transparent",fill:"transparent"})};ng.props=["radius","centerX","centerY","position","type"];ng.compatConfig={MODE:3};const b_=ng,t3=ze({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(e){const{id:t,addSelectedEdges:n,connectionMode:r,edgeUpdaterRadius:i,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:d,isValidConnection:f,multiSelectionActive:h,disableKeyboardA11y:m,elementsSelectable:p,edgesUpdatable:v,edgesFocusable:g,hooks:y}=He(),_=he(()=>c(e.id)),{emit:b,on:I}=UN(_.value,o),T=on(dl),P=Pn(),q=Te(!1),j=Te(!1),B=Te(""),F=Te(null),R=Te("source"),J=Te(null),w=Ne(()=>typeof _.value.selectable>"u"?p.value:_.value.selectable),M=Ne(()=>typeof _.value.updatable>"u"?v.value:_.value.updatable),C=Ne(()=>typeof _.value.focusable>"u"?g.value:_.value.focusable);br(FN,e.id),br(HN,J);const L=he(()=>_.value.class instanceof Function?_.value.class(_.value):_.value.class),N=he(()=>_.value.style instanceof Function?_.value.style(_.value):_.value.style),W=he(()=>{const x=_.value.type||"default",E=T?.[`edge-${x}`];if(E)return E;let $=_.value.template??l.value[x];if(typeof $=="string"&&P){const O=Object.keys(P.appContext.components);O&&O.includes(x)&&($=vS(x,!1))}return $&&typeof $!="string"?$:(o.error(new ct(it.EDGE_TYPE_MISSING,$)),!1)}),{handlePointerDown:U}=JE({nodeId:B,handleId:F,type:R,isValidConnection:f,edgeUpdaterType:R,onEdgeUpdate:se,onEdgeUpdateEnd:z});return()=>{const x=d(_.value.source),E=d(_.value.target),$="pathOptions"in _.value?_.value.pathOptions:{};if(!x&&!E)return o.error(new ct(it.EDGE_SOURCE_TARGET_MISSING,_.value.id,_.value.source,_.value.target)),null;if(!x)return o.error(new ct(it.EDGE_SOURCE_MISSING,_.value.id,_.value.source)),null;if(!E)return o.error(new ct(it.EDGE_TARGET_MISSING,_.value.id,_.value.target)),null;if(!_.value||_.value.hidden||x.hidden||E.hidden)return null;let O;r.value===wr.Strict?O=x.handleBounds.source:O=[...x.handleBounds.source||[],...x.handleBounds.target||[]];const K=l_(O,_.value.sourceHandle);let Y;r.value===wr.Strict?Y=E.handleBounds.target:Y=[...E.handleBounds.target||[],...E.handleBounds.source||[]];const G=l_(Y,_.value.targetHandle),ee=K?.position||de.Bottom,Z=G?.position||de.Top,{x:re,y:oe}=Di(x,K,ee),{x:me,y:ye}=Di(E,G,Z);return _.value.sourceX=re,_.value.sourceY=oe,_.value.targetX=me,_.value.targetY=ye,qe("g",{ref:J,key:e.id,"data-id":e.id,class:["vue-flow__edge",`vue-flow__edge-${W.value===!1?"default":_.value.type||"default"}`,a.value,L.value,{updating:q.value,selected:_.value.selected,animated:_.value.animated,inactive:!w.value&&!y.value.edgeClick.hasListeners()}],tabIndex:C.value?0:void 0,"aria-label":_.value.ariaLabel===null?void 0:_.value.ariaLabel??`Edge from ${_.value.source} to ${_.value.target}`,"aria-describedby":C.value?`${NE}-${t}`:void 0,"aria-roledescription":"edge",role:C.value?"group":"img",..._.value.domAttributes,onClick:H,onContextmenu:X,onDblclick:ie,onMouseenter:ce,onMousemove:le,onMouseleave:ve,onKeyDown:C.value?S:void 0},[j.value?null:qe(W.value===!1?l.value.default:W.value,{id:e.id,sourceNode:x,targetNode:E,source:_.value.source,target:_.value.target,type:_.value.type,updatable:M.value,selected:_.value.selected,animated:_.value.animated,label:_.value.label,labelStyle:_.value.labelStyle,labelShowBg:_.value.labelShowBg,labelBgStyle:_.value.labelBgStyle,labelBgPadding:_.value.labelBgPadding,labelBgBorderRadius:_.value.labelBgBorderRadius,data:_.value.data,events:{..._.value.events,...I},style:N.value,markerStart:`url('#${Jo(_.value.markerStart,t)}')`,markerEnd:`url('#${Jo(_.value.markerEnd,t)}')`,sourcePosition:ee,targetPosition:Z,sourceX:re,sourceY:oe,targetX:me,targetY:ye,sourceHandleId:_.value.sourceHandle,targetHandleId:_.value.targetHandle,interactionWidth:_.value.interactionWidth,...$}),[M.value==="source"||M.value===!0?[qe("g",{onMousedown:k,onMouseenter:Q,onMouseout:te},qe(b_,{position:ee,centerX:re,centerY:oe,radius:i.value,type:"source","data-type":"source"}))]:null,M.value==="target"||M.value===!0?[qe("g",{onMousedown:A,onMouseenter:Q,onMouseout:te},qe(b_,{position:Z,centerX:me,centerY:ye,radius:i.value,type:"target","data-type":"target"}))]:null]])};function Q(){q.value=!0}function te(){q.value=!1}function se(x,E){b.update({event:x,edge:_.value,connection:E})}function z(x){b.updateEnd({event:x,edge:_.value}),j.value=!1}function V(x,E){x.button===0&&(j.value=!0,B.value=E?_.value.target:_.value.source,F.value=(E?_.value.targetHandle:_.value.sourceHandle)??null,R.value=E?"target":"source",b.updateStart({event:x,edge:_.value}),U(x))}function H(x){var E;const $={event:x,edge:_.value};w.value&&(s.value=!1,_.value.selected&&h.value?(u([_.value]),(E=J.value)==null||E.blur()):n([_.value])),b.click($)}function X(x){b.contextMenu({event:x,edge:_.value})}function ie(x){b.doubleClick({event:x,edge:_.value})}function ce(x){b.mouseEnter({event:x,edge:_.value})}function le(x){b.mouseMove({event:x,edge:_.value})}function ve(x){b.mouseLeave({event:x,edge:_.value})}function k(x){V(x,!0)}function A(x){V(x,!1)}function S(x){var E;!m.value&&ME.includes(x.key)&&w.value&&(x.key==="Escape"?((E=J.value)==null||E.blur(),u([c(e.id)])):n([c(e.id)]))}}}),n3=t3,r3=ze({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var e;const{id:t,connectionMode:n,connectionStartHandle:r,connectionEndHandle:i,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:d}=He(),f=(e=on(dl))==null?void 0:e["connection-line"],h=he(()=>{var y;return d((y=r.value)==null?void 0:y.nodeId)}),m=he(()=>{var y;return d((y=i.value)==null?void 0:y.nodeId)??null}),p=he(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),v=he(()=>l.value.markerStart?`url(#${Jo(l.value.markerStart,t)})`:""),g=he(()=>l.value.markerEnd?`url(#${Jo(l.value.markerEnd,t)})`:"");return()=>{var y,_,b;if(!h.value||!r.value)return null;const I=r.value.id,T=r.value.type,P=h.value.handleBounds;let q=P?.[T]??[];if(n.value===wr.Loose){const N=P?.[T==="source"?"target":"source"]??[];q=[...q,...N]}if(!q)return null;const j=(I?q.find(N=>N.id===I):q[0])??null,B=j?.position??de.Top,{x:F,y:R}=Di(h.value,j,B);let J=null;m.value&&(n.value===wr.Strict?J=((y=m.value.handleBounds[T==="source"?"target":"source"])==null?void 0:y.find(N=>{var W;return N.id===((W=i.value)==null?void 0:W.id)}))||null:J=((_=[...m.value.handleBounds.source??[],...m.value.handleBounds.target??[]])==null?void 0:_.find(N=>{var W;return N.id===((W=i.value)==null?void 0:W.id)}))||null);const w=((b=i.value)==null?void 0:b.position)??(B?sv[B]:null);if(!B||!w)return null;const M=s.value??l.value.type??Mr.Bezier;let C="";const L={sourceX:F,sourceY:R,sourcePosition:B,targetX:p.value.x,targetY:p.value.y,targetPosition:w};return M===Mr.Bezier?[C]=iC(L):M===Mr.Step?[C]=lv({...L,borderRadius:0}):M===Mr.SmoothStep?[C]=lv(L):M===Mr.SimpleBezier?[C]=oC(L):C=`M${F},${R} ${p.value.x},${p.value.y}`,qe("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},qe("g",{class:"vue-flow__connection"},f?qe(f,{sourceX:F,sourceY:R,sourcePosition:B,targetX:p.value.x,targetY:p.value.y,targetPosition:w,sourceNode:h.value,sourceHandle:j,targetNode:m.value,targetHandle:J,markerEnd:g.value,markerStart:v.value,connectionStatus:u.value}):qe("path",{d:C,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":g.value,"marker-start":v.value})))}}}),i3=r3,o3=["id","markerWidth","markerHeight","markerUnits","orient"],s3={name:"MarkerType",compatConfig:{MODE:3}},a3=ze({...s3,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(e){return(t,n)=>(fe(),be("marker",{id:t.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${t.width}`,markerHeight:`${t.height}`,markerUnits:t.markerUnits,orient:t.orient},[t.type===ue(rv).ArrowClosed?(fe(),be("polyline",{key:0,style:Dt({stroke:t.color,fill:t.color,strokeWidth:t.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):ft("",!0),t.type===ue(rv).Arrow?(fe(),be("polyline",{key:1,style:Dt({stroke:t.color,strokeWidth:t.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):ft("",!0)],8,o3))}}),l3={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},u3={name:"MarkerDefinitions",compatConfig:{MODE:3}},c3=ze({...u3,setup(e){const{id:t,edges:n,connectionLineOptions:r,defaultMarkerColor:i}=He(),o=he(()=>{const s=new Set,a=[],l=u=>{if(u){const c=Jo(u,t);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||i.value}):a.push({id:c,color:i.value,type:u}),s.add(c))}};for(const u of[r.value.markerEnd,r.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(fe(),be("svg",l3,[vt("defs",null,[(fe(!0),be(je,null,nl(o.value,l=>(fe(),ut(a3,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),d3={name:"Edges",compatConfig:{MODE:3}},f3=ze({...d3,setup(e){const{findNode:t,getEdges:n,elevateEdgesOnSelect:r}=He();return(i,o)=>(fe(),be(je,null,[Me(c3),(fe(!0),be(je,null,nl(ue(n),s=>(fe(),be("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:Dt({zIndex:ue(ON)(s,ue(t),ue(r))})},[Me(ue(n3),{id:s.id},null,8,["id"])],4))),128)),Me(ue(i3))],64))}}),h3=ze({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(e){const{id:t,noPanClassName:n,selectNodesOnDrag:r,nodesSelectionActive:i,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:d,nodeExtent:f,elevateNodesOnSelect:h,disableKeyboardA11y:m,ariaLiveMessage:p,snapToGrid:v,snapGrid:g,nodeDragThreshold:y,nodesDraggable:_,elementsSelectable:b,nodesConnectable:I,nodesFocusable:T,hooks:P}=He(),q=Te(null);br(XE,q),br(YE,e.id);const j=on(dl),B=Pn(),F=eC(),{node:R,parentNode:J}=QE(e.id),{emit:w,on:M}=YN(R,s),C=Ne(()=>typeof R.draggable>"u"?_.value:R.draggable),L=Ne(()=>typeof R.selectable>"u"?b.value:R.selectable),N=Ne(()=>typeof R.connectable>"u"?I.value:R.connectable),W=Ne(()=>typeof R.focusable>"u"?T.value:R.focusable),U=he(()=>L.value||C.value||P.value.nodeClick.hasListeners()||P.value.nodeDoubleClick.hasListeners()||P.value.nodeMouseEnter.hasListeners()||P.value.nodeMouseMove.hasListeners()||P.value.nodeMouseLeave.hasListeners()),Q=Ne(()=>!!R.dimensions.width&&!!R.dimensions.height),te=he(()=>{const E=R.type||"default",$=j?.[`node-${E}`];if($)return $;let O=R.template||d.value[E];if(typeof O=="string"&&B){const K=Object.keys(B.appContext.components);K&&K.includes(E)&&(O=vS(E,!1))}return O&&typeof O!="string"?O:(s.error(new ct(it.NODE_TYPE_MISSING,O)),!1)}),se=ZE({id:e.id,el:q,disabled:()=>!C.value,selectable:L,dragHandle:()=>R.dragHandle,onStart(E){w.dragStart(E)},onDrag(E){w.drag(E)},onStop(E){w.dragStop(E)},onClick(E){S(E)}}),z=he(()=>R.class instanceof Function?R.class(R):R.class),V=he(()=>{const E=(R.style instanceof Function?R.style(R):R.style)||{},$=R.width instanceof Function?R.width(R):R.width,O=R.height instanceof Function?R.height(R):R.height;return!E.width&&$&&(E.width=typeof $=="string"?$:`${$}px`),!E.height&&O&&(E.height=typeof O=="string"?O:`${O}px`),E}),H=Ne(()=>Number(R.zIndex??V.value.zIndex??0));return c(E=>{(E.includes(e.id)||!E.length)&&ie()}),pn(()=>{Ee(()=>R.hidden,(E=!1,$,O)=>{!E&&q.value&&(e.resizeObserver.observe(q.value),O(()=>{q.value&&e.resizeObserver.unobserve(q.value)}))},{immediate:!0,flush:"post"})}),Ee([()=>R.type,()=>R.sourcePosition,()=>R.targetPosition],()=>{rn(()=>{u([{id:e.id,nodeElement:q.value,forceUpdate:!0}])})}),Ee([()=>R.position.x,()=>R.position.y,()=>{var E;return(E=J.value)==null?void 0:E.computedPosition.x},()=>{var E;return(E=J.value)==null?void 0:E.computedPosition.y},()=>{var E;return(E=J.value)==null?void 0:E.computedPosition.z},H,()=>R.selected,()=>R.dimensions.height,()=>R.dimensions.width,()=>{var E;return(E=J.value)==null?void 0:E.dimensions.height},()=>{var E;return(E=J.value)==null?void 0:E.dimensions.width}],([E,$,O,K,Y,G])=>{const ee={x:E,y:$,z:G+(h.value&&R.selected?1e3:0)};typeof O<"u"&&typeof K<"u"?R.computedPosition=EN({x:O,y:K,z:Y},ee):R.computedPosition=ee},{flush:"post",immediate:!0}),Ee([()=>R.extent,f],([E,$],[O,K])=>{(E!==O||$!==K)&&X()}),R.extent==="parent"||typeof R.extent=="object"&&"range"in R.extent&&R.extent.range==="parent"?Wp(()=>Q).toBe(!0).then(X):X(),()=>R.hidden?null:qe("div",{ref:q,"data-id":R.id,class:["vue-flow__node",`vue-flow__node-${te.value===!1?"default":R.type||"default"}`,{[n.value]:C.value,dragging:se?.value,draggable:C.value,selected:R.selected,selectable:L.value,parent:R.isParent},z.value],style:{visibility:Q.value?"visible":"hidden",zIndex:R.computedPosition.z??H.value,transform:`translate(${R.computedPosition.x}px,${R.computedPosition.y}px)`,pointerEvents:U.value?"all":"none",...V.value},tabIndex:W.value?0:void 0,role:W.value?"group":void 0,"aria-describedby":m.value?void 0:`${TE}-${t}`,"aria-label":R.ariaLabel,"aria-roledescription":"node",...R.domAttributes,onMouseenter:ce,onMousemove:le,onMouseleave:ve,onContextmenu:k,onClick:S,onDblclick:A,onKeydown:x},[qe(te.value===!1?d.value.default:te.value,{id:R.id,type:R.type,data:R.data,events:{...R.events,...M},selected:R.selected,resizing:R.resizing,dragging:se.value,connectable:N.value,position:R.computedPosition,dimensions:R.dimensions,isValidTargetPos:R.isValidTargetPos,isValidSourcePos:R.isValidSourcePos,parent:R.parentNode,parentNodeId:R.parentNode,zIndex:R.computedPosition.z??H.value,targetPosition:R.targetPosition,sourcePosition:R.sourcePosition,label:R.label,dragHandle:R.dragHandle,onUpdateNodeInternals:ie})]);function X(){const E=R.computedPosition,{computedPosition:$,position:O}=eg(R,v.value?cl(E,g.value):E,s.error,f.value,J.value);(R.computedPosition.x!==$.x||R.computedPosition.y!==$.y)&&(R.computedPosition={...R.computedPosition,...$}),(R.position.x!==O.x||R.position.y!==O.y)&&(R.position=O)}function ie(){q.value&&u([{id:e.id,nodeElement:q.value,forceUpdate:!0}])}function ce(E){se?.value||w.mouseEnter({event:E,node:R})}function le(E){se?.value||w.mouseMove({event:E,node:R})}function ve(E){se?.value||w.mouseLeave({event:E,node:R})}function k(E){return w.contextMenu({event:E,node:R})}function A(E){return w.doubleClick({event:E,node:R})}function S(E){L.value&&(!r.value||!C.value||y.value>0)&&av(R,o.value,l,a,i,!1,q.value),w.click({event:E,node:R})}function x(E){if(!(iv(E)||m.value))if(ME.includes(E.key)&&L.value){const $=E.key==="Escape";av(R,o.value,l,a,i,$,q.value)}else C.value&&R.selected&&$i[E.key]&&(E.preventDefault(),p.value=`Moved selected node ${E.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~R.position.x}, y: ${~~R.position.y}`,F({x:$i[E.key].x,y:$i[E.key].y},E.shiftKey))}}}),p3=h3;function v3(e={includeHiddenNodes:!1}){const{nodes:t}=He();return he(()=>{if(t.value.length===0)return!1;for(const n of t.value)if((e.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const g3={class:"vue-flow__nodes vue-flow__container"},m3={name:"Nodes",compatConfig:{MODE:3}},_3=ze({...m3,setup(e){const{getNodes:t,updateNodeDimensions:n,emits:r}=He(),i=v3(),o=Te();return Ee(i,s=>{s&&rn(()=>{r.nodesInitialized(t.value)})},{immediate:!0}),pn(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));rn(()=>n(a))})}),qv(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(fe(),be("div",g3,[o.value?(fe(!0),be(je,{key:0},nl(ue(t),(l,u,c,d)=>{const f=[l.id];if(d&&d.key===l.id&&XI(d,f))return d;const h=(fe(),ut(ue(p3),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=f,h},a,0),128)):ft("",!0)]))}});function y3(){const{emits:e}=He();pn(()=>{if(WE()){const t=document.querySelector(".vue-flow__pane");t&&window.getComputedStyle(t).zIndex!=="1"&&e.error(new ct(it.MISSING_STYLES))}})}const b3=vt("div",{class:"vue-flow__edge-labels"},null,-1),w3={name:"VueFlow",compatConfig:{MODE:3}},x3=ze({...w3,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(e,{expose:t,emit:n}){const r=e,i=yS(),o=nu(r,"modelValue",n),s=nu(r,"nodes",n),a=nu(r,"edges",n),l=He(r),u=QN({modelValue:o,nodes:s,edges:a},r,l);return tM(n,l.hooks),JM(),y3(),br(dl,i),Bv(u),t(l),(c,d)=>(fe(),be("div",{ref:ue(l).vueFlowRef,class:"vue-flow"},[Me(GM,null,{default:Jt(()=>[Me(f3),b3,Me(_3),nt(c.$slots,"zoom-pane")]),_:3}),nt(c.$slots,"default"),Me(ZM)],512))}}),S3={name:"Panel",compatConfig:{MODE:3}},aC=ze({...S3,props:{position:{}},setup(e){const t=e,{userSelectionActive:n}=He(),r=he(()=>`${t.position}`.split("-"));return(i,o)=>(fe(),be("div",{class:Gt(["vue-flow__panel",r.value]),style:Dt({pointerEvents:ue(n)?"none":"all"})},[nt(i.$slots,"default")],6))}});var E3={value:()=>{}};function rg(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ia(n)}function ia(e){this._=e}function C3(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ia.prototype=rg.prototype={constructor:ia,on:function(e,t){var n=this._,r=C3(e+"",n),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=$3(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<s;)if(i=(e=r[o]).type)n[i]=w_(n[i],e.name,t);else if(t==null)for(i in n)n[i]=w_(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ia(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function $3(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function w_(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=E3,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var uv="http://www.w3.org/1999/xhtml";const x_={svg:"http://www.w3.org/2000/svg",xhtml:uv,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function gl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),x_.hasOwnProperty(t)?{space:x_[t],local:e}:e}function k3(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===uv&&t.documentElement.namespaceURI===uv?t.createElement(e):t.createElementNS(n,e)}}function I3(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function lC(e){var t=gl(e);return(t.local?I3:k3)(t)}function A3(){}function ig(e){return e==null?A3:function(){return this.querySelector(e)}}function O3(e){typeof e!="function"&&(e=ig(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=e.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Ft(r,this._parents)}function R3(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function P3(){return[]}function uC(e){return e==null?P3:function(){return this.querySelectorAll(e)}}function T3(e){return function(){return R3(e.apply(this,arguments))}}function N3(e){typeof e=="function"?e=T3(e):e=uC(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var s=t[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(r.push(e.call(l,l.__data__,u,s)),i.push(l));return new Ft(r,i)}function cC(e){return function(){return this.matches(e)}}function dC(e){return function(t){return t.matches(e)}}var M3=Array.prototype.find;function D3(e){return function(){return M3.call(this.children,e)}}function q3(){return this.firstElementChild}function B3(e){return this.select(e==null?q3:D3(typeof e=="function"?e:dC(e)))}var L3=Array.prototype.filter;function z3(){return Array.from(this.children)}function V3(e){return function(){return L3.call(this.children,e)}}function F3(e){return this.selectAll(e==null?z3:V3(typeof e=="function"?e:dC(e)))}function H3(e){typeof e!="function"&&(e=cC(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,u=0;u<s;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new Ft(r,this._parents)}function fC(e){return new Array(e.length)}function j3(){return new Ft(this._enter||this._groups.map(fC),this._parents)}function Aa(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Aa.prototype={constructor:Aa,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function U3(e){return function(){return e}}function G3(e,t,n,r,i,o){for(var s=0,a,l=t.length,u=o.length;s<u;++s)(a=t[s])?(a.__data__=o[s],r[s]=a):n[s]=new Aa(e,o[s]);for(;s<l;++s)(a=t[s])&&(i[s]=a)}function K3(e,t,n,r,i,o,s){var a,l,u=new Map,c=t.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=t[a])&&(f[a]=h=s.call(l,l.__data__,a,t)+"",u.has(h)?i[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(e,o[a],a,o)+"",(l=u.get(h))?(r[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Aa(e,o[a]);for(a=0;a<c;++a)(l=t[a])&&u.get(f[a])===l&&(i[a]=l)}function W3(e){return e.__data__}function Y3(e,t){if(!arguments.length)return Array.from(this,W3);var n=t?K3:G3,r=this._parents,i=this._groups;typeof e!="function"&&(e=U3(e));for(var o=i.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=r[u],d=i[u],f=d.length,h=X3(e.call(c,c&&c.__data__,u,r)),m=h.length,p=a[u]=new Array(m),v=s[u]=new Array(m),g=l[u]=new Array(f);n(c,d,p,v,g,h,t);for(var y=0,_=0,b,I;y<m;++y)if(b=p[y]){for(y>=_&&(_=y+1);!(I=v[_])&&++_<m;);b._next=I||null}}return s=new Ft(s,r),s._enter=a,s._exit=l,s}function X3(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Z3(){return new Ft(this._exit||this._groups.map(fC),this._parents)}function J3(e,t,n){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function Q3(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,s=Math.min(i,o),a=new Array(i),l=0;l<s;++l)for(var u=n[l],c=r[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<i;++l)a[l]=n[l];return new Ft(a,this._parents)}function e2(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function t2(e){e||(e=n2);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var s=n[o],a=s.length,l=i[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(t)}return new Ft(i,this._parents).order()}function n2(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function r2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function i2(){return Array.from(this)}function o2(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function s2(){let e=0;for(const t of this)++e;return e}function a2(){return!this.node()}function l2(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,s=i.length,a;o<s;++o)(a=i[o])&&e.call(a,a.__data__,o,i);return this}function u2(e){return function(){this.removeAttribute(e)}}function c2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function d2(e,t){return function(){this.setAttribute(e,t)}}function f2(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function h2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function p2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function v2(e,t){var n=gl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?c2:u2:typeof t=="function"?n.local?p2:h2:n.local?f2:d2)(n,t))}function hC(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function g2(e){return function(){this.style.removeProperty(e)}}function m2(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _2(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function y2(e,t,n){return arguments.length>1?this.each((t==null?g2:typeof t=="function"?_2:m2)(e,t,n??"")):qi(this.node(),e)}function qi(e,t){return e.style.getPropertyValue(t)||hC(e).getComputedStyle(e,null).getPropertyValue(t)}function b2(e){return function(){delete this[e]}}function w2(e,t){return function(){this[e]=t}}function x2(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function S2(e,t){return arguments.length>1?this.each((t==null?b2:typeof t=="function"?x2:w2)(e,t)):this.node()[e]}function pC(e){return e.trim().split(/^|\s+/)}function og(e){return e.classList||new vC(e)}function vC(e){this._node=e,this._names=pC(e.getAttribute("class")||"")}vC.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function gC(e,t){for(var n=og(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function mC(e,t){for(var n=og(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function E2(e){return function(){gC(this,e)}}function C2(e){return function(){mC(this,e)}}function $2(e,t){return function(){(t.apply(this,arguments)?gC:mC)(this,e)}}function k2(e,t){var n=pC(e+"");if(arguments.length<2){for(var r=og(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?$2:t?E2:C2)(n,t))}function I2(){this.textContent=""}function A2(e){return function(){this.textContent=e}}function O2(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function R2(e){return arguments.length?this.each(e==null?I2:(typeof e=="function"?O2:A2)(e)):this.node().textContent}function P2(){this.innerHTML=""}function T2(e){return function(){this.innerHTML=e}}function N2(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function M2(e){return arguments.length?this.each(e==null?P2:(typeof e=="function"?N2:T2)(e)):this.node().innerHTML}function D2(){this.nextSibling&&this.parentNode.appendChild(this)}function q2(){return this.each(D2)}function B2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function L2(){return this.each(B2)}function z2(e){var t=typeof e=="function"?e:lC(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function V2(){return null}function F2(e,t){var n=typeof e=="function"?e:lC(e),r=t==null?V2:typeof t=="function"?t:ig(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function H2(){var e=this.parentNode;e&&e.removeChild(this)}function j2(){return this.each(H2)}function U2(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function G2(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function K2(e){return this.select(e?G2:U2)}function W2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Y2(e){return function(t){e.call(this,t,this.__data__)}}function X2(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Z2(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function J2(e,t,n){return function(){var r=this.__on,i,o=Y2(t);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function Q2(e,t,n){var r=X2(e+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(i=0,c=a[l];i<o;++i)if((s=r[i]).type===c.type&&s.name===c.name)return c.value}return}for(a=t?J2:Z2,i=0;i<o;++i)this.each(a(r[i],t,n));return this}function _C(e,t,n){var r=hC(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function eD(e,t){return function(){return _C(this,e,t)}}function tD(e,t){return function(){return _C(this,e,t.apply(this,arguments))}}function nD(e,t){return this.each((typeof t=="function"?tD:eD)(e,t))}function*rD(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var yC=[null];function Ft(e,t){this._groups=e,this._parents=t}function gs(){return new Ft([[document.documentElement]],yC)}function iD(){return this}Ft.prototype=gs.prototype={constructor:Ft,select:O3,selectAll:N3,selectChild:B3,selectChildren:F3,filter:H3,data:Y3,enter:j3,exit:Z3,join:J3,merge:Q3,selection:iD,order:e2,sort:t2,call:r2,nodes:i2,node:o2,size:s2,empty:a2,each:l2,attr:v2,style:y2,property:S2,classed:k2,text:R2,html:M2,raise:q2,lower:L2,append:z2,insert:F2,remove:j2,clone:K2,datum:W2,on:Q2,dispatch:nD,[Symbol.iterator]:rD};function gr(e){return typeof e=="string"?new Ft([[document.querySelector(e)]],[document.documentElement]):new Ft([[e]],yC)}function oD(e){let t;for(;t=e.sourceEvent;)e=t;return e}function cr(e,t){if(e=oD(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const cv={capture:!0,passive:!1};function dv(e){e.preventDefault(),e.stopImmediatePropagation()}function sD(e){var t=e.document.documentElement,n=gr(e).on("dragstart.drag",dv,cv);"onselectstart"in t?n.on("selectstart.drag",dv,cv):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function aD(e,t){var n=e.document.documentElement,r=gr(e).on("dragstart.drag",null);t&&(r.on("click.drag",dv,cv),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function sg(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function bC(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ms(){}var es=.7,Oa=1/es,ki="\\s*([+-]?\\d+)\\s*",ts="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",On="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lD=/^#([0-9a-f]{3,8})$/,uD=new RegExp(`^rgb\\(${ki},${ki},${ki}\\)$`),cD=new RegExp(`^rgb\\(${On},${On},${On}\\)$`),dD=new RegExp(`^rgba\\(${ki},${ki},${ki},${ts}\\)$`),fD=new RegExp(`^rgba\\(${On},${On},${On},${ts}\\)$`),hD=new RegExp(`^hsl\\(${ts},${On},${On}\\)$`),pD=new RegExp(`^hsla\\(${ts},${On},${On},${ts}\\)$`),S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sg(ms,ns,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:E_,formatHex:E_,formatHex8:vD,formatHsl:gD,formatRgb:C_,toString:C_});function E_(){return this.rgb().formatHex()}function vD(){return this.rgb().formatHex8()}function gD(){return wC(this).formatHsl()}function C_(){return this.rgb().formatRgb()}function ns(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=lD.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?$_(t):n===3?new Nt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?zs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?zs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=uD.exec(e))?new Nt(t[1],t[2],t[3],1):(t=cD.exec(e))?new Nt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=dD.exec(e))?zs(t[1],t[2],t[3],t[4]):(t=fD.exec(e))?zs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=hD.exec(e))?A_(t[1],t[2]/100,t[3]/100,1):(t=pD.exec(e))?A_(t[1],t[2]/100,t[3]/100,t[4]):S_.hasOwnProperty(e)?$_(S_[e]):e==="transparent"?new Nt(NaN,NaN,NaN,0):null}function $_(e){return new Nt(e>>16&255,e>>8&255,e&255,1)}function zs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Nt(e,t,n,r)}function mD(e){return e instanceof ms||(e=ns(e)),e?(e=e.rgb(),new Nt(e.r,e.g,e.b,e.opacity)):new Nt}function fv(e,t,n,r){return arguments.length===1?mD(e):new Nt(e,t,n,r??1)}function Nt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}sg(Nt,fv,bC(ms,{brighter(e){return e=e==null?Oa:Math.pow(Oa,e),new Nt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?es:Math.pow(es,e),new Nt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Nt(Yr(this.r),Yr(this.g),Yr(this.b),Ra(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:k_,formatHex:k_,formatHex8:_D,formatRgb:I_,toString:I_}));function k_(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}`}function _D(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity)?1:this.opacity)*255)}`}function I_(){const e=Ra(this.opacity);return`${e===1?"rgb(":"rgba("}${Yr(this.r)}, ${Yr(this.g)}, ${Yr(this.b)}${e===1?")":`, ${e})`}`}function Ra(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Yr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function zr(e){return e=Yr(e),(e<16?"0":"")+e.toString(16)}function A_(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new tn(e,t,n,r)}function wC(e){if(e instanceof tn)return new tn(e.h,e.s,e.l,e.opacity);if(e instanceof ms||(e=ns(e)),!e)return new tn;if(e instanceof tn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,a=o-i,l=(o+i)/2;return a?(t===o?s=(n-r)/a+(n<r)*6:n===o?s=(r-t)/a+2:s=(t-n)/a+4,a/=l<.5?o+i:2-o-i,s*=60):a=l>0&&l<1?0:s,new tn(s,a,l,e.opacity)}function yD(e,t,n,r){return arguments.length===1?wC(e):new tn(e,t,n,r??1)}function tn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}sg(tn,yD,bC(ms,{brighter(e){return e=e==null?Oa:Math.pow(Oa,e),new tn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?es:Math.pow(es,e),new tn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Nt(hu(e>=240?e-240:e+120,i,r),hu(e,i,r),hu(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new tn(O_(this.h),Vs(this.s),Vs(this.l),Ra(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ra(this.opacity);return`${e===1?"hsl(":"hsla("}${O_(this.h)}, ${Vs(this.s)*100}%, ${Vs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function O_(e){return e=(e||0)%360,e<0?e+360:e}function Vs(e){return Math.max(0,Math.min(1,e||0))}function hu(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const xC=e=>()=>e;function bD(e,t){return function(n){return e+n*t}}function wD(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function xD(e){return(e=+e)==1?SC:function(t,n){return n-t?wD(t,n,e):xC(isNaN(t)?n:t)}}function SC(e,t){var n=t-e;return n?bD(e,n):xC(isNaN(e)?t:e)}const R_=(function e(t){var n=xD(t);function r(i,o){var s=n((i=fv(i)).r,(o=fv(o)).r),a=n(i.g,o.g),l=n(i.b,o.b),u=SC(i.opacity,o.opacity);return function(c){return i.r=s(c),i.g=a(c),i.b=l(c),i.opacity=u(c),i+""}}return r.gamma=e,r})(1);function pr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var hv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pu=new RegExp(hv.source,"g");function SD(e){return function(){return e}}function ED(e){return function(t){return e(t)+""}}function CD(e,t){var n=hv.lastIndex=pu.lastIndex=0,r,i,o,s=-1,a=[],l=[];for(e=e+"",t=t+"";(r=hv.exec(e))&&(i=pu.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,l.push({i:s,x:pr(r,i)})),n=pu.lastIndex;return n<t.length&&(o=t.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?ED(l[0].x):SD(t):(t=l.length,function(u){for(var c=0,d;c<t;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}var P_=180/Math.PI,pv={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function EC(e,t,n,r,i,o){var s,a,l;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,l/=a),e*r<t*n&&(e=-e,t=-t,l=-l,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*P_,skewX:Math.atan(l)*P_,scaleX:s,scaleY:a}}var Fs;function $D(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?pv:EC(t.a,t.b,t.c,t.d,t.e,t.f)}function kD(e){return e==null||(Fs||(Fs=document.createElementNS("http://www.w3.org/2000/svg","g")),Fs.setAttribute("transform",e),!(e=Fs.transform.baseVal.consolidate()))?pv:(e=e.matrix,EC(e.a,e.b,e.c,e.d,e.e,e.f))}function CC(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var p=h.push("translate(",null,t,null,n);m.push({i:p-4,x:pr(u,d)},{i:p-2,x:pr(c,f)})}else(d||f)&&h.push("translate("+d+t+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(i(d)+"rotate(",null,r)-2,x:pr(u,c)})):c&&d.push(i(d)+"rotate("+c+r)}function a(u,c,d,f){u!==c?f.push({i:d.push(i(d)+"skewX(",null,r)-2,x:pr(u,c)}):c&&d.push(i(d)+"skewX("+c+r)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var p=h.push(i(h)+"scale(",null,",",null,")");m.push({i:p-4,x:pr(u,d)},{i:p-2,x:pr(c,f)})}else(d!==1||f!==1)&&h.push(i(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=e(u),c=e(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,p=f.length,v;++m<p;)d[(v=f[m]).i]=v.x(h);return d.join("")}}}var ID=CC($D,"px, ","px)","deg)"),AD=CC(kD,", ",")",")"),OD=1e-12;function T_(e){return((e=Math.exp(e))+1/e)/2}function RD(e){return((e=Math.exp(e))-1/e)/2}function PD(e){return((e=Math.exp(2*e))-1)/(e+1)}const TD=(function e(t,n,r){function i(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,p=h*h+m*m,v,g;if(p<OD)g=Math.log(f/u)/t,v=function(P){return[a+P*h,l+P*m,u*Math.exp(t*P*g)]};else{var y=Math.sqrt(p),_=(f*f-u*u+r*p)/(2*u*n*y),b=(f*f-u*u-r*p)/(2*f*n*y),I=Math.log(Math.sqrt(_*_+1)-_),T=Math.log(Math.sqrt(b*b+1)-b);g=(T-I)/t,v=function(P){var q=P*g,j=T_(I),B=u/(n*y)*(j*PD(t*q+I)-RD(I));return[a+B*h,l+B*m,u*j/T_(t*q+I)]}}return v.duration=g*1e3*t/Math.SQRT2,v}return i.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return e(s,a,l)},i})(Math.SQRT2,2,4);var Bi=0,go=0,so=0,$C=1e3,Pa,mo,Ta=0,Qr=0,ml=0,rs=typeof performance=="object"&&performance.now?performance:Date,kC=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ag(){return Qr||(kC(ND),Qr=rs.now()+ml)}function ND(){Qr=0}function Na(){this._call=this._time=this._next=null}Na.prototype=IC.prototype={constructor:Na,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?ag():+n)+(t==null?0:+t),!this._next&&mo!==this&&(mo?mo._next=this:Pa=this,mo=this),this._call=e,this._time=n,vv()},stop:function(){this._call&&(this._call=null,this._time=1/0,vv())}};function IC(e,t,n){var r=new Na;return r.restart(e,t,n),r}function MD(){ag(),++Bi;for(var e=Pa,t;e;)(t=Qr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Bi}function N_(){Qr=(Ta=rs.now())+ml,Bi=go=0;try{MD()}finally{Bi=0,qD(),Qr=0}}function DD(){var e=rs.now(),t=e-Ta;t>$C&&(ml-=t,Ta=e)}function qD(){for(var e,t=Pa,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Pa=n);mo=e,vv(r)}function vv(e){if(!Bi){go&&(go=clearTimeout(go));var t=e-Qr;t>24?(e<1/0&&(go=setTimeout(N_,e-rs.now()-ml)),so&&(so=clearInterval(so))):(so||(Ta=rs.now(),so=setInterval(DD,$C)),Bi=1,kC(N_))}}function M_(e,t,n){var r=new Na;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var BD=rg("start","end","cancel","interrupt"),LD=[],AC=0,D_=1,gv=2,oa=3,q_=4,mv=5,sa=6;function _l(e,t,n,r,i,o){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;zD(e,n,{name:t,index:r,group:i,on:BD,tween:LD,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:AC})}function lg(e,t){var n=gn(e,t);if(n.state>AC)throw new Error("too late; already scheduled");return n}function Dn(e,t){var n=gn(e,t);if(n.state>oa)throw new Error("too late; already running");return n}function gn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function zD(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=IC(o,0,n.time);function o(u){n.state=D_,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==D_)return l();for(c in r)if(h=r[c],h.name===n.name){if(h.state===oa)return M_(s);h.state===q_?(h.state=sa,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[c]):+c<t&&(h.state=sa,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[c])}if(M_(function(){n.state===oa&&(n.state=q_,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=gv,n.on.call("start",e,e.__data__,n.index,n.group),n.state===gv){for(n.state=oa,i=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++d]=h);i.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=mv,1),d=-1,f=i.length;++d<f;)i[d].call(e,c);n.state===mv&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=sa,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function aa(e,t){var n=e.__transition,r,i,o=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((r=n[s]).name!==t){o=!1;continue}i=r.state>gv&&r.state<mv,r.state=sa,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[s]}o&&delete e.__transition}}function VD(e){return this.each(function(){aa(this,e)})}function FD(e,t){var n,r;return function(){var i=Dn(this,e),o=i.tween;if(o!==n){r=n=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===t){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function HD(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=Dn(this,e),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:t,value:n},l=0,u=i.length;l<u;++l)if(i[l].name===t){i[l]=a;break}l===u&&i.push(a)}o.tween=i}}function jD(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=gn(this.node(),n).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===e)return s.value;return null}return this.each((t==null?FD:HD)(n,e,t))}function ug(e,t,n){var r=e._id;return e.each(function(){var i=Dn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return gn(i,r).value[t]}}function OC(e,t){var n;return(typeof t=="number"?pr:t instanceof ns?R_:(n=ns(t))?(t=n,R_):CD)(e,t)}function UD(e){return function(){this.removeAttribute(e)}}function GD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function KD(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttribute(e);return s===i?null:s===r?o:o=t(r=s,n)}}function WD(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttributeNS(e.space,e.local);return s===i?null:s===r?o:o=t(r=s,n)}}function YD(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function XD(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function ZD(e,t){var n=gl(e),r=n==="transform"?AD:OC;return this.attrTween(e,typeof t=="function"?(n.local?XD:YD)(n,r,ug(this,"attr."+e,t)):t==null?(n.local?GD:UD)(n):(n.local?WD:KD)(n,r,t))}function JD(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function QD(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function eq(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&QD(e,o)),n}return i._value=t,i}function tq(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&JD(e,o)),n}return i._value=t,i}function nq(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=gl(e);return this.tween(n,(r.local?eq:tq)(r,t))}function rq(e,t){return function(){lg(this,e).delay=+t.apply(this,arguments)}}function iq(e,t){return t=+t,function(){lg(this,e).delay=t}}function oq(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?rq:iq)(t,e)):gn(this.node(),t).delay}function sq(e,t){return function(){Dn(this,e).duration=+t.apply(this,arguments)}}function aq(e,t){return t=+t,function(){Dn(this,e).duration=t}}function lq(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?sq:aq)(t,e)):gn(this.node(),t).duration}function uq(e,t){if(typeof t!="function")throw new Error;return function(){Dn(this,e).ease=t}}function cq(e){var t=this._id;return arguments.length?this.each(uq(t,e)):gn(this.node(),t).ease}function dq(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Dn(this,e).ease=n}}function fq(e){if(typeof e!="function")throw new Error;return this.each(dq(this._id,e))}function hq(e){typeof e!="function"&&(e=cC(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,u=0;u<s;++u)(l=o[u])&&e.call(l,l.__data__,u,o)&&a.push(l);return new nr(r,this._parents,this._name,this._id)}function pq(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var l=t[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<r;++a)s[a]=t[a];return new nr(s,this._parents,this._name,this._id)}function vq(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function gq(e,t,n){var r,i,o=vq(t)?lg:Dn;return function(){var s=o(this,e),a=s.on;a!==r&&(i=(r=a).copy()).on(t,n),s.on=i}}function mq(e,t){var n=this._id;return arguments.length<2?gn(this.node(),n).on.on(e):this.each(gq(n,e,t))}function _q(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function yq(){return this.on("end.remove",_q(this._id))}function bq(e){var t=this._name,n=this._id;typeof e!="function"&&(e=ig(e));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=e.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,_l(u[f],t,n,f,u,gn(c,n)));return new nr(o,this._parents,t,n)}function wq(e){var t=this._name,n=this._id;typeof e!="function"&&(e=uC(e));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var l=r[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=e.call(c,c.__data__,d,l),h,m=gn(c,n),p=0,v=f.length;p<v;++p)(h=f[p])&&_l(h,t,n,p,f,m);o.push(f),s.push(c)}return new nr(o,s,t,n)}var xq=gs.prototype.constructor;function Sq(){return new xq(this._groups,this._parents)}function Eq(e,t){var n,r,i;return function(){var o=qi(this,e),s=(this.style.removeProperty(e),qi(this,e));return o===s?null:o===n&&s===r?i:i=t(n=o,r=s)}}function RC(e){return function(){this.style.removeProperty(e)}}function Cq(e,t,n){var r,i=n+"",o;return function(){var s=qi(this,e);return s===i?null:s===r?o:o=t(r=s,n)}}function $q(e,t,n){var r,i,o;return function(){var s=qi(this,e),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),qi(this,e))),s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a))}}function kq(e,t){var n,r,i,o="style."+t,s="end."+o,a;return function(){var l=Dn(this,e),u=l.on,c=l.value[o]==null?a||(a=RC(t)):void 0;(u!==n||i!==c)&&(r=(n=u).copy()).on(s,i=c),l.on=r}}function Iq(e,t,n){var r=(e+="")=="transform"?ID:OC;return t==null?this.styleTween(e,Eq(e,r)).on("end.style."+e,RC(e)):typeof t=="function"?this.styleTween(e,$q(e,r,ug(this,"style."+e,t))).each(kq(this._id,e)):this.styleTween(e,Cq(e,r,t),n).on("end.style."+e,null)}function Aq(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Oq(e,t,n){var r,i;function o(){var s=t.apply(this,arguments);return s!==i&&(r=(i=s)&&Aq(e,s,n)),r}return o._value=t,o}function Rq(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Oq(e,t,n??""))}function Pq(e){return function(){this.textContent=e}}function Tq(e){return function(){var t=e(this);this.textContent=t??""}}function Nq(e){return this.tween("text",typeof e=="function"?Tq(ug(this,"text",e)):Pq(e==null?"":e+""))}function Mq(e){return function(t){this.textContent=e.call(this,t)}}function Dq(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&Mq(i)),t}return r._value=e,r}function qq(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Dq(e))}function Bq(){for(var e=this._name,t=this._id,n=PC(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=gn(l,t);_l(l,e,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new nr(r,this._parents,e,n)}function Lq(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--i===0&&o()}};n.each(function(){var u=Dn(this,r),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),u.on=t}),i===0&&o()})}var zq=0;function nr(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function PC(){return++zq}var Vn=gs.prototype;nr.prototype={constructor:nr,select:bq,selectAll:wq,selectChild:Vn.selectChild,selectChildren:Vn.selectChildren,filter:hq,merge:pq,selection:Sq,transition:Bq,call:Vn.call,nodes:Vn.nodes,node:Vn.node,size:Vn.size,empty:Vn.empty,each:Vn.each,on:mq,attr:ZD,attrTween:nq,style:Iq,styleTween:Rq,text:Nq,textTween:qq,remove:yq,tween:jD,delay:oq,duration:lq,ease:cq,easeVarying:fq,end:Lq,[Symbol.iterator]:Vn[Symbol.iterator]};function Vq(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Fq={time:null,delay:0,duration:250,ease:Vq};function Hq(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function jq(e){var t,n;e instanceof nr?(t=e._id,e=e._name):(t=PC(),(n=Fq).time=ag(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&_l(l,e,t,u,s,n||Hq(l,t));return new nr(r,this._parents,e,t)}gs.prototype.interrupt=VD;gs.prototype.transition=jq;const Hs=e=>()=>e;function Uq(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Yn(e,t,n){this.k=e,this.x=t,this.y=n}Yn.prototype={constructor:Yn,scale:function(e){return e===1?this:new Yn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Yn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var cg=new Yn(1,0,0);Yn.prototype;function vu(e){e.stopImmediatePropagation()}function ao(e){e.preventDefault(),e.stopImmediatePropagation()}function Gq(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Kq(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function B_(){return this.__zoom||cg}function Wq(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Yq(){return navigator.maxTouchPoints||"ontouchstart"in this}function Xq(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function Zq(){var e=Gq,t=Kq,n=Xq,r=Wq,i=Yq,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=TD,u=rg("start","zoom","end"),c,d,f,h=500,m=150,p=0,v=10;function g(w){w.property("__zoom",B_).on("wheel.zoom",q,{passive:!1}).on("mousedown.zoom",j).on("dblclick.zoom",B).filter(i).on("touchstart.zoom",F).on("touchmove.zoom",R).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,M,C,L){var N=w.selection?w.selection():w;N.property("__zoom",B_),w!==N?I(w,M,C,L):N.interrupt().each(function(){T(this,arguments).event(L).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(w,M,C,L){g.scaleTo(w,function(){var N=this.__zoom.k,W=typeof M=="function"?M.apply(this,arguments):M;return N*W},C,L)},g.scaleTo=function(w,M,C,L){g.transform(w,function(){var N=t.apply(this,arguments),W=this.__zoom,U=C==null?b(N):typeof C=="function"?C.apply(this,arguments):C,Q=W.invert(U),te=typeof M=="function"?M.apply(this,arguments):M;return n(_(y(W,te),U,Q),N,s)},C,L)},g.translateBy=function(w,M,C,L){g.transform(w,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof C=="function"?C.apply(this,arguments):C),t.apply(this,arguments),s)},null,L)},g.translateTo=function(w,M,C,L,N){g.transform(w,function(){var W=t.apply(this,arguments),U=this.__zoom,Q=L==null?b(W):typeof L=="function"?L.apply(this,arguments):L;return n(cg.translate(Q[0],Q[1]).scale(U.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof C=="function"?-C.apply(this,arguments):-C),W,s)},L,N)};function y(w,M){return M=Math.max(o[0],Math.min(o[1],M)),M===w.k?w:new Yn(M,w.x,w.y)}function _(w,M,C){var L=M[0]-C[0]*w.k,N=M[1]-C[1]*w.k;return L===w.x&&N===w.y?w:new Yn(w.k,L,N)}function b(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function I(w,M,C,L){w.on("start.zoom",function(){T(this,arguments).event(L).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(L).end()}).tween("zoom",function(){var N=this,W=arguments,U=T(N,W).event(L),Q=t.apply(N,W),te=C==null?b(Q):typeof C=="function"?C.apply(N,W):C,se=Math.max(Q[1][0]-Q[0][0],Q[1][1]-Q[0][1]),z=N.__zoom,V=typeof M=="function"?M.apply(N,W):M,H=l(z.invert(te).concat(se/z.k),V.invert(te).concat(se/V.k));return function(X){if(X===1)X=V;else{var ie=H(X),ce=se/ie[2];X=new Yn(ce,te[0]-ie[0]*ce,te[1]-ie[1]*ce)}U.zoom(null,X)}})}function T(w,M,C){return!C&&w.__zooming||new P(w,M)}function P(w,M){this.that=w,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,M),this.taps=0}P.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,M){return this.mouse&&w!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var M=gr(this.that).datum();u.call(w,this.that,new Uq(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),M)}};function q(w,...M){if(!e.apply(this,arguments))return;var C=T(this,M).event(w),L=this.__zoom,N=Math.max(o[0],Math.min(o[1],L.k*Math.pow(2,r.apply(this,arguments)))),W=cr(w);if(C.wheel)(C.mouse[0][0]!==W[0]||C.mouse[0][1]!==W[1])&&(C.mouse[1]=L.invert(C.mouse[0]=W)),clearTimeout(C.wheel);else{if(L.k===N)return;C.mouse=[W,L.invert(W)],aa(this),C.start()}ao(w),C.wheel=setTimeout(U,m),C.zoom("mouse",n(_(y(L,N),C.mouse[0],C.mouse[1]),C.extent,s));function U(){C.wheel=null,C.end()}}function j(w,...M){if(f||!e.apply(this,arguments))return;var C=w.currentTarget,L=T(this,M,!0).event(w),N=gr(w.view).on("mousemove.zoom",te,!0).on("mouseup.zoom",se,!0),W=cr(w,C),U=w.clientX,Q=w.clientY;sD(w.view),vu(w),L.mouse=[W,this.__zoom.invert(W)],aa(this),L.start();function te(z){if(ao(z),!L.moved){var V=z.clientX-U,H=z.clientY-Q;L.moved=V*V+H*H>p}L.event(z).zoom("mouse",n(_(L.that.__zoom,L.mouse[0]=cr(z,C),L.mouse[1]),L.extent,s))}function se(z){N.on("mousemove.zoom mouseup.zoom",null),aD(z.view,L.moved),ao(z),L.event(z).end()}}function B(w,...M){if(e.apply(this,arguments)){var C=this.__zoom,L=cr(w.changedTouches?w.changedTouches[0]:w,this),N=C.invert(L),W=C.k*(w.shiftKey?.5:2),U=n(_(y(C,W),L,N),t.apply(this,M),s);ao(w),a>0?gr(this).transition().duration(a).call(I,U,L,w):gr(this).call(g.transform,U,L,w)}}function F(w,...M){if(e.apply(this,arguments)){var C=w.touches,L=C.length,N=T(this,M,w.changedTouches.length===L).event(w),W,U,Q,te;for(vu(w),U=0;U<L;++U)Q=C[U],te=cr(Q,this),te=[te,this.__zoom.invert(te),Q.identifier],N.touch0?!N.touch1&&N.touch0[2]!==te[2]&&(N.touch1=te,N.taps=0):(N.touch0=te,W=!0,N.taps=1+!!c);c&&(c=clearTimeout(c)),W&&(N.taps<2&&(d=te[0],c=setTimeout(function(){c=null},h)),aa(this),N.start())}}function R(w,...M){if(this.__zooming){var C=T(this,M).event(w),L=w.changedTouches,N=L.length,W,U,Q,te;for(ao(w),W=0;W<N;++W)U=L[W],Q=cr(U,this),C.touch0&&C.touch0[2]===U.identifier?C.touch0[0]=Q:C.touch1&&C.touch1[2]===U.identifier&&(C.touch1[0]=Q);if(U=C.that.__zoom,C.touch1){var se=C.touch0[0],z=C.touch0[1],V=C.touch1[0],H=C.touch1[1],X=(X=V[0]-se[0])*X+(X=V[1]-se[1])*X,ie=(ie=H[0]-z[0])*ie+(ie=H[1]-z[1])*ie;U=y(U,Math.sqrt(X/ie)),Q=[(se[0]+V[0])/2,(se[1]+V[1])/2],te=[(z[0]+H[0])/2,(z[1]+H[1])/2]}else if(C.touch0)Q=C.touch0[0],te=C.touch0[1];else return;C.zoom("touch",n(_(U,Q,te),C.extent,s))}}function J(w,...M){if(this.__zooming){var C=T(this,M).event(w),L=w.changedTouches,N=L.length,W,U;for(vu(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),W=0;W<N;++W)U=L[W],C.touch0&&C.touch0[2]===U.identifier?delete C.touch0:C.touch1&&C.touch1[2]===U.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(U=cr(U,this),Math.hypot(d[0]-U[0],d[1]-U[1])<v)){var Q=gr(this).on("dblclick.zoom");Q&&Q.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(r=typeof w=="function"?w:Hs(+w),g):r},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Hs(!!w),g):e},g.touchable=function(w){return arguments.length?(i=typeof w=="function"?w:Hs(!!w),g):i},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Hs([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],g):[o[0],o[1]]},g.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],g):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(a=+w,g):a},g.interpolate=function(w){return arguments.length?(l=w,g):l},g.on=function(){var w=u.on.apply(u,arguments);return w===u?g:w},g.clickDistance=function(w){return arguments.length?(p=(w=+w)*w,g):Math.sqrt(p)},g.tapDistance=function(w){return arguments.length?(v=+w,g):v},g}const TC=Symbol("MiniMapSlots"),Jq=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],Qq={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},eB=ze({...Qq,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(e,{emit:t}){const n=e,r=on(TC),i=Lv(),o=Ne(()=>i.style??{});function s(d){t("click",d)}function a(d){t("dblclick",d)}function l(d){t("mouseenter",d)}function u(d){t("mousemove",d)}function c(d){t("mouseleave",d)}return(d,f)=>!d.hidden&&d.dimensions.width!==0&&d.dimensions.height!==0?(fe(),be(je,{key:0},[ue(r)[`node-${n.type}`]?(fe(),ut(Nr(ue(r)[`node-${n.type}`]),fk(Lo({key:0},{...n,...d.$attrs})),null,16)):(fe(),be("rect",Lo({key:1,id:d.id},d.$attrs,{class:["vue-flow__minimap-node",{selected:d.selected,dragging:d.dragging}],x:d.position.x,y:d.position.y,rx:d.borderRadius,ry:d.borderRadius,width:d.dimensions.width,height:d.dimensions.height,fill:d.color||o.value.background||o.value.backgroundColor,stroke:d.strokeColor,"stroke-width":d.strokeWidth,"shape-rendering":d.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,Jq))],64)):ft("",!0)}}),tB=["width","height","viewBox","aria-labelledby"],nB=["id"],rB=["d","fill","stroke","stroke-width"],iB={name:"MiniMap",compatConfig:{MODE:3}},oB=ze({...iB,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(e,{emit:t}){const n=yS(),r=Lv(),i=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:d,d3Selection:f,d3Zoom:h,getNodesInitialized:m}=He(),p=Te();br(TC,n);const v=Ne(()=>{var N;return e.width??((N=r.style)==null?void 0:N.width)??i}),g=Ne(()=>{var N;return e.height??((N=r.style)==null?void 0:N.height)??o}),y=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",_=he(()=>typeof e.nodeColor=="string"?()=>e.nodeColor:e.nodeColor),b=he(()=>typeof e.nodeStrokeColor=="string"?()=>e.nodeStrokeColor:e.nodeStrokeColor),I=he(()=>typeof e.nodeClassName=="string"?()=>e.nodeClassName:typeof e.nodeClassName=="function"?e.nodeClassName:()=>""),T=he(()=>Qv(m.value.filter(N=>!N.hidden))),P=he(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),q=he(()=>m.value&&m.value.length?wN(T.value,P.value):P.value),j=he(()=>{const N=q.value.width/v.value,W=q.value.height/g.value;return Math.max(N,W)}),B=he(()=>{const N=j.value*v.value,W=j.value*g.value,U=e.offsetScale*j.value;return{offset:U,x:q.value.x-(N-q.value.width)/2-U,y:q.value.y-(W-q.value.height)/2-U,width:N+U*2,height:W+U*2}}),F=he(()=>!B.value.x||!B.value.y?"":`
    M${B.value.x-B.value.offset},${B.value.y-B.value.offset}
    h${B.value.width+B.value.offset*2}
    v${B.value.height+B.value.offset*2}
    h${-B.value.width-B.value.offset*2}z
    M${P.value.x+e.maskBorderRadius},${P.value.y}
    h${P.value.width-2*e.maskBorderRadius}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 ${e.maskBorderRadius},${e.maskBorderRadius}
    v${P.value.height-2*e.maskBorderRadius}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 -${e.maskBorderRadius},${e.maskBorderRadius}
    h${-(P.value.width-2*e.maskBorderRadius)}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 -${e.maskBorderRadius},-${e.maskBorderRadius}
    v${-(P.value.height-2*e.maskBorderRadius)}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 ${e.maskBorderRadius},-${e.maskBorderRadius}z`);Jk(N=>{if(p.value){const W=gr(p.value),U=se=>{if(se.sourceEvent.type!=="wheel"||!f.value||!h.value)return;const z=se.sourceEvent.ctrlKey&&Qo()?10:1,V=-se.sourceEvent.deltaY*(se.sourceEvent.deltaMode===1?.05:se.sourceEvent.deltaMode?1:.002)*e.zoomStep,H=l.value.zoom*2**(V*z);h.value.scaleTo(f.value,H)},Q=se=>{if(se.sourceEvent.type!=="mousemove"||!f.value||!h.value)return;const z=j.value*Math.max(1,l.value.zoom)*(e.inversePan?-1:1),V={x:l.value.x-se.sourceEvent.movementX*z,y:l.value.y-se.sourceEvent.movementY*z},H=[[0,0],[c.value.width,c.value.height]],X=cg.translate(V.x,V.y).scale(l.value.zoom),ie=h.value.constrain()(X,H,u.value);h.value.transform(f.value,ie)},te=Zq().wheelDelta(se=>ov(se)*(e.zoomStep/10)).on("zoom",e.pannable?Q:()=>{}).on("zoom.wheel",e.zoomable?U:()=>{});W.call(te),N(()=>{W.on("zoom",null)})}},{flush:"post"});function R(N){const[W,U]=cr(N);t("click",{event:N,position:{x:W,y:U}})}function J(N,W){const U={event:N,node:W,connectedEdges:Dr([W],a.value)};d.miniMapNodeClick(U),t("nodeClick",U)}function w(N,W){const U={event:N,node:W,connectedEdges:Dr([W],a.value)};d.miniMapNodeDoubleClick(U),t("nodeDblclick",U)}function M(N,W){const U={event:N,node:W,connectedEdges:Dr([W],a.value)};d.miniMapNodeMouseEnter(U),t("nodeMouseenter",U)}function C(N,W){const U={event:N,node:W,connectedEdges:Dr([W],a.value)};d.miniMapNodeMouseMove(U),t("nodeMousemove",U)}function L(N,W){const U={event:N,node:W,connectedEdges:Dr([W],a.value)};d.miniMapNodeMouseLeave(U),t("nodeMouseleave",U)}return(N,W)=>(fe(),ut(ue(aC),{position:N.position,class:Gt(["vue-flow__minimap",{pannable:N.pannable,zoomable:N.zoomable}])},{default:Jt(()=>[(fe(),be("svg",{ref_key:"el",ref:p,width:v.value,height:g.value,viewBox:[B.value.x,B.value.y,B.value.width,B.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${ue(s)}`,onClick:R},[N.ariaLabel?(fe(),be("title",{key:0,id:`vue-flow__minimap-${ue(s)}`},Ii(N.ariaLabel),9,nB)):ft("",!0),(fe(!0),be(je,null,nl(ue(m),U=>(fe(),ut(eB,{id:U.id,key:U.id,f:"",position:U.computedPosition,dimensions:U.dimensions,selected:U.selected,dragging:U.dragging,style:Dt(U.style),class:Gt(I.value(U)),color:_.value(U),"border-radius":N.nodeBorderRadius,"stroke-color":b.value(U),"stroke-width":N.nodeStrokeWidth,"shape-rendering":ue(y),type:U.type,hidden:U.hidden,onClick:Q=>J(Q,U),onDblclick:Q=>w(Q,U),onMouseenter:Q=>M(Q,U),onMousemove:Q=>C(Q,U),onMouseleave:Q=>L(Q,U)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),vt("path",{class:"vue-flow__minimap-mask",d:F.value,fill:N.maskColor,stroke:N.maskStrokeColor,"stroke-width":N.maskStrokeWidth,"fill-rule":"evenodd"},null,8,rB)],8,tB))]),_:1},8,["position","class"]))}}),sB={name:"ControlButton",compatConfig:{MODE:3}},aB=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},lB={type:"button",class:"vue-flow__controls-button"};function uB(e,t,n,r,i,o){return fe(),be("button",lB,[nt(e.$slots,"default")])}const js=aB(sB,[["render",uB]]),cB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},dB=vt("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"},null,-1),fB=[dB];function hB(e,t){return fe(),be("svg",cB,fB)}const pB={render:hB},vB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},gB=vt("path",{d:"M0 0h32v4.2H0z"},null,-1),mB=[gB];function _B(e,t){return fe(),be("svg",vB,mB)}const yB={render:_B},bB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},wB=vt("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"},null,-1),xB=[wB];function SB(e,t){return fe(),be("svg",bB,xB)}const EB={render:SB},CB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},$B=vt("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"},null,-1),kB=[$B];function IB(e,t){return fe(),be("svg",CB,kB)}const AB={render:IB},OB={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},RB=vt("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z"},null,-1),PB=[RB];function TB(e,t){return fe(),be("svg",OB,PB)}const NB={render:TB},MB={name:"Controls",compatConfig:{MODE:3}},DB=ze({...MB,props:{showZoom:{type:Boolean,default:!0},showFitView:{type:Boolean,default:!0},showInteractive:{type:Boolean,default:!0},fitViewParams:{},position:{default:()=>PE.BottomLeft}},emits:["zoomIn","zoomOut","fitView","interactionChange"],setup(e,{emit:t}){const{nodesDraggable:n,nodesConnectable:r,elementsSelectable:i,setInteractive:o,zoomIn:s,zoomOut:a,fitView:l,viewport:u,minZoom:c,maxZoom:d}=He(),f=Ne(()=>n.value||r.value||i.value),h=Ne(()=>u.value.zoom<=c.value),m=Ne(()=>u.value.zoom>=d.value);function p(){s(),t("zoomIn")}function v(){a(),t("zoomOut")}function g(){l(e.fitViewParams),t("fitView")}function y(){o(!f.value),t("interactionChange",!f.value)}return(_,b)=>(fe(),ut(ue(aC),{class:"vue-flow__controls",position:_.position},{default:Jt(()=>[nt(_.$slots,"top"),_.showZoom?(fe(),be(je,{key:0},[nt(_.$slots,"control-zoom-in",{},()=>[Me(js,{class:"vue-flow__controls-zoomin",disabled:m.value,onClick:p},{default:Jt(()=>[nt(_.$slots,"icon-zoom-in",{},()=>[(fe(),ut(Nr(ue(pB))))])]),_:3},8,["disabled"])]),nt(_.$slots,"control-zoom-out",{},()=>[Me(js,{class:"vue-flow__controls-zoomout",disabled:h.value,onClick:v},{default:Jt(()=>[nt(_.$slots,"icon-zoom-out",{},()=>[(fe(),ut(Nr(ue(yB))))])]),_:3},8,["disabled"])])],64)):ft("",!0),_.showFitView?nt(_.$slots,"control-fit-view",{key:1},()=>[Me(js,{class:"vue-flow__controls-fitview",onClick:g},{default:Jt(()=>[nt(_.$slots,"icon-fit-view",{},()=>[(fe(),ut(Nr(ue(EB))))])]),_:3})]):ft("",!0),_.showInteractive?nt(_.$slots,"control-interactive",{key:2},()=>[_.showInteractive?(fe(),ut(js,{key:0,class:"vue-flow__controls-interactive",onClick:y},{default:Jt(()=>[f.value?nt(_.$slots,"icon-unlock",{key:0},()=>[(fe(),ut(Nr(ue(NB))))]):ft("",!0),f.value?ft("",!0):nt(_.$slots,"icon-lock",{key:1},()=>[(fe(),ut(Nr(ue(AB))))])]),_:3})):ft("",!0)]):ft("",!0),nt(_.$slots,"default")]),_:3},8,["position"]))}});var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qB(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dg(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gu,L_;function BB(){if(L_)return gu;L_=1;function e(){this.__data__=[],this.size=0}return gu=e,gu}var mu,z_;function ji(){if(z_)return mu;z_=1;function e(t,n){return t===n||t!==t&&n!==n}return mu=e,mu}var _u,V_;function yl(){if(V_)return _u;V_=1;var e=ji();function t(n,r){for(var i=n.length;i--;)if(e(n[i][0],r))return i;return-1}return _u=t,_u}var yu,F_;function LB(){if(F_)return yu;F_=1;var e=yl(),t=Array.prototype,n=t.splice;function r(i){var o=this.__data__,s=e(o,i);if(s<0)return!1;var a=o.length-1;return s==a?o.pop():n.call(o,s,1),--this.size,!0}return yu=r,yu}var bu,H_;function zB(){if(H_)return bu;H_=1;var e=yl();function t(n){var r=this.__data__,i=e(r,n);return i<0?void 0:r[i][1]}return bu=t,bu}var wu,j_;function VB(){if(j_)return wu;j_=1;var e=yl();function t(n){return e(this.__data__,n)>-1}return wu=t,wu}var xu,U_;function FB(){if(U_)return xu;U_=1;var e=yl();function t(n,r){var i=this.__data__,o=e(i,n);return o<0?(++this.size,i.push([n,r])):i[o][1]=r,this}return xu=t,xu}var Su,G_;function bl(){if(G_)return Su;G_=1;var e=BB(),t=LB(),n=zB(),r=VB(),i=FB();function o(s){var a=-1,l=s==null?0:s.length;for(this.clear();++a<l;){var u=s[a];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=i,Su=o,Su}var Eu,K_;function HB(){if(K_)return Eu;K_=1;var e=bl();function t(){this.__data__=new e,this.size=0}return Eu=t,Eu}var Cu,W_;function jB(){if(W_)return Cu;W_=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Cu=e,Cu}var $u,Y_;function UB(){if(Y_)return $u;Y_=1;function e(t){return this.__data__.get(t)}return $u=e,$u}var ku,X_;function GB(){if(X_)return ku;X_=1;function e(t){return this.__data__.has(t)}return ku=e,ku}var Iu,Z_;function NC(){if(Z_)return Iu;Z_=1;var e=typeof Us=="object"&&Us&&Us.Object===Object&&Us;return Iu=e,Iu}var Au,J_;function mn(){if(J_)return Au;J_=1;var e=NC(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return Au=n,Au}var Ou,Q_;function Ui(){if(Q_)return Ou;Q_=1;var e=mn(),t=e.Symbol;return Ou=t,Ou}var Ru,ey;function KB(){if(ey)return Ru;ey=1;var e=Ui(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,i=e?e.toStringTag:void 0;function o(s){var a=n.call(s,i),l=s[i];try{s[i]=void 0;var u=!0}catch{}var c=r.call(s);return u&&(a?s[i]=l:delete s[i]),c}return Ru=o,Ru}var Pu,ty;function WB(){if(ty)return Pu;ty=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return Pu=n,Pu}var Tu,ny;function ri(){if(ny)return Tu;ny=1;var e=Ui(),t=KB(),n=WB(),r="[object Null]",i="[object Undefined]",o=e?e.toStringTag:void 0;function s(a){return a==null?a===void 0?i:r:o&&o in Object(a)?t(a):n(a)}return Tu=s,Tu}var Nu,ry;function Kt(){if(ry)return Nu;ry=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return Nu=e,Nu}var Mu,iy;function _s(){if(iy)return Mu;iy=1;var e=ri(),t=Kt(),n="[object AsyncFunction]",r="[object Function]",i="[object GeneratorFunction]",o="[object Proxy]";function s(a){if(!t(a))return!1;var l=e(a);return l==r||l==i||l==n||l==o}return Mu=s,Mu}var Du,oy;function YB(){if(oy)return Du;oy=1;var e=mn(),t=e["__core-js_shared__"];return Du=t,Du}var qu,sy;function XB(){if(sy)return qu;sy=1;var e=YB(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return qu=n,qu}var Bu,ay;function MC(){if(ay)return Bu;ay=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return Bu=n,Bu}var Lu,ly;function ZB(){if(ly)return Lu;ly=1;var e=_s(),t=XB(),n=Kt(),r=MC(),i=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,s=Function.prototype,a=Object.prototype,l=s.toString,u=a.hasOwnProperty,c=RegExp("^"+l.call(u).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(f){if(!n(f)||t(f))return!1;var h=e(f)?c:o;return h.test(r(f))}return Lu=d,Lu}var zu,uy;function JB(){if(uy)return zu;uy=1;function e(t,n){return t?.[n]}return zu=e,zu}var Vu,cy;function ii(){if(cy)return Vu;cy=1;var e=ZB(),t=JB();function n(r,i){var o=t(r,i);return e(o)?o:void 0}return Vu=n,Vu}var Fu,dy;function fg(){if(dy)return Fu;dy=1;var e=ii(),t=mn(),n=e(t,"Map");return Fu=n,Fu}var Hu,fy;function wl(){if(fy)return Hu;fy=1;var e=ii(),t=e(Object,"create");return Hu=t,Hu}var ju,hy;function QB(){if(hy)return ju;hy=1;var e=wl();function t(){this.__data__=e?e(null):{},this.size=0}return ju=t,ju}var Uu,py;function eL(){if(py)return Uu;py=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return Uu=e,Uu}var Gu,vy;function tL(){if(vy)return Gu;vy=1;var e=wl(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function i(o){var s=this.__data__;if(e){var a=s[o];return a===t?void 0:a}return r.call(s,o)?s[o]:void 0}return Gu=i,Gu}var Ku,gy;function nL(){if(gy)return Ku;gy=1;var e=wl(),t=Object.prototype,n=t.hasOwnProperty;function r(i){var o=this.__data__;return e?o[i]!==void 0:n.call(o,i)}return Ku=r,Ku}var Wu,my;function rL(){if(my)return Wu;my=1;var e=wl(),t="__lodash_hash_undefined__";function n(r,i){var o=this.__data__;return this.size+=this.has(r)?0:1,o[r]=e&&i===void 0?t:i,this}return Wu=n,Wu}var Yu,_y;function iL(){if(_y)return Yu;_y=1;var e=QB(),t=eL(),n=tL(),r=nL(),i=rL();function o(s){var a=-1,l=s==null?0:s.length;for(this.clear();++a<l;){var u=s[a];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=i,Yu=o,Yu}var Xu,yy;function oL(){if(yy)return Xu;yy=1;var e=iL(),t=bl(),n=fg();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return Xu=r,Xu}var Zu,by;function sL(){if(by)return Zu;by=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return Zu=e,Zu}var Ju,wy;function xl(){if(wy)return Ju;wy=1;var e=sL();function t(n,r){var i=n.__data__;return e(r)?i[typeof r=="string"?"string":"hash"]:i.map}return Ju=t,Ju}var Qu,xy;function aL(){if(xy)return Qu;xy=1;var e=xl();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return Qu=t,Qu}var ec,Sy;function lL(){if(Sy)return ec;Sy=1;var e=xl();function t(n){return e(this,n).get(n)}return ec=t,ec}var tc,Ey;function uL(){if(Ey)return tc;Ey=1;var e=xl();function t(n){return e(this,n).has(n)}return tc=t,tc}var nc,Cy;function cL(){if(Cy)return nc;Cy=1;var e=xl();function t(n,r){var i=e(this,n),o=i.size;return i.set(n,r),this.size+=i.size==o?0:1,this}return nc=t,nc}var rc,$y;function hg(){if($y)return rc;$y=1;var e=oL(),t=aL(),n=lL(),r=uL(),i=cL();function o(s){var a=-1,l=s==null?0:s.length;for(this.clear();++a<l;){var u=s[a];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=i,rc=o,rc}var ic,ky;function dL(){if(ky)return ic;ky=1;var e=bl(),t=fg(),n=hg(),r=200;function i(o,s){var a=this.__data__;if(a instanceof e){var l=a.__data__;if(!t||l.length<r-1)return l.push([o,s]),this.size=++a.size,this;a=this.__data__=new n(l)}return a.set(o,s),this.size=a.size,this}return ic=i,ic}var oc,Iy;function Sl(){if(Iy)return oc;Iy=1;var e=bl(),t=HB(),n=jB(),r=UB(),i=GB(),o=dL();function s(a){var l=this.__data__=new e(a);this.size=l.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=i,s.prototype.set=o,oc=s,oc}var sc,Ay;function pg(){if(Ay)return sc;Ay=1;function e(t,n){for(var r=-1,i=t==null?0:t.length;++r<i&&n(t[r],r,t)!==!1;);return t}return sc=e,sc}var ac,Oy;function DC(){if(Oy)return ac;Oy=1;var e=ii(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return ac=t,ac}var lc,Ry;function El(){if(Ry)return lc;Ry=1;var e=DC();function t(n,r,i){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[r]=i}return lc=t,lc}var uc,Py;function Cl(){if(Py)return uc;Py=1;var e=El(),t=ji(),n=Object.prototype,r=n.hasOwnProperty;function i(o,s,a){var l=o[s];(!(r.call(o,s)&&t(l,a))||a===void 0&&!(s in o))&&e(o,s,a)}return uc=i,uc}var cc,Ty;function ys(){if(Ty)return cc;Ty=1;var e=Cl(),t=El();function n(r,i,o,s){var a=!o;o||(o={});for(var l=-1,u=i.length;++l<u;){var c=i[l],d=s?s(o[c],r[c],c,o,r):void 0;d===void 0&&(d=r[c]),a?t(o,c,d):e(o,c,d)}return o}return cc=n,cc}var dc,Ny;function fL(){if(Ny)return dc;Ny=1;function e(t,n){for(var r=-1,i=Array(t);++r<t;)i[r]=n(r);return i}return dc=e,dc}var fc,My;function qn(){if(My)return fc;My=1;function e(t){return t!=null&&typeof t=="object"}return fc=e,fc}var hc,Dy;function hL(){if(Dy)return hc;Dy=1;var e=ri(),t=qn(),n="[object Arguments]";function r(i){return t(i)&&e(i)==n}return hc=r,hc}var pc,qy;function bs(){if(qy)return pc;qy=1;var e=hL(),t=qn(),n=Object.prototype,r=n.hasOwnProperty,i=n.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!i.call(s,"callee")};return pc=o,pc}var vc,By;function st(){if(By)return vc;By=1;var e=Array.isArray;return vc=e,vc}var _o={exports:{}},gc,Ly;function pL(){if(Ly)return gc;Ly=1;function e(){return!1}return gc=e,gc}_o.exports;var zy;function Gi(){return zy||(zy=1,(function(e,t){var n=mn(),r=pL(),i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===i,a=s?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;e.exports=u})(_o,_o.exports)),_o.exports}var mc,Vy;function $l(){if(Vy)return mc;Vy=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,i){var o=typeof r;return i=i??e,!!i&&(o=="number"||o!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<i}return mc=n,mc}var _c,Fy;function vg(){if(Fy)return _c;Fy=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return _c=t,_c}var yc,Hy;function vL(){if(Hy)return yc;Hy=1;var e=ri(),t=vg(),n=qn(),r="[object Arguments]",i="[object Array]",o="[object Boolean]",s="[object Date]",a="[object Error]",l="[object Function]",u="[object Map]",c="[object Number]",d="[object Object]",f="[object RegExp]",h="[object Set]",m="[object String]",p="[object WeakMap]",v="[object ArrayBuffer]",g="[object DataView]",y="[object Float32Array]",_="[object Float64Array]",b="[object Int8Array]",I="[object Int16Array]",T="[object Int32Array]",P="[object Uint8Array]",q="[object Uint8ClampedArray]",j="[object Uint16Array]",B="[object Uint32Array]",F={};F[y]=F[_]=F[b]=F[I]=F[T]=F[P]=F[q]=F[j]=F[B]=!0,F[r]=F[i]=F[v]=F[o]=F[g]=F[s]=F[a]=F[l]=F[u]=F[c]=F[d]=F[f]=F[h]=F[m]=F[p]=!1;function R(J){return n(J)&&t(J.length)&&!!F[e(J)]}return yc=R,yc}var bc,jy;function kl(){if(jy)return bc;jy=1;function e(t){return function(n){return t(n)}}return bc=e,bc}var yo={exports:{}};yo.exports;var Uy;function gg(){return Uy||(Uy=1,(function(e,t){var n=NC(),r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===r,s=o&&n.process,a=(function(){try{var l=i&&i.require&&i.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}})();e.exports=a})(yo,yo.exports)),yo.exports}var wc,Gy;function ws(){if(Gy)return wc;Gy=1;var e=vL(),t=kl(),n=gg(),r=n&&n.isTypedArray,i=r?t(r):e;return wc=i,wc}var xc,Ky;function qC(){if(Ky)return xc;Ky=1;var e=fL(),t=bs(),n=st(),r=Gi(),i=$l(),o=ws(),s=Object.prototype,a=s.hasOwnProperty;function l(u,c){var d=n(u),f=!d&&t(u),h=!d&&!f&&r(u),m=!d&&!f&&!h&&o(u),p=d||f||h||m,v=p?e(u.length,String):[],g=v.length;for(var y in u)(c||a.call(u,y))&&!(p&&(y=="length"||h&&(y=="offset"||y=="parent")||m&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||i(y,g)))&&v.push(y);return v}return xc=l,xc}var Sc,Wy;function Il(){if(Wy)return Sc;Wy=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,i=typeof r=="function"&&r.prototype||e;return n===i}return Sc=t,Sc}var Ec,Yy;function BC(){if(Yy)return Ec;Yy=1;function e(t,n){return function(r){return t(n(r))}}return Ec=e,Ec}var Cc,Xy;function gL(){if(Xy)return Cc;Xy=1;var e=BC(),t=e(Object.keys,Object);return Cc=t,Cc}var $c,Zy;function mg(){if(Zy)return $c;Zy=1;var e=Il(),t=gL(),n=Object.prototype,r=n.hasOwnProperty;function i(o){if(!e(o))return t(o);var s=[];for(var a in Object(o))r.call(o,a)&&a!="constructor"&&s.push(a);return s}return $c=i,$c}var kc,Jy;function sr(){if(Jy)return kc;Jy=1;var e=_s(),t=vg();function n(r){return r!=null&&t(r.length)&&!e(r)}return kc=n,kc}var Ic,Qy;function kr(){if(Qy)return Ic;Qy=1;var e=qC(),t=mg(),n=sr();function r(i){return n(i)?e(i):t(i)}return Ic=r,Ic}var Ac,eb;function mL(){if(eb)return Ac;eb=1;var e=ys(),t=kr();function n(r,i){return r&&e(i,t(i),r)}return Ac=n,Ac}var Oc,tb;function _L(){if(tb)return Oc;tb=1;function e(t){var n=[];if(t!=null)for(var r in Object(t))n.push(r);return n}return Oc=e,Oc}var Rc,nb;function yL(){if(nb)return Rc;nb=1;var e=Kt(),t=Il(),n=_L(),r=Object.prototype,i=r.hasOwnProperty;function o(s){if(!e(s))return n(s);var a=t(s),l=[];for(var u in s)u=="constructor"&&(a||!i.call(s,u))||l.push(u);return l}return Rc=o,Rc}var Pc,rb;function oi(){if(rb)return Pc;rb=1;var e=qC(),t=yL(),n=sr();function r(i){return n(i)?e(i,!0):t(i)}return Pc=r,Pc}var Tc,ib;function bL(){if(ib)return Tc;ib=1;var e=ys(),t=oi();function n(r,i){return r&&e(i,t(i),r)}return Tc=n,Tc}var bo={exports:{}};bo.exports;var ob;function LC(){return ob||(ob=1,(function(e,t){var n=mn(),r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===r,s=o?n.Buffer:void 0,a=s?s.allocUnsafe:void 0;function l(u,c){if(c)return u.slice();var d=u.length,f=a?a(d):new u.constructor(d);return u.copy(f),f}e.exports=l})(bo,bo.exports)),bo.exports}var Nc,sb;function zC(){if(sb)return Nc;sb=1;function e(t,n){var r=-1,i=t.length;for(n||(n=Array(i));++r<i;)n[r]=t[r];return n}return Nc=e,Nc}var Mc,ab;function VC(){if(ab)return Mc;ab=1;function e(t,n){for(var r=-1,i=t==null?0:t.length,o=0,s=[];++r<i;){var a=t[r];n(a,r,t)&&(s[o++]=a)}return s}return Mc=e,Mc}var Dc,lb;function FC(){if(lb)return Dc;lb=1;function e(){return[]}return Dc=e,Dc}var qc,ub;function _g(){if(ub)return qc;ub=1;var e=VC(),t=FC(),n=Object.prototype,r=n.propertyIsEnumerable,i=Object.getOwnPropertySymbols,o=i?function(s){return s==null?[]:(s=Object(s),e(i(s),function(a){return r.call(s,a)}))}:t;return qc=o,qc}var Bc,cb;function wL(){if(cb)return Bc;cb=1;var e=ys(),t=_g();function n(r,i){return e(r,t(r),i)}return Bc=n,Bc}var Lc,db;function yg(){if(db)return Lc;db=1;function e(t,n){for(var r=-1,i=n.length,o=t.length;++r<i;)t[o+r]=n[r];return t}return Lc=e,Lc}var zc,fb;function Al(){if(fb)return zc;fb=1;var e=BC(),t=e(Object.getPrototypeOf,Object);return zc=t,zc}var Vc,hb;function HC(){if(hb)return Vc;hb=1;var e=yg(),t=Al(),n=_g(),r=FC(),i=Object.getOwnPropertySymbols,o=i?function(s){for(var a=[];s;)e(a,n(s)),s=t(s);return a}:r;return Vc=o,Vc}var Fc,pb;function xL(){if(pb)return Fc;pb=1;var e=ys(),t=HC();function n(r,i){return e(r,t(r),i)}return Fc=n,Fc}var Hc,vb;function jC(){if(vb)return Hc;vb=1;var e=yg(),t=st();function n(r,i,o){var s=i(r);return t(r)?s:e(s,o(r))}return Hc=n,Hc}var jc,gb;function UC(){if(gb)return jc;gb=1;var e=jC(),t=_g(),n=kr();function r(i){return e(i,n,t)}return jc=r,jc}var Uc,mb;function SL(){if(mb)return Uc;mb=1;var e=jC(),t=HC(),n=oi();function r(i){return e(i,n,t)}return Uc=r,Uc}var Gc,_b;function EL(){if(_b)return Gc;_b=1;var e=ii(),t=mn(),n=e(t,"DataView");return Gc=n,Gc}var Kc,yb;function CL(){if(yb)return Kc;yb=1;var e=ii(),t=mn(),n=e(t,"Promise");return Kc=n,Kc}var Wc,bb;function GC(){if(bb)return Wc;bb=1;var e=ii(),t=mn(),n=e(t,"Set");return Wc=n,Wc}var Yc,wb;function $L(){if(wb)return Yc;wb=1;var e=ii(),t=mn(),n=e(t,"WeakMap");return Yc=n,Yc}var Xc,xb;function Ki(){if(xb)return Xc;xb=1;var e=EL(),t=fg(),n=CL(),r=GC(),i=$L(),o=ri(),s=MC(),a="[object Map]",l="[object Object]",u="[object Promise]",c="[object Set]",d="[object WeakMap]",f="[object DataView]",h=s(e),m=s(t),p=s(n),v=s(r),g=s(i),y=o;return(e&&y(new e(new ArrayBuffer(1)))!=f||t&&y(new t)!=a||n&&y(n.resolve())!=u||r&&y(new r)!=c||i&&y(new i)!=d)&&(y=function(_){var b=o(_),I=b==l?_.constructor:void 0,T=I?s(I):"";if(T)switch(T){case h:return f;case m:return a;case p:return u;case v:return c;case g:return d}return b}),Xc=y,Xc}var Zc,Sb;function kL(){if(Sb)return Zc;Sb=1;var e=Object.prototype,t=e.hasOwnProperty;function n(r){var i=r.length,o=new r.constructor(i);return i&&typeof r[0]=="string"&&t.call(r,"index")&&(o.index=r.index,o.input=r.input),o}return Zc=n,Zc}var Jc,Eb;function KC(){if(Eb)return Jc;Eb=1;var e=mn(),t=e.Uint8Array;return Jc=t,Jc}var Qc,Cb;function bg(){if(Cb)return Qc;Cb=1;var e=KC();function t(n){var r=new n.constructor(n.byteLength);return new e(r).set(new e(n)),r}return Qc=t,Qc}var ed,$b;function IL(){if($b)return ed;$b=1;var e=bg();function t(n,r){var i=r?e(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}return ed=t,ed}var td,kb;function AL(){if(kb)return td;kb=1;var e=/\w*$/;function t(n){var r=new n.constructor(n.source,e.exec(n));return r.lastIndex=n.lastIndex,r}return td=t,td}var nd,Ib;function OL(){if(Ib)return nd;Ib=1;var e=Ui(),t=e?e.prototype:void 0,n=t?t.valueOf:void 0;function r(i){return n?Object(n.call(i)):{}}return nd=r,nd}var rd,Ab;function WC(){if(Ab)return rd;Ab=1;var e=bg();function t(n,r){var i=r?e(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}return rd=t,rd}var id,Ob;function RL(){if(Ob)return id;Ob=1;var e=bg(),t=IL(),n=AL(),r=OL(),i=WC(),o="[object Boolean]",s="[object Date]",a="[object Map]",l="[object Number]",u="[object RegExp]",c="[object Set]",d="[object String]",f="[object Symbol]",h="[object ArrayBuffer]",m="[object DataView]",p="[object Float32Array]",v="[object Float64Array]",g="[object Int8Array]",y="[object Int16Array]",_="[object Int32Array]",b="[object Uint8Array]",I="[object Uint8ClampedArray]",T="[object Uint16Array]",P="[object Uint32Array]";function q(j,B,F){var R=j.constructor;switch(B){case h:return e(j);case o:case s:return new R(+j);case m:return t(j,F);case p:case v:case g:case y:case _:case b:case I:case T:case P:return i(j,F);case a:return new R;case l:case d:return new R(j);case u:return n(j);case c:return new R;case f:return r(j)}}return id=q,id}var od,Rb;function YC(){if(Rb)return od;Rb=1;var e=Kt(),t=Object.create,n=(function(){function r(){}return function(i){if(!e(i))return{};if(t)return t(i);r.prototype=i;var o=new r;return r.prototype=void 0,o}})();return od=n,od}var sd,Pb;function XC(){if(Pb)return sd;Pb=1;var e=YC(),t=Al(),n=Il();function r(i){return typeof i.constructor=="function"&&!n(i)?e(t(i)):{}}return sd=r,sd}var ad,Tb;function PL(){if(Tb)return ad;Tb=1;var e=Ki(),t=qn(),n="[object Map]";function r(i){return t(i)&&e(i)==n}return ad=r,ad}var ld,Nb;function TL(){if(Nb)return ld;Nb=1;var e=PL(),t=kl(),n=gg(),r=n&&n.isMap,i=r?t(r):e;return ld=i,ld}var ud,Mb;function NL(){if(Mb)return ud;Mb=1;var e=Ki(),t=qn(),n="[object Set]";function r(i){return t(i)&&e(i)==n}return ud=r,ud}var cd,Db;function ML(){if(Db)return cd;Db=1;var e=NL(),t=kl(),n=gg(),r=n&&n.isSet,i=r?t(r):e;return cd=i,cd}var dd,qb;function ZC(){if(qb)return dd;qb=1;var e=Sl(),t=pg(),n=Cl(),r=mL(),i=bL(),o=LC(),s=zC(),a=wL(),l=xL(),u=UC(),c=SL(),d=Ki(),f=kL(),h=RL(),m=XC(),p=st(),v=Gi(),g=TL(),y=Kt(),_=ML(),b=kr(),I=oi(),T=1,P=2,q=4,j="[object Arguments]",B="[object Array]",F="[object Boolean]",R="[object Date]",J="[object Error]",w="[object Function]",M="[object GeneratorFunction]",C="[object Map]",L="[object Number]",N="[object Object]",W="[object RegExp]",U="[object Set]",Q="[object String]",te="[object Symbol]",se="[object WeakMap]",z="[object ArrayBuffer]",V="[object DataView]",H="[object Float32Array]",X="[object Float64Array]",ie="[object Int8Array]",ce="[object Int16Array]",le="[object Int32Array]",ve="[object Uint8Array]",k="[object Uint8ClampedArray]",A="[object Uint16Array]",S="[object Uint32Array]",x={};x[j]=x[B]=x[z]=x[V]=x[F]=x[R]=x[H]=x[X]=x[ie]=x[ce]=x[le]=x[C]=x[L]=x[N]=x[W]=x[U]=x[Q]=x[te]=x[ve]=x[k]=x[A]=x[S]=!0,x[J]=x[w]=x[se]=!1;function E($,O,K,Y,G,ee){var Z,re=O&T,oe=O&P,me=O&q;if(K&&(Z=G?K($,Y,G,ee):K($)),Z!==void 0)return Z;if(!y($))return $;var ye=p($);if(ye){if(Z=f($),!re)return s($,Z)}else{var we=d($),at=we==w||we==M;if(v($))return o($,re);if(we==N||we==j||at&&!G){if(Z=oe||at?{}:m($),!re)return oe?l($,i(Z,$)):a($,r(Z,$))}else{if(!x[we])return G?$:{};Z=h($,we,re)}}ee||(ee=new e);var lt=ee.get($);if(lt)return lt;ee.set($,Z),_($)?$.forEach(function(Rt){Z.add(E(Rt,O,K,Rt,$,ee))}):g($)&&$.forEach(function(Rt,bn){Z.set(bn,E(Rt,O,K,bn,$,ee))});var jt=me?oe?c:u:oe?I:b,Bt=ye?void 0:jt($);return t(Bt||$,function(Rt,bn){Bt&&(bn=Rt,Rt=$[bn]),n(Z,bn,E(Rt,O,K,bn,$,ee))}),Z}return dd=E,dd}var fd,Bb;function DL(){if(Bb)return fd;Bb=1;var e=ZC(),t=4;function n(r){return e(r,t)}return fd=n,fd}var hd,Lb;function wg(){if(Lb)return hd;Lb=1;function e(t){return function(){return t}}return hd=e,hd}var pd,zb;function qL(){if(zb)return pd;zb=1;function e(t){return function(n,r,i){for(var o=-1,s=Object(n),a=i(n),l=a.length;l--;){var u=a[t?l:++o];if(r(s[u],u,s)===!1)break}return n}}return pd=e,pd}var vd,Vb;function xg(){if(Vb)return vd;Vb=1;var e=qL(),t=e();return vd=t,vd}var gd,Fb;function Sg(){if(Fb)return gd;Fb=1;var e=xg(),t=kr();function n(r,i){return r&&e(r,i,t)}return gd=n,gd}var md,Hb;function BL(){if(Hb)return md;Hb=1;var e=sr();function t(n,r){return function(i,o){if(i==null)return i;if(!e(i))return n(i,o);for(var s=i.length,a=r?s:-1,l=Object(i);(r?a--:++a<s)&&o(l[a],a,l)!==!1;);return i}}return md=t,md}var _d,jb;function Ol(){if(jb)return _d;jb=1;var e=Sg(),t=BL(),n=t(e);return _d=n,_d}var yd,Ub;function si(){if(Ub)return yd;Ub=1;function e(t){return t}return yd=e,yd}var bd,Gb;function JC(){if(Gb)return bd;Gb=1;var e=si();function t(n){return typeof n=="function"?n:e}return bd=t,bd}var wd,Kb;function QC(){if(Kb)return wd;Kb=1;var e=pg(),t=Ol(),n=JC(),r=st();function i(o,s){var a=r(o)?e:t;return a(o,n(s))}return wd=i,wd}var xd,Wb;function e$(){return Wb||(Wb=1,xd=QC()),xd}var Sd,Yb;function LL(){if(Yb)return Sd;Yb=1;var e=Ol();function t(n,r){var i=[];return e(n,function(o,s,a){r(o,s,a)&&i.push(o)}),i}return Sd=t,Sd}var Ed,Xb;function zL(){if(Xb)return Ed;Xb=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return Ed=t,Ed}var Cd,Zb;function VL(){if(Zb)return Cd;Zb=1;function e(t){return this.__data__.has(t)}return Cd=e,Cd}var $d,Jb;function t$(){if(Jb)return $d;Jb=1;var e=hg(),t=zL(),n=VL();function r(i){var o=-1,s=i==null?0:i.length;for(this.__data__=new e;++o<s;)this.add(i[o])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,$d=r,$d}var kd,Qb;function FL(){if(Qb)return kd;Qb=1;function e(t,n){for(var r=-1,i=t==null?0:t.length;++r<i;)if(n(t[r],r,t))return!0;return!1}return kd=e,kd}var Id,e0;function n$(){if(e0)return Id;e0=1;function e(t,n){return t.has(n)}return Id=e,Id}var Ad,t0;function r$(){if(t0)return Ad;t0=1;var e=t$(),t=FL(),n=n$(),r=1,i=2;function o(s,a,l,u,c,d){var f=l&r,h=s.length,m=a.length;if(h!=m&&!(f&&m>h))return!1;var p=d.get(s),v=d.get(a);if(p&&v)return p==a&&v==s;var g=-1,y=!0,_=l&i?new e:void 0;for(d.set(s,a),d.set(a,s);++g<h;){var b=s[g],I=a[g];if(u)var T=f?u(I,b,g,a,s,d):u(b,I,g,s,a,d);if(T!==void 0){if(T)continue;y=!1;break}if(_){if(!t(a,function(P,q){if(!n(_,q)&&(b===P||c(b,P,l,u,d)))return _.push(q)})){y=!1;break}}else if(!(b===I||c(b,I,l,u,d))){y=!1;break}}return d.delete(s),d.delete(a),y}return Ad=o,Ad}var Od,n0;function HL(){if(n0)return Od;n0=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(i,o){r[++n]=[o,i]}),r}return Od=e,Od}var Rd,r0;function Eg(){if(r0)return Rd;r0=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(i){r[++n]=i}),r}return Rd=e,Rd}var Pd,i0;function jL(){if(i0)return Pd;i0=1;var e=Ui(),t=KC(),n=ji(),r=r$(),i=HL(),o=Eg(),s=1,a=2,l="[object Boolean]",u="[object Date]",c="[object Error]",d="[object Map]",f="[object Number]",h="[object RegExp]",m="[object Set]",p="[object String]",v="[object Symbol]",g="[object ArrayBuffer]",y="[object DataView]",_=e?e.prototype:void 0,b=_?_.valueOf:void 0;function I(T,P,q,j,B,F,R){switch(q){case y:if(T.byteLength!=P.byteLength||T.byteOffset!=P.byteOffset)return!1;T=T.buffer,P=P.buffer;case g:return!(T.byteLength!=P.byteLength||!F(new t(T),new t(P)));case l:case u:case f:return n(+T,+P);case c:return T.name==P.name&&T.message==P.message;case h:case p:return T==P+"";case d:var J=i;case m:var w=j&s;if(J||(J=o),T.size!=P.size&&!w)return!1;var M=R.get(T);if(M)return M==P;j|=a,R.set(T,P);var C=r(J(T),J(P),j,B,F,R);return R.delete(T),C;case v:if(b)return b.call(T)==b.call(P)}return!1}return Pd=I,Pd}var Td,o0;function UL(){if(o0)return Td;o0=1;var e=UC(),t=1,n=Object.prototype,r=n.hasOwnProperty;function i(o,s,a,l,u,c){var d=a&t,f=e(o),h=f.length,m=e(s),p=m.length;if(h!=p&&!d)return!1;for(var v=h;v--;){var g=f[v];if(!(d?g in s:r.call(s,g)))return!1}var y=c.get(o),_=c.get(s);if(y&&_)return y==s&&_==o;var b=!0;c.set(o,s),c.set(s,o);for(var I=d;++v<h;){g=f[v];var T=o[g],P=s[g];if(l)var q=d?l(P,T,g,s,o,c):l(T,P,g,o,s,c);if(!(q===void 0?T===P||u(T,P,a,l,c):q)){b=!1;break}I||(I=g=="constructor")}if(b&&!I){var j=o.constructor,B=s.constructor;j!=B&&"constructor"in o&&"constructor"in s&&!(typeof j=="function"&&j instanceof j&&typeof B=="function"&&B instanceof B)&&(b=!1)}return c.delete(o),c.delete(s),b}return Td=i,Td}var Nd,s0;function GL(){if(s0)return Nd;s0=1;var e=Sl(),t=r$(),n=jL(),r=UL(),i=Ki(),o=st(),s=Gi(),a=ws(),l=1,u="[object Arguments]",c="[object Array]",d="[object Object]",f=Object.prototype,h=f.hasOwnProperty;function m(p,v,g,y,_,b){var I=o(p),T=o(v),P=I?c:i(p),q=T?c:i(v);P=P==u?d:P,q=q==u?d:q;var j=P==d,B=q==d,F=P==q;if(F&&s(p)){if(!s(v))return!1;I=!0,j=!1}if(F&&!j)return b||(b=new e),I||a(p)?t(p,v,g,y,_,b):n(p,v,P,g,y,_,b);if(!(g&l)){var R=j&&h.call(p,"__wrapped__"),J=B&&h.call(v,"__wrapped__");if(R||J){var w=R?p.value():p,M=J?v.value():v;return b||(b=new e),_(w,M,g,y,b)}}return F?(b||(b=new e),r(p,v,g,y,_,b)):!1}return Nd=m,Nd}var Md,a0;function i$(){if(a0)return Md;a0=1;var e=GL(),t=qn();function n(r,i,o,s,a){return r===i?!0:r==null||i==null||!t(r)&&!t(i)?r!==r&&i!==i:e(r,i,o,s,n,a)}return Md=n,Md}var Dd,l0;function KL(){if(l0)return Dd;l0=1;var e=Sl(),t=i$(),n=1,r=2;function i(o,s,a,l){var u=a.length,c=u,d=!l;if(o==null)return!c;for(o=Object(o);u--;){var f=a[u];if(d&&f[2]?f[1]!==o[f[0]]:!(f[0]in o))return!1}for(;++u<c;){f=a[u];var h=f[0],m=o[h],p=f[1];if(d&&f[2]){if(m===void 0&&!(h in o))return!1}else{var v=new e;if(l)var g=l(m,p,h,o,s,v);if(!(g===void 0?t(p,m,n|r,l,v):g))return!1}}return!0}return Dd=i,Dd}var qd,u0;function o$(){if(u0)return qd;u0=1;var e=Kt();function t(n){return n===n&&!e(n)}return qd=t,qd}var Bd,c0;function WL(){if(c0)return Bd;c0=1;var e=o$(),t=kr();function n(r){for(var i=t(r),o=i.length;o--;){var s=i[o],a=r[s];i[o]=[s,a,e(a)]}return i}return Bd=n,Bd}var Ld,d0;function s$(){if(d0)return Ld;d0=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return Ld=e,Ld}var zd,f0;function YL(){if(f0)return zd;f0=1;var e=KL(),t=WL(),n=s$();function r(i){var o=t(i);return o.length==1&&o[0][2]?n(o[0][0],o[0][1]):function(s){return s===i||e(s,i,o)}}return zd=r,zd}var Vd,h0;function Wi(){if(h0)return Vd;h0=1;var e=ri(),t=qn(),n="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&e(i)==n}return Vd=r,Vd}var Fd,p0;function Cg(){if(p0)return Fd;p0=1;var e=st(),t=Wi(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function i(o,s){if(e(o))return!1;var a=typeof o;return a=="number"||a=="symbol"||a=="boolean"||o==null||t(o)?!0:r.test(o)||!n.test(o)||s!=null&&o in Object(s)}return Fd=i,Fd}var Hd,v0;function XL(){if(v0)return Hd;v0=1;var e=hg(),t="Expected a function";function n(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new TypeError(t);var o=function(){var s=arguments,a=i?i.apply(this,s):s[0],l=o.cache;if(l.has(a))return l.get(a);var u=r.apply(this,s);return o.cache=l.set(a,u)||l,u};return o.cache=new(n.Cache||e),o}return n.Cache=e,Hd=n,Hd}var jd,g0;function ZL(){if(g0)return jd;g0=1;var e=XL(),t=500;function n(r){var i=e(r,function(s){return o.size===t&&o.clear(),s}),o=i.cache;return i}return jd=n,jd}var Ud,m0;function JL(){if(m0)return Ud;m0=1;var e=ZL(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(t,function(s,a,l,u){o.push(l?u.replace(n,"$1"):a||s)}),o});return Ud=r,Ud}var Gd,_0;function Rl(){if(_0)return Gd;_0=1;function e(t,n){for(var r=-1,i=t==null?0:t.length,o=Array(i);++r<i;)o[r]=n(t[r],r,t);return o}return Gd=e,Gd}var Kd,y0;function QL(){if(y0)return Kd;y0=1;var e=Ui(),t=Rl(),n=st(),r=Wi(),i=e?e.prototype:void 0,o=i?i.toString:void 0;function s(a){if(typeof a=="string")return a;if(n(a))return t(a,s)+"";if(r(a))return o?o.call(a):"";var l=a+"";return l=="0"&&1/a==-1/0?"-0":l}return Kd=s,Kd}var Wd,b0;function a$(){if(b0)return Wd;b0=1;var e=QL();function t(n){return n==null?"":e(n)}return Wd=t,Wd}var Yd,w0;function Pl(){if(w0)return Yd;w0=1;var e=st(),t=Cg(),n=JL(),r=a$();function i(o,s){return e(o)?o:t(o,s)?[o]:n(r(o))}return Yd=i,Yd}var Xd,x0;function xs(){if(x0)return Xd;x0=1;var e=Wi();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return Xd=t,Xd}var Zd,S0;function Tl(){if(S0)return Zd;S0=1;var e=Pl(),t=xs();function n(r,i){i=e(i,r);for(var o=0,s=i.length;r!=null&&o<s;)r=r[t(i[o++])];return o&&o==s?r:void 0}return Zd=n,Zd}var Jd,E0;function ez(){if(E0)return Jd;E0=1;var e=Tl();function t(n,r,i){var o=n==null?void 0:e(n,r);return o===void 0?i:o}return Jd=t,Jd}var Qd,C0;function tz(){if(C0)return Qd;C0=1;function e(t,n){return t!=null&&n in Object(t)}return Qd=e,Qd}var ef,$0;function l$(){if($0)return ef;$0=1;var e=Pl(),t=bs(),n=st(),r=$l(),i=vg(),o=xs();function s(a,l,u){l=e(l,a);for(var c=-1,d=l.length,f=!1;++c<d;){var h=o(l[c]);if(!(f=a!=null&&u(a,h)))break;a=a[h]}return f||++c!=d?f:(d=a==null?0:a.length,!!d&&i(d)&&r(h,d)&&(n(a)||t(a)))}return ef=s,ef}var tf,k0;function u$(){if(k0)return tf;k0=1;var e=tz(),t=l$();function n(r,i){return r!=null&&t(r,i,e)}return tf=n,tf}var nf,I0;function nz(){if(I0)return nf;I0=1;var e=i$(),t=ez(),n=u$(),r=Cg(),i=o$(),o=s$(),s=xs(),a=1,l=2;function u(c,d){return r(c)&&i(d)?o(s(c),d):function(f){var h=t(f,c);return h===void 0&&h===d?n(f,c):e(d,h,a|l)}}return nf=u,nf}var rf,A0;function c$(){if(A0)return rf;A0=1;function e(t){return function(n){return n?.[t]}}return rf=e,rf}var of,O0;function rz(){if(O0)return of;O0=1;var e=Tl();function t(n){return function(r){return e(r,n)}}return of=t,of}var sf,R0;function iz(){if(R0)return sf;R0=1;var e=c$(),t=rz(),n=Cg(),r=xs();function i(o){return n(o)?e(r(o)):t(o)}return sf=i,sf}var af,P0;function ar(){if(P0)return af;P0=1;var e=YL(),t=nz(),n=si(),r=st(),i=iz();function o(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):i(s)}return af=o,af}var lf,T0;function d$(){if(T0)return lf;T0=1;var e=VC(),t=LL(),n=ar(),r=st();function i(o,s){var a=r(o)?e:t;return a(o,n(s,3))}return lf=i,lf}var uf,N0;function oz(){if(N0)return uf;N0=1;var e=Object.prototype,t=e.hasOwnProperty;function n(r,i){return r!=null&&t.call(r,i)}return uf=n,uf}var cf,M0;function f$(){if(M0)return cf;M0=1;var e=oz(),t=l$();function n(r,i){return r!=null&&t(r,i,e)}return cf=n,cf}var df,D0;function sz(){if(D0)return df;D0=1;var e=mg(),t=Ki(),n=bs(),r=st(),i=sr(),o=Gi(),s=Il(),a=ws(),l="[object Map]",u="[object Set]",c=Object.prototype,d=c.hasOwnProperty;function f(h){if(h==null)return!0;if(i(h)&&(r(h)||typeof h=="string"||typeof h.splice=="function"||o(h)||a(h)||n(h)))return!h.length;var m=t(h);if(m==l||m==u)return!h.size;if(s(h))return!e(h).length;for(var p in h)if(d.call(h,p))return!1;return!0}return df=f,df}var ff,q0;function h$(){if(q0)return ff;q0=1;function e(t){return t===void 0}return ff=e,ff}var hf,B0;function p$(){if(B0)return hf;B0=1;var e=Ol(),t=sr();function n(r,i){var o=-1,s=t(r)?Array(r.length):[];return e(r,function(a,l,u){s[++o]=i(a,l,u)}),s}return hf=n,hf}var pf,L0;function v$(){if(L0)return pf;L0=1;var e=Rl(),t=ar(),n=p$(),r=st();function i(o,s){var a=r(o)?e:n;return a(o,t(s,3))}return pf=i,pf}var vf,z0;function az(){if(z0)return vf;z0=1;function e(t,n,r,i){var o=-1,s=t==null?0:t.length;for(i&&s&&(r=t[++o]);++o<s;)r=n(r,t[o],o,t);return r}return vf=e,vf}var gf,V0;function lz(){if(V0)return gf;V0=1;function e(t,n,r,i,o){return o(t,function(s,a,l){r=i?(i=!1,s):n(r,s,a,l)}),r}return gf=e,gf}var mf,F0;function g$(){if(F0)return mf;F0=1;var e=az(),t=Ol(),n=ar(),r=lz(),i=st();function o(s,a,l){var u=i(s)?e:r,c=arguments.length<3;return u(s,n(a,4),l,c,t)}return mf=o,mf}var _f,H0;function uz(){if(H0)return _f;H0=1;var e=ri(),t=st(),n=qn(),r="[object String]";function i(o){return typeof o=="string"||!t(o)&&n(o)&&e(o)==r}return _f=i,_f}var yf,j0;function cz(){if(j0)return yf;j0=1;var e=c$(),t=e("length");return yf=t,yf}var bf,U0;function dz(){if(U0)return bf;U0=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",i=t+n+r,o="\\ufe0e\\ufe0f",s="\\u200d",a=RegExp("["+s+e+i+o+"]");function l(u){return a.test(u)}return bf=l,bf}var wf,G0;function fz(){if(G0)return wf;G0=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",i=t+n+r,o="\\ufe0e\\ufe0f",s="["+e+"]",a="["+i+"]",l="\\ud83c[\\udffb-\\udfff]",u="(?:"+a+"|"+l+")",c="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",m=u+"?",p="["+o+"]?",v="(?:"+h+"(?:"+[c,d,f].join("|")+")"+p+m+")*",g=p+m+v,y="(?:"+[c+a+"?",a,d,f,s].join("|")+")",_=RegExp(l+"(?="+l+")|"+y+g,"g");function b(I){for(var T=_.lastIndex=0;_.test(I);)++T;return T}return wf=b,wf}var xf,K0;function hz(){if(K0)return xf;K0=1;var e=cz(),t=dz(),n=fz();function r(i){return t(i)?n(i):e(i)}return xf=r,xf}var Sf,W0;function pz(){if(W0)return Sf;W0=1;var e=mg(),t=Ki(),n=sr(),r=uz(),i=hz(),o="[object Map]",s="[object Set]";function a(l){if(l==null)return 0;if(n(l))return r(l)?i(l):l.length;var u=t(l);return u==o||u==s?l.size:e(l).length}return Sf=a,Sf}var Ef,Y0;function vz(){if(Y0)return Ef;Y0=1;var e=pg(),t=YC(),n=Sg(),r=ar(),i=Al(),o=st(),s=Gi(),a=_s(),l=Kt(),u=ws();function c(d,f,h){var m=o(d),p=m||s(d)||u(d);if(f=r(f,4),h==null){var v=d&&d.constructor;p?h=m?new v:[]:l(d)?h=a(v)?t(i(d)):{}:h={}}return(p?e:n)(d,function(g,y,_){return f(h,g,y,_)}),h}return Ef=c,Ef}var Cf,X0;function gz(){if(X0)return Cf;X0=1;var e=Ui(),t=bs(),n=st(),r=e?e.isConcatSpreadable:void 0;function i(o){return n(o)||t(o)||!!(r&&o&&o[r])}return Cf=i,Cf}var $f,Z0;function $g(){if(Z0)return $f;Z0=1;var e=yg(),t=gz();function n(r,i,o,s,a){var l=-1,u=r.length;for(o||(o=t),a||(a=[]);++l<u;){var c=r[l];i>0&&o(c)?i>1?n(c,i-1,o,s,a):e(a,c):s||(a[a.length]=c)}return a}return $f=n,$f}var kf,J0;function mz(){if(J0)return kf;J0=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return kf=e,kf}var If,Q0;function m$(){if(Q0)return If;Q0=1;var e=mz(),t=Math.max;function n(r,i,o){return i=t(i===void 0?r.length-1:i,0),function(){for(var s=arguments,a=-1,l=t(s.length-i,0),u=Array(l);++a<l;)u[a]=s[i+a];a=-1;for(var c=Array(i+1);++a<i;)c[a]=s[a];return c[i]=o(u),e(r,this,c)}}return If=n,If}var Af,e1;function _z(){if(e1)return Af;e1=1;var e=wg(),t=DC(),n=si(),r=t?function(i,o){return t(i,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:n;return Af=r,Af}var Of,t1;function yz(){if(t1)return Of;t1=1;var e=800,t=16,n=Date.now;function r(i){var o=0,s=0;return function(){var a=n(),l=t-(a-s);if(s=a,l>0){if(++o>=e)return arguments[0]}else o=0;return i.apply(void 0,arguments)}}return Of=r,Of}var Rf,n1;function _$(){if(n1)return Rf;n1=1;var e=_z(),t=yz(),n=t(e);return Rf=n,Rf}var Pf,r1;function Nl(){if(r1)return Pf;r1=1;var e=si(),t=m$(),n=_$();function r(i,o){return n(t(i,o,e),i+"")}return Pf=r,Pf}var Tf,i1;function y$(){if(i1)return Tf;i1=1;function e(t,n,r,i){for(var o=t.length,s=r+(i?1:-1);i?s--:++s<o;)if(n(t[s],s,t))return s;return-1}return Tf=e,Tf}var Nf,o1;function bz(){if(o1)return Nf;o1=1;function e(t){return t!==t}return Nf=e,Nf}var Mf,s1;function wz(){if(s1)return Mf;s1=1;function e(t,n,r){for(var i=r-1,o=t.length;++i<o;)if(t[i]===n)return i;return-1}return Mf=e,Mf}var Df,a1;function xz(){if(a1)return Df;a1=1;var e=y$(),t=bz(),n=wz();function r(i,o,s){return o===o?n(i,o,s):e(i,t,s)}return Df=r,Df}var qf,l1;function Sz(){if(l1)return qf;l1=1;var e=xz();function t(n,r){var i=n==null?0:n.length;return!!i&&e(n,r,0)>-1}return qf=t,qf}var Bf,u1;function Ez(){if(u1)return Bf;u1=1;function e(t,n,r){for(var i=-1,o=t==null?0:t.length;++i<o;)if(r(n,t[i]))return!0;return!1}return Bf=e,Bf}var Lf,c1;function Cz(){if(c1)return Lf;c1=1;function e(){}return Lf=e,Lf}var zf,d1;function $z(){if(d1)return zf;d1=1;var e=GC(),t=Cz(),n=Eg(),r=1/0,i=e&&1/n(new e([,-0]))[1]==r?function(o){return new e(o)}:t;return zf=i,zf}var Vf,f1;function kz(){if(f1)return Vf;f1=1;var e=t$(),t=Sz(),n=Ez(),r=n$(),i=$z(),o=Eg(),s=200;function a(l,u,c){var d=-1,f=t,h=l.length,m=!0,p=[],v=p;if(c)m=!1,f=n;else if(h>=s){var g=u?null:i(l);if(g)return o(g);m=!1,f=r,v=new e}else v=u?[]:p;e:for(;++d<h;){var y=l[d],_=u?u(y):y;if(y=c||y!==0?y:0,m&&_===_){for(var b=v.length;b--;)if(v[b]===_)continue e;u&&v.push(_),p.push(y)}else f(v,_,c)||(v!==p&&v.push(_),p.push(y))}return p}return Vf=a,Vf}var Ff,h1;function b$(){if(h1)return Ff;h1=1;var e=sr(),t=qn();function n(r){return t(r)&&e(r)}return Ff=n,Ff}var Hf,p1;function Iz(){if(p1)return Hf;p1=1;var e=$g(),t=Nl(),n=kz(),r=b$(),i=t(function(o){return n(e(o,1,r,!0))});return Hf=i,Hf}var jf,v1;function Az(){if(v1)return jf;v1=1;var e=Rl();function t(n,r){return e(r,function(i){return n[i]})}return jf=t,jf}var Uf,g1;function w$(){if(g1)return Uf;g1=1;var e=Az(),t=kr();function n(r){return r==null?[]:e(r,t(r))}return Uf=n,Uf}var Gf,m1;function Wt(){if(m1)return Gf;m1=1;var e;if(typeof dg=="function")try{e={clone:DL(),constant:wg(),each:e$(),filter:d$(),has:f$(),isArray:st(),isEmpty:sz(),isFunction:_s(),isUndefined:h$(),keys:kr(),map:v$(),reduce:g$(),size:pz(),transform:vz(),union:Iz(),values:w$()}}catch{}return e||(e=window._),Gf=e,Gf}var Kf,_1;function kg(){if(_1)return Kf;_1=1;var e=Wt();Kf=i;var t="\0",n="\0",r="";function i(c){this._isDirected=e.has(c,"directed")?c.directed:!0,this._isMultigraph=e.has(c,"multigraph")?c.multigraph:!1,this._isCompound=e.has(c,"compound")?c.compound:!1,this._label=void 0,this._defaultNodeLabelFn=e.constant(void 0),this._defaultEdgeLabelFn=e.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[n]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}i.prototype._nodeCount=0,i.prototype._edgeCount=0,i.prototype.isDirected=function(){return this._isDirected},i.prototype.isMultigraph=function(){return this._isMultigraph},i.prototype.isCompound=function(){return this._isCompound},i.prototype.setGraph=function(c){return this._label=c,this},i.prototype.graph=function(){return this._label},i.prototype.setDefaultNodeLabel=function(c){return e.isFunction(c)||(c=e.constant(c)),this._defaultNodeLabelFn=c,this},i.prototype.nodeCount=function(){return this._nodeCount},i.prototype.nodes=function(){return e.keys(this._nodes)},i.prototype.sources=function(){var c=this;return e.filter(this.nodes(),function(d){return e.isEmpty(c._in[d])})},i.prototype.sinks=function(){var c=this;return e.filter(this.nodes(),function(d){return e.isEmpty(c._out[d])})},i.prototype.setNodes=function(c,d){var f=arguments,h=this;return e.each(c,function(m){f.length>1?h.setNode(m,d):h.setNode(m)}),this},i.prototype.setNode=function(c,d){return e.has(this._nodes,c)?(arguments.length>1&&(this._nodes[c]=d),this):(this._nodes[c]=arguments.length>1?d:this._defaultNodeLabelFn(c),this._isCompound&&(this._parent[c]=n,this._children[c]={},this._children[n][c]=!0),this._in[c]={},this._preds[c]={},this._out[c]={},this._sucs[c]={},++this._nodeCount,this)},i.prototype.node=function(c){return this._nodes[c]},i.prototype.hasNode=function(c){return e.has(this._nodes,c)},i.prototype.removeNode=function(c){var d=this;if(e.has(this._nodes,c)){var f=function(h){d.removeEdge(d._edgeObjs[h])};delete this._nodes[c],this._isCompound&&(this._removeFromParentsChildList(c),delete this._parent[c],e.each(this.children(c),function(h){d.setParent(h)}),delete this._children[c]),e.each(e.keys(this._in[c]),f),delete this._in[c],delete this._preds[c],e.each(e.keys(this._out[c]),f),delete this._out[c],delete this._sucs[c],--this._nodeCount}return this},i.prototype.setParent=function(c,d){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(e.isUndefined(d))d=n;else{d+="";for(var f=d;!e.isUndefined(f);f=this.parent(f))if(f===c)throw new Error("Setting "+d+" as parent of "+c+" would create a cycle");this.setNode(d)}return this.setNode(c),this._removeFromParentsChildList(c),this._parent[c]=d,this._children[d][c]=!0,this},i.prototype._removeFromParentsChildList=function(c){delete this._children[this._parent[c]][c]},i.prototype.parent=function(c){if(this._isCompound){var d=this._parent[c];if(d!==n)return d}},i.prototype.children=function(c){if(e.isUndefined(c)&&(c=n),this._isCompound){var d=this._children[c];if(d)return e.keys(d)}else{if(c===n)return this.nodes();if(this.hasNode(c))return[]}},i.prototype.predecessors=function(c){var d=this._preds[c];if(d)return e.keys(d)},i.prototype.successors=function(c){var d=this._sucs[c];if(d)return e.keys(d)},i.prototype.neighbors=function(c){var d=this.predecessors(c);if(d)return e.union(d,this.successors(c))},i.prototype.isLeaf=function(c){var d;return this.isDirected()?d=this.successors(c):d=this.neighbors(c),d.length===0},i.prototype.filterNodes=function(c){var d=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});d.setGraph(this.graph());var f=this;e.each(this._nodes,function(p,v){c(v)&&d.setNode(v,p)}),e.each(this._edgeObjs,function(p){d.hasNode(p.v)&&d.hasNode(p.w)&&d.setEdge(p,f.edge(p))});var h={};function m(p){var v=f.parent(p);return v===void 0||d.hasNode(v)?(h[p]=v,v):v in h?h[v]:m(v)}return this._isCompound&&e.each(d.nodes(),function(p){d.setParent(p,m(p))}),d},i.prototype.setDefaultEdgeLabel=function(c){return e.isFunction(c)||(c=e.constant(c)),this._defaultEdgeLabelFn=c,this},i.prototype.edgeCount=function(){return this._edgeCount},i.prototype.edges=function(){return e.values(this._edgeObjs)},i.prototype.setPath=function(c,d){var f=this,h=arguments;return e.reduce(c,function(m,p){return h.length>1?f.setEdge(m,p,d):f.setEdge(m,p),p}),this},i.prototype.setEdge=function(){var c,d,f,h,m=!1,p=arguments[0];typeof p=="object"&&p!==null&&"v"in p?(c=p.v,d=p.w,f=p.name,arguments.length===2&&(h=arguments[1],m=!0)):(c=p,d=arguments[1],f=arguments[3],arguments.length>2&&(h=arguments[2],m=!0)),c=""+c,d=""+d,e.isUndefined(f)||(f=""+f);var v=a(this._isDirected,c,d,f);if(e.has(this._edgeLabels,v))return m&&(this._edgeLabels[v]=h),this;if(!e.isUndefined(f)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(c),this.setNode(d),this._edgeLabels[v]=m?h:this._defaultEdgeLabelFn(c,d,f);var g=l(this._isDirected,c,d,f);return c=g.v,d=g.w,Object.freeze(g),this._edgeObjs[v]=g,o(this._preds[d],c),o(this._sucs[c],d),this._in[d][v]=g,this._out[c][v]=g,this._edgeCount++,this},i.prototype.edge=function(c,d,f){var h=arguments.length===1?u(this._isDirected,arguments[0]):a(this._isDirected,c,d,f);return this._edgeLabels[h]},i.prototype.hasEdge=function(c,d,f){var h=arguments.length===1?u(this._isDirected,arguments[0]):a(this._isDirected,c,d,f);return e.has(this._edgeLabels,h)},i.prototype.removeEdge=function(c,d,f){var h=arguments.length===1?u(this._isDirected,arguments[0]):a(this._isDirected,c,d,f),m=this._edgeObjs[h];return m&&(c=m.v,d=m.w,delete this._edgeLabels[h],delete this._edgeObjs[h],s(this._preds[d],c),s(this._sucs[c],d),delete this._in[d][h],delete this._out[c][h],this._edgeCount--),this},i.prototype.inEdges=function(c,d){var f=this._in[c];if(f){var h=e.values(f);return d?e.filter(h,function(m){return m.v===d}):h}},i.prototype.outEdges=function(c,d){var f=this._out[c];if(f){var h=e.values(f);return d?e.filter(h,function(m){return m.w===d}):h}},i.prototype.nodeEdges=function(c,d){var f=this.inEdges(c,d);if(f)return f.concat(this.outEdges(c,d))};function o(c,d){c[d]?c[d]++:c[d]=1}function s(c,d){--c[d]||delete c[d]}function a(c,d,f,h){var m=""+d,p=""+f;if(!c&&m>p){var v=m;m=p,p=v}return m+r+p+r+(e.isUndefined(h)?t:h)}function l(c,d,f,h){var m=""+d,p=""+f;if(!c&&m>p){var v=m;m=p,p=v}var g={v:m,w:p};return h&&(g.name=h),g}function u(c,d){return a(c,d.v,d.w,d.name)}return Kf}var Wf,y1;function Oz(){return y1||(y1=1,Wf="2.1.8"),Wf}var Yf,b1;function Rz(){return b1||(b1=1,Yf={Graph:kg(),version:Oz()}),Yf}var Xf,w1;function Pz(){if(w1)return Xf;w1=1;var e=Wt(),t=kg();Xf={write:n,read:o};function n(s){var a={options:{directed:s.isDirected(),multigraph:s.isMultigraph(),compound:s.isCompound()},nodes:r(s),edges:i(s)};return e.isUndefined(s.graph())||(a.value=e.clone(s.graph())),a}function r(s){return e.map(s.nodes(),function(a){var l=s.node(a),u=s.parent(a),c={v:a};return e.isUndefined(l)||(c.value=l),e.isUndefined(u)||(c.parent=u),c})}function i(s){return e.map(s.edges(),function(a){var l=s.edge(a),u={v:a.v,w:a.w};return e.isUndefined(a.name)||(u.name=a.name),e.isUndefined(l)||(u.value=l),u})}function o(s){var a=new t(s.options).setGraph(s.value);return e.each(s.nodes,function(l){a.setNode(l.v,l.value),l.parent&&a.setParent(l.v,l.parent)}),e.each(s.edges,function(l){a.setEdge({v:l.v,w:l.w,name:l.name},l.value)}),a}return Xf}var Zf,x1;function Tz(){if(x1)return Zf;x1=1;var e=Wt();Zf=t;function t(n){var r={},i=[],o;function s(a){e.has(r,a)||(r[a]=!0,o.push(a),e.each(n.successors(a),s),e.each(n.predecessors(a),s))}return e.each(n.nodes(),function(a){o=[],s(a),o.length&&i.push(o)}),i}return Zf}var Jf,S1;function x$(){if(S1)return Jf;S1=1;var e=Wt();Jf=t;function t(){this._arr=[],this._keyIndices={}}return t.prototype.size=function(){return this._arr.length},t.prototype.keys=function(){return this._arr.map(function(n){return n.key})},t.prototype.has=function(n){return e.has(this._keyIndices,n)},t.prototype.priority=function(n){var r=this._keyIndices[n];if(r!==void 0)return this._arr[r].priority},t.prototype.min=function(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key},t.prototype.add=function(n,r){var i=this._keyIndices;if(n=String(n),!e.has(i,n)){var o=this._arr,s=o.length;return i[n]=s,o.push({key:n,priority:r}),this._decrease(s),!0}return!1},t.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var n=this._arr.pop();return delete this._keyIndices[n.key],this._heapify(0),n.key},t.prototype.decrease=function(n,r){var i=this._keyIndices[n];if(r>this._arr[i].priority)throw new Error("New priority is greater than current priority. Key: "+n+" Old: "+this._arr[i].priority+" New: "+r);this._arr[i].priority=r,this._decrease(i)},t.prototype._heapify=function(n){var r=this._arr,i=2*n,o=i+1,s=n;i<r.length&&(s=r[i].priority<r[s].priority?i:s,o<r.length&&(s=r[o].priority<r[s].priority?o:s),s!==n&&(this._swap(n,s),this._heapify(s)))},t.prototype._decrease=function(n){for(var r=this._arr,i=r[n].priority,o;n!==0&&(o=n>>1,!(r[o].priority<i));)this._swap(n,o),n=o},t.prototype._swap=function(n,r){var i=this._arr,o=this._keyIndices,s=i[n],a=i[r];i[n]=a,i[r]=s,o[a.key]=n,o[s.key]=r},Jf}var Qf,E1;function S$(){if(E1)return Qf;E1=1;var e=Wt(),t=x$();Qf=r;var n=e.constant(1);function r(o,s,a,l){return i(o,String(s),a||n,l||function(u){return o.outEdges(u)})}function i(o,s,a,l){var u={},c=new t,d,f,h=function(m){var p=m.v!==d?m.v:m.w,v=u[p],g=a(m),y=f.distance+g;if(g<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+m+" Weight: "+g);y<v.distance&&(v.distance=y,v.predecessor=d,c.decrease(p,y))};for(o.nodes().forEach(function(m){var p=m===s?0:Number.POSITIVE_INFINITY;u[m]={distance:p},c.add(m,p)});c.size()>0&&(d=c.removeMin(),f=u[d],f.distance!==Number.POSITIVE_INFINITY);)l(d).forEach(h);return u}return Qf}var eh,C1;function Nz(){if(C1)return eh;C1=1;var e=S$(),t=Wt();eh=n;function n(r,i,o){return t.transform(r.nodes(),function(s,a){s[a]=e(r,a,i,o)},{})}return eh}var th,$1;function E$(){if($1)return th;$1=1;var e=Wt();th=t;function t(n){var r=0,i=[],o={},s=[];function a(l){var u=o[l]={onStack:!0,lowlink:r,index:r++};if(i.push(l),n.successors(l).forEach(function(f){e.has(o,f)?o[f].onStack&&(u.lowlink=Math.min(u.lowlink,o[f].index)):(a(f),u.lowlink=Math.min(u.lowlink,o[f].lowlink))}),u.lowlink===u.index){var c=[],d;do d=i.pop(),o[d].onStack=!1,c.push(d);while(l!==d);s.push(c)}}return n.nodes().forEach(function(l){e.has(o,l)||a(l)}),s}return th}var nh,k1;function Mz(){if(k1)return nh;k1=1;var e=Wt(),t=E$();nh=n;function n(r){return e.filter(t(r),function(i){return i.length>1||i.length===1&&r.hasEdge(i[0],i[0])})}return nh}var rh,I1;function Dz(){if(I1)return rh;I1=1;var e=Wt();rh=n;var t=e.constant(1);function n(i,o,s){return r(i,o||t,s||function(a){return i.outEdges(a)})}function r(i,o,s){var a={},l=i.nodes();return l.forEach(function(u){a[u]={},a[u][u]={distance:0},l.forEach(function(c){u!==c&&(a[u][c]={distance:Number.POSITIVE_INFINITY})}),s(u).forEach(function(c){var d=c.v===u?c.w:c.v,f=o(c);a[u][d]={distance:f,predecessor:u}})}),l.forEach(function(u){var c=a[u];l.forEach(function(d){var f=a[d];l.forEach(function(h){var m=f[u],p=c[h],v=f[h],g=m.distance+p.distance;g<v.distance&&(v.distance=g,v.predecessor=p.predecessor)})})}),a}return rh}var ih,A1;function C$(){if(A1)return ih;A1=1;var e=Wt();ih=t,t.CycleException=n;function t(r){var i={},o={},s=[];function a(l){if(e.has(o,l))throw new n;e.has(i,l)||(o[l]=!0,i[l]=!0,e.each(r.predecessors(l),a),delete o[l],s.push(l))}if(e.each(r.sinks(),a),e.size(i)!==r.nodeCount())throw new n;return s}function n(){}return n.prototype=new Error,ih}var oh,O1;function qz(){if(O1)return oh;O1=1;var e=C$();oh=t;function t(n){try{e(n)}catch(r){if(r instanceof e.CycleException)return!1;throw r}return!0}return oh}var sh,R1;function $$(){if(R1)return sh;R1=1;var e=Wt();sh=t;function t(r,i,o){e.isArray(i)||(i=[i]);var s=(r.isDirected()?r.successors:r.neighbors).bind(r),a=[],l={};return e.each(i,function(u){if(!r.hasNode(u))throw new Error("Graph does not have node: "+u);n(r,u,o==="post",l,s,a)}),a}function n(r,i,o,s,a,l){e.has(s,i)||(s[i]=!0,o||l.push(i),e.each(a(i),function(u){n(r,u,o,s,a,l)}),o&&l.push(i))}return sh}var ah,P1;function Bz(){if(P1)return ah;P1=1;var e=$$();ah=t;function t(n,r){return e(n,r,"post")}return ah}var lh,T1;function Lz(){if(T1)return lh;T1=1;var e=$$();lh=t;function t(n,r){return e(n,r,"pre")}return lh}var uh,N1;function zz(){if(N1)return uh;N1=1;var e=Wt(),t=kg(),n=x$();uh=r;function r(i,o){var s=new t,a={},l=new n,u;function c(f){var h=f.v===u?f.w:f.v,m=l.priority(h);if(m!==void 0){var p=o(f);p<m&&(a[h]=u,l.decrease(h,p))}}if(i.nodeCount()===0)return s;e.each(i.nodes(),function(f){l.add(f,Number.POSITIVE_INFINITY),s.setNode(f)}),l.decrease(i.nodes()[0],0);for(var d=!1;l.size()>0;){if(u=l.removeMin(),e.has(a,u))s.setEdge(u,a[u]);else{if(d)throw new Error("Input graph is not connected: "+i);d=!0}i.nodeEdges(u).forEach(c)}return s}return uh}var ch,M1;function Vz(){return M1||(M1=1,ch={components:Tz(),dijkstra:S$(),dijkstraAll:Nz(),findCycles:Mz(),floydWarshall:Dz(),isAcyclic:qz(),postorder:Bz(),preorder:Lz(),prim:zz(),tarjan:E$(),topsort:C$()}),ch}var dh,D1;function Fz(){if(D1)return dh;D1=1;var e=Rz();return dh={Graph:e.Graph,json:Pz(),alg:Vz(),version:e.version},dh}var fh,q1;function cn(){if(q1)return fh;q1=1;var e;if(typeof dg=="function")try{e=Fz()}catch{}return e||(e=window.graphlib),fh=e,fh}var hh,B1;function Hz(){if(B1)return hh;B1=1;var e=ZC(),t=1,n=4;function r(i){return e(i,t|n)}return hh=r,hh}var ph,L1;function Ml(){if(L1)return ph;L1=1;var e=ji(),t=sr(),n=$l(),r=Kt();function i(o,s,a){if(!r(a))return!1;var l=typeof s;return(l=="number"?t(a)&&n(s,a.length):l=="string"&&s in a)?e(a[s],o):!1}return ph=i,ph}var vh,z1;function jz(){if(z1)return vh;z1=1;var e=Nl(),t=ji(),n=Ml(),r=oi(),i=Object.prototype,o=i.hasOwnProperty,s=e(function(a,l){a=Object(a);var u=-1,c=l.length,d=c>2?l[2]:void 0;for(d&&n(l[0],l[1],d)&&(c=1);++u<c;)for(var f=l[u],h=r(f),m=-1,p=h.length;++m<p;){var v=h[m],g=a[v];(g===void 0||t(g,i[v])&&!o.call(a,v))&&(a[v]=f[v])}return a});return vh=s,vh}var gh,V1;function Uz(){if(V1)return gh;V1=1;var e=ar(),t=sr(),n=kr();function r(i){return function(o,s,a){var l=Object(o);if(!t(o)){var u=e(s,3);o=n(o),s=function(d){return u(l[d],d,l)}}var c=i(o,s,a);return c>-1?l[u?o[c]:c]:void 0}}return gh=r,gh}var mh,F1;function Gz(){if(F1)return mh;F1=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return mh=t,mh}var _h,H1;function Kz(){if(H1)return _h;H1=1;var e=Gz(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return _h=n,_h}var yh,j1;function Wz(){if(j1)return yh;j1=1;var e=Kz(),t=Kt(),n=Wi(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;function l(u){if(typeof u=="number")return u;if(n(u))return r;if(t(u)){var c=typeof u.valueOf=="function"?u.valueOf():u;u=t(c)?c+"":c}if(typeof u!="string")return u===0?u:+u;u=e(u);var d=o.test(u);return d||s.test(u)?a(u.slice(2),d?2:8):i.test(u)?r:+u}return yh=l,yh}var bh,U1;function k$(){if(U1)return bh;U1=1;var e=Wz(),t=1/0,n=17976931348623157e292;function r(i){if(!i)return i===0?i:0;if(i=e(i),i===t||i===-t){var o=i<0?-1:1;return o*n}return i===i?i:0}return bh=r,bh}var wh,G1;function Yz(){if(G1)return wh;G1=1;var e=k$();function t(n){var r=e(n),i=r%1;return r===r?i?r-i:r:0}return wh=t,wh}var xh,K1;function Xz(){if(K1)return xh;K1=1;var e=y$(),t=ar(),n=Yz(),r=Math.max;function i(o,s,a){var l=o==null?0:o.length;if(!l)return-1;var u=a==null?0:n(a);return u<0&&(u=r(l+u,0)),e(o,t(s,3),u)}return xh=i,xh}var Sh,W1;function Zz(){if(W1)return Sh;W1=1;var e=Uz(),t=Xz(),n=e(t);return Sh=n,Sh}var Eh,Y1;function I$(){if(Y1)return Eh;Y1=1;var e=$g();function t(n){var r=n==null?0:n.length;return r?e(n,1):[]}return Eh=t,Eh}var Ch,X1;function Jz(){if(X1)return Ch;X1=1;var e=xg(),t=JC(),n=oi();function r(i,o){return i==null?i:e(i,t(o),n)}return Ch=r,Ch}var $h,Z1;function Qz(){if(Z1)return $h;Z1=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return $h=e,$h}var kh,J1;function eV(){if(J1)return kh;J1=1;var e=El(),t=Sg(),n=ar();function r(i,o){var s={};return o=n(o,3),t(i,function(a,l,u){e(s,l,o(a,l,u))}),s}return kh=r,kh}var Ih,Q1;function Ig(){if(Q1)return Ih;Q1=1;var e=Wi();function t(n,r,i){for(var o=-1,s=n.length;++o<s;){var a=n[o],l=r(a);if(l!=null&&(u===void 0?l===l&&!e(l):i(l,u)))var u=l,c=a}return c}return Ih=t,Ih}var Ah,ew;function tV(){if(ew)return Ah;ew=1;function e(t,n){return t>n}return Ah=e,Ah}var Oh,tw;function nV(){if(tw)return Oh;tw=1;var e=Ig(),t=tV(),n=si();function r(i){return i&&i.length?e(i,n,t):void 0}return Oh=r,Oh}var Rh,nw;function A$(){if(nw)return Rh;nw=1;var e=El(),t=ji();function n(r,i,o){(o!==void 0&&!t(r[i],o)||o===void 0&&!(i in r))&&e(r,i,o)}return Rh=n,Rh}var Ph,rw;function rV(){if(rw)return Ph;rw=1;var e=ri(),t=Al(),n=qn(),r="[object Object]",i=Function.prototype,o=Object.prototype,s=i.toString,a=o.hasOwnProperty,l=s.call(Object);function u(c){if(!n(c)||e(c)!=r)return!1;var d=t(c);if(d===null)return!0;var f=a.call(d,"constructor")&&d.constructor;return typeof f=="function"&&f instanceof f&&s.call(f)==l}return Ph=u,Ph}var Th,iw;function O$(){if(iw)return Th;iw=1;function e(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}return Th=e,Th}var Nh,ow;function iV(){if(ow)return Nh;ow=1;var e=ys(),t=oi();function n(r){return e(r,t(r))}return Nh=n,Nh}var Mh,sw;function oV(){if(sw)return Mh;sw=1;var e=A$(),t=LC(),n=WC(),r=zC(),i=XC(),o=bs(),s=st(),a=b$(),l=Gi(),u=_s(),c=Kt(),d=rV(),f=ws(),h=O$(),m=iV();function p(v,g,y,_,b,I,T){var P=h(v,y),q=h(g,y),j=T.get(q);if(j){e(v,y,j);return}var B=I?I(P,q,y+"",v,g,T):void 0,F=B===void 0;if(F){var R=s(q),J=!R&&l(q),w=!R&&!J&&f(q);B=q,R||J||w?s(P)?B=P:a(P)?B=r(P):J?(F=!1,B=t(q,!0)):w?(F=!1,B=n(q,!0)):B=[]:d(q)||o(q)?(B=P,o(P)?B=m(P):(!c(P)||u(P))&&(B=i(q))):F=!1}F&&(T.set(q,B),b(B,q,_,I,T),T.delete(q)),e(v,y,B)}return Mh=p,Mh}var Dh,aw;function sV(){if(aw)return Dh;aw=1;var e=Sl(),t=A$(),n=xg(),r=oV(),i=Kt(),o=oi(),s=O$();function a(l,u,c,d,f){l!==u&&n(u,function(h,m){if(f||(f=new e),i(h))r(l,u,m,c,a,d,f);else{var p=d?d(s(l,m),h,m+"",l,u,f):void 0;p===void 0&&(p=h),t(l,m,p)}},o)}return Dh=a,Dh}var qh,lw;function aV(){if(lw)return qh;lw=1;var e=Nl(),t=Ml();function n(r){return e(function(i,o){var s=-1,a=o.length,l=a>1?o[a-1]:void 0,u=a>2?o[2]:void 0;for(l=r.length>3&&typeof l=="function"?(a--,l):void 0,u&&t(o[0],o[1],u)&&(l=a<3?void 0:l,a=1),i=Object(i);++s<a;){var c=o[s];c&&r(i,c,s,l)}return i})}return qh=n,qh}var Bh,uw;function lV(){if(uw)return Bh;uw=1;var e=sV(),t=aV(),n=t(function(r,i,o){e(r,i,o)});return Bh=n,Bh}var Lh,cw;function R$(){if(cw)return Lh;cw=1;function e(t,n){return t<n}return Lh=e,Lh}var zh,dw;function uV(){if(dw)return zh;dw=1;var e=Ig(),t=R$(),n=si();function r(i){return i&&i.length?e(i,n,t):void 0}return zh=r,zh}var Vh,fw;function cV(){if(fw)return Vh;fw=1;var e=Ig(),t=ar(),n=R$();function r(i,o){return i&&i.length?e(i,t(o,2),n):void 0}return Vh=r,Vh}var Fh,hw;function dV(){if(hw)return Fh;hw=1;var e=mn(),t=function(){return e.Date.now()};return Fh=t,Fh}var Hh,pw;function fV(){if(pw)return Hh;pw=1;var e=Cl(),t=Pl(),n=$l(),r=Kt(),i=xs();function o(s,a,l,u){if(!r(s))return s;a=t(a,s);for(var c=-1,d=a.length,f=d-1,h=s;h!=null&&++c<d;){var m=i(a[c]),p=l;if(m==="__proto__"||m==="constructor"||m==="prototype")return s;if(c!=f){var v=h[m];p=u?u(v,m,h):void 0,p===void 0&&(p=r(v)?v:n(a[c+1])?[]:{})}e(h,m,p),h=h[m]}return s}return Hh=o,Hh}var jh,vw;function hV(){if(vw)return jh;vw=1;var e=Tl(),t=fV(),n=Pl();function r(i,o,s){for(var a=-1,l=o.length,u={};++a<l;){var c=o[a],d=e(i,c);s(d,c)&&t(u,n(c,i),d)}return u}return jh=r,jh}var Uh,gw;function pV(){if(gw)return Uh;gw=1;var e=hV(),t=u$();function n(r,i){return e(r,i,function(o,s){return t(r,s)})}return Uh=n,Uh}var Gh,mw;function vV(){if(mw)return Gh;mw=1;var e=I$(),t=m$(),n=_$();function r(i){return n(t(i,void 0,e),i+"")}return Gh=r,Gh}var Kh,_w;function gV(){if(_w)return Kh;_w=1;var e=pV(),t=vV(),n=t(function(r,i){return r==null?{}:e(r,i)});return Kh=n,Kh}var Wh,yw;function mV(){if(yw)return Wh;yw=1;var e=Math.ceil,t=Math.max;function n(r,i,o,s){for(var a=-1,l=t(e((i-r)/(o||1)),0),u=Array(l);l--;)u[s?l:++a]=r,r+=o;return u}return Wh=n,Wh}var Yh,bw;function _V(){if(bw)return Yh;bw=1;var e=mV(),t=Ml(),n=k$();function r(i){return function(o,s,a){return a&&typeof a!="number"&&t(o,s,a)&&(s=a=void 0),o=n(o),s===void 0?(s=o,o=0):s=n(s),a=a===void 0?o<s?1:-1:n(a),e(o,s,a,i)}}return Yh=r,Yh}var Xh,ww;function yV(){if(ww)return Xh;ww=1;var e=_V(),t=e();return Xh=t,Xh}var Zh,xw;function bV(){if(xw)return Zh;xw=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return Zh=e,Zh}var Jh,Sw;function wV(){if(Sw)return Jh;Sw=1;var e=Wi();function t(n,r){if(n!==r){var i=n!==void 0,o=n===null,s=n===n,a=e(n),l=r!==void 0,u=r===null,c=r===r,d=e(r);if(!u&&!d&&!a&&n>r||a&&l&&c&&!u&&!d||o&&l&&c||!i&&c||!s)return 1;if(!o&&!a&&!d&&n<r||d&&i&&s&&!o&&!a||u&&i&&s||!l&&s||!c)return-1}return 0}return Jh=t,Jh}var Qh,Ew;function xV(){if(Ew)return Qh;Ew=1;var e=wV();function t(n,r,i){for(var o=-1,s=n.criteria,a=r.criteria,l=s.length,u=i.length;++o<l;){var c=e(s[o],a[o]);if(c){if(o>=u)return c;var d=i[o];return c*(d=="desc"?-1:1)}}return n.index-r.index}return Qh=t,Qh}var ep,Cw;function SV(){if(Cw)return ep;Cw=1;var e=Rl(),t=Tl(),n=ar(),r=p$(),i=bV(),o=kl(),s=xV(),a=si(),l=st();function u(c,d,f){d.length?d=e(d,function(p){return l(p)?function(v){return t(v,p.length===1?p[0]:p)}:p}):d=[a];var h=-1;d=e(d,o(n));var m=r(c,function(p,v,g){var y=e(d,function(_){return _(p)});return{criteria:y,index:++h,value:p}});return i(m,function(p,v){return s(p,v,f)})}return ep=u,ep}var tp,$w;function EV(){if($w)return tp;$w=1;var e=$g(),t=SV(),n=Nl(),r=Ml(),i=n(function(o,s){if(o==null)return[];var a=s.length;return a>1&&r(o,s[0],s[1])?s=[]:a>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(o,e(s,1),[])});return tp=i,tp}var np,kw;function CV(){if(kw)return np;kw=1;var e=a$(),t=0;function n(r){var i=++t;return e(r)+i}return np=n,np}var rp,Iw;function $V(){if(Iw)return rp;Iw=1;function e(t,n,r){for(var i=-1,o=t.length,s=n.length,a={};++i<o;){var l=i<s?n[i]:void 0;r(a,t[i],l)}return a}return rp=e,rp}var ip,Aw;function kV(){if(Aw)return ip;Aw=1;var e=Cl(),t=$V();function n(r,i){return t(r||[],i||[],e)}return ip=n,ip}var op,Ow;function Ge(){if(Ow)return op;Ow=1;var e;if(typeof dg=="function")try{e={cloneDeep:Hz(),constant:wg(),defaults:jz(),each:e$(),filter:d$(),find:Zz(),flatten:I$(),forEach:QC(),forIn:Jz(),has:f$(),isUndefined:h$(),last:Qz(),map:v$(),mapValues:eV(),max:nV(),merge:lV(),min:uV(),minBy:cV(),now:dV(),pick:gV(),range:yV(),reduce:g$(),sortBy:EV(),uniqueId:CV(),values:w$(),zipObject:kV()}}catch{}return e||(e=window._),op=e,op}var sp,Rw;function IV(){if(Rw)return sp;Rw=1,sp=e;function e(){var r={};r._next=r._prev=r,this._sentinel=r}e.prototype.dequeue=function(){var r=this._sentinel,i=r._prev;if(i!==r)return t(i),i},e.prototype.enqueue=function(r){var i=this._sentinel;r._prev&&r._next&&t(r),r._next=i._next,i._next._prev=r,i._next=r,r._prev=i},e.prototype.toString=function(){for(var r=[],i=this._sentinel,o=i._prev;o!==i;)r.push(JSON.stringify(o,n)),o=o._prev;return"["+r.join(", ")+"]"};function t(r){r._prev._next=r._next,r._next._prev=r._prev,delete r._next,delete r._prev}function n(r,i){if(r!=="_next"&&r!=="_prev")return i}return sp}var ap,Pw;function AV(){if(Pw)return ap;Pw=1;var e=Ge(),t=cn().Graph,n=IV();ap=i;var r=e.constant(1);function i(u,c){if(u.nodeCount()<=1)return[];var d=a(u,c||r),f=o(d.graph,d.buckets,d.zeroIdx);return e.flatten(e.map(f,function(h){return u.outEdges(h.v,h.w)}),!0)}function o(u,c,d){for(var f=[],h=c[c.length-1],m=c[0],p;u.nodeCount();){for(;p=m.dequeue();)s(u,c,d,p);for(;p=h.dequeue();)s(u,c,d,p);if(u.nodeCount()){for(var v=c.length-2;v>0;--v)if(p=c[v].dequeue(),p){f=f.concat(s(u,c,d,p,!0));break}}}return f}function s(u,c,d,f,h){var m=h?[]:void 0;return e.forEach(u.inEdges(f.v),function(p){var v=u.edge(p),g=u.node(p.v);h&&m.push({v:p.v,w:p.w}),g.out-=v,l(c,d,g)}),e.forEach(u.outEdges(f.v),function(p){var v=u.edge(p),g=p.w,y=u.node(g);y.in-=v,l(c,d,y)}),u.removeNode(f.v),m}function a(u,c){var d=new t,f=0,h=0;e.forEach(u.nodes(),function(v){d.setNode(v,{v,in:0,out:0})}),e.forEach(u.edges(),function(v){var g=d.edge(v.v,v.w)||0,y=c(v),_=g+y;d.setEdge(v.v,v.w,_),h=Math.max(h,d.node(v.v).out+=y),f=Math.max(f,d.node(v.w).in+=y)});var m=e.range(h+f+3).map(function(){return new n}),p=f+1;return e.forEach(d.nodes(),function(v){l(m,p,d.node(v))}),{graph:d,buckets:m,zeroIdx:p}}function l(u,c,d){d.out?d.in?u[d.out-d.in+c].enqueue(d):u[u.length-1].enqueue(d):u[0].enqueue(d)}return ap}var lp,Tw;function OV(){if(Tw)return lp;Tw=1;var e=Ge(),t=AV();lp={run:n,undo:i};function n(o){var s=o.graph().acyclicer==="greedy"?t(o,a(o)):r(o);e.forEach(s,function(l){var u=o.edge(l);o.removeEdge(l),u.forwardName=l.name,u.reversed=!0,o.setEdge(l.w,l.v,u,e.uniqueId("rev"))});function a(l){return function(u){return l.edge(u).weight}}}function r(o){var s=[],a={},l={};function u(c){e.has(l,c)||(l[c]=!0,a[c]=!0,e.forEach(o.outEdges(c),function(d){e.has(a,d.w)?s.push(d):u(d.w)}),delete a[c])}return e.forEach(o.nodes(),u),s}function i(o){e.forEach(o.edges(),function(s){var a=o.edge(s);if(a.reversed){o.removeEdge(s);var l=a.forwardName;delete a.reversed,delete a.forwardName,o.setEdge(s.w,s.v,a,l)}})}return lp}var up,Nw;function Mt(){if(Nw)return up;Nw=1;var e=Ge(),t=cn().Graph;up={addDummyNode:n,simplify:r,asNonCompoundGraph:i,successorWeights:o,predecessorWeights:s,intersectRect:a,buildLayerMatrix:l,normalizeRanks:u,removeEmptyRanks:c,addBorderNode:d,maxRank:f,partition:h,time:m,notime:p};function n(v,g,y,_){var b;do b=e.uniqueId(_);while(v.hasNode(b));return y.dummy=g,v.setNode(b,y),b}function r(v){var g=new t().setGraph(v.graph());return e.forEach(v.nodes(),function(y){g.setNode(y,v.node(y))}),e.forEach(v.edges(),function(y){var _=g.edge(y.v,y.w)||{weight:0,minlen:1},b=v.edge(y);g.setEdge(y.v,y.w,{weight:_.weight+b.weight,minlen:Math.max(_.minlen,b.minlen)})}),g}function i(v){var g=new t({multigraph:v.isMultigraph()}).setGraph(v.graph());return e.forEach(v.nodes(),function(y){v.children(y).length||g.setNode(y,v.node(y))}),e.forEach(v.edges(),function(y){g.setEdge(y,v.edge(y))}),g}function o(v){var g=e.map(v.nodes(),function(y){var _={};return e.forEach(v.outEdges(y),function(b){_[b.w]=(_[b.w]||0)+v.edge(b).weight}),_});return e.zipObject(v.nodes(),g)}function s(v){var g=e.map(v.nodes(),function(y){var _={};return e.forEach(v.inEdges(y),function(b){_[b.v]=(_[b.v]||0)+v.edge(b).weight}),_});return e.zipObject(v.nodes(),g)}function a(v,g){var y=v.x,_=v.y,b=g.x-y,I=g.y-_,T=v.width/2,P=v.height/2;if(!b&&!I)throw new Error("Not possible to find intersection inside of the rectangle");var q,j;return Math.abs(I)*T>Math.abs(b)*P?(I<0&&(P=-P),q=P*b/I,j=P):(b<0&&(T=-T),q=T,j=T*I/b),{x:y+q,y:_+j}}function l(v){var g=e.map(e.range(f(v)+1),function(){return[]});return e.forEach(v.nodes(),function(y){var _=v.node(y),b=_.rank;e.isUndefined(b)||(g[b][_.order]=y)}),g}function u(v){var g=e.min(e.map(v.nodes(),function(y){return v.node(y).rank}));e.forEach(v.nodes(),function(y){var _=v.node(y);e.has(_,"rank")&&(_.rank-=g)})}function c(v){var g=e.min(e.map(v.nodes(),function(I){return v.node(I).rank})),y=[];e.forEach(v.nodes(),function(I){var T=v.node(I).rank-g;y[T]||(y[T]=[]),y[T].push(I)});var _=0,b=v.graph().nodeRankFactor;e.forEach(y,function(I,T){e.isUndefined(I)&&T%b!==0?--_:_&&e.forEach(I,function(P){v.node(P).rank+=_})})}function d(v,g,y,_){var b={width:0,height:0};return arguments.length>=4&&(b.rank=y,b.order=_),n(v,"border",b,g)}function f(v){return e.max(e.map(v.nodes(),function(g){var y=v.node(g).rank;if(!e.isUndefined(y))return y}))}function h(v,g){var y={lhs:[],rhs:[]};return e.forEach(v,function(_){g(_)?y.lhs.push(_):y.rhs.push(_)}),y}function m(v,g){var y=e.now();try{return g()}finally{console.log(v+" time: "+(e.now()-y)+"ms")}}function p(v,g){return g()}return up}var cp,Mw;function RV(){if(Mw)return cp;Mw=1;var e=Ge(),t=Mt();cp={run:n,undo:i};function n(o){o.graph().dummyChains=[],e.forEach(o.edges(),function(s){r(o,s)})}function r(o,s){var a=s.v,l=o.node(a).rank,u=s.w,c=o.node(u).rank,d=s.name,f=o.edge(s),h=f.labelRank;if(c!==l+1){o.removeEdge(s);var m,p,v;for(v=0,++l;l<c;++v,++l)f.points=[],p={width:0,height:0,edgeLabel:f,edgeObj:s,rank:l},m=t.addDummyNode(o,"edge",p,"_d"),l===h&&(p.width=f.width,p.height=f.height,p.dummy="edge-label",p.labelpos=f.labelpos),o.setEdge(a,m,{weight:f.weight},d),v===0&&o.graph().dummyChains.push(m),a=m;o.setEdge(a,u,{weight:f.weight},d)}}function i(o){e.forEach(o.graph().dummyChains,function(s){var a=o.node(s),l=a.edgeLabel,u;for(o.setEdge(a.edgeObj,l);a.dummy;)u=o.successors(s)[0],o.removeNode(s),l.points.push({x:a.x,y:a.y}),a.dummy==="edge-label"&&(l.x=a.x,l.y=a.y,l.width=a.width,l.height=a.height),s=u,a=o.node(s)})}return cp}var dp,Dw;function Ma(){if(Dw)return dp;Dw=1;var e=Ge();dp={longestPath:t,slack:n};function t(r){var i={};function o(s){var a=r.node(s);if(e.has(i,s))return a.rank;i[s]=!0;var l=e.min(e.map(r.outEdges(s),function(u){return o(u.w)-r.edge(u).minlen}));return(l===Number.POSITIVE_INFINITY||l===void 0||l===null)&&(l=0),a.rank=l}e.forEach(r.sources(),o)}function n(r,i){return r.node(i.w).rank-r.node(i.v).rank-r.edge(i).minlen}return dp}var fp,qw;function P$(){if(qw)return fp;qw=1;var e=Ge(),t=cn().Graph,n=Ma().slack;fp=r;function r(a){var l=new t({directed:!1}),u=a.nodes()[0],c=a.nodeCount();l.setNode(u,{});for(var d,f;i(l,a)<c;)d=o(l,a),f=l.hasNode(d.v)?n(a,d):-n(a,d),s(l,a,f);return l}function i(a,l){function u(c){e.forEach(l.nodeEdges(c),function(d){var f=d.v,h=c===f?d.w:f;!a.hasNode(h)&&!n(l,d)&&(a.setNode(h,{}),a.setEdge(c,h,{}),u(h))})}return e.forEach(a.nodes(),u),a.nodeCount()}function o(a,l){return e.minBy(l.edges(),function(u){if(a.hasNode(u.v)!==a.hasNode(u.w))return n(l,u)})}function s(a,l,u){e.forEach(a.nodes(),function(c){l.node(c).rank+=u})}return fp}var hp,Bw;function PV(){if(Bw)return hp;Bw=1;var e=Ge(),t=P$(),n=Ma().slack,r=Ma().longestPath,i=cn().alg.preorder,o=cn().alg.postorder,s=Mt().simplify;hp=a,a.initLowLimValues=d,a.initCutValues=l,a.calcCutValue=c,a.leaveEdge=h,a.enterEdge=m,a.exchangeEdges=p;function a(_){_=s(_),r(_);var b=t(_);d(b),l(b,_);for(var I,T;I=h(b);)T=m(b,_,I),p(b,_,I,T)}function l(_,b){var I=o(_,_.nodes());I=I.slice(0,I.length-1),e.forEach(I,function(T){u(_,b,T)})}function u(_,b,I){var T=_.node(I),P=T.parent;_.edge(I,P).cutvalue=c(_,b,I)}function c(_,b,I){var T=_.node(I),P=T.parent,q=!0,j=b.edge(I,P),B=0;return j||(q=!1,j=b.edge(P,I)),B=j.weight,e.forEach(b.nodeEdges(I),function(F){var R=F.v===I,J=R?F.w:F.v;if(J!==P){var w=R===q,M=b.edge(F).weight;if(B+=w?M:-M,g(_,I,J)){var C=_.edge(I,J).cutvalue;B+=w?-C:C}}}),B}function d(_,b){arguments.length<2&&(b=_.nodes()[0]),f(_,{},1,b)}function f(_,b,I,T,P){var q=I,j=_.node(T);return b[T]=!0,e.forEach(_.neighbors(T),function(B){e.has(b,B)||(I=f(_,b,I,B,T))}),j.low=q,j.lim=I++,P?j.parent=P:delete j.parent,I}function h(_){return e.find(_.edges(),function(b){return _.edge(b).cutvalue<0})}function m(_,b,I){var T=I.v,P=I.w;b.hasEdge(T,P)||(T=I.w,P=I.v);var q=_.node(T),j=_.node(P),B=q,F=!1;q.lim>j.lim&&(B=j,F=!0);var R=e.filter(b.edges(),function(J){return F===y(_,_.node(J.v),B)&&F!==y(_,_.node(J.w),B)});return e.minBy(R,function(J){return n(b,J)})}function p(_,b,I,T){var P=I.v,q=I.w;_.removeEdge(P,q),_.setEdge(T.v,T.w,{}),d(_),l(_,b),v(_,b)}function v(_,b){var I=e.find(_.nodes(),function(P){return!b.node(P).parent}),T=i(_,I);T=T.slice(1),e.forEach(T,function(P){var q=_.node(P).parent,j=b.edge(P,q),B=!1;j||(j=b.edge(q,P),B=!0),b.node(P).rank=b.node(q).rank+(B?j.minlen:-j.minlen)})}function g(_,b,I){return _.hasEdge(b,I)}function y(_,b,I){return I.low<=b.lim&&b.lim<=I.lim}return hp}var pp,Lw;function TV(){if(Lw)return pp;Lw=1;var e=Ma(),t=e.longestPath,n=P$(),r=PV();pp=i;function i(l){switch(l.graph().ranker){case"network-simplex":a(l);break;case"tight-tree":s(l);break;case"longest-path":o(l);break;default:a(l)}}var o=t;function s(l){t(l),n(l)}function a(l){r(l)}return pp}var vp,zw;function NV(){if(zw)return vp;zw=1;var e=Ge();vp=t;function t(i){var o=r(i);e.forEach(i.graph().dummyChains,function(s){for(var a=i.node(s),l=a.edgeObj,u=n(i,o,l.v,l.w),c=u.path,d=u.lca,f=0,h=c[f],m=!0;s!==l.w;){if(a=i.node(s),m){for(;(h=c[f])!==d&&i.node(h).maxRank<a.rank;)f++;h===d&&(m=!1)}if(!m){for(;f<c.length-1&&i.node(h=c[f+1]).minRank<=a.rank;)f++;h=c[f]}i.setParent(s,h),s=i.successors(s)[0]}})}function n(i,o,s,a){var l=[],u=[],c=Math.min(o[s].low,o[a].low),d=Math.max(o[s].lim,o[a].lim),f,h;f=s;do f=i.parent(f),l.push(f);while(f&&(o[f].low>c||d>o[f].lim));for(h=f,f=a;(f=i.parent(f))!==h;)u.push(f);return{path:l.concat(u.reverse()),lca:h}}function r(i){var o={},s=0;function a(l){var u=s;e.forEach(i.children(l),a),o[l]={low:u,lim:s++}}return e.forEach(i.children(),a),o}return vp}var gp,Vw;function MV(){if(Vw)return gp;Vw=1;var e=Ge(),t=Mt();gp={run:n,cleanup:s};function n(a){var l=t.addDummyNode(a,"root",{},"_root"),u=i(a),c=e.max(e.values(u))-1,d=2*c+1;a.graph().nestingRoot=l,e.forEach(a.edges(),function(h){a.edge(h).minlen*=d});var f=o(a)+1;e.forEach(a.children(),function(h){r(a,l,d,f,c,u,h)}),a.graph().nodeRankFactor=d}function r(a,l,u,c,d,f,h){var m=a.children(h);if(!m.length){h!==l&&a.setEdge(l,h,{weight:0,minlen:u});return}var p=t.addBorderNode(a,"_bt"),v=t.addBorderNode(a,"_bb"),g=a.node(h);a.setParent(p,h),g.borderTop=p,a.setParent(v,h),g.borderBottom=v,e.forEach(m,function(y){r(a,l,u,c,d,f,y);var _=a.node(y),b=_.borderTop?_.borderTop:y,I=_.borderBottom?_.borderBottom:y,T=_.borderTop?c:2*c,P=b!==I?1:d-f[h]+1;a.setEdge(p,b,{weight:T,minlen:P,nestingEdge:!0}),a.setEdge(I,v,{weight:T,minlen:P,nestingEdge:!0})}),a.parent(h)||a.setEdge(l,p,{weight:0,minlen:d+f[h]})}function i(a){var l={};function u(c,d){var f=a.children(c);f&&f.length&&e.forEach(f,function(h){u(h,d+1)}),l[c]=d}return e.forEach(a.children(),function(c){u(c,1)}),l}function o(a){return e.reduce(a.edges(),function(l,u){return l+a.edge(u).weight},0)}function s(a){var l=a.graph();a.removeNode(l.nestingRoot),delete l.nestingRoot,e.forEach(a.edges(),function(u){var c=a.edge(u);c.nestingEdge&&a.removeEdge(u)})}return gp}var mp,Fw;function DV(){if(Fw)return mp;Fw=1;var e=Ge(),t=Mt();mp=n;function n(i){function o(s){var a=i.children(s),l=i.node(s);if(a.length&&e.forEach(a,o),e.has(l,"minRank")){l.borderLeft=[],l.borderRight=[];for(var u=l.minRank,c=l.maxRank+1;u<c;++u)r(i,"borderLeft","_bl",s,l,u),r(i,"borderRight","_br",s,l,u)}}e.forEach(i.children(),o)}function r(i,o,s,a,l,u){var c={width:0,height:0,rank:u,borderType:o},d=l[o][u-1],f=t.addDummyNode(i,"border",c,s);l[o][u]=f,i.setParent(f,a),d&&i.setEdge(d,f,{weight:1})}return mp}var _p,Hw;function qV(){if(Hw)return _p;Hw=1;var e=Ge();_p={adjust:t,undo:n};function t(u){var c=u.graph().rankdir.toLowerCase();(c==="lr"||c==="rl")&&r(u)}function n(u){var c=u.graph().rankdir.toLowerCase();(c==="bt"||c==="rl")&&o(u),(c==="lr"||c==="rl")&&(a(u),r(u))}function r(u){e.forEach(u.nodes(),function(c){i(u.node(c))}),e.forEach(u.edges(),function(c){i(u.edge(c))})}function i(u){var c=u.width;u.width=u.height,u.height=c}function o(u){e.forEach(u.nodes(),function(c){s(u.node(c))}),e.forEach(u.edges(),function(c){var d=u.edge(c);e.forEach(d.points,s),e.has(d,"y")&&s(d)})}function s(u){u.y=-u.y}function a(u){e.forEach(u.nodes(),function(c){l(u.node(c))}),e.forEach(u.edges(),function(c){var d=u.edge(c);e.forEach(d.points,l),e.has(d,"x")&&l(d)})}function l(u){var c=u.x;u.x=u.y,u.y=c}return _p}var yp,jw;function BV(){if(jw)return yp;jw=1;var e=Ge();yp=t;function t(n){var r={},i=e.filter(n.nodes(),function(u){return!n.children(u).length}),o=e.max(e.map(i,function(u){return n.node(u).rank})),s=e.map(e.range(o+1),function(){return[]});function a(u){if(!e.has(r,u)){r[u]=!0;var c=n.node(u);s[c.rank].push(u),e.forEach(n.successors(u),a)}}var l=e.sortBy(i,function(u){return n.node(u).rank});return e.forEach(l,a),s}return yp}var bp,Uw;function LV(){if(Uw)return bp;Uw=1;var e=Ge();bp=t;function t(r,i){for(var o=0,s=1;s<i.length;++s)o+=n(r,i[s-1],i[s]);return o}function n(r,i,o){for(var s=e.zipObject(o,e.map(o,function(f,h){return h})),a=e.flatten(e.map(i,function(f){return e.sortBy(e.map(r.outEdges(f),function(h){return{pos:s[h.w],weight:r.edge(h).weight}}),"pos")}),!0),l=1;l<o.length;)l<<=1;var u=2*l-1;l-=1;var c=e.map(new Array(u),function(){return 0}),d=0;return e.forEach(a.forEach(function(f){var h=f.pos+l;c[h]+=f.weight;for(var m=0;h>0;)h%2&&(m+=c[h+1]),h=h-1>>1,c[h]+=f.weight;d+=f.weight*m})),d}return bp}var wp,Gw;function zV(){if(Gw)return wp;Gw=1;var e=Ge();wp=t;function t(n,r){return e.map(r,function(i){var o=n.inEdges(i);if(o.length){var s=e.reduce(o,function(a,l){var u=n.edge(l),c=n.node(l.v);return{sum:a.sum+u.weight*c.order,weight:a.weight+u.weight}},{sum:0,weight:0});return{v:i,barycenter:s.sum/s.weight,weight:s.weight}}else return{v:i}})}return wp}var xp,Kw;function VV(){if(Kw)return xp;Kw=1;var e=Ge();xp=t;function t(i,o){var s={};e.forEach(i,function(l,u){var c=s[l.v]={indegree:0,in:[],out:[],vs:[l.v],i:u};e.isUndefined(l.barycenter)||(c.barycenter=l.barycenter,c.weight=l.weight)}),e.forEach(o.edges(),function(l){var u=s[l.v],c=s[l.w];!e.isUndefined(u)&&!e.isUndefined(c)&&(c.indegree++,u.out.push(s[l.w]))});var a=e.filter(s,function(l){return!l.indegree});return n(a)}function n(i){var o=[];function s(u){return function(c){c.merged||(e.isUndefined(c.barycenter)||e.isUndefined(u.barycenter)||c.barycenter>=u.barycenter)&&r(u,c)}}function a(u){return function(c){c.in.push(u),--c.indegree===0&&i.push(c)}}for(;i.length;){var l=i.pop();o.push(l),e.forEach(l.in.reverse(),s(l)),e.forEach(l.out,a(l))}return e.map(e.filter(o,function(u){return!u.merged}),function(u){return e.pick(u,["vs","i","barycenter","weight"])})}function r(i,o){var s=0,a=0;i.weight&&(s+=i.barycenter*i.weight,a+=i.weight),o.weight&&(s+=o.barycenter*o.weight,a+=o.weight),i.vs=o.vs.concat(i.vs),i.barycenter=s/a,i.weight=a,i.i=Math.min(o.i,i.i),o.merged=!0}return xp}var Sp,Ww;function FV(){if(Ww)return Sp;Ww=1;var e=Ge(),t=Mt();Sp=n;function n(o,s){var a=t.partition(o,function(p){return e.has(p,"barycenter")}),l=a.lhs,u=e.sortBy(a.rhs,function(p){return-p.i}),c=[],d=0,f=0,h=0;l.sort(i(!!s)),h=r(c,u,h),e.forEach(l,function(p){h+=p.vs.length,c.push(p.vs),d+=p.barycenter*p.weight,f+=p.weight,h=r(c,u,h)});var m={vs:e.flatten(c,!0)};return f&&(m.barycenter=d/f,m.weight=f),m}function r(o,s,a){for(var l;s.length&&(l=e.last(s)).i<=a;)s.pop(),o.push(l.vs),a++;return a}function i(o){return function(s,a){return s.barycenter<a.barycenter?-1:s.barycenter>a.barycenter?1:o?a.i-s.i:s.i-a.i}}return Sp}var Ep,Yw;function HV(){if(Yw)return Ep;Yw=1;var e=Ge(),t=zV(),n=VV(),r=FV();Ep=i;function i(a,l,u,c){var d=a.children(l),f=a.node(l),h=f?f.borderLeft:void 0,m=f?f.borderRight:void 0,p={};h&&(d=e.filter(d,function(I){return I!==h&&I!==m}));var v=t(a,d);e.forEach(v,function(I){if(a.children(I.v).length){var T=i(a,I.v,u,c);p[I.v]=T,e.has(T,"barycenter")&&s(I,T)}});var g=n(v,u);o(g,p);var y=r(g,c);if(h&&(y.vs=e.flatten([h,y.vs,m],!0),a.predecessors(h).length)){var _=a.node(a.predecessors(h)[0]),b=a.node(a.predecessors(m)[0]);e.has(y,"barycenter")||(y.barycenter=0,y.weight=0),y.barycenter=(y.barycenter*y.weight+_.order+b.order)/(y.weight+2),y.weight+=2}return y}function o(a,l){e.forEach(a,function(u){u.vs=e.flatten(u.vs.map(function(c){return l[c]?l[c].vs:c}),!0)})}function s(a,l){e.isUndefined(a.barycenter)?(a.barycenter=l.barycenter,a.weight=l.weight):(a.barycenter=(a.barycenter*a.weight+l.barycenter*l.weight)/(a.weight+l.weight),a.weight+=l.weight)}return Ep}var Cp,Xw;function jV(){if(Xw)return Cp;Xw=1;var e=Ge(),t=cn().Graph;Cp=n;function n(i,o,s){var a=r(i),l=new t({compound:!0}).setGraph({root:a}).setDefaultNodeLabel(function(u){return i.node(u)});return e.forEach(i.nodes(),function(u){var c=i.node(u),d=i.parent(u);(c.rank===o||c.minRank<=o&&o<=c.maxRank)&&(l.setNode(u),l.setParent(u,d||a),e.forEach(i[s](u),function(f){var h=f.v===u?f.w:f.v,m=l.edge(h,u),p=e.isUndefined(m)?0:m.weight;l.setEdge(h,u,{weight:i.edge(f).weight+p})}),e.has(c,"minRank")&&l.setNode(u,{borderLeft:c.borderLeft[o],borderRight:c.borderRight[o]}))}),l}function r(i){for(var o;i.hasNode(o=e.uniqueId("_root")););return o}return Cp}var $p,Zw;function UV(){if(Zw)return $p;Zw=1;var e=Ge();$p=t;function t(n,r,i){var o={},s;e.forEach(i,function(a){for(var l=n.parent(a),u,c;l;){if(u=n.parent(l),u?(c=o[u],o[u]=l):(c=s,s=l),c&&c!==l){r.setEdge(c,l);return}l=u}})}return $p}var kp,Jw;function GV(){if(Jw)return kp;Jw=1;var e=Ge(),t=BV(),n=LV(),r=HV(),i=jV(),o=UV(),s=cn().Graph,a=Mt();kp=l;function l(f){var h=a.maxRank(f),m=u(f,e.range(1,h+1),"inEdges"),p=u(f,e.range(h-1,-1,-1),"outEdges"),v=t(f);d(f,v);for(var g=Number.POSITIVE_INFINITY,y,_=0,b=0;b<4;++_,++b){c(_%2?m:p,_%4>=2),v=a.buildLayerMatrix(f);var I=n(f,v);I<g&&(b=0,y=e.cloneDeep(v),g=I)}d(f,y)}function u(f,h,m){return e.map(h,function(p){return i(f,p,m)})}function c(f,h){var m=new s;e.forEach(f,function(p){var v=p.graph().root,g=r(p,v,m,h);e.forEach(g.vs,function(y,_){p.node(y).order=_}),o(p,m,g.vs)})}function d(f,h){e.forEach(h,function(m){e.forEach(m,function(p,v){f.node(p).order=v})})}return kp}var Ip,Qw;function KV(){if(Qw)return Ip;Qw=1;var e=Ge(),t=cn().Graph,n=Mt();Ip={positionX:m,findType1Conflicts:r,findType2Conflicts:i,addConflict:s,hasConflict:a,verticalAlignment:l,horizontalCompaction:u,alignCoordinates:f,findSmallestWidthAlignment:d,balance:h};function r(g,y){var _={};function b(I,T){var P=0,q=0,j=I.length,B=e.last(T);return e.forEach(T,function(F,R){var J=o(g,F),w=J?g.node(J).order:j;(J||F===B)&&(e.forEach(T.slice(q,R+1),function(M){e.forEach(g.predecessors(M),function(C){var L=g.node(C),N=L.order;(N<P||w<N)&&!(L.dummy&&g.node(M).dummy)&&s(_,C,M)})}),q=R+1,P=w)}),T}return e.reduce(y,b),_}function i(g,y){var _={};function b(T,P,q,j,B){var F;e.forEach(e.range(P,q),function(R){F=T[R],g.node(F).dummy&&e.forEach(g.predecessors(F),function(J){var w=g.node(J);w.dummy&&(w.order<j||w.order>B)&&s(_,J,F)})})}function I(T,P){var q=-1,j,B=0;return e.forEach(P,function(F,R){if(g.node(F).dummy==="border"){var J=g.predecessors(F);J.length&&(j=g.node(J[0]).order,b(P,B,R,q,j),B=R,q=j)}b(P,B,P.length,j,T.length)}),P}return e.reduce(y,I),_}function o(g,y){if(g.node(y).dummy)return e.find(g.predecessors(y),function(_){return g.node(_).dummy})}function s(g,y,_){if(y>_){var b=y;y=_,_=b}var I=g[y];I||(g[y]=I={}),I[_]=!0}function a(g,y,_){if(y>_){var b=y;y=_,_=b}return e.has(g[y],_)}function l(g,y,_,b){var I={},T={},P={};return e.forEach(y,function(q){e.forEach(q,function(j,B){I[j]=j,T[j]=j,P[j]=B})}),e.forEach(y,function(q){var j=-1;e.forEach(q,function(B){var F=b(B);if(F.length){F=e.sortBy(F,function(C){return P[C]});for(var R=(F.length-1)/2,J=Math.floor(R),w=Math.ceil(R);J<=w;++J){var M=F[J];T[B]===B&&j<P[M]&&!a(_,B,M)&&(T[M]=B,T[B]=I[B]=I[M],j=P[M])}}})}),{root:I,align:T}}function u(g,y,_,b,I){var T={},P=c(g,y,_,I),q=I?"borderLeft":"borderRight";function j(R,J){for(var w=P.nodes(),M=w.pop(),C={};M;)C[M]?R(M):(C[M]=!0,w.push(M),w=w.concat(J(M))),M=w.pop()}function B(R){T[R]=P.inEdges(R).reduce(function(J,w){return Math.max(J,T[w.v]+P.edge(w))},0)}function F(R){var J=P.outEdges(R).reduce(function(M,C){return Math.min(M,T[C.w]-P.edge(C))},Number.POSITIVE_INFINITY),w=g.node(R);J!==Number.POSITIVE_INFINITY&&w.borderType!==q&&(T[R]=Math.max(T[R],J))}return j(B,P.predecessors.bind(P)),j(F,P.successors.bind(P)),e.forEach(b,function(R){T[R]=T[_[R]]}),T}function c(g,y,_,b){var I=new t,T=g.graph(),P=p(T.nodesep,T.edgesep,b);return e.forEach(y,function(q){var j;e.forEach(q,function(B){var F=_[B];if(I.setNode(F),j){var R=_[j],J=I.edge(R,F);I.setEdge(R,F,Math.max(P(g,B,j),J||0))}j=B})}),I}function d(g,y){return e.minBy(e.values(y),function(_){var b=Number.NEGATIVE_INFINITY,I=Number.POSITIVE_INFINITY;return e.forIn(_,function(T,P){var q=v(g,P)/2;b=Math.max(T+q,b),I=Math.min(T-q,I)}),b-I})}function f(g,y){var _=e.values(y),b=e.min(_),I=e.max(_);e.forEach(["u","d"],function(T){e.forEach(["l","r"],function(P){var q=T+P,j=g[q],B;if(j!==y){var F=e.values(j);B=P==="l"?b-e.min(F):I-e.max(F),B&&(g[q]=e.mapValues(j,function(R){return R+B}))}})})}function h(g,y){return e.mapValues(g.ul,function(_,b){if(y)return g[y.toLowerCase()][b];var I=e.sortBy(e.map(g,b));return(I[1]+I[2])/2})}function m(g){var y=n.buildLayerMatrix(g),_=e.merge(r(g,y),i(g,y)),b={},I;e.forEach(["u","d"],function(P){I=P==="u"?y:e.values(y).reverse(),e.forEach(["l","r"],function(q){q==="r"&&(I=e.map(I,function(R){return e.values(R).reverse()}));var j=(P==="u"?g.predecessors:g.successors).bind(g),B=l(g,I,_,j),F=u(g,I,B.root,B.align,q==="r");q==="r"&&(F=e.mapValues(F,function(R){return-R})),b[P+q]=F})});var T=d(g,b);return f(b,T),h(b,g.graph().align)}function p(g,y,_){return function(b,I,T){var P=b.node(I),q=b.node(T),j=0,B;if(j+=P.width/2,e.has(P,"labelpos"))switch(P.labelpos.toLowerCase()){case"l":B=-P.width/2;break;case"r":B=P.width/2;break}if(B&&(j+=_?B:-B),B=0,j+=(P.dummy?y:g)/2,j+=(q.dummy?y:g)/2,j+=q.width/2,e.has(q,"labelpos"))switch(q.labelpos.toLowerCase()){case"l":B=q.width/2;break;case"r":B=-q.width/2;break}return B&&(j+=_?B:-B),B=0,j}}function v(g,y){return g.node(y).width}return Ip}var Ap,ex;function WV(){if(ex)return Ap;ex=1;var e=Ge(),t=Mt(),n=KV().positionX;Ap=r;function r(o){o=t.asNonCompoundGraph(o),i(o),e.forEach(n(o),function(s,a){o.node(a).x=s})}function i(o){var s=t.buildLayerMatrix(o),a=o.graph().ranksep,l=0;e.forEach(s,function(u){var c=e.max(e.map(u,function(d){return o.node(d).height}));e.forEach(u,function(d){o.node(d).y=l+c/2}),l+=c+a})}return Ap}var Op,tx;function YV(){if(tx)return Op;tx=1;var e=Ge(),t=OV(),n=RV(),r=TV(),i=Mt().normalizeRanks,o=NV(),s=Mt().removeEmptyRanks,a=MV(),l=DV(),u=qV(),c=GV(),d=WV(),f=Mt(),h=cn().Graph;Op=m;function m(z,V){var H=V&&V.debugTiming?f.time:f.notime;H("layout",function(){var X=H("  buildLayoutGraph",function(){return j(z)});H("  runLayout",function(){p(X,H)}),H("  updateInputGraph",function(){v(z,X)})})}function p(z,V){V("    makeSpaceForEdgeLabels",function(){B(z)}),V("    removeSelfEdges",function(){W(z)}),V("    acyclic",function(){t.run(z)}),V("    nestingGraph.run",function(){a.run(z)}),V("    rank",function(){r(f.asNonCompoundGraph(z))}),V("    injectEdgeLabelProxies",function(){F(z)}),V("    removeEmptyRanks",function(){s(z)}),V("    nestingGraph.cleanup",function(){a.cleanup(z)}),V("    normalizeRanks",function(){i(z)}),V("    assignRankMinMax",function(){R(z)}),V("    removeEdgeLabelProxies",function(){J(z)}),V("    normalize.run",function(){n.run(z)}),V("    parentDummyChains",function(){o(z)}),V("    addBorderSegments",function(){l(z)}),V("    order",function(){c(z)}),V("    insertSelfEdges",function(){U(z)}),V("    adjustCoordinateSystem",function(){u.adjust(z)}),V("    position",function(){d(z)}),V("    positionSelfEdges",function(){Q(z)}),V("    removeBorderNodes",function(){N(z)}),V("    normalize.undo",function(){n.undo(z)}),V("    fixupEdgeLabelCoords",function(){C(z)}),V("    undoCoordinateSystem",function(){u.undo(z)}),V("    translateGraph",function(){w(z)}),V("    assignNodeIntersects",function(){M(z)}),V("    reversePoints",function(){L(z)}),V("    acyclic.undo",function(){t.undo(z)})}function v(z,V){e.forEach(z.nodes(),function(H){var X=z.node(H),ie=V.node(H);X&&(X.x=ie.x,X.y=ie.y,V.children(H).length&&(X.width=ie.width,X.height=ie.height))}),e.forEach(z.edges(),function(H){var X=z.edge(H),ie=V.edge(H);X.points=ie.points,e.has(ie,"x")&&(X.x=ie.x,X.y=ie.y)}),z.graph().width=V.graph().width,z.graph().height=V.graph().height}var g=["nodesep","edgesep","ranksep","marginx","marginy"],y={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},_=["acyclicer","ranker","rankdir","align"],b=["width","height"],I={width:0,height:0},T=["minlen","weight","width","height","labeloffset"],P={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},q=["labelpos"];function j(z){var V=new h({multigraph:!0,compound:!0}),H=se(z.graph());return V.setGraph(e.merge({},y,te(H,g),e.pick(H,_))),e.forEach(z.nodes(),function(X){var ie=se(z.node(X));V.setNode(X,e.defaults(te(ie,b),I)),V.setParent(X,z.parent(X))}),e.forEach(z.edges(),function(X){var ie=se(z.edge(X));V.setEdge(X,e.merge({},P,te(ie,T),e.pick(ie,q)))}),V}function B(z){var V=z.graph();V.ranksep/=2,e.forEach(z.edges(),function(H){var X=z.edge(H);X.minlen*=2,X.labelpos.toLowerCase()!=="c"&&(V.rankdir==="TB"||V.rankdir==="BT"?X.width+=X.labeloffset:X.height+=X.labeloffset)})}function F(z){e.forEach(z.edges(),function(V){var H=z.edge(V);if(H.width&&H.height){var X=z.node(V.v),ie=z.node(V.w),ce={rank:(ie.rank-X.rank)/2+X.rank,e:V};f.addDummyNode(z,"edge-proxy",ce,"_ep")}})}function R(z){var V=0;e.forEach(z.nodes(),function(H){var X=z.node(H);X.borderTop&&(X.minRank=z.node(X.borderTop).rank,X.maxRank=z.node(X.borderBottom).rank,V=e.max(V,X.maxRank))}),z.graph().maxRank=V}function J(z){e.forEach(z.nodes(),function(V){var H=z.node(V);H.dummy==="edge-proxy"&&(z.edge(H.e).labelRank=H.rank,z.removeNode(V))})}function w(z){var V=Number.POSITIVE_INFINITY,H=0,X=Number.POSITIVE_INFINITY,ie=0,ce=z.graph(),le=ce.marginx||0,ve=ce.marginy||0;function k(A){var S=A.x,x=A.y,E=A.width,$=A.height;V=Math.min(V,S-E/2),H=Math.max(H,S+E/2),X=Math.min(X,x-$/2),ie=Math.max(ie,x+$/2)}e.forEach(z.nodes(),function(A){k(z.node(A))}),e.forEach(z.edges(),function(A){var S=z.edge(A);e.has(S,"x")&&k(S)}),V-=le,X-=ve,e.forEach(z.nodes(),function(A){var S=z.node(A);S.x-=V,S.y-=X}),e.forEach(z.edges(),function(A){var S=z.edge(A);e.forEach(S.points,function(x){x.x-=V,x.y-=X}),e.has(S,"x")&&(S.x-=V),e.has(S,"y")&&(S.y-=X)}),ce.width=H-V+le,ce.height=ie-X+ve}function M(z){e.forEach(z.edges(),function(V){var H=z.edge(V),X=z.node(V.v),ie=z.node(V.w),ce,le;H.points?(ce=H.points[0],le=H.points[H.points.length-1]):(H.points=[],ce=ie,le=X),H.points.unshift(f.intersectRect(X,ce)),H.points.push(f.intersectRect(ie,le))})}function C(z){e.forEach(z.edges(),function(V){var H=z.edge(V);if(e.has(H,"x"))switch((H.labelpos==="l"||H.labelpos==="r")&&(H.width-=H.labeloffset),H.labelpos){case"l":H.x-=H.width/2+H.labeloffset;break;case"r":H.x+=H.width/2+H.labeloffset;break}})}function L(z){e.forEach(z.edges(),function(V){var H=z.edge(V);H.reversed&&H.points.reverse()})}function N(z){e.forEach(z.nodes(),function(V){if(z.children(V).length){var H=z.node(V),X=z.node(H.borderTop),ie=z.node(H.borderBottom),ce=z.node(e.last(H.borderLeft)),le=z.node(e.last(H.borderRight));H.width=Math.abs(le.x-ce.x),H.height=Math.abs(ie.y-X.y),H.x=ce.x+H.width/2,H.y=X.y+H.height/2}}),e.forEach(z.nodes(),function(V){z.node(V).dummy==="border"&&z.removeNode(V)})}function W(z){e.forEach(z.edges(),function(V){if(V.v===V.w){var H=z.node(V.v);H.selfEdges||(H.selfEdges=[]),H.selfEdges.push({e:V,label:z.edge(V)}),z.removeEdge(V)}})}function U(z){var V=f.buildLayerMatrix(z);e.forEach(V,function(H){var X=0;e.forEach(H,function(ie,ce){var le=z.node(ie);le.order=ce+X,e.forEach(le.selfEdges,function(ve){f.addDummyNode(z,"selfedge",{width:ve.label.width,height:ve.label.height,rank:le.rank,order:ce+ ++X,e:ve.e,label:ve.label},"_se")}),delete le.selfEdges})})}function Q(z){e.forEach(z.nodes(),function(V){var H=z.node(V);if(H.dummy==="selfedge"){var X=z.node(H.e.v),ie=X.x+X.width/2,ce=X.y,le=H.x-ie,ve=X.height/2;z.setEdge(H.e,H.label),z.removeNode(V),H.label.points=[{x:ie+2*le/3,y:ce-ve},{x:ie+5*le/6,y:ce-ve},{x:ie+le,y:ce},{x:ie+5*le/6,y:ce+ve},{x:ie+2*le/3,y:ce+ve}],H.label.x=H.x,H.label.y=H.y}})}function te(z,V){return e.mapValues(e.pick(z,V),Number)}function se(z){var V={};return e.forEach(z,function(H,X){V[X.toLowerCase()]=H}),V}return Op}var Rp,nx;function XV(){if(nx)return Rp;nx=1;var e=Ge(),t=Mt(),n=cn().Graph;Rp={debugOrdering:r};function r(i){var o=t.buildLayerMatrix(i),s=new n({compound:!0,multigraph:!0}).setGraph({});return e.forEach(i.nodes(),function(a){s.setNode(a,{label:a}),s.setParent(a,"layer"+i.node(a).rank)}),e.forEach(i.edges(),function(a){s.setEdge(a.v,a.w,{},a.name)}),e.forEach(o,function(a,l){var u="layer"+l;s.setNode(u,{rank:"same"}),e.reduce(a,function(c,d){return s.setEdge(c,d,{style:"invis"}),d})}),s}return Rp}var Pp,rx;function ZV(){return rx||(rx=1,Pp="0.8.5"),Pp}var Tp,ix;function JV(){return ix||(ix=1,Tp={graphlib:cn(),layout:YV(),debug:XV(),util:{time:Mt().time,notime:Mt().notime},version:ZV()}),Tp}var QV=JV();const ox=qB(QV),eF={class:"flow-container"},tF={class:"toolbar"},nF={style:{margin:"0","font-size":"14px","font-weight":"500"}},rF=ze({__name:"App",setup(e){const t=window.acquireVsCodeApi?window.acquireVsCodeApi():null,n=Te([]),r=Te([]),{fitView:i}=He(),o=(d,f)=>{const h=new ox.graphlib.Graph;h.setGraph({rankdir:"TB",nodesep:50,ranksep:50}),h.setDefaultEdgeLabel(()=>({})),d.forEach(v=>{h.setNode(v.id,{width:150,height:50})}),f.forEach(v=>{h.setEdge(v.source,v.target)}),ox.layout(h);const m=d.map(v=>{const g=h.node(v.id);let y="node-standard";return v.data?.status==="added"?y="node-added":v.data?.status==="removed"?y="node-removed":v.data?.status==="modified"?y="node-modified":v.data?.status==="unchanged"&&(y="node-unchanged"),{...v,class:y,position:{x:g.x-75,y:g.y-25}}}),p=f.map(v=>{let g="var(--vscode-editor-foreground)",y=1;return v.data?.status==="added"?g="var(--vscode-testing-iconPassed)":v.data?.status==="removed"&&(g="var(--vscode-testing-iconFailed)",y=.5),{...v,style:{...v.style,stroke:v.data?.stroke||g,opacity:y}}});n.value=m,r.value=p,setTimeout(()=>{i()},100)},s=Te([]),a=Te([]);pn(()=>{window.addEventListener("message",d=>{const f=d.data;switch(f.type){case"loadFlow":const h=f.data;h&&h.nodes&&h.edges&&(s.value=h.nodes,a.value=h.edges,l.value=!1,o(h.nodes,h.edges));break;case"loadDiff":const m=f.data;m&&m.nodes&&m.edges&&(l.value=!0,o(m.nodes,m.edges));break}}),t&&t.postMessage({type:"webviewReady"})});const l=Te(!1),u=()=>{t&&t.postMessage({type:"selectFileToCompare"})},c=()=>{l.value=!1,s.value.length>0&&o(s.value,a.value)};return(d,f)=>(fe(),be("div",eF,[vt("div",tF,[vt("h2",nF," Flow Lens "+Ii(l.value?"- Diff Mode":""),1),l.value?(fe(),be("vscode-button",{key:1,appearance:"secondary",onClick:c}," Exit Diff ")):(fe(),be("vscode-button",{key:0,onClick:u}," Compare With... "))]),Me(ue(x3),{nodes:n.value,edges:r.value,"min-zoom":.2,"max-zoom":4,"fit-view-on-init":"",class:"vue-flow-wrapper"},{default:Jt(()=>[Me(ue(oB)),Me(ue(DB))]),_:1},8,["nodes","edges"])]))}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const la=globalThis,Ag=la.ShadowRoot&&(la.ShadyCSS===void 0||la.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Og=Symbol(),sx=new WeakMap;let T$=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Og)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ag&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=sx.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&sx.set(n,t))}return t}toString(){return this.cssText}};const Dl=e=>new T$(typeof e=="string"?e:e+"",void 0,Og),Ce=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new T$(n,e,Og)},iF=(e,t)=>{if(Ag)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=la.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},ax=Ag?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Dl(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oF,defineProperty:sF,getOwnPropertyDescriptor:aF,getOwnPropertyNames:lF,getOwnPropertySymbols:uF,getPrototypeOf:cF}=Object,ql=globalThis,lx=ql.trustedTypes,dF=lx?lx.emptyScript:"",fF=ql.reactiveElementPolyfillSupport,To=(e,t)=>e,Da={toAttribute(e,t){switch(t){case Boolean:e=e?dF:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Rg=(e,t)=>!oF(e,t),ux={attribute:!0,type:String,converter:Da,reflect:!1,useDefault:!1,hasChanged:Rg};Symbol.metadata??=Symbol("metadata"),ql.litPropertyMetadata??=new WeakMap;let mi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ux){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&sF(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=aF(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ux}static _$Ei(){if(this.hasOwnProperty(To("elementProperties")))return;const t=cF(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(To("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(To("properties"))){const n=this.properties,r=[...lF(n),...uF(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(ax(i))}else t!==void 0&&n.push(ax(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return iF(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:Da).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Da;this._$Em=i;const a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??Rg)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};mi.elementStyles=[],mi.shadowRootOptions={mode:"open"},mi[To("elementProperties")]=new Map,mi[To("finalized")]=new Map,fF?.({ReactiveElement:mi}),(ql.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pg=globalThis,cx=e=>e,qa=Pg.trustedTypes,dx=qa?qa.createPolicy("lit-html",{createHTML:e=>e}):void 0,N$="$lit$",mr=`lit$${Math.random().toFixed(9).slice(2)}$`,M$="?"+mr,hF=`<${M$}>`,ei=document,is=()=>ei.createComment(""),os=e=>e===null||typeof e!="object"&&typeof e!="function",Tg=Array.isArray,pF=e=>Tg(e)||typeof e?.[Symbol.iterator]=="function",Np=`[ 	
\f\r]`,lo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fx=/-->/g,hx=/>/g,Rr=RegExp(`>|${Np}(?:([^\\s"'>=/]+)(${Np}*=${Np}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),px=/'/g,vx=/"/g,D$=/^(?:script|style|textarea|title)$/i,q$=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ne=q$(1),vF=q$(2),Tn=Symbol.for("lit-noChange"),pe=Symbol.for("lit-nothing"),gx=new WeakMap,Vr=ei.createTreeWalker(ei,129);function B$(e,t){if(!Tg(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dx!==void 0?dx.createHTML(t):t}const gF=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=lo;for(let a=0;a<n;a++){const l=e[a];let u,c,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,c=s.exec(l),c!==null);)f=s.lastIndex,s===lo?c[1]==="!--"?s=fx:c[1]!==void 0?s=hx:c[2]!==void 0?(D$.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Rr):c[3]!==void 0&&(s=Rr):s===Rr?c[0]===">"?(s=i??lo,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?Rr:c[3]==='"'?vx:px):s===vx||s===px?s=Rr:s===fx||s===hx?s=lo:(s=Rr,i=void 0);const h=s===Rr&&e[a+1].startsWith("/>")?" ":"";o+=s===lo?l+hF:d>=0?(r.push(u),l.slice(0,d)+N$+l.slice(d)+mr+h):l+mr+(d===-2?a:h)}return[B$(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ss{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[u,c]=gF(t,n);if(this.el=ss.createElement(u,r),Vr.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Vr.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(N$)){const f=c[s++],h=i.getAttribute(d).split(mr),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:m[2],strings:h,ctor:m[1]==="."?_F:m[1]==="?"?yF:m[1]==="@"?bF:Bl}),i.removeAttribute(d)}else d.startsWith(mr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(D$.test(i.tagName)){const d=i.textContent.split(mr),f=d.length-1;if(f>0){i.textContent=qa?qa.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],is()),Vr.nextNode(),l.push({type:2,index:++o});i.append(d[f],is())}}}else if(i.nodeType===8)if(i.data===M$)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(mr,d+1))!==-1;)l.push({type:7,index:o}),d+=mr.length-1}o++}}static createElement(t,n){const r=ei.createElement("template");return r.innerHTML=t,r}}function Li(e,t,n=e,r){if(t===Tn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=os(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Li(e,i._$AS(e,t.values),i,r)),t}class mF{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??ei).importNode(n,!0);Vr.currentNode=i;let o=Vr.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new Yi(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new wF(o,this,t)),this._$AV.push(u),l=r[++a]}s!==l?.index&&(o=Vr.nextNode(),s++)}return Vr.currentNode=ei,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Yi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=pe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Li(this,t,n),os(t)?t===pe||t==null||t===""?(this._$AH!==pe&&this._$AR(),this._$AH=pe):t!==this._$AH&&t!==Tn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pF(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==pe&&os(this._$AH)?this._$AA.nextSibling.data=t:this.T(ei.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ss.createElement(B$(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new mF(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=gx.get(t.strings);return n===void 0&&gx.set(t.strings,n=new ss(t)),n}k(t){Tg(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Yi(this.O(is()),this.O(is()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=cx(t).nextSibling;cx(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Bl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=pe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=pe}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Li(this,t,n,0),s=!os(t)||t!==this._$AH&&t!==Tn,s&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=Li(this,a[r+l],n,l),u===Tn&&(u=this._$AH[l]),s||=!os(u)||u!==this._$AH[l],u===pe?t=pe:t!==pe&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.j(t)}j(t){t===pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _F extends Bl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pe?void 0:t}}class yF extends Bl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==pe)}}class bF extends Bl{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Li(this,t,n,0)??pe)===Tn)return;const r=this._$AH,i=t===pe&&r!==pe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==pe&&(r===pe||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class wF{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Li(this,t)}}const xF={I:Yi},SF=Pg.litHtmlPolyfillSupport;SF?.(ss,Yi),(Pg.litHtmlVersions??=[]).push("3.3.2");const L$=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Yi(t.insertBefore(is(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ng=globalThis;let sn=class extends mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=L$(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Tn}};sn._$litElement$=!0,sn.finalized=!0,Ng.litElementHydrateSupport?.({LitElement:sn});const EF=Ng.litElementPolyfillSupport;EF?.({LitElement:sn});(Ng.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const CF=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $F={attribute:!0,type:String,converter:Da,reflect:!1,hasChanged:Rg},kF=(e=$F,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function D(e){return(t,n)=>typeof n=="object"?kF(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(e){return D({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct(e,t){return(n,r,i)=>{const o=s=>s.renderRoot?.querySelector(e)??null;if(t){const{get:s,set:a}=typeof r=="object"?n:i??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return as(n,r,{get(){let l=s.call(this);return l===void 0&&(l=o(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return as(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let IF;function AF(e){return(t,n)=>as(t,n,{get(){return(this.renderRoot??(IF??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _n(e){return(t,n)=>{const{slot:r,selector:i}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return as(t,n,{get(){const s=this.renderRoot?.querySelector(o),a=s?.assignedElements(e)??[];return i===void 0?a:a.filter(l=>l.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function OF(e){return(t,n)=>{const{slot:r}={},i="slot"+(r?`[name=${r}]`:":not([name])");return as(t,n,{get(){return this.renderRoot?.querySelector(i)?.assignedNodes(e)??[]}})}}const _v="1.17.0",mx="__vscodeElements_disableRegistryWarning__";class Ae extends sn{get version(){return _v}}const $e=e=>t=>{if(!customElements.get(e)){customElements.define(e,t);return}if(mx in window)return;const i=document.createElement(e)?.version;let o="";i?i!==_v?(o+="is already registered by a different version of VSCode Elements. ",o+=`This version is "${_v}", while the other one is "${i}".`):o+="is already registered by the same version of VSCode Elements. ":(console.warn(e,"is already registered by an unknown custom element handler class."),o+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${e} ${o}
To suppress this warning, set window.${mx} to true`)},ke=Ce`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,RF=16,PF=13,TF=RF/PF;function Mg(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}const NF=Dl(Mg()),MF=[ke,Ce`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${NF});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var z$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ba=class extends Ae{constructor(){super(...arguments),this.variant="default"}render(){return ne` <slot></slot> `}};Ba.styles=MF;z$([D({reflect:!0})],Ba.prototype,"variant",void 0);Ba=z$([$e("vscode-badge")],Ba);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dg={ATTRIBUTE:1,CHILD:2,PROPERTY:3},qg=e=>(...t)=>({_$litDirective$:e,values:t});let Bg=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=qg(class extends Bg{constructor(e){if(super(e),e.type!==Dg.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Tn}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=e=>e??pe;class DF extends Bg{constructor(t){if(super(t),this._prevProperties={},t.type!==Dg.PROPERTY||t.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(t,[n]){return Object.entries(n).forEach(([r,i])=>{this._prevProperties[r]!==i&&(r.startsWith("--")?t.element.style.setProperty(r,i):t.element.style[r]=i,this._prevProperties[r]=i)}),Tn}render(t){return Tn}}const St=qg(DF),qF=[ke,Ce`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var ai=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},wo;let dn=wo=class extends Ae{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=t=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:t}}))}}connectedCallback(){super.connectedCallback();const{href:t,nonce:n}=this._getStylesheetConfig();wo.stylesheetHref=t,wo.nonce=n}_getStylesheetConfig(){const t=document.getElementById("vscode-codicon-stylesheet"),n=t?.getAttribute("href")||void 0,r=t?.nonce||void 0;if(!t){let i="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";i+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(i)}return{nonce:r,href:n}}render(){const{stylesheetHref:t,nonce:n}=wo,r=ne`<span
      class=${De({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${St({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,i=this.actionIcon?ne` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${r}
        </button>`:ne` <span class="icon" aria-hidden="true" role="presentation"
          >${r}</span
        >`;return ne`
      <link
        rel="stylesheet"
        href=${Ie(t)}
        nonce=${Ie(n)}
      >
      ${i}
    `}};dn.styles=qF;dn.stylesheetHref="";dn.nonce="";ai([D()],dn.prototype,"label",void 0);ai([D({type:String})],dn.prototype,"name",void 0);ai([D({type:Number})],dn.prototype,"size",void 0);ai([D({type:Boolean,reflect:!0})],dn.prototype,"spin",void 0);ai([D({type:Number,attribute:"spin-duration"})],dn.prototype,"spinDuration",void 0);ai([D({type:Boolean,reflect:!0,attribute:"action-icon"})],dn.prototype,"actionIcon",void 0);dn=wo=ai([$e("vscode-icon")],dn);const BF=Dl(Mg()),LF=[ke,Ce`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${BF});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 0;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: var(--wrapper-width, 100%);
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .wrapper,
    :host([icon-only]) .wrapper {
      min-height: 24px;
      min-width: 16px;
      padding: 1px 5px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }

    .divider {
      display: var(--divider-display, none);
      background-color: transparent;
      padding: 4px 0;
      box-sizing: border-box;
    }

    :host(:hover) .divider,
    :host(:focus) .divider {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([secondary]) .divider {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host([secondary]:hover) .divider,
    :host([secondary]:focus) .divider {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    .divider > div {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      height: 100%;
      width: 1px;
      margin: 0;
    }

    :host([secondary]) .divider > div {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }
  `];var mt=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ot=class extends Ae{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(t){super.update(t),t.has("value")&&this._internals.setFormValue(this.value),t.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(t){if((t.key==="Enter"||t.key===" ")&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const n=new MouseEvent("click",{bubbles:!0,cancelable:!0});n.synthetic=!0,this.dispatchEvent(n),this._executeAction()}}_handleClick(t){t.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:t}})),this._executeAction())}render(){const t=this.icon!=="",n=this.iconAfter!=="",r={wrapper:!0,"has-icon-before":t,"has-icon-after":n,"icon-only":this.iconOnly},i=t?ne`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${Ie(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:pe,o=n?ne`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${Ie(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:pe;return ne`
      <span class=${De(r)}>
        ${i}
        <slot></slot>
        ${o}
      </span>
      <div class="divider"><div></div></div>
    `}};ot.styles=LF;ot.formAssociated=!0;mt([D({type:Boolean,reflect:!0})],ot.prototype,"autofocus",void 0);mt([D({type:Number,reflect:!0})],ot.prototype,"tabIndex",void 0);mt([D({type:Boolean,reflect:!0})],ot.prototype,"secondary",void 0);mt([D({reflect:!0})],ot.prototype,"role",void 0);mt([D({type:Boolean,reflect:!0})],ot.prototype,"disabled",void 0);mt([D()],ot.prototype,"icon",void 0);mt([D({type:Boolean,reflect:!0,attribute:"icon-spin"})],ot.prototype,"iconSpin",void 0);mt([D({type:Number,reflect:!0,attribute:"icon-spin-duration"})],ot.prototype,"iconSpinDuration",void 0);mt([D({attribute:"icon-after"})],ot.prototype,"iconAfter",void 0);mt([D({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],ot.prototype,"iconAfterSpin",void 0);mt([D({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],ot.prototype,"iconAfterSpinDuration",void 0);mt([D({type:Boolean,reflect:!0})],ot.prototype,"focused",void 0);mt([D({type:String,reflect:!0})],ot.prototype,"name",void 0);mt([D({type:Boolean,reflect:!0,attribute:"icon-only"})],ot.prototype,"iconOnly",void 0);mt([D({reflect:!0})],ot.prototype,"type",void 0);mt([D()],ot.prototype,"value",void 0);ot=mt([$e("vscode-button")],ot);const zF=[ke,Ce`
    :host {
      display: inline-flex;
      align-items: stretch;
      padding: 0;
      border: none;
      overflow: hidden;
    }

    ::slotted(vscode-button:not(:first-child)) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }

    ::slotted(vscode-button:not(:last-child)) {
      --divider-display: block;
      --wrapper-width: calc(100% - 1px);

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 0;
    }

    ::slotted(vscode-button:focus) {
      z-index: 1;
    }
  `];var VF=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let yv=class extends Ae{render(){return ne` <slot></slot> `}};yv.styles=zF;yv=VF([CF("vscode-button-group")],yv);var FF=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class Lg extends Ae{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(t,n,r){super.attributeChangedCallback(t,n,r),t==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):t==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}FF([D({type:Boolean,reflect:!0})],Lg.prototype,"focused",void 0);var HF=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const V$=e=>{class t extends e{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(r){this._label=r,this._slottedText===""&&this.setAttribute("aria-label",r)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?ne`<span class="label-attr">${this._label}</span>`:ne`${pe}`}}return HF([D()],t.prototype,"label",null),t},F$=[Ce`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `],jF=[ke,F$,Ce`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var Yt=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Et=class extends V$(Lg){set checked(t){this._checked=t,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(t){this._required=t,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=t=>{t.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=t=>{!this.disabled&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.key===" "&&this._toggleState(),t.key==="Enter"&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(t){super.update(t),t.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(t,n){t&&(this.checked=!0)}_setActualFormValue(){let t="";this.checked?t=this.value?this.value:"on":t=null,this._internals.setFormValue(t)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const t=De({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),n=De({"label-inner":!0}),r=ne`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,i=this.checked&&!this.indeterminate?r:pe,o=this.indeterminate?ne`<span class="indeterminate-icon"></span>`:pe;return ne`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${t}>${o}${i}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${n}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};Et.styles=jF;Et.formAssociated=!0;Et.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};Yt([D({type:Boolean,reflect:!0})],Et.prototype,"autofocus",void 0);Yt([D({type:Boolean,reflect:!0})],Et.prototype,"checked",null);Yt([D({type:Boolean,reflect:!0,attribute:"default-checked"})],Et.prototype,"defaultChecked",void 0);Yt([D({type:Boolean,reflect:!0})],Et.prototype,"invalid",void 0);Yt([D({reflect:!0})],Et.prototype,"name",void 0);Yt([D()],Et.prototype,"value",void 0);Yt([D({type:Boolean,reflect:!0})],Et.prototype,"disabled",void 0);Yt([D({type:Boolean,reflect:!0})],Et.prototype,"indeterminate",void 0);Yt([D({type:Boolean,reflect:!0})],Et.prototype,"required",null);Yt([D()],Et.prototype,"type",void 0);Yt([Ct("#input")],Et.prototype,"_inputEl",void 0);Et=Yt([$e("vscode-checkbox")],Et);const UF=[ke,Ce`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var zg=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ls=class extends Ae{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return ne`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ls.styles=UF;zg([D({reflect:!0})],ls.prototype,"role",void 0);zg([D({reflect:!0})],ls.prototype,"variant",void 0);ls=zg([$e("vscode-checkbox-group")],ls);const GF=[ke,Ce`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var Ll=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zi=class extends Ae{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(t){t.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const t=De({collapsible:!0,open:this.open}),n=ne`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,r=this.description?ne`<span class="description">${this.description}</span>`:pe;return ne`
      <div class=${t}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${n}
          <h3 class="title">${this.title}${r}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};zi.styles=GF;Ll([D({type:String})],zi.prototype,"title",void 0);Ll([D()],zi.prototype,"description",void 0);Ll([D({type:Boolean,reflect:!0})],zi.prototype,"open",void 0);zi=Ll([$e("vscode-collapsible")],zi);const KF=[ke,Ce`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var Xi=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sr=class extends Ae{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return ne`
      ${this.separator?ne`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:ne`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?ne`<span class="label">${this.label}</span>`:pe}
                ${this.keybinding?ne`<span class="keybinding">${this.keybinding}</span>`:pe}
              </a>
            </div>
          `}
    `}};Sr.styles=KF;Xi([D({type:String})],Sr.prototype,"label",void 0);Xi([D({type:String})],Sr.prototype,"keybinding",void 0);Xi([D({type:String})],Sr.prototype,"value",void 0);Xi([D({type:Boolean,reflect:!0})],Sr.prototype,"separator",void 0);Xi([D({type:Number})],Sr.prototype,"tabindex",void 0);Sr=Xi([$e("vscode-context-menu-item")],Sr);const WF=[ke,Ce`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var Ir=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nn=class extends Ae{set data(t){this._data=t;const n=[];t.forEach((r,i)=>{r.separator||n.push(i)}),this._clickableItemIndexes=n}get data(){return this._data}set show(t){this._show=t,this._selectedClickableItemIndex=-1,t&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(t){t.composedPath().includes(this)||(this.show=!1)}_onKeyDown(t){const{key:n}=t;switch((n==="ArrowUp"||n==="ArrowDown"||n==="Escape"||n==="Enter")&&t.preventDefault(),n){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(t){const{keybinding:n,label:r,value:i,separator:o,tabindex:s}=t;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:n,label:r,separator:o,tabindex:s,value:i}}))}_dispatchLegacySelectEvent(t){const{keybinding:n,label:r,value:i,separator:o,tabindex:s}=t,a={keybinding:n,label:r,value:i,separator:o,tabindex:s};this.dispatchEvent(new CustomEvent("vsc-select",{detail:a,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const t=this._clickableItemIndexes[this._selectedClickableItemIndex],r=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[t];this._dispatchLegacySelectEvent(r),this._dispatchSelectEvent(r),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(t){const n=t.currentTarget;this._dispatchLegacySelectEvent(n),this._dispatchSelectEvent(n),this.preventClose||(this.show=!1)}_onItemMouseOver(t){const n=t.target,r=n.dataset.index?+n.dataset.index:-1,i=this._clickableItemIndexes.findIndex(o=>o===r);i!==-1&&(this._selectedClickableItemIndex=i)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return ne`${pe}`;const t=this._clickableItemIndexes[this._selectedClickableItemIndex];return ne`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:n="",keybinding:r="",value:i="",separator:o=!1,tabindex:s=0},a)=>ne`
                <vscode-context-menu-item
                  label=${n}
                  keybinding=${r}
                  value=${i}
                  ?separator=${o}
                  ?selected=${a===t}
                  tabindex=${s}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${a}
                ></vscode-context-menu-item>
              `):ne`<slot></slot>`}
      </div>
    `}};Nn.styles=WF;Ir([D({type:Array,attribute:!1})],Nn.prototype,"data",null);Ir([D({type:Boolean,reflect:!0,attribute:"prevent-close"})],Nn.prototype,"preventClose",void 0);Ir([D({type:Boolean,reflect:!0})],Nn.prototype,"show",null);Ir([D({type:Number,reflect:!0})],Nn.prototype,"tabIndex",void 0);Ir([xe()],Nn.prototype,"_selectedClickableItemIndex",void 0);Ir([xe()],Nn.prototype,"_show",void 0);Ir([Ct(".context-menu")],Nn.prototype,"_wrapperEl",void 0);Nn=Ir([$e("vscode-context-menu")],Nn);const YF=[ke,Ce`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `];var H$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let La=class extends Ae{constructor(){super(...arguments),this.role="separator"}render(){return ne``}};La.styles=YF;H$([D({reflect:!0})],La.prototype,"role",void 0);La=H$([$e("vscode-divider")],La);const XF=[ke,Ce`
    :host {
      display: block;
      max-width: 727px;
    }
  `];var Zi=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},Br;(function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"})(Br||(Br={}));const ZF=e=>["vscode-textfield","vscode-textarea"].includes(e.tagName.toLocaleLowerCase()),JF=e=>e.tagName.toLocaleLowerCase()==="vscode-single-select",QF=e=>e.tagName.toLocaleLowerCase()==="vscode-multi-select",_x=e=>e.tagName.toLocaleLowerCase()==="vscode-checkbox",yx=e=>e.tagName.toLocaleLowerCase()==="vscode-radio";let Er=class extends Ae{constructor(){super(...arguments),this.breakpoint=490,this._responsive=!1,this._firstUpdateComplete=!1,this._resizeObserverCallbackBound=this._resizeObserverCallback.bind(this)}set responsive(t){this._responsive=t,this._firstUpdateComplete&&(t?this._activateResponsiveLayout():this._deactivateResizeObserver())}get responsive(){return this._responsive}get data(){return this._collectFormData()}_collectFormData(){const t=["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select","vscode-checkbox","vscode-radio"].join(","),n=this.querySelectorAll(t),r={};return n.forEach(i=>{if(!i.hasAttribute("name"))return;const o=i.getAttribute("name");o&&(_x(i)&&i.checked?r[o]=Array.isArray(r[o])?[...r[o],i.value]:[i.value]:QF(i)?r[o]=i.value:_x(i)&&!i.checked?r[o]=Array.isArray(r[o])?r[o]:[]:yx(i)&&i.checked||ZF(i)||JF(i)?r[o]=i.value:yx(i)&&!i.checked&&(r[o]=r[o]?r[o]:""))}),r}_toggleCompactLayout(t){this._assignedFormGroups.forEach(n=>{n.dataset.originalVariant||(n.dataset.originalVariant=n.variant);const r=n.dataset.originalVariant;t===Br.VERTICAL&&r==="horizontal"?n.variant="vertical":n.variant=r,n.querySelectorAll("vscode-checkbox-group, vscode-radio-group").forEach(o=>{o.dataset.originalVariant||(o.dataset.originalVariant=o.variant);const s=o.dataset.originalVariant;t===Br.HORIZONTAL&&s===Br.HORIZONTAL?o.variant="horizontal":o.variant="vertical"})})}_resizeObserverCallback(t){let n=0;for(const i of t)n=i.contentRect.width;const r=n<this.breakpoint?Br.VERTICAL:Br.HORIZONTAL;r!==this._currentFormGroupLayout&&(this._toggleCompactLayout(r),this._currentFormGroupLayout=r)}_activateResponsiveLayout(){this._resizeObserver=new ResizeObserver(this._resizeObserverCallbackBound),this._resizeObserver.observe(this._wrapperElement)}_deactivateResizeObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null}firstUpdated(){this._firstUpdateComplete=!0,this._responsive&&this._activateResponsiveLayout()}render(){return ne`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Er.styles=XF;Zi([D({type:Boolean,reflect:!0})],Er.prototype,"responsive",null);Zi([D({type:Number})],Er.prototype,"breakpoint",void 0);Zi([D({type:Object})],Er.prototype,"data",null);Zi([Ct(".wrapper")],Er.prototype,"_wrapperElement",void 0);Zi([_n({selector:"vscode-form-group"})],Er.prototype,"_assignedFormGroups",void 0);Er=Zi([$e("vscode-form-container")],Er);const e5=[ke,Ce`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `];var j$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let za=class extends Ae{constructor(){super(...arguments),this.variant="horizontal"}render(){return ne`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};za.styles=e5;j$([D({reflect:!0})],za.prototype,"variant",void 0);za=j$([$e("vscode-form-group")],za);const t5=[ke,Ce`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];var n5=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const bv=new CSSStyleSheet;bv.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);let wv=class extends Ae{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){document.adoptedStyleSheets.find(n=>n===bv)||document.adoptedStyleSheets.push(bv)}render(){return ne`<slot></slot>`}};wv.styles=t5;wv=n5([$e("vscode-form-helper")],wv);let bx=0;const U$=(e="")=>(bx++,`${e}${bx}`),r5=[ke,Ce`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${TF};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var zl=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vi=class extends Ae{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(t){this._htmlFor=t,this.setAttribute("for",t),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(t){this._id=t}get id(){return this._id}attributeChangedCallback(t,n,r){super.attributeChangedCallback(t,n,r)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=U$("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let t=null;if(this._htmlFor){const n=this.getRootNode({composed:!1});n&&(t=n.querySelector(`#${this._htmlFor}`))}return t}async _connectWithTarget(){await this.updateComplete;const t=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes(t?.tagName.toLowerCase()??"")&&t.setAttribute("aria-labelledby",this._id);let n="";this.textContent&&(n=this.textContent.trim()),t&&"label"in t&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes(t?.tagName.toLowerCase()??"")&&(t.label=n)}_handleClick(){const t=this._getTarget();t&&"focus"in t&&t.focus()}render(){return ne`
      <label
        class=${De({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};Vi.styles=r5;zl([D({reflect:!0,attribute:"for"})],Vi.prototype,"htmlFor",null);zl([D()],Vi.prototype,"id",null);zl([D({type:Boolean,reflect:!0})],Vi.prototype,"required",void 0);Vi=zl([$e("vscode-label")],Vi);const Va=ne`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,i5=vF`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
  />
</svg>`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:o5}=xF,wx=e=>e,xx=()=>document.createComment(""),uo=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(xx(),i),s=r.insertBefore(xx(),i);n=new o5(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,a=s!==e;if(a){let l;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==s._$AU&&n._$AP(l)}if(o!==i||a){let l=n._$AA;for(;l!==o;){const u=wx(l).nextSibling;wx(r).insertBefore(l,i),l=u}}}return n},Pr=(e,t,n=e)=>(e._$AI(t,n),e),s5={},a5=(e,t=s5)=>e._$AH=t,l5=e=>e._$AH,Mp=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sx=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},u5=qg(class extends Bg{constructor(e){if(super(e),e.type!==Dg.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const a of e)i[s]=r?r(a,s):s,o[s]=n(a,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=l5(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],l=[];let u,c,d=0,f=i.length-1,h=0,m=o.length-1;for(;d<=f&&h<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(a[d]===s[h])l[h]=Pr(i[d],o[h]),d++,h++;else if(a[f]===s[m])l[m]=Pr(i[f],o[m]),f--,m--;else if(a[d]===s[m])l[m]=Pr(i[d],o[m]),uo(e,l[m+1],i[d]),d++,m--;else if(a[f]===s[h])l[h]=Pr(i[f],o[h]),uo(e,i[d],i[f]),f--,h++;else if(u===void 0&&(u=Sx(s,h,m),c=Sx(a,d,f)),u.has(a[d]))if(u.has(a[f])){const p=c.get(s[h]),v=p!==void 0?i[p]:null;if(v===null){const g=uo(e,i[d]);Pr(g,o[h]),l[h]=g}else l[h]=Pr(v,o[h]),uo(e,i[d],v),i[p]=null;h++}else Mp(i[f]),f--;else Mp(i[d]),d++;for(;h<=m;){const p=uo(e,l[m+1]);Pr(p,o[h]),l[h++]=p}for(;d<=f;){const p=i[d++];p!==null&&Mp(p)}return this.ut=s,a5(e,l),Tn}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c5(e,t,n){return e?t(e):n?.(e)}var Ss=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ti=class extends Ae{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(t){this._initialized&&(t.has("description")||t.has("value")||t.has("selected")||t.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return ne`<slot @slotchange=${this._handleSlotChange}></slot>`}};ti.styles=ke;Ss([D({type:String})],ti.prototype,"value",void 0);Ss([D({type:String})],ti.prototype,"description",void 0);Ss([D({type:Boolean,reflect:!0})],ti.prototype,"selected",void 0);Ss([D({type:Boolean,reflect:!0})],ti.prototype,"disabled",void 0);ti=Ss([$e("vscode-option")],ti);const G$=(e,t)=>{const n={match:!1,ranges:[]},r=e.toLowerCase(),i=t.toLowerCase(),o=r.split(" ");let s=0;return o.forEach((a,l)=>{if(l>0&&(s+=o[l-1].length+1),n.match)return;const u=a.indexOf(i),c=i.length;u===0&&(n.match=!0,n.ranges.push([s+u,Math.min(s+u+c,e.length)]))}),n},K$=(e,t)=>{const n={match:!1,ranges:[]};return e.toLowerCase().indexOf(t.toLowerCase())===0&&(n.match=!0,n.ranges=[[0,t.length]]),n},W$=(e,t)=>{const n={match:!1,ranges:[]},r=e.toLowerCase().indexOf(t.toLowerCase());return r>-1&&(n.match=!0,n.ranges=[[r,r+t.length]]),n},Y$=(e,t)=>{const n={match:!1,ranges:[]};let r=0,i=0;const o=t.length-1,s=e.toLowerCase(),a=t.toLowerCase();for(let l=0;l<=o;l++){if(i=s.indexOf(a[l],r),i===-1)return{match:!1,ranges:[]};n.match=!0,n.ranges.push([i,i+1]),r=i+1}return n},d5=(e,t,n)=>{const r=[];return e.forEach(i=>{let o;switch(n){case"startsWithPerTerm":o=G$(i.label,t);break;case"startsWith":o=K$(i.label,t);break;case"contains":o=W$(i.label,t);break;default:o=Y$(i.label,t)}o.match&&r.push({...i,ranges:o.ranges})}),r},Gs=e=>{const t=[];return e===" "?(t.push(ne`&nbsp;`),t):(e.indexOf(" ")===0&&t.push(ne`&nbsp;`),t.push(ne`${e.trimStart().trimEnd()}`),e.lastIndexOf(" ")===e.length-1&&t.push(ne`&nbsp;`),t)},f5=(e,t)=>{const n=[],r=t.length;return r<1?ne`${e}`:(t.forEach((i,o)=>{const s=e.substring(i[0],i[1]);o===0&&i[0]!==0&&n.push(...Gs(e.substring(0,t[0][0]))),o>0&&o<r&&i[0]-t[o-1][1]!==0&&n.push(...Gs(e.substring(t[o-1][1],i[0]))),n.push(ne`<b>${Gs(s)}</b>`),o===r-1&&i[1]<e.length&&n.push(...Gs(e.substring(i[1],e.length)))}),n)};class h5{constructor(t){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=t).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this._host.requestUpdate()}get relativeActiveIndex(){return this._options[this._activeIndex]?.filteredIndex??-1}set comboboxMode(t){this._combobox=t,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(t){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=t,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._selectedIndex!==-1&&(this._options[this._selectedIndex].selected??=!1);const n=this.getOptionByIndex(t);this._selectedIndex=n?t:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(t){this._selectedIndexes.forEach(n=>{this._options[n].selected=!1}),this._selectedIndexes=new Set(t),t.forEach(n=>{this._options[n]!==void 0&&(this._options[n].selected=!0)}),this._host.requestUpdate()}set value(t){if(this._multiSelect){const n=t.map(r=>this._indexByValue.get(r)).filter(r=>r!==void 0);this._selectedIndexes=new Set(n)}else this._selectedIndex=this._indexByValue.get(t)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(t=>this._options[t].value):[]:this._selectedIndex>-1?this._options[this._selectedIndex].value:""}set multiSelectValue(t){const n=t.map(r=>this._indexByValue.get(r)).filter(r=>r!==void 0);this._selectedIndexes=new Set(n)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(t=>this._options[t].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(t){t!==this._filterPattern&&(this._filterPattern=t,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(t){t!==this._filterMethod&&(this._filterMethod=t,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(t){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=t.map((n,r)=>(this._indexByValue.set(n.value??"",r),this._indexByLabel.set(n.label??"",r),{description:n.description??"",disabled:n.disabled??!1,label:n.label??"",selected:n.selected??!1,value:n.value??"",index:r,filteredIndex:r,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(t){const n=this._options.length,{description:r,disabled:i,label:o,selected:s,value:a}=t;let l=!0,u=[];if(this._combobox&&this._filterPattern!==""){const c=this._searchByPattern(o??"");l=c.match,u=c.ranges}this._indexByValue.set(a??"",n),this._indexByLabel.set(o??"",n),s&&(this._selectedIndex=n,this._selectedIndexes.add(n),this._activeIndex=n),this._options.push({index:n,filteredIndex:n,description:r??"",disabled:i??!1,label:o??"",selected:s??!1,value:a??"",visible:l,ranges:u}),l&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0}getIsIndexSelected(t){return this._multiSelect?this._selectedIndexes.has(t):this._selectedIndex===t}expandMultiSelection(t){t.forEach(n=>{const r=this._indexByValue.get(n)??-1;r!==-1&&this._selectedIndexes.add(r)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const t=this._options[this._activeIndex]??null;if(!t)return;this._selectedIndexes.has(t.index)?this._selectedIndexes.delete(t.index):this._selectedIndexes.add(t.index),this._host.requestUpdate()}toggleOptionSelected(t){const n=this._selectedIndexes.has(t);this._options[t].selected=!this._options[t].selected,n?this._selectedIndexes.delete(t):this._selectedIndexes.add(t),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(t){return this._options[t]??null}findOptionIndex(t){return this._indexByValue.get(t)??-1}getOptionByValue(t,n=!1){const r=this._indexByValue.get(t)??-1;return r===-1?null:n?this._options[r]:this._options[r].visible?this._options[r]:null}getOptionByLabel(t){const n=this._indexByLabel.get(t)??-1;return n===-1?null:this._options[n]}next(t){const n=t??this._activeIndex;let r=-1;for(let i=n+1;i<this._options.length;i++)if(this._options[i]&&!this._options[i].disabled&&this._options[i].visible){r=i;break}return r>-1?this._options[r]:null}prev(t){const n=t??this._activeIndex;let r=-1;for(let i=n-1;i>=0;i--)if(this._options[i]&&!this._options[i].disabled&&this._options[i].visible){r=i;break}return r>-1?this._options[r]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const n=this._selectedIndexes.values().next();this._activeIndex=n.value?n.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((t,n)=>{this._options[n].selected=!0,this._selectedIndexes.add(n)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((t,n)=>{this._options[n].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(t){let n;switch(this._filterMethod){case"startsWithPerTerm":n=G$(t,this._filterPattern);break;case"startsWith":n=K$(t,this._filterPattern);break;case"contains":n=W$(t,this._filterPattern);break;default:n=Y$(t,this._filterPattern)}return n}_updateState(){if(!this._combobox||this._filterPattern==="")this._options.forEach((t,n)=>{this._options[n].visible=!0,this._options[n].ranges=[]}),this._numOfVisibleOptions=this._options.length;else{let t=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:n},r)=>{const i=this._searchByPattern(n);this._options[r].visible=i.match,this._options[r].ranges=i.ranges,this._options[r].filteredIndex=i.match?++t:-1,i.match&&(this._numOfVisibleOptions+=1)})}this._host.requestUpdate()}}const p5=[ke,Ce`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var dt=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let et=class extends Ae{set scrollPos(t){this._scrollPos=t,this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=t=>{const n=this._scrollThumbStartY+(t.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(n),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=t=>{this._isDragging=!1,this._thumbActive=!1;const n=this.getBoundingClientRect(),{x:r,y:i,width:o,height:s}=n,{pageX:a,pageY:l}=t;(a>r+o||a<r||l>i+s||l<i)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=t=>{t.preventDefault();const n=t.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+t.deltaY*n),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=t=>{t.currentTarget&&(this.scrollPos=t.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(t){this._updateThumbPosition()}_calcThumbHeight(){const t=this.offsetHeight,n=this._contentElement?.offsetHeight??0,r=t*(t/n);return Math.max(this.minThumbSize,r)}_updateScrollbar(){const t=this._contentElement?.offsetHeight??0;this.offsetHeight>=t?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let t=0;this._assignedElements.forEach(n=>{if("style"in n){const r=window.getComputedStyle(n).zIndex;/([0-9-])+/g.test(r)&&(t=Number(r)>t?Number(r):t)}}),this._scrollbarTrackZ=t+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;const t=this._scrollPos;this.scrolled=t>0;const n=this.offsetHeight,r=this._thumbHeight,o=this._contentElement.offsetHeight-n,s=t/o,a=n-r;this._thumbY=Math.min(s*(n-r),a)}_calculateScrollPosFromThumbPos(t){const n=this.getBoundingClientRect().height,r=this._scrollThumbElement.getBoundingClientRect().height,i=this._contentElement.getBoundingClientRect().height,o=t/(n-r)*(i-n);return this._limitScrollPos(o)}_limitScrollPos(t){return t<0?0:t>this.scrollMax?this.scrollMax:t}_limitThumbPos(t){const n=this.getBoundingClientRect().height,r=this._scrollThumbElement.getBoundingClientRect().height;return t<0?0:t>n-r?n-r:t}_handleScrollThumbMouseDown(t){const n=this.getBoundingClientRect(),r=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=t.screenY,this._scrollThumbStartY=r.top-n.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(t){t.target===t.currentTarget&&(this._thumbY=t.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return ne`
      <div
        class="scrollable-container"
        .style=${St({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this._scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${De({shadow:!0,visible:this.scrolled})}
          .style=${St({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?ne`<div class="prevent-interaction"></div>`:pe}
        <div
          class=${De({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${De({"scrollbar-thumb":!0,visible:this.alwaysVisible?!0:this._thumbVisible,fade:this.alwaysVisible?!1:this._thumbFade,active:this._thumbActive})}
            .style=${St({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};et.styles=p5;dt([D({type:Boolean,reflect:!0,attribute:"always-visible"})],et.prototype,"alwaysVisible",void 0);dt([D({type:Number,attribute:"fast-scroll-sensitivity"})],et.prototype,"fastScrollSensitivity",void 0);dt([D({type:Number,attribute:"min-thumb-size"})],et.prototype,"minThumbSize",void 0);dt([D({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],et.prototype,"mouseWheelScrollSensitivity",void 0);dt([D({type:Boolean,reflect:!0})],et.prototype,"shadow",void 0);dt([D({type:Boolean,reflect:!0})],et.prototype,"scrolled",void 0);dt([D({type:Number,attribute:"scroll-pos"})],et.prototype,"scrollPos",null);dt([D({type:Number,attribute:"scroll-max"})],et.prototype,"scrollMax",null);dt([xe()],et.prototype,"_isDragging",void 0);dt([xe()],et.prototype,"_thumbHeight",void 0);dt([xe()],et.prototype,"_thumbY",void 0);dt([xe()],et.prototype,"_thumbVisible",void 0);dt([xe()],et.prototype,"_thumbFade",void 0);dt([xe()],et.prototype,"_thumbActive",void 0);dt([Ct(".content")],et.prototype,"_contentElement",void 0);dt([Ct(".scrollbar-thumb",!0)],et.prototype,"_scrollThumbElement",void 0);dt([Ct(".scrollable-container")],et.prototype,"_scrollableContainer",void 0);dt([_n()],et.prototype,"_assignedElements",void 0);et=dt([$e("vscode-scrollable")],et);var tt=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Ks=10,Fn=22;class We extends Ae{set combobox(t){this._opts.comboboxMode=t}get combobox(){return this._opts.comboboxMode}set disabled(t){this._disabled=t,this.ariaDisabled=t?"true":"false",t===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(t){const n=["contains","fuzzy","startsWith","startsWithPerTerm"];let r;n.includes(t)?r=t:(console.warn(`[VSCode Webview Elements] Invalid filter: "${t}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this),r="fuzzy"),this._opts.filterMethod=r}get filter(){return this._opts.filterMethod}set options(t){this._opts.populate(t)}get options(){return this._opts.options.map(({label:t,value:n,description:r,selected:i,disabled:o})=>({label:t,value:n,description:r,selected:i,disabled:o}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._opts=new h5(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=t=>{t.composedPath().findIndex(i=>i===this)===-1&&(this.open=!1)},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=t=>{this._optionListScrollPos=t.detail},this._onComponentKeyDown=t=>{[" ","ArrowUp","ArrowDown","Escape"].includes(t.key)&&(t.stopPropagation(),t.preventDefault()),t.key==="Enter"&&this._onEnterKeyDown(t),t.key===" "&&this._onSpaceKeyDown(),t.key==="Escape"&&this._onEscapeKeyDown(),t.key==="ArrowUp"&&this._onArrowUpKeyDown(),t.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",t=>{t.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(t){this._firstUpdateCompleted=!0}willUpdate(t){t.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}update(t){super.update(t),t.has("open")&&(this.open?(this._opts.activateDefault(),this._scrollActiveElementToTop(),window.addEventListener("click",this._onClickOutside)):window.removeEventListener("click",this._onClickOutside))}get _filteredOptions(){return!this.combobox||this._opts.filterPattern===""?this._options:d5(this._options,this._opts.filterPattern,this._filter)}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;const t=this._opts.getOptionByValue(this._opts.filterPattern)!==null,n=this._opts.filterPattern.length>0;return!t&&n}_manageRequired(){}_setStateFromSlottedElements(){const t=this._assignedOptions??[];this._opts.clear(),t.forEach(n=>{const{innerText:r,description:i,disabled:o}=n,s=typeof n.value=="string"?n.value:r.trim(),a=n.selected??!1,l={label:r.trim(),value:s,description:i,selected:a,disabled:o};this._opts.add(l)})}_createSuggestedOption(){const t=this._opts.numOptions,n=document.createElement("vscode-option");return n.value=this._opts.filterPattern,L$(this._opts.filterPattern,n),this.appendChild(n),t}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Fn)}async _adjustOptionListScrollPos(t,n){let r=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(r+=1),r<=Ks)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const o=this._optionListScrollPos,s=n*Fn,a=s>=o&&s<=o+Ks*Fn-Fn;t==="down"&&(a||(this._optionListScrollPos=n*Fn-(Ks-1)*Fn)),t==="up"&&(a||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*Fn)))}_onFaceClick(){this.open=!this.open}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(t){t.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(t){if(this._isHoverForbidden)return;const n=t.target;n.matches(".option")&&(n.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+n.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(t){t.stopPropagation()}_onEnterKeyDown(t){this._isBeingFiltered=!1,t?.composedPath&&t.composedPath().find(r=>r.matches?r.matches("vscode-button.button-accept"):!1)}_onSpaceKeyDown(){if(!this.open){this.open=!0;return}}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){const t=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=t,this._isPlaceholderOptionActive=!1}else{const t=this._opts.prev();if(t!==null){this._opts.activeIndex=t?.index??-1;const n=t?.filteredIndex??-1;n>-1&&this._adjustOptionListScrollPos("up",n)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let t=this._opts.numOfVisibleOptions;const n=this._isSuggestedOptionVisible;if(n&&(t+=1),this.open){if(this._isPlaceholderOptionActive&&this._opts.activeIndex===-1)return;const r=this._opts.next();if(n&&r===null)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",t-1),this._opts.activeIndex=-1;else if(r!==null){const i=r?.filteredIndex??-1;this._opts.activeIndex=r?.index??-1,i>-1&&this._adjustOptionListScrollPos("down",i)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(t){t.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(t){this._isBeingFiltered=!0,this._opts.filterPattern=t.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=this._opts.filterPattern!=="",this.open=!0}_onComboboxInputSpaceKeyDown(t){t.key===" "&&t.stopPropagation()}_onOptionClick(t){this._isBeingFiltered=!1}_renderCheckbox(t,n){return ne`<span class=${De({"checkbox-icon":!0,checked:t})}>${i5}</span
      ><span class="option-label">${n}</span>`}_renderOptions(){const t=this._opts.options;return ne`
      <ul
        aria-label=${Ie(this.label??void 0)}
        aria-multiselectable=${Ie(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${u5(t,n=>n.index,(n,r)=>{if(!n.visible)return pe;const i=n.index===this._opts.activeIndex&&!n.disabled,o=this._opts.getIsIndexSelected(n.index),s={active:i,disabled:n.disabled,option:!0,selected:o},a=n.ranges?.length??!1?f5(n.label,n.ranges??[]):n.label;return ne`
              <li
                aria-selected=${o?"true":"false"}
                class=${De(s)}
                data-index=${n.index}
                data-filtered-index=${r}
                id=${`op-${n.index}`}
                role="option"
                tabindex="-1"
              >
                ${c5(this._opts.multiSelect,()=>this._renderCheckbox(o,a),()=>a)}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(t){return!this.combobox||this._opts.getOptionByLabel(this._opts.filterPattern)?pe:this.creatable&&this._opts.filterPattern.length>0?ne`<li
        class=${De({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:t?ne`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:pe}_renderDescription(){const t=this._opts.getActiveOption();if(!t)return pe;const{description:n}=t;return n?ne`<div class="description">${n}</div>`:pe}_renderSelectFace(){return ne`${pe}`}_renderComboboxFace(){return ne`${pe}`}_renderDropdownControls(){return ne`${pe}`}_renderDropdown(){const t={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},n=this._isSuggestedOptionVisible||this._opts.numOfVisibleOptions===0?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,r=Math.min(n*Fn,Ks*Fn);return ne`
      <div class=${De(t)}>
        ${this.position==="above"?this._renderDescription():pe}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${St({height:`${r}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position==="below"?this._renderDescription():pe}
      </div>
    `}}tt([D({type:Boolean,reflect:!0})],We.prototype,"creatable",void 0);tt([D({type:Boolean,reflect:!0})],We.prototype,"combobox",null);tt([D({reflect:!0})],We.prototype,"label",void 0);tt([D({type:Boolean,reflect:!0})],We.prototype,"disabled",null);tt([D({type:Boolean,reflect:!0})],We.prototype,"invalid",void 0);tt([D()],We.prototype,"filter",null);tt([D({type:Boolean,reflect:!0})],We.prototype,"focused",void 0);tt([D({type:Boolean,reflect:!0})],We.prototype,"open",void 0);tt([D({type:Array})],We.prototype,"options",null);tt([D({reflect:!0})],We.prototype,"position",void 0);tt([_n({flatten:!0,selector:"vscode-option"})],We.prototype,"_assignedOptions",void 0);tt([xe()],We.prototype,"_currentDescription",void 0);tt([xe()],We.prototype,"_filter",void 0);tt([xe()],We.prototype,"_filteredOptions",null);tt([xe()],We.prototype,"_selectedIndexes",void 0);tt([xe()],We.prototype,"_options",void 0);tt([xe()],We.prototype,"_value",void 0);tt([xe()],We.prototype,"_values",void 0);tt([xe()],We.prototype,"_isPlaceholderOptionActive",void 0);tt([xe()],We.prototype,"_isBeingFiltered",void 0);tt([xe()],We.prototype,"_optionListScrollPos",void 0);const X$=[ke,Ce`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      display: none;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 1px;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border: 1px solid var(--vscode-checkbox-border);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: inline-flex;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];var li=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let fn=class extends We{set selectedIndexes(t){this._opts.selectedIndexes=t}get selectedIndexes(){return this._opts.selectedIndexes}set value(t){this._opts.multiSelectValue=t,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(t)?t:[t],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=t=>{const r=t.composedPath().find(s=>"matches"in s?s.matches("li.option"):!1);if(!r)return;if(r.classList.contains("placeholder")){this._createAndSelectSuggestedOption();return}const o=Number(r.dataset.index);this._opts.toggleOptionSelected(o),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(t,n){const r=Array.from(t.entries()).map(i=>String(i[1]));this.updateComplete.then(()=>{this.value=r})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const t=this.defaultValue.map(n=>String(n));this.value=t}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._opts.selectedIndexes,value:this._opts.multiSelectValue}})),super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:t}=this;t.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const t=new FormData;this._values.forEach(n=>{t.append(this.name??"",n)}),this._internals.setFormValue(t)}async _createAndSelectSuggestedOption(){super._createAndSelectSuggestedOption();const t=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,t],this._dispatchChangeEvent();const n=new CustomEvent("vsc-multi-select-create-option",{detail:{value:this._opts.getOptionByIndex(t)?.value??""}});this.dispatchEvent(n),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(t=>this._opts.findOptionIndex(t)===-1))}_onEnterKeyDown(t){super._onEnterKeyDown(t),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(t=>({...t,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(t=>({...t,selected:!0})),this._options.forEach((t,n)=>{this._selectedIndexes.push(n),this._values.push(t.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._opts.selectedIndexes.length){case 0:return ne`<span class="select-face-badge no-item">0 Selected</span>`;default:return ne`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}}_renderComboboxFace(){let t="";this._isBeingFiltered?t=this._opts.filterPattern:t=this._opts.getSelectedOption()?.label??"";const n=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",r=this.open?"true":"false";return ne`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():pe}
        <input
          aria-activedescendant=${n}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${r}
          aria-haspopup="listbox"
          aria-label=${Ie(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${t}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${Va}
        </button>
      </div>
    `}_renderSelectFace(){const t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",n=this.open?"true":"false";return ne`
      <div
        aria-activedescendant=${Ie(this._opts.multiSelect?void 0:t)}
        aria-controls="select-listbox"
        aria-expanded=${Ie(this._opts.multiSelect?void 0:n)}
        aria-haspopup="listbox"
        aria-label=${Ie(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${Va}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?ne`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:ne`${pe}`}render(){return ne`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};fn.styles=X$;fn.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};fn.formAssociated=!0;li([D({type:Array,attribute:"default-value"})],fn.prototype,"defaultValue",void 0);li([D({type:Boolean,reflect:!0})],fn.prototype,"required",void 0);li([D({reflect:!0})],fn.prototype,"name",void 0);li([D({type:Array,attribute:!1})],fn.prototype,"selectedIndexes",null);li([D({type:Array})],fn.prototype,"value",null);li([Ct(".face")],fn.prototype,"_faceElement",void 0);fn=li([$e("vscode-multi-select")],fn);const v5=[ke,Ce`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var Vl=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fi=class extends Ae{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return ne`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};Fi.styles=v5;Vl([D({reflect:!0,attribute:"aria-label"})],Fi.prototype,"ariaLabel",void 0);Vl([D({reflect:!0,attribute:"aria-live"})],Fi.prototype,"ariaLive",void 0);Vl([D({reflect:!0})],Fi.prototype,"role",void 0);Fi=Vl([$e("vscode-progress-ring")],Fi);const g5=[ke,F$,Ce`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var qt=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ht=class extends V$(Lg){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=t=>{!this.disabled&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),t.key==="Enter"&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(t){super.update(t),t.has("checked")&&this._handleValueChange(),t.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(n=>{n.checked=n.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(t,n){this.value===t&&t!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const t=this.getRootNode({composed:!0});if(!t)return[];const n=t.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(n)}_uncheckOthers(t){t.forEach(n=>{n!==this&&(n.checked=!1)})}_checkButton(){const t=this._getRadios();this.checked=!0,t.forEach(n=>{n!==this&&(n.checked=!1)})}setComponentValidity(t){t?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(t,n){this.updateComplete.then(()=>{t.forEach(r=>{r.setComponentValidity(n)})})}_setActualFormValue(){let t="";this.checked?t=this.value?this.value:"on":t=null,this._internals.setFormValue(t)}_handleValueChange(){const t=this._getRadios(),n=t.some(r=>r.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(t),this._setGroupValidity(t,!0);else{const r=!!t.find(o=>o.checked),i=n&&!r;this._setGroupValidity(t,!i)}}render(){const t=De({icon:!0,checked:this.checked}),n=De({"label-inner":!0,"is-slot-empty":this._slottedText===""});return ne`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${t}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${n}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};ht.styles=g5;ht.formAssociated=!0;ht.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};qt([D({type:Boolean,reflect:!0})],ht.prototype,"autofocus",void 0);qt([D({type:Boolean,reflect:!0})],ht.prototype,"checked",void 0);qt([D({type:Boolean,reflect:!0,attribute:"default-checked"})],ht.prototype,"defaultChecked",void 0);qt([D({type:Boolean,reflect:!0})],ht.prototype,"invalid",void 0);qt([D({reflect:!0})],ht.prototype,"name",void 0);qt([D()],ht.prototype,"value",void 0);qt([D({type:Boolean,reflect:!0})],ht.prototype,"disabled",void 0);qt([D({type:Boolean,reflect:!0})],ht.prototype,"required",void 0);qt([D({reflect:!0})],ht.prototype,"role",void 0);qt([D({type:Number,reflect:!0})],ht.prototype,"tabIndex",void 0);qt([xe()],ht.prototype,"_slottedText",void 0);qt([Ct("#input")],ht.prototype,"_inputEl",void 0);qt([D()],ht.prototype,"type",void 0);ht=qt([$e("vscode-radio")],ht);const m5=[ke,Ce`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var Ji=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Cr=class extends Ae{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(t,n){t!==-1&&(this._radios[t].checked=!1),n!==-1&&(this._radios[n].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const t=this._radios.findIndex(i=>i.checked),n=this._radios.findIndex(i=>i.focused),r=n!==-1?n:t;this._uncheckPreviousChecked(t,n),r===-1?this._checkedRadio=this._radios.length-1:r-1>=0?this._checkedRadio=r-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const t=this._radios.findIndex(i=>i.checked),n=this._radios.findIndex(i=>i.focused),r=n!==-1?n:t;this._uncheckPreviousChecked(t,n),r===-1?this._checkedRadio=0:r+1<this._radios.length?this._checkedRadio=r+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(t){const{key:n}=t;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(n)&&t.preventDefault(),(n==="ArrowRight"||n==="ArrowDown")&&this._checkNext(),(n==="ArrowLeft"||n==="ArrowUp")&&this._checkPrev()}_onChange(t){const n=this._radios.findIndex(r=>r===t.target);n!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==n&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=n,this._checkedRadio=n,this._radios[n].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const t=this._radios.findIndex(n=>n.autofocus);t>-1&&(this._focusedRadio=t),this._firstContentLoaded=!0}this._radios.forEach((t,n)=>{this._focusedRadio>-1?t.tabIndex=n===this._focusedRadio?0:-1:t.tabIndex=n===0?0:-1})}render(){return ne`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};Cr.styles=m5;Ji([D({reflect:!0})],Cr.prototype,"variant",void 0);Ji([D({reflect:!0})],Cr.prototype,"role",void 0);Ji([_n({selector:"vscode-radio"})],Cr.prototype,"_radios",void 0);Ji([xe()],Cr.prototype,"_focusedRadio",void 0);Ji([xe()],Cr.prototype,"_checkedRadio",void 0);Cr=Ji([$e("vscode-radio-group")],Cr);var ui=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let hn=class extends We{set selectedIndex(t){this._opts.selectedIndex=t;const n=this._opts.getOptionByIndex(t);n?(this._opts.activeIndex=t,this._value=n.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(t){this._opts.value=t,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=t,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const t=this.renderRoot.querySelector(".combobox-input");if(t){const n=this._opts.getSelectedOption();t.value=n?.label??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(t,n){this.updateComplete.then(()=>{this.value=t})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){const t=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=t,this._dispatchChangeEvent();const n=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._opts.getOptionByIndex(t)?.value??""}});this.dispatchEvent(n),this.open=!1,this._isPlaceholderOptionActive=!1}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._opts.selectedIndex,value:this._value}})),super._dispatchChangeEvent()}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),!this.combobox&&this._opts.selectedIndexes.length===0&&(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const t=this._opts.getOptionByValue(this._requestedValueToSetLater);t&&(this._opts.selectedIndex=t.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(t){super._onEnterKeyDown(t);let n=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(n=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(n=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),n&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(t){super._onOptionClick(t);const r=t.composedPath().find(o=>{const s=o;if("matches"in s)return s.matches("li.option")});if(!r||r.matches(".disabled"))return;r.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(r.dataset.index),this.open=!1,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:t}=this;t===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const n=this._opts.getSelectedOption()?.label??"",r=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return ne`
      <div
        aria-activedescendant=${r}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${Ie(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${n}</span> ${Va}
      </div>
    `}_renderComboboxFace(){let t="";this._isBeingFiltered?t=this._opts.filterPattern:t=this._opts.getSelectedOption()?.label??"";const n=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",r=this.open?"true":"false";return ne`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${n}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${r}
          aria-haspopup="listbox"
          aria-label=${Ie(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${t}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${Va}
        </button>
      </div>
    `}render(){return ne`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};hn.styles=X$;hn.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};hn.formAssociated=!0;ui([D({attribute:"default-value"})],hn.prototype,"defaultValue",void 0);ui([D({reflect:!0})],hn.prototype,"name",void 0);ui([D({type:Number,attribute:"selected-index"})],hn.prototype,"selectedIndex",null);ui([D({type:String})],hn.prototype,"value",null);ui([D({type:Boolean,reflect:!0})],hn.prototype,"required",void 0);ui([Ct(".face")],hn.prototype,"_face",void 0);hn=ui([$e("vscode-single-select")],hn);const _5=[ke,Ce`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var Ot=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},xv;const Ex="50%",y5=4,Ws=e=>{if(!e)return{value:0,unit:"pixel"};let t,n;e.endsWith("%")?(t="percent",n=+e.substring(0,e.length-1)):e.endsWith("px")?(t="pixel",n=+e.substring(0,e.length-2)):(t="pixel",n=+e);const r=isNaN(n)?0:n;return{unit:t,value:r}},Ys=(e,t)=>t===0?0:Math.min(100,e/t*100),Cx=(e,t)=>t*(e/100);let gt=xv=class extends Ae{set split(t){this._split!==t&&(this._split=t,this.resetHandlePosition())}get split(){return this._split}set handlePosition(t){this._rawHandlePosition=t,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(t){this._fixedPane=t,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=Ex,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=t=>{const n=t[0].contentRect,{width:r,height:i}=n;this._boundRect=n;const o=this.split==="vertical"?r:i;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=o-this._fixedPaneSize)},this._handleMouseUp=t=>{this._isDragActive=!1,t.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:n,height:r}=this._boundRect,i=this.split==="vertical"?n:r,o=Ys(this._handlePosition,i);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:o},composed:!0}))},this._handleMouseMove=t=>{const{clientX:n,clientY:r}=t,{left:i,top:o,height:s,width:a}=this._boundRect,l=this.split==="vertical",u=l?a:s,c=l?n-i:r-o;this._handlePosition=Math.max(0,Math.min(c-this._handleOffset+this.handleSize/2,u)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=u-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:t,height:n}=this._wrapperEl.getBoundingClientRect(),r=this.split==="vertical"?t:n,{value:i,unit:o}=Ws(this.initialHandlePosition??Ex);o==="percent"?this._handlePosition=Cx(i,r):this._handlePosition=i}connectedCallback(){super.connectedCallback()}firstUpdated(t){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:n,unit:r}=this.handlePosition?Ws(this.handlePosition):Ws(this.initialHandlePosition);this._setPosition(n,r),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:n}=Ws(this.handlePosition);this._setPosition(t,n)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:t,height:n}=this._boundRect,r=this.split==="vertical"?t:n;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:r-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(t,n){const{width:r,height:i}=this._boundRect,o=this.split==="vertical"?r:i;this._handlePosition=n==="percent"?Cx(t,o):t}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(t){t.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(t){t.stopPropagation(),t.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:n,top:r}=this._boundRect,{left:i,top:o}=this._handleEl.getBoundingClientRect(),s=t.clientX-n,a=t.clientY-r;this.split==="vertical"&&(this._handleOffset=s-(i-n)),this.split==="horizontal"&&(this._handleOffset=a-(o-r)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(n=>{n instanceof xv&&n.resetHandlePosition()})}render(){const{width:t,height:n}=this._boundRect,r=this.split==="vertical"?t:n,i=this.fixedPane!=="none"?`${this._handlePosition}px`:`${Ys(this._handlePosition,r)}%`;let o="";this.fixedPane==="start"?o=`0 0 ${this._fixedPaneSize}px`:o=`1 1 ${Ys(this._handlePosition,r)}%`;let s="";this.fixedPane==="end"?s=`0 0 ${this._fixedPaneSize}px`:s=`1 1 ${Ys(r-this._handlePosition,r)}%`;const a={left:this.split==="vertical"?i:"0",top:this.split==="vertical"?"0":i},l=this.handleSize??y5;this.split==="vertical"&&(a.marginLeft=`${0-l/2}px`,a.width=`${l}px`),this.split==="horizontal"&&(a.height=`${l}px`,a.marginTop=`${0-l/2}px`);const u=De({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),c=De({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),d={wrapper:!0,horizontal:this.split==="horizontal"};return ne`
      <div class=${De(d)}>
        <div class="start" .style=${St({flex:o})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${St({flex:s})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${u}></div>
        <div
          class=${c}
          .style=${St(a)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};gt.styles=_5;Ot([D({reflect:!0})],gt.prototype,"split",null);Ot([D({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],gt.prototype,"resetOnDblClick",void 0);Ot([D({type:Number,reflect:!0,attribute:"handle-size"})],gt.prototype,"handleSize",void 0);Ot([D({reflect:!0,attribute:"initial-handle-position"})],gt.prototype,"initialHandlePosition",void 0);Ot([D({attribute:"handle-position"})],gt.prototype,"handlePosition",null);Ot([D({attribute:"fixed-pane"})],gt.prototype,"fixedPane",null);Ot([xe()],gt.prototype,"_handlePosition",void 0);Ot([xe()],gt.prototype,"_isDragActive",void 0);Ot([xe()],gt.prototype,"_hover",void 0);Ot([xe()],gt.prototype,"_hide",void 0);Ot([Ct(".wrapper")],gt.prototype,"_wrapperEl",void 0);Ot([Ct(".handle")],gt.prototype,"_handleEl",void 0);Ot([_n({slot:"start",selector:"vscode-split-layout"})],gt.prototype,"_nestedLayoutsAtStart",void 0);Ot([_n({slot:"end",selector:"vscode-split-layout"})],gt.prototype,"_nestedLayoutsAtEnd",void 0);gt=xv=Ot([$e("vscode-split-layout")],gt);const b5=[ke,Ce`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var Qi=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let an=class extends Ae{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(t,n,r){if(super.attributeChangedCallback(t,n,r),t==="active"){const i=r!==null;this.ariaSelected=i?"true":"false",this.tabIndex=i?0:-1}}render(){return ne`
      <div
        class=${De({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${De({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};an.styles=b5;Qi([D({type:Boolean,reflect:!0})],an.prototype,"active",void 0);Qi([D({reflect:!0,attribute:"aria-controls"})],an.prototype,"ariaControls",void 0);Qi([D({type:Boolean,reflect:!0})],an.prototype,"panel",void 0);Qi([D({reflect:!0})],an.prototype,"role",void 0);Qi([D({type:Number,reflect:!0,attribute:"tab-id"})],an.prototype,"tabId",void 0);an=Qi([$e("vscode-tab-header")],an);const w5=[ke,Ce`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var eo=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let rr=class extends Ae{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return ne` <slot></slot> `}};rr.styles=w5;eo([D({type:Boolean,reflect:!0})],rr.prototype,"hidden",void 0);eo([D({reflect:!0,attribute:"aria-labelledby"})],rr.prototype,"ariaLabelledby",void 0);eo([D({type:Boolean,reflect:!0})],rr.prototype,"panel",void 0);eo([D({reflect:!0})],rr.prototype,"role",void 0);eo([D({type:Number,reflect:!0})],rr.prototype,"tabIndex",void 0);rr=eo([$e("vscode-tab-panel")],rr);const x5=[ke,Ce`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var Z$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fa=class extends Ae{constructor(){super(...arguments),this.role="rowgroup"}render(){return ne` <slot></slot> `}};Fa.styles=x5;Z$([D({reflect:!0})],Fa.prototype,"role",void 0);Fa=Z$([$e("vscode-table-body")],Fa);const S5=[ke,Ce`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var Fl=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Hi=class extends Ae{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const t=this.columnLabel?ne`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:pe;return ne`
      <div class="wrapper">
        ${t}
        <slot></slot>
      </div>
    `}};Hi.styles=S5;Fl([D({reflect:!0})],Hi.prototype,"role",void 0);Fl([D({attribute:"column-label"})],Hi.prototype,"columnLabel",void 0);Fl([D({type:Boolean,reflect:!0})],Hi.prototype,"compact",void 0);Hi=Fl([$e("vscode-table-cell")],Hi);const E5=[ke,Ce`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var J$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ha=class extends Ae{constructor(){super(...arguments),this.role="rowgroup"}render(){return ne` <slot></slot> `}};Ha.styles=E5;J$([D({reflect:!0})],Ha.prototype,"role",void 0);Ha=J$([$e("vscode-table-header")],Ha);const C5=[ke,Ce`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var Q$=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ja=class extends Ae{constructor(){super(...arguments),this.role="columnheader"}render(){return ne`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ja.styles=C5;Q$([D({reflect:!0})],ja.prototype,"role",void 0);ja=Q$([$e("vscode-table-header-cell")],ja);const $5=[ke,Ce`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var ek=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ua=class extends Ae{constructor(){super(...arguments),this.role="row"}render(){return ne` <slot></slot> `}};Ua.styles=$5;ek([D({reflect:!0})],Ua.prototype,"role",void 0);Ua=ek([$e("vscode-table-row")],Ua);const $x=(e,t)=>typeof e=="number"&&!Number.isNaN(e)?e/t*100:typeof e=="string"&&/^[0-9.]+$/.test(e)?Number(e)/t*100:typeof e=="string"&&/^[0-9.]+%$/.test(e)?Number(e.substring(0,e.length-1)):typeof e=="string"&&/^[0-9.]+px$/.test(e)?Number(e.substring(0,e.length-2))/t*100:null,k5=[ke,Ce`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var Ye=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const kx=100;let Ue=class extends Ae{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=t=>{t.stopPropagation(),this._updateActiveSashPosition(t.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=t=>{this._resizeColumns(!0),this._updateActiveSashPosition(t.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(t){this._columns=t,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}_px2Percent(t){return t/this._componentW*100}_percent2Px(t){return this._componentW*t/100}_memoizeComponentDimensions(){const t=this.getBoundingClientRect();this._componentH=t.height,this._componentW=t.width,this._componentX=t.x}_queryHeaderCells(){const t=this._assignedHeaderElements;return t&&t[0]?Array.from(t[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const t=this._assignedBodyElements;return t&&t[0]?Array.from(t[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let t=0,n=0;const r=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(t=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(n=this._assignedBodyElements[0].getBoundingClientRect().height);const i=n-t-r;this._scrollableElement.style.height=i>0?`${r-t}px`:"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const t=this._getHeaderCells().length;let n=this.columns.slice(0,t);const r=n.filter(o=>o==="auto").length+t-n.length;let i=100;if(n=n.map(o=>{const s=$x(o,this._componentW);return s===null?"auto":(i-=s,s)}),n.length<t)for(let o=n.length;o<t;o++)n.push("auto");return n=n.map(o=>o==="auto"?i/r:o),n}_initHeaderCellSizes(t){this._getHeaderCells().forEach((n,r)=>{n.style.width=`${t[r]}%`})}_initBodyColumnSizes(t){this._getCellsOfFirstRow().forEach((n,r)=>{n.style.width=`${t[r]}%`})}_initSashes(t){const n=t.length;let r=0;this._sashPositions=[],t.forEach((i,o)=>{if(o<n-1){const s=r+i;this._sashPositions.push(s),r=s}})}_initDefaultColumnSizes(){const t=this._calcColWidthPercentages();this._initHeaderCellSizes(t),this._initBodyColumnSizes(t),this._initSashes(t)}_updateResizeHandlersSize(){const t=this._headerElement.getBoundingClientRect();if(t.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=t.height,this._prevComponentHeight=this._componentH;const n=this._componentH-t.height;this._sashVisibleElements.forEach(r=>{r.style.height=`${n}px`,r.style.top=`${t.height}px`})}_applyCompactViewColumnLabels(){const n=this._getHeaderCells().map(i=>i.innerText);this.querySelectorAll("vscode-table-row").forEach(i=>{i.querySelectorAll("vscode-table-cell").forEach((s,a)=>{s.columnLabel=n[a],s.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(t=>{t.columnLabel="",t.compact=!1})}_toggleCompactView(){const n=this.getBoundingClientRect().width<this.breakpoint;this.compact!==n&&(this.compact=n,n?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach(t=>{if(t.tagName.toLowerCase()==="vscode-table-header"){t.slot="header";return}if(t.tagName.toLowerCase()==="vscode-table-body"){t.slot="body";return}})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const t=this._assignedBodyElements[0]??null;t&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(t))}}_onSashMouseOver(t){if(this._isDragging)return;const n=t.currentTarget,r=Number(n.dataset.index);this._sashHovers[r]=!0,this.requestUpdate()}_onSashMouseOut(t){if(t.stopPropagation(),this._isDragging)return;const n=t.currentTarget,r=Number(n.dataset.index);this._sashHovers[r]=!1,this.requestUpdate()}_onSashMouseDown(t){t.stopPropagation();const{pageX:n,currentTarget:r}=t,i=r,o=Number(i.dataset.index),a=i.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=o,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(n-a);const l=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(l[o]),l[o+1]&&(this._headerCellsToResize[1]=l[o+1]);const c=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(c[o]),c[o+1]&&this._cellsToResize.push(c[o+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(t){const{prevSashPos:n,nextSashPos:r}=this._getSashPositions();let i=$x(this.minColumnWidth,this._componentW);i===null&&(i=0);const o=n?n+i:i,s=r?r-i:kx-i;let a=this._px2Percent(t-this._componentX-this._percent2Px(this._activeSashCursorOffset));a=Math.max(a,o),a=Math.min(a,s),this._sashPositions[this._activeSashElementIndex]=a,this.requestUpdate()}_getSashPositions(){const t=this._sashPositions[this._activeSashElementIndex],n=this._sashPositions[this._activeSashElementIndex-1]||0,r=this._sashPositions[this._activeSashElementIndex+1]||kx;return{sashPos:t,prevSashPos:n,nextSashPos:r}}_resizeColumns(t=!0){const{sashPos:n,prevSashPos:r,nextSashPos:i}=this._getSashPositions(),o=n-r,s=i-n,a=`${o}%`,l=`${s}%`;this._headerCellsToResize[0].style.width=a,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=l),t&&(this._cellsToResize[0].style.width=a,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=l))}render(){const t=this._sashPositions.map((r,i)=>{const o=De({sash:!0,hover:this._sashHovers[i],resizable:this.resizable}),s=`${r}%`;return this.resizable?ne`
            <div
              class=${o}
              data-index=${i}
              .style=${St({left:s})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:ne`<div
            class=${o}
            data-index=${i}
            .style=${St({left:s})}
          >
            <div class="sash-visible"></div>
          </div>`}),n=De({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return ne`
      <div class=${n}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${t}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};Ue.styles=k5;Ye([D({reflect:!0})],Ue.prototype,"role",void 0);Ye([D({type:Boolean,reflect:!0})],Ue.prototype,"resizable",void 0);Ye([D({type:Boolean,reflect:!0})],Ue.prototype,"responsive",void 0);Ye([D({type:Boolean,reflect:!0})],Ue.prototype,"bordered",void 0);Ye([D({type:Boolean,reflect:!0,attribute:"bordered-columns"})],Ue.prototype,"borderedColumns",void 0);Ye([D({type:Boolean,reflect:!0,attribute:"bordered-rows"})],Ue.prototype,"borderedRows",void 0);Ye([D({type:Number})],Ue.prototype,"breakpoint",void 0);Ye([D({type:Array})],Ue.prototype,"columns",null);Ye([D({attribute:"min-column-width"})],Ue.prototype,"minColumnWidth",void 0);Ye([D({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],Ue.prototype,"delayedResizing",void 0);Ye([D({type:Boolean,reflect:!0})],Ue.prototype,"compact",void 0);Ye([D({type:Boolean,reflect:!0})],Ue.prototype,"zebra",void 0);Ye([D({type:Boolean,reflect:!0,attribute:"zebra-odd"})],Ue.prototype,"zebraOdd",void 0);Ye([Ct('slot[name="body"]')],Ue.prototype,"_bodySlot",void 0);Ye([Ct(".header")],Ue.prototype,"_headerElement",void 0);Ye([Ct(".scrollable")],Ue.prototype,"_scrollableElement",void 0);Ye([AF(".sash-visible")],Ue.prototype,"_sashVisibleElements",void 0);Ye([_n({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],Ue.prototype,"_assignedElements",void 0);Ye([_n({slot:"header",flatten:!0,selector:"vscode-table-header"})],Ue.prototype,"_assignedHeaderElements",void 0);Ye([_n({slot:"body",flatten:!0,selector:"vscode-table-body"})],Ue.prototype,"_assignedBodyElements",void 0);Ye([xe()],Ue.prototype,"_sashPositions",void 0);Ye([xe()],Ue.prototype,"_isDragging",void 0);Ue=Ye([$e("vscode-table")],Ue);const I5=[ke,Ce`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var to=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $r=class extends Ae{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=U$()}attributeChangedCallback(t,n,r){super.attributeChangedCallback(t,n,r),t==="selected-index"&&this._setActiveTab(),t==="panel"&&(this._tabHeaders.forEach(i=>i.panel=r!==null),this._tabPanels.forEach(i=>i.panel=r!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((t,n)=>{t.hidden=n!==this.selectedIndex}),this._tabHeaders.forEach((t,n)=>{t.active=n===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(t){(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),t.key==="ArrowLeft"?this._focusPrevTab():t.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),t.key==="Enter"&&(t.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const t=this._mainSlotElements.filter(n=>n instanceof an);t.length>0&&t.forEach(n=>n.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(t=>t instanceof rr),this._tabPanels.forEach((t,n)=>{t.ariaLabelledby=`t${this._componentId}-h${n}`,t.id=`t${this._componentId}-p${n}`,t.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(t=>t instanceof an),this._tabHeaders.forEach((t,n)=>{t.tabId=n,t.id=`t${this._componentId}-h${n}`,t.ariaControls=`t${this._componentId}-p${n}`,t.panel=this.panel,t.active=n===this.selectedIndex})}_onHeaderClick(t){const r=t.composedPath().find(i=>i instanceof an);r&&(this.selectedIndex=r.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return ne`
      <div
        class=${De({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};$r.styles=I5;to([D({type:Boolean,reflect:!0})],$r.prototype,"panel",void 0);to([D({reflect:!0})],$r.prototype,"role",void 0);to([D({type:Number,reflect:!0,attribute:"selected-index"})],$r.prototype,"selectedIndex",void 0);to([_n({slot:"header"})],$r.prototype,"_headerSlotElements",void 0);to([_n()],$r.prototype,"_mainSlotElements",void 0);$r=to([$e("vscode-tabs")],$r);const A5=[ke,Ce`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var Xe=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Le=class extends Ae{set value(t){this._value=t,this._internals.setFormValue(t)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(t){this.minLength=t}get minlength(){return this.minLength}set maxlength(t){this.maxLength=t}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(t){const n=["maxLength","minLength","required"];for(const r of t.keys())if(n.includes(String(r))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(t,n){this.updateComplete.then(()=>{this._value=t})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:t}}))}_handleInput(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:t.data,originalEvent:t}}))}_handleMouseMove(t){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const n=14,r=1,i=this._textareaEl.getBoundingClientRect(),o=t.clientX;this._textareaPointerCursor=o>=i.left+i.width-n-r*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return ne`
      <div
        class=${De({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${Ie(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${De({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${Ie(this.maxLength)}
        minlength=${Ie(this.minLength)}
        rows=${Ie(this.rows)}
        cols=${Ie(this.cols)}
        name=${Ie(this.name)}
        placeholder=${Ie(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${St({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};Le.styles=A5;Le.formAssociated=!0;Le.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};Xe([D()],Le.prototype,"autocomplete",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"autofocus",void 0);Xe([D({attribute:"default-value"})],Le.prototype,"defaultValue",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"disabled",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"invalid",void 0);Xe([D({attribute:!1})],Le.prototype,"label",void 0);Xe([D({type:Number})],Le.prototype,"maxLength",void 0);Xe([D({type:Number})],Le.prototype,"minLength",void 0);Xe([D({type:Number})],Le.prototype,"rows",void 0);Xe([D({type:Number})],Le.prototype,"cols",void 0);Xe([D()],Le.prototype,"name",void 0);Xe([D()],Le.prototype,"placeholder",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"readonly",void 0);Xe([D()],Le.prototype,"resize",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"required",void 0);Xe([D({type:Boolean})],Le.prototype,"spellcheck",void 0);Xe([D({type:Boolean,reflect:!0})],Le.prototype,"monospace",void 0);Xe([D()],Le.prototype,"value",null);Xe([Ct("#textarea")],Le.prototype,"_textareaEl",void 0);Xe([xe()],Le.prototype,"_value",void 0);Xe([xe()],Le.prototype,"_textareaPointerCursor",void 0);Xe([xe()],Le.prototype,"_shadow",void 0);Le=Xe([$e("vscode-textarea")],Le);const Ix=Dl(Mg()),O5=[ke,Ce`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${Ix});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${Ix});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var Ke=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Be=class extends Ae{set type(t){const n=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=n.includes(t)?t:"text"}get type(){return this._type}set value(t){this.type!=="file"&&(this._value=t,this._internals.setFormValue(t)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(t){this.minLength=t}get minlength(){return this.minLength}set maxlength(t){this.maxLength=t}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(t,n,r){super.attributeChangedCallback(t,n,r),["max","maxlength","min","minlength","pattern","required","step"].includes(t)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(t,n){this.value=t}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const t of this._inputEl.files)this._internals.setFormValue(t);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:t.data,originalEvent:t}}))}_onChange(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:t}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(t){t.key==="Enter"&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return ne`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${Ie(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${Ie(this.max)}
        maxlength=${Ie(this.maxLength)}
        min=${Ie(this.min)}
        minlength=${Ie(this.minLength)}
        ?multiple=${this.multiple}
        name=${Ie(this.name)}
        pattern=${Ie(this.pattern)}
        placeholder=${Ie(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${Ie(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};Be.styles=O5;Be.formAssociated=!0;Be.shadowRootOptions={...sn.shadowRootOptions,delegatesFocus:!0};Ke([D()],Be.prototype,"autocomplete",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"autofocus",void 0);Ke([D({attribute:"default-value"})],Be.prototype,"defaultValue",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"disabled",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"focused",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"invalid",void 0);Ke([D({attribute:!1})],Be.prototype,"label",void 0);Ke([D({type:Number})],Be.prototype,"max",void 0);Ke([D({type:Number})],Be.prototype,"maxLength",void 0);Ke([D({type:Number})],Be.prototype,"min",void 0);Ke([D({type:Number})],Be.prototype,"minLength",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"multiple",void 0);Ke([D({reflect:!0})],Be.prototype,"name",void 0);Ke([D()],Be.prototype,"pattern",void 0);Ke([D()],Be.prototype,"placeholder",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"readonly",void 0);Ke([D({type:Boolean,reflect:!0})],Be.prototype,"required",void 0);Ke([D({type:Number})],Be.prototype,"step",void 0);Ke([D({reflect:!0})],Be.prototype,"type",null);Ke([D()],Be.prototype,"value",null);Ke([Ct("#input")],Be.prototype,"_inputEl",void 0);Ke([xe()],Be.prototype,"_value",void 0);Ke([xe()],Be.prototype,"_type",void 0);Be=Ke([$e("vscode-textfield")],Be);const R5=[ke,Ce`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `];var ci=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ir=class extends Ae{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){this._isSlotEmpty=!((this._assignedNodes?.length??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const t=this.checked?"true":"false";return ne`
      <button
        type="button"
        aria-label=${Ie(this.label)}
        role=${Ie(this.toggleable?"switch":void 0)}
        aria-checked=${Ie(this.toggleable?t:void 0)}
        class=${De({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?ne`<vscode-icon name=${this.icon}></vscode-icon>`:pe}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${De({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};ir.styles=R5;ci([D({reflect:!0})],ir.prototype,"icon",void 0);ci([D()],ir.prototype,"label",void 0);ci([D({type:Boolean,reflect:!0})],ir.prototype,"toggleable",void 0);ci([D({type:Boolean,reflect:!0})],ir.prototype,"checked",void 0);ci([xe()],ir.prototype,"_isSlotEmpty",void 0);ci([OF()],ir.prototype,"_assignedNodes",void 0);ir=ci([$e("vscode-toolbar-button")],ir);const P5=[ke,Ce`
    :host {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `];var T5=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sv=class extends Ae{render(){return ne` <slot></slot> `}};Sv.styles=P5;Sv=T5([$e("vscode-toolbar-container")],Sv);const N5=[ke,Ce`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var yn=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const M5=30,D5=16,Ax=3,tk=(e,t=[])=>{const n=[];return e.forEach((r,i)=>{const o=[...t,i],s={...r,path:o};r.subItems&&(s.subItems=tk(r.subItems,o)),n.push(s)}),n},co=e=>!!(e.subItems&&Array.isArray(e.subItems)&&e?.subItems?.length>0);let Ht=class extends Ae{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(t){const n=this._data;this._data=tk(t),this.requestUpdate("data",n)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(t){return this._getItemByPath(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(t){let n=this._data,r=null;return t.forEach((i,o)=>{o===t.length-1?r=n[i]:n=n[i].subItems}),r}_handleActionClick(t){t.stopPropagation();const n=t.target,r=n.dataset.itemPath,i=n.dataset.index;let o=null,s="",a="";if(r){const l=r.split("/").map(u=>Number(u));if(o=this._getItemByPath(l),o?.actions){const u=Number(i);o.actions[u]&&(s=o.actions[u].actionId)}o?.value&&(a=o.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:s,item:o,value:a}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:s,item:o,value:a}}))}_renderIconVariant(t){const{type:n,value:r}=t;return n==="themeicon"?ne`<vscode-icon name=${r} class="theme-icon"></vscode-icon>`:ne`<span
        class="image-icon"
        .style=${St({backgroundImage:`url(${r})`})}
      ></span>`}_renderIcon(t){const n={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(t.iconUrls)t.iconUrls.branch&&(n.branch={value:t.iconUrls.branch,type:"image"}),t.iconUrls.leaf&&(n.leaf={value:t.iconUrls.leaf,type:"image"}),t.iconUrls.open&&(n.open={value:t.iconUrls.open,type:"image"});else if(typeof t.icons=="object")t.icons.branch&&(n.branch={value:t.icons.branch,type:"themeicon"}),t.icons.leaf&&(n.leaf={value:t.icons.leaf,type:"themeicon"}),t.icons.open&&(n.open={value:t.icons.open,type:"themeicon"});else if(!t.icons)return ne`${pe}`;return co(t)?t.open?this._renderIconVariant(n.open):this._renderIconVariant(n.branch):this._renderIconVariant(n.leaf)}_renderArrow(t){if(!this.arrows||!co(t))return ne`${pe}`;const{open:n=!1}=t;return ne`
      <div class="arrow-container">
        <vscode-icon name=${n?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(t){const n=[];return t.actions&&Array.isArray(t.actions)&&t.actions.forEach((r,i)=>{if(r.icon){const o=ne`<vscode-icon
            name=${r.icon}
            action-icon
            title=${Ie(r.tooltip)}
            data-item-path=${Ie(t.path?.join("/"))}
            data-index=${i}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;n.push(o)}}),n.length>0?ne`<div class="actions">${n}</div>`:ne`${pe}`}_renderDecorations(t){const n=[];return t.decorations&&Array.isArray(t.decorations)&&t.decorations.forEach(r=>{const{appearance:i="text",visibleWhen:o="always",content:s="",color:a="",focusedColor:l="",hoverColor:u="",selectedColor:c=""}=r,d=`visible-when-${o}`,f={};switch(a&&(f["--color"]=a),l&&(f["--focused-color"]=l),u&&(f["--hover-color"]=u),c&&(f["--selected-color"]=c),i){case"counter-badge":n.push(ne`<vscode-badge
                variant="counter"
                class=${["counter-badge",d].join(" ")}
                part="counter-badge-decoration"
                >${s}</vscode-badge
              >`);break;case"filled-circle":n.push(ne`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",d].join(" ")}
                part="filled-circle-decoration"
                .style=${St(f)}
              ></vscode-icon>`);break;case"text":n.push(ne`<div
                class=${["decoration-text",d].join(" ")}
                part="caption-decoration"
                .style=${St(f)}
              >
                ${s}
              </div>`);break}}),n.length>0?ne`<div class="decorations" part="decorations">
        ${n}
      </div>`:ne`${pe}`}_renderTreeItem(t,n){const{open:r=!1,label:i,description:o="",tooltip:s,selected:a=!1,focused:l=!1,subItems:u=[]}=t,{path:c,itemType:d,hasFocusedItem:f=!1,hasSelectedItem:h=!1}=n,m=c.length-1,p=["contents"],v=r?["open"]:[],g=m*this.indent,y=this.arrows&&d==="leaf"?M5+g:g,_=this._renderArrow(t),b=this._renderIcon(t),I=this.arrows?g+D5:g+Ax,T=r&&d==="branch"?ne`<ul
            .style=${St({"--indent-guide-pos":`${I}px`})}
            class=${De({"has-active-item":f||h})}
          >
            ${this._renderTree(u,c)}
          </ul>`:pe,P=o?ne`<span class="description" part="description">${o}</span>`:pe,q=this._renderActions(t),j=this._renderDecorations(t);return v.push(d),a&&p.push("selected"),l&&p.push("focused"),ne`
      <li data-path=${c.join("/")} class=${v.join(" ")}>
        <div
          class=${p.join(" ")}
          .style=${St({paddingLeft:`${y+Ax}px`})}
        >
          ${_}${b}<span
            class="text-content"
            part="text-content"
            title=${Ie(s)}
            >${i}${P}</span
          >
          ${q} ${j}
        </div>
        ${T}
      </li>
    `}_renderTree(t,n=[]){const r=[];return t?(t.forEach((i,o)=>{const s=[...n,o],a=co(i)?"branch":"leaf",{selected:l=!1,focused:u=!1,hasFocusedItem:c=!1,hasSelectedItem:d=!1}=i;l&&(this._selectedItem=i),u&&(this._focusedItem=i),r.push(this._renderTreeItem(i,{path:s,itemType:a,hasFocusedItem:c,hasSelectedItem:d}))}),r):pe}_selectItem(t){this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=t,t.selected=!0,this._focusedItem=t,t.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let n=null;if(t.path?.length&&t.path.length>1&&(n=this._getItemByPath(t.path.slice(0,-1))),co(t))this._selectedBranch=t,t.hasSelectedItem=!0,t.open=!t.open,t.open?(this._selectedBranch=t,t.hasSelectedItem=!0):n&&(this._selectedBranch=n,n.hasSelectedItem=!0);else if(t.path?.length&&t.path.length>1){const r=this._getItemByPath(t.path.slice(0,-1));r&&(this._selectedBranch=r,r.hasSelectedItem=!0)}else this._selectedBranch=t,t.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(t){this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=t,t.focused=!0;const n=!!t?.subItems?.length;this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let r=null;t.path?.length&&t.path.length>1&&(r=this._getItemByPath(t.path.slice(0,-1))),n?t.open?(this._focusedBranch=t,t.hasFocusedItem=!0):!t.open&&r&&(this._focusedBranch=r,r.hasFocusedItem=!0):r&&(this._focusedBranch=r,r.hasFocusedItem=!0)}_closeSubTreeRecursively(t){t.forEach(n=>{n.open=!1,n.subItems&&n.subItems.length>0&&this._closeSubTreeRecursively(n.subItems)})}_deselectItemsRecursively(t){t.forEach(n=>{n.selected&&(n.selected=!1),n.subItems&&n.subItems.length>0&&this._deselectItemsRecursively(n.subItems)})}_emitSelectEvent(t,n){const{icons:r,label:i,open:o,value:s}=t,a={icons:r,itemType:co(t)?"branch":"leaf",label:i,open:o||!1,value:s||i,path:n};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:a})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:a}))}_focusPrevItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:t}=this._focusedItem;if(t&&t?.length>0){const n=t[t.length-1],r=t.length>1;if(n>0){const i=[...t];i[i.length-1]=n-1;const o=this._getItemByPath(i);let s=o;if(o?.open&&o.subItems?.length){const{subItems:a}=o;s=a[a.length-1]}this._focusItem(s)}else if(r){const i=[...t];i.pop(),this._focusItem(this._getItemByPath(i))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:t,open:n}=this._focusedItem;if(n&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const r=[...t];r[r.length-1]+=1;let i=this._getItemByPath(r);i?this._focusItem(i):(r.pop(),r.length>0&&(r[r.length-1]+=1,i=this._getItemByPath(r),i&&this._focusItem(i)))}_handleClick(t){const r=t.composedPath().find(i=>i.tagName&&i.tagName.toUpperCase()==="LI");if(r){const o=(r.dataset.path||"").split("/").map(a=>Number(a)),s=this._getItemByPath(o);this._selectItem(s)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(t){const n=[" ","ArrowDown","ArrowUp","Enter","Escape"],r=t.key;n.includes(t.key)&&(t.stopPropagation(),t.preventDefault()),r==="Escape"&&(this._focusedItem=null),r==="ArrowUp"&&this._focusPrevItem(),r==="ArrowDown"&&this._focusNextItem(),(r==="Enter"||r===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const t=De({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return ne`
      <div @click=${this._handleClick} class=${t}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};Ht.styles=N5;yn([D({type:Array,reflect:!1})],Ht.prototype,"data",null);yn([D({type:Number})],Ht.prototype,"indent",void 0);yn([D({type:Boolean,reflect:!0})],Ht.prototype,"arrows",void 0);yn([D({type:Boolean,reflect:!0})],Ht.prototype,"multiline",void 0);yn([D({type:Number,reflect:!0})],Ht.prototype,"tabindex",void 0);yn([D({type:Boolean,reflect:!0,attribute:"indent-guides"})],Ht.prototype,"indentGuides",void 0);yn([xe()],Ht.prototype,"_selectedItem",void 0);yn([xe()],Ht.prototype,"_focusedItem",void 0);yn([xe()],Ht.prototype,"_selectedBranch",void 0);yn([xe()],Ht.prototype,"_focusedBranch",void 0);Ht=yn([$e("vscode-tree")],Ht);const nk=bA(rF);nk.use(gO);nk.mount("#app");
