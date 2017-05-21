//引入gulp模块
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

//创建gulp任务
gulp.task('compileSass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	//输出编译后的css文件
	.pipe(gulp.dest('src/css'));
});

//创建同步刷新任务
gulp.task('server',function(){
	browserSync({
		server:'./src',
		files:['./src/*.html','./src/html/*.html','./src/css/*.css','./src/js/*.js']
	});

	gulp.watch('src/sass/*.scss',['compileSass']);
});