const getDiff = (startDate, endDate) => {
    const result = new Date(startDate) - new Date(endDate);

    if (startDate < endDate)
        result = new Date(startDate) - new Date(endDate);
    const diffDay = parseInt(result / (1000 * 60 * 60 * 24));
    const diffHour = parseInt((result / (1000 * 60 * 60)) % 24);
    const diffMin = parseInt((result / (1000 * 60)) % 60);
    const diffSec = parseInt((result / 1000) % 60);

    return `${diffDay}d, ${diffHour}h, ${diffMin}m,${diffSec}s`;
}
export { getDiff }