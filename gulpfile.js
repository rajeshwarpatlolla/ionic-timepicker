var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var minifycss = require("gulp-minify-css");

gulp.task('html2js', function () {
    gulp.src(['./src/templates/time-picker-12-hour.html', './src/templates/time-picker-24-hour.html'])
        .pipe(minifyHtml())
        .pipe(ngHtml2Js({
            moduleName: "rajeshwar-ionic-timepicker"
        }))
        .pipe(concat("templates.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task('build',['html2js','cssminify'], function () {
    gulp.src(['./src/js/ionic-timepicker.js'])
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task('cssminify', function () {
    return gulp.src('./src/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default',['build']);
