angular.module('app.controllers', [])

.controller('daianeEventosMenuCtrl', function($scope, $rootScope, $ionicLoading, $http) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            if ($rootScope.registrationId) {$scope.fworkEscopo.registrationId = $rootScope.registrationId};
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
})

.controller('metasCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkRetorno = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.fworkEscopo.tituloListagem='Acumulado mês atual';
        $scope.fworkEscopo.periodo='atual';
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			})
                .then(function successCallback(response) {
                $scope.fworkRetorno = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };

    $scope.mesAtual = function () {
        $scope.fworkEscopo.periodo='atual';
        $scope.metodoInicial('metas^daianeEventosCtrl')
    };

    $scope.mesAnterior = function () {
        $scope.fworkEscopo.periodo='anterior';
        $scope.metodoInicial('metas^daianeEventosCtrl')
    };
    
})

.controller('defeitosCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkRetorno = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.fworkEscopo.tituloListagem='Acumulado mês atual';
        $scope.fworkEscopo.periodo='atual';
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			})
                .then(function successCallback(response) {
                $scope.fworkRetorno = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };

    $scope.mesAtual = function () {
        $scope.fworkEscopo.periodo='atual';
        $scope.fworkEscopo.tituloListagem='Acumulado mês atual';
        $scope.metodoInicial('metas^daianeEventosCtrl')
    };

    $scope.mesAnterior = function () {
        $scope.fworkEscopo.periodo='anterior';
        $scope.fworkEscopo.tituloListagem='Acumulado mês Anterior';
        $scope.metodoInicial('metas^daianeEventosCtrl')
    };
    
})

.controller('cardapioCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('vagasCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})


.controller('aniversarioCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('eventosCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };

    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('fraseSemanaCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };
    
    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('promocaoCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };
    
    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('avisosCtrl', function($scope, $http, $state, $ionicLoading) {
        $scope.fworkEscopo = {};
        $scope.fworkEscopo.codEmpresa = 1;
        $scope.eventoRotina = function(fworkEvento) {
            $ionicLoading.show({content: 'Loading', animation: 'fade-in', showBackdrop: true, maxWidth: 200, showDelay: 0});
            $scope.fworkEscopo.fworkEvento = fworkEvento;
            $scope.fworkEscopo.fworkProgramaCgi = 'daianeEventosCtrl';
            $http({
				method  : 'GET',
				url     : 'http://daiane.fabiotech.com.br/cgi-bin/daianeWeb.cgi',
                //url     : 'http://localhost/csp/daiane/daianeEventosCtrl.csp',
				params  : $scope.fworkEscopo,
				headers : {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
                $scope.fworkEscopo = response.data;
                console.log($scope.fworkEscopo);
                $ionicLoading.hide();
            }, function errorCallback(response) {
                $ionicLoading.hide();
                alert('Sem concexão verifique a internet do seu dispositivo!');
            });

  };
    
    $scope.metodoInicial = function (fworkEvento) {
        $scope.eventoRotina(fworkEvento);
    };
    
})

.controller('googleMapCtrl', function($scope, $stateParams) {
 $scope.latitude = $stateParams.latitude;
 $scope.longitude = $stateParams.longitude;
})

.controller('contatoCtrl', function($scope) {

});