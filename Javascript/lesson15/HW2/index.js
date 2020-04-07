const createLogger = (obj) => {
    let memo = [];
    return {
        warn: text => {
            memo.push({
                message: text,
                dateTime: newTime,
                type: 'warn',

            })
        },
        error: text => {
            memo.push({
                message: text,
                dateTime: newTime,
                type: 'error',


            })
        },
        log: text => {
            memo.push({
                message: text,
                dateTime: newTime,
                type: 'log',

            })

        },


        getRecords: type => {

            if (type == undefined) {
                return memo.sort((a, b) => a.dateTime < b.dateTime);
            } else {
                return memo
                    .filter(el => el.type == type)
            }


        }
    }
};
export { createLogger };