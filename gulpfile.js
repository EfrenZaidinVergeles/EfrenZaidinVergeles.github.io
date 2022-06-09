const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
// const webp = require('imagemin-webp');

gulp.task('imagemin', async function (d){
    gulp.src('src/static/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/static/images/'))
});

gulp.task('run', gulp.series('imagemin'));

gulp.task('watch', async function (){
    gulp.watch('src/static/images/*', gulp.series('imagemin'));
});

gulp.task('default', gulp.series('imagemin', 'watch') );
