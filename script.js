const units = [new Unit('Virus', 200, 500)]

units.push(units[0].clone());

console.log(units);


const squad = new Squad(units);

console.log(squad);