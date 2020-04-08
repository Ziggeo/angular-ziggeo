const gulp = require('gulp');
const inlineTemplates = require('gulp-inline-ng2-template');
const exec = require('child_process').exec;

/**
 * Inline templates configuration.
 * @see  https://github.com/ludohenin/gulp-inline-ng2-template
 */
const INLINE_TEMPLATES = {
    SRC: './src/**/*.ts',
    BUILD: './tmp/src-inlined',
    CONFIG: {
        base: '/src',
        target: 'es6',
        useRelativePaths: true
    }
};

/**
 * Inline external HTML and SCSS templates into Angular component files.
 * @see: https://github.com/ludohenin/gulp-inline-ng2-template
 */
gulp.task('inline-templates', () => {
    return gulp.src(INLINE_TEMPLATES.SRC)
        .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
        .pipe(gulp.dest(INLINE_TEMPLATES.BUILD));
});

/**
 * Build ESM by running npm task.
 * This is a temporary solution until ngc is supported --watch mode.
 * @see: https://github.com/angular/angular/issues/12867
 */
gulp.task('build:esm', ['inline-templates'], (callback) => {
    exec('npm run ngcompile', function (error, stdout, stderr) {
        console.log(stdout, stderr);
        callback(error)
    });
});

/**
 * Implements ESM build watch mode.
 * This is a temporary solution until ngc is supported --watch mode.
 * @see: https://github.com/angular/angular/issues/12867
 */
gulp.task('build:esm:watch', ['build:esm'], () => {
    gulp.watch('src/**/*', ['build:esm']);
});