app.controller("adminController", function ($scope, UserService) {
	// body...
	$scope.user =  sessionStorage.getItem('username');
	// console.log(sessionStorage.getItem('username'));
});