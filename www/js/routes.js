angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

 .state('tabsController.daianeEventosMenu', {
    cache: false,
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/daianeEventosMenu.html',
        controller: 'daianeEventosMenuCtrl'
      }
    }
  })
  
  .state('tabsController.metas', {
    cache: false,
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/metas.html',
        controller: 'metasCtrl'
      }
    }
  })
  
  .state('tabsController.defeitos', {
    cache: false,
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/defeitos.html',
        controller: 'defeitosCtrl'
      }
    }
  })
  
  .state('tabsController.cardapio', {
    cache: false,
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/cardapio.html',
        controller: 'cardapioCtrl'
      }
    }
  })
  
  .state('tabsController.vagas', {
    cache: false,
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/vagas.html',
        controller: 'vagasCtrl'
      }
    }
  })
  
  .state('tabsController.aniversario', {
    cache: false,
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/aniversario.html',
        controller: 'aniversarioCtrl'
      }
    }
  })
  
  .state('tabsController.eventos', {
    cache: false,
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/eventosEspeciais.html',
        controller: 'eventosCtrl'
      }
    }
  })

.state('tabsController.fraseSemana', {
    cache: false,
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/fraseSemana.html',
        controller: 'fraseSemanaCtrl'
      }
    }
  })
  
.state('tabsController.promocao', {
    cache: false,
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/promocaoLoja.html',
        controller: 'promocaoCtrl'
      }
    }
  })
  
.state('tabsController.avisos', {
    cache: false,
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/quadroAvisos.html',
        controller: 'avisosCtrl'
      }
    }
  })

 .state('tabsController.googleMap', {
    url: '/page14/{latitude}/{longitude}',
    views: {
      'tab1': {
        templateUrl: 'templates/googleMap.html',
        controller: 'googleMapCtrl'
      }
    }
  })
  
  
  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});