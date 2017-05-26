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

// 用于js文件的压缩
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var concat = require('gulp-concat');
// gulp.task('compressJS',function(){
// 	gulp.src('src/js/*.js')

// 	// 合并
// 	.pipe(concat('page.js'))

// 	// 输入合并后但未压缩的版本
// 	.pipe(gulp.dest('dist/js/'))

// 	// 压缩
// 	.pipe(uglify({
// 		mangle:false,
// 		compress:false
// 	}))

// 	// 重命名
// 	.pipe(rename({
// 		suffix:'.min'
// 	}))

// 	// 输出
// 	.pipe(gulp.dest('dist/js/'))
// });

// // 同步任务
// var browserSync = require('browser-sync');
// gulp.task('server',function(){
// 	browserSync({
// 		server: "./src",

// 		// 代理服务器
// 		// proxy:'http://localhost/h5_1701/',

// 		// 自定义端口
// 		// port:999,

// 		// 监听文件修改，自动刷新浏览器
// 		files:['./src/*.html','./src/css/*.css']
// 	});

// 	// 监听sass文件修改，执行编译sass文件
// 	gulp.watch('src/sass/*.scss',['compileSass']);
// });