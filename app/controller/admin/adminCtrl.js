app.controller("adminController", function ($scope, UserService, adminFactory, DTOptionsBuilder, DTColumnDefBuilder) {
	// body...
	$scope.user =  sessionStorage.getItem('username');
	$scope.alert = null;
	$scope.alertType = null;
	$scope.showCat = null;
	$scope.categories;
	$scope.pageno = [];
	$scope.dtInstance = {};
	var link = '';

	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(5);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];

	function loadCat(page, limit){

		console.log('load');

		var a = page;
		var b = limit;

		adminFactory.readCategory().then(function successCallback(response){
			// console.log(Math.round(response.data.total/5));
			$scope.categories = response.data.rows;
			// $scope.page = response.data.total;

		}, function errorCallback(response){
			console.log("Unable to read record.");
		});
	}

	loadCat();

	$scope.load = function(page, limit){
		console.log('load '+page+' '+limit);
		$scope.pageno = [];
		$scope.categories = [];
		loadCat((page+1), limit);
	}


	// console.log(sessionStorage.getItem('username'));

	$scope.saveCat = function(){
		console.log(link);
		if (link == 'save') {
			adminFactory.createCategory($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.id_category = null;
				$scope.category = null;
				$scope.category_name = null;
	    		loadCat();
	    		// $scope.dtInstance.rerender();
	    		$('#dlgCategory').modal('hide');
	            // $scope.showToast(response.data.message);
	     
	            // refresh the list
	            // $scope.readCategory();
	     
	            // close dialog
	            // $scope.cancel();
	     
	            // remove form values
	            // $scope.clearCategoryForm();
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    		// $scope.showToast("Unable to create record.");
	    	});
		}else{
			console.log('edit');
		}
	};

	$scope.newCat = function(){
		$scope.alertType = null;
		$scope.id_category = null;
		$scope.category = null;
		$scope.category_name = null;
		// $scope.dlgCategory.modal('show');
		$scope.showCat = 'true';
		link = 'save';
		console.log('new');
	}

	$scope.editModal = function(category, category_name){
		$scope.alertType = null;
		$scope.category = category;
		$scope.category_name = category_name;
		link = 'update';
		//document.getElementById('dlgCategory').modal('show');
	}
});

app.controller("productController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, adminFactory){
    // var vm = this;
    // vm.persons = [];
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(5);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];

    adminFactory.readCategory(1,10).then(function successCallback(response){
		// console.log(Math.round(response.data.total/5));
		$scope.categories = response.data.rows;
		// $scope.page = response.data.total;

		// for (var i = 0; i < Math.round(response.data.total/5); i++) {
		// 	console.log(i);
		// 	$scope.pageno.push(i);
		// }
	}, function errorCallback(response){
		console.log("Unable to read record.");
	});
});