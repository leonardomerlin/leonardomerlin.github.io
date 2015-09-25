/**
 *  Welcome to gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */
import gulp from 'gulp';
import wrench from 'wrench';

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive( './gulp' ).filter( ( file ) => {

	// return only files which end with '.js' extension
	return ( /\.(js)$/i ).test( file );

} ).map( ( file ) => {

	require( './gulp/' + file );

} );



/**
 *  Default task clean temporaries directories and launch the
 *  development env tasks
 */
gulp.task( 'default', [ 'clean' ], () => {

	gulp.start( 'serve' );

} );
