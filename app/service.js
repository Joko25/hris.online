app.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database

  var setUser = function(user_data) {
    sessionStorage.setItem('user', user_data);
    //window.sessionStorage.setItem('user', JSON.stringify(user_data));//starter_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    // return JSON.parse(window.sessionStorage.getItem('user') || '{}');
    return sessionStorage.getItem('user');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
});

// app.service('Firebase', function(){
//   var config = {
//     apiKey: "AIzaSyCWgtmcKZyKEOmXUdccDWfKK3yTa5K2nvQ",
//     authDomain: "fir-yojek.firebaseapp.com",
//     databaseURL: "https://fir-yojek.firebaseio.com",
//     projectId: "firebase-yojek",
//     storageBucket: "firebase-yojek.appspot.com",
//     messagingSenderId: "739519033561"
//   };

//   return firebase.initializeApp(config);
  
// });