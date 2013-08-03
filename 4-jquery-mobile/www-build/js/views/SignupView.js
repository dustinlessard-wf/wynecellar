define(["jquery","underscore","backbone","stackmobinit","text!templates/signUpTemplate.html"],function(e,t,n,r,i){var s=n.View.extend({events:{"click #signUpBtn":"signup","click #loginBtn":"login","click #statusBtn":"status","click #logoutBtn":"logout"},initialize:function(){this.template=t.template(i),this.router=this.options.router},render:function(t){return e(this.el).html(this.template()),this},signup:function(t){t.preventDefault();var n=e("#signUpForm input.username").val(),i=e("#signUpForm input.password").val(),s=new r.User({username:n,password:i});return s.create({success:function(e){console.log(e.toJSON())},error:function(e){console.log(e)}}),this},login:function(t){t.preventDefault();var n=e("#signUpForm input.username").val(),i=e("#signUpForm input.password").val(),s=new r.User({username:n,password:i});return s.login(!0,{success:function(e){console.log(e)},error:function(e){console.log(e)}}),this},status:function(e){return e.preventDefault(),console.log(r.isLoggedIn()),this},logout:function(e){e.preventDefault();var t=new r.User;return t.logout({success:function(){console.log("logout success")},error:function(e){console.log(e)}}),this}});return s});