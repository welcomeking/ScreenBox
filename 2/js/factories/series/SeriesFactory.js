
app.factory('SeriesFactory', ['$http', function ($http) {
  // Public API here
  return {
    getSeries: function(){       
      return $http.get("https://api.themoviedb.org/3/discover/tv?api_key=99987946df5f2b18b8e25dd71b75ce47&year=2016&sort_by=popularity.desc");               
    }
  };
}]);