'use strict';

    var mod = angular.module('myApp');
    mod.factory('CandidateService', ['$http', '$q' , function($http, $q) {

    	 var factory = {
    			 findalldetails: findalldetails,
    			 save:save
    		    };
    		 
    		    return factory;
    		    
        function findalldetails() {
    	  var deferred = $q.defer();
    	  $http.get('http://localhost:8080/Candidate/')
    	  .then(
    			  function(response) {
    				  deffered.resolve(response.data);
    			  },
    			  function(errResponse){
    	                console.error('Error while fetching details');
    	                deferred.reject(errResponse);
    	            }
    			  );
    	  return deferred.promise;
      }
      

      function save() {
    	  var deferred = $q.defer();
          $http.post('http://localhost:8080/Save')
              .then(
              function(response) {
                  deferred.resolve(response.data);
              },
              function(errResponse){
                  console.error('Error while creating candidate details');
                  deferred.reject(errResponse);
              }
          );
          return deferred.promise;
      }
    }]);
