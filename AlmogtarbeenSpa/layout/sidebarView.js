(function () {
    'use strict';

    angular.module('app').service('sidebarView', ['$rootScope', 'config', 'routes', 'identity', sidebarView]);

    function sidebarView($rootScope, config, routes, identity) {
        var vm = $rootScope;

        var render = function () {
            console.log('rereder');
            $rootScope.$broadcast('renderSidebar');
//            $rootScope.navRoutes = routes.filter(function (r) {
//                console.log(JSON.stringify(r));
//                var navigationOrder = r.config.settings && r.config.settings.nav;
//                console.log('hasNavigation: ' + navigationOrder);
//                var isPermissionRequired = r.config.access == null ? false : r.config.access && r.config.access.isSecured;
//                console.log('isPermissionRequired: ' + isPermissionRequired);
//                //var isAutherised = 
//                console.log('show: ' + navigationOrder && isPermissionRequired && identity.currentUser);
//                return navigationOrder && !isPermissionRequired || navigationOrder && isPermissionRequired && identity.currentUser;
//            }).sort(function (r1, r2) {
//                return r1.config.settings.nav - r2.config.settings.nav;
//            });

        };

        return { render: render };
    };

})();