define([
  'jquery',
  'views/home/LogoutButtonView',
  'views/home/LoginButtonView'
], function($,LogoutButtonView,LoginButtonView){
  $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };


  $.fn.setLoginLogoutButton = function(el) {

    $.mobile.loading( 'show', {
            text: "Logging out!",
            textVisible: true,
            theme: "b"
    });
  
    var user = new StackMob.User({username: StackMob.getLoggedInUser()});
    user.logout({
      success: function() {
        $('a#logoutBtn').remove();
        var content = el.find(":jqmData(role='header')");
        var loginButton = new LoginButtonView();

        $.mobile.loading('hide');
        content.append(loginButton.render().el).trigger('create');

      },
      error: function(error) {
        console.log(error);
        $.mobile.loading('hide');
      }
    }); 
  };

  return $;
});
