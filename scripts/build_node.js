const Format = require('./Format');

/**
 * use:
 * node ./tasks/format.js 
 */
function Publish() {
    let _inputYear = 2019;
    let _inputMonth = 1;
    let _inputfileName = 'output.txt';
    
    //node格式获取命令行参数
    var arguments = process.argv.slice(2);
    //console.log('arguments:', arguments);
    if (-1 == [null, undefined].indexOf(arguments[0])) {
        _inputYear = arguments[0];
    }
    if (-1 == [null, undefined].indexOf(arguments[1])) {
        _inputMonth = arguments[1];
    }
    if (-1 == [null, undefined].indexOf(arguments[2])) {
        _inputfileName = arguments[2];
    }

    let format = new Format();
    format.OutputToConsole(_inputYear, _inputMonth);
    format.OutputToFile(_inputYear, _inputMonth, _inputfileName);
}

Publish();
