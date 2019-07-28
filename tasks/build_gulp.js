var gulp = require('gulp');
var minimist = require('minimist');
var Format = require('../scripts/format');

//获取命令行参数
var knownOptions = {
    string: 'arguments',
    default: {
        year: process.env.NODE_ENV || '2019',
        month: process.env.NODE_ENV || '1',
        filename: process.env.NODE_ENV || 'output'
    }
};
var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('toConsole', async function () {
    //console.log('task:output to console');
    let format = new Format();
    await format.OutputToConsole(options.year, options.month);
});

gulp.task('toFile', async function () {
    //console.log('task:output to file', options.year, options.month, options.filename);
    let format = new Format();
    await format.OutputToFile(options.year, options.month, options.filename);
});

/**
 * use:
 * gulp publish --year=2019 --month=5 --path=110.txt
 */
//gulp.task('publish', gulp.series(gulp.parallel('toConsole', 'toFile')));
gulp.task('publish', gulp.series(gulp.parallel(['toConsole', 'toFile'])));
//gulp.task('publish', gulp.series(gulp.parallel('toFile')));
