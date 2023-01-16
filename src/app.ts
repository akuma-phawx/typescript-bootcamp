// Intersection types allows us to combine other types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Max',
  privileges: [],
  startDate: new Date(),
};

type Combinable = string | number;

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving Truck');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo');
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(12);
  }
}

useVehicle(v1);
useVehicle(v2);
