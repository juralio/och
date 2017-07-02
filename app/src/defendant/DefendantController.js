function DefendantController($rootScope) {
  var vm = this;

  $rootScope.username = 'Bill’s Kitchens Ltd';

  vm.sendResponse = sendResponse;
  vm.next = next;

  vm.locks = {
    firstTabLock: false,
    secondTabLock: true,
  };

  vm.activeStatus = {
    firstTabActive: true,
    secondTabActive: false,
  };

  vm.tabs = [
    { content: "Claim brought against you by Martin Smith.", summary: "This is some summary information", videoLink: "./assets/taps.mp4"},
    { content: "Solution provided in claim video"},
  ];

  function next() {
    vm.locks = {
      firstTabLock: false,
      secondTabLock: false,
    };

    vm.activeStatus = {
      firstTabActive: false,
      secondTabActive: true,
    };
  }

  function sendResponse() {
    alert("you clicked send");
  }
}

export default ['$rootScope', DefendantController];

