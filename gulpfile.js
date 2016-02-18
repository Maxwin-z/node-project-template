'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const empty = require('gulp-empty');
const yargs = require('yargs');

if (yargs.nowatch) {
    watch = empty;
}

gulp.task('babel', () => {
    const path = './src/**/*.js*(x)';
    return gulp.src(path)
        .pipe(watch(path, {}))
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel']);
