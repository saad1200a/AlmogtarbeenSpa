(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['$location', 'common', 'datacontext', 'identity', 'sidebarView', dashboard]);

    function dashboard($location, common, datacontext, identity, sidebarView) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Hot Towel Angular',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Login';
        vm.username = '';
        vm.password = '';

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Login View'); });
        }

        vm.login = function () {
            var currentIdentity = datacontext.login(vm.username, vm.password);
            if (currentIdentity.isAuthenticated) {
                identity.isAuthenticated = currentIdentity.isAuthenticated;
                identity.name = currentIdentity.name;
                $location.path('/dashboard');
            } else {
                log('fail to log in');
            }

        };

        //        function getMessageCount() {
        //            return datacontext.getMessageCount().then(function (data) {
        //                return vm.messageCount = data;
        //            });
        //        }
        //
        //        function getPeople() {
        //            return datacontext.getPeople().then(function (data) {
        //                return vm.people = data;
        //            });
        //        }
    }
})();