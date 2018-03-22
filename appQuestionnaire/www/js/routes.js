angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page2',
    params: {
      radio: null
    },
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page3',
    params: {
      radio: null,
      check1: null,
      check2: null,
      check3: null,
      check4: null
    },
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page4',
    params: {
      radio: null,
      check1: null,
      check2: null,
      check3: null,
      check4: null,
      comment: null
    },
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page5',
    params: {
      radio: null,
      check1: null,
      check2: null,
      check3: null,
      check4: null,
      comment: null,
      name: null,
      email: null,
      phone: null
    },
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});
