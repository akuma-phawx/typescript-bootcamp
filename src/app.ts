class Department {
  //private readonly id: number
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {}

  describe(this: Department) {
    console.log(`Department is ${this.name} with id ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1, 'Accounting');

accounting.describe();
accounting.addEmployee('Jonas');
accounting.addEmployee('Sarah');
accounting.printEmployeeInformation();
