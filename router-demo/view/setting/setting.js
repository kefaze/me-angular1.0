/**
 * Created by Administrator on 2018/12/31.
 */

angular.module('setMod', []).controller('setCont', function($scope, $routeParams){
    $scope.settings = ['设置1', '设置2'];

    console.log($routeParams);
    switch ($routeParams.type) {
        case 'news':
            $scope.settings = ['设置1', '设置2'];
            break;
        case 'game':
            $scope.settings = ['设置3', '设置4'];
            break;
    }
})