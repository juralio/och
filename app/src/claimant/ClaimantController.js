function ClaimantController() {
    var vm = this;

    vm.message = 'fsdf';

    vm.inCreateMode = false;
    vm.enterCreateClaimMode = enterCreateClaimMode;
    vm.saveClaim = saveClaim;
    vm.discardClaim = discardClaim;
    vm.tabs = [
        { title: 'Step One - Claimee', content: "Who is your claim against?"},
        { title: 'Step Two - Confirm Claimee', content: "Is this them?", subContent: "Bill’s Kitchens Ltd, 1 High Street, Trumpington, Noshire NN1 2TT, Company number 987654321"},
    ];

    function enterCreateClaimMode() {
        vm.inCreateMode = true;
    }

    function saveClaim() {
        vm.inCreateMode = false;
    }

    function discardClaim() {
        vm.inCreateMode = false;
    }
}

export default [ClaimantController];