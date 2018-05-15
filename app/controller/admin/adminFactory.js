app.factory("adminFactory", function($http){
	var factory = {};
	
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

	return factory;
});