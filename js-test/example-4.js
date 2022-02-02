import { cleanConsole, createAll } from "./data";

const companies = createAll();

cleanConsole(4, companies);

const usersTable = (companies) => {
  const usersTable = [];
  companies.map((company) => {
    company["users"].map((user) => {
      user["company"] = company["name"];
      usersTable.push(user);
    });
  });
  usersTable.sort((user1, user2) => {
    if (user1["age"] > user2["age"]) {
      return -1;
    }
    if (user1["age"] < user2["age"]) {
      return 1;
    }
    return 0;
  });
  return usersTable;
};

console.log("---- SOLUTION EXAMPLE 4 --- ", usersTable(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
