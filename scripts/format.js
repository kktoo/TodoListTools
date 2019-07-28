
const fs = require('fs');
const outputFolder = 'output';

class Format {
    constructor() {
        
    }
        
    /**
     * 格式化内容
     * @param {自然年，例如：2019} year 
     * @param {自然月，例如：12} showMonth 
     */
    FormatContent(year, showMonth) {
        let month = showMonth - 1;//date里的月份是从0起计数
        let beginTime = new Date(year, month);
        let nextTime = new Date(year, month + 1, 1);
        let finishTime = new Date(nextTime.getTime() - 24 * 60 * 60 * 1000);
        // console.log('beginTime:' + beginTime.toString());
        // console.log('nextTime:' + nextTime.toString());
        // console.log('finishTime:' + finishTime.toString());
    
        let contentStr = '================\r\n' + showMonth + '月:\r\n----\r\n';
        let beginDate = beginTime.getDate();
        let finishDate = finishTime.getDate();
        let tmpWeek = beginTime.getDay();
        for (let i = beginDate; i <= finishDate; i++) {
            contentStr += showMonth + '.' + i + ' ';
            contentStr += this.WeekToString(tmpWeek) + '\r\n';
            ++tmpWeek;
            tmpWeek %= 7;
        }
    
        return contentStr;
    }
    
    /**
     * 周数据对应的周名称
     * @param {周数据，0-6} week 
     */
    WeekToString(week) {
        switch (week) {
            case 0:
                return '周日\r\n-----------------';
            case 1:
                return '周一';
            case 2:
                return '周二';
            case 3:
                return '周三';
            case 4:
                return '周四';
            case 5:
                return '周五';
            case 6:
                return '周六';
            default:
                return 'error'
        }
    }
    
    OutputToConsole(inputYear, inputMonth) {
        console.log(this.FormatContent(inputYear, inputMonth));
    }
    OutputToFile(inputYear, inputMonth, inputfileName) {
        let fullPath = outputFolder + '/' + inputfileName;
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }
        fs.writeFile(fullPath, this.FormatContent(inputYear, inputMonth), {}, (error) => {
            if (-1 != [null, undefined].indexOf(error)) {
                console.log('write file success');
            } else {
                console.log('write file failed:', error);
            }
        });
    }
};
module.exports= Format;
