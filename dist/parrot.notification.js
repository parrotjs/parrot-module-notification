/**
 * parrot-module-notification - Interact with HTML5 Notifications. It makes easy to reuse notifications..
 * @version v1.1.25
 * @link    https://github.com/parrotjs/parrot-module-notification
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function(){!function(){var t;return t={},parrot.notification={getOrUpdate:function(i,n){var e;if(null==n&&(n=void 0),null!=n)for(e in n)t[i][e]=n[e];return t[i]},add:function(i){var n;return n=i.name,delete i.name,t[n]=i,this[n]=require("fn-partial")(this.getOrUpdate,n),this},show:function(t,i){var n,e;return 1===arguments.length&&"object"==typeof t&&(i=t,t=void 0),e=function(t){var i,n;try{return Notification.requestPermission(),n=t.title,delete t.title,new Notification(n,t)}catch(e){throw i=e,new Error("Notification API is not available.")}},null==t?e(i):(n=this.getOrUpdate(t,i),e(n))}}}()}).call(this);