'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var uncss = require('gulp-uncss');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegRecompress = require('imagemin-jpeg-recompress');

var path = {
  pages: ['index.html'],
  styles: {
    src: 'assets/css/*.scss',
    tmp: '_site/assets/css/*.css',
    dest: 'assets/css/'
  },
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

gulp.task('styles', function() {
  return gulp.src(path.styles.tmp)
    .pipe(changed(path.styles.dest))
    .pipe(uncss({
      html: path.pages
    }))
    .pipe(gulp.dest(path.styles.dest));
});
