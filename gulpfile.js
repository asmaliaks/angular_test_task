var gulp = require('gulp');
var concat = require('gulp-concat');

function swallowError(error) {
    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

gulp.task('scripts', function () {
    return gulp.src(
        [
            'bower_components/angular/angular.js',
            'src/app/app.js',
            'src/app/components/common/controllers/CallListController.js',
            'src/app/components/common/controllers/NextCallController.js',
        ])
        .pipe(concat('all-js.js'))
        //.pipe(gulpif(isProduction, minify()))
        .on('error', swallowError)
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', [
    'scripts']);
