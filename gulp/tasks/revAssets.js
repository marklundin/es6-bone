import gulp       from 'gulp';
import filter     from 'gulp-filter';
import rev        from 'gulp-rev';
import pkg        from '../../package.json';
import del        from 'del';
import vinylPaths from 'vinyl-paths';

const exts = ['css', 'js'];
const re   = new RegExp('(-[a-z0-9]{8})(.('+exts.join('|')+'))$', 'i');

const src  = pkg.folders.dest+'/**/*.{'+exts.join(',')+'}';
const dest = pkg.folders.dest;

gulp.task('_versionCleanAssets', () => {

    return gulp.src(src)
        .pipe(rev())
        .pipe(gulp.dest(dest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'));

});

gulp.task('revAssets', ['_versionCleanAssets'], () => {

    const unHashedFilter = filter((file) => { return !re.test(file.path); });

    return gulp.src(src)
        .pipe(unHashedFilter)
        .pipe(vinylPaths(del))
});
