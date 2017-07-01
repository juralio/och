function DefendantController($rootScope) {
  var vm = this;

  $rootScope.username = 'Bill’s Kitchens Ltd';

  vm.sendResponse = sendResponse;
  vm.tabs = [
    { title: 'Step One - Claim', content: "Claim brought against you by Martin Smith.", summary: "This is some summary information", videoLink: "./assets/taps.mp4"},
    { title: 'Step Two - Suggested Solution', content: "Solution provided in claim video"},
  ];

  function sendResponse() {

  }
}

export default ['$rootScope', DefendantController];

