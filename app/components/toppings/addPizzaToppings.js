angular.module('pizzas.toppings',['ui.bootstrap'])
   .controller('AddPizzaToppingsCtrl', function ($scope, $http, $location, 
   		$window, $rootScope) {

   		$scope.pizzaItem = $rootScope.pizzaItem;
        $scope.toppings = [];
    	$http({
            url: SERVICE_BASE + '/toppings',
            method: 'GET'
        }).then(function (response) {
    		angular.forEach(response.data, function (v) {
                if (v.name !== null && v.id !== null) {
                	if ($scope.pizzaItem.toppings.split(',').indexOf(v.name) == -1)
                    	$scope.toppings.push(v);
                }
            });
        }, function (response) {
            console.log(response.data);
        });

		$scope.addToppingToPizza = function (pizzaItem) {
        $rootScope.pizzaItem = pizzaItem;
        var toppingItem = {
            "topping_id": $scope.selected,
        }

        $http.post(SERVICE_BASE + '/pizzas/' + pizzaItem.id + '/toppings',
           JSON.stringify(toppingItem)).success(function (data, status) {
               window.location = "#/";
           })
        }
    });
  