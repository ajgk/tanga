angular.module('pizzas.toppingsCreate',['ui.bootstrap'])
    .controller('ToppingsCreateCtrl', function ($scope, $http, $location, $window, $rootScope){

    $scope.createToppings = function(name)
    {
        var toppingItems = {};
        var topping;

        toppingItems.topping = topping;

        var toppingItem = {
            "name": name,
        }

        toppingItems.topping = toppingItem;

        $http.post(SERVICE_BASE + '/toppings',
            JSON.stringify(toppingItems)).success(function (data, status) {
              window.location = "#/";
         })
    }
});