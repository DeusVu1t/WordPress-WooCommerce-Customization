var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var twig = require('gulp-twig');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var yui = require('gulp-yuicompressor');
var babel = require('gulp-babel');


/*
  Sass compile
*/
gulp.task('sass', function() {
  return gulp.src('./stylesheets/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      grid: false
    }))
    // .pipe(yui({type: 'css'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.src('./stylesheets/**/*.scss')
    .pipe(watch('./stylesheets/**/*.*', function() {
      gulp.start('sass');
    }));
});

/*
  JavaScript
*/
gulp.task('js-vendor', function() {
  var files = [
    './javascript/vendor/base/*.*',
    './javascript/vendor/modules/*.*'
  ];
  return gulp.src(files)
    // .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    // .pipe(yui({
    //   type: 'js'
    // }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task('js-vendor:watch', ['js-vendor'], function() {
  gulp.src('./javascript/vendor/**/*.js')
    .pipe(watch('./javascript/vendor/**/*.js', function() {
      gulp.start('js-vendor');
    }));
});




gulp.task('js-red', function() {
  var files = [
    './javascript/red/*.*',
    './javascript/main.js'
  ];
  return gulp.src(files)
    // .pipe(sourcemaps.init())
    .pipe(concat('red.js'))
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    // .pipe(yui({
    //   type: 'js'
    // }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./tmp/"));
});

gulp.task('js-red:watch', ['js-red'], function() {
  gulp.src('./javascript/red/**/*.js')
    .pipe(watch('./javascript/red/**/*.js', function() {
      gulp.start('js-red');
    }))
    .pipe(watch('./javascript/main.js', function() {
      gulp.start('js-red');
    }));
});

gulp.task('js-bundle', function() {
  var files = [
    './tmp/vendor.js',
    './tmp/red.js'
  ];
  return gulp.src(files)
    .pipe(concat('main.js'))
    .pipe(gulp.dest("./assets/js/"));
});

gulp.task('js-bundle:watch', ['js-bundle'], function() {
  gulp.src('./tmp/*.js')
    .pipe(watch('./tmp/*.js', function() {
      gulp.start('js-bundle');
    }));
});



/*
  Glob Watch
*/
gulp.task('default', function() {
  gulp.start('sass:watch');
  gulp.start('js-vendor:watch');
  gulp.start('js-red:watch');
  gulp.start('js-bundle:watch');
});
