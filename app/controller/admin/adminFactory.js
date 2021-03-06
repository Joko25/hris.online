app.factory("adminFactory", function($http){
	var factory = {};
	
	// CATEGORY FACTORY
	factory.createCategory = function($scope){
		return $http({
			method: 'POST',
			data: {
				"id_category" : $scope.id_category,
				"category" : $scope.category,
				"category_name" : $scope.category_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/create_category.php'
		});
	}

	factory.updateCategory = function($scope){
		return $http({
			method: 'POST',
			data: {
				"id_category" : $scope.id_category,
				"category" : $scope.category,
				"category_name" : $scope.category_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/update_category.php'
		});
	}

	factory.deleteCategory = function(id){
		return $http({
			method: 'POST',
			data: {
				"category" : id
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/delete_category.php'
		});
	}

	factory.readCategory = function(page, limit){
		console.log('http://localhost:8080/hris.online.ask/class/model/admin/read_category.php?page='+page+'&limit='+limit);
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/read_category.php'
		})
	}

	factory.jsonCategory = function(){
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/json_category.php'
		})
	}


	// PRODUCTS FACTORY 
	factory.readProducts = function(page, limit){
		// console.log('http://localhost:8080/hris.online.ask/class/model/admin/read_category.php?page='+page+'&limit='+limit);
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/read_products.php'
		})
	}
	
	factory.createProduct = function($scope){
		//console.log($scope);

		return $http({
			method: 'POST',
			data: {
				"part_no" : $scope.part_no,
				"part_name" : $scope.part_name,
				"category" : $scope.category,
				"prodfam" : $scope.prodfam,
				"description" : $scope.description,
				"images" : "default.jpg"
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/create_product.php'
		});
	}

	factory.updateProduct = function($scope){
		console.log($scope);
		return $http({
			method: 'POST',
			data: {
				"part_no" : $scope.part_no,
				"part_name" : $scope.part_name,
				"category" : $scope.category,
				"prodfam" : $scope.prodfam,
				"description" : $scope.description,
				"images" : "default.jpg"
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/update_product.php'
		});

	}

	factory.deleteProduct = function(id){
		return $http({
			method: 'POST',
			data: {
				"part_no" : id
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/delete_product.php'
		});
	}

	// FACTORY PRODFAM

	factory.readProdfam = function(){
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/read_prodfam.php'
		})
	}

	factory.jsonProdfam = function(){
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/json_prodfam.php'
		})
	}

	factory.createProdfam = function($scope){
		return $http({
			method: 'POST',
			data: {
				"prodfam" : $scope.prodfam,
				"prodfam_name" : $scope.prodfam_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/create_prodfam.php'
		});
	}

	factory.updateProdfam = function($scope){
		return $http({
			method: 'POST',
			data: {
				"prodfam" : $scope.prodfam,
				"prodfam_name" : $scope.prodfam_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/update_prodfam.php'
		});
	}

	factory.deleteProdfam = function(id){
		return $http({
			method: 'POST',
			data: {
				"prodfam" : id
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/admin/delete_prodfam.php'
		});
	}

	return factory;
});