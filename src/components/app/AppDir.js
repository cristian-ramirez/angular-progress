module.exports = function TodoDir() {
    return {
        restrict: 'AE',
        template: require('./app.html'),
        controller: 'AppCtrl as app',
        scope: {}
    };
};
