app.controller("hrisController", function ($scope, UserService, hrisFactory, DTOptionsBuilder, DTColumnDefBuilder) {
	$scope.user =  sessionStorage.getItem('username');
	$scope.alert = null;
	$scope.alertType = null;
	$scope.showDept = null;
	$scope.categories;
	$scope.pageno = [];
	$scope.dtInstance = {};
	var link = '';

	$scope.departemen;
    $scope.dtOptions = DTOptionsBuilder.newOptions()
	    .withPaginationType('full_numbers')
	    .withDisplayLength(5);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];

    function loadDept(){

		console.log('load');

		hrisFactory.readDepartemen().then(function successCallback(response){
			console.log(response.data.rows);
			$scope.departemen = response.data.rows;
			// $scope.page = response.data.total;

		}, function errorCallback(response){
			console.log("Unable to read record.");
		});
	};


	loadDept();

	$scope.newDept = function(){
		$scope.alertType = null;
		$scope.id_departemen = null;
		$scope.departemen_name = null;
		// $scope.dlgCategory.modal('show');
		$scope.showDept = 'true';
		link = 'save';
		console.log('new');
	}

	$scope.editDept = function(departemen){
		console.log(departemen);
		$scope.id_departemen = departemen.id_departemen;
		$scope.departemen_name = departemen.departemen_name;
		
		$scope.alertType = null;
	}

	$scope.saveDept = function(){
		console.log(link);
		if (link == 'save') {
			hrisFactory.createDepartemen($scope).then(function successCallback(response){
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.id_departemen = null;
				$scope.departemen_name = null;
	    		$('#dlgDept').modal('hide');
	    		loadDept();
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    	});
		}else{
			console.log('edit ');
			hrisFactory.updateDepartemen($scope).then(function successCallback(response){
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.id_departemen = null;
				$scope.departemen_name = null;
	    		$('#dlgDept').modal('hide');
	    		loadDept();
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    	});
		}
	};

	$scope.deleteDept = function(id){
		console.log('delete '+id);
		hrisFactory.deleteDepartemen(id).then(function successCallback(response){
    		console.log(response);
    		loadDept();
            
    	}, function errorCallback(response){
    		console.log(response);
    	});
	}
});
