        <html>

        <head>
            <title>AngularJS $http Example</title>
            <style>
                .username.ng-valid {
                    background-color: lightgreen;
                }
                
                .username.ng-dirty.ng-invalid-required {
                    background-color: red;
                }
                
                .username.ng-dirty.ng-invalid-minlength {
                    background-color: yellow;
                }
                
                .email.ng-valid {
                    background-color: lightgreen;
                }
                
                .email.ng-dirty.ng-invalid-required {
                    background-color: red;
                }
                
                .email.ng-dirty.ng-invalid-email {
                    background-color: yellow;
                }
            </style>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
            <link href="app.css" rel="stylesheet"></link>
        </head>

        <body ng-app="myApp" class="ng-cloak">
            <div class="generic-container" ng-controller="Controller as ctrl">
                <div class="panel panel-default">
                    <div class="panel-heading"><span class="lead">Consultant Details </span></div>
                    
                    <div class="row">
                    <label>Click to get all Consultant Details </label>
                    <button type="button" ng-click="ctrl.allConsultants()" class="btn btn-warning btn-sm">All Consultants</button>
                    </div><br>

                    <div class="row">
                        <label>save details </label>
                        <button type="button" ng-click="ctrl.saveCandidate()" class="btn btn-warning btn-sm">saved successfully</button>
                    </div><br>

                 
                </div>
                <div class="panel panel-default">
                    <!-- Default panel contents -->
                  <div class="panel-heading"><span class="lead">List of Consultants </span></div>
                  <div class="tablecontainer">
                      <table class="table table-hover">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>FirstName</th>
                                  <th>LastName</th>
                                  <th>SkypeID</th>
                                  
                              </tr>
                          </thead>
                          <tbody>
                              <tr ng-repeat="u in ctrl.consultantdetails">
                                  <td><span ng-bind="u.id"></span></td>
                                  <td><span ng-bind="u.firstname"></span></td>
                                  <td><span ng-bind="u.lastname"></span></td>
                                  <td><span ng-bind="u.skypeid"></span></td>
                                 
                                  
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>


            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
            <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>       
            <script src="app.js"></script>
            <script src="consultant_service.js"></script>
            <script src="consultant_controller.js"></script>
          
        </body>

        </html>