app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'app/view/dashboard/index.html',
		controller : 'welcomeController'
	})
	.when('/menu',{
		templateUrl : 'app/view/menu/read_menu.view.html',
		controller : 'menuController'
	})
	.when('/administrator',{
		templateUrl : 'app/view/admin/admin.html',
		controller : 'adminController'
	})
	.when('/login',{
		templateUrl : 'app/view/login/login.html',
		controller: 'loginController'
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