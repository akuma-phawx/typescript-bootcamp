type AddFn = (a: number, b: number) => number;

interface AddFn2 {
  (a: number, b: number): number;
}

interface Named {
  readonly name?: string;
  nickname?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(n1: number, n?: string) {
    if (n) {
      this.name = n;
    }
    this.age = n1;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Greetable = new Person(12);
user1.greet('test test');
