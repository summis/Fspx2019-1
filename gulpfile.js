var gulp = require('gulp')
var bs = require('browser-sync').create();
var sass = require('gulp-sass');

const css = () => {
    return gulp.src('index/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('index/css'))
        .pipe(bs.stream());
}

const browserSync = () => {
    return bs.init({
        server: {
            baseDir: './index/'
        }
    });
}

const watchFiles = () => {
    gulp.watch('index/sass/*.scss', css);
    gulp.watch('index/*.html').on('change', bs.reload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
exports.css = css;
