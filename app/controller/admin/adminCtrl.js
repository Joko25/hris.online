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
			console.log(response.data.rows);
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

	$scope.deleteCat = function(id){
		console.log('delete '+id);
		adminFactory.deleteCategory(id).then(function successCallback(response){
    		// tell the user new product was created
    		console.log(response);
    		$scope.alert = response.data.message;
    		$scope.alertType = 'alert-success';
    		$scope.id_category = null;
			$scope.category = null;
			$scope.category_name = null;
    		loadCat();
    		$('#dlgCategory').modal('hide');
            
    	}, function errorCallback(response){
    		console.log(response);
    		$scope.alert = "Unable to create record.";
    		$scope.alertType = 'alert-danger';
    		// $scope.showToast("Unable to create record.");
    	});
	}

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
			console.log('edit ');
			adminFactory.updateCategory($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.id_category = null;
				$scope.category = null;
				$scope.category_name = null;
	    		loadCat();
	    		$('#dlgCategory').modal('hide');
	            
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    		// $scope.showToast("Unable to create record.");
	    	});
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
    var link = '';
    $scope.products;
    $scope.dtOptions = DTOptionsBuilder.newOptions()
	    .withPaginationType('full_numbers')
	    .withDisplayLength(5);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4),
        DTColumnDefBuilder.newColumnDef(5),
        DTColumnDefBuilder.newColumnDef(6).notSortable()
    ];

    $scope.names = [];

    function loadProd(){

		console.log('load');

		adminFactory.readProducts().then(function successCallback(response){
			console.log(response.data.rows);
			$scope.products = response.data.rows;
			// $scope.page = response.data.total;

		}, function errorCallback(response){
			console.log("Unable to read record.");
		});
	};


	loadProd();

    adminFactory.jsonCategory().then(function successCallback(response){
		//$scope.categories = response.data.rows;
		$scope.names = eval(response.data);
		// pus
		console.log(eval(response.data));
	}, function errorCallback(response){
		console.log("Unable to read record.");
	});

	$scope.newProduct = function(){
		$scope.alertType = null;
		$scope.part_no = null;
		$scope.part_name = null;
		$scope.category = null;
		$scope.description = null;
		// $scope.dlgCategory.modal('show');
		// $scope.showCat = 'true';
		link = 'save';
		console.log('new');
	}

	$scope.editProduct = function(product){
		console.log(product);
		$scope.part_no = product.part_no;
		$scope.part_name = product.part_name;
		$scope.category = product.category;
		$scope.description = product.description;
	}

	$scope.saveProduct = function(){
		console.log('save product');
		console.log(link);
		if (link == 'save') {
			adminFactory.createProduct($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.part_no = null;
				$scope.part_name = null;
				$scope.category = null;
				$scope.description = null;
	    		// loadCat();
	    		loadProd();
	    		// $scope.dtInstance.rerender();
	    		$('#dlgProduct').modal('hide');
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    		// $scope.showToast("Unable to create record.");
	    	});
		}else{
			console.log('edit ');
			adminFactory.updateProduct($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.part_no = null;
				$scope.part_name = null;
				$scope.category = null;
				$scope.description = null;
	    		// loadCat();
	    		loadProd();
	    		// $scope.dtInstance.rerender();
	    		$('#dlgProduct').modal('hide');
	            
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    		// $scope.showToast("Unable to create record.");
	    	});
		}
	}


});