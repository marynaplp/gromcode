export const shmoment = (date) => {
    let result = new Date(date);

    const calculator = {
        add(unit, value) {
            switch (unit) {
                case "years":
                    result.setFullYear(res.getFullYear() + value);
                    return this;
                case "months":
                    result.setMonth(res.getMonth() + value);
                    return this;
                case "days":
                    result.setDate(res.getDate() + value);
                    return this;
                case "hours":
                    result.setHours(res.getHours() + value);
                    return this;
                case "minutes":
                    result.setMinutes(res.getMinutes() + value);
                    return this;
                case "seconds":
                    result.setSeconds(res.getSeconds() + value);
                    return this;
                case "milliseconds":
                    result.setMilliseconds(res.getMilliseconds() + value);
                    return this;
                default:
                    return `Incorect unit of time`;
            }
        },
        subtract(unit, value) {
            if (unit === "years") {
                result.setFullYear(res.getFullYear() - value);
                return this;
            }
            if (unit === "months") {
                result.setMonth(res.getMonth() - value);
                return this;
            }
            if (unit === "days") {
                result.setDate(res.getDate() - value);
                return this;
            }
            if (unit === "hours") {
                result.setHours(res.getHours() - value);
                return this;
            }
            if (unit === "minutes") {
                result.setMinutes(res.getMinutes() - value);
                return this;
            }
            if (unit === "seconds") {
                result.setSeconds(res.getSeconds() - value);
                return this;
            }
            if (unit === "milliseconds") {
                result.setMilliseconds(res.getMilliseconds() - value);
                return this;
            } else return `Incorect unit of time`;
        },
        result() {
            return new Date(result);
        },
    };

    return calculator;
};