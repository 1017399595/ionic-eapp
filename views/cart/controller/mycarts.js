var mycart=angular.module("mycart",[]);//创建一个购物车的模块
mycart.factory("shopcart",function(){
    var cart=[];
    return {
        add:function(product){//添加商品
            var flag=false;
            for(var i=0;i<cart.length;i++) {
                if (product.name == cart[i].product.name) {
                    flag = true;
                    cart[i].num += 1;
                    break;
                }
            }
            if(!flag){
                var item={product:product,num:1}
                cart.push(item);
            }
        },
        update:function(name){//商品+1
            for(var i=0;i<cart.length;i++){
                if(cart[i].product.name==name){
                    cart[i].num+=1
                }
            }
        },
        reduce:function(name){//商品-1
            for(var i=0;i<cart.length;i++){
                if(cart[i].product.name==name){
                    cart[i].num-=1;
                    if(cart[i].num<=1){
                        cart[i].num=1;
                    }
                }
            }
        },
        remove:function(name){//删除商品
            for(var i=0;i<cart.length;i++){
                if(cart[i].product.name==name){
                    cart.splice(i,1)
                    break;
                }
            }
        },
        showcart:function(){
            return cart;
        },
        clear:function(){
            cart.length=0;
        }
    }
});

mycart.controller("numCtrl",function($scope,shopcart) {
    var cartdata = shopcart.showcart();
    $scope.totalnum = function () {//添加购物车商品数量统计
        var total = 0;
        for (var i = 0; i < cartdata.length; i++) {
            total += cartdata[i].num;
        }
        return total;
    };
})
