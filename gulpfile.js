
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');


gulp.task('webserver', function() {
  connect.server();
});
 
gulp.task('default', ['webserver']);

gulp.task('sass', function(){
	return sass('sass/', {style: 'expanded', sourcemap: true, compass: false})
		
        .pipe(sourcemaps.write('../maps'))
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
})
 
gulp.task('default', ['sass', 'webserver', 'watch']);