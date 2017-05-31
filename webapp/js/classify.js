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

	$('.info').children().remove();
	$.post(erp.baseUrl+'showData',{collection:'shop',id:'2_1,3_1,4_1,5_1,6_1,7_1,8_1,9_1'},function(response){
		var arr = response;
		$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">为您推荐</span><ul></ul>');
		for(i=0;i<arr.length;i++){
			$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
		}
	})

	$('.showinfo1').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'2_1,3_1,4_1,5_1,6_1,7_1,8_1,9_1'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">为您推荐</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo2').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'2_1,2_2,2_3,2_4'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪主粮</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo3').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'3_1,3_2,3_3,3_4'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪零食</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo4').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'4_1,4_2,4_3,4_4,4_5,4_6'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪日用</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo5').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'5_1,5_2,5_3,5_4'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪玩具</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo6').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'6_1,6_2,6_4,6_4,6_5,6_6'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/6_7.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪保健</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo7').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'7_1,7_2,7_3,7_4,7_5'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/7_6.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪医疗</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo8').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'8_1,8_2,8_3'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪出行</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo9').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'9_1,9_2'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪装扮</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo10').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'10_1,10_2,10_3,10_4'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪美容</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo11').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'11_1,11_2,11_3,11_4,11_5'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪香波</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo12').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'12_1,12_2,12_3,12_4,12_5'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪周边</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	$('.showinfo13').click(function(){
		$('.info').children().remove();
		$.post(erp.baseUrl+'showData',{collection:'shop',id:'13_1,13_2'},function(response){
			var arr = response;
			$('.info').append('<img src="../images/shop/3_5.jpg" style="width:240px;height:100px;"><span style="color:#f60;font-size:16px;">猫咪定制</span><ul></ul>');
			for(i=0;i<arr.length;i++){
				$('.info ul').append('<a href="catList.html"><li><img src="../'+arr[i].imgurl+'"></img><p>'+arr[i].name+'</p><p>'+arr[i].produce+'</p></li></a>')				
			}
		})
	})

	//点击右标题
	$('.clickTitle_r').on('click',function(){
		$('.main_l').hide();
		$('.main_r').show();
		$('.main_r').append('<div class="wrap" style="display:none;"><section class="home"></section></div><div class="loading"><div class="process"><div class="cs"></div></div></div>')
		$.post(erp.baseUrl+'showData',{collection:'logo'},function(response){

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

	        if(document.readyState == "complete"){//当页面加载状态为完全结束时进入     
	            $(".process .cs").animate({width:"100%"},function(){  
	                 $(".loading").hide();//当页面加载完成后将loading页隐藏    
	                 $('.wrap').show();  
	            });  
	        }     

		})
	})
})