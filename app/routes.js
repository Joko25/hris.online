app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'app/view/dashboard/index.html',
		controller : 'welcomeController'
	})
	.when('/menu',{
		templateUrl : 'app/view/menu/read_menu.view.html',
		controller : 'menuController'
	})
	.when('/login',{
		templateUrl : 'app/view/login/login.html'
	})
	.when('/reg',{
		templateUrl : 'app/view/login/registrasi.html'
	})
	.when('/career',{
		templateUrl : 'app/view/career/career.html',
		controller : 'careerController'
	})
	.otherwise({
		redirectTo : '/login'
	})
});