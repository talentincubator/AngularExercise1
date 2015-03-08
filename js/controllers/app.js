function AppCtrl ($scope) {
  $scope.users = {
    "John Doe": {
      "name": "John Doe",
      "city": "Portland",
      "interests": "AngularJS"
    },
    "Test": {
      "name": "Test",
      "city": "St. Louis",
      "interests": "node.js"

    },
    "Demo": {
      "name": "Demo",
      "city": "Kansas City",
      "interests": "HTML"
    }
  };

  $scope.details = 'partials/users.html';
  $scope.edit = 'partials/edit.html';
  $scope.currentUsers= null;
  $scope.editedUsers= null;
  $scope.editUser = function (name) {
    $scope.editedUsers= $scope.users[name];
  };
  $scope.setUser = function (name) {
    $scope.currentUsers = $scope.users[name];
  };
}