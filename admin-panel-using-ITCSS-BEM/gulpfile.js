var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// require browserSync plugin
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync','sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/js/*.js").on('change', browserSync.reload);
  // Other watchers
});