"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[592],{4414:(g,f,i)=>{i.d(f,{F:()=>c});var a=i(9310),n=i(4946);let c=(()=>{class u{constructor(){this.currentPageName=""}ngOnInit(){}static#e=this.\u0275fac=function(r){return new(r||u)};static#t=this.\u0275cmp=n.Xpm({type:u,selectors:[["breadcrumb"]],inputs:{currentPageName:"currentPageName"},standalone:!0,features:[n.jDz],decls:9,vars:1,consts:[[1,"list-none","p-0","m-0","flex","align-items-center","font-medium","mb-3"],["routerLink","/products","routerLinkActive","router-link-active",1,"text-500","no-underline","line-height-3","cursor-pointer"],[1,"px-2"],[1,"pi","pi-angle-right","text-500","line-height-3"],[1,"text-900","line-height-3"]],template:function(r,p){1&r&&(n.TgZ(0,"ul",0)(1,"li")(2,"a",1),n._uU(3,"Best Selling Products"),n.qZA()(),n.TgZ(4,"li",2),n._UZ(5,"i",3),n.qZA(),n.TgZ(6,"li")(7,"span",4),n._uU(8),n.qZA()()()),2&r&&(n.xp6(8),n.Oqu(p.currentPageName))},dependencies:[a.Bz,a.rH,a.Od],encapsulation:2})}return u})()},4352:(g,f,i)=>{i.d(f,{z:()=>y});var a=i(7394);class n extends a.w0{constructor(e,t){super()}schedule(e,t=0){return this}}const c={setInterval(l,e,...t){const{delegate:s}=c;return s?.setInterval?s.setInterval(l,e,...t):setInterval(l,e,...t)},clearInterval(l){const{delegate:e}=c;return(e?.clearInterval||clearInterval)(l)},delegate:void 0};var u=i(9039);const o={now:()=>(o.delegate||Date).now(),delegate:void 0};class r{constructor(e,t=r.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,s){return new this.schedulerActionCtor(this,e).schedule(s,t)}}r.now=o.now;const y=new class p extends r{constructor(e,t=r.now){super(e,t),this.actions=[],this._active=!1}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let s;this._active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}(class v extends n{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var s;if(this.closed)return this;this.state=e;const h=this.id,d=this.scheduler;return null!=h&&(this.id=this.recycleAsyncId(d,h,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(d,this.id,t),this}requestAsyncId(e,t,s=0){return c.setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&c.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let h,s=!1;try{this.work(e)}catch(d){s=!0,h=d||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),h}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,u.P)(s,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}})}}]);