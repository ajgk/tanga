angular.module('pizzas.create',['ui.bootstrap'])
    .controller('PizzaCreateCtrl', function ($scope, $http, $location, $window, $rootScope) {

    $scope.createPizza = function(name, description)
    {
        var pizzaItems = {};
        var pizza;

        pizzaItems.pizza = pizza;
       
        var pizzaItem = {
            "name": name,
            "description": description
        }

        pizzaItems.pizza = pizzaItem;
        $http.post(SERVICE_BASE + '/pizzas',
            JSON.stringify(pizzaItems)).success(function (data, status) {
            window.location = "#/";
        })
    }
});