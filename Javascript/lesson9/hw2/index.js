const getPeople = obj =>
    Object.values(obj).flat().map(el => el.name);