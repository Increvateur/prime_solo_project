myApp.controller("MainController", ["$scope", "MangaModule", "$location", function($scope, MangaModule, $location) {
  $scope.isCollapsed = true;

  MangaModule.getSeriesNames()
    .then(function(data) {
      $scope.seriesNames = data;
      console.log("Controller ->", data);
    });


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

  MangaModule.getChapterInfo($routeParams)
    .then(function(data) {
      $scope.chapterNames = data;
      $scope.chapterList = data.chapter_layout;
      console.log("Controller ->", data);
    });
}]);

myApp.controller("ChapterViewController", ["$scope", "MangaModule", "$routeParams", function($scope, MangaModule, $routeParams) {
  console.log("ChapterViewController loaded!", $routeParams);

  MangaModule.getChapters($routeParams)
    .then(function(data) {
      $scope.chapterInfo = data;
      console.log("Controller ->", data);
    });

}]);
