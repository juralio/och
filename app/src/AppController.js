function AppController($rootScope, $location) {
  var self = this;

  self.getUsername = () => $rootScope.username;
  self.getUserIconClass = () => $rootScope.userClass;
  self.isHome = () => $location.path() === '/';
}

export default ['$rootScope', '$location', AppController];
