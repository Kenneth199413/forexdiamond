
        (function(){
            djConfig = {
              modulePaths: {
                "dojo": "/cashback/plugins/system/dojoloader/dojo/1.6.1/dojo",
                "dijit": "/cashback/plugins/system/dojoloader/dojo/1.6.1/dijit",
                "dojox": "/cashback/plugins/system/dojoloader/dojo/1.6.1/dojox"
              }
              
              ,
              scopeMap: [
                [ "dojo", "odojo" ],
                [ "dijit", "odijit" ],
                [ "dojox", "odojox" ]
              ]
            };
            if(typeof odojo === "undefined"){
        /*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

(function(){var _1=null;if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){var _2="",_3="",_4="",_5={},_6={};_1=_1||djConfig.scopeMap;for(var i=0;i<_1.length;i++){var _7=_1[i];_2+="var "+_7[0]+" = {}; "+_7[1]+" = "+_7[0]+";"+_7[1]+"._scopeName = '"+_7[1]+"';";_3+=(i==0?"":",")+_7[0];_4+=(i==0?"":",")+_7[1];_5[_7[0]]=_7[1];_6[_7[1]]=_7[0];}eval(_2+"dojo._scopeArgs = ["+_4+"];");dojo._scopePrefixArgs=_3;dojo._scopePrefix="(function("+_3+"){";dojo._scopeSuffix="})("+_4+")";dojo._scopeMap=_5;dojo._scopeMapRev=_6;}(function(){if(typeof this["loadFirebugConsole"]=="function"){this["loadFirebugConsole"]();}else{this.console=this.console||{};var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];var i=0,tn;while((tn=cn[i++])){if(!console[tn]){(function(){var _8=tn+"";console[_8]=("log" in console)?function(){var a=Array.apply({},arguments);a.unshift(_8+":");console["log"](a.join(" "));}:function(){};console[_8]._fake=true;})();}}}if(typeof dojo=="undefined"){dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};}var d=dojo;if(typeof dijit=="undefined"){dijit={_scopeName:"dijit"};}if(typeof dojox=="undefined"){dojox={_scopeName:"dojox"};}if(!d._scopeArgs){d._scopeArgs=[dojo,dijit,dojox];}d.global=this;d.config={isDebug:false,debugAtAllCosts:false};var _9=typeof djConfig!="undefined"?djConfig:typeof dojoConfig!="undefined"?dojoConfig:null;if(_9){for(var c in _9){d.config[c]=_9[c];}}dojo.locale=d.config.locale;var _a="$Rev: 24595 $".match(/\d+/);dojo.version={major:1,minor:6,patch:1,flag:"",revision:_a?+_a[0]:NaN,toString:function(){with(d.version){return major+"."+minor+"."+patch+flag+" ("+revision+")";}}};if(typeof OpenAjax!="undefined"){OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());}var _b,_c,_d={};for(var i in {toString:1}){_b=[];break;}dojo._extraNames=_b=_b||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];_c=_b.length;dojo._mixin=function(_e,_f){var _10,s,i;for(_10 in _f){s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}if(_c&&_f){for(i=0;i<_c;++i){_10=_b[i];s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}}return _e;};dojo.mixin=function(obj,_11){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo._getProp=function(_12,_13,_14){var obj=_14||d.global;for(var i=0,p;obj&&(p=_12[i]);i++){if(i==0&&d._scopeMap[p]){p=d._scopeMap[p];}obj=(p in obj?obj[p]:(_13?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_15,_16,_17){var _18=_15.split("."),p=_18.pop(),obj=d._getProp(_18,true,_17);return obj&&p?(obj[p]=_16):undefined;};dojo.getObject=function(_19,_1a,_1b){return d._getProp(_19.split("."),_1a,_1b);};dojo.exists=function(_1c,obj){return d.getObject(_1c,false,obj)!==undefined;};dojo["eval"]=function(_1d){return d.global.eval?d.global.eval(_1d):eval(_1d);};d.deprecated=d.experimental=function(){};})();(function(){var d=dojo,_1e;d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_1f){var mp=d._modulePrefixes;return !!(mp[_1f]&&mp[_1f].value);},_getModulePrefix:function(_20){var mp=d._modulePrefixes;if(d._moduleHasPrefix(_20)){return mp[_20].value;}return _20;},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(_21,_22,cb){var uri=((_21.charAt(0)=="/"||_21.match(/^\w+:/))?"":d.baseUrl)+_21;try{_1e=_22;return !_22?d._loadUri(uri,cb):d._loadUriAndCheck(uri,_22,cb);}catch(e){console.error(e);return false;}finally{_1e=null;}};dojo._loadUri=function(uri,cb){if(d._loadedUrls[uri]){return true;}d._inFlightCount++;var _23=d._getText(uri,true);if(_23){d._loadedUrls[uri]=true;d._loadedUrls.push(uri);if(cb){_23=/^define\(/.test(_23)?_23:"("+_23+")";}else{_23=d._scopePrefix+_23+d._scopeSuffix;}if(!d.isIE){_23+="\r\n//@ sourceURL="+uri;}var _24=d["eval"](_23);if(cb){cb(_24);}}if(--d._inFlightCount==0&&d._postLoad&&d._loaders.length){setTimeout(function(){if(d._inFlightCount==0){d._callLoaded();}},0);}return !!_23;};dojo._loadUriAndCheck=function(uri,_25,cb){var ok=false;try{ok=d._loadUri(uri,cb);}catch(e){console.error("failed loading "+uri+" with error: "+e);}return !!(ok&&d._loadedModules[_25]);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&d._inFlightCount==0&&mll.length){d._callLoaded();}};dojo.unloaded=function(){var mll=d._unloaders;while(mll.length){(mll.pop())();}};d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _26=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_26.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_27){d._onto(d._loaders,obj,_27);if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){d._callLoaded();}};var dca=d.config.addOnLoad;if(dca){d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);}dojo._modulesLoaded=function(){if(d._postLoad){return;}if(d._inFlightCount>0){console.warn("files still in flight!");return;}d._callLoaded();};dojo._callLoaded=function(){if(typeof setTimeout=="object"||(d.config.useXDomain&&d.isOpera)){setTimeout(d.isAIR?function(){d.loaded();}:d._scopeName+".loaded();",0);}else{d.loaded();}};dojo._getModuleSymbols=function(_28){var _29=_28.split(".");for(var i=_29.length;i>0;i--){var _2a=_29.slice(0,i).join(".");if(i==1&&!d._moduleHasPrefix(_2a)){_29[0]="../"+_29[0];}else{var _2b=d._getModulePrefix(_2a);if(_2b!=_2a){_29.splice(0,i,_2b);break;}}}return _29;};dojo._global_omit_module_check=false;dojo.loadInit=function(_2c){_2c();};dojo._loadModule=dojo.require=function(_2d,_2e){_2e=d._global_omit_module_check||_2e;var _2f=d._loadedModules[_2d];if(_2f){return _2f;}var _30=d._getModuleSymbols(_2d).join("/")+".js";var _31=!_2e?_2d:null;var ok=d._loadPath(_30,_31);if(!ok&&!_2e){throw new Error("Could not load '"+_2d+"'; last tried '"+_30+"'");}if(!_2e&&!d._isXDomain){_2f=d._loadedModules[_2d];if(!_2f){throw new Error("symbol '"+_2d+"' is not defined after loading '"+_30+"'");}}return _2f;};dojo.provide=function(_32){_32=_32+"";return (d._loadedModules[_32]=d.getObject(_32,true));};dojo.platformRequire=function(_33){var _34=_33.common||[];var _35=_34.concat(_33[d._name]||_33["default"]||[]);for(var x=0;x<_35.length;x++){var _36=_35[x];if(_36.constructor==Array){d._loadModule.apply(d,_36);}else{d._loadModule(_36);}}};dojo.requireIf=function(_37,_38){if(_37===true){var _39=[];for(var i=1;i<arguments.length;i++){_39.push(arguments[i]);}d.require.apply(d,_39);}};dojo.requireAfterIf=d.requireIf;dojo.registerModulePath=function(_3a,_3b){d._modulePrefixes[_3a]={name:_3a,value:_3b};};dojo.requireLocalization=function(_3c,_3d,_3e,_3f){d.require("dojo.i18n");d.i18n._requireLocalization.apply(d.hostenv,arguments);};var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");dojo._Url=function(){var n=null,_40=arguments,uri=[_40[0]];for(var i=1;i<_40.length;i++){if(!_40[i]){continue;}var _41=new d._Url(_40[i]+""),_42=new d._Url(uri[0]+"");if(_41.path==""&&!_41.scheme&&!_41.authority&&!_41.query){if(_41.fragment!=n){_42.fragment=_41.fragment;}_41=_42;}else{if(!_41.scheme){_41.scheme=_42.scheme;if(!_41.authority){_41.authority=_42.authority;if(_41.path.charAt(0)!="/"){var _43=_42.path.substring(0,_42.path.lastIndexOf("/")+1)+_41.path;var _44=_43.split("/");for(var j=0;j<_44.length;j++){if(_44[j]=="."){if(j==_44.length-1){_44[j]="";}else{_44.splice(j,1);j--;}}else{if(j>0&&!(j==1&&_44[0]=="")&&_44[j]==".."&&_44[j-1]!=".."){if(j==(_44.length-1)){_44.splice(j,1);_44[j-1]="";}else{_44.splice(j-1,2);j-=2;}}}}_41.path=_44.join("/");}}}}uri=[];if(_41.scheme){uri.push(_41.scheme,":");}if(_41.authority){uri.push("//",_41.authority);}uri.push(_41.path);if(_41.query){uri.push("?",_41.query);}if(_41.fragment){uri.push("#",_41.fragment);}}this.uri=uri.join("");var r=this.uri.match(ore);this.scheme=r[2]||(r[1]?"":n);this.authority=r[4]||(r[3]?"":n);this.path=r[5];this.query=r[7]||(r[6]?"":n);this.fragment=r[9]||(r[8]?"":n);if(this.authority!=n){r=this.authority.match(ire);this.user=r[3]||n;this.password=r[4]||n;this.host=r[6]||r[7];this.port=r[9]||n;}};dojo._Url.prototype.toString=function(){return this.uri;};dojo.moduleUrl=function(_45,url){var loc=d._getModuleSymbols(_45).join("/");if(!loc){return null;}if(loc.lastIndexOf("/")!=loc.length-1){loc+="/";}var _46=loc.indexOf(":");if(loc.charAt(0)!="/"&&(_46==-1||_46>loc.indexOf("/"))){loc=d.baseUrl+loc;}return new d._Url(loc,url);};})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var d=dojo;if(document&&document.getElementsByTagName){var _47=document.getElementsByTagName("script");var _48=/dojo(\.xd)?\.js(\W|$)/i;for(var i=0;i<_47.length;i++){var src=_47[i].getAttribute("src");if(!src){continue;}var m=src.match(_48);if(m){if(!d.config.baseUrl){d.config.baseUrl=src.substring(0,m.index);}var cfg=(_47[i].getAttribute("djConfig")||_47[i].getAttribute("data-dojo-config"));if(cfg){var _49=eval("({ "+cfg+" })");for(var x in _49){dojo.config[x]=_49[x];}}break;}}}d.baseUrl=d.config.baseUrl;var n=navigator;var dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);if(dua.indexOf("Opera")>=0){d.isOpera=tv;}if(dua.indexOf("AdobeAIR")>=0){d.isAIR=1;}d.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:0;d.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;d.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;d.isMac=dav.indexOf("Macintosh")>=0;var _4a=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_4a&&!dojo.isChrome){d.isSafari=parseFloat(dav.split("Version/")[1]);if(!d.isSafari||parseFloat(dav.substr(_4a+7))<=419.3){d.isSafari=2;}}if(dua.indexOf("Gecko")>=0&&!d.isKhtml&&!d.isWebKit){d.isMozilla=d.isMoz=tv;}if(d.isMoz){d.isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined;}if(document.all&&!d.isOpera){d.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;var _4b=document.documentMode;if(_4b&&_4b!=5&&Math.floor(d.isIE)!=_4b){d.isIE=_4b;}}if(dojo.isIE&&window.location.protocol==="file:"){dojo.config.ieForceActiveXXhr=true;}d.isQuirks=document.compatMode=="BackCompat";d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];d._xhrObj=function(){var _4c,_4d;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){try{_4c=new XMLHttpRequest();}catch(e){}}if(!_4c){for(var i=0;i<3;++i){var _4e=d._XMLHTTP_PROGIDS[i];try{_4c=new ActiveXObject(_4e);}catch(e){_4d=e;}if(_4c){d._XMLHTTP_PROGIDS=[_4e];break;}}}if(!_4c){throw new Error("XMLHTTP not available: "+_4d);}return _4c;};d._isDocumentOk=function(_4f){var _50=_4f.status||0,lp=location.protocol;return (_50>=200&&_50<300)||_50==304||_50==1223||(!_50&&(lp=="file:"||lp=="chrome:"||lp=="chrome-extension:"||lp=="app:"));};var _51=window.location+"";var _52=document.getElementsByTagName("base");var _53=(_52&&_52.length>0);d._getText=function(uri,_54){var _55=d._xhrObj();if(!_53&&dojo._Url){uri=(new dojo._Url(_51,uri)).toString();}if(d.config.cacheBust){uri+="";uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");}_55.open("GET",uri,false);try{_55.send(null);if(!d._isDocumentOk(_55)){var err=Error("Unable to load "+uri+" status:"+_55.status);err.status=_55.status;err.responseText=_55.responseText;throw err;}}catch(e){if(_54){return null;}throw e;}return _55.responseText;};var _56=window;var _57=function(_58,fp){var _59=_56.attachEvent||_56.addEventListener;_58=_56.attachEvent?_58:_58.substring(2);_59(_58,function(){fp.apply(_56,arguments);},false);};d._windowUnloaders=[];d.windowUnloaded=function(){var mll=d._windowUnloaders;while(mll.length){(mll.pop())();}d=null;};var _5a=0;d.addOnWindowUnload=function(obj,_5b){d._onto(d._windowUnloaders,obj,_5b);if(!_5a){_5a=1;_57("onunload",d.windowUnloaded);}};var _5c=0;d.addOnUnload=function(obj,_5d){d._onto(d._unloaders,obj,_5d);if(!_5c){_5c=1;_57("onbeforeunload",dojo.unloaded);}};})();dojo._initFired=false;dojo._loadInit=function(e){if(dojo._scrollIntervalId){clearInterval(dojo._scrollIntervalId);dojo._scrollIntervalId=0;}if(!dojo._initFired){dojo._initFired=true;if(!dojo.config.afterOnLoad&&window.detachEvent){window.detachEvent("onload",dojo._loadInit);}if(dojo._inFlightCount==0){dojo._modulesLoaded();}}};if(!dojo.config.afterOnLoad){if(document.addEventListener){document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);}else{if(window.attachEvent){window.attachEvent("onload",dojo._loadInit);if(!dojo.config.skipIeDomLoaded&&self===self.top){dojo._scrollIntervalId=setInterval(function(){try{if(document.body){document.documentElement.doScroll("left");dojo._loadInit();}}catch(e){}},30);}}}}if(dojo.isIE){try{(function(){document.namespaces.add("v","urn:schemas-microsoft-com:vml");var _5e=["*","group","roundrect","oval","shape","rect","imagedata","path","textpath","text"],i=0,l=1,s=document.createStyleSheet();if(dojo.isIE>=8){i=1;l=_5e.length;}for(;i<l;++i){s.addRule("v\\:"+_5e[i],"behavior:url(#default#VML); display:inline-block");}})();}catch(e){}}}(function(){var mp=dojo.config["modulePaths"];if(mp){for(var _5f in mp){dojo.registerModulePath(_5f,mp[_5f]);}}})();if(dojo.config.isDebug){dojo.require("dojo._firebug.firebug");}if(dojo.config.debugAtAllCosts){dojo.require("dojo._base._loader.loader_debug");dojo.require("dojo.i18n");}if(!dojo._hasResource["dojo._base.lang"]){dojo._hasResource["dojo._base.lang"]=true;dojo.provide("dojo._base.lang");(function(){var d=dojo,_60=Object.prototype.toString;dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=function(it){return _60.call(it)==="[object Function]";};dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||d.isArray(it)||d.isFunction(it));};dojo.isArrayLike=function(it){return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!d.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.extend=function(_61,_62){for(var i=1,l=arguments.length;i<l;i++){d._mixin(_61.prototype,arguments[i]);}return _61;};dojo._hitchArgs=function(_63,_64){var pre=d._toArray(arguments,2);var _65=d.isString(_64);return function(){var _66=d._toArray(arguments);var f=_65?(_63||d.global)[_64]:_64;return f&&f.apply(_63||this,pre.concat(_66));};};dojo.hitch=function(_67,_68){if(arguments.length>2){return d._hitchArgs.apply(d,arguments);}if(!_68){_68=_67;_67=null;}if(d.isString(_68)){_67=_67||d.global;if(!_67[_68]){throw (["dojo.hitch: scope[\"",_68,"\"] is null (scope=\"",_67,"\")"].join(""));}return function(){return _67[_68].apply(_67,arguments||[]);};}return !_67?_68:function(){return _68.apply(_67,arguments||[]);};};dojo.delegate=dojo._delegate=(function(){function TMP(){};return function(obj,_69){TMP.prototype=obj;var tmp=new TMP();TMP.prototype=null;if(_69){d._mixin(tmp,_69);}return tmp;};})();var _6a=function(obj,_6b,_6c){return (_6c||[]).concat(Array.prototype.slice.call(obj,_6b||0));};var _6d=function(obj,_6e,_6f){var arr=_6f||[];for(var x=_6e||0;x<obj.length;x++){arr.push(obj[x]);}return arr;};dojo._toArray=d.isIE?function(obj){return ((obj.item)?_6d:_6a).apply(this,arguments);}:_6a;dojo.partial=function(_70){var arr=[null];return d.hitch.apply(d,arr.concat(d._toArray(arguments)));};var _71=d._extraNames,_72=_71.length,_73={};dojo.clone=function(o){if(!o||typeof o!="object"||d.isFunction(o)){return o;}if(o.nodeType&&"cloneNode" in o){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}if(o instanceof RegExp){return new RegExp(o);}var r,i,l,s,_74;if(d.isArray(o)){r=[];for(i=0,l=o.length;i<l;++i){if(i in o){r.push(d.clone(o[i]));}}}else{r=o.constructor?new o.constructor():{};}for(_74 in o){s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=d.clone(s);}}if(_72){for(i=0;i<_72;++i){_74=_71[i];s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=s;}}}return r;};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _75=/\{([^\}]+)\}/g;dojo.replace=function(_76,map,_77){return _76.replace(_77||_75,d.isFunction(map)?map:function(_78,k){return d.getObject(k,false,map);});};})();}if(!dojo._hasResource["dojo._base.array"]){dojo._hasResource["dojo._base.array"]=true;dojo.provide("dojo._base.array");(function(){var _79=function(arr,obj,cb){return [(typeof arr=="string")?arr.split(""):arr,obj||dojo.global,(typeof cb=="string")?new Function("item","index","array",cb):cb];};var _7a=function(_7b,arr,_7c,_7d){var _7e=_79(arr,_7d,_7c);arr=_7e[0];for(var i=0,l=arr.length;i<l;++i){var _7f=!!_7e[2].call(_7e[1],arr[i],i,arr);if(_7b^_7f){return _7f;}}return _7b;};dojo.mixin(dojo,{indexOf:function(_80,_81,_82,_83){var _84=1,end=_80.length||0,i=0;if(_83){i=end-1;_84=end=-1;}if(_82!=undefined){i=_82;}if((_83&&i>end)||i<end){for(;i!=end;i+=_84){if(_80[i]==_81){return i;}}}return -1;},lastIndexOf:function(_85,_86,_87){return dojo.indexOf(_85,_86,_87,true);},forEach:function(arr,_88,_89){if(!arr||!arr.length){return;}var _8a=_79(arr,_89,_88);arr=_8a[0];for(var i=0,l=arr.length;i<l;++i){_8a[2].call(_8a[1],arr[i],i,arr);}},every:function(arr,_8b,_8c){return _7a(true,arr,_8b,_8c);},some:function(arr,_8d,_8e){return _7a(false,arr,_8d,_8e);},map:function(arr,_8f,_90){var _91=_79(arr,_90,_8f);arr=_91[0];var _92=(arguments[3]?(new arguments[3]()):[]);for(var i=0,l=arr.length;i<l;++i){_92.push(_91[2].call(_91[1],arr[i],i,arr));}return _92;},filter:function(arr,_93,_94){var _95=_79(arr,_94,_93);arr=_95[0];var _96=[];for(var i=0,l=arr.length;i<l;++i){if(_95[2].call(_95[1],arr[i],i,arr)){_96.push(arr[i]);}}return _96;}});})();}if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");(function(){var d=dojo,mix=d._mixin,op=Object.prototype,_97=op.toString,_98=new Function,_99=0,_9a="constructor";function err(msg,cls){throw new Error("declare"+(cls?" "+cls:"")+": "+msg);};function _9b(_9c,_9d){var _9e=[],_9f=[{cls:0,refs:[]}],_a0={},_a1=1,l=_9c.length,i=0,j,lin,_a2,top,_a3,rec,_a4,_a5;for(;i<l;++i){_a2=_9c[i];if(!_a2){err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_9d);}else{if(_97.call(_a2)!="[object Function]"){err("mixin #"+i+" is not a callable constructor.",_9d);}}lin=_a2._meta?_a2._meta.bases:[_a2];top=0;for(j=lin.length-1;j>=0;--j){_a3=lin[j].prototype;if(!_a3.hasOwnProperty("declaredClass")){_a3.declaredClass="uniqName_"+(_99++);}_a4=_a3.declaredClass;if(!_a0.hasOwnProperty(_a4)){_a0[_a4]={count:0,refs:[],cls:lin[j]};++_a1;}rec=_a0[_a4];if(top&&top!==rec){rec.refs.push(top);++top.count;}top=rec;}++top.count;_9f[0].refs.push(top);}while(_9f.length){top=_9f.pop();_9e.push(top.cls);--_a1;while(_a5=top.refs,_a5.length==1){top=_a5[0];if(!top||--top.count){top=0;break;}_9e.push(top.cls);--_a1;}if(top){for(i=0,l=_a5.length;i<l;++i){top=_a5[i];if(!--top.count){_9f.push(top);}}}}if(_a1){err("can't build consistent linearization",_9d);}_a2=_9c[0];_9e[0]=_a2?_a2._meta&&_a2===_9e[_9e.length-_a2._meta.bases.length]?_a2._meta.bases.length:1:0;return _9e;};function _a6(_a7,a,f){var _a8,_a9,_aa,_ab,_ac,_ad,_ae,opf,pos,_af=this._inherited=this._inherited||{};if(typeof _a7=="string"){_a8=_a7;_a7=a;a=f;}f=0;_ab=_a7.callee;_a8=_a8||_ab.nom;if(!_a8){err("can't deduce a name to call inherited()",this.declaredClass);}_ac=this.constructor._meta;_aa=_ac.bases;pos=_af.p;if(_a8!=_9a){if(_af.c!==_ab){pos=0;_ad=_aa[0];_ac=_ad._meta;if(_ac.hidden[_a8]!==_ab){_a9=_ac.chains;if(_a9&&typeof _a9[_a8]=="string"){err("calling chained method with inherited: "+_a8,this.declaredClass);}do{_ac=_ad._meta;_ae=_ad.prototype;if(_ac&&(_ae[_a8]===_ab&&_ae.hasOwnProperty(_a8)||_ac.hidden[_a8]===_ab)){break;}}while(_ad=_aa[++pos]);pos=_ad?pos:-1;}}_ad=_aa[++pos];if(_ad){_ae=_ad.prototype;if(_ad._meta&&_ae.hasOwnProperty(_a8)){f=_ae[_a8];}else{opf=op[_a8];do{_ae=_ad.prototype;f=_ae[_a8];if(f&&(_ad._meta?_ae.hasOwnProperty(_a8):f!==opf)){break;}}while(_ad=_aa[++pos]);}}f=_ad&&f||op[_a8];}else{if(_af.c!==_ab){pos=0;_ac=_aa[0]._meta;if(_ac&&_ac.ctor!==_ab){_a9=_ac.chains;if(!_a9||_a9.constructor!=="manual"){err("calling chained constructor with inherited",this.declaredClass);}while(_ad=_aa[++pos]){_ac=_ad._meta;if(_ac&&_ac.ctor===_ab){break;}}pos=_ad?pos:-1;}}while(_ad=_aa[++pos]){_ac=_ad._meta;f=_ac?_ac.ctor:_ad;if(f){break;}}f=_ad&&f;}_af.c=f;_af.p=pos;if(f){return a===true?f:f.apply(this,a||_a7);}};function _b0(_b1,_b2){if(typeof _b1=="string"){return this.inherited(_b1,_b2,true);}return this.inherited(_b1,true);};function _b3(cls){var _b4=this.constructor._meta.bases;for(var i=0,l=_b4.length;i<l;++i){if(_b4[i]===cls){return true;}}return this instanceof cls;};function _b5(_b6,_b7){var _b8,i=0,l=d._extraNames.length;for(_b8 in _b7){if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}for(;i<l;++i){_b8=d._extraNames[i];if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}};function _b9(_ba,_bb){var _bc,t,i=0,l=d._extraNames.length;for(_bc in _bb){t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}for(;i<l;++i){_bc=d._extraNames[i];t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}return _ba;};function _bd(_be){_b9(this.prototype,_be);return this;};function _bf(_c0,_c1){return function(){var a=arguments,_c2=a,a0=a[0],f,i,m,l=_c0.length,_c3;if(!(this instanceof a.callee)){return _c4(a);}if(_c1&&(a0&&a0.preamble||this.preamble)){_c3=new Array(_c0.length);_c3[0]=a;for(i=0;;){a0=a[0];if(a0){f=a0.preamble;if(f){a=f.apply(this,a)||a;}}f=_c0[i].prototype;f=f.hasOwnProperty("preamble")&&f.preamble;if(f){a=f.apply(this,a)||a;}if(++i==l){break;}_c3[i]=a;}}for(i=l-1;i>=0;--i){f=_c0[i];m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,_c3?_c3[i]:a);}}f=this.postscript;if(f){f.apply(this,_c2);}};};function _c5(_c6,_c7){return function(){var a=arguments,t=a,a0=a[0],f;if(!(this instanceof a.callee)){return _c4(a);}if(_c7){if(a0){f=a0.preamble;if(f){t=f.apply(this,t)||t;}}f=this.preamble;if(f){f.apply(this,t);}}if(_c6){_c6.apply(this,a);}f=this.postscript;if(f){f.apply(this,a);}};};function _c8(_c9){return function(){var a=arguments,i=0,f,m;if(!(this instanceof a.callee)){return _c4(a);}for(;f=_c9[i];++i){m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,a);break;}}f=this.postscript;if(f){f.apply(this,a);}};};function _ca(_cb,_cc,_cd){return function(){var b,m,f,i=0,_ce=1;if(_cd){i=_cc.length-1;_ce=-1;}for(;b=_cc[i];i+=_ce){m=b._meta;f=(m?m.hidden:b.prototype)[_cb];if(f){f.apply(this,arguments);}}};};function _cf(_d0){_98.prototype=_d0.prototype;var t=new _98;_98.prototype=null;return t;};function _c4(_d1){var _d2=_d1.callee,t=_cf(_d2);_d2.apply(t,_d1);return t;};d.declare=function(_d3,_d4,_d5){if(typeof _d3!="string"){_d5=_d4;_d4=_d3;_d3="";}_d5=_d5||{};var _d6,i,t,_d7,_d8,_d9,_da,_db=1,_dc=_d4;if(_97.call(_d4)=="[object Array]"){_d9=_9b(_d4,_d3);t=_d9[0];_db=_d9.length-t;_d4=_d9[_db];}else{_d9=[0];if(_d4){if(_97.call(_d4)=="[object Function]"){t=_d4._meta;_d9=_d9.concat(t?t.bases:_d4);}else{err("base class is not a callable constructor.",_d3);}}else{if(_d4!==null){err("unknown base class. Did you use dojo.require to pull it in?",_d3);}}}if(_d4){for(i=_db-1;;--i){_d6=_cf(_d4);if(!i){break;}t=_d9[i];(t._meta?_b5:mix)(_d6,t.prototype);_d7=new Function;_d7.superclass=_d4;_d7.prototype=_d6;_d4=_d6.constructor=_d7;}}else{_d6={};}_b9(_d6,_d5);t=_d5.constructor;if(t!==op.constructor){t.nom=_9a;_d6.constructor=t;}for(i=_db-1;i;--i){t=_d9[i]._meta;if(t&&t.chains){_da=mix(_da||{},t.chains);}}if(_d6["-chains-"]){_da=mix(_da||{},_d6["-chains-"]);}t=!_da||!_da.hasOwnProperty(_9a);_d9[0]=_d7=(_da&&_da.constructor==="manual")?_c8(_d9):(_d9.length==1?_c5(_d5.constructor,t):_bf(_d9,t));_d7._meta={bases:_d9,hidden:_d5,chains:_da,parents:_dc,ctor:_d5.constructor};_d7.superclass=_d4&&_d4.prototype;_d7.extend=_bd;_d7.prototype=_d6;_d6.constructor=_d7;_d6.getInherited=_b0;_d6.inherited=_a6;_d6.isInstanceOf=_b3;if(_d3){_d6.declaredClass=_d3;d.setObject(_d3,_d7);}if(_da){for(_d8 in _da){if(_d6[_d8]&&typeof _da[_d8]=="string"&&_d8!=_9a){t=_d6[_d8]=_ca(_d8,_d9,_da[_d8]==="after");t.nom=_d8;}}}return _d7;};d.safeMixin=_b9;})();}if(!dojo._hasResource["dojo._base.connect"]){dojo._hasResource["dojo._base.connect"]=true;dojo.provide("dojo._base.connect");dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target,r=t&&t.apply(this,arguments),i,lls=[].concat(ls);for(i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_dd,_de,_df){_dd=_dd||dojo.global;var f=_dd[_de];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_dd[_de]=d;}return f._listeners.push(_df);},remove:function(_e0,_e1,_e2){var f=(_e0||dojo.global)[_e1];if(f&&f._listeners&&_e2--){delete f._listeners[_e2];}}};dojo.connect=function(obj,_e3,_e4,_e5,_e6){var a=arguments,_e7=[],i=0;_e7.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_e7.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_e7.push(a[i]);}return dojo._connect.apply(this,_e7);};dojo._connect=function(obj,_e8,_e9,_ea){var l=dojo._listener,h=l.add(obj,_e8,dojo.hitch(_e9,_ea));return [obj,_e8,h,l];};dojo.disconnect=function(_eb){if(_eb&&_eb[0]!==undefined){dojo._disconnect.apply(this,_eb);delete _eb[0];}};dojo._disconnect=function(obj,_ec,_ed,_ee){_ee.remove(obj,_ec,_ed);};dojo._topics={};dojo.subscribe=function(_ef,_f0,_f1){return [_ef,dojo._listener.add(dojo._topics,_ef,dojo.hitch(_f0,_f1))];};dojo.unsubscribe=function(_f2){if(_f2){dojo._listener.remove(dojo._topics,_f2[0],_f2[1]);}};dojo.publish=function(_f3,_f4){var f=dojo._topics[_f3];if(f){f.apply(this,_f4||[]);}};dojo.connectPublisher=function(_f5,obj,_f6){var pf=function(){dojo.publish(_f5,arguments);};return _f6?dojo.connect(obj,_f6,pf):dojo.connect(obj,pf);};}if(!dojo._hasResource["dojo._base.Deferred"]){dojo._hasResource["dojo._base.Deferred"]=true;dojo.provide("dojo._base.Deferred");(function(){var _f7=function(){};var _f8=Object.freeze||function(){};dojo.Deferred=function(_f9){var _fa,_fb,_fc,_fd,_fe;var _ff=(this.promise={});function _100(_101){if(_fb){throw new Error("This deferred has already been resolved");}_fa=_101;_fb=true;_102();};function _102(){var _103;while(!_103&&_fe){var _104=_fe;_fe=_fe.next;if((_103=(_104.progress==_f7))){_fb=false;}var func=(_fc?_104.error:_104.resolved);if(func){try{var _105=func(_fa);if(_105&&typeof _105.then==="function"){_105.then(dojo.hitch(_104.deferred,"resolve"),dojo.hitch(_104.deferred,"reject"));continue;}var _106=_103&&_105===undefined;if(_103&&!_106){_fc=_105 instanceof Error;}_104.deferred[_106&&_fc?"reject":"resolve"](_106?_fa:_105);}catch(e){_104.deferred.reject(e);}}else{if(_fc){_104.deferred.reject(_fa);}else{_104.deferred.resolve(_fa);}}}};this.resolve=this.callback=function(_107){this.fired=0;this.results=[_107,null];_100(_107);};this.reject=this.errback=function(_108){_fc=true;this.fired=1;_100(_108);this.results=[null,_108];if(!_108||_108.log!==false){(dojo.config.deferredOnError||function(x){console.error(x);})(_108);}};this.progress=function(_109){var _10a=_fe;while(_10a){var _10b=_10a.progress;_10b&&_10b(_109);_10a=_10a.next;}};this.addCallbacks=function(_10c,_10d){this.then(_10c,_10d,_f7);return this;};this.then=_ff.then=function(_10e,_10f,_110){var _111=_110==_f7?this:new dojo.Deferred(_ff.cancel);var _112={resolved:_10e,error:_10f,progress:_110,deferred:_111};if(_fe){_fd=_fd.next=_112;}else{_fe=_fd=_112;}if(_fb){_102();}return _111.promise;};var _113=this;this.cancel=_ff.cancel=function(){if(!_fb){var _114=_f9&&_f9(_113);if(!_fb){if(!(_114 instanceof Error)){_114=new Error(_114);}_114.log=false;_113.reject(_114);}}};_f8(_ff);};dojo.extend(dojo.Deferred,{addCallback:function(_115){return this.addCallbacks(dojo.hitch.apply(dojo,arguments));},addErrback:function(_116){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));},addBoth:function(_117){var _118=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(_118,_118);},fired:-1});})();dojo.when=function(_119,_11a,_11b,_11c){if(_119&&typeof _119.then==="function"){return _119.then(_11a,_11b,_11c);}return _11a(_119);};}if(!dojo._hasResource["dojo._base.json"]){dojo._hasResource["dojo._base.json"]=true;dojo.provide("dojo._base.json");dojo.fromJson=function(json){return eval("("+json+")");};dojo._escapeString=function(str){return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");};dojo.toJsonIndentStr="\t";dojo.toJson=function(it,_11d,_11e){if(it===undefined){return "undefined";}var _11f=typeof it;if(_11f=="number"||_11f=="boolean"){return it+"";}if(it===null){return "null";}if(dojo.isString(it)){return dojo._escapeString(it);}var _120=arguments.callee;var _121;_11e=_11e||"";var _122=_11d?_11e+dojo.toJsonIndentStr:"";var tf=it.__json__||it.json;if(dojo.isFunction(tf)){_121=tf.call(it);if(it!==_121){return _120(_121,_11d,_122);}}if(it.nodeType&&it.cloneNode){throw new Error("Can't serialize DOM nodes");}var sep=_11d?" ":"";var _123=_11d?"\n":"";if(dojo.isArray(it)){var res=dojo.map(it,function(obj){var val=_120(obj,_11d,_122);if(typeof val!="string"){val="undefined";}return _123+_122+val;});return "["+res.join(","+sep)+_123+_11e+"]";}if(_11f=="function"){return null;}var _124=[],key;for(key in it){var _125,val;if(typeof key=="number"){_125="\""+key+"\"";}else{if(typeof key=="string"){_125=dojo._escapeString(key);}else{continue;}}val=_120(it[key],_11d,_122);if(typeof val!="string"){continue;}_124.push(_123+_122+_125+":"+sep+val);}return "{"+_124.join(","+sep)+_123+_11e+"}";};}if(!dojo._hasResource["dojo._base.Color"]){dojo._hasResource["dojo._base.Color"]=true;dojo.provide("dojo._base.Color");(function(){var d=dojo;dojo.Color=function(_126){if(_126){this.setColor(_126);}};dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:d.config.transparentColor||[255,255,255]};dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){var t=this;t.r=r;t.g=g;t.b=b;t.a=a;},setColor:function(_127){if(d.isString(_127)){d.colorFromString(_127,this);}else{if(d.isArray(_127)){d.colorFromArray(_127,this);}else{this._set(_127.r,_127.g,_127.b,_127.a);if(!(_127 instanceof d.Color)){this.sanitize();}}}return this;},sanitize:function(){return this;},toRgb:function(){var t=this;return [t.r,t.g,t.b];},toRgba:function(){var t=this;return [t.r,t.g,t.b,t.a];},toHex:function(){var arr=d.map(["r","g","b"],function(x){var s=this[x].toString(16);return s.length<2?"0"+s:s;},this);return "#"+arr.join("");},toCss:function(_128){var t=this,rgb=t.r+", "+t.g+", "+t.b;return (_128?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";},toString:function(){return this.toCss(true);}});dojo.blendColors=function(_129,end,_12a,obj){var t=obj||new d.Color();d.forEach(["r","g","b","a"],function(x){t[x]=_129[x]+(end[x]-_129[x])*_12a;if(x!="a"){t[x]=Math.round(t[x]);}});return t.sanitize();};dojo.colorFromRgb=function(_12b,obj){var m=_12b.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return m&&dojo.colorFromArray(m[1].split(/\s*,\s*/),obj);};dojo.colorFromHex=function(_12c,obj){var t=obj||new d.Color(),bits=(_12c.length==4)?4:8,mask=(1<<bits)-1;_12c=Number("0x"+_12c.substr(1));if(isNaN(_12c)){return null;}d.forEach(["b","g","r"],function(x){var c=_12c&mask;_12c>>=bits;t[x]=bits==4?17*c:c;});t.a=1;return t;};dojo.colorFromArray=function(a,obj){var t=obj||new d.Color();t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));if(isNaN(t.a)){t.a=1;}return t.sanitize();};dojo.colorFromString=function(str,obj){var a=d.Color.named[str];return a&&d.colorFromArray(a,obj)||d.colorFromRgb(str,obj)||d.colorFromHex(str,obj);};})();}if(!dojo._hasResource["dojo._base.window"]){dojo._hasResource["dojo._base.window"]=true;dojo.provide("dojo._base.window");dojo.doc=window["document"]||null;dojo.body=function(){return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];};dojo.setContext=function(_12d,_12e){dojo.global=_12d;dojo.doc=_12e;};dojo.withGlobal=function(_12f,_130,_131,_132){var _133=dojo.global;try{dojo.global=_12f;return dojo.withDoc.call(null,_12f.document,_130,_131,_132);}finally{dojo.global=_133;}};dojo.withDoc=function(_134,_135,_136,_137){var _138=dojo.doc,_139=dojo._bodyLtr,oldQ=dojo.isQuirks;try{dojo.doc=_134;delete dojo._bodyLtr;dojo.isQuirks=dojo.doc.compatMode=="BackCompat";if(_136&&typeof _135=="string"){_135=_136[_135];}return _135.apply(_136,_137||[]);}finally{dojo.doc=_138;delete dojo._bodyLtr;if(_139!==undefined){dojo._bodyLtr=_139;}dojo.isQuirks=oldQ;}};}if(!dojo._hasResource["dojo._base.event"]){dojo._hasResource["dojo._base.event"]=true;dojo.provide("dojo._base.event");(function(){var del=(dojo._event_listener={add:function(node,name,fp){if(!node){return;}name=del._normalizeEventName(name);fp=del._fixCallback(name,fp);if(!dojo.isIE&&(name=="mouseenter"||name=="mouseleave")){var ofp=fp;name=(name=="mouseenter")?"mouseover":"mouseout";fp=function(e){if(!dojo.isDescendant(e.relatedTarget,node)){return ofp.call(this,e);}};}node.addEventListener(name,fp,false);return fp;},remove:function(node,_13a,_13b){if(node){_13a=del._normalizeEventName(_13a);if(!dojo.isIE&&(_13a=="mouseenter"||_13a=="mouseleave")){_13a=(_13a=="mouseenter")?"mouseover":"mouseout";}node.removeEventListener(_13a,_13b,false);}},_normalizeEventName:function(name){return name.slice(0,2)=="on"?name.slice(2):name;},_fixCallback:function(name,fp){return name!="keypress"?fp:function(e){return fp.call(this,del._fixEvent(e,this));};},_fixEvent:function(evt,_13c){switch(evt.type){case "keypress":del._setKeyChar(evt);break;}return evt;},_setKeyChar:function(evt){evt.keyChar=evt.charCode>=32?String.fromCharCode(evt.charCode):"";evt.charOrCode=evt.keyChar||evt.keyCode;},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39}});dojo.fixEvent=function(evt,_13d){return del._fixEvent(evt,_13d);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};var _13e=dojo._listener;dojo._connect=function(obj,_13f,_140,_141,_142){var _143=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_143?(_142?2:1):0,l=[dojo._listener,del,_13e][lid];var h=l.add(obj,_13f,dojo.hitch(_140,_141));return [obj,_13f,h,lid];};dojo._disconnect=function(obj,_144,_145,_146){([dojo._listener,del,_13e][_146]).remove(obj,_144,_145);};dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:dojo.isSafari?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,copyKey:dojo.isMac&&!dojo.isAIR?(dojo.isSafari?91:224):17};var _147=dojo.isMac?"metaKey":"ctrlKey";dojo.isCopyKey=function(e){return e[_147];};if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){dojo.mouseButtons={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_148){return e.button&_148;},isLeft:function(e){return e.button&1;},isMiddle:function(e){return e.button&4;},isRight:function(e){return e.button&2;}};}else{dojo.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_149){return e.button==_149;},isLeft:function(e){return e.button==0;},isMiddle:function(e){return e.button==1;},isRight:function(e){return e.button==2;}};}if(dojo.isIE){var _14a=function(e,code){try{return (e.keyCode=code);}catch(e){return 0;}};var iel=dojo._listener;var _14b=(dojo._ieListenersName="_"+dojo._scopeName+"_listeners");if(!dojo.config._allow_leaks){_13e=iel=dojo._ie_listener={handlers:[],add:function(_14c,_14d,_14e){_14c=_14c||dojo.global;var f=_14c[_14d];if(!f||!f[_14b]){var d=dojo._getIeDispatcher();d.target=f&&(ieh.push(f)-1);d[_14b]=[];f=_14c[_14d]=d;}return f[_14b].push(ieh.push(_14e)-1);},remove:function(_14f,_150,_151){var f=(_14f||dojo.global)[_150],l=f&&f[_14b];if(f&&l&&_151--){delete ieh[l[_151]];delete l[_151];}}};var ieh=iel.handlers;}dojo.mixin(del,{add:function(node,_152,fp){if(!node){return;}_152=del._normalizeEventName(_152);if(_152=="onkeypress"){var kd=node.onkeydown;if(!kd||!kd[_14b]||!kd._stealthKeydownHandle){var h=del.add(node,"onkeydown",del._stealthKeyDown);kd=node.onkeydown;kd._stealthKeydownHandle=h;kd._stealthKeydownRefs=1;}else{kd._stealthKeydownRefs++;}}return iel.add(node,_152,del._fixCallback(fp));},remove:function(node,_153,_154){_153=del._normalizeEventName(_153);iel.remove(node,_153,_154);if(_153=="onkeypress"){var kd=node.onkeydown;if(--kd._stealthKeydownRefs<=0){iel.remove(node,"onkeydown",kd._stealthKeydownHandle);delete kd._stealthKeydownHandle;}}},_normalizeEventName:function(_155){return _155.slice(0,2)!="on"?"on"+_155:_155;},_nop:function(){},_fixEvent:function(evt,_156){if(!evt){var w=_156&&(_156.ownerDocument||_156.document||_156).parentWindow||window;evt=w.event;}if(!evt){return (evt);}evt.target=evt.srcElement;evt.currentTarget=(_156||evt.srcElement);evt.layerX=evt.offsetX;evt.layerY=evt.offsetY;var se=evt.srcElement,doc=(se&&se.ownerDocument)||document;var _157=((dojo.isIE<6)||(doc["compatMode"]=="BackCompat"))?doc.body:doc.documentElement;var _158=dojo._getIeDocumentElementOffset();evt.pageX=evt.clientX+dojo._fixIeBiDiScrollLeft(_157.scrollLeft||0)-_158.x;evt.pageY=evt.clientY+(_157.scrollTop||0)-_158.y;if(evt.type=="mouseover"){evt.relatedTarget=evt.fromElement;}if(evt.type=="mouseout"){evt.relatedTarget=evt.toElement;}if(dojo.isIE<9||dojo.isQuirks){evt.stopPropagation=del._stopPropagation;evt.preventDefault=del._preventDefault;}return del._fixKeys(evt);},_fixKeys:function(evt){switch(evt.type){case "keypress":var c=("charCode" in evt?evt.charCode:evt.keyCode);if(c==10){c=0;evt.keyCode=13;}else{if(c==13||c==27){c=0;}else{if(c==3){c=99;}}}evt.charCode=c;del._setKeyChar(evt);break;}return evt;},_stealthKeyDown:function(evt){var kp=evt.currentTarget.onkeypress;if(!kp||!kp[_14b]){return;}var k=evt.keyCode;var _159=(k!=13||(dojo.isIE>=9&&!dojo.isQuirks))&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_159||evt.ctrlKey){var c=_159?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if((!evt.shiftKey)&&(c>=65&&c<=90)){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});kp.call(evt.currentTarget,faux);if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){evt.cancelBubble=faux.cancelBubble;}evt.returnValue=faux.returnValue;_14a(evt,faux.keyCode);}},_stopPropagation:function(){this.cancelBubble=true;},_preventDefault:function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey){_14a(this,0);}this.returnValue=false;}});dojo.stopEvent=(dojo.isIE<9||dojo.isQuirks)?function(evt){evt=evt||window.event;del._stopPropagation.call(evt);del._preventDefault.call(evt);}:dojo.stopEvent;}del._synthesizeEvent=function(evt,_15a){var faux=dojo.mixin({},evt,_15a);del._setKeyChar(faux);faux.preventDefault=function(){evt.preventDefault();};faux.stopPropagation=function(){evt.stopPropagation();};return faux;};if(dojo.isOpera){dojo.mixin(del,{_fixEvent:function(evt,_15b){switch(evt.type){case "keypress":var c=evt.which;if(c==3){c=99;}c=c<41&&!evt.shiftKey?0:c;if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){c+=32;}return del._synthesizeEvent(evt,{charCode:c});}return evt;}});}if(dojo.isWebKit){del._add=del.add;del._remove=del.remove;dojo.mixin(del,{add:function(node,_15c,fp){if(!node){return;}var _15d=del._add(node,_15c,fp);if(del._normalizeEventName(_15c)=="keypress"){_15d._stealthKeyDownHandle=del._add(node,"keydown",function(evt){var k=evt.keyCode;var _15e=k!=13&&k!=32&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_15e||evt.ctrlKey){var c=_15e?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if(!evt.shiftKey&&c>=65&&c<=90){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});fp.call(evt.currentTarget,faux);}});}return _15d;},remove:function(node,_15f,_160){if(node){if(_160._stealthKeyDownHandle){del._remove(node,"keydown",_160._stealthKeyDownHandle);}del._remove(node,_15f,_160);}},_fixEvent:function(evt,_161){switch(evt.type){case "keypress":if(evt.faux){return evt;}var c=evt.charCode;c=c>=32?c:0;return del._synthesizeEvent(evt,{charCode:c,faux:true});}return evt;}});}})();if(dojo.isIE){dojo._ieDispatcher=function(args,_162){var ap=Array.prototype,h=dojo._ie_listener.handlers,c=args.callee,ls=c[dojo._ieListenersName],t=h[c.target];var r=t&&t.apply(_162,args);var lls=[].concat(ls);for(var i in lls){var f=h[lls[i]];if(!(i in ap)&&f){f.apply(_162,args);}}return r;};dojo._getIeDispatcher=function(){return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)");};dojo._event_listener._fixCallback=function(fp){var f=dojo._event_listener._fixEvent;return function(e){return fp.call(this,f(e,this));};};}}if(!dojo._hasResource["dojo._base.html"]){dojo._hasResource["dojo._base.html"]=true;dojo.provide("dojo._base.html");try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}if(dojo.isIE){dojo.byId=function(id,doc){if(typeof id!="string"){return id;}var _163=doc||dojo.doc,te=_163.getElementById(id);if(te&&(te.attributes.id.value==id||te.id==id)){return te;}else{var eles=_163.all[id];if(!eles||eles.nodeName){eles=[eles];}var i=0;while((te=eles[i++])){if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){return te;}}}};}else{dojo.byId=function(id,doc){return ((typeof id=="string")?(doc||dojo.doc).getElementById(id):id)||null;};}(function(){var d=dojo;var byId=d.byId;var _164=null,_165;d.addOnWindowUnload(function(){_164=null;});dojo._destroyElement=dojo.destroy=function(node){node=byId(node);try{var doc=node.ownerDocument;if(!_164||_165!=doc){_164=doc.createElement("div");_165=doc;}_164.appendChild(node.parentNode?node.parentNode.removeChild(node):node);_164.innerHTML="";}catch(e){}};dojo.isDescendant=function(node,_166){try{node=byId(node);_166=byId(_166);while(node){if(node==_166){return true;}node=node.parentNode;}}catch(e){}return false;};dojo.setSelectable=function(node,_167){node=byId(node);if(d.isMozilla){node.style.MozUserSelect=_167?"":"none";}else{if(d.isKhtml||d.isWebKit){node.style.KhtmlUserSelect=_167?"auto":"none";}else{if(d.isIE){var v=(node.unselectable=_167?"":"on");d.query("*",node).forEach("item.unselectable = '"+v+"'");}}}};var _168=function(node,ref){var _169=ref.parentNode;if(_169){_169.insertBefore(node,ref);}};var _16a=function(node,ref){var _16b=ref.parentNode;if(_16b){if(_16b.lastChild==ref){_16b.appendChild(node);}else{_16b.insertBefore(node,ref.nextSibling);}}};dojo.place=function(node,_16c,_16d){_16c=byId(_16c);if(typeof node=="string"){node=/^\s*</.test(node)?d._toDom(node,_16c.ownerDocument):byId(node);}if(typeof _16d=="number"){var cn=_16c.childNodes;if(!cn.length||cn.length<=_16d){_16c.appendChild(node);}else{_168(node,cn[_16d<0?0:_16d]);}}else{switch(_16d){case "before":_168(node,_16c);break;case "after":_16a(node,_16c);break;case "replace":_16c.parentNode.replaceChild(node,_16c);break;case "only":d.empty(_16c);_16c.appendChild(node);break;case "first":if(_16c.firstChild){_168(node,_16c.firstChild);break;}default:_16c.appendChild(node);}}return node;};dojo.boxModel="content-box";if(d.isIE){d.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";}var gcs;if(d.isWebKit){gcs=function(node){var s;if(node.nodeType==1){var dv=node.ownerDocument.defaultView;s=dv.getComputedStyle(node,null);if(!s&&node.style){node.style.display="";s=dv.getComputedStyle(node,null);}}return s||{};};}else{if(d.isIE){gcs=function(node){return node.nodeType==1?node.currentStyle:{};};}else{gcs=function(node){return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};};}}dojo.getComputedStyle=gcs;if(!d.isIE){d._toPixelValue=function(_16e,_16f){return parseFloat(_16f)||0;};}else{d._toPixelValue=function(_170,_171){if(!_171){return 0;}if(_171=="medium"){return 4;}if(_171.slice&&_171.slice(-2)=="px"){return parseFloat(_171);}with(_170){var _172=style.left;var _173=runtimeStyle.left;runtimeStyle.left=currentStyle.left;try{style.left=_171;_171=style.pixelLeft;}catch(e){_171=0;}style.left=_172;runtimeStyle.left=_173;}return _171;};}var px=d._toPixelValue;var astr="DXImageTransform.Microsoft.Alpha";var af=function(n,f){try{return n.filters.item(astr);}catch(e){return f?{}:null;}};dojo._getOpacity=d.isIE<9?function(node){try{return af(node).Opacity/100;}catch(e){return 1;}}:function(node){return gcs(node).opacity;};dojo._setOpacity=d.isIE<9?function(node,_174){var ov=_174*100,_175=_174==1;node.style.zoom=_175?"":1;if(!af(node)){if(_175){return _174;}node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";}else{af(node,1).Opacity=ov;}af(node,1).Enabled=!_175;if(node.nodeName.toLowerCase()=="tr"){d.query("> td",node).forEach(function(i){d._setOpacity(i,_174);});}return _174;}:function(node,_176){return node.style.opacity=_176;};var _177={left:true,top:true};var _178=/margin|padding|width|height|max|min|offset/;var _179=function(node,type,_17a){type=type.toLowerCase();if(d.isIE){if(_17a=="auto"){if(type=="height"){return node.offsetHeight;}if(type=="width"){return node.offsetWidth;}}if(type=="fontweight"){switch(_17a){case 700:return "bold";case 400:default:return "normal";}}}if(!(type in _177)){_177[type]=_178.test(type);}return _177[type]?px(node,_17a):_17a;};var _17b=d.isIE?"styleFloat":"cssFloat",_17c={"cssFloat":_17b,"styleFloat":_17b,"float":_17b};dojo.style=function(node,_17d,_17e){var n=byId(node),args=arguments.length,op=(_17d=="opacity");_17d=_17c[_17d]||_17d;if(args==3){return op?d._setOpacity(n,_17e):n.style[_17d]=_17e;}if(args==2&&op){return d._getOpacity(n);}var s=gcs(n);if(args==2&&typeof _17d!="string"){for(var x in _17d){d.style(node,x,_17d[x]);}return s;}return (args==1)?s:_179(n,_17d,s[_17d]||n.style[_17d]);};dojo._getPadExtents=function(n,_17f){var s=_17f||gcs(n),l=px(n,s.paddingLeft),t=px(n,s.paddingTop);return {l:l,t:t,w:l+px(n,s.paddingRight),h:t+px(n,s.paddingBottom)};};dojo._getBorderExtents=function(n,_180){var ne="none",s=_180||gcs(n),bl=(s.borderLeftStyle!=ne?px(n,s.borderLeftWidth):0),bt=(s.borderTopStyle!=ne?px(n,s.borderTopWidth):0);return {l:bl,t:bt,w:bl+(s.borderRightStyle!=ne?px(n,s.borderRightWidth):0),h:bt+(s.borderBottomStyle!=ne?px(n,s.borderBottomWidth):0)};};dojo._getPadBorderExtents=function(n,_181){var s=_181||gcs(n),p=d._getPadExtents(n,s),b=d._getBorderExtents(n,s);return {l:p.l+b.l,t:p.t+b.t,w:p.w+b.w,h:p.h+b.h};};dojo._getMarginExtents=function(n,_182){var s=_182||gcs(n),l=px(n,s.marginLeft),t=px(n,s.marginTop),r=px(n,s.marginRight),b=px(n,s.marginBottom);if(d.isWebKit&&(s.position!="absolute")){r=l;}return {l:l,t:t,w:l+r,h:t+b};};dojo._getMarginBox=function(node,_183){var s=_183||gcs(node),me=d._getMarginExtents(node,s);var l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode;if(d.isMoz){var sl=parseFloat(s.left),st=parseFloat(s.top);if(!isNaN(sl)&&!isNaN(st)){l=sl,t=st;}else{if(p&&p.style){var pcs=gcs(p);if(pcs.overflow!="visible"){var be=d._getBorderExtents(p,pcs);l+=be.l,t+=be.t;}}}}else{if(d.isOpera||(d.isIE>7&&!d.isQuirks)){if(p){be=d._getBorderExtents(p);l-=be.l;t-=be.t;}}}return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};};dojo._getMarginSize=function(node,_184){node=byId(node);var me=d._getMarginExtents(node,_184||gcs(node));var size=node.getBoundingClientRect();return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};};dojo._getContentBox=function(node,_185){var s=_185||gcs(node),pe=d._getPadExtents(node,s),be=d._getBorderExtents(node,s),w=node.clientWidth,h;if(!w){w=node.offsetWidth,h=node.offsetHeight;}else{h=node.clientHeight,be.w=be.h=0;}if(d.isOpera){pe.l+=be.l;pe.t+=be.t;}return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};};dojo._getBorderBox=function(node,_186){var s=_186||gcs(node),pe=d._getPadExtents(node,s),cb=d._getContentBox(node,s);return {l:cb.l-pe.l,t:cb.t-pe.t,w:cb.w+pe.w,h:cb.h+pe.h};};dojo._setBox=function(node,l,t,w,h,u){u=u||"px";var s=node.style;if(!isNaN(l)){s.left=l+u;}if(!isNaN(t)){s.top=t+u;}if(w>=0){s.width=w+u;}if(h>=0){s.height=h+u;}};dojo._isButtonTag=function(node){return node.tagName=="BUTTON"||node.tagName=="INPUT"&&(node.getAttribute("type")||"").toUpperCase()=="BUTTON";};dojo._usesBorderBox=function(node){var n=node.tagName;return d.boxModel=="border-box"||n=="TABLE"||d._isButtonTag(node);};dojo._setContentSize=function(node,_187,_188,_189){if(d._usesBorderBox(node)){var pb=d._getPadBorderExtents(node,_189);if(_187>=0){_187+=pb.w;}if(_188>=0){_188+=pb.h;}}d._setBox(node,NaN,NaN,_187,_188);};dojo._setMarginBox=function(node,_18a,_18b,_18c,_18d,_18e){var s=_18e||gcs(node),bb=d._usesBorderBox(node),pb=bb?_18f:d._getPadBorderExtents(node,s);if(d.isWebKit){if(d._isButtonTag(node)){var ns=node.style;if(_18c>=0&&!ns.width){ns.width="4px";}if(_18d>=0&&!ns.height){ns.height="4px";}}}var mb=d._getMarginExtents(node,s);if(_18c>=0){_18c=Math.max(_18c-pb.w-mb.w,0);}if(_18d>=0){_18d=Math.max(_18d-pb.h-mb.h,0);}d._setBox(node,_18a,_18b,_18c,_18d);};var _18f={l:0,t:0,w:0,h:0};dojo.marginBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getMarginBox(n,s):d._setMarginBox(n,b.l,b.t,b.w,b.h,s);};dojo.contentBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getContentBox(n,s):d._setContentSize(n,b.w,b.h,s);};var _190=function(node,prop){if(!(node=(node||0).parentNode)){return 0;}var val,_191=0,_192=d.body();while(node&&node.style){if(gcs(node).position=="fixed"){return 0;}val=node[prop];if(val){_191+=val-0;if(node==_192){break;}}node=node.parentNode;}return _191;};dojo._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.isQuirks?d.doc.body:d.doc.documentElement,{x:d._fixIeBiDiScrollLeft(n.scrollLeft||0),y:n.scrollTop||0});};dojo._isBodyLtr=function(){return "_bodyLtr" in d?d._bodyLtr:d._bodyLtr=(d.body().dir||d.doc.documentElement.dir||"ltr").toLowerCase()=="ltr";};dojo._getIeDocumentElementOffset=function(){var de=d.doc.documentElement;if(d.isIE<8){var r=de.getBoundingClientRect();var l=r.left,t=r.top;if(d.isIE<7){l+=de.clientLeft;t+=de.clientTop;}return {x:l<0?0:l,y:t<0?0:t};}else{return {x:0,y:0};}};dojo._fixIeBiDiScrollLeft=function(_193){var ie=d.isIE;if(ie&&!d._isBodyLtr()){var qk=d.isQuirks,de=qk?d.doc.body:d.doc.documentElement;if(ie==6&&!qk&&d.global.frameElement&&de.scrollHeight>de.clientHeight){_193+=de.clientLeft;}return (ie<8||qk)?(_193+de.clientWidth-de.scrollWidth):-_193;}return _193;};dojo._abs=dojo.position=function(node,_194){node=byId(node);var db=d.body(),dh=db.parentNode,ret=node.getBoundingClientRect();ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};if(d.isIE){var _195=d._getIeDocumentElementOffset();ret.x-=_195.x+(d.isQuirks?db.clientLeft+db.offsetLeft:0);ret.y-=_195.y+(d.isQuirks?db.clientTop+db.offsetTop:0);}else{if(d.isFF==3){var cs=gcs(dh);ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);}}if(_194){var _196=d._docScroll();ret.x+=_196.x;ret.y+=_196.y;}return ret;};dojo.coords=function(node,_197){var n=byId(node),s=gcs(n),mb=d._getMarginBox(n,s);var abs=d.position(n,_197);mb.x=abs.x;mb.y=abs.y;return mb;};var _198={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_199={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_19a={innerHTML:1,className:1,htmlFor:d.isIE,value:1};var _19b=function(name){return _199[name.toLowerCase()]||name;};var _19c=function(node,name){var attr=node.getAttributeNode&&node.getAttributeNode(name);return attr&&attr.specified;};dojo.hasAttr=function(node,name){var lc=name.toLowerCase();return _19a[_198[lc]||name]||_19c(byId(node),_199[lc]||name);};var _19d={},_19e=0,_19f=dojo._scopeName+"attrid",_1a0={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};dojo.attr=function(node,name,_1a1){node=byId(node);var args=arguments.length,prop;if(args==2&&typeof name!="string"){for(var x in name){d.attr(node,x,name[x]);}return node;}var lc=name.toLowerCase(),_1a2=_198[lc]||name,_1a3=_19a[_1a2],_1a4=_199[lc]||name;if(args==3){do{if(_1a2=="style"&&typeof _1a1!="string"){d.style(node,_1a1);break;}if(_1a2=="innerHTML"){if(d.isIE&&node.tagName.toLowerCase() in _1a0){d.empty(node);node.appendChild(d._toDom(_1a1,node.ownerDocument));}else{node[_1a2]=_1a1;}break;}if(d.isFunction(_1a1)){var _1a5=d.attr(node,_19f);if(!_1a5){_1a5=_19e++;d.attr(node,_19f,_1a5);}if(!_19d[_1a5]){_19d[_1a5]={};}var h=_19d[_1a5][_1a2];if(h){d.disconnect(h);}else{try{delete node[_1a2];}catch(e){}}_19d[_1a5][_1a2]=d.connect(node,_1a2,_1a1);break;}if(_1a3||typeof _1a1=="boolean"){node[_1a2]=_1a1;break;}node.setAttribute(_1a4,_1a1);}while(false);return node;}_1a1=node[_1a2];if(_1a3&&typeof _1a1!="undefined"){return _1a1;}if(_1a2!="href"&&(typeof _1a1=="boolean"||d.isFunction(_1a1))){return _1a1;}return _19c(node,_1a4)?node.getAttribute(_1a4):null;};dojo.removeAttr=function(node,name){byId(node).removeAttribute(_19b(name));};dojo.getNodeProp=function(node,name){node=byId(node);var lc=name.toLowerCase(),_1a6=_198[lc]||name;if((_1a6 in node)&&_1a6!="href"){return node[_1a6];}var _1a7=_199[lc]||name;return _19c(node,_1a7)?node.getAttribute(_1a7):null;};dojo.create=function(tag,_1a8,_1a9,pos){var doc=d.doc;if(_1a9){_1a9=byId(_1a9);doc=_1a9.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_1a8){d.attr(tag,_1a8);}if(_1a9){d.place(tag,_1a9,pos);}return tag;};d.empty=d.isIE?function(node){node=byId(node);for(var c;c=node.lastChild;){d.destroy(c);}}:function(node){byId(node).innerHTML="";};var _1aa={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_1ab=/<\s*([\w\:]+)/,_1ac={},_1ad=0,_1ae="__"+d._scopeName+"ToDomId";for(var _1af in _1aa){if(_1aa.hasOwnProperty(_1af)){var tw=_1aa[_1af];tw.pre=_1af=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}}d._toDom=function(frag,doc){doc=doc||d.doc;var _1b0=doc[_1ae];if(!_1b0){doc[_1ae]=_1b0=++_1ad+"";_1ac[_1b0]=doc.createElement("div");}frag+="";var _1b1=frag.match(_1ab),tag=_1b1?_1b1[1].toLowerCase():"",_1b2=_1ac[_1b0],wrap,i,fc,df;if(_1b1&&_1aa[tag]){wrap=_1aa[tag];_1b2.innerHTML=wrap.pre+frag+wrap.post;for(i=wrap.length;i;--i){_1b2=_1b2.firstChild;}}else{_1b2.innerHTML=frag;}if(_1b2.childNodes.length==1){return _1b2.removeChild(_1b2.firstChild);}df=doc.createDocumentFragment();while(fc=_1b2.firstChild){df.appendChild(fc);}return df;};var _1b3="className";dojo.hasClass=function(node,_1b4){return ((" "+byId(node)[_1b3]+" ").indexOf(" "+_1b4+" ")>=0);};var _1b5=/\s+/,a1=[""],_1b6={},_1b7=function(s){if(typeof s=="string"||s instanceof String){if(s.indexOf(" ")<0){a1[0]=s;return a1;}else{return s.split(_1b5);}}return s||"";};dojo.addClass=function(node,_1b8){node=byId(node);_1b8=_1b7(_1b8);var cls=node[_1b3],_1b9;cls=cls?" "+cls+" ":" ";_1b9=cls.length;for(var i=0,len=_1b8.length,c;i<len;++i){c=_1b8[i];if(c&&cls.indexOf(" "+c+" ")<0){cls+=c+" ";}}if(_1b9<cls.length){node[_1b3]=cls.substr(1,cls.length-2);}};dojo.removeClass=function(node,_1ba){node=byId(node);var cls;if(_1ba!==undefined){_1ba=_1b7(_1ba);cls=" "+node[_1b3]+" ";for(var i=0,len=_1ba.length;i<len;++i){cls=cls.replace(" "+_1ba[i]+" "," ");}cls=d.trim(cls);}else{cls="";}if(node[_1b3]!=cls){node[_1b3]=cls;}};dojo.replaceClass=function(node,_1bb,_1bc){node=byId(node);_1b6.className=node.className;dojo.removeClass(_1b6,_1bc);dojo.addClass(_1b6,_1bb);if(node.className!==_1b6.className){node.className=_1b6.className;}};dojo.toggleClass=function(node,_1bd,_1be){if(_1be===undefined){_1be=!d.hasClass(node,_1bd);}d[_1be?"addClass":"removeClass"](node,_1bd);};})();}if(!dojo._hasResource["dojo._base.NodeList"]){dojo._hasResource["dojo._base.NodeList"]=true;dojo.provide("dojo._base.NodeList");(function(){var d=dojo;var ap=Array.prototype,aps=ap.slice,apc=ap.concat;var tnl=function(a,_1bf,_1c0){if(!a.sort){a=aps.call(a,0);}var ctor=_1c0||this._NodeListCtor||d._NodeListCtor;a.constructor=ctor;dojo._mixin(a,ctor.prototype);a._NodeListCtor=ctor;return _1bf?a._stash(_1bf):a;};var _1c1=function(f,a,o){a=[0].concat(aps.call(a,0));o=o||d.global;return function(node){a[0]=node;return f.apply(o,a);};};var _1c2=function(f,o){return function(){this.forEach(_1c1(f,arguments,o));return this;};};var _1c3=function(f,o){return function(){return this.map(_1c1(f,arguments,o));};};var _1c4=function(f,o){return function(){return this.filter(_1c1(f,arguments,o));};};var _1c5=function(f,g,o){return function(){var a=arguments,body=_1c1(f,a,o);if(g.call(o||d.global,a)){return this.map(body);}this.forEach(body);return this;};};var _1c6=function(a){return a.length==1&&(typeof a[0]=="string");};var _1c7=function(node){var p=node.parentNode;if(p){p.removeChild(node);}};dojo.NodeList=function(){return tnl(Array.apply(null,arguments));};d._NodeListCtor=d.NodeList;var nl=d.NodeList,nlp=nl.prototype;nl._wrap=nlp._wrap=tnl;nl._adaptAsMap=_1c3;nl._adaptAsForEach=_1c2;nl._adaptAsFilter=_1c4;nl._adaptWithCondition=_1c5;d.forEach(["slice","splice"],function(name){var f=ap[name];nlp[name]=function(){return this._wrap(f.apply(this,arguments),name=="slice"?this:null);};});d.forEach(["indexOf","lastIndexOf","every","some"],function(name){var f=d[name];nlp[name]=function(){return f.apply(d,[this].concat(aps.call(arguments,0)));};});d.forEach(["attr","style"],function(name){nlp[name]=_1c5(d[name],_1c6);});d.forEach(["connect","addClass","removeClass","replaceClass","toggleClass","empty","removeAttr"],function(name){nlp[name]=_1c2(d[name]);});dojo.extend(dojo.NodeList,{_normalize:function(_1c8,_1c9){var _1ca=_1c8.parse===true?true:false;if(typeof _1c8.template=="string"){var _1cb=_1c8.templateFunc||(dojo.string&&dojo.string.substitute);_1c8=_1cb?_1cb(_1c8.template,_1c8):_1c8;}var type=(typeof _1c8);if(type=="string"||type=="number"){_1c8=dojo._toDom(_1c8,(_1c9&&_1c9.ownerDocument));if(_1c8.nodeType==11){_1c8=dojo._toArray(_1c8.childNodes);}else{_1c8=[_1c8];}}else{if(!dojo.isArrayLike(_1c8)){_1c8=[_1c8];}else{if(!dojo.isArray(_1c8)){_1c8=dojo._toArray(_1c8);}}}if(_1ca){_1c8._runParse=true;}return _1c8;},_cloneNode:function(node){return node.cloneNode(true);},_place:function(ary,_1cc,_1cd,_1ce){if(_1cc.nodeType!=1&&_1cd=="only"){return;}var _1cf=_1cc,_1d0;var _1d1=ary.length;for(var i=_1d1-1;i>=0;i--){var node=(_1ce?this._cloneNode(ary[i]):ary[i]);if(ary._runParse&&dojo.parser&&dojo.parser.parse){if(!_1d0){_1d0=_1cf.ownerDocument.createElement("div");}_1d0.appendChild(node);dojo.parser.parse(_1d0);node=_1d0.firstChild;while(_1d0.firstChild){_1d0.removeChild(_1d0.firstChild);}}if(i==_1d1-1){dojo.place(node,_1cf,_1cd);}else{_1cf.parentNode.insertBefore(node,_1cf);}_1cf=node;}},_stash:function(_1d2){this._parent=_1d2;return this;},end:function(){if(this._parent){return this._parent;}else{return new this._NodeListCtor();}},concat:function(item){var t=d.isArray(this)?this:aps.call(this,0),m=d.map(arguments,function(a){return a&&!d.isArray(a)&&(typeof NodeList!="undefined"&&a.constructor===NodeList||a.constructor===this._NodeListCtor)?aps.call(a,0):a;});return this._wrap(apc.apply(t,m),this);},map:function(func,obj){return this._wrap(d.map(this,func,obj),this);},forEach:function(_1d3,_1d4){d.forEach(this,_1d3,_1d4);return this;},coords:_1c3(d.coords),position:_1c3(d.position),place:function(_1d5,_1d6){var item=d.query(_1d5)[0];return this.forEach(function(node){d.place(node,item,_1d6);});},orphan:function(_1d7){return (_1d7?d._filterQueryResult(this,_1d7):this).forEach(_1c7);},adopt:function(_1d8,_1d9){return d.query(_1d8).place(this[0],_1d9)._stash(this);},query:function(_1da){if(!_1da){return this;}var ret=this.map(function(node){return d.query(_1da,node).filter(function(_1db){return _1db!==undefined;});});return this._wrap(apc.apply([],ret),this);},filter:function(_1dc){var a=arguments,_1dd=this,_1de=0;if(typeof _1dc=="string"){_1dd=d._filterQueryResult(this,a[0]);if(a.length==1){return _1dd._stash(this);}_1de=1;}return this._wrap(d.filter(_1dd,a[_1de],a[_1de+1]),this);},addContent:function(_1df,_1e0){_1df=this._normalize(_1df,this[0]);for(var i=0,node;(node=this[i]);i++){this._place(_1df,node,_1e0,i>0);}return this;},instantiate:function(_1e1,_1e2){var c=d.isFunction(_1e1)?_1e1:d.getObject(_1e1);_1e2=_1e2||{};return this.forEach(function(node){new c(_1e2,node);});},at:function(){var t=new this._NodeListCtor();d.forEach(arguments,function(i){if(i<0){i=this.length+i;}if(this[i]){t.push(this[i]);}},this);return t._stash(this);}});nl.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];d.forEach(nl.events,function(evt){var _1e3="on"+evt;nlp[_1e3]=function(a,b){return this.connect(_1e3,a,b);};});})();}if(!dojo._hasResource["dojo._base.query"]){dojo._hasResource["dojo._base.query"]=true;(function(){var _1e4=function(d){var trim=d.trim;var each=d.forEach;var qlc=(d._NodeListCtor=d.NodeList);var _1e5=function(){return d.doc;};var _1e6=((d.isWebKit||d.isMozilla)&&((_1e5().compatMode)=="BackCompat"));var _1e7=!!_1e5().firstChild["children"]?"children":"childNodes";var _1e8=">~+";var _1e9=false;var _1ea=function(){return true;};var _1eb=function(_1ec){if(_1e8.indexOf(_1ec.slice(-1))>=0){_1ec+=" * ";}else{_1ec+=" ";}var ts=function(s,e){return trim(_1ec.slice(s,e));};var _1ed=[];var _1ee=-1,_1ef=-1,_1f0=-1,_1f1=-1,_1f2=-1,inId=-1,_1f3=-1,lc="",cc="",_1f4;var x=0,ql=_1ec.length,_1f5=null,_1f6=null;var _1f7=function(){if(_1f3>=0){var tv=(_1f3==x)?null:ts(_1f3,x);_1f5[(_1e8.indexOf(tv)<0)?"tag":"oper"]=tv;_1f3=-1;}};var _1f8=function(){if(inId>=0){_1f5.id=ts(inId,x).replace(/\\/g,"");inId=-1;}};var _1f9=function(){if(_1f2>=0){_1f5.classes.push(ts(_1f2+1,x).replace(/\\/g,""));_1f2=-1;}};var _1fa=function(){_1f8();_1f7();_1f9();};var _1fb=function(){_1fa();if(_1f1>=0){_1f5.pseudos.push({name:ts(_1f1+1,x)});}_1f5.loops=(_1f5.pseudos.length||_1f5.attrs.length||_1f5.classes.length);_1f5.oquery=_1f5.query=ts(_1f4,x);_1f5.otag=_1f5.tag=(_1f5["oper"])?null:(_1f5.tag||"*");if(_1f5.tag){_1f5.tag=_1f5.tag.toUpperCase();}if(_1ed.length&&(_1ed[_1ed.length-1].oper)){_1f5.infixOper=_1ed.pop();_1f5.query=_1f5.infixOper.query+" "+_1f5.query;}_1ed.push(_1f5);_1f5=null;};for(;lc=cc,cc=_1ec.charAt(x),x<ql;x++){if(lc=="\\"){continue;}if(!_1f5){_1f4=x;_1f5={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return (_1e9)?this.otag:this.tag;}};_1f3=x;}if(_1ee>=0){if(cc=="]"){if(!_1f6.attr){_1f6.attr=ts(_1ee+1,x);}else{_1f6.matchFor=ts((_1f0||_1ee+1),x);}var cmf=_1f6.matchFor;if(cmf){if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){_1f6.matchFor=cmf.slice(1,-1);}}_1f5.attrs.push(_1f6);_1f6=null;_1ee=_1f0=-1;}else{if(cc=="="){var _1fc=("|~^$*".indexOf(lc)>=0)?lc:"";_1f6.type=_1fc+cc;_1f6.attr=ts(_1ee+1,x-_1fc.length);_1f0=x+1;}}}else{if(_1ef>=0){if(cc==")"){if(_1f1>=0){_1f6.value=ts(_1ef+1,x);}_1f1=_1ef=-1;}}else{if(cc=="#"){_1fa();inId=x+1;}else{if(cc=="."){_1fa();_1f2=x;}else{if(cc==":"){_1fa();_1f1=x;}else{if(cc=="["){_1fa();_1ee=x;_1f6={};}else{if(cc=="("){if(_1f1>=0){_1f6={name:ts(_1f1+1,x),value:null};_1f5.pseudos.push(_1f6);}_1ef=x;}else{if((cc==" ")&&(lc!=cc)){_1fb();}}}}}}}}}return _1ed;};var _1fd=function(_1fe,_1ff){if(!_1fe){return _1ff;}if(!_1ff){return _1fe;}return function(){return _1fe.apply(window,arguments)&&_1ff.apply(window,arguments);};};var _200=function(i,arr){var r=arr||[];if(i){r.push(i);}return r;};var _201=function(n){return (1==n.nodeType);};var _202="";var _203=function(elem,attr){if(!elem){return _202;}if(attr=="class"){return elem.className||_202;}if(attr=="for"){return elem.htmlFor||_202;}if(attr=="style"){return elem.style.cssText||_202;}return (_1e9?elem.getAttribute(attr):elem.getAttribute(attr,2))||_202;};var _204={"*=":function(attr,_205){return function(elem){return (_203(elem,attr).indexOf(_205)>=0);};},"^=":function(attr,_206){return function(elem){return (_203(elem,attr).indexOf(_206)==0);};},"$=":function(attr,_207){var tval=" "+_207;return function(elem){var ea=" "+_203(elem,attr);return (ea.lastIndexOf(_207)==(ea.length-_207.length));};},"~=":function(attr,_208){var tval=" "+_208+" ";return function(elem){var ea=" "+_203(elem,attr)+" ";return (ea.indexOf(tval)>=0);};},"|=":function(attr,_209){var _20a=" "+_209+"-";return function(elem){var ea=" "+_203(elem,attr);return ((ea==_209)||(ea.indexOf(_20a)==0));};},"=":function(attr,_20b){return function(elem){return (_203(elem,attr)==_20b);};}};var _20c=(typeof _1e5().firstChild.nextElementSibling=="undefined");var _20d=!_20c?"nextElementSibling":"nextSibling";var _20e=!_20c?"previousElementSibling":"previousSibling";var _20f=(_20c?_201:_1ea);var _210=function(node){while(node=node[_20e]){if(_20f(node)){return false;}}return true;};var _211=function(node){while(node=node[_20d]){if(_20f(node)){return false;}}return true;};var _212=function(node){var root=node.parentNode;var i=0,tret=root[_1e7],ci=(node["_i"]||-1),cl=(root["_l"]||-1);if(!tret){return -1;}var l=tret.length;if(cl==l&&ci>=0&&cl>=0){return ci;}root["_l"]=l;ci=-1;for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_20d]){if(_20f(te)){te["_i"]=++i;if(node===te){ci=i;}}}return ci;};var _213=function(elem){return !((_212(elem))%2);};var _214=function(elem){return ((_212(elem))%2);};var _215={"checked":function(name,_216){return function(elem){return !!("checked" in elem?elem.checked:elem.selected);};},"first-child":function(){return _210;},"last-child":function(){return _211;},"only-child":function(name,_217){return function(node){if(!_210(node)){return false;}if(!_211(node)){return false;}return true;};},"empty":function(name,_218){return function(elem){var cn=elem.childNodes;var cnl=elem.childNodes.length;for(var x=cnl-1;x>=0;x--){var nt=cn[x].nodeType;if((nt===1)||(nt==3)){return false;}}return true;};},"contains":function(name,_219){var cz=_219.charAt(0);if(cz=="\""||cz=="'"){_219=_219.slice(1,-1);}return function(elem){return (elem.innerHTML.indexOf(_219)>=0);};},"not":function(name,_21a){var p=_1eb(_21a)[0];var _21b={el:1};if(p.tag!="*"){_21b.tag=1;}if(!p.classes.length){_21b.classes=1;}var ntf=_21c(p,_21b);return function(elem){return (!ntf(elem));};},"nth-child":function(name,_21d){var pi=parseInt;if(_21d=="odd"){return _214;}else{if(_21d=="even"){return _213;}}if(_21d.indexOf("n")!=-1){var _21e=_21d.split("n",2);var pred=_21e[0]?((_21e[0]=="-")?-1:pi(_21e[0])):1;var idx=_21e[1]?pi(_21e[1]):0;var lb=0,ub=-1;if(pred>0){if(idx<0){idx=(idx%pred)&&(pred+(idx%pred));}else{if(idx>0){if(idx>=pred){lb=idx-idx%pred;}idx=idx%pred;}}}else{if(pred<0){pred*=-1;if(idx>0){ub=idx;idx=idx%pred;}}}if(pred>0){return function(elem){var i=_212(elem);return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);};}else{_21d=idx;}}var _21f=pi(_21d);return function(elem){return (_212(elem)==_21f);};}};var _220=(d.isIE<9||(dojo.isIE&&dojo.isQuirks))?function(cond){var clc=cond.toLowerCase();if(clc=="class"){cond="className";}return function(elem){return (_1e9?elem.getAttribute(cond):elem[cond]||elem[clc]);};}:function(cond){return function(elem){return (elem&&elem.getAttribute&&elem.hasAttribute(cond));};};var _21c=function(_221,_222){if(!_221){return _1ea;}_222=_222||{};var ff=null;if(!("el" in _222)){ff=_1fd(ff,_201);}if(!("tag" in _222)){if(_221.tag!="*"){ff=_1fd(ff,function(elem){return (elem&&(elem.tagName==_221.getTag()));});}}if(!("classes" in _222)){each(_221.classes,function(_223,idx,arr){var re=new RegExp("(?:^|\\s)"+_223+"(?:\\s|$)");ff=_1fd(ff,function(elem){return re.test(elem.className);});ff.count=idx;});}if(!("pseudos" in _222)){each(_221.pseudos,function(_224){var pn=_224.name;if(_215[pn]){ff=_1fd(ff,_215[pn](pn,_224.value));}});}if(!("attrs" in _222)){each(_221.attrs,function(attr){var _225;var a=attr.attr;if(attr.type&&_204[attr.type]){_225=_204[attr.type](a,attr.matchFor);}else{if(a.length){_225=_220(a);}}if(_225){ff=_1fd(ff,_225);}});}if(!("id" in _222)){if(_221.id){ff=_1fd(ff,function(elem){return (!!elem&&(elem.id==_221.id));});}}if(!ff){if(!("default" in _222)){ff=_1ea;}}return ff;};var _226=function(_227){return function(node,ret,bag){while(node=node[_20d]){if(_20c&&(!_201(node))){continue;}if((!bag||_228(node,bag))&&_227(node)){ret.push(node);}break;}return ret;};};var _229=function(_22a){return function(root,ret,bag){var te=root[_20d];while(te){if(_20f(te)){if(bag&&!_228(te,bag)){break;}if(_22a(te)){ret.push(te);}}te=te[_20d];}return ret;};};var _22b=function(_22c){_22c=_22c||_1ea;return function(root,ret,bag){var te,x=0,tret=root[_1e7];while(te=tret[x++]){if(_20f(te)&&(!bag||_228(te,bag))&&(_22c(te,x))){ret.push(te);}}return ret;};};var _22d=function(node,root){var pn=node.parentNode;while(pn){if(pn==root){break;}pn=pn.parentNode;}return !!pn;};var _22e={};var _22f=function(_230){var _231=_22e[_230.query];if(_231){return _231;}var io=_230.infixOper;var oper=(io?io.oper:"");var _232=_21c(_230,{el:1});var qt=_230.tag;var _233=("*"==qt);var ecs=_1e5()["getElementsByClassName"];if(!oper){if(_230.id){_232=(!_230.loops&&_233)?_1ea:_21c(_230,{el:1,id:1});_231=function(root,arr){var te=d.byId(_230.id,(root.ownerDocument||root));if(!te||!_232(te)){return;}if(9==root.nodeType){return _200(te,arr);}else{if(_22d(te,root)){return _200(te,arr);}}};}else{if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_230.classes.length&&!_1e6){_232=_21c(_230,{el:1,classes:1,id:1});var _234=_230.classes.join(" ");_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByClassName(_234);while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}else{if(!_233&&!_230.loops){_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_228(te,bag)){ret.push(te);}}return ret;};}else{_232=_21c(_230,{el:1,tag:1,id:1});_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}}}}else{var _235={el:1};if(_233){_235.tag=1;}_232=_21c(_230,_235);if("+"==oper){_231=_226(_232);}else{if("~"==oper){_231=_229(_232);}else{if(">"==oper){_231=_22b(_232);}}}}return _22e[_230.query]=_231;};var _236=function(root,_237){var _238=_200(root),qp,x,te,qpl=_237.length,bag,ret;for(var i=0;i<qpl;i++){ret=[];qp=_237[i];x=_238.length-1;if(x>0){bag={};ret.nozip=true;}var gef=_22f(qp);for(var j=0;(te=_238[j]);j++){gef(te,ret,bag);}if(!ret.length){break;}_238=ret;}return ret;};var _239={},_23a={};var _23b=function(_23c){var _23d=_1eb(trim(_23c));if(_23d.length==1){var tef=_22f(_23d[0]);return function(root){var r=tef(root,new qlc());if(r){r.nozip=true;}return r;};}return function(root){return _236(root,_23d);};};var nua=navigator.userAgent;var wk="WebKit/";var _23e=(d.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));var _23f=d.isIE?"commentStrip":"nozip";var qsa="querySelectorAll";var _240=(!!_1e5()[qsa]&&(!d.isSafari||(d.isSafari>3.1)||_23e));var _241=/n\+\d|([^ ])?([>~+])([^ =])?/g;var _242=function(_243,pre,ch,post){return ch?(pre?pre+" ":"")+ch+(post?" "+post:""):_243;};var _244=function(_245,_246){_245=_245.replace(_241,_242);if(_240){var _247=_23a[_245];if(_247&&!_246){return _247;}}var _248=_239[_245];if(_248){return _248;}var qcz=_245.charAt(0);var _249=(-1==_245.indexOf(" "));if((_245.indexOf("#")>=0)&&(_249)){_246=true;}var _24a=(_240&&(!_246)&&(_1e8.indexOf(qcz)==-1)&&(!d.isIE||(_245.indexOf(":")==-1))&&(!(_1e6&&(_245.indexOf(".")>=0)))&&(_245.indexOf(":contains")==-1)&&(_245.indexOf(":checked")==-1)&&(_245.indexOf("|=")==-1));if(_24a){var tq=(_1e8.indexOf(_245.charAt(_245.length-1))>=0)?(_245+" *"):_245;return _23a[_245]=function(root){try{if(!((9==root.nodeType)||_249)){throw "";}var r=root[qsa](tq);r[_23f]=true;return r;}catch(e){return _244(_245,true)(root);}};}else{var _24b=_245.split(/\s*,\s*/);return _239[_245]=((_24b.length<2)?_23b(_245):function(root){var _24c=0,ret=[],tp;while((tp=_24b[_24c++])){ret=ret.concat(_23b(tp)(root));}return ret;});}};var _24d=0;var _24e=d.isIE?function(node){if(_1e9){return (node.getAttribute("_uid")||node.setAttribute("_uid",++_24d)||_24d);}else{return node.uniqueID;}}:function(node){return (node._uid||(node._uid=++_24d));};var _228=function(node,bag){if(!bag){return 1;}var id=_24e(node);if(!bag[id]){return bag[id]=1;}return 0;};var _24f="_zipIdx";var _250=function(arr){if(arr&&arr.nozip){return (qlc._wrap)?qlc._wrap(arr):arr;}var ret=new qlc();if(!arr||!arr.length){return ret;}if(arr[0]){ret.push(arr[0]);}if(arr.length<2){return ret;}_24d++;if(d.isIE&&_1e9){var _251=_24d+"";arr[0].setAttribute(_24f,_251);for(var x=1,te;te=arr[x];x++){if(arr[x].getAttribute(_24f)!=_251){ret.push(te);}te.setAttribute(_24f,_251);}}else{if(d.isIE&&arr.commentStrip){try{for(var x=1,te;te=arr[x];x++){if(_201(te)){ret.push(te);}}}catch(e){}}else{if(arr[0]){arr[0][_24f]=_24d;}for(var x=1,te;te=arr[x];x++){if(arr[x][_24f]!=_24d){ret.push(te);}te[_24f]=_24d;}}}return ret;};d.query=function(_252,root){qlc=d._NodeListCtor;if(!_252){return new qlc();}if(_252.constructor==qlc){return _252;}if(typeof _252!="string"){return new qlc(_252);}if(typeof root=="string"){root=d.byId(root);if(!root){return new qlc();}}root=root||_1e5();var od=root.ownerDocument||root.documentElement;_1e9=(root.contentType&&root.contentType=="application/xml")||(d.isOpera&&(root.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(d.isIE?od.xml:(root.xmlVersion||od.xmlVersion));var r=_244(_252)(root);if(r&&r.nozip&&!qlc._wrap){return r;}return _250(r);};d.query.pseudos=_215;d._filterQueryResult=function(_253,_254,root){var _255=new d._NodeListCtor(),_256=_1eb(_254),_257=(_256.length==1&&!/[^\w#\.]/.test(_254))?_21c(_256[0]):function(node){return dojo.query(_254,root).indexOf(node)!=-1;};for(var x=0,te;te=_253[x];x++){if(_257(te)){_255.push(te);}}return _255;};};var _258=function(){acme={trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;},forEach:function(arr,_259,_25a){if(!arr||!arr.length){return;}for(var i=0,l=arr.length;i<l;++i){_259.call(_25a||window,arr[i],i,arr);}},byId:function(id,doc){if(typeof id=="string"){return (doc||document).getElementById(id);}else{return id;}},doc:document,NodeList:Array};var n=navigator;var dua=n.userAgent;var dav=n.appVersion;var tv=parseFloat(dav);acme.isOpera=(dua.indexOf("Opera")>=0)?tv:undefined;acme.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:undefined;acme.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;acme.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;var _25b=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_25b&&!acme.isChrome){acme.isSafari=parseFloat(dav.split("Version/")[1]);if(!acme.isSafari||parseFloat(dav.substr(_25b+7))<=419.3){acme.isSafari=2;}}if(document.all&&!acme.isOpera){acme.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;}Array._wrap=function(arr){return arr;};return acme;};if(dojo){dojo.provide("dojo._base.query");_1e4(this["queryPortability"]||this["acme"]||dojo);}else{_1e4(this["queryPortability"]||this["acme"]||_258());}})();}if(!dojo._hasResource["dojo._base.xhr"]){dojo._hasResource["dojo._base.xhr"]=true;dojo.provide("dojo._base.xhr");(function(){var _25c=dojo,cfg=_25c.config;function _25d(obj,name,_25e){if(_25e===null){return;}var val=obj[name];if(typeof val=="string"){obj[name]=[val,_25e];}else{if(_25c.isArray(val)){val.push(_25e);}else{obj[name]=_25e;}}};dojo.fieldToObject=function(_25f){var ret=null;var item=_25c.byId(_25f);if(item){var _260=item.name;var type=(item.type||"").toLowerCase();if(_260&&type&&!item.disabled){if(type=="radio"||type=="checkbox"){if(item.checked){ret=item.value;}}else{if(item.multiple){ret=[];_25c.query("option",item).forEach(function(opt){if(opt.selected){ret.push(opt.value);}});}else{ret=item.value;}}}}return ret;};dojo.formToObject=function(_261){var ret={};var _262="file|submit|image|reset|button|";_25c.forEach(dojo.byId(_261).elements,function(item){var _263=item.name;var type=(item.type||"").toLowerCase();if(_263&&type&&_262.indexOf(type)==-1&&!item.disabled){_25d(ret,_263,_25c.fieldToObject(item));if(type=="image"){ret[_263+".x"]=ret[_263+".y"]=ret[_263].x=ret[_263].y=0;}}});return ret;};dojo.objectToQuery=function(map){var enc=encodeURIComponent;var _264=[];var _265={};for(var name in map){var _266=map[name];if(_266!=_265[name]){var _267=enc(name)+"=";if(_25c.isArray(_266)){for(var i=0;i<_266.length;i++){_264.push(_267+enc(_266[i]));}}else{_264.push(_267+enc(_266));}}}return _264.join("&");};dojo.formToQuery=function(_268){return _25c.objectToQuery(_25c.formToObject(_268));};dojo.formToJson=function(_269,_26a){return _25c.toJson(_25c.formToObject(_269),_26a);};dojo.queryToObject=function(str){var ret={};var qp=str.split("&");var dec=decodeURIComponent;_25c.forEach(qp,function(item){if(item.length){var _26b=item.split("=");var name=dec(_26b.shift());var val=dec(_26b.join("="));if(typeof ret[name]=="string"){ret[name]=[ret[name]];}if(_25c.isArray(ret[name])){ret[name].push(val);}else{ret[name]=val;}}});return ret;};dojo._blockAsync=false;var _26c=_25c._contentHandlers=dojo.contentHandlers={text:function(xhr){return xhr.responseText;},json:function(xhr){return _25c.fromJson(xhr.responseText||null);},"json-comment-filtered":function(xhr){if(!dojo.config.useCommentedJson){console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");}var _26d=xhr.responseText;var _26e=_26d.indexOf("/*");var _26f=_26d.lastIndexOf("*/");if(_26e==-1||_26f==-1){throw new Error("JSON was not comment filtered");}return _25c.fromJson(_26d.substring(_26e+2,_26f));},javascript:function(xhr){return _25c.eval(xhr.responseText);},xml:function(xhr){var _270=xhr.responseXML;if(_25c.isIE&&(!_270||!_270.documentElement)){var ms=function(n){return "MSXML"+n+".DOMDocument";};var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];_25c.some(dp,function(p){try{var dom=new ActiveXObject(p);dom.async=false;dom.loadXML(xhr.responseText);_270=dom;}catch(e){return false;}return true;});}return _270;},"json-comment-optional":function(xhr){if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){return _26c["json-comment-filtered"](xhr);}else{return _26c["json"](xhr);}}};dojo._ioSetArgs=function(args,_271,_272,_273){var _274={args:args,url:args.url};var _275=null;if(args.form){var form=_25c.byId(args.form);var _276=form.getAttributeNode("action");_274.url=_274.url||(_276?_276.value:null);_275=_25c.formToObject(form);}var _277=[{}];if(_275){_277.push(_275);}if(args.content){_277.push(args.content);}if(args.preventCache){_277.push({"dojo.preventCache":new Date().valueOf()});}_274.query=_25c.objectToQuery(_25c.mixin.apply(null,_277));_274.handleAs=args.handleAs||"text";var d=new _25c.Deferred(_271);d.addCallbacks(_272,function(_278){return _273(_278,d);});var ld=args.load;if(ld&&_25c.isFunction(ld)){d.addCallback(function(_279){return ld.call(args,_279,_274);});}var err=args.error;if(err&&_25c.isFunction(err)){d.addErrback(function(_27a){return err.call(args,_27a,_274);});}var _27b=args.handle;if(_27b&&_25c.isFunction(_27b)){d.addBoth(function(_27c){return _27b.call(args,_27c,_274);});}if(cfg.ioPublish&&_25c.publish&&_274.args.ioPublish!==false){d.addCallbacks(function(res){_25c.publish("/dojo/io/load",[d,res]);return res;},function(res){_25c.publish("/dojo/io/error",[d,res]);return res;});d.addBoth(function(res){_25c.publish("/dojo/io/done",[d,res]);return res;});}d.ioArgs=_274;return d;};var _27d=function(dfd){dfd.canceled=true;var xhr=dfd.ioArgs.xhr;var _27e=typeof xhr.abort;if(_27e=="function"||_27e=="object"||_27e=="unknown"){xhr.abort();}var err=dfd.ioArgs.error;if(!err){err=new Error("xhr cancelled");err.dojoType="cancel";}return err;};var _27f=function(dfd){var ret=_26c[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);return ret===undefined?null:ret;};var _280=function(_281,dfd){if(!dfd.ioArgs.args.failOk){console.error(_281);}return _281;};var _282=null;var _283=[];var _284=0;var _285=function(dfd){if(_284<=0){_284=0;if(cfg.ioPublish&&_25c.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){_25c.publish("/dojo/io/stop");}}};var _286=function(){var now=(new Date()).getTime();if(!_25c._blockAsync){for(var i=0,tif;i<_283.length&&(tif=_283[i]);i++){var dfd=tif.dfd;var func=function(){if(!dfd||dfd.canceled||!tif.validCheck(dfd)){_283.splice(i--,1);_284-=1;}else{if(tif.ioCheck(dfd)){_283.splice(i--,1);tif.resHandle(dfd);_284-=1;}else{if(dfd.startTime){if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){_283.splice(i--,1);var err=new Error("timeout exceeded");err.dojoType="timeout";dfd.errback(err);dfd.cancel();_284-=1;}}}}};if(dojo.config.debugAtAllCosts){func.call(this);}else{try{func.call(this);}catch(e){dfd.errback(e);}}}}_285(dfd);if(!_283.length){clearInterval(_282);_282=null;return;}};dojo._ioCancelAll=function(){try{_25c.forEach(_283,function(i){try{i.dfd.cancel();}catch(e){}});}catch(e){}};if(_25c.isIE){_25c.addOnWindowUnload(_25c._ioCancelAll);}_25c._ioNotifyStart=function(dfd){if(cfg.ioPublish&&_25c.publish&&dfd.ioArgs.args.ioPublish!==false){if(!_284){_25c.publish("/dojo/io/start");}_284+=1;_25c.publish("/dojo/io/send",[dfd]);}};_25c._ioWatch=function(dfd,_287,_288,_289){var args=dfd.ioArgs.args;if(args.timeout){dfd.startTime=(new Date()).getTime();}_283.push({dfd:dfd,validCheck:_287,ioCheck:_288,resHandle:_289});if(!_282){_282=setInterval(_286,50);}if(args.sync){_286();}};var _28a="application/x-www-form-urlencoded";var _28b=function(dfd){return dfd.ioArgs.xhr.readyState;};var _28c=function(dfd){return 4==dfd.ioArgs.xhr.readyState;};var _28d=function(dfd){var xhr=dfd.ioArgs.xhr;if(_25c._isDocumentOk(xhr)){dfd.callback(dfd);}else{var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);err.status=xhr.status;err.responseText=xhr.responseText;dfd.errback(err);}};dojo._ioAddQueryToUrl=function(_28e){if(_28e.query.length){_28e.url+=(_28e.url.indexOf("?")==-1?"?":"&")+_28e.query;_28e.query=null;}};dojo.xhr=function(_28f,args,_290){var dfd=_25c._ioSetArgs(args,_27d,_27f,_280);var _291=dfd.ioArgs;var xhr=_291.xhr=_25c._xhrObj(_291.args);if(!xhr){dfd.cancel();return dfd;}if("postData" in args){_291.query=args.postData;}else{if("putData" in args){_291.query=args.putData;}else{if("rawBody" in args){_291.query=args.rawBody;}else{if((arguments.length>2&&!_290)||"POST|PUT".indexOf(_28f.toUpperCase())==-1){_25c._ioAddQueryToUrl(_291);}}}}xhr.open(_28f,_291.url,args.sync!==true,args.user||undefined,args.password||undefined);if(args.headers){for(var hdr in args.headers){if(hdr.toLowerCase()==="content-type"&&!args.contentType){args.contentType=args.headers[hdr];}else{if(args.headers[hdr]){xhr.setRequestHeader(hdr,args.headers[hdr]);}}}}xhr.setRequestHeader("Content-Type",args.contentType||_28a);if(!args.headers||!("X-Requested-With" in args.headers)){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}_25c._ioNotifyStart(dfd);if(dojo.config.debugAtAllCosts){xhr.send(_291.query);}else{try{xhr.send(_291.query);}catch(e){_291.error=e;dfd.cancel();}}_25c._ioWatch(dfd,_28b,_28c,_28d);xhr=null;return dfd;};dojo.xhrGet=function(args){return _25c.xhr("GET",args);};dojo.rawXhrPost=dojo.xhrPost=function(args){return _25c.xhr("POST",args,true);};dojo.rawXhrPut=dojo.xhrPut=function(args){return _25c.xhr("PUT",args,true);};dojo.xhrDelete=function(args){return _25c.xhr("DELETE",args);};})();}if(!dojo._hasResource["dojo._base.fx"]){dojo._hasResource["dojo._base.fx"]=true;dojo.provide("dojo._base.fx");(function(){var d=dojo;var _292=d._mixin;dojo._Line=function(_293,end){this.start=_293;this.end=end;};dojo._Line.prototype.getValue=function(n){return ((this.end-this.start)*n)+this.start;};dojo.Animation=function(args){_292(this,args);if(d.isArray(this.curve)){this.curve=new d._Line(this.curve[0],this.curve[1]);}};d._Animation=d.Animation;d.extend(dojo.Animation,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var _294=this._percent,_295=this.easing;return _295?_295(_294):_294;},_fire:function(evt,args){var a=args||[];if(this[evt]){if(d.config.debugAtAllCosts){this[evt].apply(this,a);}else{try{this[evt].apply(this,a);}catch(e){console.error("exception in animation handler for:",evt);console.error(e);}}}return this;},play:function(_296,_297){var _298=this;if(_298._delayTimer){_298._clearTimer();}if(_297){_298._stopTimer();_298._active=_298._paused=false;_298._percent=0;}else{if(_298._active&&!_298._paused){return _298;}}_298._fire("beforeBegin",[_298.node]);var de=_296||_298.delay,_299=dojo.hitch(_298,"_play",_297);if(de>0){_298._delayTimer=setTimeout(_299,de);return _298;}_299();return _298;},_play:function(_29a){var _29b=this;if(_29b._delayTimer){_29b._clearTimer();}_29b._startTime=new Date().valueOf();if(_29b._paused){_29b._startTime-=_29b.duration*_29b._percent;}_29b._active=true;_29b._paused=false;var _29c=_29b.curve.getValue(_29b._getStep());if(!_29b._percent){if(!_29b._startRepeatCount){_29b._startRepeatCount=_29b.repeat;}_29b._fire("onBegin",[_29c]);}_29b._fire("onPlay",[_29c]);_29b._cycle();return _29b;},pause:function(){var _29d=this;if(_29d._delayTimer){_29d._clearTimer();}_29d._stopTimer();if(!_29d._active){return _29d;}_29d._paused=true;_29d._fire("onPause",[_29d.curve.getValue(_29d._getStep())]);return _29d;},gotoPercent:function(_29e,_29f){var _2a0=this;_2a0._stopTimer();_2a0._active=_2a0._paused=true;_2a0._percent=_29e;if(_29f){_2a0.play();}return _2a0;},stop:function(_2a1){var _2a2=this;if(_2a2._delayTimer){_2a2._clearTimer();}if(!_2a2._timer){return _2a2;}_2a2._stopTimer();if(_2a1){_2a2._percent=1;}_2a2._fire("onStop",[_2a2.curve.getValue(_2a2._getStep())]);_2a2._active=_2a2._paused=false;return _2a2;},status:function(){if(this._active){return this._paused?"paused":"playing";}return "stopped";},_cycle:function(){var _2a3=this;if(_2a3._active){var curr=new Date().valueOf();var step=(curr-_2a3._startTime)/(_2a3.duration);if(step>=1){step=1;}_2a3._percent=step;if(_2a3.easing){step=_2a3.easing(step);}_2a3._fire("onAnimate",[_2a3.curve.getValue(step)]);if(_2a3._percent<1){_2a3._startTimer();}else{_2a3._active=false;if(_2a3.repeat>0){_2a3.repeat--;_2a3.play(null,true);}else{if(_2a3.repeat==-1){_2a3.play(null,true);}else{if(_2a3._startRepeatCount){_2a3.repeat=_2a3._startRepeatCount;_2a3._startRepeatCount=0;}}}_2a3._percent=0;_2a3._fire("onEnd",[_2a3.node]);!_2a3.repeat&&_2a3._stopTimer();}}return _2a3;},_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer;}});var ctr=0,_2a4=null,_2a5={run:function(){}};d.extend(d.Animation,{_startTimer:function(){if(!this._timer){this._timer=d.connect(_2a5,"run",this,"_cycle");ctr++;}if(!_2a4){_2a4=setInterval(d.hitch(_2a5,"run"),this.rate);}},_stopTimer:function(){if(this._timer){d.disconnect(this._timer);this._timer=null;ctr--;}if(ctr<=0){clearInterval(_2a4);_2a4=null;ctr=0;}}});var _2a6=d.isIE?function(node){var ns=node.style;if(!ns.width.length&&d.style(node,"width")=="auto"){ns.width="auto";}}:function(){};dojo._fade=function(args){args.node=d.byId(args.node);var _2a7=_292({properties:{}},args),_2a8=(_2a7.properties.opacity={});_2a8.start=!("start" in _2a7)?function(){return +d.style(_2a7.node,"opacity")||0;}:_2a7.start;_2a8.end=_2a7.end;var anim=d.animateProperty(_2a7);d.connect(anim,"beforeBegin",d.partial(_2a6,_2a7.node));return anim;};dojo.fadeIn=function(args){return d._fade(_292({end:1},args));};dojo.fadeOut=function(args){return d._fade(_292({end:0},args));};dojo._defaultEasing=function(n){return 0.5+((Math.sin((n+1.5)*Math.PI))/2);};var _2a9=function(_2aa){this._properties=_2aa;for(var p in _2aa){var prop=_2aa[p];if(prop.start instanceof d.Color){prop.tempColor=new d.Color();}}};_2a9.prototype.getValue=function(r){var ret={};for(var p in this._properties){var prop=this._properties[p],_2ab=prop.start;if(_2ab instanceof d.Color){ret[p]=d.blendColors(_2ab,prop.end,r,prop.tempColor).toCss();}else{if(!d.isArray(_2ab)){ret[p]=((prop.end-_2ab)*r)+_2ab+(p!="opacity"?prop.units||"px":0);}}}return ret;};dojo.animateProperty=function(args){var n=args.node=d.byId(args.node);if(!args.easing){args.easing=d._defaultEasing;}var anim=new d.Animation(args);d.connect(anim,"beforeBegin",anim,function(){var pm={};for(var p in this.properties){if(p=="width"||p=="height"){this.node.display="block";}var prop=this.properties[p];if(d.isFunction(prop)){prop=prop(n);}prop=pm[p]=_292({},(d.isObject(prop)?prop:{end:prop}));if(d.isFunction(prop.start)){prop.start=prop.start(n);}if(d.isFunction(prop.end)){prop.end=prop.end(n);}var _2ac=(p.toLowerCase().indexOf("color")>=0);function _2ad(node,p){var v={height:node.offsetHeight,width:node.offsetWidth}[p];if(v!==undefined){return v;}v=d.style(node,p);return (p=="opacity")?+v:(_2ac?v:parseFloat(v));};if(!("end" in prop)){prop.end=_2ad(n,p);}else{if(!("start" in prop)){prop.start=_2ad(n,p);}}if(_2ac){prop.start=new d.Color(prop.start);prop.end=new d.Color(prop.end);}else{prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);}}this.curve=new _2a9(pm);});d.connect(anim,"onAnimate",d.hitch(d,"style",anim.node));return anim;};dojo.anim=function(node,_2ae,_2af,_2b0,_2b1,_2b2){return d.animateProperty({node:node,duration:_2af||d.Animation.prototype.duration,properties:_2ae,easing:_2b0,onEnd:_2b1}).play(_2b2||0);};})();}if(!dojo._hasResource["dojo._base.browser"]){dojo._hasResource["dojo._base.browser"]=true;dojo.provide("dojo._base.browser");dojo.forEach(dojo.config.require,function(i){dojo["require"](i);});}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=true;dojo.provide("dojo._base");}if(dojo.isBrowser&&(document.readyState==="complete"||dojo.config.afterOnLoad)){window.setTimeout(dojo._loadInit,100);}})();
} 

var dojo = odojo;

var dijit = odijit;

var dojox = odojox;

/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.uacss"]){
dojo._hasResource["dojo.uacss"]=true;
dojo.provide("dojo.uacss");
(function(){
var d=dojo,_1=d.doc.documentElement,ie=d.isIE,_2=d.isOpera,_3=Math.floor,ff=d.isFF,_4=d.boxModel.replace(/-/,""),_5={dj_ie:ie,dj_ie6:_3(ie)==6,dj_ie7:_3(ie)==7,dj_ie8:_3(ie)==8,dj_ie9:_3(ie)==9,dj_quirks:d.isQuirks,dj_iequirks:ie&&d.isQuirks,dj_opera:_2,dj_khtml:d.isKhtml,dj_webkit:d.isWebKit,dj_safari:d.isSafari,dj_chrome:d.isChrome,dj_gecko:d.isMozilla,dj_ff3:_3(ff)==3};
_5["dj_"+_4]=true;
var _6="";
for(var _7 in _5){
if(_5[_7]){
_6+=_7+" ";
}
}
_1.className=d.trim(_1.className+" "+_6);
dojo._loaders.unshift(function(){
if(!dojo._isBodyLtr()){
var _8="dj_rtl dijitRtl "+_6.replace(/ /g,"-rtl ");
_1.className=d.trim(_1.className+" "+_8);
}
});
})();
}


/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.regexp"]){
dojo._hasResource["dojo.regexp"]=true;
dojo.provide("dojo.regexp");
dojo.getObject("regexp",true,dojo);
dojo.regexp.escapeString=function(_1,_2){
return _1.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(ch){
if(_2&&_2.indexOf(ch)!=-1){
return ch;
}
return "\\"+ch;
});
};
dojo.regexp.buildGroupRE=function(_3,re,_4){
if(!(_3 instanceof Array)){
return re(_3);
}
var b=[];
for(var i=0;i<_3.length;i++){
b.push(re(_3[i]));
}
return dojo.regexp.group(b.join("|"),_4);
};
dojo.regexp.group=function(_5,_6){
return "("+(_6?"?:":"")+_5+")";
};
}

/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.cookie"]){
dojo._hasResource["dojo.cookie"]=true;
dojo.provide("dojo.cookie");
dojo.require("dojo.regexp");
dojo.cookie=function(_1,_2,_3){
var c=document.cookie;
if(arguments.length==1){
var _4=c.match(new RegExp("(?:^|; )"+dojo.regexp.escapeString(_1)+"=([^;]*)"));
return _4?decodeURIComponent(_4[1]):undefined;
}else{
_3=_3||{};
var _5=_3.expires;
if(typeof _5=="number"){
var d=new Date();
d.setTime(d.getTime()+_5*24*60*60*1000);
_5=_3.expires=d;
}
if(_5&&_5.toUTCString){
_3.expires=_5.toUTCString();
}
_2=encodeURIComponent(_2);
var _6=_1+"="+_2,_7;
for(_7 in _3){
_6+="; "+_7;
var _8=_3[_7];
if(_8!==true){
_6+="="+_8;
}
}
document.cookie=_6;
}
};
dojo.cookie.isSupported=function(){
if(!("cookieEnabled" in navigator)){
this("__djCookieTest__","CookiesAllowed");
navigator.cookieEnabled=this("__djCookieTest__")=="CookiesAllowed";
if(navigator.cookieEnabled){
this("__djCookieTest__","",{expires:-1});
}
}
return navigator.cookieEnabled;
};
}

//toolTip usage:
// call dojo.global.toolTips.connectToolTips();

dojo.require("dojo.cookie");

dojo.declare("OfflajnParams", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.panelContainer = dojo.byId('module-sliders');
    var allpanels = dojo.query('.panel', this.panelContainer);
    var subpanels = dojo.query('.panel .panel', this.panelContainer);
    allpanels.diff(subpanels);
    this.panels = allpanels;
    this.relatedNews = dojo.byId('related-news-iframe');
    this.rightColumn = dojo.query('div.panel.dashboard .column.right', this.panelContainer)[0];
    this.boxTitle = dojo.query('.box-title', this.rightColumn)[0]; 
    this.contentBox = dojo.byId('content-box');
    this.generalInfo = dojo.query('.column.left iframe')[0];

    this.loadLastState();
    dojo.forEach(this.panels,function(panel,i){
      if(!dojo.attr(panel, 'id')){
        dojo.attr(panel, 'id', 'offlajnpanel-'+i)
      }
      var panelTitle = dojo.query('h3', panel)[0];
      dojo.connect(panelTitle,"onclick",this,"openClosePanel");
      var els = dojo.query('div.content', panel);
      if(els.length == 0) return;
      panelTitle.content = els[0];

      if(dojo.hasClass(panel, 'alwaysopen') || dojo.indexOf(this.lastState, dojo.attr(panel, "id")) >= 0){
        panelTitle.content.state = 1;  // Panel state: 1-open 0-close
        dojo.style(panelTitle.content,"opacity","1");
        dojo.style(panelTitle.content,"height","100%");
        dojo.style(panelTitle.content,"overflow","visible");
      }else{
        panelTitle.content.state = 0;  // Panel state: 1-open 0-close
        dojo.style(panelTitle.content,"opacity","0");
        dojo.style(panelTitle.content,"height","0");
        dojo.style(panelTitle.content,"overflow","hidden");
      }
    },this);
    dojo.connect(window, "onresize", this, "resizeBoxes");
    
    var optionsbasic30 = dojo.byId('options-basic');
    if(optionsbasic30)
      dojo.style(optionsbasic30, 'display', 'block');
    this.resizeBoxes();
    if(optionsbasic30)
      dojo.removeAttr(optionsbasic30, 'style');
    dojo.global.toolTips = this;
    this.connectToolTips();
    //window.labelFix = this.labelFix;
    //dojo.addOnLoad(window.labelFix);
  },
  
  loadLastState : function(){
    if(dojo.cookie.isSupported()){
      if(!dojo.cookie(this.moduleName+"lastState")){
        var config = new Array("offlajnpanel-0");
        dojo.cookie(this.moduleName+"lastState", dojo.toJson(config), { expires: 15 });
      }
      this.lastState = dojo.fromJson(dojo.cookie(this.moduleName+"lastState"));
    }
  },
    
  openClosePanel : function(event){
    var panelTitle = event.currentTarget;
    if(panelTitle.animation && panelTitle.animation.status() == "playing")
      panelTitle.animation.stop();
      
    if(panelTitle.content.state){
      panelTitle.content.state = 0;
      panelTitle.animation = dojo.animateProperty({
          node: panelTitle.content,
          properties: {
              height: 0,
              opacity : 0
          },
          beforeBegin: function(element){
            dojo.style(element,"overflow","hidden");
          },
          onEnd : function(element){
            element.state = 0;
          }
        }).play();
        this.lastState = dojo.fromJson(dojo.cookie(this.moduleName+"lastState"));
        var idx = this.lastState.indexOf(panelTitle.parentNode.id);
        if(idx!=-1) this.lastState.splice(idx, 1);
        dojo.cookie(this.moduleName+"lastState", dojo.toJson(this.lastState), { expires: 15 });
    }else{
      var height=0;
      if(this.joomla17){
        height = dojo.style(panelTitle.content.children[0],'height');
      }else{
        height = dojo.style(panelTitle.content.children[0],'height');
        if (panelTitle.content.children[1]){
          height+= dojo.style(panelTitle.content.children[1],'height');
        }
      }
      panelTitle.content.state = 1;
      panelTitle.animation = dojo.animateProperty({
          node: panelTitle.content,
          properties: {
              height: {end: height , units:"px" },   // onEndre 100% ra magasságot, hogy ne ugráljon témaváltáskor
              opacity : 1
          },
          beforeBegin: function(element){
            dojo.style(element,"overflow","hidden");
          },
          onEnd : function(element){
            element.state = 1;
            dojo.style(element,"height","100%");
            dojo.style(element,"overflow","visible");
          }
        }).play();
        
        this.lastState = dojo.fromJson(dojo.cookie(this.moduleName+"lastState"));
        this.lastState.push(panelTitle.parentNode.id);
        dojo.cookie(this.moduleName+"lastState", dojo.toJson(this.lastState), { expires: 15 });
    }
  },
  
  resizeBoxes : function(event){
    if(this.boxTitle || this.rightColumn) {
      var h = dojo.position(this.rightColumn).h-dojo.position(this.boxTitle).h;
    } else return;
    if (!h) return;
    if (this.relatedNews) this.relatedNews.style.height = h-1+"px";
    if (this.generalInfo) this.generalInfo.style.height = h-1+"px";
  },

  connectToolTips : function(parentElement){
    this.tips = dojo.query('.hasOfflajnTip', parentElement?parentElement:this.panelContainer);
    dojo.forEach(this.tips,function(tip){
      if (!tip.toolTipped) dojo.connect(tip,"onmouseenter",this,"showToolTip");
      tip.toolTipped = 1;
    },this);    
  },
  
  showToolTip : function(event){
    var element = event.currentTarget;
    if (element && !element.toolTipText){
      element.toolTipText = element.title;
      element.title = "";
      var pos = dojo.position(element, true);
      var tooltippos = dojo.attr(element,'tooltippos') ? dojo.attr(element,'tooltippos') : 'R';
      if(pos.x < 200) tooltippos = 'T';
      element.tooltip = new WW.ToolTip({
  	    parent: element,
  	    wnd: dojo.body(),
  	    pos: tooltippos,
  	    ico: "Inf",
  	    msg: element.toolTipText
  		});
    }
    element.tooltip.play();
  }/*,
  
  labelFix: function(c){
    if(!c) c = dojo.byId('module-sliders');
    var labels = dojo.query('li > label', c);
    dojo.forEach(labels, function(el){
      var h = dojo.contentBox(el.parentNode).h;
      console.log(h);
      dojo.marginBox(el, {'h':h});
    });
  }*/

});

dojo.declare("WW.ToolTip", null, {

	// msg: String
	//  message
	msg: "",

	// dur: Integer
	//  animation duration
	dur: 300,

	// ico: String
	//  message icon
	// values:
	//	"Inf", "Err"
	ico: "Err",

	// pos: String
	//  horizontal message position
	// values:
	//  "L", "R", "T", "B"
	pos: "L",

	constructor: function(args) {
	  dojo.mixin(this, args);
    var div = dojo.create('div', {
      'class' : 'tool-tip-container',
      'innerHTML' : '<span class="tooltip'+this.ico+'">'+this.msg+'<div class="arrow'+this.pos+'"></div></span>'
    });
	  this.domNode = dojo.place(div, dojo.body());
		dojo.style(this.domNode, "opacity", 0);
		var p = dojo.position(this.parent, true);
		var bw = dojo.position(document.documentElement).w;
		this.domNode.style.top = p.y + "px";
    if (this.pos != 'R') this.domNode.style.left = p.x + "px";
		this.domNode.style.display = "block";
    switch (this.pos) {
      case 'L' : this.prop = {left: {start:p.x+p.w+60, end:p.x+p.w+10}}; break;
      case 'R' : this.prop = {right:{start:bw-p.x+60, end:bw-p.x+10}}; break;
      case 'T' : this.prop = {top: {start:p.y-80, end:p.y-30}}; break;
      case 'B' : this.prop = {top: {start:p.y+p.h+60, end:p.y+p.h+10}}; break;
    }
		this.prop.opacity = 1;
  	this.ani = dojo.animateProperty({
	    node: this.domNode,
	    duration: this.dur,
	    properties: this.prop
		});
		this.onclickWnd = dojo.connect(this.parent, "onmouseleave", this, "close");
		this.onEsc = dojo.connect(document, "onkeypress", this, "onkeypress");
	},
  
  play: function(){
    if(this.ani2) this.ani2.stop();
		this.ani.play();
  },
	
	onkeypress: function(e) {
	  if (e.keyCode == 27) this.close();
	},

	close: function(event) {
	  this.ani.stop();
    //dojo.disconnect(this.onEsc);
	  //dojo.disconnect(this.onclickWnd);
    /*
	  var prop;
	    {left: this.prop.left.start} :
	    {right:this.prop.right.start};
    */
    switch (this.pos) {
      case 'L' : prop = {left: this.prop.left.start}; break;
      case 'R' : prop = {right:this.prop.right.start}; break;
      case 'T' : prop = {top:this.prop.top.start}; break;
      case 'B' : prop = {top:this.prop.bottom.start}; break;
    }
		prop.opacity = 0;
  	this.ani2 = dojo.animateProperty({
	    node: this.domNode,
	    duration: this.dur,
	    properties: prop/*,
			onEnd: function() {dojo.destroy(this.node)}*/
		}).play();
	}

});

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};




dojo.declare("ThemeConfigurator", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   if(!this.joomfish){
	  // var pane = dojo.place(this.themeSelector, dojo.byId('module-sliders') ? dojo.byId('module-sliders') : dojo.byId('menu-pane'), 'last');
   }else{
      var hides = dojo.query('.translateparams td .toolbar');
      dojo.forEach(hides,function(el){dojo.style(el, 'display', 'none')});
      var el = null;
      if(this.control == 'orig_params'){
        el = dojo.byId('original_value_params');
      }else if(this.control == 'defaultvalue_params'){
        el = dojo.byId('original_value_params');
      }else if(this.control == 'refField_params'){
        el = dojo.query('.translateparams .translateparams');
        el = el[0];
      }
      pane = dojo.place(this.themeSelector, el, 'last');
      if(this.control == 'defaultvalue_params'){
        dojo.style(pane, 'display', 'none');
      }
   }
   this.themeDetails = dojo.byId(this.id);
   this.title = dojo.byId(this.id.replace('-details', '-title'));
   this.selectTheme = dojo.byId(this.selectTheme);
   this.savedindex = this.selectTheme.selectedIndex;
   //this.savedindex = this.selectThemeIndex.value;
   dojo.connect(this.selectTheme, 'onchange', this, 'changeTheme');
   this.changeTheme();
   if(this.firstRun) setTimeout(dojo.hitch(this, 'changeSkin'), 500);
  },
  
  changeTheme: function(e){
    this.theme = this.selectTheme.value;
    if(this.theme == '' || this.theme == 'default') this.theme = 'default2';
    dojo.addClass(this.title, 'offlajnloading');
    this.themeDetails.innerHTML = '';
    var xhrArgs = {
      url: '',
      content: {
        'offlajnformrenderer': '1',
        'key': this.themeParams[this.theme]
      },
      load: dojo.hitch(this, function(e, data){
        dojo.removeClass(this.title, 'offlajnloading');
        this.themeDetails.innerHTML = data;
        window.head = document.getElementsByTagName('head')[0];
        dojo.query('link',this.themeDetails).forEach(function(el){
          dojo.place(el, head);
        });
        dojo.query('script',this.themeDetails).forEach(function(el){
          //dojo.place(el, head);
          var fileref=document.createElement('script');
          fileref.setAttribute("type","text/javascript")
          fileref.setAttribute("src", dojo.attr(el, 'src'));
          dojo.place(fileref, head);
        });
        if(e != undefined && this.savedindex != this.selectTheme.selectedIndex)
          dojo.addOnLoad(dojo.hitch(this, "changeSkin"));
        
        dojo.global.toolTips.connectToolTips(this.themeDetails);
      }, e),
      error: function(error){
      }
    }
    var deferred = dojo.xhrPost(xhrArgs);
    
    //this.themeDetails.innerHTML = this.themeParams[this.theme];
    
    ////dojo.addOnLoad(dojo.hitch(null,window.labelFix,this.themeDetails));
    //eval(this.themeScripts[this.theme]);
    /*
    if(e != undefined && this.savedindex != this.selectTheme.selectedIndex)
      dojo.addOnLoad(dojo.hitch(this, "changeSkin"));
    */
  },
  
  changeSkin: function(){
    var el = dojo.byId(this.control+'themethemeskin');
    if(!el) el = dojo.byId(this.control+'themeskin');
    if(!el) return; // Maybe bug
    if(el.selectedIndex != undefined){
      el.selectedIndex = 1;
      el.value = el.options[el.selectedIndex].value;
      this.fireEvent(el, 'change');
    }else{
      el.changeSkin = dojo.hitch(this, 'changeSkin');
    }
   // changeSkinsthemeskin(el);
  },
  
   fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
  
});



dojo.declare("OfflajnList", null, {
	constructor: function(args) {
    this.fireshow = 0;
    this.map = {};
    this.list = new Array;
	  dojo.mixin(this,args);
    this.showed = 0;
    this.focus = 0;
    this.zindex = 6;
    window.offlajnlistzindex = 10;
    if(this.height) this.height++;
    this.lineHeight = 20;
    this.init();
  },
  
  init: function() { 
    this.hidden = dojo.byId(this.name);
    this.active = this.hidden;
    
    this.hidden.listobj = this;
    this.hidden.options = this.options;
    this.hidden.selectedIndex = this.selectedIndex;

    dojo.connect(this.hidden, 'onchange', this, 'setValue');
    this.change = 0;
    
    this.container = dojo.byId('offlajnlistcontainer' + this.name);
    dojo.style(this.container, 'minWidth', Math.ceil(dojo.style(this.container, 'width')+1)+'px');
    if(dojo.isIE == 7) {
      var span = dojo.query('#offlajnlistcontainer' + this.name + ' span');
      dojo.style(this.container, 'width', dojo.style(span[0], 'width')+30+'px');
    }
    this.offlajnlist = dojo.query('.offlajnlist', this.container)[0];
    
    this.currentText = dojo.query('.offlajnlistcurrent', this.container)[0];
    dojo.connect(this.container, 'onclick', this, 'controller');
    this.options.forEach(function(o, i){
      this.map[o.value] = i;
    },this);
  },
  
  initSelectBox: function(){
    if(this.selectbox) return;
    
    this.selectbox = dojo.create('div', {'id': 'offlajnlistelements' + this.name, 'class': 'offlajnlistelements', 'innerHTML': this.elements }, this.container, "after");
    this.list = dojo.query('.listelement', this.selectbox);
    
    
    this.list.connect('onmouseenter', this, 'addActive');
    
    dojo.style(this.selectbox, {
      opacity: 0,
      display: 'block'
    });
    
    this.lineHeight = dojo.position(this.list[0]).h;
    dojo.style(this.selectbox, {
      height: (this.height) ? this.height * this.lineHeight + 'px' : 'auto'
    });
    
    if(this.height) {
      this.content = dojo.query('#offlajnlistelements' + this.name + ' .content')[0];
      dojo.style(this.content, 'height', this.list.length * this.lineHeight + 'px');
      this.scrollbar = new OfflajnScroller({
        'extraClass': 'single-select',
        'selectbox': this.selectbox,
        'content': this.content
      });
    }
    
    this.maxW = 0;
    this.list.forEach(function(el, i){
      if (this.options[i].value == 'optgroup') dojo.addClass(el, "optgroup");
      el.i = i;
    },this);
    
    this.list.connect('onclick', this, 'selected');
    
    this.selectbox.h = dojo.marginBox(this.selectbox).h;
    dojo.style(this.selectbox, {
      height: 0
    });
    dojo.connect(document, 'onclick', this, 'blur');
    dojo.connect(this.selectbox, 'onclick', this, 'focused');
    
    if(this.fireshow)
      this.fireEvent(this.hidden, 'click');
  },
  
  controller: function(){
    this.focused();
    this.initSelectBox();
    if(this.showed == 0){
      this.reposition();
      this.showList();
    }else{
      this.hideList();
    }
  },
  
  reposition: function(){
    var pos = dojo.coords(this.container, true);
    if(this.selectbox){
      dojo.style(this.selectbox, {
        left: pos.l + "px",
        top: pos.t + pos.h  + "px",
        width: pos.w -2 +"px" //-2px because of the side-borders
      });
      if(this.content) {
        dojo.style(this.content,{
        
         'width': pos.w - 12 + 'px',
         'float': 'left'
         });
      }
    }
  },
  
  showList: function(){
    if(this.anim) this.anim.stop();
    this.showed = 1;
    dojo.addClass(this.container,'openedlist');
    dojo.addClass(this.selectbox,'openedlist');
    dojo.removeClass(this.active,'active');
    dojo.addClass(this.list[this.hidden.selectedIndex],'selected active');
    if(this.height) {
      var p = this.hidden.selectedIndex * this.lineHeight;
      this.scrollbar.setPosition(p);
    }
    this.active = this.list[this.hidden.selectedIndex];
    
    dojo.style(this.offlajnlist, 'zIndex', ++window.offlajnlistzindex);
    dojo.style(this.selectbox, {
      display: 'block',
      zIndex: window.offlajnlistzindex-1
    });
    window.offlajnlistzindex++;
    
    this.anim = dojo.animateProperty({
      node: this.selectbox,
      properties: {
          opacity : 1,
          height: this.selectbox.h
      }
    }).play();
  },
  
  hideList: function(){
    if(this.anim) this.anim.stop();
    if(!this.selectbox) return;
    
    this.showed = 0;

    var h = dojo.marginBox(this.selectbox).h;
    dojo.removeClass(this.container,'openedlist');
    this.anim = dojo.animateProperty({
      node: this.selectbox,
      properties: {
          opacity : 0,
          height: 0
      },
      onEnd: dojo.hitch(this, function(el){
        dojo.style(el, {
          display: 'none',
          height: '0',
          zIndex: this.zindex-1
        });
        dojo.style(this.offlajnlist, 'zIndex', this.zindex);
        dojo.removeClass(this.selectbox,'openedlist');
      })
    }).play();
  },
  
  selected: function(e){
    if (dojo.hasClass(e.currentTarget, 'optgroup')) return;
    if(this.list[this.hidden.selectedIndex])
      dojo.removeClass(this.list[this.hidden.selectedIndex],'selected active');
    this.hidden.selectedIndex = e.target.i;
    this.hidden.value = this.hidden.options[this.hidden.selectedIndex].value;
    
    this.currentText.innerHTML = this.hidden.options[this.hidden.selectedIndex].text;
    if(this.list[this.hidden.selectedIndex])
      dojo.addClass(this.list[this.hidden.selectedIndex],'selected active');
    this.hideList();
    this.fireEvent(this.hidden, 'change');
    this.change = 0;
  },
  
  addActive: function(e){
    var el = e.target;
    if(el != this.active){
      dojo.removeClass(this.active,'active');
      dojo.addClass(el,'active');
      this.active = el;
    }
  },

  focused: function(){
    this.focus = 1;
  },

  blur: function(e){
    if(!this.focus){
      this.hideList();
    }
    this.focus = 0;
  },

  setValue: function(e) {
    if(!this.change && this.map[this.hidden.value] != this.hidden.selectedIndex) {
      this.change = 1;
      e.target.i = this.map[this.hidden.value] ? this.map[this.hidden.value] : 0;
      this.selected(e);
    }
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});

dojo.declare("OfflajnScroller", null, {
	constructor: function(args) {
   this.scrollspeed = 10;
   this.curr = 0;
	 dojo.mixin(this,args);
	 this.initScrollbar();
  },
  
  initScrollbar: function() {
    (!dojo.isMozilla) ? dojo.connect(this.selectbox, 'onmousewheel', this, 'scrollWheel') : dojo.connect(this.selectbox, 'DOMMouseScroll', this, 'scrollWheel');
    var right = dojo.create('div', {'class': 'gk_hack offlajnscrollerright'}, this.selectbox);
    this.sc = dojo.create('div', {'class': 'gk_hack offlajnscrollerbg'}, right);
    this.scrollbg = dojo.create('div', {'class': 'gk_hack offlajnscrollerscrollbg'}, this.sc);
    this.scrollbtn = dojo.create('div', {'class': 'gk_hack offlajnscrollerscrollbtn'} ,this.sc );
    if(this.extraClass) {
      dojo.addClass(right, this.extraClass);
      dojo.addClass(this.sc, this.extraClass);
      dojo.addClass(this.scrollbg, this.extraClass);
      dojo.addClass(this.scrollbtn, this.extraClass);
    }
    if(this.extraClass == 'multi-select') {
      this.scrollup = dojo.create('div', {'class': 'gk_hack offlajnscrollerarrowup'}, this.sc, 'first');
      this.scrolldown = dojo.create('div', {'class': 'gk_hack offlajnscrollerarrowdown' }, this.sc, 'last');     
      this.scrupc = dojo.connect(this.scrollup, 'onmousedown', this, 'upScroll');
      this.scrdownc = dojo.connect(this.scrolldown, 'onmousedown', this, 'downScroll');   
    }    
    dojo.connect(this.scrollbtn, 'onmousedown', this, 'onscrolldown');
    dojo.connect(this.scrollbg, 'onclick', this, 'scrollTo');
    this.scrbg = dojo.position(this.scrollbg, true);
    this.scrollbtnprop = dojo.position(this.scrollbtn, true);
    
    this.scrollReInit();
  },
  
  scrollReInit: function(){
    dojo.style(this.scrollbtn, 'display', 'block');
    this.maxHeight = parseInt(dojo.position(this.content).h);
    this.windowHeight = parseInt(dojo.style(this.selectbox, 'height'));
    this.scrollRatio = this.maxHeight/this.windowHeight;
    
    this.maxTop = -1 * (this.maxHeight-this.windowHeight);
    if(this.maxTop > 0) this.maxTop = 0;
    var scrollArrowHeight = 0;
    this.scrollHeight = 0;
    var marginVertical = dojo.marginBox(this.scrollbg).h-dojo.position(this.scrollbg).h;
    if(this.extraClass == 'multi-select') {
      scrollArrowHeight = dojo.marginBox(this.scrollup).h;
      this.scrollHeight = (this.windowHeight+(-2*scrollArrowHeight-marginVertical-2));
      this.scrollBtnmaxTop = (this.scrollHeight-this.scrollHeight/this.scrollRatio)-2;
    } else {
      this.scrollHeight = (this.windowHeight-10);
      this.scrollBtnmaxTop = (this.scrollHeight-this.scrollHeight/this.scrollRatio);
    }
    dojo.style(this.scrollbg, 'height', this.scrollHeight+'px');
    var scrollBtn = (this.scrollHeight/this.scrollRatio-2);
    if(scrollBtn<10){
      scrollBtn = 10;
      this.scrollBtnmaxTop = (this.scrollHeight-scrollBtn-2);
    }
    this.scrollBtnH = scrollBtn;
    dojo.style(this.scrollbtn, 'height', scrollBtn+'px');
    if(this.scrollBtnmaxTop < 0) this.scrollBtnmaxTop = 0; 
    if(this.windowHeight > this.maxHeight) this.hideScrollBtn();  
  },
  
  hideScrollBtn: function() {
    dojo.style(this.scrollbtn, 'display', 'none');
  },
  
  goToBottom: function(){
    this.scrolling(-1000,1000);
  },
  
  onscrolldown: function(e) {
    this.scrdown = 1;
    this.currentpos = e.clientY;
    this.scrbtnpos = dojo.style(this.scrollbtn, 'top');
    this.mousemove = dojo.connect(document, 'onmousemove', this, 'onscrollmove');
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
  },
  
  onscrollmove: function(e) {
    var diff = this.currentpos-e.clientY;
    if(diff == 0) return;
    var lastt = (dojo.style(this.scrollbtn, 'top'));
    var pos = dojo.style(this.content, 'top');
    this.scrolling(diff, 	(((lastt-diff)/this.scrollBtnmaxTop)*this.maxTop-pos)/diff);
    this.currentpos = e.clientY;
  },
  
  scrollTo: function(e) {
    var pos = e.clientY;
    var sc = dojo.position(this.scrollbg);
    var currpos = pos - sc.y;    
    if(currpos < this.maxTop) currpos = maxTop; 
    if(currpos > this.scrollBtnmaxTop) currpos = this.scrollBtnmaxTop;
    dojo.style(this.scrollbtn, 'top', currpos + 'px');
    var scroll = -1*currpos * this.scrollRatio;
    dojo.style(this.content, 'top', scroll + 'px');
  },
  
  setPosition: function(p) {
    var pos = -1*p;
    if(pos < this.maxTop) pos = this.maxTop;
    this.setScrollBtn(pos);
    dojo.style(this.content, 'top', pos + 'px');
  },
  
  onscrollup: function(e) {
    e.stopPropagation();
    this.scrdown = 0;
  },
  
  upScroll: function(e) {
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
    e.stopPropagation();
    this.btnScroll(1);
  },
  
  downScroll: function(e) {
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
    e.stopPropagation();
    this.btnScroll(-1);
  },
  
  btnScroll: function(direction){
    this.dscr = 1;
    var fn = dojo.hitch(this, 'scrolling', direction, this.scrollspeed/4);
    fn();
    this.inter = window.setInterval(fn, 50);
  },
    
  scrolling: function(p, ratio) {
    if(ratio == undefined) ratio = this.scrollspeed;
    var pos = dojo.style(this.content, 'top');
    var scr = pos + (p * ratio);

    
    if(scr < this.maxTop) scr = this.maxTop;
    if(scr > 0) scr = 0;
    dojo.style(this.content, 'top', scr + 'px');
   
    this.setScrollBtn(scr);
    this.curr = scr;
    this.onScroll();
  },
  
  onScroll: function(){
  
  },
    
  setScrollBtn: function(val) {
    var top = (this.scrollBtnmaxTop*(val/this.maxTop));
    dojo.style(this.scrollbtn, 'top', top+'px');
  },
  
  mouseUp: function(e) {
    if(this.mousemove)
      dojo.disconnect(this.mousemove);
    if(this.mouseup)
      dojo.disconnect(this.mouseup);
    e.stopPropagation();
    this.inter = window.clearInterval(this.inter);
    if( this.dscr == 1) {
      this.dscr = 0;
    }
  },
  
  scrollWheel: function(e) {
    var pos = 0;
    pos = (e.detail != "") ? e.detail : e.wheelDelta;  
    if(dojo.isMozilla || dojo.isOpera) {  
      if (pos < 0) {
        this.scrolling(1);
      } else {
        this.scrolling(-1);
      }
    } else {
      if (pos < 0) {
        this.scrolling(-1);
      } else {
        this.scrolling(1);
      }
    }
    dojo.stopEvent(e);
  }
  
});


dojo.declare("OfflajnText", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.init();
  },
  
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    dojo.connect(this.hidden, 'change', this, 'reset');
    
    this.input = dojo.byId(this.id+'input');
    this.switcher = dojo.byId(this.id+'unit');
  
    
    if(this.validation == 'int'){
      dojo.connect(this.input, 'keyup', this, 'validateInt');
      this.validateInt();
    }else if(this.validation == 'float'){
      dojo.connect(this.input, 'keyup', this, 'validateFloat');
      this.validateFloat();
    }
    dojo.connect(this.input, 'onblur', this, 'change');
    if(this.switcher){
      dojo.connect(this.switcher, 'change', this, 'change');
    }else{
      if(this.attachunit != '')
        this.switcher = {'value': this.attachunit, 'noelement':true};
      
    }
    this.container = dojo.byId('offlajntextcontainer' + this.id);
    if(this.mode == 'increment') {
      this.arrows = dojo.query('.arrow', this.container);
      dojo.connect(this.arrows[0], 'onmousedown', dojo.hitch(this, 'mouseDown', 1));
      dojo.connect(this.arrows[1], 'onmousedown', dojo.hitch(this, 'mouseDown', -1));
    }
    dojo.connect(this.input, 'onfocus', this, dojo.hitch(this, 'setFocus', 1));
    dojo.connect(this.input, 'onblur', this, dojo.hitch(this, 'setFocus', 0));
  },
  
  reset: function(e){
    if(this.hidden.value != this.input.value+(this.switcher? '||'+this.switcher.value : '')){
      var v = this.hidden.value.split('||');
      this.input.value = v[0];
      if(this.switcher && this.switcher.noelement != true){
        this.switcher.value = v[1];
        this.fireEvent(this.switcher, 'change');
      }
      if(e) dojo.stopEvent(e);
      this.fireEvent(this.input, 'change');
    }
  },
  
  change: function(){
    this.hidden.value = this.input.value+(this.switcher? '||'+this.switcher.value : '');
    this.fireEvent(this.hidden, 'change');
    if(this.onoff) this.hider();
  },
  
  setFocus: function(mode) {
    if(mode){
      dojo.addClass(this.input.parentNode, 'focus');
    } else {
      dojo.removeClass(this.input.parentNode, 'focus');
    }
  },
  
  hider: function() {
    if(!this.hiderdiv) {
      this.hiderdiv = dojo.create('div', {'class': 'offlajntext_hider'}, this.container);
      dojo.style(this.hiderdiv, 'width', dojo.position(this.container).w + 'px');
    }
    if(parseInt(this.switcher.value)) {
      dojo.style(this.container, 'opacity', '1');
      dojo.style(this.hiderdiv, 'display', 'none');
    } else {
      dojo.style(this.container, 'opacity', '0.5');
      dojo.style(this.hiderdiv, 'display', 'block');
    }
  },
  
  validateInt: function(){
    var val = parseInt(this.input.value, 10);
    if(!val) val = 0;
    this.input.value = val;
  },
  
  validateFloat: function(){
    var val = parseFloat(this.input.value);
    if(!val) val = 0;
    this.input.value = val;
  },
  
  mouseDown: function(m){
    dojo.connect(document, 'onmouseup', this, 'mouseUp');
    var f = dojo.hitch(this, 'modifyValue', m);
    f();
    this.interval = setInterval(f, 200);
  },
  
  mouseUp: function(){
    clearInterval(this.interval);
  },

  modifyValue: function(m) {
    var val = 0;
    if(this.validation == 'int') {
      val = parseInt(this.input.value);
    } else if(this.validation == 'float') {
      val = parseFloat(this.input.value);
    }
    val = val + m*this.scale;
    if(val < 0 && this.minus == 0) val = 0; 
    this.input.value = val;
    this.change();
    this.fireEvent(this.input, 'change');
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});


dojo.declare("OfflajnRadio", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   this.selected = -1;
	 this.init();
  },
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    this.hidden.radioobj = this;
    dojo.connect(this.hidden, 'change', this, 'reset');
    this.container = dojo.byId('offlajnradiocontainer' + this.id);
    this.items = dojo.query('.radioelement', this.container);
    if(this.mode == "image") this.imgitems = dojo.query('.radioelement_img', this.container);
    dojo.forEach(this.items, function(item, i){
      if(this.hidden.value == this.values[i]) this.selected = i;
      dojo.connect(item, 'onclick', dojo.hitch(this, 'selectItem', i));
    }, this);
    
    this.reset();
  },
  
  reset: function(){
    var i = this.map[this.hidden.value];
    if(!i) i = 0;
    this.selectItem(i);
  },
  
  selectItem: function(i) {
    if(this.selected == i) {
      if(this.mode == "image") this.changeImage(i);
     return;
    }
    if(this.selected >= 0) dojo.removeClass(this.items[this.selected], 'selected');
    if(this.mode == "image") this.changeImage(i);
    this.selected = i;
    dojo.addClass(this.items[this.selected], 'selected');
    if(this.hidden.value != this.values[this.selected]){
      this.hidden.value = this.values[this.selected];
      this.fireEvent(this.hidden, 'change');
    }
  },
  
  changeImage: function(i) {
    dojo.style(this.imgitems[this.selected], 'backgroundPosition', '0px 0px');
    dojo.style(this.imgitems[i], 'backgroundPosition', '0px -8px');
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});



dojo.declare("OfflajnCombine", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.fields = new Array();
    this.init();
  },
  
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    //console.log(this.hidden.value);
    dojo.connect(this.hidden, 'onchange', this, 'reset');
    for(var i = 0;i < this.num; i++){
      this.fields[i] = dojo.byId(this.id+i);
      this.fields[i].combineobj = this;
      if(this.fields[i].loaded) this.fields[i].loaded();
      dojo.connect(this.fields[i], 'change', this, 'change');
    }
    this.reset();
    
    this.outer = dojo.byId('offlajncombine_outer' + this.id);
    this.items = dojo.query('.offlajncombinefieldcontainer', this.outer);
    if(this.switcherid) {
      this.switcher = dojo.byId(this.switcherid);
      dojo.connect(this.switcher, 'onchange', this, 'hider');
      this.hider();
    }
  },
  
  reset: function(){
    this.value = this.hidden.value;
    //console.log(this.hidden);
    var values = this.value.split('|*|');
    for(var i = 0;i < this.num; i++){
      if(this.fields[i].value != values[i]){
        this.fields[i].value = values[i];
        this.fireEvent(this.fields[i], 'change');
      }
    }
  },
  
  change: function(){
    var value = '';
    for(var i = 0;i < this.num; i++){
      value+= this.fields[i].value+'|*|';
    }
    this.hidden.value = value;
    this.fireEvent(this.hidden, 'change');
  },
  
  hider: function() {
    var w = dojo.position(this.outer).w;
    if(!this.hiderdiv) { 
      this.hiderdiv = dojo.query('.offlajncombine_hider', this.switcher.parentNode.parentNode.parentNode)[0];
      dojo.style(this.hiderdiv, 'width',  w - 38 + 'px');
    }
    if(this.switcher.value == 0) {
      this.items.forEach(function(item, i){
        if(i >= this.hideafter && item != this.switcher.parentNode.parentNode) dojo.style(item, 'opacity', '0.5');
      }, this);
      if(this.hideafter == 0)
        dojo.style(this.hiderdiv, 'display', 'block');
    } else {
      this.items.forEach(function(item, i){
        if(item != this.switcher.parentNode.parentNode) dojo.style(item, 'opacity', '1');
      }, this);
      if(this.hideafter == 0)
        dojo.style(this.hiderdiv, 'display', 'none');
    }
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});


dojo.declare("OfflajnOnOff", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   this.w = 26;
	 this.init();
  },
  
  
  init: function() {
    this.switcher = dojo.byId('offlajnonoff' + this.id);
    this.input = dojo.byId(this.id);
    this.state = parseInt(this.input.value);
    this.click = dojo.connect(this.switcher, 'onclick', this, 'controller');
    if(this.mode == 'button') {
      this.img = dojo.query('.onoffbutton_img', this.switcher);
      if(dojo.hasClass(this.switcher, 'selected')) dojo.style(this.img[0], 'backgroundPosition', '0px -11px'); 
    } else {
      dojo.connect(this.switcher, 'onmousedown', this, 'mousedown');
    }
    dojo.connect(this.input, 'onchange', this, 'setValue');
  },
  
  controller: function() {
    if(!this.mode) {
      if(this.anim) this.anim.stop();
      this.state ? this.setOff() : this.setOn();
    } else if(this.mode == "button") {
      this.state ? this.setBtnOff() : this.setBtnOn();
    }
  },
    
  setBtnOn: function() {
    dojo.style(this.img[0], 'backgroundPosition', '0px -11px');
    dojo.addClass(this.switcher, 'selected');
    this.changeState(1);
  },
  
  setBtnOff: function() {
    dojo.style(this.img[0], 'backgroundPosition', '0px 0px');
    dojo.removeClass(this.switcher, 'selected');
    this.changeState(0);
  },
  
  setValue: function() {
    if(this.state != this.input.value) {
      this.controller();
    }
  },
  
  changeState: function(state){
    if(this.state != state){
      this.state = state;
      this.stateChanged();
    }
  },  
  
  stateChanged: function(){
    this.input.value = this.state;
    this.fireEvent(this.input, 'change'); 
  },
  
  mousedown: function(e){
    this.startState = this.state;
    this.move = dojo.connect(document, 'onmousemove', this, 'mousemove');
    this.up = dojo.connect(document, 'onmouseup', this, 'mouseup');
    this.startX = e.clientX;
  },
  
  mousemove: function(e){
    var x = e.clientX-this.startX;
    if(!this.startState) x-=this.w;
    if(x > 0){
      x = 0;
      this.changeState(1);
    }
    if(x < -1*this.w){
      x = -1*this.w;
      this.changeState(0);
    }
		var str = x+"px 0px";
    dojo.style(this.switcher,"backgroundPosition",str);
  },
  
  mouseup: function(e){
    dojo.disconnect(this.move);
    dojo.disconnect(this.up);
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  },
  
  getBgpos: function() {
    var pos = dojo.style(this.switcher, 'backgroundPosition');
    if(dojo.isIE <= 8){
      pos = dojo.style(this.switcher, 'backgroundPositionX')+' '+dojo.style(this.switcher, 'backgroundPositionY');
    }
    var bgp = pos.split(' ');
    bgp[0] = parseInt(bgp[0]);
    return !bgp[0] ? 0 : bgp[0];
  },
  
  setOn: function() {
    this.changeState(1);
    
    this.anim = new dojo.Animation({
      curve: new dojo._Line(this.getBgpos(),0),
      node: this.switcher,
      onAnimate: function(){
				var str = Math.floor(arguments[0])+"px 0px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  },
  
  
  setOff: function() {
    this.changeState(0);
      
    this.anim = new dojo.Animation({
      curve: new dojo._Line(this.getBgpos(), -1*this.w),
      node: this.switcher,
      onAnimate: function(){
				var str = Math.floor(arguments[0])+"px 0px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  }
  
});
dojo.addOnLoad(function(){
      var offlajnParams = new OfflajnParams({
        joomla17 : 1,
        moduleName : "mod_improved_ajax_login"
      });
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTabthemetheme",
        elements: "<div class=\"content\"><div class=\"listelement\">Elegant<\/div><\/div>",
        options: [{"value":"elegant","text":"Elegant"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      var theme = new ThemeConfigurator({
        id: "jformparamsmoduleparametersTabtheme-details",
        selectTheme: "jformparamsmoduleparametersTabthemetheme",
        themeSelector: null,
        themeParams: {"default":"","elegant":"f811bc496c0f777cc56764e64a44a36b"},
        themeScripts: {"default":""},
        joomfish: 0,
        control: "jformparamsmoduleparametersTab",
        firstRun: ""
      });
    

      new OfflajnText({
        id: "jformparamsmoduleparametersTabheader",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnRadio({
        id: "jformparamsmoduleparametersTabusername",
        values: ["1","2","0"],
        map: {"1":0,"2":1,"0":2},
        mode: ""
      });
    

      new OfflajnRadio({
        id: "jformparamsmoduleparametersTabname",
        values: ["0","1"],
        map: [0,1],
        mode: ""
      });
    

      new OfflajnRadio({
        id: "jformparamsmoduleparametersTabrememberme",
        values: ["1","0"],
        map: {"1":0,"0":1},
        mode: ""
      });
    

      new OfflajnRadio({
        id: "jformparamsmoduleparametersTabopenevent",
        values: ["onclick","onmouseenter"],
        map: {"onclick":0,"onmouseenter":1},
        mode: ""
      });
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTablogin",
        elements: "<div class=\"content\"><div class=\"listelement\">[ Actual Page ]<\/div><div class=\"listelement\">Main Menu<\/div><div class=\"listelement\">&nbsp;&nbsp;&nbsp;Home<\/div><\/div>",
        options: [{"value":"","text":"[ Actual Page ]"},{"value":"optgroup","text":"Main Menu"},{"value":"101","text":"&nbsp;&nbsp;&nbsp;Home"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTablogout",
        elements: "<div class=\"content\"><div class=\"listelement\">[ Actual Page ]<\/div><div class=\"listelement\">Main Menu<\/div><div class=\"listelement\">&nbsp;&nbsp;&nbsp;Home<\/div><\/div>",
        options: [{"value":"","text":"[ Actual Page ]"},{"value":"optgroup","text":"Main Menu"},{"value":"101","text":"&nbsp;&nbsp;&nbsp;Home"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTabusermenu",
        elements: "<div class=\"content\"><div class=\"listelement\">[ Default ]<\/div><div class=\"listelement\">Mainmenu<\/div><\/div>",
        options: [{"value":"","text":"[ Default ]"},{"value":"mainmenu","text":"Mainmenu"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTabmypage0",
        elements: "<div class=\"content\"><div class=\"listelement\">[ Custom ]<\/div><div class=\"listelement\">Joomla<\/div><div class=\"listelement\">VirtueMart<\/div><div class=\"listelement\">HikaShop<\/div><div class=\"listelement\">Community Builder<\/div><div class=\"listelement\">JomSocial<\/div><\/div>",
        options: [{"value":"custom","text":"[ Custom ]"},{"value":"joomla","text":"Joomla"},{"value":"virtuemart","text":"VirtueMart"},{"value":"hikashop","text":"HikaShop"},{"value":"community","text":"Community Builder"},{"value":"jomsocial","text":"JomSocial"}],
        selectedIndex: 1,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnText({
        id: "jformparamsmoduleparametersTabmypage1",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnCombine({
        id: "jformparamsmoduleparametersTabmypage",
        num: 2,
        switcherid: "",
        hideafter: "0"
      }); 
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTabregpage0",
        elements: "<div class=\"content\"><div class=\"listelement\">[ Custom ]<\/div><div class=\"listelement\">Joomla<\/div><div class=\"listelement\">VirtueMart<\/div><div class=\"listelement\">HikaShop<\/div><div class=\"listelement\">Community Builder<\/div><div class=\"listelement\">JomSocial<\/div><\/div>",
        options: [{"value":"custom","text":"[ Custom ]"},{"value":"joomla","text":"Joomla"},{"value":"virtuemart","text":"VirtueMart"},{"value":"hikashop","text":"HikaShop"},{"value":"community","text":"Community Builder"},{"value":"jomsocial","text":"JomSocial"}],
        selectedIndex: 1,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnText({
        id: "jformparamsmoduleparametersTabregpage1",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnCombine({
        id: "jformparamsmoduleparametersTabregpage",
        num: 2,
        switcherid: "",
        hideafter: "0"
      }); 
    

      new OfflajnList({
        name: "jformparamsmoduleparametersTabregistration",
        elements: "<div class=\"content\"><div class=\"listelement\">System default<\/div><div class=\"listelement\">No<\/div><div class=\"listelement\">Yes<\/div><div class=\"listelement\">Yes, but hide register button<\/div><\/div>",
        options: [{"value":"def","text":"System default"},{"value":"0","text":"No"},{"value":"1","text":"Yes"},{"value":"hide","text":"Yes, but hide register button"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabprofile",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabshowcart",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabloginpopup",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabforgotname",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabshowhint",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsmoduleparametersTabwndcenter",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamssocialTabsocial",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamssocialTabsocialprofil",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnRadio({
        id: "jformparamssocialTabsocialregauto",
        values: ["1","0"],
        map: {"1":0,"0":1},
        mode: ""
      });
    

      new OfflajnRadio({
        id: "jformparamssocialTabsocialpos",
        values: ["top","bottom"],
        map: {"top":0,"bottom":1},
        mode: ""
      });
    

      new OfflajnRadio({
        id: "jformparamssocialTabicontype",
        values: ["btnIco","socialIco"],
        map: {"btnIco":0,"socialIco":1},
        mode: ""
      });
    

      new OfflajnOnOff({
        id: "jformparamscaptchaTabcaptcha",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnText({
        id: "jformparamscaptchaTabpublic_key",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamscaptchaTabprivate_key",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabmoduleclass_sfx",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsadvancedTabusesecure",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnOnOff({
        id: "jformparamsadvancedTabuse_curl",
        mode: "",
        imgs: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabtop_module",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabbottom_module",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabreg_top",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabreg_bottom",
        validation: "",
        attachunit: "",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

      new OfflajnText({
        id: "jformparamsadvancedTabtimeout",
        validation: "int",
        attachunit: "ms",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    });
      djConfig = {};})();