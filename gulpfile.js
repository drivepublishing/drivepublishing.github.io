'use strict';

let gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    options = require('./config/gulp-options'),
    paths = require('./config/gulp-paths');

// Default
gulp.task('default', ['scss', 'lint', 'watch']);
//
gulp.task('watch', function() {
  gulp.watch(paths.scss.watch, ['scss']);
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.js.watch, ['scripts']);
});
// Build
gulp.task('build', ['scss', 'scripts', 'js', 'css', 'img']);

//////////////////////
// BROWSERSYNC
//////////////////////

gulp.task('browserSync', function() {
    browserSync.init(opts.browserSync);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('less:reload', ['less'], function() {
    browserSync.reload();
});

gulp.task('js:reload', ['js'], function() {
    browserSync.reload();
});

gulp.task('webpack:reload', ['webpack'], function() {
    browserSync.reload();
});


gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe($.sass(options.scss))
    .pipe($.filesize())
    .pipe($.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.vendor.filename))
    .pipe($.filesize())
    .pipe($.cssmin())
    .pipe($.rename(paths.css.vendor.filename))
    .pipe($.filesize())
    .pipe($.notify('vendor.css created'))
    .pipe(gulp.dest(paths.css.vendor.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.concat(paths.js.vendor.filename))
    .pipe($.filesize())
    .pipe($.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe($.filesize())
    .pipe($.notify('vendor.js created'))
    .on('error', gutil.log);
});

gulp.task('scripts', function() {
  return gulp.src(paths.js.src)
    .pipe($.concat(paths.js.filename))
    .pipe($.filesize())
    .pipe($.uglify())
    .pipe(gulp.dest(paths.js.dest))
    .pipe($.filesize())
    .on('error', gutil.log);
});

//////////////////////
// ESLINT
//////////////////////

gulp.task('eslint', function() {
  return gulp.src(paths.eslint.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.eslint())
    .on('error', opts.plumber.errorHandler)
    .pipe($.eslint.format('stylish'))
    .pipe($.notify(opts.notify.eslint));
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.jshint())
    .pipe(g.notify(options.notify.jshint));
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe(g.imagemin(options.imagemin))
  .pipe(gulp.dest(paths.img.dest));
});