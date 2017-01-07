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
