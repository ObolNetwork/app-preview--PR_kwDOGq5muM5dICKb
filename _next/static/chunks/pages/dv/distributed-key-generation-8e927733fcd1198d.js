(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{29801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/distributed-key-generation",function(){return n(21556)}])},21556:function(e,t,n){"use strict";n.r(t);var o=n(85893),a=n(39618),s=n(67294),i=n(71958),r=n(41518),u=n(21237),c=n(11163),l=n(81259);let p=()=>{let e=(0,c.useRouter)(),t=(0,r.o)((0,s.useCallback)(e=>e.completeOperatorStep,[])),n=()=>{t("dv-dkg"),e.push("/deposit/advisories#groupFlow")},p=(0,r.o)(e=>e.clusterDefinitionData),d=(null==p?void 0:p.config_hash)||(0,u.xs)(e,"configHash"),[k,m]=(0,s.useState)(l.uq.map((e,t)=>{let{contentTitle:a,contentSection:s,enableNextStep:r,rank:c,term:l,value:p,title:k}=e;return{content:(e,t,r,u)=>(0,o.jsx)(i.ns,{contentTitle:a,title:k,contentSection:s,commandsToReplace:[d],rank:e,onAccept:r,onBack:u,enableNextStep:t,term:l,onSubmit:n}),enableNextStep:r,rank:c,state:(0,u.d$)(t),value:p,title:k,term:l}})),[_,f]=(0,s.useState)(k[0]),h=e=>{m(k.map(t=>t.rank===e+1?(f(t),{...t,state:"enabled"}):t))},g=e=>{m(k.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=k.find(t=>t.rank===e-1);t&&f(t)},x=()=>{},b=e=>{f(e)};return(0,o.jsxs)(a.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,o.jsx)(a.xv,{variant:"h3",children:"Distributed Key Generation"}),(0,o.jsx)(a.I,{itemSelected:_,items:k,onItemChange:b,onComplete:x,onUpdateState:h,onBack:g})]})};t.default=p,p.cssLayout={px:"15%"},p.layout="OperatorProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=29801)}),_N_E=e.O()}]);