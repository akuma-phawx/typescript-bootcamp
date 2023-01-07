function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (num) => {
  console.log(num);
});
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Christopher',
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role.push('admin');
// // person.role[1] = 10;
// person.role = [2, 'S'];

// ENUM
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: 'Christopher',
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN,
// };
