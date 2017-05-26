//引入gulp插件和sass插件

var gulp = require('gulp');
var sass = require('gulp-sass');

//创建编译任务
gulp.task('cat',function(){
	//找到sass文件位置
	gulp.src('webapp/sass/*.scss')
	
	//导入gulp插件实现编译
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	
	//把编译后的文件导入css文件夹
	.pipe(gulp.dest('webapp/css'))
});

//创建事件监听
gulp.task('jtSass',function(){
	gulp.watch('webapp/sass/*.scss',['cat']);
})
