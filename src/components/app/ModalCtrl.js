module.exports = function ModalCtrl($uibModalInstance, options, $timeout){
    var vm = this;
    vm.max = options.max;
    vm.dynamic = 0;

    init();

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    function init(){
        $timeout(function() {
            vm.dynamic = options.dynamic;
        }, 250);
    }
}
