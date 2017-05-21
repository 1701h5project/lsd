requirejs(["config"],function(){
	requirejs(["jquery","jquerycookie","jqueryUi"],function(){
		//购物车cookie
		$(function(){
			var buylist;
			var buyLen;
			if($.cookie('carlist') != 'NULL'){
				buylist = $.cookie('carlist');
				buylist = buylist ? JSON.parse(buylist):[];
				buyLen=buylist.length;
				//当有cookie时隐藏#con-mid,显示#con-mid1
				if(buylist.length>0){
			   		var res = buylist.map(function(item){
			   			return `<div class="section2">
									<img src="${item.goodUrl}" alt="" />
									<div class="cont-l">
										<p class="goodname"><a href="${item.pageUrl}">${item.goodName}</a></p>
										<p class="goodcolor">颜色: <span>${item.goodColor}</span></p>
										<p class="goodsize">尺码：<span>${item.goodSize}</span></p>
									</div>
									<div class="cont-mid">${item.goodPrice*item.quan}</div>
									<div class="cont-r">
										<span class="num1">${item.quan}</span>
										<span class="del">删除</span>
									</div>
								</div>`
			   		}).join('');
				   	$.cookie('carlist',JSON.stringify(buylist),{path:"/",expires:7});
					$('#buy-content1').prepend(res);
					$('.content-foot .num1').html("共"+buylist.length+"件商品");
					$('#num').html("购物车("+buylist.length+")件");
				};	
			};
			//鼠标移入
			$('#buycar').on('mouseenter',function(){
				$('#buy-content').css({'display':'block'});
				if(buyLen>0){
					$('#buy-content1').css({'display':'block'});
					$('#buy-content').css({'display':'none'});
				}
			});
			$('#buycar').on('mouseleave',function(){
				$('#buy-content').css({'display':'none'});
				$('#buy-content1').css({'display':'none'});
			});
			//删除按钮
			$('.del').on('click',function(){
				for(var i=0;i<buylist.length;i++){
   					if(buylist[i].goodColor+buylist[i].goodSize == $(this).parent().parent().children('.cont-l').children('.goodcolor').children('span').text()+$(this).parent().parent().children('.cont-l').children('.goodsize').children('span').text()){
   						buylist.splice(i,1);
   					}
   				}
   				$.cookie('carlist',JSON.stringify(buylist),{path:'/'});
   				$(this).parent().parent().remove();
   				window.location.reload();
			});
		});
	});
});