'use strict';

angular.module('myApp').controller('Controller',
		[ '$scope', 'CandidateService', function($scope, CandidateService) {
			var self = this;
			self.CandidateDetails = {
				id : null,
				firstname : '',
				lastname : '',
				skypeid : ''
			};
			self.CandidateDetails= [];
			self.allConsultants = allConsultants;
			self.saveCandidate = saveCandidate;

			function allConsultants() {
				CandidateService.findalldetails().then(function(data) {

					self.candidates = data;
				},
					function(errResponse){
		                console.error('Error while fetching details');
		            }
					
				);
			}

			function saveCandidate() {
				CandidateService.save().then(function(data) {
					self.candidates = data;
				},
				function(errResponse){
	                console.error('Error while inserting details');
	            }
				)
			}

		} ]);
