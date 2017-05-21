requirejs(["config"],function(){
	requirejs(["jquery","jquerycookie","jqueryUi"],function($){
		//轮播图
		$(function(){
			console.log($('#banner-r img').length-1)
			$('.cir span').first().css({'background-color':'red'});
			$('#banner-r img').each(function(idx,ele){
				if(idx>0){
					$(ele).css({'opacity':0});
				}				
			});
			var index =0;
			var lastIndex=0;
			var $img=$('#banner-r img');
			var $span=$('.cir span');
			var timer = setInterval(autoPlay,3000);
			function autoPlay(){
				index++;
				showPic();
			}
			function showPic(){
				var $imgLength=$('#banner-r img').length
				if(index<0){
					index=$imgLength-1;
				}else if(index>$imgLength-1){
					index=0;
				}
				$img.each(function(idx,ele){
					if(idx != index){
						$(ele).stop(true).animate({'opacity':0});
					};
				});
				$img.eq(index).stop(true).animate({'opacity':1});
				$img.eq(lastIndex).stop(true).animate({'opacity':0});
				$span.each(function(idx,ele){
					$(ele).css({'background-color':'#000'});
				});
				$span.eq(index).css({'background-color':'red'});
				lastIndex=index;
			};
			$('#banner-r').on('mouseenter',function(){
				clearInterval(timer);
			});
			$('#banner-r').on('mouseleave',function(){
				timer=setInterval(autoPlay,3000);
			});
			for(let idx=0;idx<$img.length;idx++){
				$span.eq(idx).attr({'idx':idx});
				$span.eq(idx).on('mouseenter',function(){
					$span.each(function(idx,ele){
						$(ele).css({'background-color':'#000'});
					});
					$(this).css({'background-color':'red'});
					index=$(this).attr('idx');
					$img.eq(index).stop(true).animate({'opacity':1});
					$img.each(function(idx,ele){
						if(idx != index){
							$(ele).stop(true).animate({'opacity':0});
						};
					});
				});
			};
		});
		$(function(){
			var index=0;
			$('.left').on('click',function(){
				index--;
				if(index<0){
					index=1;
				}
				$('.ul').stop(true).animate({'left':-990*index})
			});
			$('.right').on('click',function(){
				index++;
				if(index>1){
					index=0;
				}
				$('.ul').stop(true).animate({'left':-990*index})
			});
		});
		$(function(){
			var index=0;
			$('.pre').on('click',function(){
				index--;
				if(index<0){
					index=1;
				}
				$('.ul1').stop(true).animate({'left':-1080*index})
			});
			$('.next').on('click',function(){
				index++;
				if(index>1){
					index=0;
				}
				$('.ul1').stop(true).animate({'left':-1080*index})
			});
		});
		
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
				console.log(111)
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