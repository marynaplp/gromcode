const getDiff = (startDate, endDate) => {
    const result = new Date(startDate) - new Date(endDate);

    if (startDate < endDate)
        result = new Date(startDate) - new Date(endDate);
    const diffDay = Math.floor(result / 1000 * 60 * 60 * 24);
    const diffHour = Math.floor((result / (1000 / 60 / 60)) % 24);
    const diffMin = Math.floor((result / (1000 / 60)) % 60);
    const diffSec = Math.floor((result / 1000) % 60);

    return `${diffDay}d, ${diffHour}h, ${diffMin}m,${diffSec}s`;
}
export { getDiff }