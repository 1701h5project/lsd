$(function(){
	

	$.post('http://10.3.133.4:3000/getaddress',{},function(response){
			// var res=response.map(function(item,index){
					$('.adde').text(response[0].address);
					$('.usess').text(response[0].name);
					$('.m1').text(response[0].phone);
				// var cname = 'adressRecord'+index;
				// return `<div class="adressRecord ${cname}">
						    // <div class="inner">	           
						        // <div><span>${item.name}</span><span>${item.phone}</span></div>
						        // <div>${item.address}</div>
						    // </div>
						    // <div class="btn">
						        // <div class="remove"><span></span>删除</div>
						        // <div class="edit"><span></span>编辑</div>
						    // </div>
						// </div>`
			// }).join('');
	})

	$(".headermenu").click(function(){
		if($(".herderHide").css("display")=="none"){
			$(".herderHide").show();
		}else{
			$(".herderHide").hide();
		}
	});

})