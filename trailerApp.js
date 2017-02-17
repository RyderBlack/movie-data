let singleApp = angular.module('singleApp', []);

singleApp.controller('trailerController', function trailerController($scope, $http) {
  let request = $('h1').text() + ' trailer';
  console.log(request);

  $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ request +'&key=AIzaSyBo6GWJnzMlR_M4WQOQGYBcZ2lU_Lgw2LQ').then(function(response) {
            let filmList = response.data;
            $scope.videoId = filmList.items[0].id.videoId;
          });
});
