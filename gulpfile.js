//引入gulp模块
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

//创建gulp任务
gulp.task('compileSass',function(){
	gulp.src('webapp/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	//输出编译后的css文件
	.pipe(gulp.dest('webapp/css'));
});

//创建同步刷新任务
gulp.task('server',function(){
	browserSync({
		server:'./',
		files:['./webapp/*.html','./webapp/html/*.html','./webapp/css/*.css','./webapp/js/*.js']
	});

	gulp.watch('webapp/sass/*.scss',['compileSass']);
});