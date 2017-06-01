$(function(){
	var nameuses = window.sessionStorage.getItem('name','value');
	if (nameuses!=null) {
		$('.uses').text(nameuses);
		$('.qwera').show();
		$('.resd').hide();
		$('.buybtn').click(function(){
			location.href='indent.html'
		})
	}else{
		$('.qwera').hide();
		$('.resd').show();
		$('.buybtn').click(function(){
			location.href = 'login.html'
		})
	}







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
		$('.mycheck').hide();
		$('.car-footer').hide();
	}else{
		$('.mainbox').hide();
		$('.mycheck').show();
	}

	var str1; 
	var str2;
	for(i=0;i<length;i++){
		str1 = (arr[i].price)[0];
		str2 = str1.replace(str1[0]," ")
		$('.main').append('<div class="shopo"><div class="shopt"><span class="checkbox2 active"  style="color: #fff;font-size:12px;text-align: center;border:1px solid #26c269;">√</span><div class="shopth"><div class="shopf"><a href="#"><div class="shopimg"><img src="../img/product/'+arr[i].imgurl+'" alt=""></div><div class="shopfont"><h1><span class="sheng">满省</span><span class="huangs">'+arr[i].name+'</span></h1><span style="float: right;color:#f00;" class="yichu" id="'+arr[i].goodid+'">×</span><p style="float: left">￥</p><p class="danjia">'+str2+'</p></div></a></div><div class="shopfi"><span class="jianhao1" style="margin-right:5px;">-</span><input type="text" value="'+parseInt(arr[i].qty)+'"><span class="jiahao1" style="margin-left:5px;">+</span></div><div class="shopsix">小主，在05-26 17:00内付款可以带我走啦抓紧时间呦~</div></div></div></div>')
	}


	
	

	// 单个移除
	$(".yichu").click(function(){
		str = window.localStorage.getItem('buyMsg');
		var cur = $(this).attr('id');
		// for(var i=0;i<length;i++){
		
			// if(arr[i].goodid == cur){

				// arr.splice(i,0);
				// break;
			// }
			// str.push(arr)
		// }
		window.localStorage.removeItem("buyMsg","cur");
		window.location.reload();

		// var res = 0;
		$(this).parents(".shopo").remove();
		$('.danjia').each(function(i){
			var num = $(this).text();
			var idx = $(this).parent().parent().parent().next().children().eq(1).val();
			res += Number(num) * idx;
			n+=Number(idx);

		})
		var nu = n-2;
		$('.heji').text(res.toFixed(1));
		$('.jiesuan').text(nu);

	});
	



	// 全选
	$(".checkbox1").click(function(){
		if ($(this).attr('class') == 'checkbox1 active') {
			$(this).removeClass('active');
			$(".checkbox2").removeClass('active');
			$(".checkbox3").removeClass('active');
			$('.heji').text(0);
			$('.jiesuan').text(0);
			$('.jiahao1').off();
			$('.jianhao1').off();
		}else{
			$('.heji').text(res.toFixed(1));
			$('.jiesuan').text(n);
			$(this).addClass('active');
			$(".checkbox2").addClass('active');
			$(".checkbox3").addClass('active');
			$('.jiahao1').addClass('qwe1');
			$('.jianhao1').addClass('asd1');
			$('.jiahao1').off();
			$('.jianhao1').off();

			// 减
			$(".asd1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).next().val())-1;
				$(this).next().val(v);
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
				if (v<0) {
					$(this).next().val(0);
					$('.heji').text(0);
					$('.jiesuan').text(0);
					return;
				}
			});
			// 加
			$(".qwe1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).prev().val())+1;
				$(this).prev().val(v)
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
			})
		}
	})
	$(".checkbox3").click(function(){
		if ($(this).attr('class') == 'checkbox3 active') {
			$(this).removeClass('active');
			$(".checkbox2").removeClass('active');
			$(".checkbox1").removeClass('active');
			$('.heji').text(0);
			$('.jiesuan').text(0);
			// console.log($(this).next().children().find('#jiahao'));
			// console.log($(this).siblings().children().find('#jiahao'));
			// $(this).next().children().find('#jiahao').;
			// $(this).next().children().find('#jianhao').removeClass('jianhao').off();
			$('.jiahao1').removeClass('jiahao').off();
			$('.jianhao1').removeClass('jianhao').off();
		}else{
			
			$(this).addClass('active');
			$('.heji').text(res.toFixed(1));
			$('.jiesuan').text(n);
			$(".checkbox2").addClass('active');
			$(".checkbox1").addClass('active');

			// $(this).next().children().find('#jiahao').addClass('qwe1').off();
			// $(this).next().children().find('#jianhao').addClass('asd1').off();


			$('.jiahao1').addClass('qwe1');
			$('.jianhao1').addClass('asd1');
			$('.jiahao1').off();
			$('.jianhao1').off();

			// 减
			$(".asd1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).next().val())-1;
				$(this).next().val(v);
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
				if (v<0) {
					$(this).next().val(0);
					$('.heji').text(0);
					$('.jiesuan').text(0);
					return;
				}
			});
			// 加
			$(".qwe1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).prev().val())+1;
				$(this).prev().val(v)
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
			})
		}
	})
	shopCar();
	
	function shopCar(){
		$('.jiahao1').addClass('jiahao');
		$('.jianhao1').addClass('jianhao');
		if ($(".checkbox2").attr('class') == 'checkbox2 active'){
		
			// 减
			$(".jianhao").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).next().val())-1;
				$(this).next().val(v);
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
				if (v<0) {
					$(this).next().val(0);
					$('.heji').text(0);
					$('.jiesuan').text(0);
					return;
				}
			});
			// 加
			$(".jiahao").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).prev().val())+1;
				$(this).prev().val(v)
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
			})
		}
	}
	


	// 单选
	$(".checkbox2").click(function(){
		if ($(this).attr('class') == 'checkbox2 active') {

			// $('#jiahao').removeClass('jiahao');
			// $('#jianhao').removeClass('jianhao');
			// $('#jiahao').addClass('qwe');
			// $('#jianhao').addClass('asd');
			// $('#jiahao').off();
			// $('#jianhao').off();
			// console.log($(this).next().children().find('#jiahao'))
			$(this).next().children().find('.jiahao1').removeClass('jiahao').off();
			$(this).next().children().find('.jianhao1').removeClass('jianhao').off();
			$('.heji').text(0);
			$('.jiesuan').text(0);
			$(this).removeClass('active');
			$(".checkbox3").removeClass('active');
			$(".checkbox1").removeClass('active');
			// $(".asd").click(function(){
			// 	$('.heji').text(0);
			// 	$('.jiesuan').text(0);
			// })
			// $(".qwe").click(function(){
			// 	$('.heji').text(0);
			// 	$('.jiesuan').text(0);
			// })

			
		}else{
			$(this).addClass('active');
			// $('#jiahao').addClass('qwe1');
			// $('#jianhao').addClass('asd1');
			// $('#jiahao').off();
			// $('#jianhao').off();
			$(this).next().children().find('.jiahao').addClass('qwe1').off();
			$(this).next().children().find('.jianhao').addClass('asd1').off();
			
			// 减
			$(".asd1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).next().val())-1;
				$(this).next().val(v);
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
				if (v<0) {
					$(this).next().val(0);
					$('.heji').text(0);
					$('.jiesuan').text(0);
					return;
				}
			});
			// 加
			$(".qwe1").click(function(){
				var res = 0;
				var n = 0;
				var v = Number($(this).prev().val())+1;
				$(this).prev().val(v)
				$('.danjia').each(function(i){
					var num = $(this).text();
					var idx = $(this).parent().parent().parent().next().children().eq(1).val();
					res += Number(num) * idx;
					n+=Number(idx);
				})
				$('.heji').text(res.toFixed(1));
				$('.jiesuan').text(n)
			})
		}
	})


	
	


		// 总价
		var res = 0;
		var n = 0;
		$('.danjia').each(function(i){
			var num = $(this).text();
			var idx = $(this).parent().parent().parent().next().children().eq(1).val();
			res += Number(num) * idx;
			n+=Number(idx);
		})
		$('.heji').text(res.toFixed(1));
		$('.jiesuan').text(n);



	


	$('#pre-index').on('click',function(){
		history.back();
	});




	$(".headermenu").click(function(){
		$(".herderHide").slideToggle();
	});

	// 退出
	$('.tuichu').click(function(){
		window.sessionStorage.removeItem('name','value');
		$('.resd').show();
		$('.qwera').hide();
		$('.shopo').hide();
		$('.mycheck').hide();
		$('.mainbox').show();
	})



	$(".cartcbox").hide();
	$(".cartbg").hide();
	$(".wenhao").click(function(){
		$(".cartcbox").show();
		$(".cartbg").show();
	})
	$(".dele").click(function(){
		$(".cartcbox").hide();
		$(".cartbg").hide();
	})
	$(".wests").hide();
	$(".west").click(function(){
		$(".wests").show();
		$(".cartbg").show();
	})
	$(".dele").click(function(){
		$(".wests").hide();
		$(".cartbg").hide();
	})



	

	$('#per-next').click(function(){
		history.back();
	})
	
	
})