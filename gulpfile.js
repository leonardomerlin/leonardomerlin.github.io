/* globals require */
(function(){
  'use strict';

  // GULP
  var gulp = require('gulp');
  var changed = require('gulp-changed');
  var uncss = require('gulp-uncss');
  var imagemin = require('gulp-imagemin');
  var pngquant = require('imagemin-pngquant');
  var jpegRecompress = require('imagemin-jpeg-recompress');

  var config = require('./config.js');

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
})();