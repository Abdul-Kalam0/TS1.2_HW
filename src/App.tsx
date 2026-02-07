import "./styles.css";

export default function App() {
  //q1
  let id: string | Number = 10;
  id = "abdul";

  type status = "active" | "inactive" | "pending";
  let status: status;
  status = "active";

  let input: boolean | null = null;

  type numberOrStringArray = (number | string)[];
  let numberOrStringArray: numberOrStringArray = [1, 2, "three"];

  //Q2
  type Person = { name: string; age: number };

  let person: Person = {
    name: "abdul",
    age: 20,
  };

  type Student = Person & {
    studentId: number;
  };

  let student: Student = {
    name: "abdul",
    age: 28,
    studentId: 0,
  };

  type Teacher = Person & {
    subject: string;
  };

  const Teacher: Teacher = {
    name: "abdul",
    age: 28,
    subject: "SPM",
  };

  type Employee = Student & {
    company: string;
  };

  const WorkingStudent: Employee = {
    name: "abdul",
    age: 28,
    studentId: 2,
    company: "Amazon",
  };

  type Address = Teacher & {
    city: string;
    zipCode: number;
  };

  const fullProfile: Address = {
    name: "abdul",
    age: 20,
    subject: "SPM",
    city: "Bareilly",
    zipCode: 123456,
  };

  type Vehicle = {
    make: string;
    year: number;
  };

  const Vehicle: Vehicle = {
    make: "Hyundai",
    year: 1997,
  };

  type Car = Vehicle & {
    seats: number;
  };

  const Car: Car = {
    make: "Honda",
    year: 1952,
    seats: 20,
  };

  type Bike = Vehicle & {
    tyre: string;
  };

  const Bike: Bike = {
    make: "Hero",
    year: 1996,
    tyre: "Dunlop",
  };

  type Battery = {
    capacity: number;
  };

  type ElectricCar = Battery & Car;
  const ElectricCar: ElectricCar = {
    make: "Rolls Royce",
    year: 1887,
    seats: 5,
    capacity: 800,
  };

  type Registration = {
    regNumber: string;
    ownerName: string;
  };

  type BikeDetails = Bike & Registration;
  const bikeDetails: BikeDetails = {
    make: "Yamaha",
    year: 2022,
    tyre: "Ciat",
    regNumber: "KA01AB1234",
    ownerName: "abdul",
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
