var gulp 	 = require('gulp'),
	sass 	 = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger  = require('gulp-rigger'),
	browserSync  = require('browser-sync'),
	wait  = require('gulp-wait'),
	del = require('del');

var babel = require('gulp-babel');

var gulpautoprefixer = require('gulp-autoprefixer');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var easinggradients = require('postcss-easing-gradients');


var svgSprite = require('gulp-svg-sprite'),
	svgmin  = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');

gulp.task('clean', function() {
	del.sync('build');
});

gulp.task('sass', function(){
	var postcss      = require('gulp-postcss');
	var autoprefixer = require('autoprefixer');

	gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({indentType: 'tab', indentWidth: '1', outputStyle: 'nested'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('src/temp'));
		// .pipe(browserSync.reload({stream:true}));
});

gulp.task('autoprefixer', function () {
	gulp.src('src/temp/**/*.css')
		.pipe(postcss( [ autoprefixer(), easinggradients() ] ))
		.pipe(gulp.dest('build/css'))
		// .pipe(wait(400))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
});

gulp.task('html', function() {
	gulp.src('src/**/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
	gulp.src('src/js/**/*')
		.pipe(gulp.dest('build/js'));
});

gulp.task('svgicons', function () {
	return gulp.src('src/i/icons/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../icons.svg",
				}
			}
		}))
		.pipe(gulp.dest('build/i/'));
});

gulp.task('flags', function () {
	return gulp.src('src/i/flags/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../flags.svg",
				}
			}
		}))
		.pipe(gulp.dest('build/i/'));
});

gulp.task('commonSvgIcons', function () {
	return gulp.src('src/i/common/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../common.svg",
				}
			}
		}))
		.pipe(gulp.dest('build/i/'));
});

gulp.task('default', ['clean', 'browser-sync', 'sass', 'autoprefixer', 'html', 'js', 'svgicons', 'flags', 'commonSvgIcons'], function(){

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('build/fonts'));

	var buildImages = gulp.src('src/i/**/*')
		.pipe(gulp.dest('build/i'));

	var buildUserimg = gulp.src('src/userimg/**/*')
		.pipe(gulp.dest('build/userimg'));

	// var copyHtml = gulp.src('src/*.html')
	// 	.pipe(gulp.dest('build'));

	var copyJs = gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('build/js'));

	var buildHtml = gulp.src('src/**/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/'));

	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/temp/**/*.css', ['autoprefixer']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/js/**/*.js', ['js']).on('change', browserSync.reload);
});