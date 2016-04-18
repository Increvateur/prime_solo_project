myApp.controller("MainController", ["$scope", "MangaModule", "$location", function($scope, MangaModule, $location) {

}]);

myApp.controller("SeriesController", ["$scope", "MangaModule", "$location", function($scope, MangaModule, $location) {

  MangaModule.getSeriesNames()
    .then(function(data) {
      $scope.seriesNames = data;
      console.log("Controller ->", data);
    });

}]);

myApp.controller("ChaptersController", ["$scope", "MangaModule", "$routeParams", function($scope, MangaModule, $routeParams) {
  console.log("ChaptersController loaded!");

  var chapterID = {"route": $routeParams.seriesId};
  console.log(chapterID);

  MangaModule.getChapterInfo(chapterID)
    .then(function(data) {
      $scope.chapterNames = data;
      $scope.chapterList = data.chapter_layout;
      console.log("Controller ->", data);
    });
}]);

myApp.controller("ChapterViewController", ["$scope", "MangaModule", "$routeParams", function($scope, MangaModule, $routeParams) {
  console.log("ChapterViewController loaded!");

  // $scope.getSeries = MangaModule.getChapters($routeParams.seriesId)
  //   .then(function(data) {
  //     $scope.chapterNames = data;
  //     console.log("Controller ->", data);
  //   });

}]);
