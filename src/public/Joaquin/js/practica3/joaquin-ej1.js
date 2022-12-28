function overweightNames(people){
    return people
    .filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25)
    .map(p => p.name)
    .reduce((n1, n2) => n1 + ", " + n2);
}