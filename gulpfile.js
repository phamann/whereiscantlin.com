var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssshrink = require('gulp-cssshrink');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

var SRC = './static/';
var DIST = './dist/';

gulp.task('clean', function () {
    // return gulp.src(DIST + '**/*', {read: false})
    //     .pipe(clean());
});

gulp.task('img', function() {
    gulp.src(SRC + 'img/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(DIST + 'img/'));
});

gulp.task('js', function() {
    gulp.src(SRC + 'js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(DIST + 'js/'));
});

gulp.task('lint', function() {
    return gulp.src(SRC + 'js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('template', ['sass', 'js'], function() {
    gulp.src(SRC + '**/*.html')
        .pipe(inject(gulp.src(DIST + 'css/head.css'), {
            starttag: '<style>',
            endtag: '</style>',
            transform: function (filePath, file) {
                return file.contents.toString('utf8');
            }
        }))
       .pipe(inject(gulp.src(DIST + 'js/whereabouts.js'), {
           starttag: '<script>',
           endtag: '</script>',
           transform: function (filePath, file) {
               return file.contents.toString('utf8')
           }
       }))
       .pipe(gulp.dest(DIST));
});

gulp.task('sass', function () {
    gulp.src(SRC + 'css/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'none'
        }))
        .pipe(cssshrink())
        .pipe(gulp.dest(DIST + 'css/'));
});

gulp.task('watch', function() {
    gulp.watch(SRC + 'css/**/*.scss', ['sass']);
    gulp.watch(SRC + 'js/**/*.js', ['lint', 'js']);
    gulp.watch(SRC + '**/*.html', ['template']);
});

gulp.task('dist', ['clean', 'img', 'sass', 'js', 'template']);
gulp.task('default', ['clean', 'img', 'sass', 'lint', 'js', 'template']);
