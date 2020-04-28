const getDiff = (startDate, endDate) => {

    let diff = new Date(startDate) - new Date(endDate);

    if (startDate < endDate)
        diff = new Date(endDate) - new Date(startDate);

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const diffMin = Math.floor((diff / 1000 / 60) % 60);
    const diffSec = Math.floor((diff / 1000) % 60);

    return `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
};

export {
    getDiff
};