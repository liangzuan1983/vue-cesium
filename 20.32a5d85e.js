(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3qLl":function(s,t,a){"use strict";a.r(t);var e=a("oFOg"),r=a.n(e);for(var l in e)"default"!==l&&function(s){a.d(t,s,function(){return e[s]})}(l);var v=a("Kdti"),n=a("JFUb"),i=Object(n.a)(r.a,v.a,v.b,!1,null,null,null);i.options.__file="docs/md/en/wmts-imagery-provider.md",t.default=i.exports},Kdti:function(s,t,a){"use strict";a.d(t,"a",function(){return e}),a.d(t,"b",function(){return r});var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("WebMapTileServiceImageryProvider")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("Add a WMTSImageryLayer to CesiumViewer")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready,layerAdded:s.layerAdded}},[a("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("wmts-imagery-provider",{attrs:{url:s.url,wmtsStyle:s.style,tileMatrixSetID:s.tileMatrixSetID,credit:s.credit,subdomains:s.subdomains,tilingScheme:s.tilingScheme,tileMatrixLabels:s.tileMatrixLabels,alpha:s.alpha,brightness:s.brightness,contrast:s.contrast,token:s.token}})],1),s._v(" "),a("imagery-layer",{ref:"layerText",attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("wmts-imagery-provider",{attrs:{url:s.urlText,wmtsStyle:s.style,tileMatrixSetID:s.tileMatrixSetID,credit:s.credit,subdomains:s.subdomains,tilingScheme:s.tilingScheme,tileMatrixLabels:s.tileMatrixLabels,token:s.token}})],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v("alpha")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("brightness")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("contrast")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}}),s._v(" "),a("span",[s._v("switch url")]),s._v(" "),a("md-select",{attrs:{placeholder:"switch url"},model:{value:s.url,callback:function(t){s.url=t},expression:"url"}},s._l(s.options,function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[s._v("\n            "+s._s(t.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("wmts-imagery-provider")]),this._v(" used to load the WMTS service layer, the example will load the service of the TIANDITU.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@layerAdded")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"layerAdded"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("wmts-imagery-provider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":wmtsStyle")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"style"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tileMatrixSetID")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tileMatrixSetID"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":credit")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"credit"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":subdomains")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"subdomains"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tilingScheme")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tilingScheme"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tileMatrixLabels")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tileMatrixLabels"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"token"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("wmts-imagery-provider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"layerText"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("wmts-imagery-provider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"urlText"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":wmtsStyle")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"style"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tileMatrixSetID")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tileMatrixSetID"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":credit")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"credit"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":subdomains")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"subdomains"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tilingScheme")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tilingScheme"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":tileMatrixLabels")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tileMatrixLabels"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"token"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("wmts-imagery-provider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch url"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"switch url"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("urlText")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'http://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'default'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tileMatrixSetID")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'c'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tileMatrixLabels")]),s._v(": ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'8'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'9'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'10'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'11'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'12'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'13'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'14'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'15'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'16'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'17'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'18'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'19'")]),s._v("],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("credit")]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v("'天地图WMTS服务'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("subdomains")]),s._v(" : ["),a("span",{attrs:{class:"hljs-string"}},[s._v("'t0'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t1'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t2'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t3'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t4'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t5'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t6'")]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v("'t7'")]),s._v("],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tilingScheme")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'天地图全球影像地图服务（经纬度投影）'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v("\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'天地图全球矢量地图服务（经纬度投影）'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'http://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v("\n        }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("token")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'436ce7e50d27eede2f2929307e6b33c0'")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.imageryLayers.removeAll()\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tilingScheme = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GeographicTilingScheme()\n      },\n      layerAdded () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.layerText.imageryLayer) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n          viewer.imageryLayers.raiseToTop("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.layerText.imageryLayer)\n        }\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.。")])]),s._v(" "),a("tr",[a("td",[s._v("format")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'image/jpeg'")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The MIME type for images to retrieve from the server.")])]),s._v(" "),a("tr",[a("td",[s._v("layer")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("The layer name for WMTS requests.")])]),s._v(" "),a("tr",[a("td",[s._v("style")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("The style name for WMTS requests.")])]),s._v(" "),a("tr",[a("td",[s._v("tileMatrixSetID")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("The identifier of the TileMatrixSet to use for WMTS requests.")])]),s._v(" "),a("tr",[a("td",[s._v("tileMatrixLabels")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level.")])]),s._v(" "),a("tr",[a("td",[s._v("clock")]),s._v(" "),a("td",[s._v("Clock")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("optional A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified.")])]),s._v(" "),a("tr",[a("td",[s._v("times")]),s._v(" "),a("td",[s._v("TimeIntervalCollection")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.")])]),s._v(" "),a("tr",[a("td",[s._v("dimensions")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A object containing static dimensions and their values.")])]),s._v(" "),a("tr",[a("td",[s._v("tileWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("256")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The tile width in pixels.")])]),s._v(" "),a("tr",[a("td",[s._v("tileHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("256")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The tile height in pixels.")])]),s._v(" "),a("tr",[a("td",[s._v("tilingScheme")]),s._v(" "),a("td",[s._v("TilingScheme")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet.")])]),s._v(" "),a("tr",[a("td",[s._v("rectangle")]),s._v(" "),a("td",[s._v("Rectangle")]),s._v(" "),a("td",[s._v("Rectangle.MAX_VALUE")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The rectangle covered by the layer.")])]),s._v(" "),a("tr",[a("td",[s._v("minimumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The minimum level-of-detail supported by the imagery provider.")])]),s._v(" "),a("tr",[a("td",[s._v("maximumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Ellipsoid")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid. If not specified, the WGS84 ellipsoid is used.")])]),s._v(" "),a("tr",[a("td",[s._v("credit")]),s._v(" "),a("td",[s._v("Credit")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("subdomains")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("'abc'")])]),s._v(" "),a("tr",[a("td",[s._v("token")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when TiandituImageryLayer is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td",[s._v("TileProviderError")]),s._v(" "),a("td",[s._v("Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.")])])])])}];e._withStripped=!0},Sat7:function(s,t,a){s.exports=a("3qLl")},oFOg:function(s,t,a){var e,r,l;r=[t],void 0===(l="function"==typeof(e=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{url:"http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",urlText:"http://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",style:"default",tileMatrixSetID:"c",tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],credit:"天地图WMTS服务",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:void 0,options:[{label:"天地图全球影像地图服务（经纬度投影）",value:"http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles"},{label:"天地图全球矢量地图服务（经纬度投影）",value:"http://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles"}],alpha:1,brightness:1,contrast:1,token:"436ce7e50d27eede2f2929307e6b33c0"}},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.cesiumInstance=s,a.imageryLayers.removeAll(),this.tilingScheme=new t.GeographicTilingScheme},layerAdded:function(){if(this.$refs.layerText.imageryLayer){var s=this.cesiumInstance.viewer;s.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)}}}},s.exports=t.default})?e.apply(t,r):e)||(s.exports=l)}}]);