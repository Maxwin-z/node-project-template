'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const empty = require('gulp-empty');
const plumber = require('gulp-plumber');
let watch = require('gulp-watch');
const yargs = require('yargs');

if (yargs.nowatch) {
    watch = empty;
}

gulp.task('babel', () => {
    const path = './src/**/*.js*(x)';
    return gulp.src(path)
        .pipe(watch(path, {}))
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel']);
