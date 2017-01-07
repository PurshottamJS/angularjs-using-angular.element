(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/dashboard/dashboard.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angularjs Using angular.element</h1>\n' +
    '    </div>\n' +
    '    <dashboard-directive></dashboard-directive>\n' +
    '</div>\n' +
    '');
}]);
})();
