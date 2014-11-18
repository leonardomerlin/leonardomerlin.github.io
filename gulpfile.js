'use strict';

// GULP
var gulp = require('gulp');
// var path = require('path');
// var del = require('del');
// var rename = require('gulp-rename');
// var concat = require('gulp-concat');
// var bump = require('gulp-bump');
// var util = require('gulp-util');
var changed = require('gulp-changed');
// CSS
// var scsslint = require('gulp-scss-lint');
var uncss = require('gulp-uncss');
// JS
// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');
// var stripDebug = require('gulp-strip-debug');
// var uglify = require('gulp-uglify');
// IMG
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegRecompress = require('imagemin-jpeg-recompress');

var config = require('./config.js');

// gulp.task('clean', function (cb) {
//   del([config.tmp], cb);
// });

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [jpegRecompress({loops: 3}), pngquant()]
    }))
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('styles', function() {
  return gulp.src(config.styles.tmp)
    .pipe(changed(config.styles.dest))
    .pipe(uncss({
      html: config.pages
    }))
    .pipe(gulp.dest(config.styles.dest));
});
