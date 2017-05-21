;(function($){
	$.fn.fdzoom = function(options){
		var defaults = {
			//大图的位置
			position:'bottom',

			//大图与小图的间距
			gap:20,

			//放大区域的大小
			width:400,
			height:400
		}
		// 遍历jquery对象
		return this.each(function(){
			// 扩展默认值
			var opt = $.extend({},defaults,options);

			var $zoom = $(this).addClass('gds-zoom');
            var $smallPic = $zoom.children('img');

            // 全局变量

            // 放大镜
            var $minZoom;

            // 大图显示区域
            var $bigZoom;

            // 大图
            var $bigPic;

            // 大图与小图的比率
            var ratio;

            // 初始化
            // 创建放大镜
            // 并写入.zoom
            $minZoom = $('<span/>').addClass('minzoom');
            $zoom.append($minZoom);

            // 创建大图
            $bigZoom = $('<div/>').addClass('gds-bigzoom');
            $bigPic = $('<img/>');
            $bigPic.attr('src',$smallPic.attr('data-big'));
            $bigZoom.append($bigPic);

            // 设置样式
            $bigZoom.css({
            	width:opt.width,
            	height:opt.height
            });

            if(opt.position === 'right'){
            	$bigZoom.css({
            		left:$smallPic.outerWidth() + opt.gap,
            		top:0
            	});
            }else if(opt.position === 'left'){
            	$bigZoom.css({
            		left:$smallPic.offset().left - $bigZoom.outerWidth() - opt.gap,
            		top:$smallPic.offset().top
            	});
            }

            // $('body').append($bigZoom);
            $bigZoom.appendTo('#goods-l');


            // 2）鼠标移入小图
            $zoom.on('mouseenter',function(){
            	$bigPic.attr('src',$smallPic.attr('data-big'));

            	$bigZoom.show();
            	$minZoom.show();

				ratio = $bigPic.width()/$smallPic.width();

				// 改变放大镜的宽高
				$minZoom.css({
					width:$bigZoom.outerWidth()/ratio,
					height:$bigZoom.outerHeight()/ratio
				});
            });

            // 3）鼠标移动
            $zoom.on('mousemove',function(e){
            	 // 计算移动的距离
                var left = e.clientX - $zoom.offset().left - $minZoom.outerWidth()/2;
                //加上滚动条的滚动距离
                var top = e.clientY - $zoom.offset().top - $minZoom.outerHeight()/2+window.scrollY;
                // 放置移出小图之外的区域
                if(left<0){
                    left = 0;
                }else if(left > $smallPic.outerWidth() - $minZoom.outerWidth()){
                    left = $smallPic.outerWidth() - $minZoom.outerWidth()
                }

                if(top<0){
                    top = 0;
                }else if(top>$smallPic.outerHeight() - $minZoom.outerHeight()){
                    top = $smallPic.outerHeight() - $minZoom.outerHeight();
                }

                // 放大镜跟随效果
                $minZoom.css({
                	left:left,
                	top:top
                });

                // 显示大图对应区域
                $bigPic.css({
                	left:-left*ratio,
                	top:-top*ratio
                });

            });

            // 4）鼠标离开小图
            $zoom.on('mouseleave',function(){
            	$bigZoom.hide();
            	$minZoom.hide();
            });
		});
	}
})(jQuery);