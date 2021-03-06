// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-route';

import AppController from 'src/AppController';
import Users from 'src/users/Users';
import ClaimantController from 'src/claimant/ClaimantController';
import DefendantController from 'src/defendant/DefendantController';
import JudgeController from 'src/judge/JudgeController';

export default angular.module('starter-app', ['ngMaterial', Users.name, 'ngRoute'])
    .config(($mdIconProvider, $mdThemingProvider, $routeProvider) => {
        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_palus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);

        $routeProvider
            .when("/claimant", {
                templateUrl: "src/claimant/claimant.tpl.html",
                controller: ClaimantController,
                controllerAs: "vm"
            })
            .when("/defendant", {
                templateUrl: "src/defendant/defendant.tpl.html",
                controller: DefendantController,
                controllerAs: "vm"
            })
            .when("/judge", {
                templateUrl: "src/judge/judge.tpl.html",
                controller: JudgeController,
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: '/'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('teal');
    })
    .controller('AppController', AppController)
    .controller('ClaimantController', ClaimantController)
    .controller('DefendantController', DefendantController)
    .controller('JudgeController', JudgeController);
