var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var compass = require('gulp-compass');
// var sass        = require('gulp-sass');

// 服務
gulp.task('serve', ['sass'], function () {
    browserSync.init({
    server: {
      baseDir: "./"
    },
    startPath: "index.html"
    });
});

// 監看工作
gulp.task('watch', function () {

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// 編譯 SASS 檔案
gulp.task('sass', function() {

  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      // css: 'css',
      // sass: 'sass'
    }))
    .pipe(gulp.dest('app/assets/temp'));

    setTimeout(function() {
      browserSync.reload();
    }, 1000);
    
});


gulp.task('default', ['serve', 'watch']);