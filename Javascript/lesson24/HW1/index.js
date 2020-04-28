const getDiff = (startDate, endDate) => {

    let diff = new Date(startDate) - new Date(endDate);

    if (startDate < endDate)
        diff = new Date(endDate) - new Date(startDate);

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const diffmin = Math.floor((diff / 1000 / 60) % 60);
    const diffsec = Math.floor((diff / 1000) % 60);

    return `${diffDay}d ${diffHour}h ${diffmin}m ${diffmin}s`;
};

export {
    getDiff
};