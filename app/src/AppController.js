function AppController($rootScope, $location) {
  var self = this;

  self.getUsername = () => $rootScope.username;
  self.isHome = () => $location.path() === '/';
}

export default ['$rootScope', '$location', AppController];
