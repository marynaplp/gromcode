const weekDays = ['Su', 'Mon', 'Tu', 'Wed', 'Thu', 'Fri', 'St'];
const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return new Date(dateInFuture).getDay();
}
const result = dayOfWeek(new Date(2019, 0, 1), 14);

console.log(new Date(result));

export {
    dayOfweek
}