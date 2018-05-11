app.factory("loginFactory", function($http){
	var factory = {};

	factory.login = function(username, password){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/hris.online.ask/class/model/login.php?username=' + username + '&password='+password
            // url: 'http://localhost/hris.online/class/model/login.php?username=' + username + '&password='+password
        });
    };

    return factory;
});