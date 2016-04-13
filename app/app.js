angular.module('pizza', [
    'ngRoute',
    'pizzas.pizza',
    'pizzas.toppings',
    'pizzas.toppingsList',
    'pizzas.create',
    'pizzas.toppingsCreate'
])
.config(function ($routeProvider) {
    $routeProvider.when('/pizza', {
        controller: 'PizzaCtrl',
        templateUrl: 'app/components/pizza/pizza.html'
    })
    .when('/', {
        controller: 'PizzaCtrl',
        templateUrl: 'app/components/pizza/pizza.html'
    })
    .when('/pizza/create', {
        controller: 'PizzaCreateCtrl',
        templateUrl: 'app/components/pizza/createPizza.html'
    })
    .when('/toppings', {
        controller: 'AddPizzaToppingsCtrl',
        templateUrl: 'app/components/toppings/pizzaToppings.html'
    })
    .when('/toppings/list', {
        controller: 'ListToppingsCtrl',
        templateUrl: 'app/components/toppings/toppingsList.html'
    })
   .when('/toppings/create', {
        controller: 'ToppingsCreateCtrl',
        templateUrl: 'app/components/toppings/createToppings.html'
    });
});