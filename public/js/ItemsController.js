"use strict";

var app = angular.module('app', [])


app.factory('socket', function(){
    var socket = io.connect('');
    return socket;
})


function ItemsController($scope, socket){

    $scope.items = [];

    socket.on('reset', function(data){
        $scope.items = data
        $scope.$apply();
    })

    socket.on('add', function(data){
        data.highlight = true;

        $scope.items.push(data)
        $scope.$apply();
    })

    $scope.criar = function(){
        socket.emit('add', $scope.novo);
        $scope.novo = {};
    }
}