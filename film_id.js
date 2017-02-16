var app = angular.module('movieplug', []);
app.controller('film_id', function($scope, $http) {
    $http.get("https://api.themoviedb.org/3/genre/878/movies?api_key=e72f880255c5b01996f688fc51152f3a").
      then(function(response) {
        $scope.films = response.data;
    });
    
});
