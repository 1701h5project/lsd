require.config({
//	baseUrl:
	paths:{
		"jquery":"../../libs/jquery/jquery-3.1.1",
		"swiper":"../../libs/Swiper/dist/js/swiper.jquery.min",
		"fly":"../../libs/fly/dist/jquery.fly.min"
	},
	shim:{
		"fly":["jquery"],
		"swiper":["jquery"]
	}
})