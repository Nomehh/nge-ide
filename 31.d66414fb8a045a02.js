"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[31],{31:(_,s,o)=>{o.r(s),o.d(s,{PreviewEditorModule:()=>f});var r=o(6019),d=o(2735),a=o(5512),e=o(3668);function p(t,n){if(1&t&&(e.TgZ(0,"div",5),e._UZ(1,"iframe",6),e.ALo(2,"safe"),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("src",e.xi3(2,1,i.preview.data,"url"),e.uOi)}}function v(t,n){if(1&t&&(e.TgZ(0,"div",5),e._UZ(1,"iframe",7),e.ALo(2,"safe"),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("srcdoc",e.xi3(2,1,i.preview.data,"html"),e.oJD)}}function w(t,n){if(1&t&&(e.TgZ(0,"div",5),e._UZ(1,"nge-markdown",8),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("data",i.preview.data)}}function m(t,n){1&t&&(e.TgZ(0,"div",5),e.TgZ(1,"div",9),e._uU(2,"NO PREVIEW"),e.qZA(),e.qZA())}function g(t,n){if(1&t&&(e.ynx(0),e.ynx(1,2),e.YNc(2,p,3,4,"div",3),e.YNc(3,v,3,4,"div",3),e.YNc(4,w,2,1,"div",3),e.YNc(5,m,3,0,"div",4),e.BQk(),e.BQk()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngSwitch",i.preview.type),e.xp6(1),e.Q6J("ngSwitchCase","URL"),e.xp6(1),e.Q6J("ngSwitchCase","HTML"),e.xp6(1),e.Q6J("ngSwitchCase","MARKDOWN")}}function l(t,n){1&t&&(e.TgZ(0,"div",9),e._uU(1,"NO PREVIEW"),e.qZA())}let u=(()=>{class t{constructor(i){this.changeDetectorRef=i,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.editor.onChangeRequest.subscribe(i=>{var c;this.preview=null===(c=i.options)||void 0===c?void 0:c.preview,this.changeDetectorRef.markForCheck()}))}ngOnDestroy(){this.subscriptions.forEach(i=>i.unsubscribe())}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ide-preview-editor"]],inputs:{editor:"editor"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noPreview",""],[3,"ngSwitch"],["class","preview-editor",4,"ngSwitchCase"],["class","preview-editor",4,"ngSwitchDefault"],[1,"preview-editor"],["frameborder","0",3,"src"],["frameborder","0",3,"srcdoc"],[3,"data"],[1,"center"]],template:function(i,c){if(1&i&&(e.YNc(0,g,6,4,"ng-container",0),e.YNc(1,l,2,0,"ng-template",null,1,e.W1O)),2&i){const h=e.MAs(2);e.Q6J("ngIf",c.preview)("ngIfElse",h)}},directives:[r.O5,r.RF,r.n9,r.ED,d.NgeMarkdownComponent],pipes:[a.yl],styles:[".preview-editor[_ngcontent-%COMP%]{height:100%;width:100%;overflow:auto;padding:8px;position:relative}iframe[_ngcontent-%COMP%]{width:100%;height:100%}.center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"],changeDetection:0}),t})(),f=(()=>{class t{constructor(){this.component=u}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,a.ZZ,d.NgeMarkdownModule]]}),t})()}}]);