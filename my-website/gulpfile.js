const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// шлях до початкових і кінцевих файлів
const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    }
};

// Компіляція SASS в CSS и мініфікація
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Конкатинація і мінімілізація JS
function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(concat('main.min.js'))
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// зміна в файлах
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

// визначення завдань
const build = gulp.series(gulp.parallel(styles, scripts), watch);

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
