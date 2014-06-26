

angular.module('bbq-pi', [])

  .controller('AppCtrl',
    ['$scope', '$http', '$interval', function($scope, $http, $interval) {

      $scope.temps = ['-','-'];

      $interval(function() {
        $http({method: 'GET', url: '/getdata'}).
          success(function(data, status, headers, config) {
            $scope.temps = data;
          }).
          error(function(data, status, headers, config) {
            $scope.temps = ['e','e'];
          });},
      500);

    }]);