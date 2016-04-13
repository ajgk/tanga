angular.module('pizzas.toppingsList',['ui.bootstrap'])
    .controller('ListToppingsCtrl', function ($scope, $http, $location, $window, $rootScope)
    {
        $scope.toppings = [];
        $http({
            url: SERVICE_BASE + '/toppings',
            method: 'GET'
        }).then(function (response) {
            $scope.pizzas = [];
            $scope.toppings = response.data;
        }, function (response) {
            alert(response.data);
        });
});
    
