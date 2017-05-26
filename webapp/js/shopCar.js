$(()=>{
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
		$('.main').append('<div class="shopo"><div class="shopt"><input type="checkbox" class="checkbox2" checked="checked"><div class="shopth"><div class="shopf"><a href="#"><div class="shopimg"><img src="../img/product/'+arr[i].imgurl+'" alt=""></div><div class="shopfont"><h1><span class="sheng">满省</span><span class="huangs">'+arr[i].name+'</span></h1><span style="float: right;color:#f00;" class="yichu" id="'+arr[i].goodid+'">×</span><p style="float: left">￥</p><p class="danjia">'+str2+'</p></div></a></div><div class="shopfi"><span class="jianhao">-</span><input type="text" value="'+parseInt(arr[i].qty)+'"><span class="jiahao">+</span></div><div class="shopsix">小主，在05-26 17:00内付款可以带我走啦抓紧时间呦~</div></div></div></div>')
	}

	




	$(".headermenu").click(function(){
		if($(".herderHide").css("display")=="none"){
			$(".herderHide").show();
		}else{
			$(".herderHide").hide();
		}
	});

	// 退出
	$('.tuichu').click(function(){
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

	// 单个移除
	$(".yichu").click(function(){
		str = window.localStorage.getItem('buyMsg');

		// for(var i=0;i<length;i++){
		// 	var cur = $(this).attr('id');
		// 	if(arr[i].goodid == cur){
		// 		arr.splice(i,1);
		// 		break;
		// 	}
		// 	str.push(arr)
		// }
		window.localStorage.removeItem('buyMsg');
		window.location.reload();

		var res = 0;
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




	$(".checkbox2").click(function(){
			if ($(this).prop('checked') == false){
				// $(".checkbox3").attr("checked",true);
				var inpu = $(this).next().children().children().children().eq(1).children().eq(2).text();
				$('.heji').text((res-inpu).toFixed(1))
			}else{
				// $(".checkbox3").attr("checked",false);
				var inpu = $(this).next().children().children().children().eq(1).children().eq(2).text();
				$('.heji').text(res.toFixed(1))
			}
			
		})
	// 减
	$(".jianhao").click(function(){
		var res = 0;
		var m = $(this).next().val()-1;
		$(this).next().val(m)
		if (m<0) {
			$(this).next().val(0);
			return;
		}
		$('.danjia').each(function(i){
			var num = $(this).text();
			var idx = $(this).parent().parent().parent().next().children().eq(1).val();
			res += Number(num) * idx;
			n+=Number(idx);
		})
		$('.heji').text(res.toFixed(1));
	})


	// 添加
	$(".jiahao").click(function(){
		var res = 0;
		var v = Number($(this).prev().val())+1;
		$(this).prev().val(v)
		$('.danjia').each(function(i){
			var num = $(this).text();
			var idx = $(this).parent().parent().parent().next().children().eq(1).val();
			res += Number(num) * idx;
			n+=Number(idx);
		})
		$('.heji').text(res.toFixed(1));
		
	})
	$(".checkbox3").click(function(){
		if ($(".checkbox3").prop('checked') == true) {
			$(".checkbox2").attr('checked',true);
			$('.heji').text(res.toFixed(1));
		}else{
			$(".checkbox2").attr('checked',false);
			$('.heji').text(0);
		}
	})

	$('#per-next').click(function(){
		history.back();
	})
	
	
})