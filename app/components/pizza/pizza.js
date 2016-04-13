angular.module('pizzas.pizza',['ui.bootstrap'])
    .controller('PizzaCtrl', function ($scope, $http, $location, $window, $rootScope) {
        $scope.pizzas = [];

        $http({
            url: SERVICE_BASE + '/pizzas',
            method: 'GET'
        }).then(function (response) {
            $scope.toppings = [];
            angular.forEach(response.data, function (v) {

                $http({
                    url: SERVICE_BASE + '/pizzas/' + v.id + '/toppings',
                    method: 'GET'
                }).then(function (toppingsResponse) {
                    var toppings = '';
                    angular.forEach(toppingsResponse.data, function (t) {
                        toppings = toppings + t.name + ',' ;
                    });
                    v.toppings = toppings.slice(0, -1);;
                });

                if (v.name !== null && v.description !== null) {
                    $scope.pizzas.push(v);
                }
            });
        }, function (response) {
            //alert(response.data);
        });

        $scope.getPizzaTopping = function(pizzaItem)
        {
            $scope.pizzaItem = pizzaItem;
            $rootScope.pizzaItem = pizzaItem;
            window.location = "#/toppings/";
        };
});
