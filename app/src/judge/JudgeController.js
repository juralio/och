function DefendantController($rootScope) {
    var vm = this;

    $rootScope.username = 'Judge Khan';
    $rootScope.userClass = 'khan-icon';

    vm.caseAccpted = false;
    vm.acceptCase = acceptCase;

    vm.lhp = {
        problemDescription: "Gold taps not fitted as agreed.",
        problemSolution: "They should fit gold taps."
    };

    function acceptCase() {
        vm.caseAccpted = true;
    }
}

export default ["$rootScope", DefendantController];