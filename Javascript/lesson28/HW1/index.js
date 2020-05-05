export const shmoment = (date) => {
    let result = new Date(date);

    const calculator = {
        add(unit, value) {
            switch (unit) {
                case "years":
                    result.setFullYear(result.getFullYear() + value);
                    return this;
                case "months":
                    result.setMonth(result.getMonth() + value);
                    return this;
                case "days":
                    result.setDate(result.getDate() + value);
                    return this;
                case "hours":
                    result.setHours(result.getHours() + value);
                    return this;
                case "minutes":
                    result.setMinutes(result.getMinutes() + value);
                    return this;
                case "seconds":
                    result.setSeconds(result.getSeconds() + value);
                    return this;
                case "milliseconds":
                    result.setMilliseconds(result.getMilliseconds() + value);
                    return this;
                default:
                    return `Incorect unit of time`;
            }
        },
        subtract(unit, value) {
            if (unit === "years") {
                result.setFullYear(result.getFullYear() - value);
                return this;
            }
            if (unit === "months") {
                result.setMonth(result.getMonth() - value);
                return this;
            }
            if (unit === "days") {
                result.setDate(result.getDate() - value);
                return this;
            }
            if (unit === "hours") {
                result.setHours(result.getHours() - value);
                return this;
            }
            if (unit === "minutes") {
                result.setMinutes(result.getMinutes() - value);
                return this;
            }
            if (unit === "seconds") {
                result.setSeconds(result.getSeconds() - value);
                return this;
            }
            if (unit === "milliseconds") {
                result.setMilliseconds(result.getMilliseconds() - value);
                return this;
            } else return `Incorect unit of time`;
        },
        result() {
            return new Date(result);
        },
    };

    return calculator;
};