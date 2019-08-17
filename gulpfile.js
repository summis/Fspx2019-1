var gulp = require('gulp')
var bs = require('browser-sync').create();
var sass = require('gulp-sass');

const css = () => {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.stream());
}

const browserSync = () => {
    return bs.init({
        server: {
            baseDir: './'
        }
    });
}

const watchFiles = () => {
    gulp.watch('sass/*.scss', css);
    gulp.watch('*.html').on('change', bs.reload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
exports.css = css;
