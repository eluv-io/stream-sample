!function(e){function webpackJsonpCallback(t){for(var r,i,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)i=o[u],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return n.push.apply(n,l||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(i=!1)}i&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var t={},a={0:0},n=[];function __webpack_require__(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,a){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(a,n,function(t){return e[t]}.bind(null,n));return a},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="";var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=webpackJsonpCallback,r=r.slice();for(var o=0;o<r.length;o++)webpackJsonpCallback(r[o]);var s=i;n.push([1407,1]),checkDeferredModules()}({1407:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(28),o=a.n(i),s=a(23),c=a.n(s),l=a(24),u=a.n(l),p=a(25),d=a.n(p),h=a(26),f=a.n(h),m=a(27),g=a.n(m),v=(a(592),a(1)),b=a.n(v),y=a(119),x=a(146),M=a(16),_=a.n(M),w=a(0),k=a.n(w),S=a(571),C=function(){var e=o()(r.a.mark(function _callee(){var e,t,a,n;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.ElvClient.FromConfigurationUrl({configUrl:"https://main.net955304.contentfabric.io/config",viewOnly:!0});case 2:return e=r.sent,t=e.GenerateWallet(),a=t.GenerateMnemonic(),n=t.AddAccountFromMnemonic({mnemonic:a}),r.next=8,e.SetSigner({signer:n});case 8:return r.abrupt("return",e);case 9:case"end":return r.stop()}},_callee)}));return function InitializeClient(){return e.apply(this,arguments)}}(),E=function(){var e=o()(r.a.mark(function _callee2(){var e,t;return r.a.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(e=["aes-128"],"function"==typeof window.navigator.requestMediaKeySystemAccess){a.next=4;break}return console.log("requestMediaKeySystemAccess not available"),a.abrupt("return",e);case 4:return a.prev=4,t=[{initDataTypes:["cenc"],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"'}],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"'}]}],a.next=8,navigator.requestMediaKeySystemAccess("com.widevine.alpha",t);case 8:e.push("widevine"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),console.log("No Widevine support detected");case 14:return a.abrupt("return",e);case 15:case"end":return a.stop()}},_callee2,null,[[4,11]])}));return function AvailableDRMs(){return e.apply(this,arguments)}}(),L=function(){var e=o()(r.a.mark(function _callee3(e){var t,a,n,i,o,s,c,l,u;return r.a.wrap(function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.client,a=e.versionHash,n=e.drm,i=t.utils.DecodeVersionHash(a),32===(o=i.objectId).length){r.next=4;break}throw new Error("Invalid version hash");case 4:return r.prev=4,r.next=7,t.ContentObjectMetadata({versionHash:a});case 7:return s=r.sent,r.next=10,t.PlayoutOptions({versionHash:a,protocols:["dash","hls"],drms:n?[n]:[]});case 10:return c=r.sent,r.next=13,t.Rep({versionHash:a,rep:"player_background",channelAuth:!0});case 13:return l=r.sent,r.next=16,t.GenerateStateChannelToken({objectId:o});case 16:return u=r.sent,r.abrupt("return",{metadata:s,playoutOptions:c,posterUrl:l,authToken:u});case 20:throw r.prev=20,r.t0=r.catch(4),console.error("Failed to load content:"),console.error(r.t0),new Error("Failed to load content");case 25:case"end":return r.stop()}},_callee3,null,[[4,20]])}));return function LoadVideo(t){return e.apply(this,arguments)}}();var T=a(240),I=a.n(T),D=a(178),P=a.n(D),z=a(343),A=a.n(z),j=a(235),N=a.n(j),G=a(1415),H=a(1417),V=a(1413),q=function(e){function LineGraph(){return c()(this,LineGraph),d()(this,f()(LineGraph).call(this))}return g()(LineGraph,e),u()(LineGraph,[{key:"render",value:function render(){return b.a.createElement(G.a,{theme:H.a.material,maxDomain:{y:this.props.max},minDomain:{y:0},height:200,width:200},b.a.createElement(V.a,{style:{data:{stroke:this.props.color},parent:{border:"1px solid #ccc"}},data:this.props.data}))}}]),LineGraph}(b.a.Component),O=function(e){function Video(e){var t;return c()(this,Video),(t=d()(this,f()(Video).call(this,e))).state=t.GetInitialState(),t.metricsTimer=null,t.streamInfo,t.sessionStartTime=0,t.maxPointsToChart=30,t.InitializeVideo=t.InitializeVideo.bind(_()(t)),t.SetupDashCharts=t.SetupDashCharts.bind(_()(t)),t.UpdateMetrics=t.UpdateMetrics.bind(_()(t)),t.StopMetricsInterval=t.StopMetricsInterval.bind(_()(t)),t.GetTimeForPlot=t.GetTimeForPlot.bind(_()(t)),t}return g()(Video,e),u()(Video,[{key:"GetInitialState",value:function GetInitialState(){return{chartsEnabled:!1,bufferData:[],bitrateData:[],latencyData:[],buffer:{color:"#00589d",label:"Video Buffer Level"},bitrate:{color:"#ff7900",label:"Video Bitrate (kbps)"},latency:{color:"#329d61",label:"Video Latency (ms)"}}}},{key:"InitializeVideo",value:function InitializeVideo(e){if(e){var t=this.props.playoutOptions.playoutUrl;if("hls"===this.props.videoType){t=N()(t).addSearch("player_profile","hls-js").toString();var a=new P.a;a.loadSource(t),a.attachMedia(e),function SetupHLSCharts(e){var t,a;t={t0:performance.now(),load:[],buffer:[],video:[],level:[],bitrate:[]},e.on(P.a.Events.MEDIA_ATTACHED,function(){bufferingIdx=-1,t.video.push({time:performance.now()-t.t0,type:"Media attached"})}),e.on(P.a.Events.FRAG_PARSING_INIT_SEGMENT,function(e,a){var n={time:performance.now()-t.t0,type:a.id+" init segment"};t.video.push(n)}),e.on(P.a.Events.FRAG_BUFFERED,function(n,r){var i={type:r.frag.type+" fragment",id:r.frag.level,id2:r.frag.sn,time:r.stats.trequest-t.t0,latency:r.stats.tfirst-r.stats.trequest,load:r.stats.tload-r.stats.tfirst,parsing:r.stats.tparsed-r.stats.tload,buffer:r.stats.tbuffered-r.stats.tparsed,duration:r.stats.tbuffered-r.stats.tfirst,bw:Math.round(8*r.stats.total/(r.stats.tbuffered-r.stats.trequest)),size:r.stats.total};t.load.push(i),t.bitrate.push({time:performance.now()-t.t0,bitrate:i.bw,duration:r.frag.duration,level:n.id}),void 0===e.bufferTimer&&(t.buffer.push({time:0,buffer:0,pos:0}),e.bufferTimer=window.setInterval(checkBuffer,100));var o=r.stats.tfirst-r.stats.trequest,s=r.stats.tparsed-r.stats.tload,c=r.stats.tbuffered-r.stats.trequest,l=Math.round(8*r.stats.length/(r.stats.tbuffered-r.stats.tfirst));a.fragBuffered?(a.fragMinLatency=Math.min(a.fragMinLatency,o),a.fragMaxLatency=Math.max(a.fragMaxLatency,o),a.fragMinProcess=Math.min(a.fragMinProcess,c),a.fragMaxProcess=Math.max(a.fragMaxProcess,c),a.fragMinKbps=Math.min(a.fragMinKbps,l),a.fragMaxKbps=Math.max(a.fragMaxKbps,l),a.autoLevelCappingMin=Math.min(a.autoLevelCappingMin,e.autoLevelCapping),a.autoLevelCappingMax=Math.max(a.autoLevelCappingMax,e.autoLevelCapping),a.fragBuffered++):(a.fragMinLatency=a.fragMaxLatency=o,a.fragMinProcess=a.fragMaxProcess=c,a.fragMinKbps=a.fragMaxKbps=l,a.fragBuffered=1,a.fragBufferedBytes=0,a.autoLevelCappingMin=a.autoLevelCappingMax=e.autoLevelCapping,this.sumLatency=0,this.sumKbps=0,this.sumProcess=0,this.sumParsing=0),a.fraglastLatency=o,this.sumLatency+=o,a.fragAvgLatency=Math.round(this.sumLatency/a.fragBuffered),a.fragLastProcess=c,this.sumProcess+=c,this.sumParsing+=s,a.fragAvgProcess=Math.round(this.sumProcess/a.fragBuffered),a.fragLastKbps=l,this.sumKbps+=l,a.fragAvgKbps=Math.round(this.sumKbps/a.fragBuffered),a.fragBufferedBytes+=r.stats.total,a.fragparsingKbps=Math.round(8*a.fragBufferedBytes/this.sumParsing),a.fragparsingMs=Math.round(this.sumParsing),a.autoLevelCappingLast=e.autoLevelCapping})}(a)}else{var n=A.a.MediaPlayer().create();if("widevine"===this.props.drm){var r=this.props.playoutOptions.drms.widevine.licenseServers[0];n.setProtectionData({"com.widevine.alpha":{serverURL:r,httpRequestHeaders:{Authorization:"Bearer ".concat(this.props.authToken)},withCredentials:!1}})}n.on(A.a.MediaPlayer.events.CAN_PLAY,function(){return n.setTextTrack(-1)}),n.initialize(e,t),this.sessionStartTime=(new Date).getTime()/1e3,this.SetupDashCharts(n)}}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.StopMetricsInterval()}},{key:"SetupDashCharts",value:function SetupDashCharts(e){var t=this;e.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED,function(){t.StopMetricsInterval(),t.metricsTimer=setInterval(function(){t.UpdateMetrics("video",e)},1e3)}),e.on(dashjs.MediaPlayer.events.PERIOD_SWITCH_COMPLETED,function(e){t.streamInfo=e.toStreamInfo})}},{key:"StopMetricsInterval",value:function StopMetricsInterval(){this.metricsTimer&&(clearInterval(this.metricsTimer),this.metricsTimer=null)}},{key:"GetTimeForPlot",value:function GetTimeForPlot(){var e=(new Date).getTime()/1e3;return Math.max(e-this.sessionStartTime,0)}},{key:"UpdateMetrics",value:function UpdateMetrics(e,t){var a,n,r,i,o,s=t.getDashMetrics(),c=t.getDashAdapter();s&&this.streamInfo&&(o=this.streamInfo.index,i=s.getCurrentRepresentationSwitch(e,!0),a=s.getCurrentBufferLevel(e,!0),n=i?Math.round(c.getBandwidthForRepresentation(i.to,o)/1e3):NaN);var l=function CalculateHTTPMetrics(e,t){var a={},n={},r={},i=t.slice(-20).filter(function(t){return t.responsecode>=200&&t.responsecode<300&&"MediaSegment"===t.type&&t._stream===e&&!!t._mediaduration}).slice(-4);if(i.length>0){var o=i.map(function(e){return Math.abs(e.tresponse.getTime()-e.trequest.getTime())/1e3});a[e]={average:o.reduce(function(e,t){return e+t})/o.length,high:o.reduce(function(e,t){return e<t?t:e}),low:o.reduce(function(e,t){return e<t?e:t}),count:o.length};var s=i.map(function(e){return Math.abs(e._tfinish.getTime()-e.tresponse.getTime())/1e3});n[e]={average:s.reduce(function(e,t){return e+t})/s.length,high:s.reduce(function(e,t){return e<t?t:e}),low:s.reduce(function(e,t){return e<t?e:t}),count:s.length};var c=i.map(function(e){return e._mediaduration});return r[e]={average:c.reduce(function(e,t){return e+t})/s.length/n[e].average,high:c.reduce(function(e,t){return e<t?t:e})/n[e].low,low:c.reduce(function(e,t){return e<t?e:t})/n[e].high,count:c.length},{latency:a,download:n,ratio:r}}return null}(e,s.getHttpRequests(e));r=parseFloat(l.latency[e].average.toFixed(2)),this.setState(function(e){return{bufferData:e.bufferData.concat(a),latencyData:e.latencyData.concat(r),bitrateData:e.bitrateData.concat(n)}})}},{key:"render",value:function render(){var e=this.state.bufferData,t=this.state.latencyData,a=this.state.bitrateData,n=Math.max.apply(Math,I()(e))+5,r=Math.max.apply(Math,I()(t))+.05,i=Math.max.apply(Math,I()(a))+1e3,o=b.a.createElement("div",null,b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{data:e,color:this.state.bufferColor,max:n})),b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{data:t,color:this.state.latencyColor,max:r})),b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{data:a,color:this.state.bitrateColor,max:i})));return b.a.createElement("div",{className:"video-container"},b.a.createElement("h1",null,this.props.metadata.name),b.a.createElement("video",{poster:this.props.posterUrl,crossOrigin:"anonymous",ref:this.InitializeVideo,muted:!1,autoPlay:!0,controls:!0,preload:"auto"}),b.a.createElement("div",null,o))}}]),Video}(b.a.Component);O.propTypes={authToken:k.a.string,drm:k.a.string,metadata:k.a.object,playoutOptions:k.a.object.isRequired,posterUrl:k.a.string,videoType:k.a.string.isRequired};var F=O,B=a(173),R=a(585),U=a(588),Z=function Format(e){return"hls"===e?"HLS":"aes-128"===e?"AES-128":e.charAt(0).toUpperCase()+e.slice(1)},K=function(e){function Controls(e){var t;return c()(this,Controls),(t=d()(this,f()(Controls).call(this,e))).state={loading:!0,versionHash:"hq__5DS92kGeb5v3ktMLaDBNxFnAjshM92APZ98SydiczP7vPguFuyJ4Pgz3rL7EZt1TD1Ks5jHW96",videoType:"hls",video:void 0,availableDRMs:[],drm:"aes-128"},t.LoadVideo=t.LoadVideo.bind(_()(t)),t}return g()(Controls,e),u()(Controls,[{key:"componentDidMount",value:function(){var e=o()(r.a.mark(function _callee(){var e;return r.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:return e=t.sent,this.setState({availableDRMs:e}),t.next=6,this.LoadVideo();case 6:case"end":return t.stop()}},_callee,this)}));return function componentDidMount(){return e.apply(this,arguments)}}()},{key:"LoadVideo",value:function(){var e=o()(r.a.mark(function _callee2(){var e,t,a,n,i;return r.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(this.state.versionHash){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,this.setState({loading:!0,video:void 0}),r.next=6,L({client:this.props.client,versionHash:this.state.versionHash,drm:this.state.drm});case 6:e=r.sent,t=e.metadata,a=e.playoutOptions,n=e.posterUrl,i=e.authToken,this.setState({loading:!1,videoType:Object.keys(a)[0],video:{metadata:t,playoutOptions:a,posterUrl:n,authToken:i}}),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(2),this.setState({error:r.t0});case 17:case"end":return r.stop()}},_callee2,this,[[2,14]])}));return function LoadVideo(){return e.apply(this,arguments)}}()},{key:"DrmSelector",value:function DrmSelector(){var e=this;if(this.state.loading)return null;var t=this.state.availableDRMs.map(function(e){return[Z(e),e]});return b.a.createElement("div",{className:"selection"},b.a.createElement("label",{htmlFor:"drm"},"DRM"),b.a.createElement(B.a,{options:t,selected:this.state.drm,onChange:function onChange(t){e.state.drm!==t&&e.setState({drm:t},e.LoadVideo)},className:"secondary"}))}},{key:"TypeSelector",value:function TypeSelector(){var e=this;if(this.state.loading)return null;var t=Object.keys(this.state.video.playoutOptions).map(function(e){return[Z(e),e]});return b.a.createElement("div",{className:"selection"},b.a.createElement("label",{htmlFor:"protocol"},"Protocol"),b.a.createElement(B.a,{options:t,selected:this.state.videoType,onChange:function onChange(t){return e.setState({videoType:t})},className:"secondary"}))}},{key:"VersionHashEntry",value:function VersionHashEntry(){var e=this;return b.a.createElement("div",{className:"version-hash-entry"},b.a.createElement("input",{type:"text",placeholder:"Version Hash",value:this.state.versionHash,onChange:function onChange(t){return e.setState({versionHash:t.target.value})},onKeyPress:Object(x.c)(function(){return e.LoadVideo()})}),b.a.createElement(R.a,{onClick:this.LoadVideo},"Load Content"))}},{key:"ErrorMessage",value:function ErrorMessage(){return this.state.error?b.a.createElement("div",{className:"error-message"},this.state.error.message):null}},{key:"Video",value:function Video(){return this.state.loading?null:b.a.createElement(F,{key:"video-".concat(this.state.videoType),authToken:this.state.video.authToken,drm:this.state.drm,metadata:this.state.video.metadata,playoutOptions:this.state.video.playoutOptions[this.state.videoType],posterUrl:this.state.video.posterUrl,videoType:this.state.videoType})}},{key:"render",value:function render(){return b.a.createElement("div",{className:"controls-container"},this.VersionHashEntry(),this.ErrorMessage(),this.Video(),b.a.createElement(U.a,{loading:this.state.loading&&!this.state.error,fullPage:!0},b.a.createElement("div",{className:"controls"},b.a.createElement("div",{className:"control-block"},b.a.createElement("h4",null,"Stream Options"),this.DrmSelector(),this.TypeSelector()))))}}]),Controls}(b.a.Component);K.propTypes={client:k.a.object.isRequired};var W=K,J=a(586),Q=a.n(J),Y=a(587),$=a.n(Y),X=function(e){function App(e){var t;return c()(this,App),(t=d()(this,f()(App).call(this,e))).state={client:void 0},t}return g()(App,e),u()(App,[{key:"componentDidMount",value:function(){var e=o()(r.a.mark(function _callee(){return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.client){e.next=2;break}return e.abrupt("return");case 2:return e.t0=this,e.next=5,C();case 5:e.t1=e.sent,e.t2={client:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:case"end":return e.stop()}},_callee,this)}));return function componentDidMount(){return e.apply(this,arguments)}}()},{key:"SourceLink",value:function SourceLink(){return b.a.createElement("a",{className:"source-link",href:"https://github.com/eluv-io/stream-sample",target:"_blank"},b.a.createElement(x.a,{className:"github-icon",icon:$.a}),"Source available on GitHub")}},{key:"App",value:function App(){return this.state.client?b.a.createElement(W,{client:this.state.client}):b.a.createElement(x.b,{loading:!0,fullPage:!0})}},{key:"render",value:function render(){return b.a.createElement("div",{className:"app-container"},b.a.createElement("header",null,b.a.createElement(x.a,{className:"logo",icon:Q.a}),b.a.createElement("h1",null,"Video Streaming Sample")),b.a.createElement("main",null,this.App()),b.a.createElement("footer",null,this.SourceLink()))}}]),App}(b.a.Component);Object(y.render)(b.a.createElement(X,null),document.getElementById("app"))},586:function(e,t,a){e.exports=a.p+"eeafcca569c1513b9c073c2c11b9b74d.png"},587:function(e,t){e.exports='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>'},592:function(e,t,a){var n=a(593);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(44)(n,r);n.locals&&(e.exports=n.locals)},593:function(e,t,a){(e.exports=a(43)(!1)).push([e.i,'*{box-sizing:border-box}html,body{background-color:#fff;color:#222;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;height:100%;margin:0;padding:0}h1{font-size:28px;font-weight:bold;margin:0}h2{font-size:24px;font-weight:bold;margin:0}h3{font-size:20px;font-weight:normal;margin:0}h3.header-with-loader{align-items:center;display:flex;height:30px;justify-content:space-between}h4{color:#222;font-size:16px;font-weight:normal;margin:8px 0 4px}a{text-decoration:none}a,a:visited{color:#555}a.link{display:block}a.image-link{display:flex}ul{display:flex;list-style-type:none;margin:0;padding:0}ul li{display:inline}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+") no-repeat 98% 50%;border:1px solid #ccc;border-radius:0;cursor:pointer;font-size:16px;height:32px;padding:0 0 0 4px;width:250px}input{height:32px}input,textarea,pre{border:1px solid #ddd;padding:0 4px}pre{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;margin:0;overflow:auto;padding:12px 8px;white-space:pre-wrap;word-wrap:break-word}.-elv-copyable{cursor:pointer}.app{color:#222;height:100%}.app-container{display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;height:100%;min-height:100%}header{align-items:center;display:flex;padding:8px 16px}header .logo{width:auto}header h1{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6c6c6c;font-size:24px;font-weight:normal;margin-left:32px;padding-top:8px}main{display:flex;height:100%;justify-content:center;width:100%}footer{color:#8c8c8c;display:flex;justify-content:flex-end;padding:16px}.source-link{align-items:center;border:1px solid #aaa;border-radius:3px;display:flex;font-size:14px;padding:8px 16px;width:auto}.source-link .github-icon{height:20px;margin-right:8px;width:20px}.source-link:hover{background-color:#f5f5f5}.version-hash-entry{align-items:center;display:flex;margin-top:24px}.version-hash-entry input{color:#6c6c6c;flex-grow:1;font-size:18px;height:40px;margin-right:8px;padding-left:8px}.version-hash-entry .-elv-button{height:40px;width:175px}.error-message{color:#f33;font-size:16px;padding:16px;text-align:center}.controls-container{display:flex;flex-direction:column;height:100%;width:80%}.controls-container .controls{display:flex;flex-wrap:wrap;margin-top:16px}.controls-container .control-block{border:1px solid #ddd;border-radius:3px;display:inline-block;margin:0 8px 8px 0;padding:16px 24px 0}.controls-container h4{font-size:16px;margin:0;text-align:center}.controls-container .selection{align-items:center;display:flex;margin:16px 0}.controls-container .selection label{width:100px}.controls-container .selection .-elv-tab-container{margin:0}.controls-container .selection .-elv-tab{font-size:14px;text-align:center;width:120px}.controls-container .selection .-elv-tab.secondary.selected{background:#1b73e8;color:#fff}.video-container{display:flex;flex-direction:column;justify-content:center}.video-container h1{font-size:24px;font-weight:normal;margin:24px 0;text-align:center}.video-container video{background-color:#000;cursor:pointer;height:100%;max-height:50vh;width:100%}\n',""])},822:function(e,t){},824:function(e,t){},864:function(e,t){},865:function(e,t){},916:function(e,t){}});
