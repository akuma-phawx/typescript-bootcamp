interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}
let user1 = new Person('Texas BBWQ');
user1.greet('test test');
