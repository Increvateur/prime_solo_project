myApp.factory("MangaModule", ["$http", function($http) {

  var data = {};

  var getSeriesNames = function() {
    console.log("Retrieving Series Names from the Database");
    return $http.get("/seriesnames").then(function(response) {
      console.log("Info retrieved from the Database", response);
      return response.data;
    });
  };

  var getChapterInfo = function(data) {
    console.log("Retrieving Chapter Names from the Database");
    return $http.get("/chapters/" + data.route).then(function(response) {
      console.log("Info retrieved from the Database", response);
      return response.data;
    });
  };

  return {

    getSeriesNames : getSeriesNames,
    getChapterInfo : getChapterInfo,
    // data : data
  };

}]);
