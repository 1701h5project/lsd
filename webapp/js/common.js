//根据cookie生成购物车
define(['jquery'],function($){
	return {
		createBuy:function(){
			buylist = $.cookie('carlist');
			buylist = buylist ? JSON.parse(buylist):[];
			$('#con-mid').css({'display':'block'});
			$('#con-mid1').css({'display':'none'});
			//当有cookie时隐藏#con-mid,显示#con-mid1
			if(buylist.length>0){
				$('#con-mid').css({'display':'none'});
		   		$('#con-mid1').css({'display':'block'});
		   		var res = buylist.map(function(item){
		   			return `<div class="section1">
								<span class="check"><input type="checkbox"/></span>
								<img src="${item.goodUrl}" alt="" class="goodImg" title="${item.goodId}"/>
								<span class="goodName">${item.goodName}</span>
								<span class="color-s">${item.goodColor}${item.goodSize}</span>
								<span class="one-price">${item.goodPrice}</span>
								<span class="quan">${item.quan}</span>
								<span class="totalprice">${item.goodPrice*item.quan}</span>
								<span class="opera">删除</span>
							</div>`
		   		}).join('');
			   	$.cookie('carlist',JSON.stringify(buylist),{path:"/",expires:7})
				$('#con-goodlist').append(res);
				
				return buylist;
			}
		}
	}
});