class Department {
  //private readonly id: number
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

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

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT Department');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting Department');
  }

  addReport(text: string) {
    this.reports.push(text);
  }
}

const it = new ITDepartment('d1', ['Jonas', 'Kostas', 'Texas']);

it.describe();
it.addEmployee('Jonas');
it.addEmployee('Sarah');
it.printEmployeeInformation();
console.log(it);
