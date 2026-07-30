// 1 . Arrey of odjects - fellow profiles
let fellows = [
 { name : 'John ','' Backend Dev', points: 91 },
 { name : 'Jane ',Frontend Dev', points: 85 },
 { name : 'Mike ', 'Full Stack dev' , points: 78},
 { name : 'Emily ', 'Data Scientist' , points: 88},
];
// 2. Add a new fellow using  .push
fellows.push({ name: 'Sarah', role: 'UI/UX Designer', points: 82 });
 
// 3. loop through and print formatted summary
console .log("===Fellow Summary===");
for (let fellow of fellows) {
  console.log(`Name: ${fellow.name}, Role: ${fellow.role}, Points: ${fellow.points}`);
}

// 4 . .map examples - get all names
let names = fellows.map(fellow => fellow.name);
console.log("All Fellow Names:", names);

// 5. .filter examples - fellows with points >= 80
let topfellows = fellows.filter(fellow => fellow.points >= 80);
console.log("Top performers:", topfellows);

