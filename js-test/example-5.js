import { cleanConsole, createAll } from "./data";
import usersTable from "./example-4";
const companies = createAll();

cleanConsole(5, companies);

const usersStats = (companies) => {
  const userStats = {};
  const users = usersTable(companies);
  userStats["size"] = users.length;
  let ageSum = 0;
  let hasCar = 0;
  let sumAverageWithCar = 0;
  users.map((user) => {
    ageSum += user["age"];
    if (user["car"] === true) {
      hasCar += 1;
      sumAverageWithCar += user["age"];
    }
  });
  userStats["averageAge"] = (ageSum / users.length).toPrecision(3);
  userStats["hasCar"] = hasCar;
  userStats["averageWithCar"] = (sumAverageWithCar / hasCar).toPrecision(3);
  return userStats;
};

console.log("---- SOLUTION EXAMPLE 5 --- ", usersStats(companies));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
