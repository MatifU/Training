var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat');
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')

function minifycss(){
    return gulp.src('assets/css/*.css')
           .pipe(cleanCSS({compatibility: 'ie8'}))
           .pipe(autoprefixer())
           .pipe(rename('style.min.css'))
           .pipe(gulp.dest('assets/build/'));
  };

function compress(){
    return  gulp.src('assets/js/*.js')
            .pipe(concat('script.js'))
            .pipe(gulp.dest('assets/js/'))
            .pipe(rename('script.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('assets/build/'));
  };

// Watch
function watch(){
    gulp.watch('assets/css/*.css', minifycss);
   gulp.watch('assets/js/*.js', compress);
};

gulp.task('default', gulp.series(minifycss, compress, watch)); 