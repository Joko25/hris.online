app.controller("mainControllers", function($scope){

	// template header
	var akses = sessionStorage.getItem('akses');
	var status = sessionStorage.getItem('status');
	var user = sessionStorage.getItem('username');
	$scope.access = akses;
	$scope.status = status;
	$scope.user = user;
	console.log(status);
	$scope.headertitle = "HRIS MASTER";

	$scope.nav = [
		{
			"name": "Career",
			"link": "#/career",
			"target": ""
		},
		{
			"name": "Have an issue?",
			"link": "https://github.com/joko25",
			"target": "_blank"
		},{
			"name": "Sign in",
			"link": "#/login",
			"target": ""
		},{
			"name": "Registration",
			"link": "#/reg",
			"target": ""
		}
	];

	$scope.logout = function(){
		sessionStorage.clear();
		console.log('logout');
		location.reload();
	};

	if (akses == 1) {
		$scope.nav = [
			{
				"name": "Administrator",
				"link": "#/administrator",
				"target": ""
			},{
				"name": "Career",
				"link": "#/career",
				"target": ""
			}
		];
	}else{
		$scope.nav = [
			{
				"name": "Career",
				"link": "#/career",
				"target": ""
			},
			{
				"name": "Have an issue?",
				"link": "https://github.com/joko25",
				"target": "_blank"
			},{
				"name": "Sign in",
				"link": "#/login",
				"target": ""
			},{
				"name": "Registration",
				"link": "#/reg",
				"target": ""
			}
		];
	}

	$scope.navmedia = [{
		"name": "Twitter",
		"title": "Follow us on Twitter",
		"link": "https://twitter.com/",
		"target": "_blank",
		"icon": "fa-twitter"
	},{
		"name": "Facebook",
		"title": "Like us on Facebook",
		"link": "https://www.facebook.com/",
		"target": "_blank",
		"icon": "fa-facebook-square"
	},{
		"name": "Instagram",
		"title": "Follow us on Instagram",
		"link": "https://www.instagram.com/ngongop.id",
		"target": "_blank",
		"icon": "fa-instagram"
	}];


	// template footer
	$scope.navfooter = [
		{
			"name": "Career",
			"link": "#/career",
			"target": ""
		},
		{
			"name": "Have an issue?",
			"link": "https://github.com/joko25",
			"target": "_blank"
		},{
			"name": "Sign in",
			"link": "#/login",
			"target": ""
		},{
			"name": "Registration",
			"link": "#/reg",
			"target": ""
		}
	];

	$scope.footertitle = "tes";

	$scope.copyright = {
		"year": new Date().getFullYear(),
		"name": "Ngongop",
		"link_name": "#/",
		"target_name": "",
		"by": "ngongop dev",
		"link_by": "#/",
		"target_by": ""
	};

});


app.controller("welcomeController", function($scope){

	$scope.dash = {};
	$scope.dash.title = "COMPANY NAME";
	$scope.dash.subtitle = "subtitle";
	$scope.dash.logo = "./assets/img/logo_AI.png";
	$scope.dash.video = "#";
	$scope.dash.about = "Tetang Perusahaan di sini semuanyaaaaa...";
	$scope.dash.slides = [{
		"img": "./assets/img/ak3.png",
		"title": "title 1",
		"status": "active"
	},{
		"img": "./assets/img/bg3.jpg",
		"title": "title 2",
		"status": ""
	},{
		"img": "./assets/img/bg4.jpg",
		"title": "title 3",
		"status": ""
	}];
	$scope.dash.category = [{
		"category": "Row Material",
		"abbreviation" : "RM",
		"ket": "bla bal bal bala blaaa",
		"icon": "icon-info"
	},{
		"category": "Non Row Material",
		"abbreviation" : "NRM",
		"ket": "bla bal bal bala blaaa",
		"icon": "icon-success"
	},{
		"category": "Technical Support",
		"abbreviation" : "TS",
		"ket": "bla bal bal bala blaaa",
		"icon": "icon-danger"
	}];

});

app.controller("careerController", function($scope){

	$scope.career = {};
	$scope.career.title = "COMPANY NAME";
	$scope.career.subtitle = "subtitle";
	$scope.career.slog = "Find your great Job here";
	$scope.career.position = [{
		"id": "#opt",
		"name" : "Operator",
		"status_tab":"active"
	},{
		"id": "#adm",
		"name" : "Admin",
		"status_tab":""
	},{
		"id": "#stf",
		"name" : "Staff",
		"status_tab":""
	},{
		"id": "#spv",
		"name" : "Supervisor",
		"status_tab":""
	},{
		"id": "#dhd",
		"name" : "Dept. Head",
		"status_tab":""
	},{
		"id": "#mng",
		"name" : "Manager",
		"status_tab":""
	}];

	$scope.career.job = [{
		"id": "opt",
		"dept_name" : "Operator",
		"position": "position",
		"desc": "Operator bla bla bla blaaaa...",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":"active"

	},{
		"id": "adm",
		"dept_name" : "Admin",
		"position": "position",
		"desc": "Not Found",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":""

	},{
		"id": "stf",
		"dept_name" : "Staff",
		"position": "position",
		"desc": "Staff bla bla bla blaaaa...",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":""

	},{
		"id": "spv",
		"dept_name" : "Supervisor",
		"position": "position",
		"desc": "Supervisor bla bla bla blaaaa...",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":""

	},{
		"id": "dhd",
		"dept_name" : "Dept. Head",
		"position": "position",
		"desc": "Head bla bla bla blaaaa...",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":""

	},{
		"id": "mng",
		"dept_name" : "Manager",
		"position": "position",
		"desc": "Manager bla bla bla blaaaa...",
		"jenis_kelamin": "-",
		"Pendidikan": "D3",
		"jurusan": "",
		"usia": "18-25",
		"kriteria_khusus": "1. cakep, 2...",
		"status_tab":""

	}];
});

app.controller("loginController", function($scope, loginFactory, UserService, $location){
	$scope.data = {};
	$scope.signin = function(){
		console.log($scope.data);
		var username = $scope.data.username;
    	var password = $scope.data.password;

    	loginFactory.login(username, password).then(function successCallback(response){
	    	console.log(response.data);
    		if (response.data.status == 'true') {
    			if (typeof(Storage) !== "undefined") {
				    // Store
				    sessionStorage.setItem('id_user', response.data.id_user);
				    sessionStorage.setItem('username', response.data.username);
				    sessionStorage.setItem('akses', response.data.akses);
				    sessionStorage.setItem('status', response.data.status);
				    
				} else {
				    console.log("Sorry, your browser does not support Web Storage...");
				}
		        console.log(UserService);
		        $location.path('/administrator');
		        location.reload();
    		}else{

    		}
    	}, function errorCallback(response){
            console.log("Unable to retrieve record.");
        });

	}
});