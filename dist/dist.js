var Scribe;Scribe={Mixins:{}};Scribe.Menu=function(){function t(t){if(t==null){t={}}Scribe.Mixins.Triggerable.mixin(this)}return t}();Scribe.Mixins.Triggerable={on:function(t,e){var n;t=t.toLowerCase();if((n=this._eventsHash)[t]==null){n[t]=[]}return this._eventsHash[t].push(e)},off:function(t,e){var n,r;t=t.toLowerCase();if(e!=null){if((r=this._eventsHash)[t]==null){r[t]=[]}n=idx(this._eventsHash[t].indexOf(e));if(n>-1){return this._eventsHash[t].splice(n)}}else{return this._eventsHash[t]=[]}},trigger:function(t){var e,n,r,i,o;t=t.toLowerCase();i=this._eventsHash[t];o=[];for(n=0,r=i.length;n<r;n++){e=i[n];o.push(e())}return o}};Scribe.Mixins.Triggerable.mixin=function(t){t._eventsHash={};t.on=this.on;return t.trigger=this.trigger};var __hasProp={}.hasOwnProperty;Scribe.Window=function(){t.currentWindow=function(){return notImplemented()};t.create=function(t){if(t==null){t={}}return new this(t)};t.prototype.fullscreen=false;t.prototype.title=null;t.prototype.closable=true;t.prototype.resizable=true;t.prototype.left=0;t.prototype.top=0;t.prototype.width=0;t.prototype.height=0;t.prototype.alpha=1;t.prototype.topmost=false;t.prototype.sameOriginPolicy=true;t.prototype.nativeBrowserObject=null;t.prototype.nativeWindowObject=null;function t(t){var e,n;if(t==null){t={}}this._createWindow(t);for(e in t){if(!__hasProp.call(t,e))continue;n=t[e];if(this[e]!=null){this[e]=n}}Scribe.Mixins.Triggerable.mixin(this)}t.prototype.show=function(){return notImplemented()};t.prototype.hide=function(){return notImplemented()};t.prototype.center=function(){return notImplemented()};t.prototype.navigateToURL=function(t){return notImplemented()};return t}();(function(){var t,e;t=["fullscreen","title","closable","resizable","left","top","width","height","alpha","topmost","sameOriginPolicy"];e=function(t){return t.charAt(0).toUpperCase()+t.substring(1)};return t.forEach(function(t){return Object.defineProperty(Scribe.Window.prototype,t,{get:function(){return this["_get"+e(t)]()},set:function(n){return this["_set"+e(t)](n)}})})})();(function(){var t;t={Mixins:{}}}).call(this);(function(){Scribe.Menu=function(){function t(t){if(t==null){t={}}Scribe.Mixins.Triggerable.mixin(this)}return t}()}).call(this);(function(){Scribe.Mixins.Triggerable={on:function(t,e){var n;t=t.toLowerCase();if((n=this._eventsHash)[t]==null){n[t]=[]}return this._eventsHash[t].push(e)},off:function(t,e){var n,r;t=t.toLowerCase();if(e!=null){if((r=this._eventsHash)[t]==null){r[t]=[]}n=idx(this._eventsHash[t].indexOf(e));if(n>-1){return this._eventsHash[t].splice(n)}}else{return this._eventsHash[t]=[]}},trigger:function(t){var e,n,r,i,o;t=t.toLowerCase();i=this._eventsHash[t];o=[];for(n=0,r=i.length;n<r;n++){e=i[n];o.push(e())}return o}};Scribe.Mixins.Triggerable.mixin=function(t){t._eventsHash={};t.on=this.on;return t.trigger=this.trigger}}).call(this);(function(){var t={}.hasOwnProperty;Scribe.Window=function(){e.currentWindow=function(){return notImplemented()};e.create=function(t){if(t==null){t={}}return new this(t)};e.prototype.fullscreen=false;e.prototype.title=null;e.prototype.closable=true;e.prototype.resizable=true;e.prototype.left=0;e.prototype.top=0;e.prototype.width=0;e.prototype.height=0;e.prototype.alpha=1;e.prototype.topmost=false;e.prototype.sameOriginPolicy=true;e.prototype.nativeBrowserObject=null;e.prototype.nativeWindowObject=null;function e(e){var n,r;if(e==null){e={}}this._createWindow(e);for(n in e){if(!t.call(e,n))continue;r=e[n];if(this[n]!=null){this[n]=r}}Scribe.Mixins.Triggerable.mixin(this)}e.prototype.show=function(){return notImplemented()};e.prototype.hide=function(){return notImplemented()};e.prototype.center=function(){return notImplemented()};e.prototype.navigateToURL=function(t){return notImplemented()};return e}();(function(){var t,e;t=["fullscreen","title","closable","resizable","left","top","width","height","alpha","topmost","sameOriginPolicy"];e=function(t){return t.charAt(0).toUpperCase()+t.substring(1)};return t.forEach(function(t){return Object.defineProperty(Scribe.Window.prototype,t,{get:function(){return this["_get"+e(t)]()},set:function(n){return this["_set"+e(t)](n)}})})})()}).call(this);