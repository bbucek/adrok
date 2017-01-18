/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Load plugins ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var gulp = require('gulp'),
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


    /* ~~~~~~~~~~ Clean styles, scripts, and images ~~~~~~~~~~ */

    gulp.task('clean', function() {
        return del(['dist']);
    });


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Tasks ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Default task ~~~~~~~~~~ */

    gulp.task('default', ['clean'], function() {
        gulp.start('fileinclude');
    });