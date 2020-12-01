const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('jade', function () {
  return gulp
    .src('src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'));
});