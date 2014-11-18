'use strict';

module.exports = {
  pages: ['index.html', 'blog/index.html', 'talks/index.html', 'projects/index.html'],
  
  src: 'src',
  tmp: 'tmp',
  dest: '_site',

  styles: {
    src: 'assets/css/*.scss',
    tmp: 'tmp/assets/css/*.css',
    dest: 'assets/css/'
  },
  
  images: {
    src: 'assets/img-src/*',
    dest: 'assets/img/'
  }
};