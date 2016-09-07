
angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow = false;

    $scope.onSlideChanged = function(){
        // 判断当前幻灯片的索引，是不是最后一个
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1){
            $scope.isShow = true;
        }else{
            $scope.isShow = false;
        }
    };
});
