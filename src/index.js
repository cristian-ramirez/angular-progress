require('angular');
require('angular-animate');
require('angular-touch');
require('angular-aria');
require('angular-material');
require('angular-ui-bootstrap');

var app = angular.module('app', [
            'ngAnimate',
            'ngTouch',
            'ngAria',
            'ngMaterial',
            'ui.bootstrap'
        ]),
    topNode = document.getElementById('app');

require('./components')(app);

angular.element(topNode).ready(function() {
    angular.bootstrap(topNode, [app.name]);
});
