var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var ignore = require('gulp-ignore');
var gutil = require('gulp-util');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('serve',['sass', 'compress'], function() {
    browserSync.init({
        server: "."
    });
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['compress']);
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.scss').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
});

gulp.task('compress', function() {
  return gulp.src('src/js/**.js')
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    sass('src/scss/index.scss', {sourcemap: true, style: 'compact'})
        .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
        .pipe(sourcemaps.write())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('dist'));
});



gulp.task('default', ['serve']);
