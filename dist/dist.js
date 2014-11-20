(function(exports,global){global["true"]=exports;var _base;if(this.Scribe==null){this.Scribe={}}if((_base=this.Scribe).Mixins==null){_base.Mixins={}}Scribe.Mixins.GetterSetters={mixin:function(instance,propNames){return function(){var capitalize;capitalize=function(str){return str.charAt(0).toUpperCase()+str.substring(1)};return propNames.forEach(function(prop){return Object.defineProperty(instance,prop,{get:function(){var e;try{return this["_get"+capitalize(prop)]()}catch(_error){e=_error;e.message="_get"+capitalize(prop)+"() failed:\n "+e.message;throw e}},set:function(val){var e;try{return this["_set"+capitalize(prop)](val)}catch(_error){e=_error;e.message="_set"+capitalize(prop)+"() failed:\n "+e.message;throw e}}})})}()}};var __hasProp={}.hasOwnProperty;Scribe.Mixins.Settable={set:function(keyOrObj,val){var key;if(typeof keyOrObj==="string"&&typeof val!=="undefined"){this[keyOrObj]=val}else if(typeof keyOrObj==="object"&&typeof val==="undefined"){for(key in keyOrObj){if(!__hasProp.call(keyOrObj,key))continue;val=keyOrObj[key];this[key]=val}}else{throw new Error("set() was called with incorrect arguments")}return val||keyOrObj}};Scribe.Mixins.Settable.mixin=function(context){return context.set=this.set.bind(context)};Scribe.Mixins.Triggerable={on:function(eventName,callback){var _base;eventName=eventName.toLowerCase();if((_base=this._eventsHash)[eventName]==null){_base[eventName]=[]}return this._eventsHash[eventName].push(callback)},off:function(eventName,callback){var cbIdx,_base;eventName=eventName.toLowerCase();if(callback!=null){if((_base=this._eventsHash)[eventName]==null){_base[eventName]=[]}cbIdx=this._eventsHash[eventName].indexOf(callback);if(cbIdx>-1){return this._eventsHash[eventName].splice(cbIdx)}}else{return this._eventsHash[eventName]=[]}},trigger:function(eventName){var cb,_i,_len,_ref;eventName=eventName.toLowerCase();_ref=this._eventsHash[eventName]||[];for(_i=0,_len=_ref.length;_i<_len;_i++){cb=_ref[_i];cb()}return null}};Scribe.Mixins.Triggerable.mixin=function(context){context._eventsHash={};context.on=this.on.bind(context);context.off=this.off.bind(context);return context.trigger=this.trigger.bind(context)};Scribe.Environment=function(){function Environment(){}Environment.cwd=null;Environment.argv=[];Environment.env={};Environment.platform=null;return Environment}();(function(){return Scribe.Mixins.GetterSetters.mixin(Scribe.Environment,["cwd","argv","env"])})();Scribe.Engine=function(){function Engine(){}Engine.current=null;Engine.prototype.parent=null;Engine.prototype.nativeObject=null;Engine.prototype.jsGlobal=null;Engine.prototype["eval"]=function(jsCode){return this._eval(jsCode)};return Engine}();(function(){Scribe.Mixins.GetterSetters.mixin(Scribe.Engine.prototype,["nativeObject","parent","jsGlobal"]);return Scribe.Mixins.GetterSetters.mixin(Scribe.Engine,["current"])})();Scribe.Menu=function(){Menu.create=function(items,opts){return new this(items,opts)};Menu.prototype.nativeObject=null;function Menu(items,opts){}Menu.prototype.bootstrapOSX=function(){};Menu.prototype.show=function(window){};return Menu}();(function(){return Scribe.Mixins.GetterSetters.mixin(Scribe.Menu.prototype,["nativeObject"])})();Scribe.Screen=function(){Screen.all=null;Screen.prototype.width=0;Screen.prototype.height=0;Screen.prototype.nativeObject=null;function Screen(opts){if(opts==null){opts={}}if(opts.nativeObject!=null){this._nativeObject=opts.nativeObject}}return Screen}();(function(){Scribe.Mixins.Triggerable.mixin(Scribe.Screen);Scribe.Mixins.GetterSetters.mixin(Scribe.Screen.prototype,["width","height","nativeObject"]);return Scribe.Mixins.GetterSetters.mixin(Scribe.Screen,["all"])})();Scribe.Window=function(){Window.current=null;Window.broadcastMessage=function(message){return this._broadcastMessage(message)};Window.create=function(opts){if(opts==null){opts={}}return new this(opts)};Window.prototype.fullscreen=false;Window.prototype.title=null;Window.prototype.chrome=true;Window.prototype.closable=true;Window.prototype.resizable=true;Window.prototype.visible=false;Window.prototype.left=0;Window.prototype.top=0;Window.prototype.width=0;Window.prototype.height=0;Window.prototype.alpha=1;Window.prototype.topmost=false;Window.prototype.sameOriginPolicy=true;Window.prototype.nativeObject=null;Window.prototype.jsGlobal=null;Window.prototype.engine=null;function Window(opts){if(opts==null){opts={}}Scribe.Mixins.Triggerable.mixin(this);Scribe.Mixins.Settable.mixin(this);if(opts.nativeObject!=null){this._nativeObject=opts.nativeObject}else{this._createWindow(opts)}}Window.prototype.show=function(){return this._show()};Window.prototype.hide=function(){return this._hide()};Window.prototype.close=function(){return this._close()};Window.prototype.minimize=function(){return this._minimize()};Window.prototype.deminimize=function(){return this._deminimize()};Window.prototype.center=function(){return this._center()};Window.prototype.navigateToURL=function(url){return this._navigateToURL(url)};Window.prototype.postMessage=function(message){return this._postMessage(message)};return Window}();(function(){return Scribe.Mixins.GetterSetters.mixin(Scribe.Window.prototype,["fullscreen","title","closable","resizable","left","top","width","height","alpha","topmost","sameOriginPolicy","nativeObject","visible","jsGlobal"])})();exports["_base"]=_base;exports["__hasProp"]=__hasProp})({},function(){return this}());