function ClaimantController() {
    var vm = this;

    $rootScope.username = 'Martin Smith';

    vm.inCreateMode = false;
    vm.enterCreateClaimMode = enterCreateClaimMode;
    vm.confirmClaimee = confirmClaimee;
    vm.discardClaimee = discardClaimee;
    vm.searchClaimee = searchClaimee;
    vm.confirmProblem = confirmProblem;

    vm.locks = {
        firstTabLock: false,
        secondTabLock: true,
        thirdTabLock: true
    };
    vm.activeStatus = {
        firstTabActive: true,
        secondTabActive: false,
        thirdTabActive: false,
    };



    vm.tabs = [
        { title: 'Step One - Claimee', content: "Who is your claim against?"},
        { title: 'Step Two - Confirm Claimee', content: "Is this them?", subContent: "Bill’s Kitchens Ltd, 1 High Street, Trumpington, Noshire NN1 2TT, Company number 987654321"},
    ];

    function enterCreateClaimMode() {
        vm.inCreateMode = true;
    }

    function confirmClaimee() {
        vm.locks = {
            firstTabLock: false,
            secondTabLock: false,
            thirdTabLock: true
        };

        vm.activeStatus = {
            firstTabActive: false,
            secondTabActive: true,
            thirdTabActive: false,
        };
    }

    function discardClaimee() {
        vm.displayClaimee = false;

        vm.locks = {
            firstTabLock: false,
            secondTabLock: true,
            thirdTabLock: true
        };
    }

    function searchClaimee() {
        vm.displayClaimee = true;
    }

    function confirmProblem() {
        vm.locks = {
            firstTabLock: false,
            secondTabLock: false,
            thirdTabLock: false
        };

        vm.activeStatus = {
            firstTabActive: false,
            secondTabActive: false,
            thirdTabActive: true,
        };
    }
}

export default ["$rootScope", ClaimantController];