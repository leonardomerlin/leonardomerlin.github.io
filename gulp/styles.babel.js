import * as config from './config.babel';
import gulp from 'gulp';
// import path from 'path';

import browserSync from 'browser-sync';
import loadPlugins from 'gulp-load-plugins';

let $ = loadPlugins();
var _ = require('lodash');

gulp.task('styles', function () {
	var sassOptions = {
		style: 'expanded'
	};

	var injectFiles = gulp.src([
		path.join(conf.paths.src, '/app/**/*.scss'),
		path.join('!' + conf.paths.src, '/app/index.scss')
	], { read: false });

	var injectOptions = {
		transform: function(filePath) {
			filePath = filePath.replace(conf.paths.src + '/app/', '');
			return '@import "' + filePath + '";';
		},
		starttag: '// injector',
		endtag: '// endinjector',
		addRootSlash: false
	};


	return gulp.src([
		path.join(conf.paths.src, '/app/index.scss')
	])
		.pipe($.inject(injectFiles, injectOptions))
		.pipe(wiredep(_.extend({}, conf.wiredep)))
		.pipe($.sourcemaps.init())
		.pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
		.pipe($.autoprefixer({
			browsers: ['last 3 versions', 'ie >= 9', 'ff > 20', 'Chrome > 30', 'Opera > 25', 'Safari > 6', 'iOS > 6'],
			cascade: false
		})).on('error', conf.errorHandler('Autoprefixer'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
		.pipe(browserSync.reload({ stream: true }));
});
