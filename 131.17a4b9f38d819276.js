"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[131],{8131:(f,a,r)=>{r.r(a),r.d(a,{MediaEditorModule:()=>h});var c=r(6019),s=r(9048),d=r(3562),e=r(3668);function p(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"img",4),e.ALo(2,"safe"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("src",e.xi3(2,1,n.url,"url"),e.LSH)}}function g(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"video",5),e._UZ(2,"source",4),e.ALo(3,"safe"),e._uU(4," Sorry, your browser doesn't support embedded videos. "),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("src",e.xi3(3,1,n.url,"url"),e.LSH)}}function u(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"audio",5),e._UZ(2,"source",4),e.ALo(3,"safe"),e._uU(4," Sorry, your browser doesn't support embedded audio. "),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("src",e.xi3(3,1,n.url,"url"),e.LSH)}}function m(t,i){1&t&&(e.ynx(0),e.TgZ(1,"h2"),e._uU(2,"Unsupported media type"),e.qZA(),e.BQk())}let l=(()=>{class t{constructor(n,o){this.fileService=n,this.changeDetectorRef=o,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.editor.onChangeRequest.subscribe(n=>{const o=this.fileService.find(n.uri);switch(this.url=null==o?void 0:o.url,d.nB.extname(n.uri.path)){case"svg":case"png":case"jpeg":case"gif":case"tiff":this.type="image";break;case"mov":case"mp4":case"mpeg":this.type="video";break;case"mpeg":case"wav":case"mp3":this.type="audio"}this.changeDetectorRef.markForCheck()}))}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.Ip),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ide-media-editor"]],inputs:{editor:"editor"},decls:6,vars:4,consts:[[1,"media-editor"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"src"],["controls",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,p,3,4,"ng-container",2),e.YNc(3,g,5,4,"ng-container",2),e.YNc(4,u,5,4,"ng-container",2),e.YNc(5,m,3,0,"ng-container",3),e.BQk(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngSwitch",o.type),e.xp6(1),e.Q6J("ngSwitchCase","image"),e.xp6(1),e.Q6J("ngSwitchCase","video"),e.xp6(1),e.Q6J("ngSwitchCase","audio"))},directives:[c.RF,c.n9,c.ED],pipes:[s.yl],styles:[".media-editor[_ngcontent-%COMP%]{height:100%;position:relative;background-position:0px 0px,10px 10px;background-size:20px 20px;background-image:linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%,#eee 100%),linear-gradient(45deg,#eee 25%,transparent 25%,transparent 75%,#eee 75%,#eee 100%);display:flex;justify-content:center;align-items:center}.media-editor[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .media-editor[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{width:100%;height:100%}.media-editor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .media-editor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-editor[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;max-width:90%;max-height:90%;height:auto;margin:auto;border-radius:16px;background-color:transparent}.media-editor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}"],changeDetection:0}),t})(),h=(()=>{class t{constructor(){this.component=l}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,s.ZZ]]}),t})()}}]);