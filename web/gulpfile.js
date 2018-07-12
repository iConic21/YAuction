const gulp = require('gulp');

// plugins
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

// compile sass
gulp.task('sass', function() {
    gulp.src("./src/sass/**/*.{scss,css}")
        .pipe(sass())
        .pipe(minifycss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('App.css'))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function() {
    gulp.watch("./src/sass/**/*.{scss,css}", ['sass']);
})

gulp.task('default', ['watch']);