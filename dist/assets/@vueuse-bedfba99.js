import{d as fe}from"./defu-573334b8.js";import{g as pe,o as de,u as A,a as G,b as ye,w as m,c as O,r as v,d as me,e as be,f as ve,h as F,i as U,j as he,k as ge,l as Oe}from"./@vue-ba56d1e4.js";import{s as Y,g as xe}from"./framesync-09d3c61f.js";import{p as f,c as g,d as x,s as E,a as S,b as X,f as D,n as Ve,e as J}from"./style-value-types-e2d04f8e.js";import{i as Ae,a as Te,v as Ee,c as je,l as Fe,e as Se,b as we,d as Be,f as Ce,g as Le,h as De,j as _e,k as Me,m as Pe,n as ze,o as Ne,p as qe,q as Ie}from"./popmotion-9a46e0fa.js";function Q(e){return pe()?(de(e),!0):!1}function P(e){return typeof e=="function"?e():A(e)}const We=typeof window<"u",ke=e=>e!=null,Ue=Object.prototype.toString,_=e=>Ue.call(e)==="[object Object]",j=()=>{};function Ye(e){G()&&ye(e)}function T(e){var t;const i=P(e);return(t=i==null?void 0:i.$el)!=null?t:i}const ee=We?window:void 0;function b(...e){let t,i,n,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,n,r]=e,t=ee):[t,i,n,r]=e,!t)return j;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const s=[],o=()=>{s.forEach(l=>l()),s.length=0},a=(l,u,d,y)=>(l.addEventListener(u,d,y),()=>l.removeEventListener(u,d,y)),c=m(()=>[T(t),P(r)],([l,u])=>{o(),l&&s.push(...i.flatMap(d=>n.map(y=>a(l,d,y,u))))},{immediate:!0,flush:"post"}),p=()=>{c(),o()};return Q(p),p}function Xe(){const e=v(!1);return G()&&me(()=>{e.value=!0}),e}function Ze(e){const t=Xe();return O(()=>(t.value,!!e()))}function $e(e,t,i={}){const{root:n,rootMargin:r="0px",threshold:s=.1,window:o=ee,immediate:a=!0}=i,c=Ze(()=>o&&"IntersectionObserver"in o),p=O(()=>{const h=P(e);return(Array.isArray(h)?h:[h]).map(T).filter(ke)});let l=j;const u=v(a),d=c.value?m(()=>[p.value,T(n),u.value],([h,ue])=>{if(l(),!u.value||!h.length)return;const W=new IntersectionObserver(t,{root:T(ue),rootMargin:r,threshold:s});h.forEach(k=>k&&W.observe(k)),l=()=>{W.disconnect(),l=j}},{immediate:a,flush:"post"}):j,y=()=>{l(),d(),u.value=!1};return Q(y),{isSupported:c,isActive:u,pause(){l(),u.value=!1},resume(){u.value=!0},stop:y}}const w={};class Re{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,i,n){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,i,n)}clear(){this.subscriptions.clear()}}function Z(e){return!isNaN(parseFloat(e))}class He{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Re,this.canTrackVelocity=!1,this.updateAndNotify=i=>{this.prev=this.current,this.current=i;const{delta:n,timestamp:r}=xe();this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r),Y.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Y.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{this.canTrackVelocity||(this.canTrackVelocity=Z(this.current)),i!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Z(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ee(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(i=>{const{stop:n}=t(i);this.stopAnimation=n}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Ke(e){return new He(e)}const{isArray:Ge}=Array;function Je(){const e=v({}),t=n=>{const r=s=>{e.value[s]&&(e.value[s].stop(),e.value[s].destroy(),delete e.value[s])};n?Ge(n)?n.forEach(r):r(n):Object.keys(e.value).forEach(r)},i=(n,r,s)=>{if(e.value[n])return e.value[n];const o=Ke(r);return o.onChange(a=>s[n]=a),e.value[n]=o,o};return Ye(t),{motionValues:e,get:i,stop:t}}function Qe(e){return Array.isArray(e)}function V(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function B(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function et(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function C(){return{type:"keyframes",ease:"linear",duration:300}}function tt(e){return{type:"keyframes",duration:800,values:e}}const $={default:et,x:V,y:V,z:V,rotate:V,rotateX:V,rotateY:V,rotateZ:V,scaleX:B,scaleY:B,scale:B,backgroundColor:C,color:C,opacity:C};function te(e,t){let i;return Qe(t)?i=tt:i=$[e]||$.default,{to:t,...i(t)}}const R={...Ve,transform:Math.round},ie={color:g,backgroundColor:g,outlineColor:g,fill:g,stroke:g,borderColor:g,borderTopColor:g,borderRightColor:g,borderBottomColor:g,borderLeftColor:g,borderWidth:f,borderTopWidth:f,borderRightWidth:f,borderBottomWidth:f,borderLeftWidth:f,borderRadius:f,radius:f,borderTopLeftRadius:f,borderTopRightRadius:f,borderBottomRightRadius:f,borderBottomLeftRadius:f,width:f,maxWidth:f,height:f,maxHeight:f,size:f,top:f,right:f,bottom:f,left:f,padding:f,paddingTop:f,paddingRight:f,paddingBottom:f,paddingLeft:f,margin:f,marginTop:f,marginRight:f,marginBottom:f,marginLeft:f,rotate:x,rotateX:x,rotateY:x,rotateZ:x,scale:E,scaleX:E,scaleY:E,scaleZ:E,skew:x,skewX:x,skewY:x,distance:f,translateX:f,translateY:f,translateZ:f,x:f,y:f,z:f,perspective:f,transformPerspective:f,opacity:S,originX:X,originY:X,originZ:f,zIndex:R,filter:D,WebkitFilter:D,fillOpacity:S,strokeOpacity:S,numOctaves:R},z=e=>ie[e];function ne(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function it(e,t){let i=z(e);return i!==D&&(i=J),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const nt={linear:Fe,easeIn:Se,easeInOut:we,easeOut:Be,circIn:Ce,circInOut:Le,circOut:De,backIn:_e,backInOut:Me,backOut:Pe,anticipate:ze,bounceIn:Ne,bounceInOut:qe,bounceOut:Ie};function H(e){if(Array.isArray(e)){const[t,i,n,r]=e;return je(t,i,n,r)}else if(typeof e=="string")return nt[e];return e}function rt(e){return Array.isArray(e)&&typeof e[0]!="number"}function K(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&J.test(t)&&!t.startsWith("url("))}function st(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function ot({ease:e,times:t,delay:i,...n}){const r={...n};return t&&(r.offset=t),e&&(r.ease=rt(e)?e.map(H):H(e)),i&&(r.elapsed=-i),r}function at(e,t,i){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),st(t),ct(e)||(e={...e,...te(i,t.to)}),{...t,...ot(e)}}function ct({delay:e,repeat:t,repeatType:i,repeatDelay:n,from:r,...s}){return!!Object.keys(s).length}function lt(e,t){return e[t]||e.default||e}function ut(e,t,i,n,r){const s=lt(n,e);let o=s.from===null||s.from===void 0?t.get():s.from;const a=K(e,i);o==="none"&&a&&typeof i=="string"&&(o=it(e,i));const c=K(e,o);function p(u){const d={from:o,to:i,velocity:n.velocity?n.velocity:t.getVelocity(),onUpdate:y=>t.set(y)};return s.type==="inertia"||s.type==="decay"?Ae({...d,...s}):Te({...at(s,d,e),onUpdate:y=>{d.onUpdate(y),s.onUpdate&&s.onUpdate(y)},onComplete:()=>{n.onComplete&&n.onComplete(),r&&r(),u&&u()}})}function l(u){return t.set(i),n.onComplete&&n.onComplete(),r&&r(),u&&u(),{stop:()=>{}}}return!c||!a||s.type===!1?l:p}function ft(){const{motionValues:e,stop:t,get:i}=Je();return{motionValues:e,stop:t,push:(r,s,o,a={},c)=>{const p=o[r],l=i(r,p,o);if(a&&a.immediate){l.set(s);return}const u=ut(r,l,s,a,c);l.start(u)}}}function pt(e,t={},{motionValues:i,push:n,stop:r}=ft()){const s=A(t),o=v(!1);m(i,u=>{o.value=Object.values(u).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=u=>{if(!s||!s[u])throw new Error(`The variant ${u} does not exist.`);return s[u]},c=u=>(typeof u=="string"&&(u=a(u)),Promise.all(Object.entries(u).map(([d,y])=>{if(d!=="transition")return new Promise(h=>n(d,y,e,u.transition||te(d,u[d]),h))}).filter(Boolean)));return{isAnimating:o,apply:c,set:u=>{const d=_(u)?u:a(u);Object.entries(d).forEach(([y,h])=>{y!=="transition"&&n(y,h,e,{immediate:!0})})},leave:async u=>{let d;if(s&&(s.leave&&(d=s.leave),!s.leave&&s.initial&&(d=s.initial)),!d){u();return}await c(d),u()},stop:r}}const N=typeof window<"u",dt=()=>N&&window.onpointerdown===null,yt=()=>N&&window.ontouchstart===null,mt=()=>N&&window.onmousedown===null;function bt({target:e,state:t,variants:i,apply:n}){const r=A(i),s=v(!1),o=v(!1),a=v(!1),c=O(()=>{let l=[];return r&&(r.hovered&&(l=[...l,...Object.keys(r.hovered)]),r.tapped&&(l=[...l,...Object.keys(r.tapped)]),r.focused&&(l=[...l,...Object.keys(r.focused)])),l}),p=O(()=>{const l={};Object.assign(l,t.value),s.value&&r.hovered&&Object.assign(l,r.hovered),o.value&&r.tapped&&Object.assign(l,r.tapped),a.value&&r.focused&&Object.assign(l,r.focused);for(const u in l)c.value.includes(u)||delete l[u];return l});r.hovered&&(b(e,"mouseenter",()=>s.value=!0),b(e,"mouseleave",()=>{s.value=!1,o.value=!1}),b(e,"mouseout",()=>{s.value=!1,o.value=!1})),r.tapped&&(mt()&&(b(e,"mousedown",()=>o.value=!0),b(e,"mouseup",()=>o.value=!1)),dt()&&(b(e,"pointerdown",()=>o.value=!0),b(e,"pointerup",()=>o.value=!1)),yt()&&(b(e,"touchstart",()=>o.value=!0),b(e,"touchend",()=>o.value=!1))),r.focused&&(b(e,"focus",()=>a.value=!0),b(e,"blur",()=>a.value=!1)),m(p,n)}function vt({set:e,target:t,variants:i,variant:n}){const r=A(i);m(()=>t,()=>{r&&(r.initial&&e("initial"),r.enter&&(n.value="enter"))},{immediate:!0,flush:"pre"})}function ht({state:e,apply:t}){m(e,i=>{i&&t(i)},{immediate:!0})}function gt({target:e,variants:t,variant:i}){const n=A(t);n&&(n.visible||n.visibleOnce)&&$e(e,([{isIntersecting:r}])=>{n.visible?r?i.value="visible":i.value="initial":n.visibleOnce&&(r&&i.value!=="visibleOnce"?i.value="visibleOnce":i.value||(i.value="initial"))})}function Ot(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&vt(e),t.syncVariants&&ht(e),t.visibilityHooks&&gt(e),t.eventListeners&&bt(e)}function re(e={}){const t=F({...e}),i=v({});return m(t,()=>{const n={};for(const[r,s]of Object.entries(t)){const o=z(r),a=ne(s,o);n[r]=a}i.value=n},{immediate:!0,deep:!0}),{state:t,style:i}}function q(e,t){m(()=>T(e),i=>{i&&t(i)},{immediate:!0})}const xt={x:"translateX",y:"translateY",z:"translateZ"};function se(e={},t=!0){const i=F({...e}),n=v("");return m(i,r=>{let s="",o=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(f.transform).join(",");s+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const p=z(a),l=ne(c,p);s+=`${xt[a]||a}(${l}) `}t&&!o&&(s+="translateZ(0px) "),n.value=s.trim()},{immediate:!0,deep:!0}),{state:i,transform:n}}const Vt=["","X","Y","Z"],At=["perspective","translate","scale","rotate","skew"],oe=["transformPerspective","x","y","z"];At.forEach(e=>{Vt.forEach(t=>{const i=e+t;oe.push(i)})});const Tt=new Set(oe);function I(e){return Tt.has(e)}const Et=new Set(["originX","originY","originZ"]);function ae(e){return Et.has(e)}function jt(e){const t={},i={};return Object.entries(e).forEach(([n,r])=>{I(n)||ae(n)?t[n]=r:i[n]=r}),{transform:t,style:i}}function ce(e){const{transform:t,style:i}=jt(e),{transform:n}=se(t),{style:r}=re(i);return n.value&&(r.value.transform=n.value),r.value}function Ft(e,t){let i,n;const{state:r,style:s}=re();return q(e,o=>{n=o;for(const a of Object.keys(ie))o.style[a]===null||o.style[a]===""||I(a)||ae(a)||(r[a]=o.style[a]);i&&Object.entries(i).forEach(([a,c])=>o.style[a]=c),t&&t(r)}),m(s,o=>{if(!n){i=o;return}for(const a in o)n.style[a]=o[a]},{immediate:!0}),{style:r}}function St(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const i=n=>n.endsWith("px")||n.endsWith("deg")?parseFloat(n):isNaN(Number(n))?Number(n):n;return t.reduce((n,r)=>{if(!r)return n;const[s,o]=r.split("("),c=o.split(",").map(l=>i(l.endsWith(")")?l.replace(")",""):l.trim())),p=c.length===1?c[0]:c;return{...n,[s]:p}},{})}function wt(e,t){Object.entries(St(t)).forEach(([i,n])=>{const r=["x","y","z"];if(i==="translate3d"){if(n===0){r.forEach(s=>e[s]=0);return}n.forEach((s,o)=>e[r[o]]=s);return}if(n=parseFloat(n),i==="translateX"){e.x=n;return}if(i==="translateY"){e.y=n;return}if(i==="translateZ"){e.z=n;return}e[i]=n})}function Bt(e,t){let i,n;const{state:r,transform:s}=se();return q(e,o=>{n=o,o.style.transform&&wt(r,o.style.transform),i&&(o.style.transform=i),t&&t(r)}),m(s,o=>{if(!n){i=o;return}n.style.transform=o},{immediate:!0}),{transform:r}}function Ct(e,t){const i=F({}),n=o=>Object.entries(o).forEach(([a,c])=>i[a]=c),{style:r}=Ft(e,n),{transform:s}=Bt(e,n);return m(i,o=>{Object.entries(o).forEach(([a,c])=>{const p=I(a)?s:r;p[a]&&p[a]===c||(p[a]=c)})},{immediate:!0,deep:!0}),q(e,()=>t&&n(t)),{motionProperties:i,style:r,transform:s}}function Lt(e={}){const t=A(e),i=v();return{state:O(()=>{if(i.value)return t[i.value]}),variant:i}}function le(e,t={},i){const{motionProperties:n}=Ct(e),{variant:r,state:s}=Lt(t),o=pt(n,t),a={target:e,variant:r,variants:t,state:s,motionProperties:n,...o};return Ot(a,i),a}const Dt=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function _t(e,t){const i=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};i&&(i.variants&&_(i.variants)&&(t.value={...t.value,...i.variants}),Dt.forEach(n=>{if(n==="delay"){if(i&&i[n]&&typeof i[n]=="number"){const r=i[n];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}n==="visible-once"&&(n="visibleOnce"),i&&i[n]&&_(i[n])&&(t.value[n]=i[n])}))}function L(e){return{created:(i,n,r)=>{const s=n.value&&typeof n.value=="string"?n.value:r.key;s&&w[s]&&w[s].stop();const o=v(e||{});typeof n.value=="object"&&(o.value=n.value),_t(r,o);const a=le(i,o);i.motionInstance=a,s&&(w[s]=a)},getSSRProps(i,n){let{initial:r}=i.value||n&&(n==null?void 0:n.props)||{};r=A(r);const s=fe((e==null?void 0:e.initial)||{},r||{});return!s||Object.keys(s).length===0?void 0:{style:ce(s)}}}}const Mt={initial:{opacity:0},enter:{opacity:1}},Pt={initial:{opacity:0},visible:{opacity:1}},zt={initial:{opacity:0},visibleOnce:{opacity:1}},Nt={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},qt={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},It={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Wt={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},kt={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Ut={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Yt={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Xt={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Zt={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},$t={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Rt={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Ht={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Kt={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Gt={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Jt={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Qt={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},ei={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},ti={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},ii={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},ni={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},ri={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},si={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},oi={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},ai={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},ci={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},li={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},ui={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},M={__proto__:null,fade:Mt,fadeVisible:Pt,fadeVisibleOnce:zt,pop:Nt,popVisible:qt,popVisibleOnce:It,rollBottom:Kt,rollLeft:Wt,rollRight:Yt,rollTop:$t,rollVisibleBottom:Gt,rollVisibleLeft:kt,rollVisibleOnceBottom:Jt,rollVisibleOnceLeft:Ut,rollVisibleOnceRight:Zt,rollVisibleOnceTop:Ht,rollVisibleRight:Xt,rollVisibleTop:Rt,slideBottom:ci,slideLeft:Qt,slideRight:ii,slideTop:si,slideVisibleBottom:li,slideVisibleLeft:ei,slideVisibleOnceBottom:ui,slideVisibleOnceLeft:ti,slideVisibleOnceRight:ri,slideVisibleOnceTop:ai,slideVisibleRight:ni,slideVisibleTop:oi},fi=be({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=ve(),i=F({});if(!e.is&&!t.default)return()=>U("div",{});const n=O(()=>{let c;return e.preset&&(c=M[e.preset]),c}),r=O(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=O(()=>{const c={...r.value,...n.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),o=O(()=>{if(!e.is)return;let c=e.is;return typeof o.value=="string"&&!ge(c)&&(c=Oe(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var l;(l=p.variants)!=null&&l.initial&&p.set("initial"),setTimeout(()=>{var u,d,y;(u=p.variants)!=null&&u.enter&&p.apply("enter"),(d=p.variants)!=null&&d.visible&&p.apply("visible"),(y=p.variants)!=null&&y.visibleOnce&&p.apply("visibleOnce")},10)};he(()=>Object.entries(i).forEach(([p,l])=>c(l)))}return{slots:t,component:o,motionConfig:s,instances:i}},render({slots:e,motionConfig:t,instances:i,component:n}){var a;const r=ce(t.initial||{}),s=(c,p)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:l})=>{const u=le(l,t);i[p]=u},c);if(n){const c=U(n,void 0,e);return s(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,p)=>s(c,p))}});function pi(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",i="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",n=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(n,r=>i.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const hi={install(e,t){if(e.directive("motion",L()),e.component("Motion",fi),!t||t&&!t.excludePresets)for(const i in M){const n=M[i];e.directive(`motion-${pi(i)}`,L(n))}if(t&&t.directives)for(const i in t.directives){const n=t.directives[i];!n.initial&&__DEV__&&console.warn(`Your directive v-motion-${i} is missing initial variant!`),e.directive(`motion-${i}`,L(n))}}};export{hi as M};