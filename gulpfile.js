/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Load plugins ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var gulp = require('gulp'),
    sass = require('gulp-sass')
    fileinclude = require('gulp-file-include'),
    del = require('del');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Operations ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ File include ~~~~~~~~~~ */

    gulp.task('fileinclude', function() {
        return gulp.src(['**/*.html'])
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@root'
            }))
            .pipe(gulp.dest('dist/'));
    });


    /* ~~~~~~~~~~ Clone assets ~~~~~~~~~~ */

    gulp.task('clone-assets',function(){
        return gulp.src([
            'images/**/*',
            'pdf-files/**/*'
        ],    {base: '.'})
        .pipe(gulp.dest('dist/'));
    });


    /* ~~~~~~~~~~ Sass compiliation ~~~~~~~~~~ */

    gulp.task('sass', function () {
        return gulp.src('together-we-rock-styles.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/'));
    });


    /* ~~~~~~~~~~ Clean dist folder ~~~~~~~~~~ */

    gulp.task('clean', function() {
        return del(['dist']);
    });


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Tasks ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Default task ~~~~~~~~~~ */

    gulp.task('default', ['clean'], function() {
        gulp.start('sass', 'clone-assets', 'fileinclude');
    });