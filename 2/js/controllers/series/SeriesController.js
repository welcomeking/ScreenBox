angular.module('Screen')
.controller('SeriesController', ['SeriesFactory', function(SeriesFactory){
    var Sc = this;

    Sc.getAllSeries = function() {        
        var promise = SeriesFactory.getSeries();                 
        promise.then(   
            function(payload) { 
                console.log(payload.data);                          
            },
            function() {
                         
            }                   
        )
        .catch(function(response) {
            console.error('An error occured', response.status, response.data);
        }); 
    }
}]);