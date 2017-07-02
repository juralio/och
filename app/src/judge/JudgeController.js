function DefendantController($rootScope) {
  var vm = this;

  $rootScope.username = 'Judge Khan';
  $rootScope.userClass = 'khan-icon';

    vm.lhp = {
        problemDescription: "Bill Kitchen Ltd promised me gold tabs, but it is silver!",
        problemSolution: "I need claiming £5000 from Bill Kitchen to replace the tabs."
    };
}

export default ["$rootScope", DefendantController];