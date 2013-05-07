'use strict';

app.Controllers.
    controller('Home', ['$scope', '$filter', function ($scope, $filter) {

        $scope.animationName = 'fadeInUp';

        var words = ['I', 'Build', 'Web', 'and', 'Stuff'];

        $scope.text = $filter('first')(words, 3).join(' ');

    }]);