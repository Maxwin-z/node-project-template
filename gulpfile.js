'use strict';

const gulp = require('gulp');
const through = require('through2');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
let watch = require('gulp-watch');

if (!process.env.DEV) {
  watch = function () {
    return through.obj(function(file, enc, cb) {
      cb(null, file);
    })
  };
}

gulp.task('web.html', () => {
  const path = './web/**/*.html';
  return gulp.src(path)
    .pipe(watch(path, {}))
    .pipe(gulp.dest('dist/web/'));
})

gulp.task('web.js', () => {
  
})

gulp.task('babel', () => {
  const path = './src/**/*.js*(x)';
  return gulp.src(path)
    .pipe(watch(path, {}))
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel', 'web.html']);
