const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Christopher',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');
// person.role[1] = 10;

let favouriteActivities: string[] = [];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

// Tuples
