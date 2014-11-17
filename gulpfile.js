'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegRecompress = require('imagemin-jpeg-recompress');

gulp.task('images', function() {
  return gulp.src('assets/img-src/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [jpegRecompress({loops: 3})]
    }))
    .pipe(gulp.dest('assets/img/'));
});
