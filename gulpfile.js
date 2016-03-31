const gulp = require('gulp');
const babel = require('gulp-babel');
/* css、js压缩 */
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

/* ES6转ES5 */
gulp.task('default', () =>
gulp.src('src/app.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
);

/* css、js压缩 */
var SRC = './src/';
var DIST = './dist/';

    gulp.task('css', function() {
        return gulp.src(SRC+'**/*.css',{base:SRC})
            .pipe(minifyCss({compatibility: 'ie8'}))
            .pipe(gulp.dest('DIST'));
    });

    gulp.task('js', function() {
    return gulp.src(SRC+'**/*.js',{base:SRC})
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('DIST'));
    });

gulp.task('default',['js','css'])