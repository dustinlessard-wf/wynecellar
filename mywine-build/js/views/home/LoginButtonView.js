define(["jquery","underscore","backbone","stackmobinit"],function(e,t,n,r){var i=n.View.extend({tagName:"a",className:"login ui-btn-left",initialize:function(){this.render()},render:function(){var e=this.$el,t=StackMob.isLoggedIn();return e.attr("data-role","button"),e.attr("href","#login"),e.attr("id","loginBtn"),e.attr("data-theme","b"),e.text("Login"),this}});return i});