var gulp = require('gulp'),
    gutil = require('gulp-util'),
    g = require('gulp-load-plugins')();

var options = require('./config/gulp-options');
var paths = require('./config/paths');

gulp.task('default', ['scss', 'lint', 'watch']);
gulp.task('build', ['scss', 'scripts', 'js', 'css']);

gulp.task('watch', function() {
  gulp.watch(paths.scss.watch, ['scss']);
  gulp.watch(paths.jshint.watch, ['lint']);
});

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe(g.sass(options.scss))
    .pipe(g.filesize())
    .pipe(g.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.concat(paths.css.vendor.filename))
    .pipe(g.filesize())
    .pipe(g.cssmin())
    .pipe(g.rename(paths.css.vendor.filename))
    .pipe(g.filesize())
    .pipe(g.notify('vendor.css created'))
    .pipe(gulp.dest(paths.css.vendor.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe(g.concat(paths.js.vendor.filename))
    .pipe(g.filesize())
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe(g.filesize())
    .pipe(g.notify('vendor.js created'))
    .on('error', gutil.log);
});

gulp.task('scripts', function() {
  return gulp.src(paths.js.src)
    .pipe(g.concat(paths.js.filename))
    .pipe(g.filesize())
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(g.filesize())
    .pipe(g.notify('scripts.js created'))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.jshint())
    .pipe(g.notify(options.notify.jshint));
});