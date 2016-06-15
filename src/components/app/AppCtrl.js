module.exports = function AppCtrl ($uibModal, $log) {
    var vm = this;
    vm.open = function(){
        var modalInstance = $uibModal.open({
            animation: true,
            template: require('./progress.html'),
            controller: 'ModalCtrl as modal',
            resolve: {
                options: function(){
                    return {
                        max: 125,
                        dynamic: 56
                    }
                }
            }
        });
    };
};
