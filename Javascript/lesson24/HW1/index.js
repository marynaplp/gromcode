const getDiff = (startDate, endDate) => {
    let result = new Date(startDate - endDate);

    if (startDate < endDate)
        result = new Date(endDate) - new Date(startDate);
    const diffDay = Math.floor(result / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((result / (1000 / 60 / 60)) % 24);
    const diffMin = Math.floor((result / (1000 / 60)) % 60);
    const diffSec = Math.floor((result / 1000) % 60);

    return `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}
export { getDiff }