var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function($rootScope, $scope) {
    
    $scope.title = "Title of my page";

    $scope.users = [];

    var newUser = {
        name : undefined,
        age: undefined,
        country : undefined
    };

    $scope.addUser = function(){
        if( $scope.newUser && $scope.newUser.name != undefined && $scope.newUser.age != undefined && $scope.newUser.country != undefined){
            $scope.users.push({
                name : $scope.newUser.name,
                age: $scope.newUser.age,
                country: $scope.newUser.country
            });
        }
    };

    $scope.removeUser = function(user){
        for(var i = 0; i < $scope.users.length; i++){
            if( $scope.users[i] === user){
                $scope.users.splice(i , 1);
            }
        }
    };
});