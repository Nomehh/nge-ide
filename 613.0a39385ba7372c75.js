"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[613],{5613:(C,h,n)=>{n.r(h),n.d(h,{CodeEditorModule:()=>m});var f=n(6019),u=n(4715),r=n(2679),l=n(4762),t=n(3668),c=n(3562);function p(i,s){1&i&&t._UZ(0,"nz-spin",3)}const g=function(){return{renderSideBySide:!1}};let E=(()=>{class i{constructor(e,o,a,d){this.monacoService=e,this.editorService=o,this.changeDetectorRef=a,this.notificationService=d,this.disposables=[],this.subscriptions=[],this.opening=!0}get showCodeEditor(){return!this.opening&&!this.isDiffMode}get showDiffEditor(){return!this.opening&&this.isDiffMode}get isDiffMode(){var e,o;return!!(null===(o=null===(e=this.request)||void 0===e?void 0:e.options)||void 0===o?void 0:o.diff)}ngOnInit(){this.subscriptions.push(this.editor.onChangeRequest.subscribe(e=>{this.request=e,this.opening=!0,this.changeDetectorRef.detectChanges(),this.handleRequest()})),this.subscriptions.push(this.editorService.state.subscribe(e=>{var o;null===(o=this.codeEditor)||void 0===o||o.layout()}))}ngOnDestroy(){this.disposables.forEach(e=>e.dispose()),this.subscriptions.forEach(e=>e.unsubscribe()),this.codeEditor&&this.monacoService.onDisposeEditor(this.codeEditor)}onCreateEditor(e){this.monacoService.onCreateEditor(this.codeEditor=e),this.handleRequest()}onCreateDiffEditor(e){this.diffEditor=e,this.monacoService.onCreateEditor(e.getModifiedEditor()),this.handleRequest()}handleRequest(){return(0,l.mG)(this,void 0,void 0,function*(){if(!this.codeEditor||!this.diffEditor||!this.request)return;const e=this.request.options||{};try{yield this.monacoService.open({uri:this.request.uri,editor:this.codeEditor,position:e.position})}catch(o){this.notificationService.publishError(o)}finally{this.opening=!1,this.changeDetectorRef.detectChanges()}this.handleDiffOptions(e)})}handleDiffOptions(e){if(e.diff){const o=this.codeEditor.getModel();this.diffEditor.setModel({original:monaco.editor.createModel(e.diff,o.getLanguageId()),modified:monaco.editor.createModel(o.getValue(),o.getLanguageId())}),this.diffEditor.updateOptions({readOnly:this.codeEditor.getRawOptions().readOnly}),this.diffEditor.getModifiedEditor().focus()}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.UD),t.Y36(c.GX),t.Y36(t.sBO),t.Y36(c.gq))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ide-code-editor"]],inputs:{editor:"editor"},decls:3,vars:5,consts:[[3,"hidden","ready"],[3,"hidden","options","ready"],["class","center","nzSize","large",4,"ngIf"],["nzSize","large",1,"center"]],template:function(e,o){1&e&&(t.TgZ(0,"nge-monaco-editor",0),t.NdJ("ready",function(d){return o.onCreateEditor(d)}),t.qZA(),t.TgZ(1,"nge-monaco-diff-editor",1),t.NdJ("ready",function(d){return o.onCreateDiffEditor(d)}),t.qZA(),t.YNc(2,p,1,0,"nz-spin",2)),2&e&&(t.Q6J("hidden",!o.showCodeEditor),t.xp6(1),t.Q6J("hidden",!o.showDiffEditor)("options",t.DdM(4,g)),t.xp6(1),t.Q6J("ngIf",o.opening))},directives:[r.RI,r.fW,f.O5,u.W],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%;position:relative}.center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"],changeDetection:0}),i})(),m=(()=>{class i{constructor(){this.component=E}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,u.j,r.vS]]}),i})()}}]);