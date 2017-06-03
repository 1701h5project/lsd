require(['config'],function(){
	require(['jquery','global'],function(){
		    
		$.post(epet.baseUrl +'getaddress',{phone:sessionStorage.getItem('phone','value')},function(response){
			// console.log(response);
			if( response.data.length != 0){
				$('.adress').hide();
				$('.save1').hide();
				$('.add1').show();
				$('.save2').hide();

				var res=response.data.map(function(item,index){
					if(item != null){
						var cname = 'adressRecord'+index;
						return `<div class="adressRecord ${cname}">
								    <div class="inner">	           
								        <div class="inner1"><span style="color:red">${item.name}</span><span class="mobi">${item.phone}</span></div>
								        <div class="inner2">${item.address}</div>
								    </div>
								    <div class="btn">
								    	<div class="acquiesce"><input type="radio">默认地址</div>
								        <div class="remove"><span></span>删除</div>
								        <div class="edit"><span></span>编辑</div>
								    </div>
								</div>`
						}		
				}).join('');

				$('.adress').after(res);

				$('.acquiesce input[type=radio]').click(function(){
					$(this).parents('.adressRecord').siblings().children().find('input[type=radio]').prop('checked',false);
					if($(this).attr("checked",true)){console.log(666)}
					// if($(this).prop('checked',true)){
					// 	var idx = $(this).parents('.adressRecord')[0].className.substr(-1,1);

					// 	var shamResponse = response.splice(idx,1);
					// 	//console.log(shamResponse);
					// 	response.unshift(shamResponse[0]);
					// 	//console.log(response)
					// 	var id = $.trim(shamResponse[0]._id);
					// 	//console.log(id)
					// 	$.post(epet.baseUrl + 'sort',{_id:id},function(response){					
					// 		//location.reload();							
					// 	})
					// }																																										
				})



				$('.remove').click(function(){
					$(this).parents('.adressRecord').remove();
					// 获取删除的节点对应在response中的下标
					var idx=$(this).parents('.adressRecord')[0].className.substr(-1,1);
					//console.log(idx)=0;
					var shamResponse=response.data.splice(idx,1)
						console.log(shamResponse);
						// 把对应的数据在数据库中删除
					$.post(epet.baseUrl + 'deladdress',{_id:shamResponse[0]._id},function(response){					
							location.reload();							
					})
				})

				$('.edit').click(function(){
					$('.adressRecord').hide();
					$('.adress').show();
					$('.add1').hide();
					$('.save2').show();
					$('.save1').hide();
					var idx=$(this).parents('.adressRecord')[0].className.substr(-1,1);
					var shamResponse=response.data.splice(idx,1);
					//var id = $.trim('ObjectId("' + shamResponse[0]._id + '")');
					var id = $.trim(shamResponse[0]._id);	
						
					$('input[name=name]').val(shamResponse[0].name);
					$('.phone').val(shamResponse[0].phone);

					$('.save2').click(function(){
						var name = $('.name').val();
						var phone = $('.phone').val();
						var addressNew = $('.xiangxi').val();
						//console.log(id);
						var city = $('#province  option:selected').text();
						
						var address_1 = $.trim(city) + $.trim(addressNew);
						if(name == '' || addressNew == ''){alert('地址姓名不能为空'); return false;}
						if(!/^1[34578]\d{9}$/.test(phone)){alert('电话号码输入错误'); return false;}
						
						$.post(epet.baseUrl +'updataadress',{"_id":id,"data":JSON.stringify({address:address_1,name:name,phone:phone})}
							,function(response){
							location.reload();
						})
					})
				})

			}else{
				$('.adress').show();
				$('.save1').show();
				$('.add1').hide();
				$('.save2').hide();
			}				
		});

		$('.add1').click(function(){
			$('.adressRecord').hide();
			$('.adress').show();
			$('.add1').hide();
			$('.save1').show();
			$('.save2').hide();
		})

		$('.save1').click(function(){
			var name = $('.name').val();
			var phone = $('.phone').val();
			var addressNew = $('.xiangxi').val();
			var city = $('#province  option:selected').text();
			//console.log(city);
			var address_1 = $.trim(city) + $.trim(addressNew);
			if(name == '' || addressNew == ''){alert('地址姓名不能为空'); return false;}
			if(!/^1[34578]\d{9}$/.test(phone)){alert('电话号码输入错误'); return false;}
			
			$.post(epet.baseUrl +'adress',{onlyphone:sessionStorage.getItem('phone','value'),name:$.trim(name),phone:$.trim(phone),address:$.trim(address_1),
				//address:address_1,							
			},function(response){
				if(response.status){
					alert('设置失败')
				}else{
					// alert(response.message);
					location.reload();
				}
			})
		})

		$(".headermenu").click(function(){
			$(".herderHide").slideToggle();
		});

		$('.icon-jiantou').click(function(){
			history.back();
		})

	})
})