var AppCtrl = require('./AppCtrl'),
    AppDir = require('./AppDir'),
    ModalCtrl = require('./ModalCtrl');;

require('./app.scss');

module.exports = function AppComponent(app) {
    app
        .controller('AppCtrl', AppCtrl)
        .controller('ModalCtrl', ModalCtrl)
        .directive('app', AppDir);
};
