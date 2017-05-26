require(['config'],function(){
	require(['zhjquery','global','xcConfirm'],function(){	
		
		//登陆页面就获得一个验证码
		var code;                  
        function setCode(){
        	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
        	var codeLength=4;
        	code = '';
        	for(var i=0;i<codeLength;i++){
        		var char = Math.floor(Math.random()*selectChar.length);
        		code += selectChar[char];
        		$('.set-code').html(code);
        	}
        }
		setCode();

		$('.myform').children().hide().eq(0).show();
		
		$('.phone').focus(function(){
		 	$('.btn-login').css({'backgroundColor':'rgb(254, 179, 18)','border-radius': '30px'});
		});

		$('.btn-login').click(function(){
			var phone = $('.phone').val();

			if(/^1[34578]\d{9}$/.test(phone)){
				// $.post('/getregister', {phone: phone},function(response){
				// 	if(response.status){
				// 		window.wxc.xcConfirm('手机号码已存在', window.wxc.xcConfirm.typeEnum.error); 
				// 	}else{
						$('.myform').children().show();
						//$('.phone').attr('readonly','readonly');
						$('.btn-login').hide();
						$('.next-go').show();
						$("form :input").each(function(){
			                if($(this).val() !== ''){				                    
			                	$('.next-go').click(function(){
			                		$('.next-go').css({'backgroundColor':'rgb(254, 179, 18)','border-radius': '30px'});
									var username = $('.username').val();
									var password = $('.password').val();
									var passwordag = $('.passwordag').val();
									var auth_code = $('.auth-code').val();
									var code_auth = $('.set-code').html();
									
									if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]{4,20}$/.test(username)){
										
										window.wxc.xcConfirm('用户名只能是4-20位汉字数字字母下划线或组合', window.wxc.xcConfirm.typeEnum.error); 
									
										return false;
									}

									if(!/^\S{6,20}$/.test(password)){
										
										window.wxc.xcConfirm('密码只能是6-20位数字字母', window.wxc.xcConfirm.typeEnum.error); 
									
										return false;
									}

									if(password.toLowerCase() != passwordag.toLowerCase()){
									
										window.wxc.xcConfirm('密码不一致', window.wxc.xcConfirm.typeEnum.error); 
										return false;
									}

									if(auth_code.toLowerCase() != code_auth.toLowerCase()){

										window.wxc.xcConfirm('验证码输入错误', window.wxc.xcConfirm.typeEnum.error); 
										return false;
									}else{
										console.log(username);
										$.post('/register', {name: username, phone: phone, password: password
											},function(response){
												if(response.status){
													window.wxc.xcConfirm("电话号码已存在请重新输入", window.wxc.xcConfirm.typeEnum.error); 
												}else{
													window.wxc.xcConfirm('注册成功,2s后跳转...', window.wxc.xcConfirm.typeEnum.sucess);
													setTimeout(function(){
														window.location.href = 'Personalcenter.html';
														
													},2000);
											}
										})
									}					
								})	
			                }
			                else{
			                	$('.next-go').css({'backgroundColor':'#ccc','border-radius': '30px'});
			                }
			            });
	                                     
	                    $('.set-code').click(function(){
	                    	 setCode();
	                    })
	            //     }
	            // })					   
			}
			else{					
				window.wxc.xcConfirm('请填写正确的手机号', window.wxc.xcConfirm.typeEnum.error); 
				return false;		
			}			
		})
		
	})
})