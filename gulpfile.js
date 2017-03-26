const gulp = require('gulp');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'docs',
            index: 'index.html'
        }
    });
});

gulp.task('sync', () => {
    browserSync.reload();
});

gulp.task('stylus', () => {
    return gulp.src('src/**/style.styl',{
            base: 'src'
        }).pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('./docs/'));
});

gulp.task('copy', () => {
    return gulp.src(['src/**/*.*', '!src/**/*.styl'], {
        base: 'src'
    }).pipe(gulp.dest('./docs/'));
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch('src/**/*.*', () => {
        runSequence(
            ['copy', 'stylus'],
            'sync'
        );
    });
});
