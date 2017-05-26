requirejs.config({
	paths:{
		"zhjquery":"../../libs/jquery/jquery-3.1.1",
		"zhswiper":"../../libs/swiper/swiper.min",
		"zhheader":"../js/header",
		"global":"../../libs/common/global",
		"xcConfirm":"../../libs/xcConfirm-150317204828/js/xcConfirm",
	},
	shim:{
		"zhswiper":["zhjquery"],
		"xcConfirm":["zhjquery"]
	}
});