angular.module("myapp").controller("chatCtrl",function($scope,$http){
    $http.get("json/chat.json").success(function(data){
        $scope.chatconts=data.chatcont;
        $scope.chatsmallimgs=data.chatsmallimg
    })
})