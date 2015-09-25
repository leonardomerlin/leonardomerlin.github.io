/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

import gutil from 'gulp-util';

/**
 *  The main paths of your project handle these with care
 */
export const paths = {

	src: 'src',
	dist: '_site',
	tmp: '.tmp',

	pages: [ 'index.html', 'blog/index.html', 'talks/index.html', 'projects/index.html' ],

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

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
export function errorHandler ( title ) {

	return ( err ) => {

		gutil.log( gutil.colors.red( '[' + title + ']' ), err.toString() );
		this.emit( 'end' );

	};
}
