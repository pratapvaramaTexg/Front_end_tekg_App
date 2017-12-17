(function () {
  'use strict';

  angular.module('myApp')
    .controller('CandidateController', CandidateController);

  CandidateController.$inject = ['CandidateService'];
  function CandidateController(CandidateService) {
    console.log('Controller Initialized');
    var vm = this;

    vm.getCandidateList = function () {

      CandidateService.findAllDetails()
        .then(function (data) {
          vm.candidates = data;
          console.log(vm.candidates);
        });
    }


    vm.add = function (candidate) {
      CandidateService.addCandidate(candidate)
        .then(function (data) {
          vm.getCandidateList();
        });

    }
  }




})();