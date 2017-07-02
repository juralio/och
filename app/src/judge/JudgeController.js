function DefendantController($rootScope) {
  var vm = this;

  $rootScope.username = 'Judge Khan';
  $rootScope.userClass = 'khan-icon';

    vm.lhp = {
        problemDescription: "Gold taps not fitted as agreed.",
        problemSolution: "They should fit gold taps."
    };
}

export default ["$rootScope", DefendantController];