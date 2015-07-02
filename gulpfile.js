var gulp = require('gulp'),
    gutil = require('gulp-util'),
    g = require('gulp-load-plugins')();

var options = require('./config/gulp-options');
var paths = require('./config/paths');

gulp.task('default', ['scss']);

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe(g.sass(options.scss))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(g.filesize())
    .on('error', gutil.log);
});