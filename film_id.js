var app = angular.module('movieplug', []);
app.controller('film_id', function($scope, $http) {
    $http.get("https://api.themoviedb.org/3/genre/878/movies?api_key=e72f880255c5b01996f688fc51152f3a").
    then(function(response) {
        $scope.films = response.data;
        $scope.film_list = $scope.films.results;
    });
    $scope.show_infos = function(i) {
        $scope.title = i.original_title;
        $scope.overview = i.overview;
        $scope.date = i.release_date;
        $scope.img = "https://image.tmdb.org/t/p/w640" + i.poster_path;
        $scope.vote = i.vote_average;
        console.log($scope.img);

        let request = i.original_title + ' trailer';
        console.log(request);

        $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + request + '&key=AIzaSyBo6GWJnzMlR_M4WQOQGYBcZ2lU_Lgw2LQ').then(function(response) {
            let filmList = response.data;
            $scope.videoId = filmList.items[0].id.videoId;
        });

    };


});
