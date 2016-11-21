var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var annotate = require('gulp-ng-annotate');

var paths = {
    jsSource: ['./public/js/**/*.js'],
    sassSource: ['./public/styles/**/*.scss'],
    indexSource: ['./public/index.html'],
    viewsSource: ['./public/views/**/*.html']
};

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(gulp.dest('./dist'))
});

gulp.task('views', function() {
    gulp.src(paths.viewsSource)
        .pipe(gulp.dest("./dist/views"))
})

gulp.task('index', function() {
    gulp.src(paths.indexSource)
        .pipe(gulp.dest("./dist"))
})

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.indexSource, ['index']);
    gulp.watch(paths.viewsSource, ['views']);
});

gulp.task('default', ['js', 'sass', 'index', 'views', 'watch']);