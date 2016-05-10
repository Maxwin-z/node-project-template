'use strict';

const gulp = require('gulp');
const through = require('through2');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
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

gulp.task('web.webpack', () => {
  webpack(webpackConfig, ()=>{});
})

gulp.task('web.webpack-dev-server', shell.task([
    // 'supervisor -w dist/app.js -- dist/app.js'
    'webpack-dev-server --inline --hot --content-base dist/web/'
]));

gulp.task('web.dev', ['web.html', 'web.webpack-dev-server']);
gulp.task('web.build', ['web.html', 'web.webpack']);

gulp.task('babel', () => {
  const path = './src/**/*.js*(x)';
  return gulp.src(path)
    .pipe(watch(path, {}))
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel', 'web.dev']);
