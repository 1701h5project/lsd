requirejs.config({
	paths:{
		"zhjquery":"../../libs/jquery/jquery-3.1.1",
		"zhswiper":"../../libs/swiper/swiper.min",
		"zhheader":"../js/header",
	},
	shim:{
		"zhswiper":["zhjquery"],
	}
});
require.config({
	paths:{
		"jquery" : "../libs/jquery/jquery-3.1.1",
		"jqueryCookie" : "../libs/jquery/jquery.cookie",
		"lazyload" : "../libs/jquery.lazyload",
		"global" : "../libs/common/global",
		"xcConfirm" :"../libs/xcConfirm-150317204828/js/xcConfirm"
	},
	shim:{
		"jqueryCookie" : ["jquery"],
		"lazyload" : ["jquery"],
		"xcConfirm" : ["jquery"]
	}
})