(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"57kt":function(s,a,t){"use strict";t.r(a);var v=t("EzT4"),r=t.n(v);for(var l in v)"default"!==l&&function(s){t.d(a,s,function(){return v[s]})}(l);var n=t("G8v5"),_=t("JFUb"),e=Object(_.a)(r.a,n.a,n.b,!1,null,null,null);e.options.__file="docs/md/zh/singletile-imagery-provider.md",a.default=e.exports},EzT4:function(s,a,t){var v,r,l;r=[a],void 0===(l="function"==typeof(v=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{url:"https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg",alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},s.exports=a.default})?v.apply(a,r):v)||(s.exports=l)},G8v5:function(s,a,t){"use strict";t.d(a,"a",function(){return v}),t.d(a,"b",function(){return r});var v=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Singletile影像Provider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加Singletile图片到场景作底图")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[t("singletile-imagery-provider",{attrs:{url:s.url}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("透明度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("亮度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("对比度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("singletile-imagery-provider")]),this._v("用该图层组件添加单个图片做为影像底图，仅支持经纬度投影，图片宽高比最好为2：1，否则会有拉伸。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ..")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v("指定服务地址。")])]),s._v(" "),t("tr",[t("td",[s._v("rectangle")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("图层的矩形范围,此矩形限制了影像可见范围。")])]),s._v(" "),t("tr",[t("td",[s._v("credit")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定服务的描述信息")])]),s._v(" "),t("tr",[t("td",[s._v("ellipsoid")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("参考椭球体。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。")])])])])}];v._withStripped=!0},QtNN:function(s,a,t){s.exports=t("57kt")}}]);