angular.module('Screen')
.controller('FlicksController', ['movieFactory', function(movieFactory){
    var Fc = this;

    Fc.getAllMovies = function() {        
        var promise = movieFactory.getMovies();                 
        promise.then(   
            function(payload) { 
                console.log(payload.data);  
                Fc.popularMovies=payload.data.results; 
                console.log(Fc.popularMovies);                       
            },
            function() {
                         
            }                   
        )
        .catch(function(response) {
            console.error('An error occured', response.status, response.data);
        }); 
    }
}]);