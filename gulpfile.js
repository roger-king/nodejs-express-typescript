
"use strict";

var gulp = require('gulp');
var zip = require('gulp-zip');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("./tsconfig.json");

gulp.task('compile', function(){
    gulp.src(['src/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('dist'))
});

gulp.task('bundle', function(){
    gulp.src('./yarn.lock')
        .pipe(gulp.dest('dist'))

    gulp.src('./package.json')
        .pipe(gulp.dest('dist'))
    
    gulp.src('config')
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['compile', 'bundle']);