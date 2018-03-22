angular.module('app.controllers', [])

.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.radio = $stateParams.radio;

}])

.controller('page3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.radio = $stateParams.radio;
  $scope.check1 = $stateParams.check1;
  $scope.check2 = $stateParams.check2;
  $scope.check3 = $stateParams.check3;
  $scope.check4 = $stateParams.check4;

}])

.controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.radio = $stateParams.radio;
  $scope.check1 = $stateParams.check1;
  $scope.check2 = $stateParams.check2;
  $scope.check3 = $stateParams.check3;
  $scope.check4 = $stateParams.check4;
  $scope.comment = $stateParams.comment;

}])

.controller('page5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.radio = $stateParams.radio;
  $scope.check1 = $stateParams.check1;
  $scope.check2 = $stateParams.check2;
  $scope.check3 = $stateParams.check3;
  $scope.check4 = $stateParams.check4;
  $scope.comment = $stateParams.comment;
  $scope.name = $stateParams.name;
  $scope.email = $stateParams.email;
  $scope.phone = $stateParams.phone;


}])
