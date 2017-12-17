(function(){
    'use strict';

    angular.module('myApp') 
        .factory('CandidateService',CandidateService);
    
    
    
    CandidateService.$inject =['$http'];
    function CandidateService($http){
       console.log('Service Initialized');
       
       //Private
       function findalldetails() {
            return $http.get('http://34.238.75.61:8080/candidate')
                    .then(success)
                    .catch(failure);
    
                    function success(response){
                        return response.data;
                    }
                    function failure(response){
                        alert('Error while Fetching Data');
                    }
        };
        
        function _addCandidate(candidate){
            return $http.post('http://34.238.75.61:8080/save',candidate)
            .then(success)
            .catch(failure);
    
            function success(response){
                return response.data;
            }
    
            function failure(response){
                alert('Error While Creating Candidate');
            }
        };
        // function_deleteCandidate(candidate){
        //     return $http.delete('http://localhost:8011/delete')
        //     .then(success)
        //     .catch(failure)

        //     function success(response){
        //         alert('Successfully Deleted')
        //     }

        //     function failure (response){
        //         alert('!!!Unable to Delete!!!')
        //     }
        // }
       
       //Public
       return {
          findAllDetails: findalldetails,
          addCandidate:_addCandidate

       };
    

    


    }
})();