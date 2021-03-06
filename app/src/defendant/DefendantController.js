function DefendantController($rootScope) {
  var vm = this;

  $rootScope.username = 'Bill’s Kitchens Ltd';
  $rootScope.userClass = 'bill-icon';
  vm.videoTranscript = '"I agreed with Dave the site manager that these taps was going to be gold. They\'re not gold. I need gold taps."';

  vm.currentPage = 0;
  vm.sendResponse = sendResponse;
  vm.next = next;
  vm.showClaimText = showClaimText;
  vm.showClaimVideo = showClaimVideo;
  vm.showSolutionText = showSolutionText();
  vm.showSolutionVideo = showSolutionVideo();

  vm.locks = {
    firstTabLock: false,
    secondTabLock: true,
  };

  vm.activeStatus = {
    firstTabActive: true,
    secondTabActive: false,
  };

  vm.disagreeClaim = {
    textVisible: true,
    videoVisible: false,
  }

  vm.disagreeSolution = {
    textVisible: true,
    videoVisible: false,
  }

  vm.tabs = [
    { content: "Claim brought against you by Martin Smith.", summary: "This is some summary information", videoLink: "./assets/taps.mp4"},
    { content: "Solution provided in claim video"},
    { content: "Review & submit"},
  ];

  function next() {
    vm.currentPage++;
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
    vm.submitted = true;
  }

  function showClaimText() {
    vm.disagreeClaim = {
      textVisible: true,
      videoVisible: false,
    };
  }

  function showClaimVideo() {
    vm.disagreeClaim = {
      textVisible: false,
      videoVisible: true,
    };
  }

  function showSolutionText() {
    vm.disagreeSolution = {
      textVisible: true,
      videoVisible: false,
    };
  }

  function showSolutionVideo() {
    vm.disagreeSolution = {
      textVisible: false,
      videoVisible: true,
    };
  }
}

export default ['$rootScope', DefendantController];
