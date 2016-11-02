angular.module('app.directives', [])

.directive('fworkFocus', function ($timeout, $parse) {
    return {
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fworkFocus);
            scope.$watch(model, function (value) {
                if (value === true) {
                    $timeout(function () {
                        scope.$apply(model.assign(scope, false));
                        element[0].focus();
                    }, 30);
                }
            });
        }
    };
})

.directive('map', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);
          var myLatlng = new google.maps.LatLng(lat,lng),
          mapOptions = {
                zoom: zValue,
                center: myLatlng
            },
          map = new google.maps.Map(element[0],mapOptions),
          marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                draggable:true
          });
        }
    };
});