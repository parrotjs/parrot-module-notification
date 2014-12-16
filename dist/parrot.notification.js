/**
 * parrot-module-notification - Basic scaffold for create a parrot module.
 * @version v0.12.14
 * @link    https://github.com/parrotjs/parrot-module-notification
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){!function(){var t,n;return t={},n=require("fn-partial"),parrot.notification={getOrUpdate:function(n,i){var e;if(null==i&&(i=void 0),null!=i)for(e in i)t[n][e]=i[e];return t[n]},add:function(i){var e;return e=i.name,delete i.name,t[e]=i,this[e]=n(this.getOrUpdate,e),this},show:function(t,n){var i,e;return 1===arguments.length&&"object"==typeof t&&(n=t,t=void 0),e=function(t){var n,i;try{return Notification.requestPermission(),i=t.title,delete t.title,new Notification(i,t)}catch(e){throw n=e,console.log(n),new Error("Notification API is not available.")}},null==t?e(n):(i=this.getOrUpdate(t,n),e(i))}}}()}).call(this);