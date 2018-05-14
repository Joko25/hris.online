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
	.when('/hris',{
		templateUrl : 'app/view/hris/hris.html',
		controller : 'adminController'
	})
	.when('/page_index',{
		templateUrl : 'app/view/admin/page_index.html',
		controller : 'adminController'
	})
	.when('/page_index',{
		templateUrl : 'app/view/admin/page_index.html',
		controller : 'adminController'
	})
	.when('/page_product',{
		templateUrl : 'app/view/admin/page_product.html',
		controller : 'adminController'
	})
	.when('/page_career',{
		templateUrl : 'app/view/admin/page_career.html',
		controller : 'adminController'
	})
	.when('/master_product',{
		templateUrl : 'app/view/admin/master_product.html',
		controller : 'productController'
	})
	.when('/master_category',{
		templateUrl : 'app/view/admin/master_category.html',
		controller : 'adminController'
	})
	.when('/master_prodfam',{
		templateUrl : 'app/view/admin/master_prodfam.html',
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