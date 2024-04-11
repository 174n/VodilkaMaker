(function(){var t={432:function(t,e,i){var s={"./en.json":174,"./ru.json":600};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=432},191:function(t,e,i){"use strict";var s=i(471),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-head"},[e("nav",{staticClass:"navbar is-primary"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[e("strong",[t._v(t._s(t.$t("title")))])]),t._m(0)]),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v(t._s(t.$t("lang")))]),e("div",{staticClass:"navbar-dropdown is-right"},[e("a",{staticClass:"navbar-item",on:{click:function(e){return t.changeLocale("ru")}}},[e("span",{staticClass:"flag flag-ru"}),t._v(" Русский ")]),e("a",{staticClass:"navbar-item",on:{click:function(e){return t.changeLocale("en")}}},[e("span",{staticClass:"flag flag-us"}),t._v(" English ")])])])])])])])]),e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v(t._s(t.$t("title")))]),e("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("subtitle")))]),e("div",{staticClass:"badges"},t._l(t.badges,(function(t){return e("a",{key:t.link,attrs:{href:t.link}},[e("img",{attrs:{src:t.img,alt:t.alt}})])})),0)])]),e("div",{staticClass:"hero-foot"},[e("nav",{staticClass:"tabs is-boxed"},[e("div",{staticClass:"container"},[e("ul",t._l(t.tabs,(function(i,s){return e("li",{key:s,class:{"is-active":t.active===s}},[e("a",{on:{click:function(e){return t.changeTab(s)}}},[t._v(t._s(t.$t(i.title)))])])})),0)])])])]),t._l(t.tabs,(function(i,s){return e("section",{directives:[{name:"show",rawName:"v-show",value:t.active===s,expression:"active === i"}],key:s,staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.$t(i.title)))]),e("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t(i.subtitle)))]),i.component?e(i.component,{tag:"component"}):t._e()],1)])})),e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v(t._s(t.$t("title")))]),t._v(". The "),e("a",{attrs:{href:"https://github.com/174n/VodilkaMaker"}},[t._v("source code")]),t._v(" is licensed "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". ")])])])],2)},n=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenuHeroA"}},[e("span"),e("span"),e("span")])}],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"editor"},[t.editor.image?e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},[e("RegionCapturer",{ref:"capturer",attrs:{regions:t.editor.cams,filename:t.editor.filename,ratio:t.editor.ratio}})],1),e("div",{staticClass:"column"},[e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v(t._s(t.$t("editor.cameras")))])]),e("div",{staticClass:"message-body"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("editor.ratio")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.editor.ratio,expression:"editor.ratio",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",step:"0.1"},domProps:{value:t.editor.ratio},on:{input:function(e){e.target.composing||t.$set(t.editor,"ratio",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"buttons"},[t.editor.image?e("a",{staticClass:"button is-primary is-fullwidth",on:{click:function(e){return t.addCam({})}}},[e("p",[t._v(t._s(t.$t("editor.addCamera")))])]):t._e()]),e("div",{staticClass:"cameras"},t._l(t.editor.cams,(function(i,s){return e("div",{key:s,staticClass:"camera"},[e("div",{staticClass:"inline"},[e("span",{staticClass:"bd-color",style:{background:i.color},on:{click:function(e){return t.colorizeCam(s)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.title,expression:"cam.title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:i.title},on:{input:function(e){e.target.composing||t.$set(i,"title",e.target.value)}}}),e("button",{staticClass:"button",on:{click:function(e){return t.rmCam(s)}}},[t._v("✖️")])]),e("div",{staticClass:"inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.order,expression:"cam.order"}],staticClass:"setting-input input",attrs:{type:"number"},domProps:{value:i.order},on:{input:function(e){e.target.composing||t.$set(i,"order",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.x,expression:"cam.x"}],staticClass:"setting-input input",attrs:{type:"number"},domProps:{value:i.x},on:{input:function(e){e.target.composing||t.$set(i,"x",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.y,expression:"cam.y"}],staticClass:"setting-input input",attrs:{type:"number"},domProps:{value:i.y},on:{input:function(e){e.target.composing||t.$set(i,"y",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.size,expression:"cam.size"}],staticClass:"setting-input input",attrs:{type:"number"},domProps:{value:i.size},on:{input:function(e){e.target.composing||t.$set(i,"size",e.target.value)}}})])])})),0)])]),t._e()])]):e("div",{staticClass:"notification is-warning"},[t._v(t._s(t.$t("editor.noImage")))])])},l=[],o=i(353),c=function(){var t=this,e=t._self._c;return e("div",{ref:"canvas",staticClass:"canvas"},[t.editor.image?e("img",{ref:"image",attrs:{src:t.editor.image}}):t._e(),t._l(t.regions,(function(i,s){return e("div",{key:s,ref:"regions",refInFor:!0,class:["region",{grabbing:parseInt(t.activeRegion)===s}],style:{width:`${i.size}px`,height:i.size*t.ratio+"px",top:`${i.y}px`,left:`${i.x}px`,backgroundColor:i.color},attrs:{"data-id":s}},[t._v(" "+t._s(i.title)+" ")])}))],2)},d=[],u={props:{regions:Array,ratio:Number,filename:String},computed:{editor(){return this.$deepModel("editor")}},data(){return{activeRegion:!1}},mounted(){this.$refs.canvas.addEventListener("mouseup",(()=>{this.activeRegion=!1})),this.$refs.canvas.addEventListener("mousemove",this.throttle((t=>{if(!this.activeRegion)return;t.preventDefault();const e=this.regions[this.activeRegion];e.x=t.clientX-e.initialX,e.y=t.clientY-e.initialY;const i=this.$refs.image;e.x=e.x>=0?e.x:e.x-e.size>=i.width?i.width:0,e.y=e.y>=0?e.y:0}),30))},watch:{regions(){this.$nextTick((()=>{const t=this.$refs.regions?.slice(-1)?.[0];t&&t.addEventListener("mousedown",(t=>{const e=this.regions[t.target.getAttribute("data-id")];e.initialX=t.clientX-e.x,e.initialY=t.clientY-e.y,this.activeRegion=t.target.getAttribute("data-id")}))}))}}},m=u,p=i(656),v=(0,p.A)(m,c,d,!1,null,"78462216",null),g=v.exports,f={components:{RegionCapturer:g},data(){return{activeCam:!1}},methods:{...(0,o.PY)(["addCam","rmCam","colorizeCam"])},computed:{editor(){return this.$deepModel("editor")}}},h=f,C=(0,p.A)(h,r,l,!1,null,"dbdc44ac",null),b=C.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"placer"},[t.editor.cams&&t.editor.cams.length>0?e("div",{staticClass:"columns"},[e("div",{ref:"wrapper",staticClass:"column is-two-thirds"},[e("div",{staticClass:"canvas-wrapper",style:{height:t.placer.canvasScale*t.placer.canvHeight+"px"}},[e("div",{staticClass:"canvas",style:{width:`${t.placer.canvWidth}px`,height:`${t.placer.canvHeight}px`,transform:`scale(${t.placer.canvasScale})`}},[e("div",{staticClass:"overlay",style:{backgroundImage:t.settings.overlay.image?`url(${t.settings.overlay.image})`:""}}),t._l(t.placedCams,(function(i,s){return e("div",{key:s,staticClass:"cam",style:{width:i.t_width,height:i.t_height,left:i.t_x,top:i.t_y}},[t._v(" "+t._s(i.title)+" ")])}))],2)])]),e("div",{staticClass:"column"},[e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v(t._s(t.$t("placer.settings")))])]),e("div",{staticClass:"message-body"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.canvWidth")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.placer.canvWidth,expression:"placer.canvWidth",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",step:"10"},domProps:{value:t.placer.canvWidth},on:{input:function(e){e.target.composing||t.$set(t.placer,"canvWidth",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.canvHeight")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.placer.canvHeight,expression:"placer.canvHeight",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",step:"10"},domProps:{value:t.placer.canvHeight},on:{input:function(e){e.target.composing||t.$set(t.placer,"canvHeight",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.camSize")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.placer.size,expression:"placer.size",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",step:"10"},domProps:{value:t.placer.size},on:{input:function(e){e.target.composing||t.$set(t.placer,"size",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.paddingX")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.placer.paddingX,expression:"placer.paddingX",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.placer.paddingX},on:{input:function(e){e.target.composing||t.$set(t.placer,"paddingX",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.paddingY")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.placer.paddingY,expression:"placer.paddingY",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.placer.paddingY},on:{input:function(e){e.target.composing||t.$set(t.placer,"paddingY",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])])])]):e("div",{staticClass:"notification is-warning"},[t._v(" "+t._s(t.$t("placer.noCams"))+" ")])])},y=[],$=i(380);const x=(0,$.A)();var w=x,k={name:"CameraPlacer",computed:{editor(){return this.$store.state.editor},settings(){return this.$store.state.settings},placedCams(){return this.$store.getters.placedCams},placer(){return this.$deepModel("placer")},adjustedCams(){const t=this.editor.cams,e=Math.round(t.length/2),i=this.placer.size,s=this.placer.size*this.editor.ratio,a=(this.placer.canvHeight-e*s-2*this.placer.paddingY)/(e-1);return t.map(((t,n)=>(t.t_width=`${i}px`,t.t_height=`${s}px`,t.t_x=`${n>=e?this.placer.canvWidth-i-this.placer.paddingX:this.placer.paddingX}px`,t.t_y=`${n>=e?(n-e)*s+a*(n-e)+this.placer.paddingY:n*s+a*n+this.placer.paddingY}px`,t)))}},methods:{async setCanvasScale(){if(await this.$nextTick(),!this.$refs.wrapper)return;let t=this.$refs.wrapper.getBoundingClientRect().width-24;this.placer.canvasScale=t/this.placer.canvWidth}},mounted(){this.setCanvasScale(),w.on("tab-changed",this.setCanvasScale),window.addEventListener("resize",this.setCanvasScale)},beforeDestroy(){window.removeEventListener("resize",this.setCanvasScale),w.off("tab-changed",this.setCanvasScale)}},E=k,S=(0,p.A)(E,_,y,!1,null,"70bf281f",null),T=S.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"settings"},[e("div",{staticClass:"grid is-gap-3"},[e("div",{staticClass:"cell"},[e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.importExport.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.importExport.subtitle")))]),e("div",{staticClass:"content"},[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"file"},[e("label",{staticClass:"file-label"},[e("input",{ref:"importFile",staticClass:"file-input",attrs:{type:"file",accept:".json, application/json"}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-label"},[t._v(" "+t._s(t.$t("settings.importExport.importBtn"))+" ")])])])])]),e("div",{staticClass:"level-item"},[e("button",{staticClass:"button is-primary",on:{click:t.exportSettings}},[t._v(" "+t._s(t.$t("settings.importExport.exportBtn"))+" ")])])])])]),e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.filenames.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.filenames.subtitle")))]),e("div",{staticClass:"content"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("editor.filename")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.editor.filename,expression:"editor.filename"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.editor.filename},on:{input:function(e){e.target.composing||t.$set(t.editor,"filename",e.target.value)}}})])]),t.editor.main.enable?t._e():e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("placer.filename")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.placer.filename,expression:"placer.filename"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.placer.filename},on:{input:function(e){e.target.composing||t.$set(t.placer,"filename",e.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("settings.overlay.filename")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.overlay.filename,expression:"settings.overlay.filename"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.settings.overlay.filename},on:{input:function(e){e.target.composing||t.$set(t.settings.overlay,"filename",e.target.value)}}})])])])])]),e("div",{staticClass:"cell is-vertical"},[e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.overlay.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.overlay.subtitle")))]),e("div",{staticClass:"content"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("settings.overlay.file")))]),e("label",{staticClass:"file-label"},[e("input",{ref:"overlayImage",staticClass:"file-input",attrs:{type:"file"}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[t._v("📁")]),e("span",{staticClass:"file-label"},[t._v(t._s(t.$t("chooseFile")))])])]),t.settings.overlay.image?e("img",{staticClass:"overlay",attrs:{src:t.settings.overlay.image,alt:"overlay"}}):t._e()])])]),e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.editor.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.editor.subtitle")))]),e("div",{staticClass:"select-file"},[e("div",{staticClass:"file"},[e("label",{staticClass:"file-label"},[e("input",{ref:"imagefile",staticClass:"file-input",attrs:{type:"file",accept:"image/*"}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[t._v("📁")]),e("span",{staticClass:"file-label"},[t._v(t._s(t.$t("chooseFile")))])])])]),e("code",[t._v(' ffmpeg -i "'+t._s(t.editor.filename)+'" -ss 00:00:10 -vframes 1 out.png ')]),t.editor.image?e("img",{ref:"image",attrs:{src:t.editor.image}}):t._e()])])]),e("div",{staticClass:"cell"},[e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.intro.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.intro.subtitle")))]),e("div",{staticClass:"field"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.intro.enable,expression:"settings.intro.enable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.settings.intro.enable)?t._i(t.settings.intro.enable,null)>-1:t.settings.intro.enable},on:{change:function(e){var i=t.settings.intro.enable,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=null,r=t._i(i,n);s.checked?r<0&&t.$set(t.settings.intro,"enable",i.concat([n])):r>-1&&t.$set(t.settings.intro,"enable",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(t.settings.intro,"enable",a)}}}),t._v(" "+t._s(t.$t("settings.intro.enable"))+" ")])]),t.settings.intro.enable?e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("settings.intro.filename")))]),e("div",{staticClass:"control inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.intro.filename,expression:"settings.intro.filename"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.settings.intro.filename},on:{input:function(e){e.target.composing||t.$set(t.settings.intro,"filename",e.target.value)}}})])]):t._e()]),e("article",{staticClass:"box"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("settings.cut.title")))]),e("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("settings.cut.subtitle")))]),e("div",{staticClass:"content"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("settings.cut.main")))]),e("div",{staticClass:"field is-grouped"},[e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.cut.main.start,expression:"settings.cut.main.start"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("settings.cut.startTime")},domProps:{value:t.settings.cut.main.start},on:{input:function(e){e.target.composing||t.$set(t.settings.cut.main,"start",e.target.value)}}})]),e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.cut.main.end,expression:"settings.cut.main.end"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("settings.cut.endTime")},domProps:{value:t.settings.cut.main.end},on:{input:function(e){e.target.composing||t.$set(t.settings.cut.main,"end",e.target.value)}}})])])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(t._s(t.$t("settings.cut.cams")))]),e("div",{staticClass:"field is-grouped"},[e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.cut.cams.start,expression:"settings.cut.cams.start"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("settings.cut.startTime")},domProps:{value:t.settings.cut.cams.start},on:{input:function(e){e.target.composing||t.$set(t.settings.cut.cams,"start",e.target.value)}}})]),e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.cut.cams.end,expression:"settings.cut.cams.end"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("settings.cut.endTime")},domProps:{value:t.settings.cut.cams.end},on:{input:function(e){e.target.composing||t.$set(t.settings.cut.cams,"end",e.target.value)}}})])])])])])])])])},A=[],P={computed:{settings(){return this.$deepModel("settings")},exportState(){return this.$store.getters.exportState},editor(){return this.$deepModel("editor")},placer(){return this.$deepModel("placer")}},methods:{exportSettings(){this.downloadFile(`vodilka_maker-${(new Date).getTime()}.json`,this.exportState)},async importSettings(){let t;try{const e=this.$refs.importFile.files[0],i=await this.readFileAsync(e);t=JSON.parse(i)}catch(e){throw e}t&&this.$store.commit("importState",t)},async addOverlayImage(){this.settings.overlay.image=null;const t=this.$refs.overlayImage.files[0];this.settings.overlay.image=await this.toBase64(t)},async setEditorImage(){const t=this.$refs.imagefile.files[0];this.editor.image=await this.toBase64(t)}},mounted(){this.$refs.imagefile.addEventListener("change",this.setEditorImage),this.$refs.overlayImage.addEventListener("change",this.addOverlayImage),this.$refs.importFile.addEventListener("change",this.importSettings)},beforeDestroy(){this.$refs.imagefile.removeEventListener("change",this.setEditorImage),this.$refs.overlayImage.removeEventListener("change",this.addOverlayImage),this.$refs.importFile.removeEventListener("change",this.importSettings)}},N=P,O=(0,p.A)(N,L,A,!1,null,"8d077bca",null),z=O.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t.editor.cams.length>0?e("div",{staticClass:"code"},[e("div",{staticClass:"code-block"},[e("code",[t._v(t._s(t.code))])]),e("button",{staticClass:"button is-primary",on:{click:t.codeToClipboard}},[t._v(" "+t._s(t.$t("copyToClipboard"))+" ")])]):e("div",{staticClass:"notification is-warning"},[t._v(t._s(t.$t("code.noCode")))])])},I=[],R={computed:{...(0,o.aH)(["editor","placer","settings"]),placedCams(){return this.$store.getters.placedCams},code(){if(!this.placedCams)return!1;const t=this.settings.intro.enable?`-i "${this.settings.intro.filename}"`:"",e=this.settings.intro.enable?"[pre];[3:v][pre]concat=n=2:v=1":"",i=this.placedCams.map(((t,e)=>`[0:v]crop=${t.size}:${Math.floor(t.size*this.editor.ratio)}:${t.x}:${t.y},scale=${Math.floor(t.t_width.slice(0,-2))}x${Math.floor(t.t_height.slice(0,-2))}[out${e+1}]`)),s=this.placedCams.map(((t,e)=>`[${0===e?"1:v":"tmp"+e}][out${e+1}] overlay=shortest=1:x=${t.t_x.slice(0,-2)}:y=${t.t_y.slice(0,-2)}[tmp${e+1}]`)),a=["-c:v libx264 output.mp4"],n=this.settings.cut.main,r=this.settings.cut.cams,l=(n.start?`-ss ${n.start}`:"")+(n.end?` -to ${n.end}`:""),o=(r.start?`-ss ${r.start}`:"")+(r.end?` -to ${r.end}`:""),c=`${o} -i "${this.editor.filename}" ${l} -i "${this.placer.filename}" -i "${this.settings.overlay.filename}" ${t}`;return`ffmpeg ${c}\n          -filter_complex "${i.join(";")};${s.join(";")};[tmp${this.placedCams.length}][2:v]overlay=0:0${e}" ${a.join(" ")}`}},methods:{codeToClipboard(){this.copyToClipboard(this.code)}}},j=R,F=(0,p.A)(j,M,I,!1,null,"e9574c38",null),U=F.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"video-calibration"},[e("div",{staticClass:"file"},[e("label",{staticClass:"file-label"},[e("input",{ref:"videfile",staticClass:"file-input",attrs:{type:"file",accept:"video/*"}}),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[t._v(" 📁 ")]),e("span",{staticClass:"file-label"},[t._v(" "+t._s(t.$t("chooseFile"))+" ")])])])]),e("video",{directives:[{name:"show",rawName:"v-show",value:t.videoDataURL,expression:"videoDataURL"}],ref:"videoElem",staticClass:"video",attrs:{controls:"",src:t.videoDataURL}}),e("input",{attrs:{type:"number",step:"0.1"},domProps:{value:t.currentTime},on:{input:t.setTime}}),t._v(" "+t._s(t.percentPlayed)+" ")])},D=[];function V(t,e){let i;return function(){const s=arguments,a=this;i||(t.apply(a,s),i=!0,setTimeout((()=>i=!1),e))}}function H(t){return t&&"object"===typeof t&&!Array.isArray(t)}function X(t,...e){if(!e.length)return t;const i=e.shift();if(H(t)&&H(i))for(const s in i)H(i[s])?(t[s]||Object.assign(t,{[s]:{}}),X(t[s],i[s])):Object.assign(t,{[s]:i[s]});return X(t,...e)}var B={methods:{getRandomColor(){const t="0123456789abcdef";let e="#";for(var i=0;i<6;i++)e+=t[Math.floor(16*Math.random())];return e},throttle:V,toBase64(t){return new Promise(((e,i)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(s.result),s.onerror=t=>i(t)}))},downloadFile(t,e){var i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),i.setAttribute("download",t),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)},readFileAsync(t){return new Promise(((e,i)=>{let s=new FileReader;s.onload=()=>{e(s.result)},s.onerror=i,s.readAsText(t)}))},copyToClipboard(t){const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},W={data(){return{videoDataURL:!1,currentTime:0,duration:0}},computed:{percentPlayed(){return Math.round(100/this.duration*this.currentTime*100)/100||0}},methods:{async videoInputChanged(){const t=this.$refs.videfile.files[0];this.videoDataURL=await URL.createObjectURL(t)},updateTime:V((function(){this.currentTime=Math.round(100*this.$refs.videoElem.currentTime)/100}),200),setDuration(){this.duration=this.$refs.videoElem.duration},setTime(t){this.$refs.videoElem.currentTime=t.target.value}},mounted(){this.$refs.videoElem.addEventListener("timeupdate",this.updateTime),this.$refs.videoElem.addEventListener("durationchange",this.setDuration),this.$refs.videfile.addEventListener("change",this.videoInputChanged)},beforeDestroy(){this.$refs.videoElem.removeEventListener("timeupdate",this.updateTime),this.$refs.videoElem.removeEventListener("durationchange",this.setDuration),this.$refs.videfile.removeEventListener("change",this.videoInputChanged)}},q=W,J=(0,p.A)(q,Y,D,!1,null,"1a6d2078",null),G=J.exports,K={name:"app",components:{CameraEditor:b,CameraPlacer:T,CodeGenerator:U,Settings:z,VideoTimeCalibration:G},data(){return{tabs:[{title:"editor.title",subtitle:"editor.subtitle",component:b},{title:"placer.title",subtitle:"placer.subtitle",component:T},{title:"settings.title",subtitle:"settings.subtitle",component:z},{title:"code.title",subtitle:"code.subtitle",component:U}],active:0,badges:[{img:"https://img.shields.io/github/stars/174n/VodilkaMaker.svg?style=flat-square",link:"https://github.com/174n/VodilkaMaker/stargazers",alt:"GitHub stargazers"},{img:"https://img.shields.io/github/issues/174n/VodilkaMaker.svg?style=flat-square",link:"https://github.com/174n/VodilkaMaker/issues",alt:"GitHub issues"},{img:"https://snyk.io/test/github/174n/VodilkaMaker/badge.svg?style=flat-square",link:"https://snyk.io/test/github/174n/VodilkaMaker",alt:"Known Vulnerabilities"}]}},methods:{changeLocale(t){this.$i18n.locale=t},changeTab(t){w.emit("tab-changed"),this.active=t}},created(){const t=window.navigator.userLanguage||window.navigator.language;-1!==["ru","en"].indexOf(t)&&this.changeLocale(t)}},Z=K,Q=(0,p.A)(Z,a,n,!1,null,null,null),tt=Q.exports,et=i(765);function it(){const t=i(432),e={};return t.keys().forEach((i=>{const s=i.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){const a=s[1];e[a]=t(i)}})),e}s["default"].use(et.A);var st=new et.A({locale:{NODE_ENV:"production",BASE_URL:""}.VUE_APP_I18N_LOCALE||"en",fallbackLocale:{NODE_ENV:"production",BASE_URL:""}.VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:it()}),at=i(40);s["default"].use(o.Ay);var nt=new o.Ay.Store({state:{settings:{removeBlackBlink:!1,overlay:{filename:"borders.png",image:!1},cut:{main:{start:"",to:""},cams:{start:"",to:""},concat:{main:[],cams:[]}},intro:{enable:!1,filename:""}},editor:{cams:[],main:{enable:!1,width:1280,height:720,x:0,y:0},filename:"filename.mp4",image:!1,ratio:.7},placer:{filename:"main_cam.mp4",canvWidth:1920,canvHeight:1080,canvasScale:.1,size:400,paddingX:60,paddingY:60}},mutations:{VUEX_DEEP_SET:at.VUEX_DEEP_SET,addCam(t,{title:e=!1,x:i=0,y:s=0,size:a=400,color:n}){t.editor.cams.push({title:e||`${st.t("editor.cam")}_${t.editor.cams.length}`,x:i,y:s,size:a,order:t.editor.cams.length,color:n||B.methods.getRandomColor(),listener:!1})},rmCam(t,e){t.editor.cams.splice(e,1)},colorizeCam(t,e){t.editor.cams[e].color=B.methods.getRandomColor()},importState(t,e){X(t,e)}},actions:{},getters:{placedCams:t=>{const e=Math.round(t.editor.cams.length/2),i=t.placer.size,s=t.placer.size*t.editor.ratio,a=(t.placer.canvHeight-e*s-2*t.placer.paddingY)/((1===e?2:e)-1);return t.editor.cams.sort(((t,e)=>t.order-e.order)).map(((n,r)=>(n.t_width=`${i}px`,n.t_height=`${s}px`,n.t_x=`${r>=e?t.placer.canvWidth-i-t.placer.paddingX:t.placer.paddingX}px`,n.t_y=`${r>=e?(r-e)*s+a*(r-e)+t.placer.paddingY:r*s+a*r+t.placer.paddingY}px`,n)))},exportState:t=>JSON.stringify(t,null,2)}});s["default"].use(at),s["default"].config.productionTip=!1,s["default"].mixin(B),new s["default"]({i18n:st,store:nt,render:t=>t(tt)}).$mount("#app")},174:function(t){"use strict";t.exports=JSON.parse('{"title":"VodilkaMaker","subtitle":"Create complete vodilka from your screen recordings","lang":"Language","copyToClipboard":"Copy to clipboard","chooseFile":"Choose a file…","editor":{"title":"Crop out cameras","subtitle":"You should select all the player\'s camera regions here which will be used in the sequence later","cameras":"Cameras","addCamera":"Add camera","cam":"cam","filename":"Players\' cameras footage","ratio":"Camera aspect ratio","noImage":"Set cameras image in the settings","main":{"title":"Main window","subtitle":"Main window in the same footage","enable":"Enable","width":"Width","height":"Height"}},"placer":{"title":"Final cameras placement","subtitle":"Choose the locations for the cameras to be placed","settings":"Settings","camSize":"Cam size","paddingX":"Horizontal padding","paddingY":"Vertical padding","canvWidth":"Canvas width","canvHeight":"Canvas height","filename":"Main camera filename","noCams":"You can\'t configure cameras placement because no cameras specified"},"settings":{"title":"Settings","subtitle":"Ajustments for the final video result","importExport":{"title":"Import/Export","subtitle":"Import/Export current settings","importBtn":"Import","exportBtn":"Export"},"overlay":{"title":"Overlay","subtitle":"Overlay that goes ons top of the final video","filename":"Overlay\'s filename","file":"Overlay image"},"cut":{"title":"Cut inputs","subtitle":"Set start and end time of input files","startTime":"Start time","endTime":"End time","main":"Main camera","cams":"Players\' cameras"},"intro":{"title":"Insert intro","subtitle":"Check the checkbox if you want to insert intro video at the beginning","enable":"Insert intro","filename":"Intro filename"},"filenames":{"title":"Set filenames","subtitle":"Set all the filenames here"},"editor":{"title":"Set cameras image","subtitle":"Yeah, that\'s right"}},"code":{"title":"Ffmpeg code","subtitle":"Code generated for the ffmpeg","noCode":"No code is generated because no cameras specified"},"videoTime":{"title":"Video time calibration","subtitle":"Find start and end times here"}}')},600:function(t){"use strict";t.exports=JSON.parse('{"title":"VodilkaMaker","subtitle":"Создайте полную водилку из ваших записей экрана","lang":"Язык","copyToClipboard":"Копировать в буфер обмена","chooseFile":"Выберите файл…","editor":{"title":"Вырезать камеры","subtitle":"Вы должны выбрать все области камер игроков, которые будут использоваться в видео позже","cameras":"Камеры","addCamera":"Добавить камеру","cam":"камера","filename":"Имя файла с камерами игроков","ratio":"Соотношение сторон у камер","noImage":"Установите изображение камеры в настройках"},"placer":{"title":"Финальное размещение камер","subtitle":"Выберите места расположения камер для размещения камер","settings":"Настройки","camSize":"Размер камеры","paddingX":"Горизонтальный отступ","paddingY":"Вертикальный отступ","canvWidth":"Ширтна холста","canvHeight":"Высота холста","filename":"Имя файла главной камеры","noCams":"Вы не можете настроить размещение камер, потому что камеры не указаны"},"settings":{"title":"Настройки","subtitle":"Настройки для финального видео","importExport":{"title":"Импорт/Экспорт","subtitle":"Импорт/Экспорт текущих настроек","importBtn":"Импорт","exportBtn":"Экспорт"},"overlay":{"title":"Оверлей","subtitle":"Оверлей, который пойдет поверх финального видео","filename":"Имя файла оверлея","file":"Файл оверлея"},"cut":{"title":"Обрезать входы","subtitle":"Установить время начала и длительность входных файлов","startTime":"Время начала","endTime":"Время конца","main":"Главная камера","cams":"Камеры игроков"},"intro":{"title":"Вставить интро","subtitle":"Установите флажок, если вы хотите вставить вступительное интро в начале","enable":"Вставить интро","filename":"Имя файла интро"},"filenames":{"title":"Имена файлов","subtitle":"Установка имен всех файлов"},"editor":{"title":"Установить изображение с камер","subtitle":"Да, это верно"}},"code":{"title":"Код для Ffmpeg","subtitle":"Код, сгенерированный для ffmpeg","noCode":"Код не генерируется, потому что камеры не указаны"}}')}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,n){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],n=t[d][2];for(var l=!0,o=0;o<s.length;o++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[o])}))?s.splice(o--,1):(l=!1,n<r&&(r=n));if(l){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,a,n]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,r=s[0],l=s[1],o=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(o)var d=o(i)}for(e&&e(s);c<r.length;c++)n=r[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},s=self["webpackChunkvodilka_maker"]=self["webpackChunkvodilka_maker"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(191)}));s=i.O(s)})();
//# sourceMappingURL=app-legacy.36e2e5a4.js.map