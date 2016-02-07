'use strict';

/**
 * @ngdoc function
 * @name delRioCuestionariosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the delRioCuestionariosApp
 */
angular.module('delRioCuestionariosApp')
  .controller('MainCtrl', MainCtrl);

///// -- Functions -- /////

function MainCtrl() {
    var vm = this;

    vm.awesomeThings = [
        'HTML5 Boilerplate',
        'Angularjs',
        'Karma'
    ];
}
