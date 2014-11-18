'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegRecompress = require('imagemin-jpeg-recompress');

var path = {
  images: {
    src: 'assets/img-src/*',
    dest: 'assets/img/'
  }
};

gulp.task('images', function() {
  return gulp.src(path.images.src)
    .pipe(changed(path.images.dest))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [jpegRecompress({loops: 3})]
    }))
    .pipe(gulp.dest(path.images.dest));
});
