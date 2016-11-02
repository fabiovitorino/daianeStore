// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
 var push = PushNotification.init({ "android": {"senderID": "572383350390", icon : "Daiane_icone_96_96"},
        "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
    
   push.on('registration', function(data) {
       //console.log(data);
       //alert(data.registrationId);
       $rootScope.registrationId = data.registrationId; 
       //alert($rootScope.registrationId);
   });
    // Este é o evento no qual implementando o comportamento do nosso app
   // quando o usuário clicar na notificação
    push.on('notification', function(data) {
       //alert('Notificação acionada, agora deve-se implementar a navegação no app de acordo com os dados: ' + //JSON.stringify(data));
   });
   push.on('error', function(e) {
       alert('registration error: ' + e.message);
   });

  });
})