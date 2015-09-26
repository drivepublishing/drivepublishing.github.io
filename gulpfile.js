'use strict';

let gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $           = require('gulp-load-plugins')(),
    paths       = require('./config/gulp-paths'),
    opts        = require('./config/gulp-options');

gulp.task('default', ['scss:watch', 'js:watch', 'eslint:watch', 'browserSync']);

//////////////////////
// WATCH
//////////////////////

gulp.task('scss:watch', function() {
  gulp.watch(paths.scss.watch, ['scss:reload']);
});

gulp.task('js:watch', function() {
  gulp.watch(paths.js.watch, ['js:reload']);
});

gulp.task('eslint:watch', function() {
  gulp.watch(paths.eslint.src, ['eslint']);
});

gulp.task('jshint:watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
});

//////////////////////
// BROWSERSYNC
//////////////////////

gulp.task('browserSync', function() {
    browserSync.init(opts.browserSync);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('scss:reload', ['scss'], function() {
    browserSync.reload();
});

gulp.task('js:reload', ['js'], function() {
    browserSync.reload();
});

gulp.task('webpack:reload', ['webpack'], function() {
    browserSync.reload();
});

//////////////////////
// BABEL
//////////////////////

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .on('error', opts.plumber.errorHandler)
    .pipe($.concat(paths.js.filename))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.uglify())
    .pipe($.rename(paths.js.min))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.sourcemaps.write('.'))
    .on('error', gutil.log);
});

//////////////////////
// UGLIFY
//////////////////////

gulp.task('js:vendor', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.concat(paths.js.vendor.filename))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.uglify())
    .pipe($.rename(paths.js.vendor.min))
    .pipe(gulp.dest(paths.dest.js))
    .on('error', gutil.log);
});

//////////////////////
// SCSS
//////////////////////

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.sass())
    .pipe($.rename(paths.scss.filename))
    .pipe(gulp.dest(paths.dest.css))
    .on('error', opts.plumber.errorHandler)
    .pipe($.autoprefixer(opts.autoprefixer))
    .pipe($.cssmin())
    .pipe($.rename(paths.scss.min))
    .pipe(gulp.dest(paths.dest.css)).on('error', gutil.log);
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

//////////////////////
// IMAGEMIN
//////////////////////

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe($.imagemin(opts.imagemin))
  .pipe(gulp.dest(paths.dest.img));
});