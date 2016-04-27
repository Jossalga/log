// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

     $rootScope.authStatus = false;
	 //stateChange event
	  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
		  $rootScope.authStatus = toState.authStatus;
		  if($rootScope.authStatus){


		  }
    });

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		console.log("URL : "+toState.url);
		if(toState.url=='/dashboard'){
			console.log("match : "+toState.url);
			$timeout(function(){
				angular.element(document.querySelector('#leftMenu' )).removeClass("hide");
			},1000);
		}
	});

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.php',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signin.php'
      }
    },
	authStatus: false
  })
 .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signup.php',
      }
   },
	authStatus: false
  })
//--------------------------------------


  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.php',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })

  /*.state('app.search', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.php',
    controller: 'DashCtrl'
      }
     },
   authStatus: true
  })*/


   .state('app.profile1', {
    url: '/profile1',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile1.php',
    controller: 'ProfileCtrl'
      }
     },
   authStatus: true
  })


.state('app.profile2', {
    url: '/profile2',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.php',
    controller: 'ProfileCtrl'
      }
     },
   authStatus: true
  })

    .state('app.profiles', {
      url: '/profiles',
      views: {
        'menuContent': {
          templateUrl: 'templates/profiles.php',
          controller: 'ProfilesCtrl'
        }
      }
    })



  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile-detail.php',
        controller: 'ProfileCtrl'
      }
    }
  })







  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
