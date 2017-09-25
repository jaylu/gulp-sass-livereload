var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var open = require('gulp-open');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('open',['connect', 'watch', 'sass'], function(){
  gulp.src('')
  .pipe(open({uri: 'http://localhost:8080/flex_box.html', app: 'Google Chrome'}));
});

gulp.task('default', ['open']);

