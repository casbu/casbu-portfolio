import concat from 'gulp-concat';
import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

var sass = gulpSass( dartSass );

var cssDest = 'css';
var cssInputFile = 'sass/main.scss';
var watchedFiles = 'sass/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(cssInputFile)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest(cssDest))
});

gulp.task('watch', function(){
    gulp.watch(watchedFiles, gulp.series(['sass']));
});