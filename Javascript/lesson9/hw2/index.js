const getPeople = obj => Object.entries(obj)
Object.values(obj).flat().map(el => el.name);