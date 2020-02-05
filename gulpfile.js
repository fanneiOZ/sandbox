"use strict";

var gulp = require("gulp");
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('backend-typescript', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/backend/'));
});

// TODO: Find out about gulp build pipeline
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var gutil = require('gulp-util');
// var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');
// gulp.task("build", () => {
//     var tsConfig = require("./tsconfig.json");
//     var include = tsConfig.include;
//     var scripts = gulp.src(include)
//         .pipe(ts(tsConfig.compilerOptions))
//         .pipe(gulp.dest("dist/backend/"));

//     var b = browserify({
//         entries: "./dist/backend/main.js",
//         debug: false
//     });

//     return b.bundle()
//         .pipe(source("bundle.js"))
//         .pipe(buffer())
//         .pipe(sourcemaps.init({loadMaps: true}))
//             .pipe(uglify())
//             .on("error", gutil.log)
//         .pipe(sourcemaps.write("./"))
//         .pipe(gulp.dest("./dist/build/"));
// });