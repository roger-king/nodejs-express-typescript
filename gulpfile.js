
"use strict";

var gulp = require('gulp');
var typescript = require('gulp-tsc');

gulp.task('compile', function(){
    gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', [compile]);