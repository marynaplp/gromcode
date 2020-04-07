function createLogger(obj) {
    let memo = [];
    return {
        warn: text => {
            memo({
                message: text,
                dateTime: newTime,
                type: 'warn',

            })
        },
        error: text => {
            memo({
                message: text,
                dateTime: newTime,
                type: 'error',


            })
        },
        log: text => {
            memo({
                message: text,
                dateTime: newTime,
                type: 'log',

            })

        },


        getRecords: type => {

            if (type === undefined) {
                return memo.sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return memo
                    .filter(el => el.type === type)
                    .sort((a, b) => b.message - a.message);
            }


        }
    }
};