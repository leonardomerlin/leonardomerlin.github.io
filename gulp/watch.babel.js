import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';

import * as config from './config.babel';

gulp.task('watch', [], function () {

  // HTML
  gulp.watch([path.join(config.paths.src, '/*.html'), 'bower.json'], ['inject']);

  // CSS
  gulp.watch([
    path.join(config.paths.src, '/app/**/*.css'),
    path.join(config.paths.src, '/app/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch([
    path.join(config.paths.src, '/assets/images/icons/*.png')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('sprites');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch(path.join(config.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch(path.join(config.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});

function isOnlyChange(event) {
	return event.type === 'changed';
}
