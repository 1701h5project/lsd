$(function(){
		
	// 用户名
	var nameuses = window.sessionStorage.getItem('name','value');
	// 判端是否登录，是则去结算，否去登录
	if (nameuses!=null) {
		$('.uses').text(nameuses);
		$('.qwera').show();
		$('.resd').hide();
		$('.settlement').click(function(){
			location.href='indent.html'
		})
	}else{
		$('.qwera').hide();
		$('.resd').show();
		$('.settlement').click(function(){
			location.href = 'login.html'
		})
	}
	$('.guangguang').click(function(){
		location.href = '../index.html'
		
	})
	// 购物车
	var str = window.localStorage.getItem('buyMsg');

	// var length = str.split(",");
	var arr = JSON.parse(str)?JSON.parse(str):[];
	function countProperties (arr1) {
	    var count = 0;
	    for (var property in arr1) {
	        if (arrect.prototype.hasOwnProperty.call(arr1, property)) {
	            count++;
	        }
	    }
	    return count;
	}
	// 对象长度
	var length = arr.length;
	if (length==0) {
		$('.mainbox').show();
		$('.payment-bar').hide();
		$('.car-footer').hide();
	}else{
		$('.mainbox').hide();
		$('.payment-bar').show();
	}
	var str1; 
	var str2;
	var arr1=[];
	for(i=0;i<length;i++){
		arr1.push(arr[i].goodid);
	}
	var Arr = arr1.join(",");
	$.post(erp.baseUrl+'showData',{collection:'shop',id:Arr},function(response){
		var Newarr = response;
		var res='';
		for(i=0;i<Newarr.length;i++){
			str1 = (Newarr[i].price)[1][0];
			str2 = str1.replace(str1[0]," ");
			$('.main').append('<div class="shop-group-item"><div class="shop-name"><input type="checkbox" class="check goods-check shopCheck"><h4><a href="#">西部大仓</a></h4></div><ul><li><div class="shop-info"><input type="checkbox" class="check goods-check goodsCheck"><div class="shop-info-img"><a href="#"><img src="../img/product/'+Newarr[i].imgUrl[0]+'" /></a></div><div class="shop-info-text"><h4>'+Newarr[i].name+'</h4><div class="shop-brief"></div><div class="shop-price"><div class="shop-pices">￥<b class="price">'+str2+'</b></div><div class="shop-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num" >'+parseInt(arr[i].qty)+'</span><a href="javascript:;" class="plus">+</a></div></div></div></div></li></ul><div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">0.00</span></div></div>')
		}
		// 数量减
		$(".minus").click(function() {
			var t = $(this).parent().find('.num');
			t.text(parseInt(t.text()) - 1);
			if (t.text() <= 1) {
				t.text(1);
			}
			TotalPrice();
		});
		// 数量加
		$(".plus").click(function() {
			var t = $(this).parent().find('.num');
			t.text(parseInt(t.text()) + 1);
			if (t.text() <= 1) {
				t.text(1);
			}
			TotalPrice();
		});
		/******------------分割线-----------------******/
		  // 点击商品按钮
		$(".goodsCheck").click(function() {
		    var goods = $(this).closest(".shop-group-item").find(".goodsCheck"); //获取本店铺的所有商品
		    var goodsC = $(this).closest(".shop-group-item").find(".goodsCheck:checked"); //获取本店铺所有被选中的商品
		    var Shops = $(this).closest(".shop-group-item").find(".shopCheck"); //获取本店铺的全选按钮
		    if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
		      Shops.prop('checked', true); //店铺全选按钮被选中
		      if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
		        $("#AllCheck").prop('checked', true); //全选按钮被选中
		        TotalPrice();
		      } else {
		        $("#AllCheck").prop('checked', false); //else全选按钮不被选中 
		        TotalPrice();
		      }
		    } else { //如果选中的商品不等于所有商品
		      Shops.prop('checked', false); //店铺全选按钮不被选中
		      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
		      // 计算
		      TotalPrice();
		      // 计算
		    }
		});
	  // 点击店铺按钮
		$(".shopCheck").click(function() {
		    if ($(this).prop("checked") == true) { //如果店铺按钮被选中
		      $(this).parents(".shop-group-item").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
		      if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
		        $("#AllCheck").prop('checked', true); //全选按钮被选中
		        TotalPrice();
		      } else {
		        $("#AllCheck").prop('checked', false); //else全选按钮不被选中
		        TotalPrice();
		      }
		    } else { //如果店铺按钮不被选中
		      $(this).parents(".shop-group-item").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
		      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
		      TotalPrice();
		    }
		});
	  // 点击全选按钮
		$("#AllCheck").click(function() {
			if ($(this).prop("checked") == true) { //如果全选按钮被选中
			  $(".goods-check").prop('checked', true); //所有按钮都被选中
			  TotalPrice();
			} else {
			  $(".goods-check").prop('checked', false); //else所有按钮不全选
			  TotalPrice();
			}
			$(".shopCheck").change(); //执行店铺全选的操作
		});
		//计算
		function TotalPrice() {
		    var allprice = 0; //总价
		    $(".shop-group-item").each(function() { //循环每个店铺
		      var oprice = 0; //店铺总价
		      $(this).find(".goodsCheck").each(function() { //循环店铺里面的商品
		        if ($(this).is(":checked")) { //如果该商品被选中
		          var num = parseInt($(this).parents(".shop-info").find(".num").text()); //得到商品的数量
		          var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的单价
		          var total = price * num; //计算单个商品的总价
		          oprice += total; //计算该店铺的总价
		        }
		        $(this).closest(".shop-group-item").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价
		      });
		      var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价
		      allprice += oneprice; //计算所有店铺的总价
		    });
		    $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价
		}
	})

		
	

	// 退一步
	$('#pre-index').on('click',function(){
		history.back(-1);
	});



	// 标题栏
	$(".headermenu").click(function(){
		$(".herderHide").slideToggle();
	});

	// 退出
	$('.tuichu').click(function(){
		window.sessionStorage.removeItem('name','value');
		window.sessionStorage.removeItem('phone','value');
		window.sessionStorage.removeItem('_id','value');
		$('.resd').show();
		$('.qwera').hide();
		$('.shopo').hide();
		$('.mycheck').hide();
		$('.mainbox').show();
		window.localStorage.removeItem("buyMsg");
		window.localStorage.removeItem("qty");
		window.location.reload();
	})
})