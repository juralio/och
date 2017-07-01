function AppController($rootScope) {
  var self = this;

  self.getUsername = getUsername;

  function getUsername() {
    return $rootScope.username;
  }
}

export default ['$rootScope', AppController];
