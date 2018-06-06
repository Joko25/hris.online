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

app.controller("productController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, adminFactory, upload){
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
    $scope.jsonprodfam = [];

    $scope.uploadimg = function () {
    	console.log();
	    alert(this.value);
	    // upload({
	    // 	url: '/upload',
	    // 	method: 'POST',
	    // 	data: {
	    // 		anint: 123,
	    // 		aBlob: Blob([1,2,3]), // Only works in newer browsers
	    // 		aFile: $scope.myFile, // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
	    // 	}
	    // }).then(
		   //  function (response) {
		   //  	console.log(response.data); // will output whatever you choose to return from the server on a successful upload
		   //  },
		   //  function (response) {
		   //      console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
		   //  }
	    // );
	}

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

	adminFactory.jsonProdfam().then(function successCallback(response){
		//$scope.categories = response.data.rows;
		$scope.jsonprodfam = eval(response.data);
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
		$scope.prodfam = null;
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
		$scope.category = product.code_category;
		$scope.prodfam = product.prodfam;
		$scope.description = product.description;
		$scope.alertType = null;
	}

	$scope.deleteProduct = function(id){
		console.log('delete '+id);
		adminFactory.deleteProduct(id).then(function successCallback(response){
    		// tell the user new product was created
    		console.log(response);
    		loadProd();
            
    	}, function errorCallback(response){
    		console.log(response);
    		// $scope.alert = "Unable to create record.";
    		// $scope.alertType = 'alert-danger';
    		// $scope.showToast("Unable to create record.");
    	});
	}

	$scope.saveProduct = function(){

		// console.log('save product');
		// console.log(link);
		if (link == 'save') {
			console.log($scope);
			adminFactory.createProduct($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
	    		$scope.part_no = null;
				$scope.part_name = null;
				$scope.category = null;
				$scope.prodfam = null;
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
				$scope.prodfam = null;
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

app.controller("prodfamController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, adminFactory){
    // var vm = this;
    // vm.persons = [];
    $scope.user =  sessionStorage.getItem('username');
	$scope.alert = null;
	$scope.alertType = null;
	$scope.showProdfam = null;
    var link = '';
    $scope.prodfams;
    $scope.dtOptions = DTOptionsBuilder.newOptions()
	    .withPaginationType('full_numbers')
	    .withDisplayLength(5);
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];

    $scope.names = [];



    function loadProdfam(){

		console.log('load');

		adminFactory.readProdfam().then(function successCallback(response){
			console.log(response.data.rows);
			$scope.prodfams = response.data.rows;
			// $scope.page = response.data.total;

		}, function errorCallback(response){
			console.log("Unable to read record.");
		});
	};

	loadProdfam();

	$scope.saveProdfam = function(){
		console.log(link);
		if (link == 'save') {
			adminFactory.createProdfam($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
				$scope.prodfam = null;
				$scope.prodfam_name = null;
	    		loadProdfam();
	    		// $scope.dtInstance.rerender();
	    		$('#dlgProdfam').modal('hide');
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
			adminFactory.updateProdfam($scope).then(function successCallback(response){
	    		// tell the user new product was created
	    		console.log(response);
	    		$scope.alert = response.data.message;
	    		$scope.alertType = 'alert-success';
				$scope.prodfam = null;
				$scope.prodfam_name = null;
	    		loadProdfam();
	    		$('#dlgProdfam').modal('hide');
	            
	    	}, function errorCallback(response){
	    		console.log(response);
	    		$scope.alert = "Unable to create record.";
	    		$scope.alertType = 'alert-danger';
	    		// $scope.showToast("Unable to create record.");
	    	});
		}
	};

	$scope.newProdfam = function(){
		$scope.alertType = null;
		$scope.prodfam = null;
		$scope.prodfam_name = null;
		// $scope.dlgCategory.modal('show');
		$scope.showProdfam = 'true';
		link = 'save';
		console.log('new');
	}

	$scope.editModal = function(prodfam, prodfam_name){
		$scope.alertType = null;
		$scope.prodfam = prodfam;
		$scope.prodfam_name = prodfam_name;
		link = 'update';
		//document.getElementById('dlgCategory').modal('show');
	}

	$scope.deleteProdfam = function(id){
		console.log('delete '+id);
		adminFactory.deleteProdfam(id).then(function successCallback(response){
    		// tell the user new product was created
    		console.log(response);
    		loadProdfam();
            
    	}, function errorCallback(response){
    		console.log(response);
    		// $scope.alert = "Unable to create record.";
    		// $scope.alertType = 'alert-danger';
    		// $scope.showToast("Unable to create record.");
    	});
	}

});