const dayOfWeek = (date, days) => {
    const weekDays = ['Su', 'Mon', 'Tu', 'Wed', 'Thu', 'Fri', 'St'];

    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
}
const result = dayOfWeek(new Date(2020, 0, 1), 0);

console.log(result);

export { dayOfweek };