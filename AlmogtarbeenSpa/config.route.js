(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {

        var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope, identity) {
            // Initialize a new promise 
            //var deferred = $q.defer();

            console.log('checking ...: ' + JSON.stringify(identity));

            if (!identity.isAuthenticated)
                $location.url('/login');
            // Make an AJAX call to check if the user is logged in 
            //        $http.get('/loggedin').success(function (user) {
            //            // Authenticated 
            //            if (user !== '0') $timeout(deferred.resolve, 0);
            //            // Not Authenticated 
            //            else {
            //                $rootScope.message = 'You need to log in.';
            //                $timeout(function () { deferred.reject(); }, 0);
            //                $location.url('/login');
            //            }
            //        });
        };

        return [
            {
                url: '/',
                config: {
                    templateUrl: 'dashboard/dashboard.html',
                    title: 'dashboard',
                    access: { isSecured: false },
                    resolve: { loggedin: checkLoggedin },
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'admin/admin.html',
                    access: { isSecured: true },
                    resolve: { loggedin: checkLoggedin },
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }, {
                url: '/login',
                config: {
                    title: 'login',
                    templateUrl: 'registration/login.html',
                    access: { isSecured: false },
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Login'
                    }
                }
            }
        ];
    };

})();