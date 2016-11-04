"use strict";

const gulp = require("gulp");
const sync = require("gulp-config-sync");

module.exports = function() {
    gulp.task("sync", function() {
        gulp.src("bower.json")
            .pipe(sync())
            .pipe(gulp.dest("."));
    });
};
