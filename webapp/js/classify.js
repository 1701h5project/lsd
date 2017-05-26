$(function(){

	//点击titile高亮
	$('.top').on('click','span',function(){
		$('.top span').removeClass('clickTitle');
		$(this).addClass('clickTitle');
	})

	//点击左标题
	$('.clickTitle_l').on('click',function(){
		$('.main_r').hide();
		$('.main_l').show();
	})

	//点击左边导航栏
	$('.main_l ul').on('click','span',function(){
		$('.main_l span').css('color','#3e3e3e').removeClass('box_shadow');
		$(this).css('color','#f60').addClass('box_shadow');
	})








	$('.info1').children().remove();
	$('.info1').siblings().hide();
	$('.info1').show();
	$.post('/showShop',function(response){
		var arr = response;
		$('.info1').append('<hr/><span>为您推荐</span><ul></ul>');
		for(i=37;i<46;i++){
			$('.info1 ul:eq(0)').append('<li><a href="catList.html"><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
		}
		$('.info1').append('<hr><span>热门品牌</span>');
	})

	$('.showinfo1').click(function(){
		$('.info1').children().remove();
		$('.info1').siblings().hide();
		$('.info1').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info1').append('<span>为您推荐</span><ul></ul>');
			for(i=37;i<46;i++){
				$('.info1 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info1').append('<hr><span>热门品牌</span>');
		})
	})

	$('.info1').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info1').append('<ul></ul>');
			for(j=15;j<25;j++){
				$('.info1 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo2').click(function(){
		$('.info2').children().remove();
		$('.info2').siblings().hide();
		$('.info2').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info2').append('<span>猫咪主粮</span><ul></ul>');
			for(i=0;i<4;i++){
				$('.info2 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info2').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info2').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info2').append('<ul></ul>');
			for(j=0;j<8;j++){
				$('.info2 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo3').click(function(){
		$('.info3').children().remove();
		$('.info3').siblings().hide();
		$('.info3').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info3').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span>猫咪零食</span><ul></ul>');
			for(k=4;k<8;k++){
				$('.info3 ul:eq(0)').append('<li><img src="../'+arr[k].imgurl+'"></img><p>'+arr[k].name+'</p><p>'+arr[k].produce+'</p></li>')				
			}
			$('.info3').append('<hr><span>热门品牌</span>');
		})		
	})

	$('.info3').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info3').append('<ul></ul>');
			for(l=8;l<16;l++){
				$('.info3 ul:eq(1)').append('<li><img src="../'+arr[l].imgurl+'"></img><p>'+arr[l].name+'</p><p>'+arr[l].produce+'</p></li>')			
			}
		})	
	})
		
	$('.showinfo4').click(function(){
		$('.info4').children().remove();
		$('.info4').siblings().hide();
		$('.info4').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info4').append('<span>猫咪日用</span><ul></ul>');
			for(i=9;i<14;i++){
				$('.info4 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info4').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info4').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info4').append('<ul></ul>');
			for(j=16;j<24;j++){
				$('.info4 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo5').click(function(){
		$('.info5').children().remove();
		$('.info5').siblings().hide();
		$('.info5').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info5').append('<span>猫咪玩具</span><ul></ul>');
			for(i=14;i<18;i++){
				$('.info5 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info5').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info5').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info5').append('<ul></ul>');
			for(j=24;j<32;j++){
				$('.info5 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo6').click(function(){
		$('.info6').children().remove();
		$('.info6').siblings().hide();
		$('.info6').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info6').append('<img src="../images/shop/6_7.jpg" style="width:240px;height:100px;"><span>猫咪保健</span><ul></ul>');
			for(i=18;i<24;i++){
				$('.info6 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info6').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info6').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info6').append('<ul></ul>');
			for(j=32;j<40;j++){
				$('.info6 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo7').click(function(){
		$('.info7').children().remove();
		$('.info7').siblings().hide();
		$('.info7').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info7').append('<img src="../images/shop/7_6.jpg" style="width:240px;height:100px;"><span>猫咪医疗</span><ul></ul>');
			for(i=24;i<29;i++){
				$('.info7 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info7').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info7').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info7').append('<ul></ul>');
			for(j=40;j<48;j++){
				$('.info7 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo8').click(function(){
		$('.info8').children().remove();
		$('.info8').siblings().hide();
		$('.info8').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info8').append('<span>猫咪出行</span><ul></ul>');
			for(i=29;i<32;i++){
				$('.info8 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info8').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info8').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info8').append('<ul></ul>');
			for(j=48;j<56;j++){
				$('.info8 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})


	$('.showinfo9').click(function(){
		$('.info9').children().remove();
		$('.info9').siblings().hide();
		$('.info9').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info9').append('<span>猫咪装扮</span><ul></ul>');
			for(i=32;i<34;i++){
				$('.info9 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info9').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info9').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info9').append('<ul></ul>');
			for(j=56;j<64;j++){
				$('.info9 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo10').click(function(){
		$('.info10').children().remove();
		$('.info10').siblings().hide();
		$('.info10').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info10').append('<span>猫咪美容</span><ul></ul>');
			for(i=34;i<38;i++){
				$('.info10 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info10').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info10').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info10').append('<ul></ul>');
			for(j=64;j<72;j++){
				$('.info10 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo11').click(function(){
		$('.info11').children().remove();
		$('.info11').siblings().hide();
		$('.info11').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info11').append('<span>猫咪香波</span><ul></ul>');
			for(i=38;i<43;i++){
				$('.info11 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info11').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info11').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info11').append('<ul></ul>');
			for(j=72;j<80;j++){
				$('.info11 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})


	$('.showinfo12').click(function(){
		$('.info12').children().remove();
		$('.info12').siblings().hide();
		$('.info12').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info12').append('<span>猫咪周边</span><ul></ul>');
			for(i=43;i<48;i++){
				$('.info12 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info12').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info12').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info12').append('<ul></ul>');
			for(j=80;j<88;j++){
				$('.info12 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})

	$('.showinfo13').click(function(){
		$('.info13').children().remove();
		$('.info13').siblings().hide();
		$('.info13').show();
		$.post('/showShop',function(response){
			var arr = response;
			$('.info13').append('<span>猫咪定制</span><ul></ul>');
			for(i=48;i<50;i++){
				$('.info13 ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')				
			}
			$('.info13').append('<hr><span>热门品牌</span>');
		})


	})

	$('.info13').on('mouseenter',function(){
		$.post('/showLogo',function(response){
			var arr = response;
			$('.info13').append('<ul></ul>');
			for(j=88;j<96;j++){
				$('.info13 ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')			
			}
		})		
	})














	//点击右标题
	$('.clickTitle_r').on('click',function(){
		$('.main_l').hide();
		$('.main_r').show();
		$.post('/showLogo',function(response){
			var arr = response;
			$('.main_r').append('<h3>--推荐品牌--</h3><ul></ul>');
			for(i=0;i<12;i++){
				$('.main_r ul:eq(0)').append('<li><a href="catList.html"><img src="../'+arr[i].imgurl+'"></img></a><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--主粮品牌--</h3><ul></ul>');
			for(j=12;j<24;j++){
				$('.main_r ul:eq(1)').append('<li><img src="../'+arr[j].imgurl+'"></img><p>'+arr[j].name+'</p><p>'+arr[j].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--零食品牌--</h3><ul></ul>');
			for(k=24;k<36;k++){
				$('.main_r ul:eq(2)').append('<li><img src="../'+arr[k].imgurl+'"></img><p>'+arr[k].name+'</p><p>'+arr[k].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--医疗品牌--</h3><ul></ul>');
			for(l=36;l<43;l++){
				$('.main_r ul:eq(3)').append('<li><img src="../'+arr[l].imgurl+'"></img><p>'+arr[l].name+'</p><p>'+arr[l].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--保健品牌--</h3><ul></ul>');
			for(m=43;m<55;m++){
				$('.main_r ul:eq(4)').append('<li><img src="../'+arr[m].imgurl+'"></img><p>'+arr[m].name+'</p><p>'+arr[m].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--洗护品牌--</h3><ul></ul>');
			for(n=55;n<67;n++){
				$('.main_r ul:eq(5)').append('<li><img src="../'+arr[n].imgurl+'"></img><p>'+arr[n].name+'</p><p>'+arr[n].produce+'</p></li>')
			}
			$('.main_r').append('<h3>--玩具品牌--</h3><ul></ul>');
			for(o=67;o<79;o++){
				$('.main_r ul:eq(6)').append('<li><img src="../'+arr[o].imgurl+'"></img><p>'+arr[o].name+'</p><p>'+arr[o].produce+'</p></li>')
			}		
		})
	})
})