abstract class Department {
  //private readonly id: number
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, protected name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT Department');
    this.admins = admins;
  }

  describe(): void {
    console.log('ID-Departmanet', this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get theLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found');
  }

  set theLastReport(value: string) {
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting Department');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting Deprtament Rocks.', this.id, this.name);
  }
}

const it = new ITDepartment('d1', ['Jonas', 'Kostas', 'Texas']);

it.describe();
// it.addEmployee('Jonas');
// it.addEmployee('Sarah');
// it.printEmployeeInformation();
// console.log(it);

const accounting = AccountingDepartment.getInstance();
// accounting.theLastReport = 'The tEST';
// console.log(accounting.theLastReport);

// const newEmployee = Department.createEmployee('Max');
// console.log(newEmployee);
// console.log(Department.fiscalYear);
accounting.describe();
