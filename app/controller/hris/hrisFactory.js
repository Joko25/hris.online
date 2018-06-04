app.factory("hrisFactory", function($http){
	var factory = {};
	factory.readDepartemen = function(){
		return $http({
			method: 'get',
			url: 'http://localhost:8080/hris.online.ask/class/model/hris/read_departemen.php'
		})
	}

	factory.createDepartemen = function($scope){
		// console.log('factory '+$scope.departemen_name);
		return $http({
			method: 'POST',
			data: {
				// "id_category" : $scope.id_category,
				// "category" : $scope.category,
				"departemen_name" : $scope.departemen_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/hris/create_departemen.php'
		});
	}

	factory.updateDepartemen = function($scope){
		return $http({
			method: 'POST',
			data: {
				"id_departemen" : $scope.id_departemen,
				// "category" : $scope.category,
				"departemen_name" : $scope.departemen_name
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/hris/update_departemen.php'
		});
	}

	factory.deleteDepartemen = function(id){
		return $http({
			method: 'POST',
			data: {
				"id_departemen" : id
			},
			// url: "http://localhost/hris.online/class/admin/create_category.php"
			url: 'http://localhost:8080/hris.online.ask/class/model/hris/delete_departemen.php'
		});
	}
	return factory;
});