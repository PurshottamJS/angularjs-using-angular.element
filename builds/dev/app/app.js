;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates', 'ui.router', 'app.dashboard'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = [];

    function DashboardController() {
        var vm = this;
    }
}(window, angular, undefined));
;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .directive('dashboardDirective', dashboardDirective);
    dashboardDirective.$inject = [];

    function dashboardDirective() {
        var newElement = angular.element("<div>{{dashDirCtrl.model.text}}</div>"),
            linkFunc = function linkFunc(scope) {
                console.log("From link function")
            },
            compileFunc = function compileFunc(element) {
                console.log("From compile function")
                element.append(newElement);
                return linkFunc;
            },
            controllerFunc = function controllerFunc() {
                var vm = this;
                vm.model = {
                    text: ""
                }
            }
        return {
            restrict: "E",
            replace: true,
            controller: controllerFunc,
            controllerAs: 'dashDirCtrl',
            template: "<div>" +
                "<input type='text' class='form-control' ng-model='dashDirCtrl.model.text'" +
                "</div>",
            compile: compileFunc

        }
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state("dashboard", {
                url: "/dashboard",
                controller: "DashboardController as dashboard",
                // this is the place where to resolve dynamic template
                templateProvider: function($templateCache) {
                    // simplified, expecting that the cache is filled
                    // there should be some checking... and async $http loading if not found
                    return $templateCache.get('components/dashboard/dashboard.template.html');
                }
            })
        });
}(window, angular, undefined));
