requirejs.config({
	paths:{
		"zhjquery":"../../libs/jquery/jquery-3.1.1",
		"zhswiper":"../../libs/swiper/swiper.min",
		"zhheader":"../js/header"
		
	},
	shim:{
		"zhswiper":["zhjquery"]
	}
});