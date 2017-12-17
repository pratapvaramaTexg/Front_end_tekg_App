// (function(){
//     'use strict';

//     angular.module('myApp') 
//         .factory('CandidateService',CandidateService);
    
    
    
//     CandidateService.$inject =['$http'];
//     function CandidateService($http){
//        console.log('Service Initialized');
       
//        //Private
//        function insertCandidate() {
//             return $http.post('http://localhost:8011/save')
//                     .then(success)
//                     .catch(failure);
    
//                     function success(response){
//                         return response.data;
//                     }
//                     function failure(response){
//                         alert('Error while fetching data');
//                     }
//         }
       
//        //Public
//        return {
//         insertCandidate: insertCandidate,
//        };
//     }
// })();