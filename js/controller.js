var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
$routeProvider
.when('/', {
template: 'Welcome user!'
})
.when('/anotherPage', {
template: 'Welcome user, again'
})
.otherwise({
redirectTo: '/'
});
});

app.controller('myCtrl', function() {
// let it be blank..
});


